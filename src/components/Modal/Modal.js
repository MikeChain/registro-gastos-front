import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';


export const Modal = ({ show, handleClose, children }) => {

  const click = () => {
    handleClose();
  }

  return (
    show &&

    <>
      <div className='overlay' onClick={click} />
      <div className='modal'>
        <span aria-hidden={true} onClick={click} >X Cerrar</span>
        {
          children
        }
      </div>
    </>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
}
