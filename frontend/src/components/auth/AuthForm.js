import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeField, submitUserInfo } from "../../modules/user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ButtonWithMarginTop = styled(Button)`
    margin-top : 1rem;
`

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.gray[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  span {
    margin-right: 0.5rem;
  }
`;

const AuthForm = () => {
  const currentYear = new Date().getFullYear();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, sex, year, setinfo } = useSelector(({ user }) => ({
    currentUser: user.currentUser,
    sex: user.userinfo.sex,
    year: user.userinfo.year,
    setinfo : user.setinfo
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ key: name, value }));
  }
  
  const handleSubmit = () => {
    const data = {
      currentUser,
      sex,
      year,
    };
    // 사용자 정보 제출
    console.log(data);
    dispatch(submitUserInfo(data));
  };

  useEffect(() => {
    if(setinfo) {
      navigate('/')
    }
  });

  return (
    <AuthFormBlock>
      <h3>사용자 정보 입력</h3>
      <StyledInput 
        placeholder="생년입력" 
        type="number" 
        max={currentYear}
        min="1920"
        onChange={handleInputChange}
        name = 'year' 
      />
      <RadioWrapper>
        <span>성별:</span>
        <label>
          <input 
            type="radio" 
            name="sex" 
            value="남"
            onChange={handleInputChange}
          />
          남
        </label>
        <label>
          <input 
            type="radio" 
            name="sex" 
            value="여" 
            onChange={handleInputChange}
          />
          여
        </label>
      </RadioWrapper>
      <ButtonWithMarginTop 
        cyan 
        fullWidth 
        style={{ marginTop: '1rem'}}
        onClick={handleSubmit}
        >
            정보 입력
      </ButtonWithMarginTop>
    </AuthFormBlock>
  );
};

export default AuthForm;
