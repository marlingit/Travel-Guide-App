import { Link } from "react-router-dom";
import { memo } from "react";

export const BlankLinkButton = memo(({ children, to, className, disabled }) => {
  return (
    <Link
      to={to}
      className={`inline-block ${className}`}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
});
