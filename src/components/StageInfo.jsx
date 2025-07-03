import React from "react";

const StageInfo = () => {
  return (
    <div className="text-black dark:text-white">
      <p className="font-semibold text-xl mb-8 mt-12">
        Startapning Hozirgi Bosqichiga Aloqador Ma'lumotlar
      </p>
      <div className="flex flex-col gap-4 mb-6">
        <p className="font-medium">
          Akseleratsiya yoki inkubatsiya dasturida qatnashganmisiz?
        </p>
        <div className="flex gap-1">
          <button className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]">
            Ha
          </button>
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-[#FFFFFF]">
            Yo'q
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageInfo;
