import "./fog-bg.css";

const FogBg = () => {
    return (
        <div className="fog-bg">
            <div id="fog-layer--1" className="fog">
                <div className="fog-img--1"></div>
                <div className="fog-img--2"></div>
            </div>
            <div id="fog-layer--2" className="fog">
                <div className="fog-img--1"></div>
                <div className="fog-img--2"></div>
            </div>
            <div id="fog-layer--3" className="fog">
                <div className="fog-img--1"></div>
                <div className="fog-img--2"></div>
            </div>
        </div>
    );
}

export default FogBg;