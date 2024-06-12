import './App.css';
import Card from './components/Card/Card';
import EmotingVoid from "./assets/EMOTING-VOID.svg"
import EVLogo from './assets/LOGO-01.svg'
import Portfolio from "./assets/portfolio.svg"
import instagram from "./assets/instagram.svg"
import facebook from "./assets/facebook.svg"
import linkedIn from './assets/linkedin.svg'
import whattsapp from './assets/whattsapp.svg'

function App() {
  const links = [
    { imageSrc: Portfolio, title: 'Portfolio', subtitle: 'See our work in action', link: '/flipbook' },
    { imageSrc: instagram, title: 'Instagram', subtitle: '@emoting_void', link: 'https://instagram.com/emoting_void' },
    { imageSrc: facebook, title: 'Facebook', subtitle: 'Emoting Void', link: 'https://www.facebook.com/profile.php?id=61551241550407' },
    { imageSrc: linkedIn, title: 'LinkedIn', subtitle: 'Know more about our work', link: 'https://linkedin.com/company/emoting-void' },
    { imageSrc: whattsapp, title: 'Whatsapp', subtitle: 'Talk to us directly on a click', link: 'https://wa.me/918800204121?text=Hi,%20I%20would%20like%20to%20know%20more.' },
  ];

  return (
    <div className='app'>
    <div className="home-container">
      <div className="logo-container">
        <img src={EVLogo} alt="logo" className="company-name"/>
        <img src={EmotingVoid} alt="logo" className="logo"/>
        <h1 className="tagline">| Interior Design Company |</h1>
      </div>
      <div className="card-grid">
        {links.map((link, index) => (
          <Card key={index} {...link} />
        ))}
      </div>
    </div>
    <footer className='footer'>
    <p>Copyright © 2024 Emoting Void LLP</p>
    <p>design@emotingvoid.com</p>
  </footer>
  </div>
  );
}

export default App;
