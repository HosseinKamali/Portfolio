import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Container } from "@mui/material";
import "swiper/swiper-bundle.css";
import { skillsImg } from "../database/db";

function Skills() {
  return (
    <Container maxWidth="xl">
      <div className="h-96 max-sm:mt-48">
        <h2 className="text-center text-[#e76f51] font-semibold text-5xl mb-16 "
        style={{textShadow:"2px 2px 4px black"}}>
          Skills
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="my-swiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
            1280: {
              slidesPerView: 9,
            },
          }}
        >
          {skillsImg.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center flex-col  text-stone-100 font-bold text-xs "
            >
              <div className="shadow-sm shadow-[#e76f51] w-32 h-32 flex justify-center items-center flex-col">
                <img
                  src={item.img}
                  alt="React"
                  className="w-14 object-contain my-2"
                />
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default Skills;
