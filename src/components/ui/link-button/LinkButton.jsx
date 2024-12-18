<<<<<<< HEAD
import { Link } from "react-router-dom";

export const LinkButton = ({ children, to, className, disabled }) => {
  return (
    <Link
      to={disabled ? "#" : to}
      className={`rounded-full border border-transparent px-4 py-2 text-center font-semibold text-text hover:shadow-lg hover:bg-secondary-hover hover:border-secondary-border ${className} ${disabled ? "cursor-not-allowed bg-secondary border-secondary hover:shadow-none" : ""}`}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
};
=======
import { Link } from "react-router-dom";

export const LinkButton = ({ children, to, className, disabled }) => {
  return (
    <Link
      to={disabled ? "#" : to}
      className={`bg-primary border-primary hover:shadow-primary/50 rounded-full border px-4 py-2 text-center font-semibold text-white hover:shadow-lg ${className} ${disabled ? "cursor-not-allowed bg-secondary border-secondary hover:shadow-none" : ""}`}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
};
>>>>>>> fb15a028584f57b31e25dc36d9527045f7a2cd21
