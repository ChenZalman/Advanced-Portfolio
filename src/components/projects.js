import './projects.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import dataProjects from '../data/projects'
import Project from './Project';

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

        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={1}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customTransition="all 3s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            transitionDuration={1000}
        >
            {dataProjects.map((project, i) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Project props={project} key={i} />
                    {i < dataProjects.length - 1
                        &&
                        <hr />}
                </div>
            ))}
        </Carousel>

    )
}
