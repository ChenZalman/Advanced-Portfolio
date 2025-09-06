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
                </div>
            </Carousel>
        </div>
    )
}
