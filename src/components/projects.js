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
        //     autoPlaySpeed={0.5}
        //     autoPlay={true}
        //     responsive={responsive}
        //     customTransition="all 5s linear"
        //     infinite={true}
        //     transitionDuration={10000}
        //     rewind={false}
        //     rewindWithAnimation={true}
        //     arrows={false}
        // >
          additionalTransfrom={0}
  arrows = {false}
  autoPlay = {true}
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  customTransition="all 3s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite = {true}
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
  slidesToSlide={1}
  swipeable
  transitionDuration={1000}
>
            {dataProjects.map((project, i) => (
                <div style={{display: 'flex', gap: '10px'}}>
                    <Project props={project} key={i} />
                    {i < dataProjects.length - 1
                        &&
                        <hr />}
                </div>   
            ))}

            {/* <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354091619383414784?collapsed=1" height="670" width="504" frameBorder={0} title='embeded post' ></iframe>
                    <p>Hello</p>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336?collapsed=1" height="670" width="504" frameBorder={0} title='embeded post'></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="670" width="504" frameBorder={0} title='embeded post'></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="432" width="504" frameBorder={0} title='embeded post'></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354091619383414784?collapsed=1" height="670"  width="504" frameBorder={0} title='embeded post'></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336?collapsed=1" height="670" width="504" frameBorder={0} title='embeded post'></iframe>
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="670" width="504" frameBorder={0} title='embeded post'></iframe> 
                </div>
                <div className='slide'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354576918756622336" height="432" width="504" frameBorder={0} title='embeded post'></iframe>
                </div> */}
             
        </Carousel>
         
    )
}
