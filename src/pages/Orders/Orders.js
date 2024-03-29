import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import orderImg from '../../assets/images/order/order.gif';
import useTitle from '../../hooks/useTitle';

const Orders = () => {
    useTitle('Order');
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-eight-sigma.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = (id) => {
       
            fetch(`https://genius-car-server-eight-sigma.vercel.app/order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Delete successfully');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        
    };

    const handleStatusUpdate = (id) => {
        fetch(`https://genius-car-server-eight-sigma.vercel.app/order/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id);
                    const approving = orders.find(order => order._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    };

    return (
        <section className='px-4 lg:px-8 lg:py-4 mb-10'>
            {
                orders.length > 0 ?
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Service or Product</th>
                                    <th>Price</th>
                                    <th>Name & Email</th>
                                    <th>Phone</th>
                                    <th>Date</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OrderRow
                                        key={order._id}
                                        order={order}
                                        handleDelete={handleDelete}
                                        handleStatusUpdate={handleStatusUpdate}
                                    ></OrderRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='flex justify-center'>
                        <img src={orderImg} alt="" />
                    </div>
            }
        </section>
    );
};

export default Orders;