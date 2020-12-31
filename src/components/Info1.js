import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import T2 from '../img/T2.png';

export default function Info1() {
    return (
        <>
            <div className="info1">
                <div className="hero">
                    <div className="hero-1">
                        DESIGN INSPIRATION
                    </div>
                    <div className="hero-2">
                        Convallis turpis erat tempus, viverra aliquet.
                    </div>
                    <div className="hero-3">
                        <button id="i1-btn">Get In Touch</button>
                    </div>
                    <div id="info1-review">
                        <div className="review">
                            <div className="r-txt">
                                I feel so much less stressed ❤️ as I now know we’re doing everything by the book.”</div>
                            <div className="r-bottom">
                                <img src={T2} alt='img to define' className='r-img' />
                                <div className="member-info">
                                    <div className="m-i-h">Andry Ford</div>
                                    <div>CEO at Whatever</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <ImageSlider slides={SliderData} />
                </div>
            </div>
        </>
    );
}