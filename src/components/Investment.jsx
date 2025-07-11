
import React from "react";

const Investment = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="flex flex-col w-full gap-6 mt-12 mb-8 sm:mb-23 text-black dark:text-white">
      <p className="text-xl font-semibold">
        Pitch, Investitsiya So'rovi va Mablag'lardan Foydalanish
      </p>

      <InputField
        label="Qancha investitsiya so'rayapsiz?"
        value={formData.investitsiyaMiqdori}
        onChange={(val) => handleChange("investitsiyaMiqdori", val)}
      />

      <div className="flex flex-col gap-1.5 mt-6 font-medium w-full">
        <p className="text-[12px] font-medium">
          Iltimos, mablag'ni sarflash rejangizni ko'rsating
        </p>
        <textarea
          placeholder="100 - 150 ta belgi"
          value={formData.mablagniSarflash}
          onChange={(e) => handleChange("mablagniSarflash", e.target.value)}
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[170px] p-4 w-full font-medium outline-none"
        ></textarea>
      </div>

      <p className="font-semibold text-sm leading-6">
        Ushbu arizani yuborish investitsiya kafolatlamaydi. Yoshlar Ventures
        barcha taqdim etilgan ma'lumotlarni maxfiylik bilan muomala qiladi va
        tanlangan arizachilar bilan keyingi tekshiruv yoki suhbat uchun
        bog'lanadi.
      </p>
    </div>
  );
};

const InputField = ({ label, value, onChange }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <p className="text-[12px] font-medium">{label}</p>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
    />
  </div>
);

export default Investment;
