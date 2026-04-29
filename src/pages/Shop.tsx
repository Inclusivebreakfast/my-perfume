import { useState } from 'react';
import { motion } from 'motion/react';
import { useCart, Product } from '../context/CartContext';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'armani-stronger',
    name: "Emporio Armani Stronger With You INTENSELY",
    category: "FOR HIM",
    size: "100ML",
    price: 6599,
    image: "https://imgs.search.brave.com/V7hu3mqfFyFMpv8DyxSFBZeR2irDO1G_QvaLZah95Q0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YXJtYW5pLXN0cm9u/Z2VyLXdpdGgteW91/LWludGVuc2VseS12/MC13cDY0d3Rjbmpm/MWIxLmpwZz93aWR0/aD0xNTAwJmZvcm1h/dD1wanBnJmF1dG89/d2VicCZzPTBlOTIz/YjZkY2IzYjA1MmFk/NzIxZTg3MGNhM2Jk/NmEwYjYzOTY4Zjk",
    description: "One of the Best Men's Perfume of The Year. Intense and amazing.",
    fullDescription: "💪🏽 Emporio Armani💪🏽\n💪🏽 Stronger With You 💪🏽\n📌 INTENSELY 📌\n🔥 One of the Best Men's Perfume of The Year\n💪🏽 100Ml\n💪🏽 PERFUME \n💪🏽 For Him/ Gentlemen's \n💪🏽 Amazing Fragrance \n💪🏽 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'ysl-myslf',
    name: "YSL MYSLF – Eau De Parfum",
    category: "FOR MEN",
    size: "100ML",
    price: 6499,
    image: "https://imgs.search.brave.com/mENO7bMvVd5cfFTi-zxVz8UYUcsK_NCtWbC-SKz2xro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkLVk5RnRNcUwu/anBn",
    description: "One of the Best Men's Perfume of The Year. Intense and amazing.",
    fullDescription: "⭐️ YSL MYSLF\n🍄 One Best Men's Perfume of The Year\n🍄 100Ml Eau De Parfum\n🍄 For Men / Gentlemen's\n🍄 Amazing Fragrance\n🍄 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'versace-man',
    name: "VERSACE MAN",
    category: "FOR MEN",
    size: "100ML",
    price: 6499,
    image: "https://imgs.search.brave.com/reHHG09Wj3Qsug2MCeXGanEggHyfI60lIRSrEIcw6L4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJhZ3JhbmNleC5j/b20vaW1hZ2VzL3By/b2R1Y3RzL3NrdS9s/YXJnZS92ZWZtMTcu/anBn",
    description: "Amazing fragrance for gentlemen. Intense and sophisticated.",
    fullDescription: "💎 VERSACE 💎\n💎 MAN 💎\n🔱 100Ml\n🔱 PERFUME \n🔱 For Men/ Gentlemen's \n🔱 Amazing Fragrance\n📿 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'lancome-lavie',
    name: "LANCOME La Vie Est Belle",
    category: "FOR HER",
    size: "75ML",
    price: 6499,
    image: "https://imgs.search.brave.com/ndvwFMdYJDHMMee7WjPZuFTxm8euWHkd0kCDpWcy5Ug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zY2Vu/dGZpZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMTAv/TGFuY29tZS1MYS12/aWUtZXN0LWJlbGxl/LTc1bWwtTGVhdS1k/ZS1QYXJmdW0uanBn/LndlYnA",
    description: "Amazing Fragrance. Life is beautiful.",
    fullDescription: "🍷LANCOME 🍷\n🍷La Vie Est Belle(Life Is Beautiful) \n🍷 75Ml \n🍷 PERFUME \n🍷 For Her/ Ladies\n🍷 Amazing Fragrance \n🍷 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'delina-exclusif',
    name: "DELINA EXCLUSIF",
    category: "FOR HER",
    size: "75ML",
    price: 6599,
    image: "https://imgs.search.brave.com/m4ieCW7mlDMQS4ljaN0NO3AgzsOD47QnyoPhFpxe_PE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZXJm/dW1lZ2guY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA0/LzcxSENFWEFpbXBM/Ll9BQ19VRjg5NDEw/MDBfUUw4MF8uanBn",
    description: "Amazing Fragrance. Edition Royale.",
    fullDescription: "🦋 DELINA EXCLUSIF🦋\n🦋 Extion Royale \n🦋 75 Ml \n🦋 PERFUME \n🦋 For Her/ Ladies\n🦋 Amazing Fragrance \n🦋 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'afnan-9pm',
    name: "AFNAN 9PM For Men – Eau De Parfum",
    category: "FOR MEN",
    size: "100ML",
    price: 5499,
    image: "https://imgs.search.brave.com/6FYDo_Jn_q3DGwK2yTFeQDRAkU6QQm1fLWhqisnFTJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2EwZ0FB/ZVN3bUpwb09UbDkv/cy1sMjI1LmpwZw",
    description: "Bold, addictive & deeply masculine scent. Powerful evening fragrance.",
    fullDescription: "♟️ 9PM For Men – Eau De Parfum (100ml)\n♟️ Bold, addictive & deeply masculine scent\n♟️ Opens with fresh notes of bergamot & cinnamon\n♟️ Transforms into elegant orange blossom\n♟️ Warms down with rich amber, vanilla & patchouli\n♟️ Long-lasting & powerful evening fragrance\n♟️ Perfect for date nights & special occasions\n♟️ Quality Guaranteed ✅\n♟️ For all skin types\n⚡️FREE DELIVERY"
  },
  {
    id: 'vs-bombshell',
    name: "Victoria's Secret BOMBSHELL",
    category: "FOR HER",
    size: "100ML",
    price: 6499,
    image: "https://hulugram-prod.fra1.cdn.digitaloceanspaces.com/media/uploads/2025/11/20/c984c147-8312-4521-aeca-2d8266f94576.jpg",
    description: "Amazing Fragrance. Confident and glamorous.",
    fullDescription: "🦋 Victoria's Secret 🦋\n🦋 BOMBSHELL \n🦋 100Ml\n🦋 PERFUME \n🦋 For Her/ Ladies\n🦋 Amazing Fragrance \n🦋 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'mini-diamond-collection',
    name: "Mini Diamond Collection Set",
    category: "ALL",
    size: "6×10ML",
    price: 10500,
    image: "https://imgs.search.brave.com/YGcbzrvb9u3gQBVsHfBhvVvmLSiyJxuBqRLSLYXvyEs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWQuc3RvcmUv/dGh1bWJzL2JmYWEz/NDU0LTBlOTAtNGY5/MS05MWM3LWJlNGNi/MTc1MmFjOC84ZGYz/ZjFlOC03MjYwLTRk/NjktYjE2Yi04OWFi/ODlmNTRiYzItdGh1/bWJuYWlsLTUwMHg1/MDAucG5n",
    description: "Luxury 6×10ML Perfume Set. Perfect for gifting.",
    fullDescription: "💎 Mini Diamond Collection – 6×10ML Perfume Set\n✨ Discover luxury in every spray.\n🎁 Perfect for gifting or trying out premium scents.\n🌟 Collection Includes:\n▪️ Black Carbon Diamond\n▪️ Emerald Soul Diamond\n▪️ Gray Pearl Diamond\n▪️ White Regent Diamond\n▪️ Purple Heart Diamond\n▪️ Nude Coral Diamond\n💼 Stylish, portable, and irresistible.\n⚡️ FREE DELIVERY"
  },
  {
    id: 'valentino-born-in-roma',
    name: "Valentino Born in Roma",
    category: "FOR HER",
    size: "100ML",
    price: 6199,
    image: "https://imgs.search.brave.com/0m_HesIgU3snskdWffolzF6C_dkjG4WpZA6WvnOht38/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFRc3dnSnRpU0wu/anBn",
    description: "Perfect for a confident woman. Romantic Bulgarian rose.",
    fullDescription: "👠Valentino 👠\n👠 For Women \n👠 Perfect for a confident woman\n👠 Made up of Bulgarian rose, which adds a touch of romance.\n👠 Perfect for a night out on the town or a special occasion.\n👠 Made and Born in Roma/ Italy 🇮🇹\n⚡️FREE DELIVERY"
  },
  {
    id: 'armani-absolutely',
    name: "Emporio Armani Stronger With You ABSOLUTELY",
    category: "FOR HIM",
    size: "100ML",
    price: 6499,
    image: "https://imgs.search.brave.com/bNyrw3zs-MyX7s1oyMMarxdCFz1rzkCMc9Up3rK7Bog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtY2YuYXJtYW5p/LmNvbS9pbWFnZS91/cGxvYWQvZl9hdXRv/LHFfYXV0bzpnb29k/LHdfMTEyNSxoXzE0/MjgsY19maWxsL3Yx/NzY4MjQ0ODgzL0xH/MjA4NDAwX05MUF81/ME1MX0RfRlcyMDI1/LmpwZw",
    description: "One of the Best Men's Perfume of The Year. Absolute intensity.",
    fullDescription: "💪🏽 Emporio Armani💪🏽\n💪🏽 Stronger With You 💪🏽\n📌 ABSOLUTELY 📌\n🔥 One of the Best Men's Perfume of The Year\n💪🏽 100Ml\n💪🏽 PERFUME \n💪🏽 For Him/ Gentlemen's \n💪🏽 Amazing Fragrance \n💪🏽 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'burberry-my',
    name: "BURBERRY MY",
    category: "FOR HER",
    size: "90ML",
    price: 6199,
    image: "https://imgs.search.brave.com/UgOSvgc3aqJa2ySKzNDY6GBzTisBVbERa_KiHPUYtRI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJhZ3JhbmNleC5j/b20vaW1hZ2VzL3By/b2R1Y3RzL3NrdS9z/bWFsbC84MDQzMG0u/anBn",
    description: "Amazing Fragrance for Her.",
    fullDescription: "🎠🎠 BURBERRY  🎠🎠\n🎠 MY\n🎠 90 Ml\n🎠 PERFUME \n🎠 For Her / Ladies\n🎠 Amazing Fragrance \n🎠 Packed\n⚡️FREE DELIVERY"
  },
  {
    id: 'chanel-coco',
    name: "CHANEL COCO",
    category: "FOR HER",
    size: "100ML",
    price: 6499,
    image: "https://imgs.search.brave.com/1JwjaFDJJDGOjlK3FZUppN36AyRMjW4JnCY7Dz4eH2Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhbmVsLmNvbS9w/dWxzLWltZy8xNzM5/MjA1MDExODM4LW9u/ZXBscGhlcm9iYW5u/ZXJtb2JpbGUxOTIw/eDIwNDhweDFqcGdf/MjA0OHgxOTIwLmpw/Zw",
    description: "Best Ladies Perfume of The Year. Amazing Fragrance.",
    fullDescription: "🧖♀ CHANEL\n🌬 COCO \n😍 Best Ladies Perfume of The Year\n🪄 100Ml\n🪄 PERFUME \n🪄For Her / Ladies\n🪄Amazing Fragrance \n🪄 Packed\n🗼 PARIS🗼\n⚡️FREE DELIVERY"
  }
];

export default function Shop() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('ALL');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = INITIAL_PRODUCTS.filter(p => {
    const categoryUpper = p.category.toUpperCase();
    const currentFilter = filter.toUpperCase();
    
    // Gender/Category filtering
    let isGenderMatch = true;
    if (currentFilter === 'FOR HER') {
      isGenderMatch = categoryUpper.includes('WOMEN') || categoryUpper.includes('HER') || categoryUpper.includes('UNISEX');
    } else if (currentFilter === 'FOR HIM') {
      isGenderMatch = categoryUpper.includes('MEN') || categoryUpper.includes('HIM') || categoryUpper.includes('UNISEX');
    }

    // Price filtering
    const min = minPrice === '' ? 0 : Number(minPrice);
    const max = maxPrice === '' ? Infinity : Number(maxPrice);
    const isPriceMatch = p.price >= min && p.price <= max;

    return isGenderMatch && isPriceMatch;
  });

  return (
    <div className="pt-24 min-h-screen bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-8">Category</h2>
                <div className="flex flex-col gap-4">
                  {['ALL', 'FOR HIM', 'FOR HER'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`text-left text-sm font-bold tracking-widest transition-all cursor-pointer ${
                        filter === f 
                          ? 'text-on-surface translate-x-2' 
                          : 'text-on-surface-variant/50 hover:text-on-surface'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-8">Price range</h2>
                <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">From (ETB)</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="1000"
                        value={minPrice}
                        onChange={(e) => {
                          const val = e.target.value;
                          setMinPrice(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                        }}
                        className="w-full bg-surface-container border-0 border-b border-outline-variant py-2 px-3 text-sm font-bold focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">To (ETB)</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="10000"
                        value={maxPrice}
                        onChange={(e) => {
                          const val = e.target.value;
                          setMaxPrice(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                        }}
                        className="w-full bg-surface-container border-0 border-b border-outline-variant py-2 px-3 text-sm font-bold focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="h-[1px] w-full bg-outline-variant opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            <div className="mb-16">
              <h1 className="text-5xl font-serif italic text-on-surface">The Collection</h1>
              <p className="text-on-surface-variant mt-4 text-sm tracking-widest uppercase font-medium">
                {filteredProducts.length} Exceptional Fragrances
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col"
                >
                  <div 
                    className="relative aspect-[3/4] overflow-hidden bg-white cursor-pointer border border-outline-variant/10 rounded-sm shadow-sm"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-on-surface/5 transition-colors duration-500" />
                  </div>
                  
                  <div className="mt-8 flex flex-col flex-grow">
                    <span className="text-[10px] tracking-[0.2em] font-black uppercase text-on-surface-variant mb-2">
                      {product.category} • {product.size}
                    </span>
                    <h3 className="text-lg font-serif text-on-surface leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4">
                      {product.name}
                    </h3>
                    <div className="mt-auto">
                      <div className="text-base font-bold text-on-surface mb-6 font-mono">
                        ETB {product.price.toLocaleString()}
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full border-b border-primary py-2 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-primary hover:text-surface transition-all duration-300 text-on-surface"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-surface/95 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl bg-surface border border-outline-variant/30 shadow-2xl relative my-auto overflow-hidden rounded-sm"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 text-2xl font-light hover:rotate-90 transition-transform z-10 text-on-surface"
            >
              ✕
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-white aspect-[3/4] md:aspect-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              
              <div className="md:w-1/2 p-12 md:p-20 flex flex-col">
                <div className="mb-12">
                  <span className="text-[10px] tracking-[0.3em] font-black uppercase text-on-surface-variant">
                    {selectedProduct.category} • {selectedProduct.size}
                  </span>
                  <h2 className="text-4xl font-serif italic text-on-surface mt-4 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <div className="mt-6 text-xl font-mono font-bold text-primary">
                    ETB {selectedProduct.price.toLocaleString()}
                  </div>
                </div>

                <div className="prose prose-sm text-on-surface-variant mb-12 max-w-none">
                  <p className="whitespace-pre-line leading-relaxed italic border-l-2 border-outline-variant/30 pl-6 text-on-surface-variant/80 underline-offset-4 decoration-secondary/30">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="mt-auto space-y-6">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-primary text-surface py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-secondary transition-colors"
                  >
                    Add to Bag
                  </button>
                  <p className="text-center text-[10px] text-on-surface-variant uppercase font-black tracking-widest">
                    Complimentary Express Delivery
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
