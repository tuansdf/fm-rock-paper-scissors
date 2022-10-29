import { Dialog } from "@headlessui/react";
import { ComponentChildren, VNode } from "preact";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: ComponentChildren;
  title: VNode;
}

export default function Modal({ isOpen, closeModal, children, title }: Props) {
  return (
    // <Transition
    //   show={isOpen}
    //   enter="transition duration-100 ease-out"
    //   enterFrom="transform scale-95 opacity-0"
    //   enterTo="transform scale-100 opacity-100"
    //   leave="transition duration-75 ease-out"
    //   leaveFrom="transform scale-100 opacity-100"
    //   leaveTo="transform scale-95 opacity-0"
    //   as={Fragment}
    // >
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-25">
        <div className="flex min-h-full items-center justify-center p-8 text-center">
          <Dialog.Panel className="transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title>{title}</Dialog.Title>

            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
    // </Transition>
  );
}
