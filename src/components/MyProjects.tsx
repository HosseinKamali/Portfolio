import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { myProject } from "../database/db";

function MyProjects() {
  return (
    <Container maxWidth="xl">
      <div className="h-screen flex flex-col items-center justify-center gap-24 max-sm:h-auto max-sm:mt-20 ">
        <h2 className="text-5xl font-semibold text-center text-[#e76f51] mb-12 "
        style={{textShadow:"2px 2px 4px black"}}>Projects</h2>

        <div className="flex justify-around items-center  gap-8 max-sm:flex-wrap  ">
          {myProject.map((item) => (
            <Link key={item.id} to={item.linkUrl} className="bg-[#e76f51] text-stone-200 h-72 rounded-b-md rounded-t-md shadow-md">
              <img src={item.imgurl} alt="project" className="rounded-t-md" />
              <p className="text-xs p-2">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default MyProjects;
