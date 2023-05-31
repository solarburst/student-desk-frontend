import { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './global.css'
import { getMe } from "./api"
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import { setAuth } from './redux/auth';
import { setProfile } from './redux/profile';

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const res = await getMe();
      if (res) {
        dispatch(setAuth(true));
        dispatch(setProfile(res));
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [dispatch])

  return (
    <>   
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        {/* <Route path="cards/:id" element={<AdPage/>}/>
        <Route path="add-post" element={<AddPost/>}/>
        <Route path="update-post/:id" element={<UpdatePost/>}/> */}
      </Routes>
    </>
  )
}

export default App
