import { Link } from "react-router-dom";

export const LinkButton = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      className={`bg-primary border-primary hover:shadow-primary/50 rounded-full border px-4 py-2 text-center font-semibold text-white hover:shadow-lg ${className}`}
    >
      {children}
    </Link>
  );
};
