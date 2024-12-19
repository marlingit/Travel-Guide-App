export const GridLayout = ({ children }) => {
  return (
    <div id="grid-container" className="grid gap-12 px-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {children}
    </div>
  );
};
