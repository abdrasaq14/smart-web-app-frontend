import Loader from "../feedBacks/loader";

function CardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white flex flex-col w-full h-[350px] min-h-[350px] min-w-[200px] rounded-2xl gap-8 p-4 items-center justify-center border border-primary-border text-primary-blackMain">
      <h3 className="text-xl font-bold tracking-widest">{title}</h3>
      {children}
    </div>
  );
}

export default CardLayout;
