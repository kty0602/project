import '../Fonts/Font.css';
import '../information/information.css';
import Icon01 from '../information/svg/Icon-01.svg';
import Icon02 from '../information/svg/Icon-02.svg';
import Icon03 from '../information/svg/Icon-03.svg';
import Icon04 from '../information/svg/Icon-04.svg';
import carImage from '../information/svg/image-01.svg';

// 자동차 신차 보험에 관한 페이지
const Maininfo = () => {
  return (
    <div className="main-container">
        <img src={carImage} className="car-image" style={{height: 550}} alt="car"/>
      <div className="header-text">자동차 어디까지 알고 계신가요?</div>
      <div className="icon-container">
        <div className="icon-item">
          <img src={Icon01} alt="Icon 01" />
          <div className="icon-text">자동차 정보</div>
        </div>
        <div className="icon-item">
          <img src={Icon02} alt="Icon 02" />
          <div className="icon-text">자동차 보험</div>
        </div>
        <div className="icon-item">
          <img src={Icon03} alt="Icon 03" />
          <div className="icon-text">자동차 옵션</div>
        </div>
        <div className="icon-item">
          <img src={Icon04} alt="Icon 04" />
          <div className="icon-text">자동차 보험 추천</div>
        </div>
      </div>
    </div>
  );
};

export default Maininfo;