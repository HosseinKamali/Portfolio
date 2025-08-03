import { motion } from "framer-motion";
import { experience } from "../database/db";
import experienceImg from "../image/20944036-removebg-preview.png";
import { Container } from "@mui/material";

function Experience() {
  return (
    
      <Container maxWidth="xl">
        <div className="flex justify-around items-center h-screen max-sm:flex-col-reverse ">
          <img src={experienceImg} alt="experience"  />
          <div className="flex flex-col gap-6  text-stone-100 w-[40%] max-sm:w-full">
            <h2 className="text-4xl font-semibold mb-16 text-[#e76f51]"
            style={{textShadow:"2px 2px 4px black"}}>Experience</h2>
{experience.map((i) => (
            <motion.div
              key={i.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i.id * 0.3,
              }}
              className="bg-[#e76f51] rounded px-5 py-2  "
            >
              <p>{i.date}</p>
              <h3>{i.title}</h3>
              <p>{i.subject}</p>
            </motion.div>
          ))}
          </div>
          
        </div>
      </Container>
    
  );
}

export default Experience;
