import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin.jsx';
import Layout from './Layout.jsx';
import Forgotpassword from './components/Forgotpassword/Forgotpassword.jsx';
import Resetpassword from './components/Resetpassword/Resetpassword.jsx';
import Userdashboard from './components/Userdashboard/Userdashboard.jsx';
import CreateProject from './components/CreateProject/CreateProject.jsx';
                           
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="/resetpassword/:token" element={<Resetpassword />}></Route>
          <Route path='/userdashboard' element={<Userdashboard />} />
          <Route path='/userdashboard/addproject' element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
