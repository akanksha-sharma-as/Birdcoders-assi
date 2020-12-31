import T1 from '../img/T1.png';
import T2 from '../img/T2.png';

export default function Review() {
  return (
    <>
      <div className="reviews">
        <div id="review-r" className="review">
          <div className="r-txt">
            “Every single person comes away and says - wow that's a really slick experience, that was so easy to use. I feel so much less stressed as I now know we’re doing everything by the book.”
          </div>
          <div className="r-bottom">
            <img src={T1} alt='img to define' className='r-img' />
            <div className="member-info">
              <div className="m-i-h">Andry Ford</div>
              <div>CEO at Whatever</div>
            </div>
          </div>
        </div>
        <div id="review-r" className="review">
          <div className="r-txt">
            I feel so much less stressed ❤️ as I now know we’re doing everything by the book.”
          </div>
          <div className="r-bottom">
            <img src={T2} alt='img to define' className='r-img' />
            <div className="member-info">
              <div className="m-i-h">Andry Ford</div>
              <div>CEO at Whatever</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}