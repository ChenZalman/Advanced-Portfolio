import React from 'react'
import './projects.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

export default function Projects() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            {/* <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
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
                slidesToSlide={2}
                swipeable
                transitionDuration={1000}
            >
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354091619383414784?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    <p>Hello</p>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="432" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354091619383414784?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="432" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
            </Carousel> */}




            <Carousel
                autoPlaySpeed={1}
                autoPlay={true}
                responsive={responsive}
                customTransition="all 1s linear"
                infinite={true}
                transitionDuration={1000}
                rewind={false}
                rewindWithAnimation={false}
            >
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354091619383414784?collapsed=1" height="670" width="504" allowfullscreen="" title="Embedded post"></iframe>
                    <p>Hello</p>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336?collapsed=1" height="670" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="670" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="432" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354091619383414784?collapsed=1" height="670" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336?collapsed=1" height="670" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="670" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="432" width="504" allowfullscreen="" title="Embedded post"></iframe>
                </div>
            </Carousel>
        </div>
    )
}
