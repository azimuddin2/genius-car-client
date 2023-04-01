import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');

    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/order/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transactionId])

    if(!order?._id){
        return (
            <div>
                <p>No order found!</p>
            </div>
        )
    }

    return (
        <div className='mt-10 mb-20'>
            <div className='text-center'>
                <IoCheckmarkCircleSharp className='text-green-500 text-9xl mx-auto'></IoCheckmarkCircleSharp>
                <h1 className='text-5xl text-green-400'>congratulations!</h1>
                <p className='text-2xl mt-2'>Order Paid Successful</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Currency</th>
                            <th>Shipping Address</th>
                            <th>TransactionId</th>
                            <th className='print:hidden'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {order.serviceName}
                            </td>
                            <td className='font-semibold text-green-600'>${order.servicePrice}</td>
                            <td>{order.currency}</td>
                            <td>{order.address}</td>
                            <td>{order.transactionId}</td>
                            <td>
                                <button
                                    onClick={() => window.print()}
                                    className='btn text-white print:hidden'
                                >
                                    Print
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentSuccess;