export const Button = ({
  onClick,
  sr,
  symbol,
  size = "md",
  children,
}) => {
  return (
    <button className="rounded-md text-center" onClick={onClick}>
      {sr && <span className="sr-only">{sr}</span>}
      {symbol && (
        <span
          className={`material-symbols-rounded text-text align-middle text-${size}`}
        >
          {symbol}
        </span>
      )}
      {!symbol && (
        <span className={`text-text align-middle text-${size}`}>
          {children}
        </span>
      )}
    </button>
  );
};
