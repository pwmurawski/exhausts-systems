import { createPortal } from "react-dom";

export default function Modal(Component: () => JSX.Element, elementId: string) {
  return () => {
    const modalEl = document.getElementById(elementId);
    return modalEl ? createPortal(<Component />, modalEl) : null;
  };
}
