import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'MY BAG', path: '/checkout' },
    { name: 'POLICIES', path: '/policies' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col items-center px-8 md:px-16 py-6 bg-surface/40 backdrop-blur-sm transition-all duration-300">
      <Link to="/" className="text-xl md:text-3xl font-light tracking-[0.2em] md:tracking-[0.4em] text-primary mb-6 hover:opacity-70 transition-opacity">
        TULIP VERCEL
      </Link>
      
      <div className="flex items-center gap-8 md:gap-16">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-sans text-[10px] md:text-[14px] tracking-[0.25em] font-medium uppercase transition-colors duration-500 pb-1 ${
              location.pathname === link.path 
                ? 'text-primary border-b border-primary/40' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="absolute right-4 md:right-16 top-4 md:top-10 flex items-center gap-4 md:gap-6">
        <button 
          onClick={toggleTheme}
          className="p-1 hover:scale-110 transition-transform text-primary cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <Moon className="w-[18px] h-[18px] md:w-[27px] md:h-[27px]" strokeWidth={1.5} />
          ) : (
            <Sun className="w-[18px] h-[18px] md:w-[27px] md:h-[27px]" strokeWidth={1.5} />
          )}
        </button>

        <Link to="/checkout" className="cursor-pointer relative hover:scale-110 transition-transform text-primary">
          <ShoppingBag className="w-[18px] h-[18px] md:w-[27px] md:h-[27px]" strokeWidth={1} />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-secondary text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
