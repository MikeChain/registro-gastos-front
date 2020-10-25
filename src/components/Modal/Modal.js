import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';


export const Modal = ({ show, title, handleClose, children }) => {

  const click = () => {
    handleClose();
  }

  return ReactDom.createPortal(
    show &&

    <>
      <div className='overlay' onClick={click} />
      <div className='modal'>
        <div className='modal__title'>
          <h1>{title}</h1>
          <span aria-hidden={true} onClick={click} >&times; Cerrar</span>
        </div>

        <hr />

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
