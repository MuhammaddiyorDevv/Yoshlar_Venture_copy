import React, { useState } from "react";
import Steps from "./Steps.jsx";
import Profile from "./Profile.jsx";
import Stage from "./Stage.jsx";
import StageNow from "./StageNow.jsx";

const InfoWrapper = () => (
  <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
    <div className="text-black dark:text-white">
      <p className="font-semibold text-xl mb-8 mt-12">
        Startapning Hozirgi Bosqichiga Aloqador Ma'lumotlar
      </p>
      <p className="font-medium">
        Akseleratsiya yoki inkubatsiya dasturida qatnashganmisiz?
      </p>
      <div className="flex gap-1">
        <button className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white">
          Ha
        </button>
        <button className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white">
          Yo'q
        </button>
      </div>
    </div>
  </div>
);

const AboutWrapper = () => (
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
          <button className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]">
            Ha
          </button>
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white">
            Yo'q
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-medium">Dastur nomi</p>
          <input
            type="text"
            className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-medium">Yili</p>
          <input
            type="date"
            className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-[314px] p-4 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <p className="font-medium">Muvofaqqiyatli bitirganmidingiz?</p>
        <div className="flex gap-1">
          <button className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]">
            Ha
          </button>
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white">
            Yo'q
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6 mb-12">
        <p className="font-medium">Startap tanlovlarida qatnashganmisiz?</p>
        <div className="flex gap-1">
          <button className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]">
            Ha
          </button>
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white">
            Yo'q
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-medium">Tanlov nomi</p>
          <input
            type="text"
            className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-medium">Tanlov yili</p>
          <input
            type="date"
            className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-[314px] p-4 outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <p className="font-medium">Yuqori 3 likka kirdingizmi?</p>
        <div className="flex gap-1">
          <button className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white">
            Ha
          </button>
          <button className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white">
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
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-[12px] font-medium">Arizachi to'liq ismi</p>
            <input
              type="text"
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5 mb-6">
              <p className="text-[12px] font-medium">Yoshi</p>
              <input
                type="text"
                className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[12px] font-medium">Ro'li</p>
              <input
                type="text"
                className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[12px] font-medium">Vazifalar</p>
              <input
                type="text"
                className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[12px] font-medium">Hamta'sischilar soni</p>
              <input
                type="text"
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
              <button className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]">
                Ha
              </button>
              <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white">
                Yo'q
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-4">
            <p className="text-[12px] font-medium">Nechta ishchilar bor</p>
            <input
              type="text"
              className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactWrapper = () => (
  <div className="flex flex-col w-full gap-6 mt-12 mb-10">
    <p className="text-xl font-semibold">Aloqa Ma'lumotlari</p>

    <div className="flex flex-col gap-1.5 w-full">
      <p className="text-[12px] font-medium">Ismi</p>
      <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
    </div>

    <div className="flex flex-col gap-1.5 w-full">
      <p className="text-[12px] font-medium">Telefon raqami</p>
      <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
    </div>

    <div className="flex flex-col gap-1.5 w-full">
      <p className="text-[12px] font-medium">Elektron pochta manzili</p>
      <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
    </div>

    <div className="flex flex-col gap-1.5 w-full">
      <p className="text-[12px] font-medium">Ijtimoiy tarmoqlar havolalari</p>
      <input
        type="text"
        className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
      />
    </div>
  </div>
);

const FinanceWrapper = () => (
  <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
    <div className="text-black dark:text-white">
      <p className="font-semibold text-xl mb-8 mt-12">Savdo haqida ma'lumot</p>

      <div className="flex flex-col gap-4 mb-6">
        <p className="font-medium">Hozirda savdo bormi?</p>
        <div className="flex gap-1">
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white active:bg-[#F28E46] active:text-white active:border-[#F28E46] transition duration-300">
            Ha
          </button>
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white active:bg-[#F28E46] active:text-white active:border-[#F28E46] transition duration-300">
            Yo'q
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col w-full gap-6 text-black dark:text-white">
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">O'rtacha oylik doimiy daromad</p>
        <input
          type="text"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Moliyalashtirish tarixi</p>
        <input
          type="text"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <p className="font-medium">Oldin investitsiya jalb qilganmisiz?</p>
        <div className="flex gap-1">
          <button className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]">
            Ha
          </button>
          <button className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-white active:bg-[#F28E46] active:text-white active:border-[#F28E46] transition duration-300">
            Yo'q
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col w-full gap-6 mt-6 text-black dark:text-white">
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Umumiy miqdor</p>
        <input
          type="text"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium">Umumiy miqdor</p>
        <input
          type="text"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>
    </div>

    <div className="mt-12 mb-6 sm:mb-10 text-black dark:text-white">
      <p className="font-semibold text-[20px]">Moliyalashtirish manbalari</p>
      <div className="flex flex-col gap-4 mt-8">
        {[
          "Venchur kapital",
          "Angel investor",
          "Grantlar",
          "Shaxsiy mablag'lar",
          "Boshqalar",
        ].map((item, index) => (
          <div key={index} className="flex gap-4">
            <button className="text-white dark:text-black w-8 h-8 rounded-[8px] border border-[#F28E46] active:bg-[#F28E46] cursor-pointer">
              &#10003;
            </button>
            <p className="font-medium text-[18px]">{item}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 mt-6 font-medium w-full">
        <p className="text-[12px] font-medium">Iltimos ko'rsating</p>
        <textarea
          placeholder="100 - 150 ta belgi"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[170px] p-4 w-full font-medium outline-none w-[398px] sm:w-[628px]"
        ></textarea>
      </div>
    </div>
  </div>
);

const StepFlowWithSubSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [stageSelection, setStageSelection] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  });

  const step3Components = [InfoWrapper, StageNow, AboutWrapper];
  const step4Components = [ContactWrapper, FinanceWrapper];

  const getDisplayStep = () => {
    if (currentStep === 3) return 3;
    if (currentStep === 4) return 4;
    return currentStep;
  };

  const getCurrentComponent = () => {
    switch (currentStep) {
      case 1:
        return Profile;
      case 2:
        return Stage;
      case 3:
        return step3Components[subStep];
      case 4:
        return step4Components[subStep];
      default:
        return Profile;
    }
  };

  const handleStageSelection = (btnIdx) => {
    setStageSelection((prev) => {
      const newSel = { ...prev };
      if (btnIdx === 1) newSel.btn1 = !prev.btn1;
      if (btnIdx === 2) newSel.btn2 = !prev.btn2;
      if (btnIdx === 3) newSel.btn3 = !prev.btn3;
      return newSel;
    });
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (stageSelection.btn1 && stageSelection.btn2) {
        setCurrentStep(3);
        setSubStep(0);
      } else {
        alert(
          'Iltimos, "G\'oya (Idea)" va "MVP is being developed" bosqichlarini tanlang.',
        );
      }
    } else if (currentStep === 3) {
      if (subStep < step3Components.length - 1) {
        setSubStep(subStep + 1);
      } else {
        setCurrentStep(4);
        setSubStep(0);
      }
    } else if (currentStep === 4) {
      if (subStep < step4Components.length - 1) {
        setSubStep(subStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 2 && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 3 && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (currentStep === 3 && subStep === 0) {
      setCurrentStep(2);
    } else if (currentStep === 4 && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (currentStep === 4 && subStep === 0) {
      setCurrentStep(3);
      setSubStep(step3Components.length - 1);
    }
  };

  const CurrentComponent = getCurrentComponent();

  return (
    <div className="flex justify-center mt-[50px] sm:mt-[65px] mb-[55px] sm:mb-20">
      <div className="flex flex-col items-center w-[398px] sm:w-[628px]">
        <Steps currentStep={getDisplayStep()} />

        {currentStep === 2 ? (
          <Stage selection={stageSelection} onSelect={handleStageSelection} />
        ) : (
          <CurrentComponent />
        )}

        <div className="flex gap-4 w-full mt-6">
          {(currentStep > 1 ||
            (currentStep === 3 && subStep > 0) ||
            (currentStep === 4 && subStep > 0)) && (
            <button
              onClick={handleBack}
              className="bg-gray-500 text-white h-[50px] px-6 rounded-xl cursor-pointer"
            >
              Orqaga
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-[#F28E46] text-white h-[50px] px-6 rounded-xl cursor-pointer flex-1"
          >
            Davom etish
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFlowWithSubSteps;
