export const GridLayout = ({ children }) => {
  return (
    <div id="grid-container" className="grid gap-12 px-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};
