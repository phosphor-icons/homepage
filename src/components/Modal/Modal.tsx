import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useLockBodyScroll } from "react-use";
import { useHotkeys } from "react-hotkeys-hook";
import { X } from "phosphor-react";

import { modalAtom, modalOpenAtom } from "state/atoms";

import "./Modal.css";

export interface ModalInstance {
  close: () => void;
  children?: JSX.Element;
}

const Modal = (): JSX.Element | null => {
  const Instance = useRecoilValue(modalAtom);
  const [isModalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
  useHotkeys("esc", () => isModalOpen && setModalOpen(false), [isModalOpen]);
  useLockBodyScroll(isModalOpen);

  const close = () => setModalOpen(false);

  if (!Instance || !isModalOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-close-button" onClick={close}>
          <X size={32} />
        </button>
        <Instance close={close} />
      </div>
    </div>
  );
};

export default Modal;
