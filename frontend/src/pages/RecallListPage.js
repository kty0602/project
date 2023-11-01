import Chart from "../components/recall/Chart";
import RecallList from "../components/recall/RecallList";
import WordClude from "../components/recall/WordClude";
import HeaderContainer from "../containers/common/HeaderContainer"

const RecallListPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <RecallList />
            <Chart/>
            <WordClude/>
        </div>
    )
}

export default RecallListPage;