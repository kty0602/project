import HeaderContainer from '../containers/common/HeaderContainer';
import Infosearch from '../components/information/Infosearch';
import Maininfo from '../components/information/maininfo';

// 자동차 정보/보험 페이지
const Information = () => {
  return (
    <div>
      <HeaderContainer />
      <Maininfo />
      <Infosearch />
    </div>
  );
};

export default Information;