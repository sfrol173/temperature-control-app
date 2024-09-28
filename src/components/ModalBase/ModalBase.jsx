import React from "react";
import ModalBox from "./ModalBox";
import ModalClose from "./ModalClose";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";

const ModalBase =({onClose, isOpen, onModal})=>{
    return (
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox>
                <ModalClose onClick={onClose}/>
                <ModalHeader>BaseModel</ModalHeader>
                <ModalContent>BaseModelContent</ModalContent>
                <ModalFooter>
                <div className="button-wrapper">
                    <button type="button" className="modal-btn" onClick={onModal}>OK</button>
                    <button type="button" className="modal-btn"  onClick={onClose}>Cansel</button>
                </div>
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
    )
}

export default ModalBase;