import React from 'react'
import "../Styles/About.css"

// Bootstrap component
import { Card } from "react-bootstrap"

// The images for the four trainers
import Razvan from "../assets/razvan.jpeg"
import Marius from "../assets/marius.png"
import Alex from "../assets/alex.jpeg"
import Emma from "../assets/ema.jpeg"

// The icons for the contact methods in the Footer section
import { BsWhatsapp } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { PiPhoneDisconnect } from "react-icons/pi"

function About() {
  return (
    <>
      {/* //   Header section */}
      <header className='headerCursesSection'>
        <h1 className='titleHeader '> <b> Trainerii IT School </b> </h1>
      </header>


      {/* Cards with information for each trainer */}
      <main>
        <div className='containerC'>
          <div className='row m-5'>

            <div className='col-md-5'>
              <Card className='cursesCardsFirst Shadow'>
                <div className='web-Dev'>
                </div>
                <div className='card-info-one'>
                  <div className='card-backround'>
                    <Card.Img className='nameCard Razvan' src={Razvan} alt='razvan' />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className='cardTitleAbout'>
                    Razvan Cirlugea
                  </Card.Title>
                  <Card.Text className='infoAbout'>
                    "Specialitatea mea este Front-End Development-ul, așadar limbajul meu de
                    programare de suflet este JavaScript. Bineînțeles, dacă vorbim de Front-End, alți
                    camarazi buni de-ai mei sunt HTML și CSS (chit că nu sunt limbaje de programare)."
                    Răzvan a devenit trainer înainte de a lucra full-time ca și programator.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='col-md-5'>
              <Card className='cursesCardsFirst cardsDown Shadow'>
                <div className='web-Dev'>
                </div>
                <div className='card-info-one'>
                  <div className='card-backround'>
                    <Card.Img className='nameCard Marius' src={Marius} alt='razvan' />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className='cardTitleAbout'>
                    Marius Furcic
                  </Card.Title>
                  <Card.Text className='infoAbout'>
                    "Specialitatea mea este Front-End Development-ul, așadar limbajul meu de
                    programare de suflet este JavaScript. Bineînțeles, dacă vorbim de Front-End, alți
                    camarazi buni de-ai mei sunt HTML și CSS (chit că nu sunt limbaje de programare)."
                    Răzvan a devenit trainer înainte de a lucra full-time ca și programator.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='col-md-5'>
              <Card className='cursesCardsFirst secondPlace Shadow'>
                <div className='web-Dev'>
                </div>
                <div className='card-info-one'>
                  <div className='card-backround'>
                    <Card.Img className='nameCard Alex' src={Alex} alt='razvan' />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className='cardTitleAbout'>
                    Alex Zmed
                  </Card.Title>
                  <Card.Text className='infoAbout'>
                    Alex lucrează în domeniu de peste 6 ani. Fiind pasionat de tot ceea
                    ce ține de web, Alex este Front-end Developer
                    în timpul zilei, mentor IT School după lucru și iubitor de somn pe timpul nopții.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='col-md-5'>
              <Card className='cursesCardsFirst cardsDown secondPlace Shadow'>
                <div className='web-Dev'>
                </div>
                <div className='card-info-one'>
                  <div className='card-backround'>
                    <Card.Img className='nameCard Emma' src={Emma} alt='razvan' />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className='cardTitleAbout'>
                    Ema Enescu
                  </Card.Title>
                  <Card.Text className='infoAbout'>
                    Ema este Front-end Web Developer și activează în domeniul IT de mai bine de 6 ani.
                    Iubește la fel de mult codul
                    curat cât și o carte bună sau o călătorie la mare depărtare de casă.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      <p className='cardAboutSectionSecond'></p>
    </main >

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

export default About