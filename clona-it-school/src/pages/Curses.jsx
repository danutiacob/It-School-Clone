import React from 'react'
import "../Styles/Curses.css"
// Bootstrap Components
import { Button, Card } from 'react-bootstrap'

// Images for the Cards made for the Courses
import GraficDesign from "../assets/GraficDesign.jpg"
import Python from "../assets/python.jpeg"
import WebDev from "../assets/Web.jpg"
import Java from "../assets/javaimg.jpg"

// Logo for Certification inside the Card from each Course
import Microsoft from "../assets/microsoft.png"

// The icons for the Date, Period and Duration of each course inside the card
import { BsCalendarWeek } from 'react-icons/bs';
import { GiDuration } from "react-icons/gi"
import { TbClockHour4 } from "react-icons/tb"

// The component used to navigate between pages
import { Link } from "react-router-dom"

// The icons for the contact methods in the Footer section
import { BsWhatsapp } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { PiPhoneDisconnect } from "react-icons/pi"


function Curses() {
  return (
    <>
      {/* //   Header section */}
      <header className='HeaderSection'>
        <div>
          <h1 className='titleHeader'> <b> Cursuri IT Online, live </b> </h1>
        </div>
      </header>

      {/* Courses offered by ItSchool */}
      <section className='ProgramSection'>
        <h1 className='nameTitle'> <b> Programe de pregătire </b></h1>
        <h4 className='paragraphS'>
          IT School este o comunitate educațională de IT, locul unde pasionații acestui domeniu se întâlnesc cu viitorii profesioniști. Timp de peste 7 ani, am construit alături de
          trainerii IT School un mediu de învățare specializat pentru toți cei care își doresc să descopere oportunitățile acestui domeniu.
          Ești pregătit să faci parte din comunitatea IT School?
        </h4>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <Card className='cursesCardsFirst'>
                <div className='web-Dev'>
                  <Card.Img variant="top" src={WebDev} />
                </div>
                <Card.Body>
                  <Card.Text>
                    <Card.Title className='TitleC'> <b> Web Development </b> </Card.Title>
                    <div className='textTitleCard'>
                      <b> Certificare </b> <img className='microsoft' src={Microsoft} alt='Microsoft' />
                      <b className='Pieces' >Microsoft</b>
                    </div>
                    <div className='periodText'>
                      <BsCalendarWeek className='piecesI' /> <b className='Pieces'> In curand </b>
                      <span className='periodIcons'>
                        <GiDuration className='piecesI' /> <b className='pieces'> 5 luni </b>
                      </span>
                      <span className='periodIcons'>
                        <TbClockHour4 className='piecesI' /> <b className='pieces'> 100 ore </b>
                      </span>
                    </div>
                  </Card.Text>
                  <Link to='/WebDev'>
                    <Button className='DetailsButton'> <b>Detalii</b></Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-6'>
              <Card className='cursesCardsFirst CardsDown'>
                <div className='web-Dev'>
                  <Card.Img variant="top" src={GraficDesign} />
                </div>
                <Card.Body>
                  <Card.Text>
                    <Card.Title className='TitleC'> <b> Graphic Design </b> </Card.Title>
                    <div className='textTitleCard'>
                      <b> Certificare </b> <img className='microsoft' src={Microsoft} alt='Microsoft' />
                      <b className='Pieces' >Microsoft</b>
                    </div>
                    <div className='periodText'>
                      <BsCalendarWeek className='piecesI' /> <b className='Pieces'> In curand </b>
                      <span className='periodIcons'>
                        <GiDuration className='piecesI' /> <b className='pieces'> 5 luni </b>
                      </span>
                      <span className='periodIcons'>
                        <TbClockHour4 className='piecesI' /> <b className='pieces'> 100 ore </b>
                      </span>
                    </div>
                  </Card.Text>
                  <Link to='/GraphicDesign'>
                    <Button className='DetailsButton'> <b>Detalii</b></Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className='row mt-6'>
            <div className='col-md-6 mt-4'>
              <Card className='cursesCardsSecond cursesCardsTow'>
                <div className='web-Dev'>
                  <Card.Img variant="top" src={Python} />
                </div>
                <Card.Body>
                  <Card.Title className='TitleC'>  <b> Python </b> </Card.Title>
                  <Card.Text>
                    <div className='textTitleCard'>
                      <b> Certificare </b> <img className='microsoft' src={Microsoft} alt='Microsoft' />
                      <b className='Pieces' >Microsoft</b>
                    </div>
                    <div className='periodText'>
                      <BsCalendarWeek className='piecesI' /> <b className='Pieces'> In curand </b>
                      <span className='periodIcons'>
                      </span>
                      <GiDuration className='piecesI' /> <b className='Pieces'> 5 luni </b>
                      <span className='periodIcons'>
                        <TbClockHour4 className='piecesI' /> <b className='Pieces'> 100 ore </b>
                      </span>
                    </div>
                  </Card.Text>
                  <Link to="/Python">
                    <Button className='DetailsButton'> <b>Detalii</b></Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-6 mt-4'>
              <Card className='cursesCardsTow'>
                <div className='python'>
                  <Card.Img variant="top" src={Java} />
                </div>
                <Card.Body>
                  <Card.Title className='TitleC'> <b> Java </b> </Card.Title>
                  <Card.Text>
                    <div className='textTitleCard'>
                      <b> Certificare </b> <img className='microsoft' src={Microsoft} alt='Microsoft' />
                      <b className='Pieces' >Microsoft</b>
                    </div>
                    <div className='periodText'>
                      <BsCalendarWeek className='piecesI' /> <b className='Pieces'> In curand </b>
                      <span className='periodIcons'>
                        <GiDuration className='piecesI' /> <b className='Pieces'> 5 luni </b>
                      </span>
                      <span className='periodIcons'>
                        <TbClockHour4 className='piecesI' /> <b className='Pieces'> 100 ore </b>
                      </span>
                    </div>
                  </Card.Text>
                  <Link to="/Java">
                    <Button className='DetailsButton'> <b>Detalii</b></Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section >

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

export default Curses


