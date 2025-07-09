import React from "react";

const Contact = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col w-full gap-6 mt-12 mb-10">
      <p className="text-xl font-semibold">Aloqa Ma'lumotlari</p>

      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Ismi</p>
        <input
          type="text"
          value={formData.ismi}
          onChange={(e) => setFormData({ ...formData, ismi: e.target.value })}
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Telefon raqami</p>
        <input
          type="text"
          value={formData.telRaqami}
          onChange={(e) =>
            setFormData({ ...formData, telRaqami: e.target.value })
          }
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Elektron pochta manzili</p>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Ijtimoiy tarmoqlar havolalari</p>
        <input
          type="text"
          value={formData.ijtimoiyTarmoqlar}
          onChange={(e) =>
            setFormData({ ...formData, ijtimoiyTarmoqlar: e.target.value })
          }
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>
    </div>
  );
};

export default Contact;
