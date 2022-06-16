import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

import {ModalType, DEFAULT_PAGE_PATH} from '../../../../const';
import {isActive} from '../../../../utils/utils';
import {getStateModalPreorder, getPreOrderId} from '../../../../store/reducers/cart-data/selectors';
import {
  setStateModalPreorder,
  addItemToOrder,
  setUpdateTypeDelete
} from '../../../../store/reducers/cart-data/cart-data';

import Modal from '../../../modal/modal';
import UpdateMessage from './update-message/update-message';
import SuccessMessage from './success-message/success-message';

function ModalPreorder(): JSX.Element {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState<string>('');
  const {isModalPreorderHidden} = useSelector(getStateModalPreorder);
  const orderId = useSelector(getPreOrderId);

  const history = useHistory();
  const {id} = useParams<{id: string}>();

  const setStateModal = (isHidden: boolean) => {
    dispatch(setStateModalPreorder(isHidden));
    setModalType('');
  };

  const handleButtonReturnClick = () => {
    if (id) {
      history.push(DEFAULT_PAGE_PATH);
    }

    setStateModal(true);
  };

  const handleButtonAddClick = () => {
    setModalType(ModalType.Success);
    dispatch(addItemToOrder(orderId));
  };

  const handleButtonDeleteClick = () => {
    dispatch(setUpdateTypeDelete(true));
  };

  const getModalContent = () => isActive(modalType, ModalType.Success)
    ? <SuccessMessage onButtonClick={handleButtonReturnClick} />
    : (
      <UpdateMessage
        onButtonAddClick={handleButtonAddClick}
        onButtonDeleteClick={handleButtonDeleteClick}
        onButtonReturnClick={handleButtonReturnClick}
      />
    );

  return (
    <Modal
      modifier={modalType}
      setStateModal={setStateModal}
      isModalHidden={isModalPreorderHidden}
    >
      {getModalContent()}
    </Modal>
  );
}

export default ModalPreorder;
