import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, service, serviceName, servicePrice, customer, email, phone, status, paidAt, paid, transactionId } = order;
    const [orderService, setOrderService] = useState({});
    const [deleteService, setDeleteService] = useState(null);

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
            <td>{paidAt?.slice(0, 10)}</td>
            <td>
                {
                    paid ?
                        <p className='text-green-400'>success</p>
                        :
                        <p className='text-primary'>unsuccess</p>
                }
            </td>
            <td>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className={status ? 'btn btn-sm capitalize text-white btn-success' : 'btn btn-sm capitalize text-white btn-primary'}>
                    {status ? status : 'Pending'}
                </button>
            </td>
            <th>
                <label onClick={() => setDeleteService(order._id)} htmlFor="confirmation-modal">
                    <RiDeleteBinLine
                        className='text-primary text-2xl cursor-pointer'
                    >
                    </RiDeleteBinLine>
                </label>
            </th>
            {
                deleteService && <ConfirmationModal
                    modalData={order._id}
                    name={serviceName}
                    successModal={handleDelete}
                // closeModal={handleCloseModal}
                ></ConfirmationModal>
            }
        </tr>
    );
};

export default OrderRow;