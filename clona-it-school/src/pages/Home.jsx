import React from 'react'
import "../Styles/Home.css"
import { Button } from 'react-bootstrap'
// logo for the header part
import Microsoft from "../assets/microsoft.png"
import Adobe from "../assets/adobe.png"
import Apple from "../assets/apple.png"

// The images for the about section
import AboutUs1 from "../assets/about-us-1.png"
import AboutUs2 from "../assets/about-us-2.png"
import AboutUs3 from "../assets/about-us-3.png"
import AboutUs4 from "../assets/about-us-4.png"
import AboutUs5 from "../assets/about-us-5.png"
import AboutUs6 from "../assets/about-us-6.png"

// The Images for the Partners section
import Toluna from "../assets/toluna.png"
import Bulder from "../assets/123formbuilder.png"
import Nagarro from "../assets/nagarro.png"
import SoftVision from "../assets/cognizant.png"
import Production from "../assets/dreamproduction.png"
import Ness from "../assets/ness.png"
import Instapage from "../assets/instapage.png"
import Amdaris from "../assets/amdaris.png"
import Fortech from "../assets/fortech.png"
import Visma from "../assets/visma.png"

// The icons for the contact methods in the Footer section
import { BsWhatsapp } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { PiPhoneDisconnect } from "react-icons/pi"

export default function Home() {
  return (
    <>
    {/* //   Header section */}
      <header className='headerSection'>
        <h1 className='titleName'> <b> Bine ai venit! </b> </h1>
        <p className='subTitle'>Accelerator de cariere in <span className='dev'> <b> web development </b> </span>
        </p>
        <p className='subTitle'>
          <div className='flexIconsFirst'>
            Cursuri IT pentru incepatori cu certificare
            <div className='flexIconsSecond'>
              <div className='firstFlex'>
                <a href='https://www.microsoft.com/ro-ro/'> <img className='logoH' src={Microsoft} /> <span className='iconsH'> <b> Microsoft </b> </span> </a>
              </div>
              <div className='secondFlex'>
                <a href='https://www.adobe.com/ro/creativecloud.html?gclid=CjwKCAjwloynBhBbEiwAGY25dJVWnJ4-__E5ie-2xjLGA-cPKAWcb4krveiFtYYbzSRwD-owxeIpFhoCgw0QAvD_BwE&skwcid=AL!3085!3!282217116854!e!!g!!adobecom&mv=search&sdid=K42KVTW8&ef_id=CjwKCAjwloynBhBbEiwAGY25dJVWnJ4-__E5ie-2xjLGA-cPKAWcb4krveiFtYYbzSRwD-owxeIpFhoCgw0QAvD_BwE:G:s&s_kwcid=AL!3085!3!282217116854!e!!g!!adobecom!1474801431!56728594963&gad=1'> <img className='logoH' src={Adobe} /> <span className='iconsH'> <b> Adobe </b> </span> </a>
              </div>
              <div className='thirdFlex'>
                <a href='https://www.apple.com/ro/' > <img className='logoH' src={Apple} /> <span className='iconsH'> <b> Apple </b> </span> </a>
              </div>
            </div>
          </div>
        </p>
        <Button className='headerButton' >AFLA MAI MULTE</Button>
      </header>

      {/* Information about ItSchool */}
      <section className='aboutSection'>
        <h1 className='nameTitle'> <b> Ce este IT School? </b></h1>
        <h4>
          IT School este o comunitate educațională de IT, locul unde pasionații acestui domeniu se întâlnesc cu viitorii profesioniști. Timp de peste 7 ani, am construit alături de
          trainerii IT School un mediu de învățare specializat pentru toți cei care își doresc să descopere oportunitățile acestui domeniu.
          Ești pregătit să faci parte din comunitatea IT School?
        </h4>
        <div className='img'>
          <img className='AboutUs' src={AboutUs1} alt='AboutUs1' />
          <img className='aboutUs' src={AboutUs2} alt='AboutUs2' />
          <img className='aboutUs' src={AboutUs3} alt='AboutUs3' />
          <img className='AboutUs' src={AboutUs4} alt='AboutUs4' />
          <img className='aboutUs' src={AboutUs5} alt='AboutUs5' />
          <img className='aboutUs' src={AboutUs6} alt='AboutUs6' />
        </div>
      </section>

      {/* The Section with the Partners of the site */}
      <section className='PartnershipsS'>
        <h1 className='nameTitle'> <b> Parteneri </b></h1>
        <div className='PartnershipsLogo'>
          <a href='https://tolunacorporate.com/' > <img className='Partnerships' src={Toluna} alt='Toluna' /> </a>
          <a href='https://www.123formbuilder.com/' > <img className='partnerships' src={Bulder} alt='Bulder' /> </a>
          <a href='https://www.nagarro.com/en' > <img className='partnerships' src={Nagarro} alt='Nagarro' /> </a>
          <a href='https://www.cognizant.com/ro/en' > <img className='partnerships' src={SoftVision} alt='SoftVision' /> </a>
          <a href='https://dreamproduction.com/en/' > <img className='partnerships' src={Production} alt='Production' /> </a>
          <a href='https://www.ness.com/ness-romania/' > <img className='partnerships' src={Ness} alt='Ness' /> </a>
          <a href='https://instapage.com/' > <img className='partnerships' src={Instapage} alt='Instapage' /> </a>
          <a href='https://amdaris.com/' > <img className='partnerships' src={Amdaris} alt='Amdaris' /> </a>
          <a href='https://www.fortech.ro/' > <img className='partnerships' src={Fortech} alt='Fortech' /> </a>
          <a href='https://www.visma.ro/' > <img className='partnerships' src={Visma} alt='Visma' /> </a>
        </div>
      </section>

      {/* The Footer part */}
      <footer className='footerSection'>
        <p className='footertext'>IT School România © 2021. Toate drepturile rezervate.</p>
        <div className='ContactUs'>
          <a href="https://wa.me/+40753397908" > <BsWhatsapp className='WhatApp' /> </a>
          <a href="https://www.linkedin.com/in/DanutTrifan/" > <ImLinkedin2 className='Linkedin' /> </a>
          <a href='email:trifandanutiacob@gmail.com'> <AiOutlineMail className='Mail' /> </a>
          <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2Fdani.trifan.5%3Ffbclid%3DIwAR04bQAX8Is2x4oK_sxdYq3_Lb5qi1pDlfpJ8HREZbGpLfXTltOPTsHmFXk&h=AT0JR2YlVwWOHjoeUkFnSFD85riq1SJCAj1rHz6MEErQc6Kg8_6FVdmTs5FF_82HVQZIQxObSrehKyZU4m4d2Kznti9ty-AFgUmIS8xDtaqo_kUOFvY7pfw56P8kvJATgVn711lSiZ6LwclKrHMczQ' > <FaFacebookMessenger className='Messanger' /> </a>
        </div>
        <div className='CallUs'>
          <FaPhoneAlt className='Mobile' /> <span className='MobileN'> <b> +40 737 880 420 </b> </span>
          <PiPhoneDisconnect className='MobileFix' /> <span className='MobileFixN'> <b>	0258739127 </b> </span>
        </div>
      </footer>
    </>
  )
}

