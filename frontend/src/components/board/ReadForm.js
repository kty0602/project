import { useState } from "react";
import styled from "styled-components";
import AskRemoveModal from "./AskRemoveModal";
import palette from "../../lib/styles/palette";
import image from '../../lib/image/reply.png';

const ReadBlock = styled.div`
  width: 100%;
`;

const ReadContent = styled.div`
  width: 1280px;
  display: flex;
  margin: 68px auto;
  .buttonArea {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    width: 850px;
    margin-right: 1.5rem;
  }
  .img {
    width: 16px;
    height: 16px;
  }
  .contentBlock {
    display: flex;
    width: 1400px;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .div {
  margin-top: 30px auto;
  width: 850px;
  min-height: 800px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
  .title {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    font-size: 28px;
  }
  .head {
    margin: 10px;
    display: flex;
    padding: 10px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }
  .id {
    font-size: 13px;
    font-weight: 700;
  }
  .writeDate {
    font-size: 12px;
    color: ${palette.gray[6]};
  }
  .body {
    margin-left: 10px;
    margin-right: 10px;
    flex: 1;
    background: white;
  }
  .content {
    outline: none;
    padding: 10px;
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
  .content img {
  max-width: 100%;
  height: auto;
  }
  .button {
    text-align: center;
    margin: 10px auto;
    padding: 10px;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    background: skyblue;
    width: 180px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
  .a {
    margin-left: 20px;
    color: #616161;
    text-decoration: underline;
  }
  .areabutton {
    margin-left: 10px;
    width: 80px;
    padding: 2px;
    background: lightgray;
    border-radius: 5px;
    border-width: 1px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
`;

const ReadForm = ({ board, loading, error, user, onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  /**날짜 데이터 포맷*/
  const formatDateTime = (dateTime) => {
    const formattedDateTime = new Date(dateTime).toLocaleString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedDateTime;
  };

  if (error) {
    if (error.response && error.response.status === 404) {
      return <ReadBlock>존재하지 않는 게시물입니다.</ReadBlock>;
    }
    return <ReadBlock>오류 발생</ReadBlock>;
  }

  if (loading || !board) {
    return null;
  }

  return (
    <>
      <ReadBlock>
        <ReadContent>
          <div className="contentBlock">
            <div className="div">
            <text className="title">{board.title}</text>
              <div className="head">
                <div>
                  <text className="id">{board.writerNickname}</text><br/>
                  <text className="writeDate">{formatDateTime(board.createtime)}</text>
                </div>
                <div>
                  <img className="img" src={image} alt="reply"/>
                  <text> 댓글 수 : {board.replyCount}</text>
                </div>
              </div>
              <div className="body">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: board.content }}
                />
              </div>
            </div>
            <div className="buttonArea">
              <a href="/boardlist" className="areabutton">
                  목록
              </a>
              {user && user.id === board.id && (
                <div className="areabutton" onClick={onEdit}>
                  수정
                </div>
              )}
              {user && user.id === board.id && (
                <div className="areabutton" onClick={onRemoveClick}>
                  삭제
                </div>
              )}
            </div>
          </div>
        </ReadContent>
      </ReadBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default ReadForm;
