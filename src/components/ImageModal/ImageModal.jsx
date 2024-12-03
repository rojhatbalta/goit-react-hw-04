import Modal from "react-modal";
import Styles from "./ImageModal.module.css";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

export default function ImageModal({ isModalOpen, closeModal, modalImg }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={Styles.modal}
      overlayClassName={Styles.overlay}
    >
      <button className={Styles.closeBtn} onClick={closeModal}>
        &#10006;
      </button>

      {modalImg && (
        <>
          <img
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src={modalImg.urls.regular}
            alt={modalImg.alt_description}
          />
        </>
      )}
    </Modal>
  );
}

ImageModal.propTypes = {
  isModalOpen: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalImg: PropTypes.object.isRequired,
};
