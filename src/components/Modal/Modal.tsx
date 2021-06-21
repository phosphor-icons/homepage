import React from "react";
import { useRecoilState } from "recoil";
import { useLockBodyScroll } from "react-use";
import { useHotkeys } from "react-hotkeys-hook";

import { modalOpenAtom } from "../../state/atoms";
import DonationModal from "./DonationModal";

import "./Modal.css";

const Modal: React.FC<{}> = () => {
  const [isModalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
  useHotkeys("esc", () => isModalOpen && setModalOpen(false), [isModalOpen]);
  useLockBodyScroll(isModalOpen);

  if (!isModalOpen) return null;

  return (
    <div className="modal-container">
      <DonationModal />
    </div>
  );
};

export default Modal;
