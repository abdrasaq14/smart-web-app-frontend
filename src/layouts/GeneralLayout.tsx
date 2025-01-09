import React from "react";

function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#ffffff]">
      <div className="w-full h-full min-h-full max-w-[2200px] shadow-lg">{children}</div>
    </div>
  );
}

export default GeneralLayout;
