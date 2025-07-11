import { useEffect } from "react";

// Rasmlar importi
import Abdulaziz from "../../assets/images/Team/Ayokubov.jpg";
import Sardor from "../../assets/images/Team/Sochilov.jpg";
import Shahzodbek from "../../assets/images/Team/Shahzodbek.jpg";
import Firdavs from "../../assets/images/Team/Forinov.jpg";
import Rustam from "../../assets/images/Team/Rabakulov.jpg";
import Sabina from "../../assets/images/Team/Sabina.jpg";
import Jamshid from "../../assets/images/Team/Jamshid.jpg";

export default function TeamCarousel() {
  useEffect(() => {
    const slider = document.getElementById("slider");
    const items = Array.from(slider.children);
    items.forEach((item) => slider.appendChild(item.cloneNode(true)));

    let pos = 0;
    const speed = 0.5;
    let animId;

    function loop() {
      pos += speed;
      if (pos >= slider.scrollWidth / 2) pos -= slider.scrollWidth / 2;
      slider.scrollLeft = pos;
      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);
    slider.addEventListener("mouseenter", () => cancelAnimationFrame(animId));
    slider.addEventListener("mouseleave", () => {
      animId = requestAnimationFrame(loop);
    });
  }, []);

  return (
    <div className="py-12 sm:py-16 lg:py-[80px] mb-16 px-4">
      <div className="relative">
        <div id="slider" className="flex overflow-x-auto hide-scrollbar gap-4 pb-4">
          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Abdulaziz.src}
                alt="Firdavs Urinov"
                className="w-full h-[250px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight">Abdulaziz Yakubov</p>
          </div>

          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Sardor.src}
                alt="Sardor Ochilov"
                className="w-full h-[311px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight">Sardor Ochilov</p>
          </div>

          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Shahzodbek.src}
                alt="Shaxzodbek Isroilov"
                className="w-full h-[288px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight">Shaxzodbek Isroilov</p>
          </div>

          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Firdavs.src}
                alt="Jamshid Shoimurodov"
                className="w-full h-[254px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight">Firdavs Urinov</p>
          </div>

          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Rustam.src}
                alt="Rustambek Abakulov"
                className="w-full h-[311px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight">Rustambek Abakulov</p>
          </div>

          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Sabina.src}
                alt="Abdulaziz Yakubov"
                className="w-full h-[250px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight">Sabina Rojko</p>
          </div>

          <div className="flex-none w-48 md:w-1/5 flex flex-col items-start">
            <div className="w-full aspect-[5/5] mb-2">
              <img
                src={Jamshid.src}
                alt="Sabina Rojko"
                className="w-full h-[288px] rounded-[24px] object-cover"
              />
            </div>
            <p className="text-center text-sm font-medium font-inter-tight"> Jamshid Shoimurodov</p>
          </div>
        </div>
      </div>
    </div>
  );
}
