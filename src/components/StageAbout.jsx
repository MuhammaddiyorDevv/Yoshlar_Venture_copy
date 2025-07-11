
import React from "react";

const StageAbout = ({ formData, setFormData }) => {
  const handleRadioChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
      <div className="text-black dark:text-white">
        <p className="font-semibold text-xl mb-8 mt-12">
          Startapning Hozirgi Bosqichiga Aloqador Ma'lumotlar
        </p>

        <div className="flex flex-col gap-4 mb-6">
          <p className="font-medium">
            Akseleratsiya yoki inkubatsiya dasturida qatnashganmisiz?
          </p>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => handleRadioChange("rozilik", "ha")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.rozilik === "ha"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Ha
            </button>
            <button
              type="button"
              onClick={() => handleRadioChange("rozilik", "yoq")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.rozilik === "yoq"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Yo'q
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
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
            <p className="text-[12px] font-medium">Yili</p>
            <input
              type="date"
              value={formData.yili}
              onChange={(e) =>
                setFormData({ ...formData, yili: e.target.value })
              }
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-[314px] p-4 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <p className="font-medium">Muvofaqqiyatli bitirganmidingiz?</p>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => handleRadioChange("bitirganmi", "ha")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.bitirganmi === "ha"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Ha
            </button>
            <button
              type="button"
              onClick={() => handleRadioChange("bitirganmi", "yoq")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.bitirganmi === "yoq"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Yo'q
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6 mb-12">
          <p className="font-medium">Startap tanlovlarida qatnashganmisiz?</p>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => handleRadioChange("tanlovdaQatnashganmi", "ha")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.tanlovdaQatnashganmi === "ha"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Ha
            </button>
            <button
              type="button"
              onClick={() => handleRadioChange("tanlovdaQatnashganmi", "yoq")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.tanlovdaQatnashganmi === "yoq"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Yo'q
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
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
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-[314px] p-4 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <p className="font-medium">Yuqori 3 likka kirdingizmi?</p>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => handleRadioChange("uchlikkaKirdingizmi", "ha")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.uchlikkaKirdingizmi === "ha"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Ha
            </button>
            <button
              type="button"
              onClick={() => handleRadioChange("uchlikkaKirdingizmi", "yoq")}
              className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                formData.uchlikkaKirdingizmi === "yoq"
                  ? "bg-[#F28E46] text-white"
                  : "border dark:border-[#535862] text-[#535862] dark:text-white"
              }`}
            >
              Yo'q
            </button>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-semibold text-xl mb-6">Jamoa haqida ma'lumot</p>
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex flex-col gap-1.5">
              <p className="text-[12px] font-medium">Arizachi to'liq ismi</p>
              <input
                type="text"
                value={formData.arizachiIsmi}
                onChange={(e) =>
                  setFormData({ ...formData, arizachiIsmi: e.target.value })
                }
                className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[12px] font-medium">Arizachi to'liq ismi</p>
              <input
                type="text"
                value={formData.arizachiToliqIsmi}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    arizachiToliqIsmi: e.target.value,
                  })
                }
                className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1.5 mb-6">
                <p className="text-[12px] font-medium">Yoshi</p>
                <input
                  type="text"
                  value={formData.yoshi}
                  onChange={(e) =>
                    setFormData({ ...formData, yoshi: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Ro'li</p>
                <input
                  type="text"
                  value={formData.roli}
                  onChange={(e) =>
                    setFormData({ ...formData, roli: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Vazifalar</p>
                <input
                  type="text"
                  value={formData.vazifalar}
                  onChange={(e) =>
                    setFormData({ ...formData, vazifalar: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Hamta'sischilar soni</p>
                <input
                  type="text"
                  value={formData.hamtasischilarSoni}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hamtasischilarSoni: e.target.value,
                    })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
            </div>
            <p>Hamta’sislar haqida ma’lumot</p>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1.5 mb-6">
                <p className="text-[12px] font-medium">Hamta’sis ismi</p>
                <input
                  type="text"
                  value={formData.yoshi}
                  onChange={(e) =>
                    setFormData({ ...formData, yoshi: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Ro'li</p>
                <input
                  type="text"
                  value={formData.roli}
                  onChange={(e) =>
                    setFormData({ ...formData, roli: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Startupdagi yillari</p>
                <input
                  type="text"
                  value={formData.vazifalar}
                  onChange={(e) =>
                    setFormData({ ...formData, vazifalar: e.target.value })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] font-medium">Yoshi</p>
                <input
                  type="text"
                  value={formData.hamtasischilarSoni}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hamtasischilarSoni: e.target.value,
                    })
                  }
                  className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
                />
              </div>
            </div>

            <p className="font-medium text-[18px] text-[#F28E46]">
              Yana hamta'sislar qo'shish +
            </p>

            <div className="flex flex-col gap-4">
              <p className="font-medium">Hozirda ishchilar bormi?</p>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => handleRadioChange("ishchilarBormi", "ha")}
                  className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                    formData.ishchilarBormi === "ha"
                      ? "bg-[#F28E46] text-white"
                      : "border dark:border-[#535862] text-[#535862] dark:text-white"
                  }`}
                >
                  Ha
                </button>
                <button
                  type="button"
                  onClick={() => handleRadioChange("ishchilarBormi", "yoq")}
                  className={`w-[50px] h-[50px] rounded-full text-[12px] ${
                    formData.ishchilarBormi === "yoq"
                      ? "bg-[#F28E46] text-white"
                      : "border dark:border-[#535862] text-[#535862] dark:text-white"
                  }`}
                >
                  Yo'q
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-4">
              <p className="text-[12px] font-medium">Nechta ishchilar bor</p>
              <input
                type="text"
                value={formData.nechtaIshchi}
                onChange={(e) =>
                  setFormData({ ...formData, nechtaIshchi: e.target.value })
                }
                className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageAbout;
