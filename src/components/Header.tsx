import { socialMedia } from "../database/db";
import image from "../image/IMG_20250714_134816_844.webp";
import { Link } from "react-router-dom";
import logoH from "../image/logo Hossein.png"
function Header() {
  return (
    <div className="h-screen flex justify-center items-center relative max-sm:flex-col ">
      <img
        src={image}
        alt={image}
        className="absolute rounded-full w-72 h-72 left-80 z-50  max-sm:left-[135px] max-sm:top-12 max-sm:w-52 max-sm:h-52"
      />
      <div className="bg-[#e76f51] h-screen w-[30%] flex flex-col justify-center items-center space-y-[540px] max-sm:w-full max-sm:h-52">
        <img src={logoH} alt="hossein kamali" className="z-50 max-sm:mb-40"/>
        <ul className="flex justify-center  h-full space-x-4 pb-3 max-sm:hidden ">
          {socialMedia.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="bg-transparent border-none outline-none" >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" h-full w-[70%] flex items-center justify-center max-sm:w-full max-sm:h-full ">
        <div className="flex flex-col w-[50%] max-sm:w-full max-sm:mx-9 ">
          <h1 className="text-4xl font-semibold text-stone-50 mb-5">
            HOSSEIN KAMALI ROUSTA
          </h1>

          <p className="text-stone-200">
            Hi, I’m Hossein Kamali Rousta, a passionate Front-End Developer
            specializing in building responsive and user-friendly web
            applications. With expertise in React, TypeScript, and modern CSS
            frameworks, I strive to turn design concepts into clean, efficient,
            and accessible code. I’m always eager to learn new technologies and
            improve user experiences through thoughtful development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
