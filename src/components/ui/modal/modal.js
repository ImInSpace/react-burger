import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { ModalHeader } from "./modal-header/modal-header";
import { useDispatch } from "react-redux";
import { CLOSE_INGREDIENTS_DETAILS } from "../../../services/actions/ingredients";
import { CLOSE_ORDER_MODAL } from "../../../services/actions/order";
import { useNavigate } from "react-router";

function Modal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const portal = document.getElementById("react-modals");
  const modalDivRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  const keyDownHandler = (args) => {
    if (args.key === "Escape") {
      close();
    }
  };

  const close = () => {
    dispatch({ type: CLOSE_INGREDIENTS_DETAILS });
    dispatch({ type: CLOSE_ORDER_MODAL });
    navigate(-1);
  };

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeHandler={close} />
      <div className={styles.modal} onKeyDown={close} ref={modalDivRef}>
        <ModalHeader caption={props.caption} closeHandler={close} />
        {props.children}
      </div>
    </>,
    portal
  );
}

Modal.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export { Modal };
