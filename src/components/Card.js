import { FaChevronRight } from "react-icons/fa";

export default function Card() {
    return (
        <>
            <div className="card">
                <div className="c-head">
                    <div className="heading">
                        The best design for your studio website
                    </div>
                    <div id="c-link" className="link"><a id="c-link-txt" href="javascript:void(0)">Experienced Team</a><FaChevronRight size={18} color="#0e6fff" /></div>
                </div>
                <div className="c-cards">
                    <div className="c-card">
                        <div className="c-card-h">Audit</div>
                        <div id="card-txt" className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum expedita, reiciendis omnis labore, cum asperiores fuga tempore quisquam delectus impedit nostrum totam.
                            </div>
                            <hr className="card-hr" />
                            <div id="card-link"><a id="card-link-txt"  href="#">Experienced Team</a></div>
                    </div>
                    <div className="c-card">
                        <div className="c-card-h">Teamwork</div>
                        <div id="card-txt" className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum expedita, reiciendis omnis labore, cum asperiores fuga tempore quisquam delectus impedit nostrum totam.
                            </div>
                        <hr className="card-hr" />
                        <div id="card-link"><a id="card-link-txt"  href="#">Experienced Team</a></div>
                    </div>
                    <div className="c-card">
                        <div className="c-card-h">Create</div>
                        <div id="card-txt" className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum expedita, reiciendis omnis labore, cum asperiores fuga tempore quisquam delectus impedit nostrum totam.
                            </div>
                            <hr className="card-hr" />
                        <div id="card-link"><a id="card-link-txt"  href="#">Experienced Team</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}