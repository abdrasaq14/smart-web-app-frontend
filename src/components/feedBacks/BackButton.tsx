import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function BackButton({link, showBackText=true}: {link?: string, showBackText?: boolean}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => (link ? navigate(link) : navigate(-1))}
      className={`flex cursor-pointer text-sm font-semibold items-center justify-center  gap-2 `}
    >
      <span className="rounded-full p-1 border-primary-border border hover:bg-primary-border">
        <IoChevronBack />
      </span>
      {showBackText && <span>Back</span>}
    </div>
  );
}

export default BackButton;
