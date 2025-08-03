import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const socialMedia = [
    {
      title: "Email",
      icon: <EmailIcon />,
      path: "mailto:hosseinkamalirousta1984@email.com",
      hoverClass:"hover:text-orange-300"
    },
    {
      title: "GitHub",
      icon: <GitHubIcon />,
      path: "https://github.com/HosseinKamali",
      hoverClass:"hover:text-stone-900"
    },
    {
      title: "Instagram",
      icon: <InstagramIcon />,
      path: "https://www.instagram.com/web.developer.front.end?igsh=MXVtb3Q2OWR4dDdkaQ==",
      hoverClass:"hover:text-pink-400"
    },
    {
      title: "Linkdin",
      icon: <LinkedInIcon />,
      path: "https://www.linkedin.com/in/hossein-kamali-rousta/",
      hoverClass:"hover:text-sky-400"
    },
  ];
  return (
    <div className="h-24 border-t-2 border-[#e76f51] flex items-center mt-12  ">
      <Container maxWidth="xl">
        <div className="  text-stone-200 flex justify-between items-center max-sm:flex-col max-sm:">
        

          <div className="w-1/5 max-sm:w-full max-sm:mt-6">
            <ul className=" flex items-center justify-between text-center text-sm font-thin">
              {socialMedia.map((item, index) => (
                <li key={index} className={`${item.hoverClass} font`} >
                  <Link to={item.path}>{item.icon}</Link>
                  <p className="text-xs" >{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
            <p className="text-sm mt-6">© 2025 Made by Hossein Kamali Rousta</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
