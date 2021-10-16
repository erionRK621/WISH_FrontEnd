import React, {useContext} from 'react';
import ReactModal from 'react-modal';

const Modals = ({isOpen}) => {
    return (
        <ReactModal isOpen = {isOpen}>
            <div>모달</div>
        </ReactModal>
    )
}

export default Modals
