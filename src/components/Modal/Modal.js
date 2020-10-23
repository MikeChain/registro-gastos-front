import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';


export const Modal = ({ show, handleClose, children }) => {

  const click = () => {
    handleClose();
  }

  return ReactDom.createPortal(
    show &&

    <>
      <div className='overlay' onClick={click} />
      <div className='modal'>
        <span aria-hidden={true} onClick={click} >X Cerrar</span>
        {
          children
        }
      </div>
    </>,
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
}
