import "./Slider.css";

import SliderImgFirst from "../../../../assets/img/slider_1.svg";

const Slider = () => {
    return (
        <div className="slider">
            <img src={SliderImgFirst} className="slider__img" alt="Slider 1" />
        </div>
    );
}

export default Slider;