import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Layout({ children }) {
  const router = useRouter();
  const[spaceNav, setSpaceNav]=useState(router.pathname=='/' ?"":<div className='h-space-nav'></div>)
  const [fontSize, setFontSize]=useState(16);

  return (
    <html style={{'fontSize':fontSize}}>
      <Navbar />
      {spaceNav}
      <main >{children}</main> 
      <Footer fontSize={fontSize} setFontSize ={setFontSize}/>
    </html>
  )
}