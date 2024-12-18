export const Button = ({
  onClick,
  sr,
  symbol,
  size = "md",
  children,
  buttonStyle,
}) => {
  return (
    <button className={`rounded-md text-center ${buttonStyle} flex items-center my-auto`} onClick={onClick}>
      {sr && <span className="sr-only">{sr}</span>}
      {symbol && (
        <span
          className={`material-symbols-rounded text-text align-middle text-${size} leading-none`}
        >
          {symbol}
        </span>
      )}
      {!symbol && (
        <span className={`text-text align-middle text-${size} leading-none`}>
          {children}
        </span>
      )}
    </button>
  );
};
