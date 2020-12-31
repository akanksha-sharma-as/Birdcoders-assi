import i2 from '../img/2.png';
import i3 from '../img/3.png';

export default function Info2() {
    return (
        <>
            <div className="info2">
                <div className="info2-left">
                    <img src={i2} alt='img to define' className='i2-l-img' />
                </div>
                <div className="info2-right">
                    <div className="i2-r-txt">
                        <div className="heading">Requirements gathering and analysis for references.</div>
                        <div className="txt">
                            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    </div>
                    </div>
                    <div className="i2-r-img">
                        <img src={i3} alt='img to define' className='i2-r-imgg' />
                    </div>
                </div>
            </div>
        </>
    );
}