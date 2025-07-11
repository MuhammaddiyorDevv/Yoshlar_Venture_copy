import React, { useState } from "react";

const Second = ({ formData, setFormData }) => {
  const [selection, setSelection] = useState({
    venture: formData.venture || false,
    angel: formData.angel || false,
    grant: formData.grant || false,
    shaxsiy: formData.shaxsiy || false,
    boshqa: formData.boshqa || false,
  });

  const handleCheckboxChange = (key, checked) => {
    setSelection((prev) => ({ ...prev, [key]: checked }));
    setFormData((prev) => ({ ...prev, [key]: checked }));
  };

  const handleRadioChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const CustomCheckbox = ({ id, checked, onChange, label }) => (
    <label
      htmlFor={id}
      className="flex items-center gap-4 cursor-pointer select-none"
    >
      <div
        className={`w-8 h-8 rounded-[8px] border border-[#F28E46] flex items-center justify-center transition duration-300 ease-in-out ${
          checked ? "text-[#F28E46]" : ""
        }`}
      >
        {checked && <span className="text-xs">✔</span>}
      </div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <span className="text-sm dark:text-white">{label}</span>
    </label>
  );

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <p className="font-semibold text-xl mb-8 mt-12">
          Savdo haqida ma'lumot
        </p>

        <p className="font-medium">Hozirda savdo bormi?</p>
        <div className="flex gap-1">
          {["ha", "yoq"].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleRadioChange("savdoBormi", val)}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.savdoBormi === val
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              {val === "ha" ? "Ha" : "Yo'q"}
            </button>
          ))}
        </div>
      </div>

      {formData.savdoBormi === "ha" && (
        <>
          <div className="flex flex-col gap-1.5">
            <p className="text-[12px] font-medium">
              O‘rtacha oylik doimiy daromad
            </p>
            <input
              type="text"
              value={formData.oylikDaromad}
              onChange={(e) =>
                setFormData({ ...formData, oylikDaromad: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>

          <div className="flex mt-6 flex-col gap-1.5">
            <p className="text-[12px] font-medium">Moliyalashtirish tarixi</p>
            <input
              type="text"
              value={formData.moliyalashtirishTarixi}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  moliyalashtirishTarixi: e.target.value,
                })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>
        </>
      )}

      <p className="font-medium mt-6 mb-4">
        Oldin investitsiya jalb qilganmisiz?
      </p>
      <div className="flex gap-1">
        {["ha", "yoq"].map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => handleRadioChange("investitsiyaJalbQilganmi", val)}
            className={`w-[50px] h-[50px] rounded-full text-[12px] ${
              formData.investitsiyaJalbQilganmi === val
                ? "bg-[#F28E46] text-white"
                : "border dark:border-[#535862] text-[#535862] dark:text-white"
            }`}
          >
            {val === "ha" ? "Ha" : "Yo'q"}
          </button>
        ))}
      </div>

      {formData.investitsiyaJalbQilganmi === "ha" && (
        <>
          <div className="flex flex-col gap-1.5 mt-6">
            <p className="text-[12px] font-medium">Umumiy miqdor</p>
            <input
              type="text"
              value={formData.umumiyMiqdor}
              onChange={(e) =>
                setFormData({ ...formData, umumiyMiqdor: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>
          <div className="flex mt-6 flex-col gap-1.5">
            <p className="text-[12px] font-medium">Hozirgi baho</p>
            <input
              type="text"
              value={formData.hozirgiMiqdor}
              onChange={(e) =>
                setFormData({ ...formData, hozirgiMiqdor: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>
        </>
      )}

      <div className="my-6 text-black dark:text-white">
        <p className="font-semibold text-[20px]">Moliyalashtirish manbalari</p>
        <div className="flex flex-col gap-4 mt-8">
          <CustomCheckbox
            id="venture"
            checked={selection.venture}
            onChange={(checked) => handleCheckboxChange("venture", checked)}
            label="Venchur kapital"
          />
          <CustomCheckbox
            id="angel"
            checked={selection.angel}
            onChange={(checked) => handleCheckboxChange("angel", checked)}
            label="Angel investor"
          />
          <CustomCheckbox
            id="grant"
            checked={selection.grant}
            onChange={(checked) => handleCheckboxChange("grant", checked)}
            label="Grantlar"
          />
          <CustomCheckbox
            id="shaxsiy"
            checked={selection.shaxsiy}
            onChange={(checked) => handleCheckboxChange("shaxsiy", checked)}
            label="Shaxsiy mablag‘lar"
          />
          <CustomCheckbox
            id="boshqa"
            checked={selection.boshqa}
            onChange={(checked) => handleCheckboxChange("boshqa", checked)}
            label="Boshqalar"
          />
        </div>

        <div className="flex flex-col gap-1.5 mt-6 font-medium w-full">
          <p className="text-[12px] font-medium">Iltimos ko'rsating</p>
          <textarea
            value={formData.mablagniSarflash}
            onChange={(e) =>
              setFormData({ ...formData, mablagniSarflash: e.target.value })
            }
            className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[170px] p-4 w-full font-medium outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Second;