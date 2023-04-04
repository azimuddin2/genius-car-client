import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import orderImg from '../../assets/images/order/order.png';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, img, title, price, customer, email, phone, status, paidAt, paid } = order;
    const [deleteService, setDeleteService] = useState(null);

    return (
        <tr>
            <td>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-lg">
                            {
                                img ?
                                    <img src={img} alt="Service" />
                                    :
                                    <img src={orderImg} alt="Product" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold ml-5">{title}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold text-green-600'>${price}</td>
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
                    name={title}
                    successModal={handleDelete}
                // closeModal={handleCloseModal}
                ></ConfirmationModal>
            }
        </tr>
    );
};

export default OrderRow;