// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function CarouselSlider() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     centerMode: true,
    //     variableWidth: true
    // };
    return (
        <>
            <div className="carousel-slider">
                <div className="cs-head">
                    <div id="cs-h" className="hero-1">
                        DESIGN CONCEPT
                    </div>
                    <div className="heading">
                        The best design for your studio website
                    </div>
                </div>
                <div className="cs-cards">
                    {/* <Slider {...settings}> */}
                            <div className="slider_items i5-card-item">
                                <div className="i5-card-head">Name</div>
                                <div className="i5-card-txt">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum expedita, reiciendis omnis labore, cum asperiores fuga tempore quisquam delectus impedit nostrum totam.
                            </div>
                                <div className="link"><a href="#">Experienced Team</a></div>
                            </div>
                            <div className="slider_items">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum expedita, reiciendis omnis labore, cum asperiores fuga tempore quisquam delectus impedit nostrum totam.
                    </div>
                            <div className="slider_items">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum expedita, reiciendis omnis labore, cum asperiores fuga tempore quisquam delectus impedit nostrum totam.
                    </div>
                        {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /> */}
                        {/* <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
                    {/* </Slider> */}
                </div>
            </div>
        </>
    );
}