import { Link } from "react-router-dom";

export const BlankLinkButton = ({ children, to, className, disabled }) => {
  return (
    <Link
      to={to}
      className={`inline-block ${className}`}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
};
