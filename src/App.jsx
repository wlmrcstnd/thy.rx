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
import { useState, useEffect } from 'react'
import Hero from './sections/Hero.jsx'
import ScrollVelocity from './components/ScrollVelocity.jsx'
import { MaskText } from './components/MaskText.jsx';
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo.jsx'
import { HiDownload } from 'react-icons/hi'; // Add this import at the top
import { GoogleGeminiEffectDemo } from './components/GoogleGeminiEffectDemo.jsx';
import { MultiStepLoader } from './components/MultiStepLoader';

const App = () => {
  const velocity = 10; // Adjust the velocity as needed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cvPath = "./assets/socials/Curriculum Vitae - Wilmargherix Castañeda.pdf";
  const [loading, setLoading] = useState(true); 
  const [progress, setProgress] = useState(0);
  const [currentLoadingState, setCurrentLoadingState] = useState(0);


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

  useEffect(() => {
    let mounted = true;
    let loadingInterval;

    const handleLoad = async () => {
      // Start loading animation
      loadingInterval = setInterval(() => {
        setCurrentLoadingState(prev => (prev + 1) % loadingStates.length);
      }, 2000); // Change message every 2 seconds

      try {
        // Start with loading assets
        setProgress(25);
        
        // Wait for images to load
        const images = document.querySelectorAll('img');
        const imagePromises = Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        });

        setProgress(50);

        // Wait for fonts to load
        await document.fonts.ready;
        setProgress(75);

        // Wait for all images and other resources
        await Promise.all([
          ...imagePromises,
          new Promise(resolve => {
            if (document.readyState === 'complete') {
              resolve();
            } else {
              window.addEventListener('load', resolve);
            }
          })
        ]);

        setProgress(100);

        // Clear interval and finish loading
        clearInterval(loadingInterval);
        
        // Final delay for smooth transition
        setTimeout(() => {
          if (mounted) {
            setLoading(false);
          }
        }, 500);

      } catch (error) {
        console.error('Loading error:', error);
      }
    };

    handleLoad();

    return () => {
      mounted = false;
      if (loadingInterval) clearInterval(loadingInterval);
    };
  }, []);

const loadingStates = [
  {
    text: "Booting up... (just like my brain during 8 AM lectures)",
    progress: 0
  },
  {
    text: "Checking for updates... (please don't be a last-minute assignment)",
    progress: 15
  },
  {
    text: "Compiling dependencies... (and my life choices)",
    progress: 30
  },
  {
    text: "Running tests... *fails* ...retrying (just like my algorithms class)",
    progress: 45
  },
  {
    text: "Debugging... (why did this work yesterday??)",
    progress: 60
  },
  {
    text: "Finalizing... (almost as stressful as thesis defense)",
    progress: 75
  },
  {
    text: "Graduation loading... (99.9% complete)",
    progress: 90
  }
];

const rareMessages = [
  "LeetCode grind flashbacks...",
  "Professor's voice: 'This will be on the final exam.'",
  "404 Sleep Not Found",
  "BRB, submitting a late assignment"
];

// Randomly inject a rare message at 50% progress
if (Math.random() < 0.1) { // 10% chance
  loadingStates.splice(3, 0, {
    text: rareMessages[Math.floor(Math.random() * rareMessages.length)],
    progress: 50
  });
}

  return (
    <>
      <MultiStepLoader 
        loadingStates={loadingStates}
        loading={loading}
        progress={progress}
        currentState={currentLoadingState}
        duration={500}
        loop={true}
      />
      
      {!loading && (
        <div className="w-full">
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
      )}
    </>
  )
}

export default App