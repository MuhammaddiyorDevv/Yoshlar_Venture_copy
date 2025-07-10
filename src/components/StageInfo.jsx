import React from "react";

const StageInfo = ({ formData, setFormData }) => {
  const handleRadioChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="flex flex-col items-start w-full text-black dark:text-white">
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
              onClick={() => handleRadioChange("rozilik", val)}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.rozilik === val
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              {val === "ha" ? "Ha" : "Yo'q"}
            </button>
          ))}
        </div>
      </div>

      {formData.rozilik === "ha" && (
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1.5">
            <p className="text-[12px] font-medium">Dastur nomi</p>
            <input
              type="text"
              value={formData.dasturNomi}
              onChange={(e) =>
                setFormData({ ...formData, dasturNomi: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
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
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
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
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            >
              <option value="">Tanlang</option>
              <option value="ha">Ha</option>
              <option value="yoq">Yo'q</option>
            </select>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <p className="font-medium">Startap tanlovlarida qatnashganmisiz?</p>
            <div className="flex gap-1">
              {["ha", "yoq"].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleRadioChange("tanlovdaQatnashganmi", val)}
                  className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                    formData.tanlovdaQatnashganmi === val
                      ? "bg-[#F28E46] text-white"
                      : "border dark:border-[#535862] text-[#535862] dark:text-white"
                  }`}
                >
                  {val === "ha" ? "Ha" : "Yo'q"}
                </button>
              ))}
            </div>
          </div>

          {formData.tanlovdaQatnashganmi === "ha" && (
            <>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Tanlov nomi</p>
                <input
                  type="text"
                  value={formData.tanlovNomi}
                  onChange={(e) =>
                    setFormData({ ...formData, tanlovNomi: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Tanlov yili</p>
                <input
                  type="date"
                  value={formData.tanlovYili}
                  onChange={(e) =>
                    setFormData({ ...formData, tanlovYili: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
                />
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <p className="font-medium">Yuqori 3 likka kirdingizmi?</p>
                <div className="flex gap-1">
                  {["ha", "yoq"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() =>
                        handleRadioChange("uchlikkaKirdingizmi", val)
                      }
                      className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                        formData.uchlikkaKirdingizmi === val
                          ? "bg-[#F28E46] text-white"
                          : "border dark:border-[#535862] text-[#535862] dark:text-white"
                      }`}
                    >
                      {val === "ha" ? "Ha" : "Yo'q"}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {formData.uchlikkaKirdingizmi === "ha" && (
        <>
          <p className="font-semibold text-xl mb-6 mt-10">
            Jamoa haqida ma'lumot
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <InputField
              label="Arizachi to‘liq ismi"
              value={formData.arizachiToliqIsmi}
              onChange={(v) =>
                setFormData({ ...formData, arizachiToliqIsmi: v })
              }
            />
            <InputField
              label="Yoshi"
              value={formData.yoshi}
              onChange={(v) => setFormData({ ...formData, yoshi: v })}
            />
            <InputField
              label="Ro‘li"
              value={formData.roli}
              onChange={(v) => setFormData({ ...formData, roli: v })}
            />
            <InputField
              label="Vazifalar"
              value={formData.vazifalar}
              onChange={(v) => setFormData({ ...formData, vazifalar: v })}
            />
            <InputField
              label="Hamtasischilar soni"
              value={formData.hamtasischilarSoni}
              onChange={(v) =>
                setFormData({ ...formData, hamtasischilarSoni: v })
              }
            />
          </div>

          <p className="font-medium mt-8">Hozirda ishchilar bormi?</p>
          <div className="flex gap-1 mt-2">
            {["ha", "yoq"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleRadioChange("ishchilarBormi", val)}
                className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                  formData.ishchilarBormi === val
                    ? "bg-[#F28E46] text-white"
                    : "border dark:border-[#535862] text-[#535862] dark:text-white"
                }`}
              >
                {val === "ha" ? "Ha" : "Yo'q"}
              </button>
            ))}
          </div>

          {formData.ishchilarBormi === "ha" && (
            <div className="mt-4">
              <InputField
                label="Nechta ishchi bor?"
                value={formData.nechtaIshchi}
                onChange={(v) => setFormData({ ...formData, nechtaIshchi: v })}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const InputField = ({ label, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <p className="text-[12px] font-medium">{label}</p>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
    />
  </div>
);

export default StageInfo;
