import React from 'react'
import "../Styles/Java.css"

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

// Java emblem on the left side, in the Header section
import java from "../assets/javaIcon.svg"

// The icons for the Date, Period and Duration of each course inside the card
import { FaWifi } from "react-icons/fa"
import { GiDuration } from "react-icons/gi"
import { TbClockHour4 } from "react-icons/tb"

// The image from the Right side, from the Header section
import WebImg from "../assets/java.png"

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


export default function Java() {
  return (
    <div>
      {/* //   Header section */}
      <header className='LearnMore'>
        <div className='icons iconsUp' >
          <img className='java  mt-6 m-5' style={{ width: '9rem' }} src={java} alt='java' />
        </div>
        {/* Information from the Left */}
        <div className='LeftSide'>
          <div className='icons iconsLeft'>
            <img className='java m-6' style={{ width: '5.5rem' }} src={java} alt='java' />
          </div>
          <div>
            <h1 className='Title'> <b> Curs Programare Java </b> </h1>
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
            <p className='ParagraphH'> <b>  În cadrul acestui curs acreditat, vei studia Maven, Gradle, Spring și vei obține cunoștințe solide care te vor propulsa în lumea programari. Vei avea oportunitatea de a lucra la diverse proiecte, iar la final, vei avea un portofoliu solid pe care îl poți prezenta angajatorilor. </b> </p>
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
          <span className='titleS'> <b> <i> Limbajul de programare cel mai căutat pe piața muncii </i> </b> </span>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Deși este foarte uilizat pentru o mulțime de aplicații complexe, Java este un limbaj de programare ușor de învățat (comparativ cu celelalte), datorită sintaxei simple și a vastelor resurse disponibile online.  </b>
          </div>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Un veteran al limbajelor de programare, utilizat cu precădere în proiecte ample, Java rămâne neclintit în fața „competitorilor” săi mai tineri. </b>
          </div>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Pentru programatorii începători, Java reprezintă o opțiune sigură, care vine la pachet cu multe oportunități de angajare în domeniu. </b>
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
                      <b> Vei învăța prin practică </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Nu există înlocuitor pentru experiența practică; de aceea în cadrul acestui curs vei învăța să scrii cod cu mânecile suflecate, aplicând practic fiecare bucată de informație. </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> În cadrul ședințelor de curs, trainerul te va ghida prin curricula programului, cu ajutorul exercițiilor și temelor, menite să-ți dezvolte abilitățile tehnice în modul cel mai sigur, simplu și rapid. </b>
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
                      <b> Învață Java de la A la Z </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> De la bazele programării la concepte avansate, acest program de pregătire cuprinde în mod integrativ toate noțiunile de care ai nevoie în cadrul unui job de Junior Java Developer, plus tehnologii complementare.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> În cadrul acestui curs vei studia Java, Spring, Hibernate, GIT, Maven, JavaFX, SQL, HTML & more. </b>
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
                      <b> O carieră promițătoare în IT </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Java este un limbaj de programare popular și larg utilizat. În general, cu răbdare, practică și determinare, oricine îl poate învăța.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Cel mai bun indicator de succes pentru o carieră în Java Development este interesul tău și disponibilitatea de a petrece între 6-10 ore pe zi în fața calculatorului, cu răbdare și interes.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Dacă decizi să pornești alături de IT School, vei beneficia de un ecosistem educațional complet, care îți va oferi o mulțime de avantaje pentru a obține primul tău job de Java Developer. </b>
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
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Îți punem la dispoziție o serie de seminarii esențiale (gratuite) de coaching care îți vor dubla șansele de a te angaja în domeniu. </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Îți vom face coaching pe fiecare aspect al interacțiunii cu angajatorul, de la cum se redactează un CV de nerefuzat și până la soft skills și pregătire pentru interviu.  </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Pe lângă toate astea, vei putea folosi platforma noastră dedicată angajării începătorilor din IT: juniors.ro.</b>
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
              <span className='acosrdionIcons'> <FaGreaterThan /> <b> _ </b> </span> <span className='acordionTitle'> <b> Intro în Java Development </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b>  Nicio casă nu se poate construi fără o fundație solidă. Astfel, în prima parte a programului de pregătire, vei învăța concepte de bază în programare și cum gândește un programator. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <FaRegKeyboard /> </span> <span className='acordionTitle'> <b> Java și OOP </b> </span>
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
              <b> În cadrul acestui curs vei dobândi toate cunoștințele tehnice necesare pentru a realiza primele tale proiecte de portofoliu. Acestea reprezintă cea mai mare validare a nivelului tehnic atins și sunt elemente de diferențiere în procesul de angajare.  </b>
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
          <h3 className='CertificationS'> <b> Adobe Certified Professional | Certificare internațională </b> </h3>
          <div className='certificationT'>
            <b> Information Technology Specialist este un certificat internațional dedicat candidaților care iau în considerare să înceapă o carieră în IT sau care sunt la început de drum în acest domeniu. Prin intermediul său, îți poți valida cunoștințele într-o gamă largă de subiecte IT printre care software development, administrarea bazelor de date, networking, securitate sau programare. Examenul pentru a obține acest certificat se desfășoară online. </b>
          </div>
        </h4>

        <div className='certificationSection'>
          <div className='BenefitsIcons'>
            <h5 className='certificationText'> <b> Beneficii </b></h5>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> îți validezi nivelul de cunoștințe </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> obții recunoaștere internațională </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> atragi atenția angajatorilor </b>, </span>
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
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> obții recunoaștere la nivel nați,onal și în UE, SUA, Canada, </b> </span>
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
                  <b> 875 €  ( 187 € rată lunară ) </b>
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
        {/* The Footer part */}
        <footer className='footerSection'>
          <p className='footertext'>IT School România © 2021. Toate drepturile rezervate.</p>
          <div className='ContactUs'>
            <a href="https://wa.me/+40753397908" > <BsWhatsapp className='WhatApp'/> </a>
            <a href="https://www.linkedin.com/in/DanutTrifan/" > <ImLinkedin2 className='Linkedin' /> </a>
            <a href='email:trifandanutiacob@gmail.com'> <AiOutlineMail className='Mail' /> </a>
            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2Fdani.trifan.5%3Ffbclid%3DIwAR04bQAX8Is2x4oK_sxdYq3_Lb5qi1pDlfpJ8HREZbGpLfXTltOPTsHmFXk&h=AT0JR2YlVwWOHjoeUkFnSFD85riq1SJCAj1rHz6MEErQc6Kg8_6FVdmTs5FF_82HVQZIQxObSrehKyZU4m4d2Kznti9ty-AFgUmIS8xDtaqo_kUOFvY7pfw56P8kvJATgVn711lSiZ6LwclKrHMczQ' > <FaFacebookMessenger className='Messanger' /> </a>
          </div>
          <div className='CallUs'>
            <FaPhoneAlt className='Mobile' /> <span className='MobileN'> <b> +40 737 880 420 </b> </span>
            <PiPhoneDisconnect className='MobileFix' /> <span className='MobileFixN'> <b>	0258739127 </b> </span>
          </div>
        </footer>
      </section>

    </div>
  )
}
