import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import {color, convertHexToRgba} from '../../colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${convertHexToRgba(color.dark1.bg, 0.2)};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = ({showModal, setShowModal, children}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config:{
      duration: 200
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0
  });

  const closeModal = (e) => {
    if(modalRef.current === e.target){
      setShowModal(false);
    }
  }

  const keyPress = useCallback((e) => {
    if(e.key === 'Escape' && showModal){
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <animated.div style={animation}>
          <Container
            ref={modalRef}
            onClick={closeModal}
            >
            {children}
          </Container>
        </animated.div>
      ) : null}
    </>
  )
}

export default Modal;
