import { 
  Navbar, 
  NavBody, 
  NavItems, 
  NavbarLogo, 
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle 
} from './components/Navbar.jsx'
import { useState } from 'react'
import Hero from './sections/Hero.jsx'
import ScrollVelocity from './components/ScrollVelocity.jsx'
import { MaskText } from './components/MaskText.jsx';
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo.jsx'
import { HiDownload } from 'react-icons/hi'; // Add this import at the top
import { GoogleGeminiEffectDemo } from './components/GoogleGeminiEffectDemo.jsx';

const App = () => {
  const velocity = 10; // Adjust the velocity as needed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cvPath = "./assets/socials/Curriculum Vitae - Wilmargherix Castañeda.pdf";
  
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Awards",
      link: "#awards",
    },
    {
      name: "Interests",
      link: "#interests",
    },
    {
      name: "Contacts",
      link: "#contacts",
    },
  ];
return (
  <>
    <div className="container mx-auto">
        <Navbar className="py-2 fixed top-0 left-0 right-0">
          <NavBody className="!py-2 !px-6">
            <NavbarLogo />
            <NavItems items={navItems} className="!relative" />
            <NavbarButton 
              variant="dark" 
              href={cvPath}
              download="Wilmargherix-Castaneda-CV.pdf"
              className="flex items-center gap-2"
            >
               <HiDownload className="w-4 h-4" />
              CV
            </NavbarButton>
          </NavBody>
          
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle 
                isOpen={isMenuOpen} 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
              />
            </MobileNavHeader>
            
            <MobileNavMenu isOpen={isMenuOpen}>
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="w-full px-4 py-2 text-neutral-700 hover:text-orange dark:text-neutral-300 align-center text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <NavbarButton 
                variant="dark" 
                href={cvPath}
                download="Wilmargherix-Castaneda-CV.pdf"
                className="w-full flex items-center justify-center gap-2"
              >                
              Download CV
              </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <ScrollVelocity
        texts={['data-driven innovator • academic achiever • student leader extraordinaire • serial hackathon champion', 
          'data-driven innovator • academic achiever • student leader extraordinaire • serial hackathon champion']} 
        velocity={velocity} 
        className="bg-[#e47424] text-black font-bold text-2xl " 
      />

      </div>
      
      
      <StickyScrollRevealDemo className="scrollbar-none"/>
      <MaskText /> 
      <div id="contacts"> 
        <GoogleGeminiEffectDemo />
      </div>
      
    </div>
  </>
)
}

export default App