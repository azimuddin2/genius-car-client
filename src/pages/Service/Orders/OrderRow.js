import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, service, serviceName, servicePrice, customer, email, phone, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    return (
        <tr>
            <td>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-lg">
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold ml-5">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold text-green-600'>${servicePrice}</td>
            <td>
                {customer}
                <br />
                <span className="text-base opacity-50">{email}</span>
            </td>
            <td>{phone}</td>
            <td>
                {
                    status ?
                    <button className='btn btn-success'>{status}</button>
                    :
                    <button className='btn btn-primary btn-sm capitalize text-white'>Pending</button>
                }
            </td>
            <th>
                <RiDeleteBinLine
                    onClick={() => handleDelete(_id)}
                    className='text-primary text-2xl cursor-pointer'
                >
                </RiDeleteBinLine>
            </th>
        </tr>
    );
};

export default OrderRow;