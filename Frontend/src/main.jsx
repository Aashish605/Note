import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from "./Home/Home.jsx";
import Note from "./Note/Note.jsx";
import Past from "./PastPaper/Past.jsx";
import AboutUs from "./AboutUs/About.jsx";
import Syllabus from "./Syllabus/Syllabus.jsx";
import List from './Components/List.jsx' 
import Pdf from "./Components/Pdf.jsx";
// import Serach from './Components/Serach.jsx';
// import Error from './Components/Error.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="Note" element={<Note />} />
      <Route path="pastpapers" element={<Past />} />
      <Route path="syllabus" element={<Syllabus />} />
      <Route path="list/:course" element={<List />} />
      <Route path=":subj" element={<Pdf />} />
      {/* <Route path='search/:data' element={<Serach />} /> */}
      <Route path='maintenance' element={<Error />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
