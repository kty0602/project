import HeaderContainer from "../containers/common/HeaderContainer";
import SimilarCars from "../components/Reco/SimilarCars";
import RankigView from "../components/Reco/RankigView";
import SexRankingView from "../components/Reco/SexRankingView";
import AgeRankingView from "../components/Reco/AgeRankingView";
// 자동차 정보/보험 에 대한 페이지

const RecoPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <SimilarCars/>
            <RankigView/>
            <SexRankingView/>
            <AgeRankingView/>
        </div>
    )
}

export default RecoPage;