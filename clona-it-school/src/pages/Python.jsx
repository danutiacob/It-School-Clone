import React from 'react'
import "../Styles/Python.css"

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';

// Python emblem on the left side, in the Header section
import pythonicon from "../assets/pythonicon.png"

// The icons for the Date, Period and Duration of each course inside the card
import { FaWifi } from "react-icons/fa"
import { GiDuration } from "react-icons/gi"
import { TbClockHour4 } from "react-icons/tb"

// The image from the Right side, from the Header section
import WebImg from "../assets/python.png"

// The arrow icon in the Main section, the part with "What the Course includes"
import { AiOutlineCheckCircle } from "react-icons/ai"

// The image inside the card from the "What the Course includes" part
import iconGri from "../assets/icongri.png"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

// The icons in the Main section, the "Program in brief" part
import { FaGreaterThan } from "react-icons/fa"
import { FaRegKeyboard } from "react-icons/fa"
import { TbFileCode2 } from "react-icons/tb"
import { PiCertificateBold } from "react-icons/pi"

// The image from the Main section, the part with "Why choose ItSchool"
import itschool from "../assets/itschool.jpg"

// Circle icon in the Contact section
import { FiCircle } from "react-icons/fi"

// The icons for the contact methods in the Footer section
import { BsWhatsapp } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { PiPhoneDisconnect } from "react-icons/pi"


export default function Python() {
  return (
    <div>
      {/* //   Header section */}
      <header className='LearnMore'>
        <div className='icons iconsUp' >
          <img className='python  mt-6 m-5' style={{ width: '9rem' }} src={pythonicon} alt='python' />
        </div>
        <div className='LeftSide'>
          {/* Information from the Left */}
          <div className='icons iconsLeft'>
            <img className='python m-6' style={{ width: '5.5rem' }} src={pythonicon} alt='python' />
          </div>
          <div>
            <h1 className='Title'> <b> Curs Programare Python </b> </h1>
            <div className='information'>
              <div className='periodText'>
                <FaWifi className='piecesI' /> <b className='PiecesH'> Live Online </b>
                <span className='periodIcons'>
                  <GiDuration className='piecesI' /> <b className='piecesH'> 5 luni </b>
                </span>
                <span className='periodIcons'>
                  <TbClockHour4 className='piecesI' /> <b className='piecesH'> 110 ore </b>
                </span>
              </div>
            </div>
            <div className='price'>
              <p> <b> Cost total: </b> <span className='totalPrice'> <b> 875 € </b></span> <b> (175 € rată lunară) </b> </p>
            </div>
            <p className='ParagraphH'> <b> În cadrul acestui curs acreditat, vei studia Bazele programului Python, Django, Sql și vei obține cunoștințe solide care te vor propulsa în lumea dezvoltării software. Vei avea oportunitatea de a lucra la diverse proiecte, atât Web cât și Mobile, iar la final, vei avea un portofoliu solid pe care îl poți prezenta angajatorilor. </b> </p>
            <Button className='moreInformation mQuery'> <b>Vezi ce îți oferim</b></Button>
          </div>
        </div>
        {/* Information from the Right */}
        <div className='webDevelopmentRight'>
          <img className='WebImg' src={WebImg} alt='WebRImg' />
        </div>
      </header>

      <section className='SectionMain'>
        {/* Section with "What you will learn and what you will do in the Course" */}
        <p className='questionParagraph'> <b> CE CUPRINDE CURSUL </b> </p>
        <h4 className='paragraphS'>
          <span className='titleS'> <b> <i> Python: ușor de învățat de la zero, foarte bine plătit odată ce acumulezi experiență. </i> </b> </span>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Python este un limbaj excelent pentru a începe să înveți programare, deoarece are o sintaxă simplă, iar cunoștințele de bază sunt ușor de învățat.  </b>
          </div>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Deoarece este foarte versatil, Python e utilizat într-o mulțime de domenii, inclusiv testare, dezvoltare web, dezvoltarea de aplicații și realizarea de scripturi complexe.  </b>
          </div>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Dezvoltatorii Python sunt printre cei mai bine plătiți de pe piață, în special în data science, machine learning și web development. </b>
          </div>
        </h4>

        <div className='containerC'>
          <div className='row m-5'>
            <div className='col-md-5'>
              <Card className='cursesCardsFirst Shadow'>
                <div className='web-Dev'>
                </div>
                <Card.Body>
                  <Card.Text>
                    <Card.Title className='TitleC'>
                      <img src={iconGri} alt='iconGri' />
                      <b> Experiență 100% practică </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Ca să poți învăța cât mai simplu, acest program de pregătire este în totalitate practic. </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Alături de trainerul IT School vei aplica atât conceptele de bază (dezvoltându-ți gândirea de programator), cât și cunoștințe mai avansate, cu care vei putea crea aplicații complexe.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Vei avea ocazia să folosești ceea ce ai învățat în proiecte reale și să primești feedback constructiv de la trainer și colegi.  </b>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='col-md-5 SecondBox'>
              <Card className='cursesCardsFirst Shadow'>
                <div className='web-Dev'>
                </div>
                <Card.Body>
                  <Card.Text>
                    <Card.Title className='TitleC'>
                      <img src={iconGri} alt='iconGri' />
                      <b> Ușor de învățat </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Python este un limbaj de programare ușor de învățat pentru începători datorită sintaxei sale care este considerată simplă comparativ cu alternativele sale.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Python este un limbaj de programare dinamic, folosit la cel mai înalt nivel de programare, dar care pune accent pe înțelegerea ușoară a codului.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> De asemenea, Python are o comunitate activă și prietenoasă care îți pune la dispoziție o tonă de tutoriale, cursuri, cărți sau forumuri educaționale. </b>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className='row mt-5 m-5'>
            <div className='col-md-5 mt-4'>
              <Card className='cursesCardsFirst Shadow'>
                <div className='web-Dev'>
                </div>
                <Card.Body>
                  <Card.Text>
                    <Card.Title className='TitleC'>
                      <img src={iconGri} alt='iconGri' />
                      <b> O carieră Future-Proof </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Future-proof înseamnă că această tehnologie va fi căutată și peste 10-20 de ani. Pentru că deși este simplă, aceasta-ți dă posibilitatea să construiești aplicații foarte complexe.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Python este folosit de companii precum Instagram, Google, Netflix, Uber sau Spotify, și este esențial pentru dezvoltarea inteligenței artificiale, machine learning, data science și alte domenii în plină ascensiune.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Cu Python nu doar că îți asiguri un start bun în noua ta carieră, dar vei avea șansa de a te specializa pe nișe cu mult potențial. </b>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='col-md-5 mt-4'>
              <Card className='cursesCardsFirst Shadow'>
                <div className='web-Dev'>
                </div>
                <Card.Body>
                  <Card.Text>
                    <Card.Title className='TitleC'>
                      <img src={iconGri} alt='iconGri' />
                      <b> Career coaching și oportunități de angajare </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Îți punem la dispoziție o serie de seminarii esențiale (gratuite) de coaching care îți vor dubla șansele de a te angaja în domeniu.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Îți vom face coaching pe fiecare aspect al interacțiunii cu angajatorul, de la cum se redactează un CV de nerefuzat și până la soft skills și pregătire pentru interviu.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Pe lângă toate astea, vei putea folosi platforma noastră dedicată angajării începătorilor din IT: juniors.ro. </b>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Short Program Section */}
        <p className='questionParagraph'> <b> PROGRAMUL PE SCURT </b> </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <FaGreaterThan /> <b> _ </b> </span> <span className='acordionTitle'> <b> Intro în Python Development </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b>  Împreună vom descoperi ce înseamnă să fii programator și cum gândesc specialiștii din IT. Vei învăța noțiuni elementare de programare și vei rezolva primele probleme în Python. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <FaRegKeyboard /> </span> <span className='acordionTitle'> <b> Python și OOP </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b> Programarea orientată pe obiecte sau OOP în engleză, reprezintă un model de a scrie cod, unde programele pe care le vei concepe sunt organizate în jurul obiectelor și a datelor. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <TbFileCode2 /> </span> <span className='acordionTitle'> <b> Proiecte de portofoliu </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b> Te vei folosi de toate cunoștințele acumulate pentru a dezvolta proiecte reale în limbajul Python, pe care le vei putea prezenta colegilor, dar și angajatorului atunci când participi la interviu. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <PiCertificateBold /> </span> <span className='acordionTitle'> <b> Certifică-te </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b> La finalul programului de pregătire vei participa la examenul acreditat de Ministerul Educației și vei obține o diplomă recunoscută național, iar opțional, ai posibilitatea de a te înrola și în programul de certificare internațională IT Specialist. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/*The certifications obtained and the benefits after completing the course */}
        <p className='questionParagraph'> <b> CERTIFICARI </b> </p>
        <h4 className='paragraphS'>
          <span className='titleS'> <b> <i> Validează-ți cunoștințele prin intermediul certificărilor naționale și internaționale! </i> </b> </span>
          <div className='certificationT'>
            <b> După ce parcurgi un curs IT School, te încurajăm să participi la examenele acreditate de Ministerul Educației și/sau la alte examene internaționale pentru a obține recunoașterea competențelor tehnice pe care le-ai dezvoltat. Programa cursurilor noastre este în concordanță cu aceste examene așa că ești cu un pas mai aproape de certificarea dorită. La finalizarea cursului, poți susține următoarele certificări: </b>
          </div>
          <h3 className='CertificationS'> <b> Information Technology Specialist | Certificare internațională Certiport </b> </h3>
          <div className='certificationT'>
            <b> IInformation Technology Specialist este un certificat internațional dedicat candidaților care iau în considerare să înceapă o carieră în IT sau care sunt la început de drum în acest domeniu. Prin intermediul său, îți poți valida cunoștințele într-o gamă largă de subiecte IT printre care software development, administrarea bazelor de date, networking, securitate sau programare. Examenul pentru a obține acest certificat se desfășoară online. </b>
          </div>
        </h4>
        <div className='certificationSection'>
          <div className='BenefitsIcons'>
            <h5 className='certificationText'> <b> Beneficii </b></h5>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> îți validezi nivelul de cunoștințe </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> obții recunoaștere internațională, </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> atragi atenția angajatorilor, </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> te diferențiezi de ceilalți candidați la început de drum </b> </span>
            </div>
          </div>
        </div>
        <h4 className='paragraphS'>
          <h3 className='CertificationS'> <b> Ministerul Educației Naționale </b> </h3>
          <div className='certificationT'>
            <b> După absolvirea acestui curs, poți participa la examenul acreditat de Ministerul Educației Naționale care se desfășoară online. Diploma obținută în urma acestui examen este recunoscută la nivel național și în Uniunea Europeană, SUA și Canada. Participarea la examen este inclusă în costul cursului. Această certificare este disponibilă exclusiv pentru absolvenții cursurilor IT School. </b>
          </div>
        </h4>
        <div className='certificationSection'>
          <div className='BenefitsIcons'>
            <h5 className='certificationText'> <b> Beneficii </b></h5>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> îți validezi abilitățile tehnice, </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> obții recunoaștere la nivel național și în UE, SUA, Canada, </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> atragi atenția angajatorilor </b>, </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> te diferențiezi de ceilalți candidați la început de drum </b> </span>
            </div>
          </div>
        </div>

        <p className='questionParagraph'> <b> DE CE SĂ ALEGI IT SCHOOL </b> </p>
        <h4 className='paragraphS'>
          <span className='titleS Subtitle'> <b> <i> Experimentează ecosistemul nostru și bucură-te de resurse gratuite! </i> </b> </span>
          <img className='itschool' src={itschool} alt='itschool' />
          <p> <b> Nu lăsa la voia întâmplării niciun pas din traseul tău de învățare. În cadrul IT School, drumul către succes este pavat cu consultanță în alegerea cursului potrivit, pregătire tehnică practică - ancorată în tendințele pieței, consiliere de carieră și soft skills training, certificare națională și internațională și toate oportunitățile de angajare centralizate în prima platformă de joburi IT dedicată începătorilor. </b> </p>
        </h4>

        {/* The full cost or installments required to purchase this course */}
        <p className='questionParagraph'> <b> COSTUL CURSULUI </b> </p>
        <h4 className='paragraphS'>
          <span className='titleS'> <b> <i> Investiția ta în educație </i> </b> </span>
          <p> <b> Nu trebuie să plătești nimic acum. Completarea formularului de mai jos reprezintă primul pas din procesul de înscriere. Vei primi pe e-mail toate detaliile cu privire la următoarele etape.1 </b> </p>
        </h4>
        <div className='col-md-6 mt-4 costOfTheCourse'>
          <Card className='cursesCardsFirst Shadow'>
            <div className='web-Dev'>
            </div>
            <Card.Body>
              <Card.Text>
                <Card.Title className='TitleC'>
                  <img src={iconGri} alt='iconGri' />
                  <b> 875 €  ( 175 € rată lunară ) </b>
                </Card.Title>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Course Registration Section */}
      <section className='contactSection'>
        <h4 className='paragraphS'>
          <span className='titleS formRegistration'> <b> <i> ÎNREGISTREAZĂ-TE LA CURS </i> </b> </span>
          <div className='certificationT'>
            <b> Gata să încep! </b>
          </div>
        </h4>

        <form>
          <Row className="mb-3 firstLine">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label className='registrationForm'> <b>Nume</b> </Form.Label>
              <Form.Control className='formControl'
                required
                name='secondname'
                type="text"
                placeholder="nume"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label className='registrationForm'> <b>Prenume</b> </Form.Label>
              <Form.Control className='formControl'
                required
                name='firstname'
                type="text"
                placeholder="Scrie-ti Prenumele"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label className='registrationForm'> <b>Telefon</b> </Form.Label>
              <InputGroup hasValidation>
                <Form.Control className='formControl'
                  type="text"
                  name='phone'
                  placeholder="Scrie-ti nr de telefon"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Scrie-ti un numar de telefon valid.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3 firstLine">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label className='registrationForm'> <b>E-mail</b> </Form.Label>
              <Form.Control className='formControl'
                type="text"
                name='email'
                placeholder="Adresa de E-mail"
                required />
              <Form.Control.Feedback type="invalid">
                Scrie-ti o adresa de e-mail valida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label className='registrationForm'> <b>Varsta</b> </Form.Label>
              <Form.Control className='formControl'
                type="text"
                name='age'
                placeholder="Varsta"
                required />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <div>
                <Form.Label className='registrationForm'> <b>Sesiune</b> </Form.Label>
              </div>
              <FiCircle className='checkCircle' /> <b> Sesiune August — În curând </b>
            </Form.Group>
          </Row>
          <Button className='moreInformation mQuery formButton'> <b>Ma inregistrez</b></Button>
        </form>
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
    </div>
  )
}
