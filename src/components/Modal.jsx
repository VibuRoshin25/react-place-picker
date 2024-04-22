import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    const dialogElement = dialog.current;
    if (open) {
      dialogElement.showModal();
    } else {
      dialogElement.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
