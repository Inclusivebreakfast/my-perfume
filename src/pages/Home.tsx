import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      {/* Hero Section - Replicated from Image Reference */}
      <section className="relative h-screen w-full overflow-hidden flex items-center bg-surface">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-48 -right-48 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px]"
          />
          
          {/* Subtle typography background decoration */}
          <div className="absolute top-1/4 -left-10 text-[18vh] font-serif italic text-on-surface/[0.03] select-none whitespace-nowrap -rotate-6">
            MAISON DE LUXE • ESSENCE • AMBRE
          </div>
          <div className="absolute bottom-1/4 -right-10 text-[18vh] font-serif italic text-on-surface/[0.03] select-none whitespace-nowrap rotate-6">
            BOTANIQUE • RARE • ÉLÉGANCE
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-transparent to-surface/50" />
        </div>

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-100 bg-white">
          <img 
            className="w-full h-full object-cover transition-all duration-1000" 
            src="/src/assets/images/jasmine_bergamot_perfume_1777273489128.png" 
            alt="Artisan Perfume Bottle"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          {/* Scent Mist Animation */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: "50%", 
                  y: "40%" 
                }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, Math.random() * 2 + 1, 0.5],
                  x: `${50 + (Math.random() - 0.5) * 80}%`,
                  y: `${40 + (Math.random() - 0.5) * 80}%`
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-white rounded-full blur-[2px]"
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-32 w-full max-w-[1440px] mx-auto">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="max-w-2xl px-4"
          >
            <h1 className="font-serif text-[50px] md:text-[90px] text-black leading-[0.9] tracking-tighter italic">
              THE ESSENCE OF
            </h1>
            <h2 className="font-serif text-[50px] md:text-[90px] leading-[0.9] tracking-tighter mt-2 mb-12 flex flex-wrap">
              <span className="text-on-surface-variant font-light italic">REFINE</span>
              <span className="text-on-surface font-black italic">MENT</span>
            </h2>
            
            <div className="flex items-center gap-8">
              <Link 
                to="/shop" 
                className="inline-block bg-primary text-surface px-10 py-4 text-[11px] font-medium tracking-[0.2em] hover:bg-secondary hover:transform hover:-translate-y-0.5 transition-all duration-500 uppercase shadow-xl"
              >
                DISCOVER THE SCENT
              </Link>
              <Link 
                to="/shop" 
                className="inline-block bg-primary/10 backdrop-blur-md text-white px-8 py-4 text-[11px] font-medium tracking-[0.2em] border border-primary/20 hover:bg-primary hover:text-surface transition-all duration-500 uppercase"
              >
                SHOP NOW
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Cluster of Sparkles to mask watermark area */}
        <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2 text-primary/60">
           <div className="flex gap-2">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-40 animate-pulse">
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
             <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
           </div>
           <div className="flex gap-4 mr-4">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 animate-bounce" style={{ animationDuration: '3s' }}>
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
             <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 md:px-16 max-w-[1440px] mx-auto bg-surface transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <span className="text-secondary tracking-[0.4em] uppercase block mb-6 text-[10px] font-semibold">Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-on-surface mb-8 leading-tight">Curation of Elements</h2>
            <p className="text-on-surface-variant max-w-md text-lg font-light leading-relaxed mb-10">
              Each fragrance is a deliberate composition of raw botanical essences, harvested with respect for the lunar cycles and the earth's rhythm.
            </p>
            <div className="w-12 h-[1px] bg-secondary/40"></div>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[16/10] bg-surface-container overflow-hidden border border-outline-variant/10 rounded-sm">
               <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2653&auto=format&fit=crop" 
                    alt="Luxury artisan perfume composition" 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
