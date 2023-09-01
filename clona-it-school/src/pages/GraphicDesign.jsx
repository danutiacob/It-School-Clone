import React from 'react'
import "../Styles/graficDesign.css"

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

// Photoshop and Adobe Illustrator emblems on the left side, in the Header section
import photoshop from "../assets/photoshop.svg"

// The icons for the Date, Period and Duration of each course inside the card
import { FaWifi } from "react-icons/fa"
import { GiDuration } from "react-icons/gi"
import { TbClockHour4 } from "react-icons/tb"

// The image from the Right side, from the Header section
import WebImg from "../assets/graphicdesign1.jpg"

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



export default function GraphicDesign() {
  return (
    <div>
      {/* //   Header section */}
      <header className='LearnMore'>
        <div className='icons iconsUp' >
          <img className='Photoshop  mt-6 m-5' style={{ width: '9rem' }} src={photoshop} alt='photoshop' />
        </div>
        {/* Information from the Left */}
        <div className='LeftSide'>
          <div className='icons iconsLeft'>
            <img className='Photoshop m-6' style={{ width: '5.5rem' }} src={photoshop} alt='photoshop' />
          </div>
          <div>
            <h1 className='Title'> <b> Curs Graphic Design </b> </h1>
            <div className='information'>
              <div className='periodText'>
                <FaWifi className='piecesI' /> <b className='PiecesH'> Live Online </b>
                <span className='periodIcons'>
                  <GiDuration className='piecesI' /> <b className='piecesH'> 3.5 luni </b>
                </span>
                <span className='periodIcons'>
                  <TbClockHour4 className='piecesI' /> <b className='piecesH'> 64 ore </b>
                </span>
              </div>
            </div>
            <div className='price'>
              <p> <b> Cost total: </b> <span className='totalPrice'> <b> 875 € </b></span> <b> (175 € rată lunară) </b> </p>
            </div>
            <p className='ParagraphH'> <b>  În cadrul acestui curs acreditat, vei studia Adobe Photoshop, Adobe Illustrator și vei obține cunoștințe solide care te vor propulsa în lumea design-ului. Vei avea oportunitatea de a lucra la diverse proiecte, iar la final, vei avea un portofoliu solid pe care îl poți prezenta angajatorilor. </b> </p>
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
          <span className='titleS'> <b> <i> Devino Graphic Designer de la zero </i> </b> </span>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> Învață de la zero bazele graphic designului și vei putea folosi cu încredere cele mai utilizate programe de editare foto și design din domeniu: Photoshop și Illustrator. </b>
          </div>
          <div className='positionIcons'>
            <BsFillArrowRightCircleFill className='colorIcons' /> <b> La finalul acestui curs vei putea să-ți folosești creativitatea pentru a construi o carieră ca designer și ilustrator. Vei putea crea orice fel de material grafic… de la editare de fotografii, creare de logouri, ilustrații, imagini pentru social media, până la afișe, flyere și bannere publicitare.  </b>
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
                      <b> Uită de orele de desen </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Nu ai nevoie de talent la desen pentru a deveni un Graphic Designer de succes. Talentul și creativitatea sunt competențe care pot fi modelate, iar universul digital îți oferă resurse nelimitate pentru a-ți pune în valoare ideile și imaginația.   </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Vei învăța cum să generezi idei creative, care să se potrivească nevoilor clienților tăi și vei putea apoi să transformi aceste idei în piese de design comercial. </b>
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
                      <b> Vei avea un portofoliu convingător </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Începem cu începutul și nu sărim nicio etapă. De la instalarea aplicațiilor Photoshop și Illustrator, explorarea meseriei de Graphic Designer, până la primul material creat, traversăm împreună fiecare pas. </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Odată ce avansezi în materie și înveți concepte noi, vei lucra la propriile tale proiecte astfel, la final de curs, vei avea un portofoliu pe care să-l poți prezenta angajatorilor tăi. </b>
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
                      <b> O carieră cu oportunități nelimitate </b>
                    </Card.Title>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Aproape fiecare business este nevoit să colaboreze cu un designer grafic pentru toate materialele de promovare, atât online cât și print. Deci abilitățile tale vor fi căutate în mod constant de o multitudine de afaceri. </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Vei putea lucra fie în cadrul unei agenții, fie designer in-house pentru o companie sau ca freelancer, bucurându-te de libertate totală și de muncă remote. </b>
                    </div>
                    <div className='positionIcons'>
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Ține cont că există o mulțime de unelte excelente care ajută developerii să scrie cod mai rapid și mai ușor, și că vei găsi întotdeauna resursele necesare pentru a ieși din impas, atât timp cât stăpânești fundamentele. </b>
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
                      <BsFillArrowRightCircleFill className='colorIcons' /> <b> Vei avea la dispoziție o serie de seminarii esențiale (gratuite) de coaching care îți vor dubla șansele de a te angaja în domeniu. Îți vom face coaching pe fiecare aspect al interacțiunii cu angajatorul, de la cum se redactează un CV de nerefuzat și până la soft skills și pregătire pentru interviu.  </b>
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
              <span className='acosrdionIcons'> <FaGreaterThan /> <b> _ </b> </span> <span className='acordionTitle'> <b> Graphic Design Fundamentals </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b>  Creativitatea nu are limite, însă este important să stăpânești principiile de creație grafică și să înveți să le aplici în conceperea materialelor tale: tehnici de compoziție vizuală, teoria culorilor, tipografie. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <FaRegKeyboard /> </span> <span className='acordionTitle'> <b> Adobe Photoshop </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b> Cu ajutorul Photoshop, vei învăța să editezi fotografii atât pentru web, cât și pentru print. Acest program îți oferă o varietate de funcționalități și instrumente pe care le vei utiliza în funcție de propriul obiectiv. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <TbFileCode2 /> </span> <span className='acordionTitle'> <b> Adobe Illustrator </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b> Folosind Illustrator, vei învăța să creezi grafică vectorială: ilustrații, logo-uri, pictograme care pot fi folosite pe materiale de orice dimensiune: cărți de vizită, afișe, banner outdoor sau materiale digitale. </b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className='acordionItemFirst acordionItemSecond'>
            <Accordion.Header>
              <span className='acosrdionIcons'> <PiCertificateBold /> </span> <span className='acordionTitle'> <b> Certificare internațională </b> </span>
            </Accordion.Header>
            <Accordion.Body>
              <b> Te vom ajuta să te pregătești pentru susținerea examenului de certificare Adobe Certified Professional, care îți atestă cunoștințele acumulate la nivel internațional. </b>
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
            <b> În urma finalizării acestui curs, ai opțiunea să susții certificatul internațional Adobe Certified Professional. Pregătirea pentru examen este inclusă în programul de pregătire, însă participarea este opțională. </b>
          </div>
        </h4>
        <div className='certificationSection'>
          <div className='BenefitsIcons'>
            <h5 className='certificationText'> <b> Beneficii </b></h5>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> îți validezi abilitățile dobândite </b> </span>
            </div>
            <div className='distanceBenefits'>
              <AiOutlineCheckCircle className='iconCheck' />  <span className='paragraph'> <b> obții recunoaștere la nivel internațional </b> </span>
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




    </div>
  )
}
