import React from "react";

const Contact = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="flex flex-col w-full gap-6 mt-12 mb-10 text-black dark:text-white">
      <p className="text-xl font-semibold">Aloqa Ma'lumotlari</p>

      <InputField
        label="Ismi"
        value={formData.ismi}
        onChange={(val) => handleChange("ismi", val)}
      />

      <InputField
        label="Telefon raqami"
        value={formData.telRaqami}
        onChange={(val) => handleChange("telRaqami", val)}
      />

      <InputField
        label="Elektron pochta manzili"
        type="email"
        value={formData.email}
        onChange={(val) => handleChange("email", val)}
      />

      <InputField
        label="Ijtimoiy tarmoqlar havolalari"
        value={formData.ijtimoiyTarmoqlar}
        onChange={(val) => handleChange("ijtimoiyTarmoqlar", val)}
      />
    </div>
  );
};

const InputField = ({ label, type = "text", value, onChange }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <p className="text-[12px] font-medium">{label}</p>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
    />
  </div>
);

export default Contact;