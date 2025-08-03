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
    },
    {
      title: "GitHub",
      icon: <GitHubIcon />,
      path: "https://github.com/HosseinKamali",
    },
    {
      title: "GitHub",
      icon: <InstagramIcon />,
      path: "https://www.instagram.com/web.developer.front.end?igsh=MXVtb3Q2OWR4dDdkaQ==",
    },
    {
      title: "Linkdin",
      icon: <LinkedInIcon />,
      path: "https://www.linkedin.com/in/hossein-kamali-rousta/",
    },
  ];
  return (
    <div className="h-24 border-t-2 border-[#e76f51] flex items-center  ">
      <Container maxWidth="xl">
        <div className="  text-stone-200 flex justify-between items-center">
          <p className="text-sm">© 2025 Made by Hossein Kamali Rousta</p>

          <div className="w-1/5">
            <ul className=" flex items-center justify-between text-center text-sm font-thin">
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.icon}</Link>
                  <p >{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
