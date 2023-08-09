import './App.css';
import Login from '../src/components/Login/Login'
import Register from '../src/components/Register/Register'
import UserAccount from './components/UserAccount/UserAccount'
import Home from '../src/components/Home/Home'
import CreatePost from './components/CreatePost/CreatePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topics from './components/Topics/Topics';
import MyTopics from './components/MyTopics/MyTopics';
import MyAnswers from './components/MyAnswers/MyAnswers';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/Register" Component={Register} />
      <Route path="/UserAccount" Component={UserAccount}/>
      <Route path="/Home" Component={Home}/>
      <Route path="/CreatePost" Component={CreatePost}/>
      <Route path="/Topics" Component={Topics}/>
      <Route path='/MyTopics' Component={MyTopics}/>
      <Route path="/MyAnswers" Component={MyAnswers}/>
    </Routes>
  </Router>
  );
}

export default App;
