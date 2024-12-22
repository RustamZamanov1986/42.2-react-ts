import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from '../src/components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import About from '../src/components/pages/About/About';
import Home from '../src/components/pages/Home/Home';
import Users from '../src/components/pages/Users/Users';
import Clients from '../src/components/pages/Clients';
import Amazon from '../src/components/pages/Clients/components/Amazon/Amazon';
import Facebook from '../src/components/pages/Clients/components/Facebook/Facebook';
import Google from '../src/components/pages/Clients/components/Google/Google';
import User from '../src/components/pages/Users/Users';

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson11 from 'lessons/Lesson11/Lesson11';
import Lesson13 from './lessons/Lesson13/components/Lesson13';
import Homework13 from "./homeworks/Homework13/Homework13";

//homeworks
// import Homework07 from './homeworks/Homework07/Homework07';
// import Homework08 from './homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework11 from 'homeworks/Homework11/Homework11';
// import Homework13 from 'homeworks/Homeworks13/Homework13';

// consultations
// import Consultation04 from './consultations/Consultation04/Consultation04';
// import Consultation05 from 'consultations/Consultation05/Consultation05';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          {/* Пример консультации 7. В url добавляется параметр id(переменная) - синтаксис :id */}
          <Route path='/users/:id' element={<User/>} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='/lesson13' element={<Lesson13 />} />
          <Route path='/homework13' element={<Homework13 />} />
          <Route path='*' element='Page not found' />
        </Routes>
      </Layout>
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Consultation04 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Consultation05 /> */}
      {/* <Homework09 /> */}
      {/* <Lesson11 /> */}
      {/* <Homework11 /> */}
    </BrowserRouter>
  );
}

export default App;