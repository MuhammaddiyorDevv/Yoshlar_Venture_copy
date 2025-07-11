"use client";

import CustomCheckbox from "./CustomCheckbox";

const Stage = ({ formData, setFormData, selection, onSelectionChange }) => {
  const handleCheckboxChange = (key) => {
    const newSelection = {
      idea: false,
      mvpInProgress: false,
      postMvp: false,
      [key]: true,
    };

    onSelectionChange(newSelection);

    setFormData({
      ...formData,
      bosqichIdea: key === "idea",
      bosqichMvpJarayoni: key === "mvpInProgress",
      bosqichPostMvp: key === "postMvp",
    });
  };

  return (
    <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
      <div className="mt-12 mb-[262px] text-black dark:text-white">
        <p className="font-semibold text-[20px]">
          Startupingiz hozir qaysi bosqichda?
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <CustomCheckbox
            id="idea-checkbox"
            checked={selection.idea}
            onChange={() => handleCheckboxChange("idea")}
            label="Gʼoya ( Idea )"
          />
          <CustomCheckbox
            id="mvp-progress-checkbox"
            checked={selection.mvpInProgress}
            onChange={() => handleCheckboxChange("mvpInProgress")}
            label="MVP ishlab chiqilmoqda"
          />
          <CustomCheckbox
            id="post-mvp-checkbox"
            checked={selection.postMvp}
            onChange={() => handleCheckboxChange("postMvp")}
            label="Post MVP ( MVP ishlab chiqilgan )"
          />
        </div>
      </div>
    </div>
  );
};

export default Stage;
