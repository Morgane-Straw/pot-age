import HomeNavBar from './navbar/HomeNavBar';
import DefaultNavBar from './navbar/DefaultNavbar';
import SignInLoginNavBar from './navbar/SignInNavbar';
import Footer from './Footer'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Layout({ children }) {
  const router = useRouter();
  const [zoom, setZoom]=useState(100);

  return (
    <html style={{'zoom':zoom+"%"}}>
      {
        router.pathname =='/' ? <HomeNavBar></HomeNavBar> 
        : (router.pathname =='/inscription' || router.pathname =='/login' ? <SignInLoginNavBar></SignInLoginNavBar> :<DefaultNavBar></DefaultNavBar> )
      }
      {router.pathname=='/' ?"":<div className='h-space-nav'></div>}
      <main className='pb-5'>{children}</main> 
      {/* <Footer fontSize={fontSize} setFontSize ={setFontSize}/> */}
      <Footer zoom={zoom} setZoom ={setZoom}/>
    </html>
  )
}