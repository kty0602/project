import BoardReadContainer from "../containers/board/BoardReadContainer";
import ReplyFormContainer from "../containers/board/ReplyFormContainer";
import HeaderContainer from "../containers/common/HeaderContainer";


const BoardReadpage = () => {
    return(
        <div>
            <HeaderContainer/>
            <BoardReadContainer/>
            <ReplyFormContainer/>
        </div>
    )
}

export default BoardReadpage;