import React from "react";

const Stage = ({
  selection = { btn1: false, btn2: false, btn3: false },
  onSelect,
}) => (
  <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
    <div className="mt-12 mb-[262px] text-black dark:text-[#FFFFFF]">
      <p className="font-semibold text-[20px]">
        Startupingiz xozr qaysi bosqichda?
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex gap-4 items-center">
          <button
            className={`w-8 h-8 rounded-[8px] border border-[#F28E46] transition duration-300 cursor-pointer ${selection.btn1 ? "bg-[#F28E46] text-white" : "text-white dark:text-black"}`}
            type="button"
            onClick={() => onSelect(1)}
          >
            &#10003;
          </button>
          <p>Gʼoya ( Idea )</p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className={`w-8 h-8 rounded-[8px] border border-[#F28E46] transition duration-300 cursor-pointer ${selection.btn2 ? "bg-[#F28E46] text-white" : "text-white dark:text-black"}`}
            type="button"
            onClick={() => onSelect(2)}
          >
            &#10003;
          </button>
          <p>MVP ishlab chiqilmoqda</p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className={`w-8 h-8 rounded-[8px] border border-[#F28E46] transition duration-300 cursor-pointer ${selection.btn3 ? "bg-[#F28E46] text-white" : "text-white dark:text-black"}`}
            type="button"
            onClick={() => onSelect(3)}
          >
            &#10003;
          </button>
          <p>Post MVP ( MVP ishlab chiqilgan )</p>
        </div>
      </div>
    </div>
  </div>
);

export default Stage;
