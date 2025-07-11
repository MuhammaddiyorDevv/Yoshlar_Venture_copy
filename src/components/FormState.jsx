import { useState, useEffect } from "react";
import Profile from "./Profile";
import Steps from "./Steps";
import Stage from "./Stage";
import Second from "./Second";
import StageInfo from "./StageInfo";
import Contact from "./Contact";
import Investment from "./Investment";

const FormState = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [stageSelection, setStageSelection] = useState({
    idea: false,
    mvpInProgress: false,
    postMvp: false,
  });

  const isWithSubSteps = stageSelection.idea || stageSelection.mvpInProgress;

  const isSecondStep = () => step === 3 && stageSelection.postMvp;
  const isStageStep = () => (stageSelection.postMvp ? step === 4 : step === 3);
  const isContactStep = () =>
    stageSelection.postMvp ? step === 5 : step === 4;
  const isInvestmentStep = () =>
    stageSelection.postMvp ? step === 6 : step === 5;

  const handleBack = () => {
    if (isSecondStep()) {
      setStep(2);
      return;
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step === 2) {
      if (
        !stageSelection.idea &&
        !stageSelection.mvpInProgress &&
        !stageSelection.postMvp
      ) {
        alert("Iltimos, kamida bitta bosqichni tanlang!");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleStageSelectionChange = (selection) => {
    setStageSelection(selection);
    setFormData((prev) => ({
      ...prev,
      bosqichIdea: selection.idea,
      bosqichMvpJarayoni: selection.mvpInProgress,
      bosqichPostMvp: selection.postMvp,
    }));
  };

  const handleSubmit = () => {
    alert(
      "Barcha kiritilgan ma'lumotlar:\n" + JSON.stringify(formData, null, 2),
    );
  };

  const [formData, setFormData] = useState({
    // 1-step
    startupNomi: "",
    startupTavsifi: "",
    fayl: null,

    // 2-step
    idea: false,
    mvpInProgress: false,
    postMvp: false,

    // 3-step (stageInfo)
    rozilik: "",
    dasturNomi: "",
    dasturYili: "",
    dasturBitirganmi: "",
    tanlovdaQatnashganmi: "",
    tanlovNomi: "",
    tanlovYili: "",
    uchlikkaKirdingizmi: "",

    // jamoa qismi
    arizachiToliqIsmi: "",
    yoshi: "",
    roli: "",
    vazifalar: "",
    hamtasischilarSoni: "",
    hamtasisIsmi: "",
    hamtasisRoli: "",
    hamtasisYillari: "",
    hamtasisYoshi: "",
    ishchilarBormi: "",
    nechtaIshchi: "",

    // contact step
    ismi: "",
    telRaqami: "",
    email: "",
    ijtimoiyTarmoqlar: "",

    // investment step
    investitsiyaMiqdori: "",
    mablagniSarflash: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, subStep]);

  return (
    <div className="max-w-[628px] mx-auto w-full mb-[55px] sm:mb-20">
      <Steps
        currentStep={
          isSecondStep()
            ? 2
            : isStageStep()
              ? 3
              : isContactStep()
                ? 4
                : isInvestmentStep()
                  ? 5
                  : step
        }
      />

      {step === 1 && <Profile formData={formData} setFormData={setFormData} />}
      {step === 2 && (
        <Stage
          formData={formData}
          setFormData={setFormData}
          selection={stageSelection}
          onSelectionChange={handleStageSelectionChange}
        />
      )}
      {isSecondStep() && (
        <Second formData={formData} setFormData={setFormData} />
      )}
      {isStageStep() && (
        <StageInfo formData={formData} setFormData={setFormData} />
      )}
      {isContactStep() && (
        <Contact formData={formData} setFormData={setFormData} />
      )}
      {isInvestmentStep() && (
        <Investment formData={formData} setFormData={setFormData} />
      )}

      <div className="flex gap-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white h-[50px] px-6 rounded-xl cursor-pointer flex-1 w-full mt-4"
          >
            Orqaga
          </button>
        )}
        <button
          onClick={isInvestmentStep() ? handleSubmit : handleNext}
          className="bg-[#F28E46] text-white h-[50px] px-6 rounded-xl cursor-pointer flex-1 w-full mt-4"
        >
          {isInvestmentStep() ? "Tugatish" : "Davom etish"}
        </button>
      </div>
    </div>
  );
};

export default FormState;