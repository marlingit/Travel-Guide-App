export const Card = ({ title, image, description, onClick }) => {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-400 bg-secondary space-y-2 hover:scale-110 hover:shadow-slate-500 duration-200 ease-in" onClick={onClick}>
      <img src={image} alt={title} className="rounded-lg"/>
      <div>
        <h2 className="font-bold text-xl leading-snug tracking-wide">{title}</h2>
        <p className="font-medium text-text-light text-base leading-none">{description}</p>
      </div>
    </div>
  );
};
