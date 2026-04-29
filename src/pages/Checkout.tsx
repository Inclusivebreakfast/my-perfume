import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    specificAddress: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const LOCATIONS = [
    { group: "Bole Area", areas: ["Bole Area", "Bole Japan", "Bole Michael"] },
    { group: "Central Areas", areas: ["22 Sefer", "Welo Sefer", "24 Sefer", "Dembel", "Mexico", "Urael", "Kazanchis", "Stadium", "Signal"] },
    { group: "Other Areas", areas: ["Wengelawit", "Aware", "Bulbula", "Jacros", "Piassa", "4 Kilo", "Goro", "Gerji", "Megenagna", "Tor Hayloch", "Weyra Sefer", "Sarbet", "Bisrate Gebriel", "Mekanisa", "CMC", "Wesen", "Gofa"] }
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.location) newErrors.location = 'Please select a delivery location';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(null);

      // Create a formatted list of items for the email
      const itemsList = cart.map(item => `${item.name} x${item.quantity} (${item.price} Birr each)`).join('\n');
      
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        location: formData.location,
        specificAddress: formData.specificAddress,
        items: itemsList,
        totalPrice: `${subtotal} Birr`,
        _subject: `New Order from ${formData.fullName}`,
      };

      try {
        const response = await fetch('https://formspree.io/f/xojyyval', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const data = await response.json();
          setSubmitError(data.error || 'Something went wrong. Please try again.');
        }
      } catch (error) {
        setSubmitError('Failed to send order. Please check your connection.');
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 px-8 text-center max-w-lg mx-auto">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle className="mx-auto text-green-600 mb-6" size={64} />
          <h1 className="text-3xl font-serif mb-4">Order Confirmed</h1>
          <p className="text-on-surface-variant mb-8">Thank you for your order. Our team will contact you shortly to verify delivery details.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-primary text-white px-12 py-4 tracking-widest text-xs font-semibold"
          >
            RETURN HOME
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 max-w-4xl mx-auto bg-surface transition-colors duration-300">
      <h1 className="text-4xl font-serif text-center mb-16 text-on-surface">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Order Summary */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-8">Order Summary</h2>
          <div className="space-y-6 border-t border-outline-variant/30 pt-6">
            {cart.length === 0 ? (
              <p className="text-on-surface-variant italic">Your bag is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-20 object-contain bg-white p-2 rounded-sm shadow-sm" />
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-on-surface">{item.name}</h3>
                    <p className="text-xs text-on-surface-variant">{item.price} Birr</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 border border-outline-variant hover:border-primary text-on-surface"><Minus size={12}/></button>
                      <span className="text-xs text-on-surface">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 border border-outline-variant hover:border-primary text-on-surface"><Plus size={12}/></button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-on-surface-variant hover:text-red-500 transition-colors">
                    <Trash2 size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-outline-variant/30 space-y-4">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>{subtotal} Birr</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Delivery</span>
              <span className="text-secondary font-semibold tracking-wide uppercase text-xs">Free</span>
            </div>
            <div className="flex justify-between text-xl font-serif pt-4 text-on-surface">
              <span>Total</span>
              <span>{subtotal} Birr</span>
            </div>
          </div>
        </section>

        {/* Delivery Details */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-8">Delivery Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Enter your name"
                className={`w-full bg-transparent border-b border-outline-variant px-0 py-3 text-sm focus:ring-0 focus:border-primary outline-none transition-colors text-on-surface ${errors.fullName ? 'border-red-500' : ''}`}
              />
              {errors.fullName && <p className="text-red-500 text-[10px] mt-1 uppercase">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="09__ ___ ____"
                className={`w-full bg-transparent border-b border-outline-variant px-0 py-3 text-sm focus:ring-0 focus:border-primary outline-none transition-colors text-on-surface ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <p className="text-red-500 text-[10px] mt-1 uppercase">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Delivery Location</label>
              <select 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className={`w-full bg-transparent border-b border-outline-variant px-0 py-3 text-sm focus:ring-0 focus:border-primary outline-none transition-colors appearance-none text-on-surface ${errors.location ? 'border-red-500' : ''}`}
              >
                <option value="" className="text-on-surface-variant">Select your area</option>
                {LOCATIONS.map((group) => (
                  <optgroup key={group.group} label={group.group} className="bg-surface">
                    {group.areas.map(area => (
                      <option key={area} value={area} className="bg-surface">{area}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {errors.location && <p className="text-red-500 text-[10px] mt-1 uppercase">{errors.location}</p>}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Specific Details / House No. (Optional)</label>
              <input 
                type="text" 
                value={formData.specificAddress}
                onChange={(e) => setFormData({...formData, specificAddress: e.target.value})}
                placeholder="Apartment, suite, unit, etc."
                className="w-full bg-transparent border-b border-outline-variant px-0 py-3 text-sm focus:ring-0 focus:border-primary outline-none transition-colors text-on-surface"
              />
            </div>

            <div className="bg-surface-container p-4 rounded-lg flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface">Note:</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed font-serif italic">
                  On Sundays and after 1:00 PM LT, a small delivery fee may apply.
                </p>
              </div>
            </div>

            <button 
              type="submit"
              disabled={cart.length === 0 || isSubmitting}
              className="w-full bg-primary text-surface py-5 px-8 text-xs font-semibold tracking-[0.2em] hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase mt-8 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-surface border-t-transparent rounded-full"
                  />
                  PROCESSING...
                </>
              ) : (
                'CONFIRM ORDER'
              )}
            </button>
            {submitError && (
              <p className="text-red-500 text-[10px] mt-4 text-center font-bold uppercase tracking-widest">
                {submitError}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
