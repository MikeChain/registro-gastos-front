import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './Toast.scss';
import { Check, Error, Info, Warning } from '../../utils/icons';
import { ToastCheck, ToastError, ToastInfo, ToastWarning } from '../../utils/toastConstants';
import { useToast } from '../../hooks/useToast';

export const Toast = ({ position, autoDelete, dismissTime }) => {

  const [toastList, , deleteToast] = useToast();
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id)
      }
    }, dismissTime * 1000);
    return () => {
      clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastList, autoDelete, dismissTime, list]);

  const getTypeIcon = (type) => {
    switch (type) {
      case ToastCheck:
        return <Check />;
      case ToastError:
        return <Error />;
      case ToastInfo:
        return <Info />;
      case ToastWarning:
        return <Warning />;
      default:
        break;
    }
  }

  return ReactDom.createPortal(
    <>
      <div className={`notification-container ${position}`}>

        {
          list.map((toast, i) => (
            <div
              key={i}
              className={`notification ${position} ${toast.type}`}
              onClick={() => deleteToast(toast.id)}
            >

              <div className='notification__title'>
                <p>
                  {toast.title}
                </p>

                {getTypeIcon(toast.type)}
              </div>

              <p className='notification__body'>
                {toast.description}
              </p>

            </div>
          ))
        }

      </div>

    </>,
    document.getElementById('portal')
  )
}

Toast.defaultProps = {
  position: 'bottom-right'
}

Toast.propTypes = {
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  dismissTime: PropTypes.number
}