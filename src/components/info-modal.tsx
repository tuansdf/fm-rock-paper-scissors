import Modal from "./ui/modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export function InfoModal({ isOpen, closeModal }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title={
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black uppercase">rules</span>
          <button onClick={closeModal}>
            <img src="/icon-close.svg" alt="close" />
          </button>
        </div>
      }
    >
      <div className="flex items-center justify-center px-8 pt-12 pb-4">
        <img src="/image-rules.svg" alt="rules" />
      </div>
    </Modal>
  );
}
