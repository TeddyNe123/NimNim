import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, ArrowRight, Grid, History, BookOpen, Info, ArrowLeft } from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// --- Components ---

const Navbar = ({ onMenuToggle, onHomeClick }: { onMenuToggle: () => void, onHomeClick: () => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-stone-950/70 backdrop-blur-xl flex justify-between items-center px-8 py-6">
    <div className="flex items-center gap-4">
      <button
        onClick={onMenuToggle}
        className="text-primary hover:opacity-70 transition-opacity duration-300"
      >
        <Menu size={24} />
      </button>
    </div>
    <div
      onClick={onHomeClick}
      className="text-xl font-bold tracking-[0.2em] text-primary uppercase font-serif cursor-pointer"
    >
      NIM NIM'S LIFE
    </div>
    <div className="w-6" /> {/* Spacer for centering */}
  </nav>
);

const Hero = ({ onExplore }: { onExplore: () => void }) => (
  <section className="relative h-screen w-full flex flex-col justify-end px-6 pb-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover scale-110 brightness-[0.3] contrast-[1.1]"
        src="/girl-pho1.jpg"
        alt="Hero Background"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-10 space-y-4"
    >
      <div className="flex items-center gap-3">
        <span className="h-[1px] w-8 bg-primary"></span>
        <span className="text-[10px] tracking-[0.3em] text-primary uppercase">Volume IV — Exhibition</span>
      </div>
      <h1 className="font-serif text-[14vw] leading-[0.9] text-primary tracking-tight italic">
        I'M <br /><span className="text-stroke">PERFECT</span>
      </h1>
      <div className="pt-8 max-w-[280px]">
        <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">
          Đủ nắng hoa sẽ nở, đủ rồi Nim Nim muốn nghỉ việc
        </p>
      </div>
      <div className="pt-12 flex items-center gap-6">
        <button
          onClick={onExplore}
          className="bg-primary text-on-primary px-8 py-4 rounded-md text-xs tracking-widest uppercase transition-all duration-500 hover:bg-opacity-80"
        >
          Explore Gallery
        </button>
        <button className="text-primary flex items-center gap-2 group">
          <Play size={16} className="transition-transform group-hover:translate-x-1" />
          <span className="text-[10px] tracking-widest uppercase underline underline-offset-4">Watch Story</span>
        </button>
      </div>
    </motion.div>

    <div className="absolute bottom-8 right-6 text-right">
      <div className="text-[9px] tracking-[0.2em] text-stone-500 uppercase">Est. 1998</div>
      <div className="text-[9px] tracking-[0.2em] text-primary uppercase mt-1">DX/HCM</div>
    </div>
  </section>
);

const CategoryGallery = ({ title, images }: { title: string, images: string[] }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-surface">
      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-2 text-[10px] tracking-widest uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors cursor-pointer"
      >
        <ArrowLeft size={14} /> BACK
      </button>
      <h2 className="font-serif text-5xl mb-16 italic text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <div key={i} className="aspect-[3/4] overflow-hidden bg-stone-900 rounded-sm">
            <img src={img} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt={`${title} ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
};

const BentoGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-surface px-6 py-24 space-y-12">
      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-4xl text-primary tracking-tight">CÁ TÍNH</h2>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div onClick={() => navigate('/girl-pho')} className="group relative aspect-[4/5] bg-stone-900 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            src="/girl-pho2.jpg"
            alt="Cá Tính"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-surface to-transparent">
            <span className="text-[10px] tracking-[0.2em] text-primary uppercase mb-2">NHÂN CÁCH 01</span>
            <h3 className="font-serif text-2xl text-on-surface italic">Girl Phố Cá Tính</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div onClick={() => navigate('/summer-girl')} className="group relative aspect-square bg-stone-900 overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              src="/summer-girl1.jpg"
              alt="Summer Girl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-surface/80 to-transparent">
              <h3 className="font-serif text-lg text-on-surface">Summer Girl</h3>
            </div>
          </div>
          <div onClick={() => navigate('/anime-girl')} className="group relative aspect-square bg-stone-900 overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              src="/anime-girl1.jpg"
              alt="Anime's Girl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-surface/80 to-transparent">
              <h3 className="font-serif text-lg text-on-surface">Anime's Girl</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="bg-surface py-32 px-6">
    <div className="max-w-md mx-auto text-center space-y-8">
      <span className="text-[10px] tracking-[0.4em] text-primary uppercase">Journal Access</span>
      <h2 className="font-serif text-5xl text-primary leading-tight italic">Curated Insights <br /> to your Inbox.</h2>
      <div className="relative pt-8">
        <input
          className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-stone-700"
          placeholder="YOUR EMAIL ADDRESS"
          type="email"
        />
        <button className="absolute right-0 bottom-4 text-primary">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1c1b1b] py-20 px-8 flex flex-col gap-12 overflow-hidden">
    <div className="relative w-full border-y border-white/5 py-6 mb-12">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-3xl font-serif italic mx-8 text-primary">NIM NIM'S LIFE</span>
            <span className="text-3xl font-serif italic mx-8 text-white/10">EST. 2024</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-12 max-w-[1440px] mx-auto w-full">
      <div className="text-4xl font-serif text-primary text-center tracking-widest">NIM NIM'S LIFE</div>
      <div className="flex flex-wrap justify-center gap-8 border-y border-white/5 py-10">
        {['INSTAGRAM', 'BEHANCE', 'VIMEO', 'LINKEDIN'].map(link => (
          <a key={link} href="#" className="text-stone-500 hover:text-primary transition-colors duration-300 text-[10px] tracking-[0.2rem] uppercase">
            {link}
          </a>
        ))}
      </div>
      <div className="text-stone-600 text-[10px] tracking-[0.2rem] uppercase text-center leading-relaxed">
        © 2024 THE DIGITAL CURATOR. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

const ProjectGallery = () => (
  <section className="pt-32 pb-32 px-8">
    <div className="mb-12">
      <p className="text-[10px] tracking-[0.3rem] uppercase text-primary mb-4">Selected Works 2024</p>
      <h2 className="font-serif text-5xl italic leading-tight text-on-surface">Digital<br />Ephemera</h2>
    </div>

    <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-8 pb-12">
      <div className="flex-none w-[85vw] snap-center group">
        <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/girl-pho5.jpg"
            alt="Project 01"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-4xl font-serif italic text-white/10 block mb-2">01</span>
            <h3 className="text-3xl font-serif tracking-tighter uppercase text-primary">Aura Noctis</h3>
            <p className="text-[10px] tracking-wider text-stone-500 uppercase mt-2">VISUAL IDENTITY • 1998</p>
          </div>
        </div>
      </div>
      {/* Add more items if needed */}
    </div>

    <div className="mt-24 space-y-20">
      <div className="max-w-xs ml-auto text-right">
        <span className="text-[10px] tracking-[0.2rem] text-primary block mb-6">PHILOSOPHY</span>
        <p className="font-serif text-2xl italic leading-relaxed text-on-surface">
          "I have to work very hard because my baby is so expensive. I'm the baby."
        </p>
      </div>

      <div className="bg-stone-900/50 p-8 rounded-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-[8px] tracking-widest text-stone-500 uppercase">Services</p>
            <ul className="text-[10px] space-y-1 font-medium tracking-tight">
              <li>ART DIRECTION</li>
              <li>DIGITAL ARCHIVE</li>
              <li>BRAND ETHOS</li>
              <li>EDITORIAL DESIGN</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-[8px] tracking-widest text-stone-500 uppercase">Awards</p>
            <ul className="text-[10px] space-y-1 font-medium tracking-tight">
              <li>FWA OF THE YEAR</li>
              <li>AWWWARDS SITE OF THE DAY</li>
              <li>GOLD LION 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MenuOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[60] bg-surface flex flex-col justify-center items-start px-12"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-primary hover:opacity-70 transition-opacity"
        >
          <X size={32} />
        </button>

        <div className="space-y-10">
          <div className="text-stone-500 text-[10px] tracking-[0.4em] mb-8 uppercase">NAVIGATION</div>
          <nav className="flex flex-col gap-6">
            {['EXHIBITIONS', 'ARCHIVE', 'MANIFESTO', 'STORY'].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`font-serif text-6xl italic transition-all duration-700 ${i === 0 ? 'text-primary underline decoration-1 underline-offset-8' : 'text-stone-600 hover:text-primary'}`}
                onClick={(e) => { e.preventDefault(); onClose(); }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MobileNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-stone-950/90 backdrop-blur-2xl z-50 flex justify-around items-center px-6 py-4 border-t border-white/5">
    {[
      { id: 'home', label: 'EXHIBITIONS', icon: Grid },
      { id: 'archive', label: 'ARCHIVE', icon: History },
      { id: 'manifesto', label: 'MANIFESTO', icon: BookOpen },
      { id: 'story', label: 'STORY', icon: Info },
    ].map(tab => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        className={`flex flex-col items-center gap-1 transition-colors ${activeTab === tab.id ? 'text-primary' : 'text-stone-500'}`}
      >
        <tab.icon size={20} />
        <span className="text-[8px] tracking-widest">{tab.label}</span>
      </button>
    ))}
  </nav>
);

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'home' | 'gallery'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      <Navbar
        onMenuToggle={() => setIsMenuOpen(true)}
        onHomeClick={() => { setView('home'); setActiveTab('home'); }}
      />

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pb-20">
        <Routes>
          <Route path="/" element={
            <AnimatePresence mode="wait">
              {view === 'home' ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero onExplore={() => { setView('gallery'); setActiveTab('home'); }} />
                  <BentoGrid />
                  <Newsletter />
                </motion.div>
              ) : (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectGallery />
                </motion.div>
              )}
            </AnimatePresence>
          } />
          <Route path="/girl-pho" element={<CategoryGallery title="Girl Phố Cá Tính" images={['/girl-pho1.jpg', '/girl-pho2.jpg', '/girl-pho3.jpg', '/girl-pho4.jpg', '/girl-pho5.jpg', '/girl-pho6.jpg']} />} />
          <Route path="/summer-girl" element={<CategoryGallery title="Summer Girl" images={['/summer-girl1.jpg', '/summer-girl2.jpg', '/summer-girl3.jpg', '/summer-girl4.jpg', '/summer-girl5.jpg']} />} />
          <Route path="/anime-girl" element={<CategoryGallery title="Anime's Girl" images={['/anime-girl1.jpg', '/anime-girl2.jpg', '/anime-girl3.jpg', '/anime-girl4.jpg', '/anime-girl5.jpg']} />} />
        </Routes>
      </main>

      <Footer />

      <MobileNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') setView('home');
          // Other tabs could lead to other views if implemented
        }}
      />
    </div>
  );
}
