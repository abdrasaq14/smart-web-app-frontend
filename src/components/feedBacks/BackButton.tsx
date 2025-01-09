import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="flex cursor-pointer text-sm font-semibold items-center justify-center gap-2 w-[5em]"
    >
      <span className="rounded-full p-1 border-primary-border border">
        <IoChevronBack />
      </span>
      <span>Back</span>
    </div>
  );
}

export default BackButton;
