import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import SwiperNavigation from "@/components/ui/SwiperNavigation";

export default function GalleryThumbnails({ images, setThumbsSwiper }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            if (swiperRef.current.navigation) {
                swiperRef.current.navigation.init();
                swiperRef.current.navigation.update();
            }
        }
    }, [swiperRef, prevRef, nextRef]);

    return (
        <div className="py-5 shrink-0 relative">
            <Swiper
                spaceBetween={10}
                loop={true}
                slidesPerView={6} // Default slides per view
                modules={[Navigation, Thumbs]}
                watchSlidesProgress={true}
                style={{ marginLeft: '60px', marginRight: '60px' }}
                onSwiper={(swiper) => {
                    setThumbsSwiper(swiper);
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    }
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} style={{ height: '82px' }}> {/* Ensure each slide has a consistent height */}
                        <div className="relative inline-block overflow-hidden mx-auto box-sizing rounded border border-border-base transition hover:opacity-75">
                            <Image
                                alt={`Product thumb gallery ${index + 1}`}
                                src={image.src}
                                sizes={image.sizes}
                                width={80}
                                height={80}
                           //     loading={index === 0 || index === 1 ? "eager" : "lazy"}
                                loading={"lazy"}
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SwiperNavigation nextRef={nextRef} prevRef={prevRef} />
        </div>
    );
}
