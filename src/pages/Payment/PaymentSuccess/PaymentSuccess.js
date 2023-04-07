import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');

    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-eight-sigma.vercel.app/order/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transactionId])

    if (!order?._id) {
        return (
            <div className='py-12'>
                <MdDoNotDisturbAlt className='text-8xl md:text-9xl text-red-500 mx-auto'></MdDoNotDisturbAlt>
                <p className='text-3xl md:text-4xl text-red-500 text-center'>No order found!</p>
            </div>
        )
    }

    return (
        <div className='lg:py-4 px-4 lg:px-8'>
            <div className='text-center'>
                <IoCheckmarkCircleSharp className='text-green-500 text-8xl md:text-9xl mx-auto'></IoCheckmarkCircleSharp>
                <h1 className='text-3xl md:text-5xl text-green-400'>congratulations!</h1>
                <p className='text-lg md:text-2xl mt-2'>Order Paid Successful</p>
            </div>
            <div className="overflow-x-auto w-full mb-10 mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Service or Product</th>
                            <th>Price</th>
                            <th>Currency</th>
                            <th>Date</th>
                            <th>TransactionId</th>
                            <th className='print:hidden'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {order.title}
                            </td>
                            <td className='font-semibold text-green-600'>${order.price}</td>
                            <td>{order.currency}</td>
                            <td>{order.paidAt.slice(0, 10)}</td>
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