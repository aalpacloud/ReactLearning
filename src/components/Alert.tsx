import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function Alert({ children, onClick }: Props) {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="Alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Alert;
