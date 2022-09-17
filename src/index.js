import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import Header from "./Component/Header";
import TextBox from './Component/Textbox';
import { useState } from 'react';
import Footer from './Component/Footer';


export default function App() {

  const [mode, setMode] = useState('light');
  const [navBtn, setBtnCh] = useState("Dark Mode");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtnCh('LightMode');
      document.body.style.backgroundColor = "#08064B";
      document.body.style.color = "white";
    }
    else {
      setMode('light')
      setBtnCh('DarkMode');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
/*   <BrowserRouter>
      <Route path="/" element={<Header mode={mode} toggleMode={toggleMode} title={navBtn} />} >
      <Routes>
        <Route index element={<TextBox mode={mode} />} />
        <Route path="/TextBox  " element={<TextBox mode={mode} />} />
        <Route path="/" element={<Footer />} />
      </Routes>
      </Route>
    </BrowserRouter>*/

     <>
     <Header mode={mode} toggleMode={toggleMode} title={navBtn} />
     <TextBox mode={mode} />  
     <Footer/>
     </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals()