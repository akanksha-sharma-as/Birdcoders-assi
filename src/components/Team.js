import T1 from '../img/T1.png';
import T2 from '../img/T2.png';
import T3 from '../img/T3.png';
import T4 from '../img/T4.png';

export default function Team() {
    return (
        <>
            <div className="team">
                <div className="t-head">
                    <div className="heading">
                        Our Leadership
                    </div>
                    <div className="txt">
                        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    </div>
                </div>
                <div className="t-members">
                    <div className="t-member">
                        <img src={T1} alt='img to define' className='t-img' />
                        <div className="member-info">
                            <div className="m-i-h">Andry Ford</div>
                            <div>CEO at Whatever</div>
                        </div>
                    </div>
                    <div className="t-member">
                        <img src={T2} alt='img to define' className='t-img' />
                        <div className="member-info">
                            <div className="m-i-h">Andry Ford</div>
                            <div>CEO at Whatever</div>
                        </div>
                    </div>
                    <div className="t-member">
                        <img src={T3} alt='img to define' className='t-img' />
                        <div className="member-info">
                            <div className="m-i-h">Andry Ford</div>
                            <div>CEO at Whatever</div>
                        </div>
                    </div>
                    <div className="t-member">
                        <img src={T4} alt='img to define' className='t-img' />
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