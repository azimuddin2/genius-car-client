import React from 'react';
import { PiWarningCircleLight } from 'react-icons/pi';

const ConfirmationModal = ({ closeModal, successModal, modalData, name }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <PiWarningCircleLight style={{ color: '#f8bb86', fontSize: '100px' }} className='mx-auto'></PiWarningCircleLight>
                    <h3 className="font-medium text-4xl text-center">Are you sure?</h3>
                    <p className="py-4 text-center text-xl font-medium">{name}</p>
                    <div className="modal-action justify-center">
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn text-white">Cancel</label>
                        <label onClick={() => successModal(modalData)} htmlFor="confirmation-modal" className="btn btn-primary text-white">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;