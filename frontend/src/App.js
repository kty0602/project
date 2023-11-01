import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import BoardListPage from "./pages/BoardListPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import Mainpage from "./pages/Mainpage";
import CarSearchpage from "./pages/CarSearchpage";
import Information from "./pages/Information";
import BoardReadpage from "./pages/BoardReadpage";
import OAuth2RedirectHandlerPage from "./components/auth/OAuth2RedirectHandler";
import UserinfoPage from "./pages/UserinfoPage";
import RecoPage from "./pages/RecoPage";
import RecallListPage from "./pages/RecallListPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/boardlist" element={<BoardListPage/>}/>
      <Route path="/carsearch" element={<CarSearchpage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/write" element={<WritePage/>}/>
      <Route path="/Information" element={<Information/>}/>
      <Route path="/board/read" element={<BoardReadpage/>}/>
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandlerPage/>}/>
      <Route path="/userinfo" element={<UserinfoPage/>}/>
      <Route path="/reco" element={<RecoPage/>}/>
      <Route path="/recall" element={<RecallListPage/>}/>
    </Routes>
  );
}

export default App;
