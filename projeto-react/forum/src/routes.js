import { NotFound } from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserAccount from './components/UserAccount/UserAccount'
import Home from '../src/components/Home/Home'
import CreatePost from './components/CreatePost/CreatePost';
import MyAnswers from './components/MyAnswers/MyAnswers';
import Answer from './components/Answer/Answer';
import EditPost from './components/EditPost/EditPost';
import EditAnswer from './components/EditAnswer/EditAnswer';
import EditUserPost from './components/EditUserPost/EditUserPost';



function AppRoutes() {
  return (
    <Router>
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" Component={Login} />
      <Route path="/Register" Component={Register} />
      <Route path="/UserAccount" Component={UserAccount}/>
      <Route path="/Home" Component={Home}/>

      <Route path="/CreatePost" Component={CreatePost}/>
      <Route path="/EditPost" Component={EditPost}/>
      <Route path="/EditUserPost/:id" Component={EditUserPost}/>

      <Route path="/Answer/:id" Component={Answer}/>
      <Route path="/MyAnswers/:id" Component={EditAnswer}/>
      <Route path="/MyAnswers" Component={MyAnswers}/>
    </Routes>
  </Router>
  );
}

export default AppRoutes;
