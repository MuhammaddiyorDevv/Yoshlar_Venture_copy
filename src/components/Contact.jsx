import React from "react";

const Contact = () => {
  return (
   <div class="flex flex-col w-full gap-6 mt-12 mb-10">
  <p class="text-xl font-semibold">Aloqa Ma'lumotlari</p>

  <div class="flex flex-col gap-1.5 w-full">
    <p class="text-[12px] font-medium">Ismi</p>
   <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
  </div>

  <div class="flex flex-col gap-1.5 w-full">
    <p class="text-[12px] font-medium">Telefon raqami</p>
    <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
  </div>

  <div class="flex flex-col gap-1.5 w-full">
    <p class="text-[12px] font-medium">Elektron pochta manzili</p>
   <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
  </div>

  <div class="flex flex-col gap-1.5 w-full">
    <p class="text-[12px] font-medium">Ijtimoiy tarmoqlar havolalari</p>
    <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
  </div>
</div>

  );
};

export default Contact;
