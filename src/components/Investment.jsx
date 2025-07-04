import React from "react";

const Investment = () => {
  return (
   <div class="flex flex-col w-full gap-6 mt-12 mb-8 sm:mb-23">
  <p class="text-xl font-semibold">
    Pitch, Investitsiya So‘rovi va Mablag‘lardan Foydalanish
  </p>

  <div class="flex flex-col gap-1.5 w-full">
    <p class="text-[12px] font-medium">Qancha investitsiya so‘rayapsiz?</p>
    <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
  </div>

  <div class="flex flex-col gap-1.5 mt-6 font-medium w-full">
    <p class="text-[12px] font-medium">Iltimos ko’rsating</p>
    <textarea
        placeholder="100 - 150 ta belgi"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[170px] p-4 w-full font-medium outline-none"
      ></textarea>
  </div>

  <p class="font-semibold">
    Ushbu arizani yuborish investitsiya kafolatlamaydi. Yoshlar Ventures barcha
    taqdim etilgan ma’lumotlarni maxfiylik bilan muomala qiladi va tanlangan
    arizachilar bilan keyingi tekshiruv yoki suhbat uchun bog‘lanadi.
  </p>
</div>

  );
};

export default Investment;
