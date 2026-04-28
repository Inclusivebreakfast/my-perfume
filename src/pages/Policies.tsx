import { motion } from 'motion/react';

export default function Policies() {
  const sections = [
    {
      id: "shipping",
      title: "Shipping & Delivery",
      subtitle: "Free Delivery. Pay at Your Door.",
      content: "We offer complimentary shipping on all orders. Once you place an order, our fulfillment partner will call you to verify your address. Payment is only required in cash or mobile money upon the physical arrival of your perfume."
    },
    {
      id: "terms",
      title: "Terms & Conditions",
      subtitle: "Commission-Based Service.",
      content: "This website acts as a verified marketing partner for our perfume merchandiser. By placing an order, you agree to receive a verification call to confirm your delivery details. All product warranties and authenticity guarantees are backed by our supplier."
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      subtitle: "Your Data is for Delivery Only.",
      content: "We only collect your name, phone number, and address to facilitate your delivery. We do not store credit card information. Your details are shared only with the specific merchandiser fulfilling your order."
    }
  ];

  return (
    <div className="pt-48 md:pt-40 pb-24 px-8 md:px-16 max-w-[1440px] mx-auto w-full bg-surface transition-colors duration-300">
      <header className="mb-16 md:mb-32">
        <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold block mb-4">Maison Information</span>
        <h1 className="text-4xl md:text-6xl font-serif text-on-surface leading-tight">Store Policies</h1>
        <div className="w-12 h-[1px] bg-primary mt-6 md:mt-8"></div>
      </header>

      <div className="space-y-24 md:space-y-32">
        {sections.map((section, idx) => (
          <motion.section 
            key={section.title}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-8"
          >
            <div className="md:col-span-4 border-l-2 border-primary/20 pl-6 md:border-l-0 md:pl-0">
              <h2 className="text-xl md:text-2xl font-serif text-primary uppercase tracking-wider mb-4 md:mb-0 leading-relaxed">{section.title}</h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-serif text-on-surface leading-normal">{section.subtitle}</h3>
              <p className="text-base md:text-lg font-light text-on-surface-variant max-w-2xl leading-relaxed">
                {section.content}
              </p>
            </div>
            {idx < sections.length - 1 && (
              <div className="w-full mt-16 md:mt-16 md:col-span-12 border-t border-outline-variant/30"></div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
