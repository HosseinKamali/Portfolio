import { Container } from "@mui/material";
import webDevelop from "../image/19362653-removebg-preview.png";
function WhoiAM() {
  return (
    
      <Container maxWidth="xl">
        <div className="flex justify-around items-center h-screen max-sm:flex-col">
          <div className="w-[35%] max-sm:w-full">
            <h2 className="mb-12 text-4xl font-semibold text-[#e76f51]"
            style={{textShadow:"2px 2px 4px black"}}>Who I am</h2>
            <p className="text-stone-300">
              I am a Front-End Developer with a strong focus on building
              responsive, accessible, and user-friendly web interfaces. With
              experience in modern frameworks like React and a solid
              understanding of HTML, CSS, and JavaScript, I enjoy turning design
              ideas into clean, functional code. My goal is always to create
              smooth user experiences and maintain high performance across
              devices and browsers.
            </p>
          </div>

          <img src={webDevelop} alt="developer"  />
        </div>
      </Container>
    
  );
}

export default WhoiAM;
