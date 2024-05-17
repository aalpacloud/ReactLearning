import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  style?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

function Button({ children, onClick, style = "primary" }: Props) {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + style}>
      {children}
    </button>
  );
}

export default Button;
