import React from 'react'
import Header from './header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <ScrollToTop/>
    <Footer/>      
    </>
  )
}
export default AppLayout ;