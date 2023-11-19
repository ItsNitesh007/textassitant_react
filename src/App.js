import React, { useState } from 'react'
import Navbar from './component/Navbar'
import TextArea from './component/TextArea'

export default function App() {
  const[mode,setMode]=useState('light');

  const toggleMode=()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='grey';
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
}
  }

  return (
    <div>
      <Navbar title="Text Assistant" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <TextArea Heading="Enter text to change" mode={mode} />


      {/* <Navbar/> */}
  </div>
  )
}
