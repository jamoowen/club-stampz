'use client'
import Image from 'next/image';
import { FC } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ImageCarouselProps {
    urls: string[]
}

const ImageCarousel: FC<ImageCarouselProps> = ({ urls }) => {
    return (

        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >

            {urls.map((url) => (
                <div className='relative flex bg-red-300 w-24 h-24'>
                    <Image
                        src={url}
                        alt='Customized, stamped golf wedge'
                        fill
                        className='object-cover'
                    />
                </div>

            ))}
        </Carousel>

    )
}

export default ImageCarousel