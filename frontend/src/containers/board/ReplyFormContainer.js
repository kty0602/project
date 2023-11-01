import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ReplyForm from "../../components/board/ReplyForm";
import { listReplys, modifyReply, submitReply } from "../../modules/reply";
import { useEffect } from "react";
import { deleteReply } from "../../lib/api/reply";


const ReplyFormContainer = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bno = searchParams.get('bno');
    const dispatch = useDispatch();

    const { replys, error, loading, user, } = useSelector(
        ({ replys, loading, user }) => ({
            replys : replys.replys,
            error : replys.error,
            loading : loading['reply/LIST_REPLY'],
            user : user.currentUser,
        })
    )

    useEffect(() => {
        dispatch(listReplys(bno));
    },[dispatch,bno])

    const handleSubmit = (content) => {
        dispatch(submitReply({ bno, content, id: user.id }));
        setTimeout(() => {
            dispatch(listReplys(bno));
          }, 100); // 0.1초 후에 listReplys 액션을 딜레이시킴
      };

    const handleModify = ({ rno, content }) => {
        dispatch(modifyReply({ bno, content, rno }))
    }
      

    const onRemove = async rno => {
        try {
            await deleteReply(rno);
            dispatch(listReplys(bno));
        } catch (e) {
          console.log(e);
        }
      }

    return (
        <ReplyForm
            replys = {replys}
            error = {error}
            loading = {loading}
            user = {user}
            handleSubmit = {handleSubmit}
            handleModify = {handleModify}
            onRemove = {onRemove}
        />
    )
}

export default ReplyFormContainer;