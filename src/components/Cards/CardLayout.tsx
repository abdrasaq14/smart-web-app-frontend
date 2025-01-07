import { BORDER_RADIUS, CARD_TITLE } from "../../utils/constants";

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
      className={`bg-white flex flex-col w-full h-[350px] min-h-fit min-w-[300px] ${BORDER_RADIUS} gap-2 p-6 items-center justify-between border border-primary-border text-primary-blackMain ${style}`}
    >
      <h3 className={`${CARD_TITLE}`}>{title}</h3>
      {children}
    </div>
  );
}

export default CardLayout;
