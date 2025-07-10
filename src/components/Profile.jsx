import downloadIcon from "../assets/downloadIcon.svg";

const Profile = ({ formData, setFormData }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, fayl: file });
  };

  return (
    <div className="flex flex-col w-full gap-6 mt-12 mb-10">
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium text-black dark:text-white">
          Startup nomi
        </p>
        <input
          type="text"
          value={formData.startupNomi}
          onChange={(e) =>
            setFormData({ ...formData, startupNomi: e.target.value })
          }
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[12px] font-medium text-black dark:text-white">
          Startup tavsifi
        </p>
        <textarea
          placeholder="100 - 150 ta belgi"
          value={formData.startupTavsifi}
          onChange={(e) =>
            setFormData({ ...formData, startupTavsifi: e.target.value })
          }
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-xl h-[170px] p-4 w-full font-medium outline-none"
        ></textarea>
      </div>

      <div className="flex flex-col w-full">
        <p className="text-[12px] text-[#020202] dark:text-[#FFFFFF] font-medium">
          Havola ( Ixtiyoriy )
        </p>
        <label className="cursor-pointer w-[337px] h-[50px] mt-1.5 mb-2 border border-[#F28E46] rounded-xl px-6 py-[17.5px] flex items-center">
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#F28E46] font-medium">
              {formData.fayl ? formData.fayl.name : "Yuklash"}
            </p>
            <img src={downloadIcon} alt="" />
          </div>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        <p className="text-[#535862] dark:text-[#E3E3E3] text-[12px] font-medium">
          Video, Fayl, Pitch deck
        </p>
      </div>
    </div>
  );
};

export default Profile;
