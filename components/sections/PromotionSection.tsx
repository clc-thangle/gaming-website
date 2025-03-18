"use client";

import Image from "next/image";

import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import { DATA_PROMOTIONS } from "@/mockData/dataPromotions";

export default function PromotionSection() {
  return (
    <>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={1.7}
          spaceBetween={100}
          loop={true}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides
          modules={[Pagination, Navigation]}
          className="mySwiper mx-auto"
        >
          {DATA_PROMOTIONS.map((promotion, index) => (
            <SwiperSlide key={index} className="banner-slide">
              <div
                className="relative w-full  overflow-hidden rounded-3xl text-white h-[390px]"
                style={{
                  backgroundImage: promotion.bgColor,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="flex flex-col items-center  py-12 gap-3.5 ">
                    <Button
                      variant="outline"
                      className={cn(
                        "text-white !bg-[#FFFFFF]/10 rounded-full border-none text-[21px] py-1.5 px-4 h-[41px] transition-all duration-300",
                        promotion.buttonColor
                      )}
                      size="sm"
                    >
                      {promotion.label}
                    </Button>

                    <h1 className="text-4xl sm:text-[28px] xl:text-[42px] font-extrabold text-center leading-tight max-w-[420px]">
                      {promotion.title}
                    </h1>

                    <Button
                      variant="outline"
                      className="bg-[#ff0960] hover:bg-[#e0085a] border-none rounded-[10px] transition-colors text-white font-bold py-4 px-8 text-xl h-[41px] w-auto xl:w-[340px]"
                    >
                      {promotion.buttonText}
                    </Button>

                    <p className="text-center text-sm  text-white/90 max-w-sm">
                      {promotion.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-[536px] h-[445px] top-[-20px]">
                      <Image
                        src={promotion.image}
                        alt={promotion.title}
                        fill
                        className="object-contain "
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
