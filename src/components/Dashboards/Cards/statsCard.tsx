import Loader from "../../feedBacks/loader";

function StatsCard({
  title,
  value,
  isError,
  isLoading,
}: {
  title: string;
  value: string;
  isError: boolean;
  isLoading: boolean;
}) {
  return (
    <div className="bg-white flex flex-col w-full h-[150px] rounded-2xl gap-8 items-center justify-center border border-primary-border text-primary-blackMain">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="text-red-500">Error fetching data</p>
      ) : (
        <>
          <h3 className="text-3xl font-bold tracking-widest">{value}</h3>
          <p className="text-md font-light">{title}</p>
        </>
      )}
    </div>
  );
}

export default StatsCard;
