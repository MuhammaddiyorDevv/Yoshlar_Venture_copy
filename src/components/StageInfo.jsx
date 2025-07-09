import React from "react";

const StageInfo = ({ formData, setFormData }) => {
  const handleRadioChange = (value) => {
    setFormData({ ...formData, rozilik: value });
  };

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
          {["ha", "yoq"].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleRadioChange(val)}
              className={`w-[50px] h-[50px] rounded-full text-[13px] font-medium transition duration-300 ${
                formData.rozilik === val
                  ? "bg-[#F28E46] text-white shadow-md scale-105"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              {val === "ha" ? "Ha" : "Yo‘q"}
            </button>
          ))}
        </div>
      </div>

      {formData.rozilik === "ha" && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <p className="text-[12px] font-medium">Dastur nomi</p>
            <input
              type="text"
              value={formData.dasturNomi}
              onChange={(e) =>
                setFormData({ ...formData, dasturNomi: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[50px] p-4 w-full outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-[12px] font-medium">Dastur yili</p>
            <input
              type="date"
              value={formData.dasturYili}
              onChange={(e) =>
                setFormData({ ...formData, dasturYili: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[50px] p-4 w-full outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-[12px] font-medium">
              Dastur muvaffaqiyatli yakunlandimi?
            </p>
            <select
              value={formData.dasturBitirganmi}
              onChange={(e) =>
                setFormData({ ...formData, dasturBitirganmi: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[50px] p-4 w-full outline-none"
            >
              <option value="">Tanlang</option>
              <option value="ha">Ha</option>
              <option value="yoq">Yo‘q</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default StageInfo;
