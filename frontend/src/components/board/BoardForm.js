import styled from "styled-components";
import BoardComboBox from "./BoardComboBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BoardPaging from "../common/BoardPaging";

const BoardBlock = styled.div`
    width: 100%;
`

const BoardContent = styled.div`
  background: white;
  width: 1280px;
  display: flex;
  margin: auto;
  margin-top: 68px;
  padding: 2rem;

  .banel {
    width: 100%;
    height: 200px;
  }
  .contentBlock {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    background: white;
    justify-content: center;
  }

  .text {
      font-size: 40px;
      margin-bottom: 50px;
      font-weight: bold;
      margin-left: 3rem;
  }

  .div {
    width: 100%;
    padding: 2rem;

    .table {
      border-collapse: collapse;
      width: 100%;
      margin: 2rem auto;
      font-size: 18px;
      text-align: center;
      border-top: 1px solid black;

      th,
      td {
        border-bottom: 1px solid lightgray;
        padding: 0.5rem;
      }

      th {
        background-color: lightgray;
      }

      td {
        background-color: white;
      }

      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: orange;
        }
      }
    }

    .div2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 2rem;

      .input {
        width: 300px;
        height: 40px;
        padding: 0.5rem;
        font-size: 18px;
        border: 1px solid lightgray;
        border-radius: 5px;
      }

      .button {
        width: 80px;
        background: lightgray;
        border-radius: 10px;
        border: 1px solid lightgray;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          color: orange;
        }
      }

      .button2 {
        width: 100px;
        background: lightgray;
        border-radius: 10px;
        border: 1px solid lightgray;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          color: orange;
        }
      }
    }
  }
`;




const OPTIONS = [
	{ value: "t:", name: "제목" },
	{ value: "w:", name: "작성자" },
	{ value: "c:", name: "내용" },
];

const BoardItem = ({boards}) => {

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

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>댓글 수</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {
                    boards.data.dtoList.map(board => (
                        <tr key={board.bno}>
                            <td><Link to = {`${process.env.PUBLIC_URL}/board/read?bno=${board.bno}`}>{board.bno}</Link></td>
                            <td><Link to = {`${process.env.PUBLIC_URL}/board/read?bno=${board.bno}`}>{board.title}</Link></td>
                            <td>{board.replyCount}</td>
                            <td>{board.writerNickname}</td>
                            <td>{formatDateTime(board.createtime)}</td>
                        </tr>
                    
                    ))
                }
            </tbody>
        </table>
    )
}

const BoardForm = ({ boards, error, changeBtypeField, handleChangePage }) => {

   const navigate = useNavigate();
   const [menu,setMenu] = useState('t:');
   const [menuInput,setMenuInput] = useState('');

   const handleOnKeyPress = e => {
    if(e.key === 'Enter') {
        e.preventDefault();
        changeBtypeField({
            menu: menu,
            input: menuInput
        })
        setMenuInput('');
    }
   }

   if (error) {
    return <BoardBlock>에러가 발생했습니다.</BoardBlock>;
  }

   return(
        <BoardBlock>
            <BoardContent>
                  <div className="contentBlock">
                    <div className="div">
                        <text className="text">커뮤니티</text>
                        <div className="div2">
                            <BoardComboBox 
                                options={OPTIONS} 
                                defaultValue={menu}
                                setMenu={setMenu}      
                            />
                            <input 
                                className="input"
                                value={menuInput}
                                onChange={(e) => setMenuInput(e.target.value)}
                                onkeypress={handleOnKeyPress}
                            />
                            <div 
                                class = "button" 
                                onClick={() => changeBtypeField({
                                    menu: menu,
                                    input: menuInput
                                })}>
                                검색
                            </div>
                            <div
                                class = "button2" 
                                onClick={() => {
                                    navigate(`${process.env.PUBLIC_URL}/write`);
                                }}
                            >
                                글 작성
                            </div>
                        </div>
                        {boards && (
                            <BoardItem boards={boards} />
                        )}
                        <BoardPaging
                          handleChangePage={handleChangePage}
                          boards = {boards}
                        />
                    </div>
                </div>
            </BoardContent>
        </BoardBlock>
   )
}

export default BoardForm;