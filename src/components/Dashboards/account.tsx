import React from "react";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { generateAccountInfo } from "../../utils/utils";

function Account({
  userId,
  role,
  firstName,
  lastName,
  email,
  company,
}: {
  userId: string;
  role: {
    type: string;
    icon: any;
  };
  firstName: string;
  lastName: string;
  email: string;
  company: string;
    }) {
    const accountInfo = generateAccountInfo(firstName, lastName, email, company);
  return (
    <div className="flex items-start pt-20 justify-center  h-[100vh] w-full">
      <div className="flex flex-col items-start justify-center min-h-[60%] w-[70%]  bg-[#FDFDFD] gap-4 p-8 rounded-[20px] border border-[#77777733]">
        <Link to={""} className="flex self-end text-[#EB5757] underline">
          Edit Profile
        </Link>
        <div className="flex flex-col  items-start justify-start gap-10 flex-1">
          <div className="flex gap-8">
            <div className="relative flex items-center justify-center max-h-[6rem] w-[25%]">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/7f69/3a50/4537f3137c3659d75f4869f5e6a3eb29?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jAxqIbuyDC6lftlrouiqcpDJPt0QDUlZLtSKxtJcpVIXpdxgmZh9AY3ELLTSB2QImV7aEyxLx3rSeETnLmrDBOp2vxotcFEUJF0eKbKfrByB0LZTQ1eC2a8lXj4JJGGWLLcpEOUI6yILHqatptfO9su2341tM2MPTjg2U6zpLf2FhwV-ZCA2JOX2qmiUWWmKEeSGN~V5SRZ-ekHirkHyyYRsb5NC58xg3UbvIx49hz0sijDDWw2ehT0COFd8u3hfCEEA5Wev-ZM3qVrKTP7Sto2qCK9-NvRhrYOPQI5-Rfn6buOAM4OWYuX6TvKtU~XJF-5azagwxzwklang2Qdjwg__"
                  }
                  alt="User Avatar"
                />
              </div>
              <span className="absolute right-[-10px] bottom-[-5px] rounded-full flex items-center bg-primary-yellowMain text-white justify-center h-7 w-7">
                <RiPencilFill size={18} />
              </span>
            </div>
            <div className="flex text-primary-blackMain flex-1 flex-col items-start justify-center gap-2">
              <span className="">
                ID: <span className=" font-bold">{userId}</span>
              </span>
              <span className="text-primary-blackLighter max-w-max flex items-center justify-center p-1 px-4 rounded-3xl border border-primary-border">
                {role.icon}
                <span className="ml-2">{role.type}</span>
              </span>
            </div>
          </div>
          {/* User Details */}
          {accountInfo.map((info) => (
            <div className="relative rounded-2xl border border-primary-border bg-white w-full p-3 h-[3rem]">
              <span className=" absolute left-5 top-[-12px] px-2 bg-white text-primary-blackLighter">
                {info.tag}
              </span>
              <span className="text-primary-blackMain ml-4">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Account;
