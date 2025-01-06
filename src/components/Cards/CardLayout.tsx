import Loader from "../feedBacks/loader";

function CardLayout({
  title,
  children,
  style,
}: {
  title: string;
    children: React.ReactNode;
    style?: string;
}) {
  return (
    <div
      className={`bg-white flex flex-col w-full h-[350px] min-h-[350px] min-w-[300px] rounded-2xl gap-6 px-6 py-10 items-center justify-center border border-primary-border text-primary-blackMain ${style}`}
    >
      <h3 className="text-xl font-bold  self-start">{title}</h3>
      {children}
    </div>
  );
}

export default CardLayout;
