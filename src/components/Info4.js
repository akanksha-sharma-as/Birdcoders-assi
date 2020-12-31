import i5 from '../img/5.png';

export default function Info4() {
    return (
        <>
            <div className="info4">
                <div id="i4-txt" className="info-txt">
                    <div className="heading">The best design for your studio website</div>
                    <div className="txt">
                        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    </div>
                    <div className="link"><a href="#">Experienced Team</a></div>
                </div>
                <div  id="i4-img" className="i3-img">
                    <img src={i5} alt='img to define' className='img' />
                </div>
            </div>
        </>
    );
}