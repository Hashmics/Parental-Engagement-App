import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Sidebar from './components/sidebar/sidebar'
import Reports from './pages/reports/Reports'
import TeacherProfile from './pages/teacherprofile/TeacherProfile'
import ParentProfile from './pages/parentprofile/ParentProfile'
import Chat from './pages/chat/Chat'


function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/teacherprofile' element={<TeacherProfile />} />
        <Route path='/parentprofile' element={<ParentProfile />} />
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

