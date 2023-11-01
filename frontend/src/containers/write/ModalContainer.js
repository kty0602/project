import { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/common/Modal";
import { useDispatch } from "react-redux";
import { checkOption } from "../../modules/write";

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 16px;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  margin-left: 6rem;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const ModalContainer = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOptionCheck = (category, option) => {
    dispatch(checkOption({ category, option }));
  };

  return (
    <div>
      <Button onClick={openModal}>추가 옵션</Button>

      <Modal isOpen={modalOpen} onClose={closeModal} handleOptionCheck={handleOptionCheck} />
    </div>
  );
};

export default ModalContainer;
