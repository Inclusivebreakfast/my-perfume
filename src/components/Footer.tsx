import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container border-t border-outline-variant/20">
      <Link to="/" className="text-xl font-light tracking-[0.4em] text-primary uppercase">
        TULIP VERCEL
      </Link>
      
      <div className="flex flex-wrap justify-center gap-12">
        <Link to="/policies#privacy" className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 decoration-secondary/30 transition-all duration-300">PRIVACY</Link>
        <Link to="/policies#terms" className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 decoration-secondary/30 transition-all duration-300">TERMS</Link>
        <Link to="/policies#shipping" className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 decoration-secondary/30 transition-all duration-300">POLICIES</Link>
      </div>

      <div className="font-sans text-[9px] tracking-[0.1em] uppercase text-on-surface-variant/70">
        © 2024 TULIP VERCEL. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
