import { Container } from "@mui/material";
import { Blogs } from "../database/db";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <Container maxWidth="xl">
      <div className="flex flex-col h-screen items-center justify-center gap-24 max-sm:h-auto max-sm:mt-16">
        <h2 className="text-5xl text-center text-[#e76f51] font-semibold   " 
        style={{textShadow:"2px 2px 4px black"}}>Blogs</h2>
        <div className="flex items-center justify-center gap-8 max-sm:flex-wrap ">
          {Blogs.map((item) => (
            <Link
              to={`blog/${item.id}`}
              key={item.id}
              className="bg-[#e76f51] text-slate-100 h-96 w-72 rounded-t-md rounded-b-md" >
              <img src={item.imageUrl} alt="blogs" className="h-1/2 w-full rounded-t-md" />
              <div className="py-1 px-2">
                <h2 className="text-base mb-3">{item.slug}</h2>
                <p className="text-xs text-stone-300">{item.sections[0].content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Blog;
