import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';
import { Custodian3Diagram } from '../components/Diagrams';
import { translations } from '../translations';

// --- Types ---
interface Node {
  x: number;
  y: number;
  z: number;
  id: number;
}

// --- Cube Component ---
const Cube = ({ 
  state = 'presencia',
  rotationX = 0.5, 
  rotationY = 0.4, 
  opacity = 0.1,
  scale = 1,
  className = "",
  flicker = false,
  isDark = false,
  density = 1,
  showLines = false 
}: { 
  state?: 'presencia' | 'observacion' | 'integracion' | 'ambiente',
  rotationX?: number, 
  rotationY?: number, 
  opacity?: number,
  scale?: number,
  className?: string,
  flicker?: boolean,
  isDark?: boolean,
  density?: number,
  showLines?: boolean
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [flickerNodes, setFlickerNodes] = useState<number[]>([]);
  
  const nodes: Node[] = useMemo(() => {
    const nodesList: Node[] = [];
    const size = 160;
    const step = size / 2;
    const jitter = 3;

    for (let z = -2; z <= 2; z++) {
      for (let y = -2; y <= 2; y++) {
        for (let x = -2; x <= 2; x++) {
          nodesList.push({
            x: x * step + (Math.random() - 0.5) * jitter,
            y: y * step + (Math.random() - 0.5) * jitter,
            z: z * step + (Math.random() - 0.5) * jitter,
            id: nodesList.length
          });
        }
      }
    }

    if (density > 1) {
      const extraDots = Math.floor(600 * (density - 1));
      for (let i = 0; i < extraDots; i++) {
        nodesList.push({
          x: (Math.random() - 0.5) * size * 2.2,
          y: (Math.random() - 0.5) * size * 2.2,
          z: (Math.random() - 0.5) * size * 2.2,
          id: nodesList.length + i
        });
      }
    }

    return nodesList;
  }, [density]);

  useEffect(() => {
    if (!flicker) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const axis = Math.floor(Math.random() * 3);
        const pos1 = Math.floor(Math.random() * 5);
        const pos2 = Math.floor(Math.random() * 5);
        
        const chain: number[] = [];
        for (let i = 0; i < 5; i++) {
          if (axis === 0) chain.push(pos1 * 25 + pos2 * 5 + i);
          if (axis === 1) chain.push(pos1 * 25 + i * 5 + pos2);
          if (axis === 2) chain.push(i * 25 + pos1 * 5 + pos2);
        }
        
        setFlickerNodes(chain);
        setTimeout(() => setFlickerNodes([]), 1000 + Math.random() * 1000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [flicker]);

  const activeNodeIds = useMemo(() => {
    let baseActive: number[] = [];
    if (state === 'presencia') {
      baseActive = [62, 87, 38];
    } else if (state === 'observacion') {
      baseActive = [12, 34, 56, 78, 90, 112, 45, 67];
    } else if (state === 'integracion') {
      baseActive = [60, 61, 62, 63, 64, 37, 87, 12, 112];
    } else if (state === 'ambiente') {
      baseActive = [0, 24, 100, 124, 62, 31, 93, 15, 109, 42, 82, 12, 112, 55, 75, 20, 104];
    }
    return [...baseActive, ...flickerNodes];
  }, [state, flickerNodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = 800;

      const rotatedNodes = nodes.map(node => {
        let { x, y, z } = node;
        let ty = y * Math.cos(rotationX) - z * Math.sin(rotationX);
        let tz = y * Math.sin(rotationX) + z * Math.cos(rotationX);
        y = ty; z = tz;
        let tx = x * Math.cos(rotationY) + z * Math.sin(rotationY);
        tz = -x * Math.sin(rotationY) + z * Math.cos(rotationY);
        x = tx; z = tz;
        return { x, y, z, id: node.id };
      });

      const sortedNodes = [...rotatedNodes].sort((a, b) => b.z - a.z);

      sortedNodes.forEach(node => {
        const s = focalLength / (focalLength + node.z);
        const px = node.x * s * scale + centerX;
        const py = node.y * s * scale + centerY;

        const isActive = activeNodeIds.includes(node.id);
        const isFlicker = flickerNodes.includes(node.id);
        const isBaseGrid = node.id < 125;
        
        ctx.beginPath();
        
        let radius = 0.8;
        if (isActive) {
          const baseActiveRadius = state === 'ambiente' ? 1.4 : 2.5;
          radius = isFlicker ? baseActiveRadius * 0.7 : baseActiveRadius;
        }
        if (!isBaseGrid) radius = 0.25; 

        ctx.arc(px, py, radius, 0, Math.PI * 2);
        
        if (isActive) {
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.6)' : (isFlicker ? 'rgba(0, 77, 64, 0.3)' : 'rgba(0, 77, 64, 0.6)');
        } else {
          const baseOpacity = isDark ? 0.12 : 0.08;
          const depthOpacity = ((node.z + 200) / 400) * baseOpacity + 0.01;
          const finalOpacity = isBaseGrid ? depthOpacity : depthOpacity * 0.6;
          ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${finalOpacity * opacity * 10})` : `rgba(161, 161, 170, ${finalOpacity * opacity * 10})`;
        }
        
        ctx.fill();
      });

      if (showLines) {
        ctx.beginPath();
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < 125; i++) {
          const nodeA = rotatedNodes[i];
          const z = Math.floor(i / 25);
          const y = Math.floor((i % 25) / 5);
          const x = i % 5;
          
          const sA = focalLength / (focalLength + nodeA.z);
          const pxA = nodeA.x * sA * scale + centerX;
          const pyA = nodeA.y * sA * scale + centerY;

          if (x < 4) {
            const nodeB = rotatedNodes[i + 1];
            const sB = focalLength / (focalLength + nodeB.z);
            ctx.moveTo(pxA, pyA);
            ctx.lineTo(nodeB.x * sB * scale + centerX, nodeB.y * sB * scale + centerY);
          }
          if (y < 4) {
            const nodeB = rotatedNodes[i + 5];
            const sB = focalLength / (focalLength + nodeB.z);
            ctx.moveTo(pxA, pyA);
            ctx.lineTo(nodeB.x * sB * scale + centerX, nodeB.y * sB * scale + centerY);
          }
          if (z < 4) {
            const nodeB = rotatedNodes[i + 25];
            const sB = focalLength / (focalLength + nodeB.z);
            ctx.moveTo(pxA, pyA);
            ctx.lineTo(nodeB.x * sB * scale + centerX, nodeB.y * sB * scale + centerY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [nodes, rotationX, rotationY, activeNodeIds, opacity, scale, flickerNodes, isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      width={1000} 
      height={1000} 
      className={`pointer-events-none ${className}`}
    />
  );
};

// --- GovernanceStructure Component ---
const GovernanceStructure = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
      transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full aspect-square flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-white">
        <motion.path
          d="M50 10 L84.6 30 L84.6 70 L50 90 L15.4 70 L15.4 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.25"
          className="opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2.5 }} className="opacity-10">
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.15" />
          <line x1="84.6" y1="30" x2="15.4" y2="70" stroke="currentColor" strokeWidth="0.15" />
          <line x1="84.6" y1="70" x2="15.4" y2="30" stroke="currentColor" strokeWidth="0.15" />
        </motion.g>
        <motion.path
          d="M50 40 L67.3 60 L32.7 60 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.5, delay: 3.5 }}
        />
        {[
          {x: 50, y: 10}, {x: 84.6, y: 30}, {x: 84.6, y: 70}, 
          {x: 50, y: 90}, {x: 15.4, y: 70}, {x: 15.4, y: 30},
          {x: 50, y: 50}
        ].map((p, i) => (
          <motion.circle 
            key={i} 
            cx={p.x} cy={p.y} r="0.8" 
            fill="currentColor" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 + i * 0.15 }}
          />
        ))}
        {[
          {x: 50, y: 40}, {x: 67.3, y: 60}, {x: 32.7, y: 60}
        ].map((p, i) => (
          <motion.circle 
            key={`agent-${i}`} 
            cx={p.x} cy={p.y} r="1.4" 
            fill="currentColor" 
            className="text-teal-deep"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.5 + i * 0.3, type: "spring", stiffness: 100 }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang];
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0.04, 0.08, 0.08, 0.04]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [2, 2.5, 3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const [cubeState, setCubeState] = useState<'presencia' | 'observacion' | 'integracion' | 'ambiente'>('presencia');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [dotDensity, setDotDensity] = useState(1);
  const [shouldFlicker, setShouldFlicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newState: 'presencia' | 'observacion' | 'integracion' | 'ambiente' = 'presencia';
    let newDark = false;
    let newDensity = 1;

    if (latest < 0.2) {
      newState = 'presencia';
      newDark = false;
      newDensity = 1;
    } else if (latest < 0.5) {
      newState = 'observacion';
      newDark = false;
      newDensity = 1.2;
    } else if (latest < 0.75) {
      newState = 'integracion';
      newDark = false;
      newDensity = 1.5;
    } else if (latest < 0.92) {
      newState = 'ambiente';
      newDark = true;
      newDensity = 3.5;
    } else {
      newState = 'presencia';
      newDark = false;
      newDensity = 1.2;
    }

    if (newState !== cubeState) {
      setCubeState(newState);
      setIsDarkTheme(newDark);
      setDotDensity(newDensity);
      setShouldFlicker(true);
      setTimeout(() => setShouldFlicker(false), 2000);
    }
  });

  return (
    <div className={`min-h-screen overflow-x-hidden selection:bg-teal-deep/10 selection:text-teal-deep font-sans relative transition-colors duration-1000 ${isDarkTheme ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ opacity: backgroundOpacity, scale: backgroundScale, y: backgroundY }}
          className="w-full h-full flex items-center justify-center"
        >
          <Cube 
            state={cubeState} 
            isDark={isDarkTheme}
            density={dotDensity}
            flicker={shouldFlicker}
            opacity={1} 
            scale={2.5} 
            className="w-full h-full max-w-[1400px] max-h-[1400px]"
          />
        </motion.div>
      </div>

      <nav className={`fixed top-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center transition-all duration-500 ${isDarkTheme ? 'bg-zinc-900/80 backdrop-blur-md border-b border-white/5 text-white' : 'bg-white/80 backdrop-blur-md border-b border-zinc-100 text-zinc-900'}`}>
        <Logo isDark={isDarkTheme} />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10 text-[11px] lg:text-[12px] font-medium tracking-[0.25em] uppercase">
          <a href="#desafio" className="opacity-80 hover:opacity-100 hover:text-teal-deep transition-all duration-300">{t.nav.desafio}</a>
          <a href="#fenomenos" className="opacity-80 hover:opacity-100 hover:text-teal-deep transition-all duration-300">{t.nav.fenomenos}</a>
          <a href="#sistema" className="opacity-80 hover:opacity-100 hover:text-teal-deep transition-all duration-300">{t.nav.sistema}</a>
          <a href="#biblioteca" className="opacity-80 hover:opacity-100 hover:text-teal-deep transition-all duration-300">{t.nav.biblioteca}</a>
          <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-teal-deep transition-all duration-300">{t.nav.nosotros}</Link>
          <a href="#contacto" className="opacity-80 hover:opacity-100 hover:text-teal-deep transition-all duration-300">{t.nav.contacto}</a>
          
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className={`ml-2 px-2.5 py-1 text-[10px] tracking-wider border transition-all hover:bg-teal-deep hover:text-white ${isDarkTheme ? 'border-white/20' : 'border-zinc-200'}`}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className={`px-2.5 py-1 text-[10px] font-medium tracking-wider border transition-all ${isDarkTheme ? 'border-white/20' : 'border-zinc-200'}`}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 focus:outline-none transition-colors ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-x-0 top-[62px] sm:top-[73px] z-40 md:hidden flex flex-col p-8 space-y-6 transition-all duration-300 ${isDarkTheme ? 'bg-zinc-900/95 border-b border-white/5 text-white' : 'bg-white/95 border-b border-zinc-200 text-zinc-900'} backdrop-blur-md max-h-[calc(100vh-62px)] overflow-y-auto`}>
          <div className="flex flex-col space-y-4 text-[13px] font-bold tracking-[0.2em] uppercase">
            <a 
              href="#desafio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-deep border-b border-zinc-150/20 pb-2 transition-colors"
            >
              {t.nav.desafio}
            </a>
            <a 
              href="#fenomenos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-deep border-b border-zinc-150/20 pb-2 transition-colors"
            >
              {t.nav.fenomenos}
            </a>
            <a 
              href="#sistema" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-deep border-b border-zinc-150/20 pb-2 transition-colors"
            >
              {t.nav.sistema}
            </a>
            <a 
              href="#biblioteca" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-deep border-b border-zinc-150/20 pb-2 transition-colors"
            >
              {t.nav.biblioteca}
            </a>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-deep border-b border-zinc-150/20 pb-2 transition-colors"
            >
              {t.nav.nosotros}
            </Link>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-deep pb-2 transition-colors"
            >
              {t.nav.contacto}
            </a>
          </div>
        </div>
      )}

      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-24 pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl mx-auto gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-7 space-y-12"
          >
            <h1 className="text-[26px] xs:text-[32px] sm:text-5xl md:text-7xl font-light leading-tight sm:leading-[1.02] tracking-tighter text-zinc-900">
              {t.hero.title1}<br />
              <span className="font-medium text-teal-deep block mt-4">{t.hero.title2}</span>
            </h1>
            <div className="space-y-8 max-w-xl">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-800 font-light tracking-tight leading-snug">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
              <Link to="/signal-readout" className="w-full sm:w-auto block sm:inline-block">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-teal-deep text-white px-4 sm:px-10 py-5 sm:py-6 text-[11px] sm:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.26em] uppercase transition-all hover:bg-teal-900 shadow-sm whitespace-normal sm:whitespace-nowrap"
                >
                  {t.hero.cta}
                </motion.button>
              </Link>
              <Link to="/scope-proposal" className="w-full sm:w-auto block sm:inline-block">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto border border-zinc-200 text-zinc-900 px-4 sm:px-10 py-5 sm:py-6 text-[11px] sm:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.26em] uppercase transition-all hover:bg-zinc-50 whitespace-normal sm:whitespace-nowrap"
                >
                  {t.hero.ctaSecondary}
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <div className="hidden lg:flex col-span-5 justify-center items-center relative">
            <GovernanceStructure className="max-w-md" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 6, delay: 2 }}
              className="absolute inset-0 bg-teal-deep rounded-full blur-[120px]"
            />
          </div>
        </div>
      </section>

      <section id="desafio" className="relative py-32 px-8 bg-zinc-50/30 border-y border-zinc-100 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-16"
          >
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <span className="text-[14px] font-bold tracking-[0.28em] uppercase text-teal-deep/50 block">{t.desafio.eyebrow}</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
                {t.desafio.title1}<br />
                {t.desafio.title2}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
              <div className="md:col-span-7 space-y-10">
                <div className="space-y-6">
                  <p className="text-xl text-zinc-600 font-light leading-relaxed text-balance">
                    {t.desafio.para}
                  </p>
                  <p className="text-[17px] text-zinc-550 font-light italic leading-relaxed text-balance pl-5 border-l-2 border-teal-deep/30">
                    {t.desafio.para2}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[14px] font-bold tracking-widest text-zinc-400 uppercase">{t.desafio.structural}</p>
                  <ul className="space-y-4 text-lg font-light text-zinc-800">
                    {t.desafio.list.map((item, i) => (
                      <li key={i} className="flex gap-4 items-center">
                        <span className="w-1.5 h-px bg-teal-deep/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5 space-y-12 pt-4 md:pt-0">
                <div className="space-y-6">
                  <p className="text-zinc-500 font-light leading-relaxed text-lg">
                    {t.desafio.fragilities_title}
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {t.desafio.fragilities.map((bullet, i) => (
                      <li key={i} className="px-5 py-3 border border-zinc-100 bg-white/50 text-zinc-900 font-normal text-base flex justify-between items-center group">
                        {bullet}
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-deep/20 group-hover:bg-teal-deep transition-colors" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-10 border-t border-zinc-200">
                  <p className="text-zinc-900 font-medium italic uppercase text-sm tracking-widest leading-tight">
                    {t.desafio.footer}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="fenomenos" className="py-32 px-8 z-10 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-[14px] font-bold tracking-[0.28em] uppercase text-teal-deep/50 block tracking-widest">{t.fenomenos.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              {t.fenomenos.title1}<br />
              <span className="text-teal-deep font-medium">{t.fenomenos.title2}</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
              {t.fenomenos.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {t.fenomenos.items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group border border-zinc-100 hover:border-teal-deep/20 transition-all duration-700 bg-white shadow-sm hover:shadow-xl hover:shadow-teal-900/5 h-full overflow-hidden"
              >
                <Link to={item.link} className="block p-10 h-full">
                  <div className="text-[14px] font-bold tracking-[0.26em] uppercase text-teal-deep/60 mb-6">{item.tag}</div>
                  <h3 className="text-zinc-900 font-normal leading-snug mb-8 text-xl tracking-tight group-hover:text-teal-deep transition-colors">{item.desc}</h3>
                  <div className="space-y-6">
                     <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-400">{t.fenomenos.what_happens}</p>
                     <ul className="space-y-4">
                      {item.examples.map((ex, j) => (
                        <li key={j} className="flex gap-4 items-center text-sm text-zinc-600 font-light">
                          <span className="w-1.5 h-px bg-zinc-200 group-hover:bg-teal-deep/30 transition-colors" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Canon vivo list displaying extended catalogue */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-zinc-100 bg-zinc-50/40 p-8 md:p-12 mt-16 shadow-sm rounded-sm max-w-5xl mx-auto"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-teal-deep/50 block">
                {lang === 'es' ? 'CANON DE CO-INTELIGENCIA' : 'CO-INTELLIGENCE CANON'}
              </span>
              <div className="space-y-5 text-left">
                <p className="text-[17px] md:text-[19px] font-light text-zinc-800 leading-relaxed max-w-4xl">
                  {t.fenomenos.canon_description1}
                </p>
                <p className="text-[17px] md:text-[19px] font-light text-zinc-500 leading-relaxed max-w-4xl">
                  {t.fenomenos.canon_description2}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center pt-8">
            <p className="text-xl font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed border-t border-zinc-100 pt-8 uppercase text-xs tracking-[0.25em]">
              {t.fenomenos.footer}
            </p>
          </div>
        </div>
      </section>

      <section id="sistema" className="py-32 px-8 bg-zinc-50/50 z-10 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <span className="text-[14px] font-bold tracking-[0.28em] uppercase text-teal-deep/50 block">{t.sistema.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-800 leading-tight">
              {t.sistema.title}
            </h2>
          </div>
          <motion.div className="py-12 border border-zinc-100 rounded-3xl shadow-sm bg-white overflow-hidden">
            <Custodian3Diagram labels={t.diagrams} />
          </motion.div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-light text-zinc-500 italic tracking-tight">
              {t.sistema.caption}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {t.sistema.blocks.map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <p className="text-[14px] font-bold tracking-[0.26em] text-zinc-400 uppercase whitespace-pre-line h-14 flex flex-col justify-end">{block.sub}</p>
                  <h4 className="text-2xl font-medium tracking-tight text-teal-deep">{block.label}</h4>
                </div>
                <div className="space-y-8">
                  <p className="text-zinc-800 font-normal text-lg leading-snug">{block.desc}</p>
                  <ul className="space-y-4 text-base text-zinc-500 font-light">
                    {block.bullets.map((b, j) => (
                      <li key={j} className="flex gap-4 items-center">
                        <span className="w-1.5 h-px bg-zinc-200" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="capacidades" className="py-32 px-8 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <div className="col-span-1 lg:col-span-7 space-y-16">
            <div className="space-y-6">
              <span className={`text-[14px] font-bold tracking-[0.28em] uppercase block ${isDarkTheme ? 'text-white/30' : 'text-zinc-400'}`}>{t.capacidades.eyebrow}</span>
              <h2 className={`text-5xl md:text-6xl font-light tracking-tight ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}>
                {t.capacidades.title}
              </h2>
              <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl ${isDarkTheme ? 'text-white/60' : 'text-zinc-500'}`}>
                {t.capacidades.para}
              </p>
            </div>
            <ul className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-xl font-light ${isDarkTheme ? 'text-white/70' : 'text-zinc-700'}`}>
              {t.capacidades.list.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-center border-b border-zinc-100 pb-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-deep opacity-30 shrink-0" />
                  <span className="tracking-tight">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-12">
            <div className={`p-12 border-l-2 ${isDarkTheme ? 'border-teal-400 text-white' : 'border-teal-deep text-zinc-900'} bg-zinc-50/10`}>
              <p className="text-3xl font-light leading-snug italic tracking-tight">
                {t.capacidades.quote}
              </p>
              <div className="mt-10">
                <p className="text-[14px] font-bold tracking-[0.28em] uppercase opacity-50">{t.capacidades.governance}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="biblioteca" className={`py-32 px-8 border-y transition-colors duration-1000 z-10 relative ${isDarkTheme ? 'bg-zinc-800/10 border-white/5' : 'bg-zinc-50/50 border-zinc-100'}`}>
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-3xl space-y-8">
            <span className={`text-[14px] font-bold tracking-[0.28em] uppercase block ${isDarkTheme ? 'text-white/30' : 'text-zinc-400'}`}>{t.biblioteca.eyebrow}</span>
            <h2 className={`text-5xl md:text-6xl font-light tracking-tight ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}>
              {t.biblioteca.title} <br />
              <span className="text-teal-deep font-medium">{t.biblioteca.highlight}</span>
            </h2>
            <p className={`text-xl font-light leading-relaxed ${isDarkTheme ? 'text-white/50' : 'text-zinc-500'}`}>
              {t.biblioteca.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {t.biblioteca.articles.map((article, i) => {
              const Content = (
                <div className="space-y-6 group cursor-pointer h-full">
                  <p className="text-[14px] font-bold tracking-[0.24em] uppercase text-teal-deep opacity-60">{article.category}</p>
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-normal tracking-tight group-hover:text-teal-deep transition-colors leading-tight ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}>
                      {article.title}
                    </h3>
                    <p className={`text-base font-light leading-relaxed ${isDarkTheme ? 'text-white/40' : 'text-zinc-500'}`}>
                      {article.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 mt-auto">
                    <p className="text-[14px] font-bold tracking-widest text-zinc-400 uppercase">{article.date}</p>
                    <span className="w-8 h-px bg-zinc-100" />
                  </div>
                </div>
              );

              return (
                <motion.div 
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {article.link ? (
                    <Link to={article.link}>{Content}</Link>
                  ) : (
                    Content
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-between items-end border-t border-zinc-100 pt-16">
            <p className={`text-sm font-light italic max-w-xl ${isDarkTheme ? 'text-white/30' : 'text-zinc-400'}`}>
              {t.biblioteca.footer}
            </p>
            <a href="#" className="text-[14px] font-bold tracking-[0.24em] uppercase text-teal-deep hover:underline">{t.biblioteca.view_all}</a>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center">
            <div className="col-span-1 lg:col-span-6 space-y-16">
              <div className="space-y-8">
                <span className={`text-[14px] font-bold tracking-[0.28em] uppercase block ${isDarkTheme ? 'text-teal-400/60' : 'text-teal-deep/60'}`}>{t.direccion.eyebrow}</span>
                <h2 className={`text-4xl md:text-5xl font-light tracking-tight leading-tight ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}>
                  {t.direccion.title}
                </h2>
                <p className={`text-xl font-light leading-relaxed ${isDarkTheme ? 'text-white/70' : 'text-zinc-600'}`}>
                  {t.direccion.para}
                </p>
              </div>
              <div className="space-y-8">
                <p className={`text-[14px] font-bold tracking-[0.24em] uppercase ${isDarkTheme ? 'text-white/30' : 'text-zinc-400'}`}>{t.direccion.structural}</p>
                <ul className={`space-y-6 text-lg font-light ${isDarkTheme ? 'text-white/70' : 'text-zinc-800'}`}>
                  {t.direccion.structural_list.map((item, i) => (
                    <li key={i} className="flex gap-5 items-center">
                      <span className="w-10 h-px bg-zinc-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-6">
              <div className={`${isDarkTheme ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-100'} backdrop-blur-sm p-12 lg:p-16 space-y-12 border shadow-2xl shadow-zinc-900/5`}>
                <p className={`text-[14px] font-bold tracking-[0.24em] uppercase ${isDarkTheme ? 'text-white/40' : 'text-zinc-400'}`}>{t.direccion.impact}</p>
                <div className="space-y-8">
                  {t.direccion.impact_list.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-deep mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                      <p className={`text-xl font-light leading-tight tracking-tight ${isDarkTheme ? 'text-white/90' : 'text-zinc-800'}`}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className={`pt-12 border-t ${isDarkTheme ? 'border-white/10' : 'border-zinc-200'}`}>
                  <p className={`text-xl font-light italic ${isDarkTheme ? 'text-white/60' : 'text-zinc-500'}`}>
                    {t.direccion.strategy}<br />
                    <span className={`${isDarkTheme ? 'text-white' : 'text-zinc-900'} font-medium not-italic`}>{t.direccion.strategy_bold}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className={`py-32 px-8 backdrop-blur-sm text-center relative overflow-hidden z-10 transition-colors duration-1000 ${isDarkTheme ? 'bg-zinc-900/40' : 'bg-zinc-50/90'}`}>
        <div className="max-w-4xl mx-auto relative z-10 space-y-14">
          <div className="space-y-10">
            <h2 className={`text-5xl md:text-7xl font-light tracking-tighter leading-[1.05] transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}>
              {t.cierre.title1}<br />
              <span className="font-medium text-teal-deep">{t.cierre.title2}</span>
            </h2>
            <p className={`text-xl font-light max-w-2xl mx-auto leading-relaxed ${isDarkTheme ? 'text-white/60' : 'text-zinc-500'}`}>
              {t.cierre.para}
            </p>
          </div>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-2xl">
              <Link to="/signal-readout" className="flex-1 w-full block">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-teal-deep text-white px-4 sm:px-10 py-5 sm:py-7 text-[11px] sm:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.26em] uppercase transition-all hover:bg-teal-900 shadow-2xl shadow-teal-900/20 whitespace-normal sm:whitespace-nowrap"
                >
                  {t.cierre.cta}
                </motion.button>
              </Link>
              <Link to="/scope-proposal" className="flex-1 w-full block">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full border px-4 sm:px-10 py-5 sm:py-7 text-[11px] sm:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.26em] uppercase transition-all ${isDarkTheme ? 'border-white/20 text-white hover:bg-white/5' : 'border-zinc-200 text-zinc-900 hover:bg-zinc-100'} whitespace-normal sm:whitespace-nowrap`}
                >
                  {t.cierre.ctaSecondary}
                </motion.button>
              </Link>
            </div>
            <p className={`text-[14px] font-bold tracking-[0.24em] uppercase opacity-40 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-zinc-900'}`}>
              {t.cierre.response}
            </p>
          </div>
        </div>
      </section>

      <section className={`py-16 px-8 border-t transition-colors duration-1000 z-10 relative text-center ${isDarkTheme ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-100'}`}>
        <p className={`text-[14px] font-bold tracking-[0.24em] uppercase mb-4 ${isDarkTheme ? 'text-white/30' : 'text-zinc-400'}`}>
          {t.partners.eyebrow}
        </p>
        <p className={`text-sm font-light max-w-2xl mx-auto ${isDarkTheme ? 'text-white/60' : 'text-zinc-500'}`}>
          {t.partners.para} <br />
          <Link to="/scope-proposal" className="text-teal-deep font-medium hover:underline ml-2">{t.partners.cta}</Link>
        </p>
      </section>

      <footer className={`py-18 px-8 border-t transition-colors duration-1000 z-10 relative ${isDarkTheme ? 'bg-zinc-900 border-white/5' : 'bg-zinc-50/30 border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <Logo isDark={isDarkTheme} />
            <div className={`text-[15px] font-bold tracking-[0.2em] uppercase transition-colors duration-1000 ${isDarkTheme ? 'text-white/20' : 'text-zinc-400'}`}>{t.footer.rights}</div>
            <div className={`text-[13px] font-medium tracking-[0.15em] transition-colors duration-1000 ${isDarkTheme ? 'text-white/30' : 'text-zinc-500'} flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 mt-2 md:gap-x-6`}>
              <a href="mailto:aflores@livingtelligence.com" className="hover:text-teal-deep transition-colors lowercase">
                aflores@livingtelligence.com
              </a>
              <span className={`hidden md:inline text-zinc-300 ${isDarkTheme ? 'opacity-20' : 'opacity-60'}`}>|</span>
              <a href="https://github.com/factivitycenei/Livingtelligence-lab" target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep transition-colors uppercase text-[11px] tracking-[0.2em]">
                GitHub
              </a>
              <span className={`hidden md:inline text-zinc-300 ${isDarkTheme ? 'opacity-20' : 'opacity-60'}`}>|</span>
              <a href="https://armando593.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep transition-colors uppercase text-[11px] tracking-[0.2em]">
                Substack
              </a>
              <span className={`hidden md:inline text-zinc-300 ${isDarkTheme ? 'opacity-20' : 'opacity-60'}`}>|</span>
              <a href="https://x.com/Livingtelligenc" target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep transition-colors uppercase text-[11px] tracking-[0.2em]">
                X
              </a>
              <span className={`hidden md:inline text-zinc-300 ${isDarkTheme ? 'opacity-20' : 'opacity-60'}`}>|</span>
              <a href="https://www.linkedin.com/in/armando-flores-b812a6413" target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep transition-colors uppercase text-[11px] tracking-[0.2em]">
                LinkedIn
              </a>
            </div>
          </div>
          <div className={`flex flex-wrap justify-center gap-12 text-[15px] font-bold tracking-[0.22em] uppercase transition-colors duration-1000 ${isDarkTheme ? 'text-white/40' : 'text-zinc-500'}`}>
            <Link to="/about" className="hover:text-teal-deep transition-colors">{t.nav.nosotros}</Link>
            <Link to="/scope-proposal" className="hover:text-teal-deep transition-colors">{t.footer.partners}</Link>
            <Link to="/privacy" className="hover:text-teal-deep transition-colors">{t.footer.privacy}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
