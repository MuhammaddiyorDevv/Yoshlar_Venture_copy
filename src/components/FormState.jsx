import { useState, useEffect } from "react";
import Profile from "./Profile";
import Steps from "./Steps";
import Stage from "./Stage";
import StageInfo from "./StageInfo";
import Contact from "./Contact";
import Investment from "./Investment";
import StageNow from "./StageNow";
import StageAbout from "./StageAbout";

const FormState = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [stageSelection, setStageSelection] = useState({
    idea: false,
    mvpInProgress: false,
    postMvp: false,
  });

  const isWithSubSteps = stageSelection.idea || stageSelection.mvpInProgress;

  const handleBack = () => {
    if (step === 3 && isWithSubSteps && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (step > 1) {
      setStep(step - 1);
      setSubStep(0);
    }
  };

  const handleNext = () => {
    if (step === 2) {
      if (!stageSelection.idea && !stageSelection.mvpInProgress && !stageSelection.postMvp) {
        alert("Iltimos, kamida bitta bosqichni tanlang!");
        return;
      }
    }

    if (step === 3 && isWithSubSteps) {
      if (subStep === 0) {
        if (formData.rozilik === "yoq") {
          setStep(4);
          setSubStep(0);
          return;
        } else if (formData.rozilik === "ha") {
          setSubStep(1);
          return;
        } else {
          alert("Iltimos, Ha yoki Yo‘q ni tanlang.");
          return;
        }
      }

      if (subStep === 1) {
        setSubStep(2);
        return;
      }

      if (subStep === 2) {
        setStep(4);
        setSubStep(0);
        return;
      }
    }

    setStep(step + 1);
    setSubStep(0);
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
      "Barcha kiritilgan ma'lumotlar:\n" + JSON.stringify(formData, null, 2)
    );
    window.location.href = "/";
  };

  const [formData, setFormData] = useState({
    startupNomi: "",
    startupTavsifi: "",
    havolaFayl: null,

    bosqichIdea: false,
    bosqichMvpJarayoni: false,
    bosqichPostMvp: false,

    rozilik: "",
    dasturNomi: "",
    dasturYili: "",
    dasturBitirganmi: "",
    tanlovdaQatnashganmi: "",
    tanlovNomi: "",
    tanlovYili: "",
    uchlikkaKirdingizmi: "",

    arizachiIsmi: "",
    arizachiToliqIsmi: "",

    yoshi: "",
    roli: "",
    vazifalar: "",
    hamtasischilarSoni: "",

    ishchilarBormi: "",
    nechtaIshchi: "",

    ismi: "",
    telRaqami: "",
    email: "",
    ijtimoiyTarmoqlar: "",

    investitsiyaMiqdori: "",
    mablagniSarflash: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, subStep]);

  return (
    <div className="max-w-[628px] mx-auto w-full mb-[55px] sm:mb-20">
      <Steps currentStep={step} />

      {step === 1 && <Profile formData={formData} setFormData={setFormData} />}

      {step === 2 && (
        <Stage
          formData={formData}
          setFormData={setFormData}
          selection={stageSelection}
          onSelectionChange={handleStageSelectionChange}
        />
      )}

      {step === 3 && isWithSubSteps && subStep === 0 && (
        <StageInfo formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && isWithSubSteps && subStep === 1 && (
        <StageNow formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && subStep === 2 && (
        <StageAbout formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && !isWithSubSteps && (
        <StageAbout formData={formData} setFormData={setFormData} />
      )}

      {step === 4 && <Contact formData={formData} setFormData={setFormData} />}
      {step === 5 && (
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
          onClick={step === 5 ? handleSubmit : handleNext}
          className="bg-[#F28E46] text-white h-[50px] px-6 rounded-xl cursor-pointer flex-1 w-full mt-4"
        >
          {step === 5 ? "Tugatish" : "Davom etish"}
        </button>
      </div>
    </div>
  );
};

export default FormState;
