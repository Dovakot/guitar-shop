import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

import {ModalType, DEFAULT_PAGE_PATH} from '../../../../const';
import {isActive} from '../../../../utils/utils';
import {getStateModalPreorder, getPreorder} from '../../../../store/reducers/cart-data/selectors';
import {
  setStateModalPreorder,
  addItemToOrder,
  setUpdateTypeDelete,
  deleteItemInOrder,
  setInfoModalPreorder,
  applyDiscount
} from '../../../../store/reducers/cart-data/cart-data';

import Modal from '../../../modal/modal';
import UpdateMessage from './update-message/update-message';
import SuccessMessage from './success-message/success-message';

function ModalPreorder(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const {id} = useParams<{id: string}>();
  const [modalType, setModalType] = useState<string>('');
  const {isModalPreorderHidden} = useSelector(getStateModalPreorder);
  const {id: orderId} = useSelector(getPreorder);

  const setStateModal = (isHidden: boolean) => {
    dispatch(setStateModalPreorder(isHidden));
    dispatch(setUpdateTypeDelete(false));
    dispatch(setInfoModalPreorder({}));
    setModalType('');
  };

  const handleButtonReturnClick = () => {
    if (id) {
      history.push(DEFAULT_PAGE_PATH);
    }

    setStateModal(true);
  };

  const handleButtonAddClick = async () => {
    await dispatch(addItemToOrder(orderId));
    dispatch(applyDiscount());
    setModalType(ModalType.Success);
  };

  const handleButtonDeleteClick = async () => {
    await dispatch(deleteItemInOrder(orderId));
    dispatch(applyDiscount());
    setStateModal(true);
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
