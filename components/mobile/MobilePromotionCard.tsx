"use client";
import { Button } from "@/components/ui/button";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PromotionSectionSliderProps } from "../sections/promotion.type";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MobilePromotionSection({
  contents,
}: PromotionSectionSliderProps) {
  return (
    <div className="md:hidden px-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
          type: "bullets",
          el: ".swiper-pagination",
        }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {contents.map((content, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-visible rounded-[22px] mt-[50px] mb-8"
              style={{
                backgroundImage: content.bgMobile,
              }}
            >
              <div className="flex flex-col gap-2 pb-[15px] overflow-visible">
                <div className="h-[118px] relative overflow-visible">
                  <div className="absolute w-full h-[168px] bottom-[0]">
                    <Image
                      src={content.imageMobile}
                      alt={content.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[250px] gap-3 ">
                  <Button
                    variant="outline"
                    className={cn(
                      "text-white rounded-full  border-none text-xs h-[25px] px-[42px] transition-all duration-300",
                      content.buttonColor
                    )}
                  >
                    {content.label}
                  </Button>
                  <h1 className="text-2xl font-medium text-center max-w-[270px] text-white">
                    {content.title}
                  </h1>
                  <Button
                    className={`bg-[#ff0960] hover:bg-[#e0085a] border-none rounded-[10px] text-white w-[250px] h-[50px]`}
                  >
                    {content.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
