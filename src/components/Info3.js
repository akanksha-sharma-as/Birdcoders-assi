import i4 from '../img/4.png';

export default function Info3() {
    return (
        <>
            <div className="info3">
                <div className="i3-img">
                    <img src={i4} alt='img to define' className='img' />
                </div>
                <div id="i3-txt" className="info-txt">
                <div className="heading">The best design for your studio website</div>
                        <div className="txt">
                            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    </div>
                    <div className="link"><a href="javascript:void(0)">Experienced Team</a></div>
                </div>
            </div>
        </>
    );
}