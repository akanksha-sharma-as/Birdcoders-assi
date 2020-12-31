import { FaExclamationCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

export default function Info5() {
    return (
        <>
            <div className="info5 bg-5">
                <div className="i5-head">
                    <div id="i5-headtxt" className="cs-head">
                        <div id="cs-h" className="hero-1">
                            DESIGN CONCEPT
                    </div>
                        <div className="heading">
                            The best design for your studio website
                    </div>
                    </div>
                    <div className="txt">
                        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    </div>
                </div>
                <div className="i5-cards">
                    <div className="i5-card">
                    <FaExclamationCircle size={55} color="gray"  />
                    <div className="i5-card-item">
                        <div className="i5-card-head">Design Concept</div>
                        <div className="i5-card-txt">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.</div>
                    </div>
                    </div>
                    <div className="i5-card">
                    <FaClock size={40} color="gray" />
                    <div className="i5-card-item">
                        <div className="i5-card-head">Developing websites</div>
                        <div className="i5-card-txt">Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper.</div>
                    </div>
                    </div>
                    <div className="i5-card">
                    <FaClock size={40} color="gray"  />
                    <div className="i5-card-item">
                        <div className="i5-card-head">Developing websites</div>
                        <div className="i5-card-txt">.Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper.</div>
                    </div>
                    </div>
                    <div className="i5-card">
                    <FaExclamationCircle size={55} color="gray"  />
                    <div className="i5-card-item">
                        <div className="i5-card-head">Design Concept</div>
                        <div className="i5-card-txt">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}