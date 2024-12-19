import { Link } from "react-router-dom";

export const LinkButton = ({ children, to, className, disabled }) => {
  return (
    <Link
      to={disabled ? "#" : to}
      className={`rounded-full border border-transparent px-4 py-2 text-center font-semibold text-text hover:shadow-lg hover:bg-secondary-hover hover:border-secondary-border inline-block ${className} ${disabled ? "cursor-not-allowed bg-secondary border-secondary hover:shadow-none" : ""}`}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
};
