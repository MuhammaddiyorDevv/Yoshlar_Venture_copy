
import { useEffect } from "react";
import Abdulaziz from "../../assets/images/Team/Abdulaziz.jpg";
import Sardor from "../../assets/images/Team/Sardor.jpg";
import Shahzodbek from "../../assets/images/Team/Shahzodbek.jpg";
import Firdavs from "../../assets/images/Team/Firdavs.jpg";
import Rustambek from "../../assets/images/Team/Rustambek.jpg";
import Jamshid from "../../assets/images/Team/Jamshid.jpg";
import Sabina from "../../assets/images/Team/Sabina.jpg";

const members = [
  { name: "Firdavs Urinov", img: Abdulaziz },
  { name: "Sardor Ochilov", img: Sardor },
  { name: "Shaxzodbek Isroilov", img: Shahzodbek },
  { name: "Jamshid Shoimurodov", img: Firdavs },
  { name: "Rustambek Abakulov", img: Jamshid },
  { name: "Abdulaziz Yakubov", img: Rustambek },
  { name: "Sabina Rojko", img: Sabina },
];

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
          {members.map((member, index) => (
            <div key={index} className="flex-none w-48 md:w-1/5 flex flex-col items-start">
              <div className="w-full aspect-[5/5] mb-2">
                <img
                  src={member.img.src}
                  alt={member.name}
                  className="w-full h-[250px] rounded-[24px] object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium font-inter-tight">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
