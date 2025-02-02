
const SummaryCard = ({bg, total, title, icon: Icon}) => {
  return (
    <div
      className={`flex items-center justify-between px-2 sm:px-5 py-3 ${bg} rounded-xl backdrop-blur-md bg-opacity-50`}
    >
      <div className="flex flex-col  gap-1 sm:gap-2">
        <p className="text-white font-medium text-lg sm:text-3xl">
          {total}
        </p>
        <p className="text-white text-sm sm:text-md xl:text-xl">{title}</p>
      </div>

      <Icon className="hidden xl:block size-10" />
    </div>
  );
};

export default SummaryCard;
