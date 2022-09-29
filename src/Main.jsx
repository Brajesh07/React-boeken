import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Trending from './components/Trending';
import ShopIcon from './components/ShopIcon';
import Arival from './components/Arival';
import About from './components/About';
import Theme from './components/Theme';
import Customer from './components/Customer';
import FromsGram from './components/FormsGram';
import Blogs from './components/Blogs';
import FormData from './components/FormData';
import FooterMain from './components/FooterMain';

function Main() {
  return (
    <>
    <Header />
    <Banner />
    <Trending name="brajesh" />
    <ShopIcon />
    <Trending />
    <Trending />    
    <Arival />
    <About />
    <Trending />
    <Theme />
    <Trending />
    <Customer />
    <FromsGram />
    <Blogs />
    <FormData />
    <FooterMain />
    </>
  )
}

export default Main