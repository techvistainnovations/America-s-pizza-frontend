import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSlider = () => {
    const responsive = { 
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.5,
            slidesToSlide: 1 // optional, default to 1.
        },
    };
    return (
        <section className='container mx-auto py-[20px]'>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                arrows={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                rewindWithAnimation={true}
                centerMode={false}
                keyBoardControl={false}
                customTransition="all 1s"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px px-1"
            >
                <div><img draggable="false" className='rounded-xl w-[542px] h-[325px] object-cover' loading="lazy" src="/images/ui/image-614598-1671521691.jpeg" alt="" /></div>
                <div><img draggable="false" className='rounded-xl w-[542px] h-[325px] object-cover' loading="lazy" src="/images/ui/image-645888-1671521691.jpeg" alt="" /></div>
                <div><img draggable="false" className='rounded-xl w-[542px] h-[325px] object-cover' loading="lazy" src="/images/ui/image-746571-1671521691.jpeg" alt="" /></div>
                <div><img draggable="false" className='rounded-xl w-[542px] h-[325px] object-cover' loading="lazy" src="/images/ui/image-852353-1671521691.jpeg" alt="" /></div>
                <div><img draggable="false" className='rounded-xl w-[542px] h-[325px] object-cover' loading="lazy" src="/images/ui/image-981361-1671521691.jpeg" alt="" /></div>
            </Carousel>
        </section>
    )
}
export default HomeSlider