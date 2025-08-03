import { motion } from "framer-motion";
import { education } from "../database/db";
import image from "../image/20944386-removebg-preview.png";
import { Container } from "@mui/material";
function Education() {
  return (
    
      <Container maxWidth="xl">
        <div className="flex justify-around items-center h-screen max-sm:flex-col ">
          <div className="flex flex-col items-start gap-6 w-[40%] max-sm:w-full ">
            <h1 className="text-4xl  mb-8 text-[#e76f51] font-semibold "
            style={{textShadow:"2px 2px 4px black"}}>Education</h1>
            {education.map((i) => (
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
                className="bg-[#e76f51] w-full  h-20 rounded-lg text-stone-100 flex items-start p-5 justify-center flex-col "
              >
                <p className="text-xs ">{i.date}</p>
                <h2 className="text-base ">{i.title}</h2>
                <p className="text-sm ">{i.learned}</p>
              </motion.div>
            ))}
          </div>
          <img src={image} alt="education" className="mt-7"/>
        </div>
      </Container>
    
  );
}

export default Education;
