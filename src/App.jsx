import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "./locales/en/translation.json"
import tHin from "./locales/hin/translation.json"
import tTam from "./locales/tam/translation.json"
import { Link } from 'react-router-dom'



i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: tEn
        },
        hin: {
          translation: tHin
        },
        tam: {
          translation: tTam
        }
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // react already escapes
      },
    })

    const changeLang = (l) => {
      return () => {
        i18n.changeLanguage(l);
        localStorage.setItem('lang', l);
      }
    }
        
    



function App() {
    const { t } = useTranslation();

    useEffect(() => {
      const currLang = localStorage.getItem('lang');
      i18n.changeLanguage(currLang);
    },[])

  return (
    <>
    <div >
  <header className="header" style={{height:"55px"}}>
    <div className="logo"><img src="./static/image.png" alt style={{scale:"0.8"}}/></div>
    <nav className="navigation">
      <ul>
              <li><Link to='/' style={{ fontSize: "16px" }}>{t('Home') }</Link></li>
              <li><Link to='/about' style={{ fontSize: "16px" }}>{t('About')}</Link></li>
              <li><Link  style={{ fontSize: "16px" }}>{ t('More')}</Link>
          <ul style={{width:"270px",height:"150px"}}>
                  <li><Link to='/login' style={{ fontSize: "12px", height: "40px" }}>{ t('Admin Login')}</Link></li>
                  <li><Link to='/event' style={{ fontSize: "12px", height: "40px" }}>{ t('Events')}</Link></li>
                  <li><Link to='/sculptures' style={{ fontSize: "12px", height: "40px" }}>{ t('Sculptures')}</Link></li>
          </ul>
              </li>
              <li><Link to='/tour' style={{ fontSize: "16px" }}>{t('VirtualTour')}</Link></li>
              <li><Link  style={{ fontSize: "16px" }}>{t('Languages') }</Link>
          <ul style={{width:"270px"}}>
            <li><Link  style={{fontSize:"12px",height:"40px"}} onClick=  {(e) => {
                    e.preventDefault();
                    changeLang("en")();
                  }
                  }>English</Link></li>
                  <li><Link  style={{ fontSize: "12px", height: "40px" }} onClick={(e) => {
                    e.preventDefault();
                    changeLang("tam")();
                  }}>ஆதரவு</Link></li>
                  <li><Link style={{ fontSize: "12px", height: "45px" }} onClick={(e) => {
                    e.preventDefault();
                    changeLang("hin")();
                  }
                  }>हिन्दी</Link></li>
          </ul>
        </li>
              <li><Link to='/chatbot' className="glow-button" style={{ fontSize: "16px" }}>{ t('Book Now')}</Link></li>
      </ul>
    </nav>
  </header>
        <div className="hero" id="hero">
    <video autoPlay loop muted playsInline className="video-bg">
      <source src="./static/5823859-uhd_2160_3840_24fps.mp4" type="video/mp4" />
    </video>
    <div className="block" style={{scale:"0.8"}}>
            <h1 data-aos="fade-up" style={{textAlign:"center"}}>{ t("Welcome")}</h1>
            <h3>{t('Welcome_message') }</h3>
      <Link to='/chatbot'><button className="book-ticket">{t('Book Your Ticket')}</button></Link> 
    </div>
            <div><img src="./static/Sculpture.png" style={{scale:"0.8"}} alt /></div>
  </div>
        <div className="chatbot-container" style={{ scale: "0.8"}}>
    <div className="chat-popup">
      <button id="chat-popup-btn"><Link to='/chatbot'><img src="./static/chatbot-icon.png" alt /></Link></button>
    </div>
  </div>
  {/*Page 2(current )*/}
  <section className="current-exhibition">
    <div className="containerjsx"    style={{scale:"0.9"}}>
      <div className="seven">
              <h1>{ t('Current Exhibition')}</h1>
      </div>
      <p className="section-description">
       {t('Exhibition_message')}
      </p>
      <div className="exhibition-grid">
        {/* <div class="exhibition-item"  data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
              <img src="./static/museum1.jpg" alt="Mutiny: Works by Géricault">
              <h3 class="exhibition-title">Mutiny: Works by Géricault</h3>
              <p class="exhibition-dates">13 Oct 2018 - 15 Feb 2019</p>
          </div> */}
        <figure>
          <img src="./static/museum2.png" alt="Palileo Descent VR with tim Creek" />
                <figcaption><h6>{t('Card_1')}</h6><span>{t('Card_1_time') }</span></figcaption>
        </figure>
        <figure>
          <img src="./static/museum3.jpg" alt="Palileo Descent VR with tim Creek" />
                <figcaption><h6>{t('Card_2')}</h6><span>{t('Card_2_time') }</span></figcaption>
        </figure>
        <figure>
          <img src="./static/museum4.jpg" alt="Palileo Descent VR with tim Creek" />
                <figcaption><h6>{t('Card_3')}</h6><span>{ t('Card_3_time')}</span></figcaption>
        </figure>
        <figure>
          <img src="./static/museum1.jpg" alt="Mutiny: Works by Géricault" />
                <figcaption><h6>{t('Mutiny: Works by Géricault')}</h6><span>{t('Card_3_time') }</span></figcaption>
        </figure>
        {/* <div class="exhibition-item"  data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
              <img src="./static/museum2.png" alt="Palileo Descent VR with tim Creek">
              <h3 class="exhibition-title">Palileo Descent VR with tim Creek</h3>
              <p class="exhibition-dates">Open 12:30 - 1:00 Daily</p>
          </div>
          <div class="exhibition-item"  data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
              <img src="./static/museum3.jpg" alt="Palileo Descent VR with tim Creek">
              <h3 class="exhibition-title">Visionary Vistas Expressive Echoes</h3>
              <p class="exhibition-dates">Open 12:30 - 1:00 Daily</p>
          </div>
          <div class="exhibition-item"  data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
              <img src="./static/museum4.jpg" alt="Palileo Descent VR with tim Creek">
              <h3 class="exhibition-title">Visualvortex Vault:
                Innovative Hub
              </h3>
              <p class="exhibition-dates">Open 12:30 - 1:00 Daily</p>
          </div> */}
      </div>
      <Link to="/event" className="btn">{t('See All Exhibitions')} </Link>
    </div>
  </section>
  <div className="container1">  
    <div className="contentjsx"    style={{scale:"0.8"}}>  
            <h2>{t('Planning to visit?')}<br /><span>{ t('Look at the timetable')}</span></h2>  
            <p>{t('Museum open today 9am-5pm')}<br />{ t('Last admission at 4pm')}</p>  
            <Link  className="event-button">{ t('See Event Calendar')}</Link>  
    </div>    
  </div>  
  {/*SCROLLING-TEXT*/}
  <div className="scrolltext" style={{height: 80}}>
    <img src="./static/pattern2.png" alt />
    <img src="./static/pattern2.png" alt />
    <img src="./static/pattern2.png" alt />
    <img src="./static/pattern2.png" alt />
    <img src="./static/pattern2.png" alt />
    <img src="./static/pattern2.png" alt />
    <img src="./static/pattern2.png" alt />
    <div className="scrolltext-2">
      <h1 className="scrolltext-h1">{t('18Nov-20Dec Night of Creative revealation')}</h1>
      <h1 className="scrolltext-h1">{t('18Nov-20Dec Night of Creative revealation')}</h1>
      <h1 className="scrolltext-h1">{t('18Nov-20Dec Night of Creative revealation')}</h1>
      <h1 className="scrolltext-h1">{t('18Nov-20Dec Night of Creative revealation')}</h1>
    </div>
  </div>
  {/*Page-3*/}
        <div className="container3" style={{height:"95px", fontSize:"20px"}}>
          <div style={{scale:"0.8"}}>
            <h3 className="upcoming-events" data-aos="fade-left" data-aos-duration={1000} data-aos-once="true" >{ t('Upcoming Events')}</h3>
            </div>
  </div>
  <div className="gallery-container">
    <div className="gallery-item" data-aos="fade-up" data-aos-duration={600} style={{width:'400px', height:"500px"}}>
      <img src="./static/p1.jpg" alt="Framed Fantasies" />
      <div className="gallery-info">
              <h3 style={{ fontSize: "27px" }}>{ t('Framed Fantasies')}</h3>
              <p>{ t('18 Nov - 22 Nov | 09AM-19PM')}</p>
              <button className="book-button"><Link>{ t('Check More')}</Link></button>
      </div>
    </div>
    <div className="gallery-item" data-aos="fade-up" data-aos-duration={700} style={{width:'400px', height:"500px"}}>
      <img src="./static/p2.jpg" alt="Palette of Dreams" />
      <div className="gallery-info">
              <h3>{ t('Palette of Dreams')}</h3>
              <p>{ t('19 Nov - 22 Nov | 09AM-19PM')}</p>
              <button className="book-button"><Link>{ t('Check More')}</Link></button>
      </div>
    </div>
    <div className="gallery-item" data-aos="fade-up" data-aos-duration={600}style={{width:'400px', height:"500px"}} >
      <img src="./static/p3.jpg" alt="Innovative Visions" />
      <div className="gallery-info">
              <h3>{ t('Innovative Visions')}</h3>
              <p>{ t('20 Nov - 29 Nov | 09AM-19PM')}</p>
              <button className="book-button"><Link>{ t('Check More')}</Link></button>
      </div>
    </div>
  </div>
  {/* <div className="d2"> */}
    <div className="gallery-container" data-aos="fade-up" data-aos-duration={1000}  >
      <div className="gallery-item">
            <img src="./static/p61.jpg" alt="Framed Fantasies" style={{ height: "253px" }} />
        <div className="gallery-info">
              <h3>{ t('Meticulously Art')}</h3> 
              <p>{ t('20 Nov - 29 Nov | 09AM-19PM')}</p>
              <button className="book-button"><Link>{ t('Check More')}</Link></button>
        </div>
      </div>
      <div className="gallery-item" data-aos="fade-up" data-aos-duration={700}>
            <img src="./static/p4.webp" alt="Palette of Dreams" style={{ height: "253px"}} />
        <div className="gallery-info">
              <h3>{ t('Ancient Wonders')}</h3>
              <p>{t('1 Dec - 10 Dec | 09AM-19PM') }</p>
              <button className="book-button" href><Link>{ t('Check More')}</Link></button>
        </div>
      </div>
      <div className="gallery-item" data-aos="fade-up" data-aos-duration={600} >
        <img src="./static/p6.webp" alt="Innovative Visions" style={{ height: "253px"}} />
        <div className="gallery-info">
              <h3>{ t('Contemporary Art')}</h3>
              <p>{ t('12 Dec - 22 Dec | 09AM-19PM')}</p>
              <button className="book-button"><Link>{ t('Check More')}</Link></button>
        </div>
      </div>
    </div>
  {/* </div> */}
  {/*Page 4*/}{/*Curators Selection*/}
  <div className="container3" style={{height:"100px"}}>
          <h1 className="upcoming-events" style={{ scale: "0.7" }}>{ t('Curators Selections')}</h1>
  </div>
  <div className="gallery-collages-container">
          <div style={{ display:"flex",width:"700px",height:"500px", justifyContent:'center'}}>
    <div className="gallery">
      <img src="./static/pexels-bopopics-14806048.jpg" alt="a forest after an apocalypse" />
      <img src="./static/pexels-mibernaa-18448147.jpg" alt="a waterfall and many rocks" />
      <img src="./static/pexels-lavdrim-mustafi-337111893-14088758.jpg" alt="a house on a mountain" />
      <img src="./static/pexels-alexeychunihin-8671545.jpg" alt="sime pink flowers" />
      <img src="./static/pexels-sonny-26923425.jpg" alt="big rocks with some trees" />
      <img src="./static/close-up-money-put-aside-savings.jpg" alt="a waterfall, a lot of tree and a great view from the sky" />
      <img src="./static/inca-mayan-design-sculpted-stones.jpg" alt="a cool landscape" />
      <img src="./static/pexels-bopopics-15644167.jpg" alt="inside a town between two big buildings" />
      <img src="./static/pexels-alexeychunihin-8671545.jpg" alt="a great view of the sea above the mountain" />
    </div>
    <div className="gallery">
      <img src="./static/pexels-bopopics-14806048.jpg" alt="a forest after an apocalypse" />
      <img src="./static/pexels-mibernaa-18448147.jpg" alt="a waterfall and many rocks" />
      <img src="./static/pexels-lavdrim-mustafi-337111893-14088758.jpg" alt="a house on a mountain" />
      <img src="./static/pexels-alexeychunihin-8671545.jpg" alt="sime pink flowers" />
      <img src="./static/pexels-sonny-26923425.jpg" alt="big rocks with some trees" />
      <img src="./static/close-up-money-put-aside-savings.jpg" alt="a waterfall, a lot of tree and a great view from the sky" />
      <img src="./static/inca-mayan-design-sculpted-stones.jpg" alt="a cool landscape" />
      <img src="./static/pexels-bopopics-15644167.jpg" alt="inside a town between two big buildings" />
      <img src="./static/pexels-alexeychunihin-8671545.jpg" alt="a great view of the sea above the mountain" />
    </div>
          </div>
          </div>
  {/*Page 5*/}
  <div className="parallax">
    <section id="hero1" style={{scale:"0.8"}}>
      <div className="hero1-text">
              <h1 data-aos="fade-up" data-aos-duration={1000}>{ t('Museum Insights')}</h1>
              <p data-aos="fade-up" data-aos-duration={1000}>{t('Embark on a journey of discovery as you uncover captivating narratives and insights about the artifacts and historical narratives presented within our museum. Gain a deeper understanding of the cultural tapestry that has shaped human civilization.') }</p>
      </div>
    </section>
  </div>
  {/* Page-6 */}
  {/* Add the Main_2 here Please */}
  <div className="timeline-container" id="timeline-1">
    <div className="timeline-header">
            <h2 className="timeline-header__title">{ t('Triveni Museum Highlights')}</h2>
    </div>
    <div className="timeline">
      <div className="timeline-item" data-text="Triveni Museum">
        <div className="timeline__content"><img className="timeline__img" src="./static/museum1.jpg" />
          <h2 className="timeline__content-title">1881</h2>
          <p className="timeline__content-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat est similique sit? Deleniti dolore ut tempora exercitationem possimus minus eaque ipsam? Animi delectus at nulla porro sunt ab libero neque modi, veritatis dolores nam magni! Sunt debitis aliquid facere saepe totam officia.</p>
        </div>
      </div>
      <div className="timeline-item" data-text="Triveni Museum">
        <div className="timeline__content"><img className="timeline__img" src="./static/p61.jpg" />
          <h2 className="timeline__content-title">1893</h2>
          <p className="timeline__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas ut libero iste. Officiis et quam ipsa soluta ut fugiat accusamus quisquam consequuntur animi nihil praesentium architecto, nesciunt illo maiores reprehenderit dolores obcaecati incidunt, dolor unde iste ab assumenda exercitationem perferendis cum?</p>
        </div>
      </div>
      <div className="timeline-item" data-text="Triveni Museum">
        <div className="timeline__content"><img className="timeline__img" src="./static/museum3.jpg" />
          <h2 className="timeline__content-title">1905</h2>
          <p className="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit officiis recusandae veritatis eligendi tempore quod natus corrupti nemo amet fuga nesciunt, saepe totam dolorem minima enim atque, officia quaerat nulla.</p>
        </div>
      </div>
      <div className="timeline-item" data-text="Triveni Museum">
        <div className="timeline__content"><img className="timeline__img" src="./static/museum2.png" />
          <h2 className="timeline__content-title">1908</h2>
          <p className="timeline__content-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est molestiae sapiente eaque, hic laboriosam, quam atque reprehenderit perferendis laborum ipsum non et repudiandae? Cum, quo! Dolore iure libero fuga?</p>
        </div>
      </div>
      <div className="timeline-item" data-text="Triveni Museum">
        <div className="timeline__content"><img className="timeline__img" src="./static/museum5.jpg" />
          <h2 className="timeline__content-title">1915</h2>
          <p className="timeline__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit quis, molestias ex deleniti sequi. Quos illo autem sit unde tempora consectetur neque dignissimos qui adipisci laudantium suscipit, temporibus necessitatibus odio nulla veritatis! Possimus assumenda eaque commodi officiis odio placeat reprehenderit recusandae.</p>
        </div>
      </div>
    </div>
  </div>
  {/* footer */}
  <footer className="footer">
    <video className="footer_video" muted loop autoPlay src="./static/132000-751915339_small.mp4" type="video/mp4">
    </video>
    <div className="footer-container">
      <div className="footer_inner">
        <div className="c-footer">
          <div className="layout">
            <div className="layout_item w-50">
              <div className="newsletter">
                                      <h3 className="newsletter_title">{ t('Get updates on fun stuff you probably want to know about in your inbox.')}</h3>
                <form action>
                  <input type="text" placeholder={t('Email Address')} />
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="layout_item w-25">
              <nav className="c-nav-tool">
                                      <h4 className="c-nav-tool_title">{ t('Menu')}</h4>
                <ul className="c-nav-tool_list">
                  <li>
                                              <Link  className="c-link">{ t('Home')}</Link>
                  </li>
                  <li>
                                              <Link to='/about' className="c-link">{ t('About Us')}</Link>
                  </li>
                  <li>
                                              <Link  className="c-link">{ t('More')}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="layout_item w-25">
              <nav className="c-nav-tool">
                                      <h4 className="c-nav-tool_title">{ t('Support')}</h4>
                <ul className="c-nav-tool_list">
                  <li className="c-nav-tool_item">
                                              <Link  className="c-link">{t('Shipping')} &amp; { t('Returns')}</Link>
                  </li>
                  <li className="c-nav-tool_item">
                                              <Link  className="c-link">{t('Help')} &amp; { t('FAQ')}</Link>
                  </li>
                  <li className="c-nav-tool_item">
                                              <Link  className="c-link">{t('Terms')} &amp;
                                                  { t('Conditions')}</Link>
                  </li>
                  <li className="c-nav-tool_item">
                                              <Link className="c-link">{ t('Privacy Policy')}</Link>
                  </li>
                  <li className="c-nav-tool_item">
                                              <Link  className="c-link">{ t('Contact')}</Link>
                  </li>
                  <li className="c-nav-tool_item">
                    <Link  className="c-link">
                                                  { t('Login')}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="layout c-2">
            <div className="layout_item w-50">
              <ul className="flex">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM2 2h4v20H2V2z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4h-1V6h-2v2H8v8h3zm-1-3h4a.5.5 0 1 1 0 1h-4v-1zm0-3h4a.5.5 0 1 1 0 1h-4v-1z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z" />
                  </svg>
                </li>
              </ul>
            </div>
            <div className="layout_item w-25">
              <ul className="flex">
                <li>
                  <Link href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="layout_item w-25" style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
              <Link href="#hero"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36}>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
                </svg></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
                      <p>© 2024 { t('Matrix Mitr')}</p>
      </div>
    </div>
  </footer>
  {/*Script-Section*/}
</div>

    </>
  )
}

export default App