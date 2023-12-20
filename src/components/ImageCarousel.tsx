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
                    items: 1
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >


            {urls.map((url) => (



                <div key={url} className='shadow-white  shadow-inner relative h-[300px] sm:h-[400px] md:h-[500px] w-[300px] sm:w-[400px] md:w-[500px] flex bg-green-300 mx-auto '>
                  
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