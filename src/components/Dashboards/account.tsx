import React from 'react'
import { RiPencilFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Account({ userId }: { userId: string }) {
  return (
    <div className="flex flex-col items-start justify-center mt-10  bg-[#FDFDFD] gap-4 p-8 rounded-[20px] border border-[#77777733] min-h-[250px]">
      <Link to={""} className="flex self-end">
        Edit Profile
      </Link>
      <div className="flex items-start justify-center flex-1">
        <div className="flex">
          <div className="relative max-h-[5rem] w-[40%]">
            <img src={""} alt="User Avatar" />
            <span className="flex items-center bg-primary-yellowMain text-white justify-center h-10 w-20">
              <RiPencilFill size={20} />
            </span>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-2">
            <span className="">ID: {userId}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account