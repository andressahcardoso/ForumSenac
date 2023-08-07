import './App.css';
import Login from '../src/components/Login/Login'
import Register from '../src/components/Register/Register'
import UserAccount from './components/UserAccount/UserAccount'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/Register" Component={Register} />
      <Route path="/UserAccount" Component={UserAccount}/>
    </Routes>
  </Router>
  );
}

export default App;
