import { NotFound } from './pages/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserAccount from './components/UserAccount/UserAccount'
import Home from '../src/components/Home/Home'
import CreatePost from './components/CreatePost/CreatePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyAnswers from './components/MyAnswers/MyAnswers';
import MyQuestions from './components/MyQuestions/Myquestions';
import { EditQuestion } from './components/EditQuestion/EditQuestion';
import AnswerPost from './components/AnswerPost/AnswerPost';
import EditAnswer from './components/EditAnswer/EditAnswer';



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
      <Route path="/Answer/:id" Component={AnswerPost}/>
      <Route path="/MyAnswers" Component={MyAnswers}/>
      <Route path="/MyAnswers/:id" Component={EditAnswer}/>
      <Route path="/MyQuestions" Component={MyQuestions}/>
      <Route path="/Question/:id" Component={EditQuestion}/>

    </Routes>
  </Router>
  );
}

export default AppRoutes;
