import { Link } from "react-router-dom";
import { memo } from "react";

export const LinkButton = memo(({ children, to, className, disabled }) => {
  return (
    <Link
      to={disabled ? "#" : to}
      className={`inline-block rounded-full border border-transparent px-4 py-2 text-center font-semibold text-text hover:border-secondary-border hover:bg-secondary-hover hover:shadow-lg ${className} ${disabled ? "cursor-not-allowed border-secondary bg-secondary hover:shadow-none" : ""}`}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
});
