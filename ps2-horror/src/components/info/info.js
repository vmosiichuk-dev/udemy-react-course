import "./info.css";
import ps from "./img/ps-logo.svg";

function Info() {
    return (
        <div className="info">
            <h1>PS2 
                <img src={ps} alt="" />Survival Horror Classics</h1>
            <p className="info-p">Total: 
                <span className="info-span">4</span>
            </p>
            <p className="info-p">Played: 
                <span className="info-span">2</span>
            </p>
        </div>
    );
}

export default Info;