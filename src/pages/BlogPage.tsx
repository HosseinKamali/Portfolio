import { useParams } from "react-router-dom";
import { Blogs } from "../database/db";
import { Container } from "@mui/material";

function BlogPage() {
  const params = useParams();
  const blog = Blogs.find((item) => item.id === Number(params.id));

  if (!blog) {
    return <p className="text-center text-red-500 text-2xl">Blog not found</p>;
  }

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-around items-start  min-h-screen gap-8 text-stone-400 py-12">
        <img src={blog.imageUrl} alt={blog.title} className="w-full md:w-[48%] rounded-xl" />
        
        <div className="w-full md:w-[48%]">
          <h2 className="text-3xl font-bold text-stone-100 mb-6">{blog.title}</h2>

          {blog.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <p className="text-xl text-stone-100 font-semibold">{section.heading}</p>

              {section.content && (
                <p className="text-sm text-stone-300 mt-2">{section.content}</p>
              )}

              {section.list && Array.isArray(section.list) && (
                <ul className="list-disc ml-5 text-sm text-stone-300 mt-2 space-y-1">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default BlogPage;
