import { useEffect } from 'react';
import { ACCESS_TOKEN } from '../../lib/api/OAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../modules/auth';
import { check } from '../../modules/user';

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(({user}) => user.currentUser);

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    const handleLoginSuccess = (token) => {
      localStorage.setItem(ACCESS_TOKEN, token);
      dispatch(loginSuccess(token));
      dispatch(check());
    };

    const handleLoginFailure = (error) => {
      console.log("OAuth2RedirectHandler---", error);
      dispatch(loginFailure(error));
      navigate('/login');
    };

    if (token) {
      handleLoginSuccess(token);
    }

    if (error) {
      handleLoginFailure(error);
    }
  }, [dispatch, navigate, searchParams]);

  useEffect(() => {
    if (currentUser !== null) {
      if (currentUser && currentUser.sex === null && currentUser.year === null) {
        navigate('/userinfo');
      } else {
        navigate('/');
      }
    }
  }, [currentUser, navigate]);
  

};

export default OAuth2RedirectHandler;
