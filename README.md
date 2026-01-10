# 🎨 BrandCraft

[![Vercel](https://img.shields.io/badge/Vercel-Active-success?logo=vercel)](https://brandcraft-ten.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![2026 Edition](https://img.shields.io/badge/Edition-2026%20Pro-purple)](https://github.com/Gzeu/BrandCraft)

**Professional AI-Powered Logo Generator · 2026 Pro Edition**

BrandCraft este cea mai avansată platformă pentru crearea de logo-uri profesionale folosind tehnologia Pollinations AI. Oferă un dashboard intuitiv cu template-uri premium, Advanced Studio Editor și integrare directă cu marketplace-uri de print-on-demand.

🚀 **Live Demo**: [https://brandcraft-ten.vercel.app/](https://brandcraft-ten.vercel.app/)

![BrandCraft Hero](https://raw.githubusercontent.com/Gzeu/BrandCraft/main/.github/hero.png)

## ✨ Caracteristici 2026

### 🎯 Core Features
- 🤖 **AI Integration**: Pollinations Flux model pentru generare de înaltă calitate
- 🎨 **Template-uri Premium**: 6 stiluri profesionale curatizate
- ⚡ **Dashboard Modern**: Interface responsive și elegantă (2026 Edition)
- 🎯 **Customizare Avansată**: Control complet asupra culorilor, stilului și compoziției
- 📥 **Export PNG**: Download în format HD (1024x1024) print-ready
- 🔄 **Preview în Real-time**: Vizualizare instantanee a modificărilor

### 🔧 Advanced Studio Editor (NEW 2026)
- **Simetrie & Echilibru**: Adjustable 0-100% pentru control geometric precis
- **Complexitate Vizuală**: De la ultra-minimalist la detalii bogate
- **Vibe 2026 Strength**: Slider pentru aesthetic futurist (glassmorphism, holographic)
- **Icon/Text Ratio**: Control perfect între logomark și wordmark
- **Prompt Engineering**: AI parameters tuning pentru Pollinations Flux

### 🛍️ Print-on-Demand Integration (NEW 2026)
- **Zazzle Marketplace**: Launch direct cu brand parameters
- **Custom Product URLs**: Generare automată pentru T-shirts, Mugs, Stickers, Cards
- **High-Resolution Export**: Optimizat pentru print (300dpi equivalent)
- **Multi-Marketplace Ready**: Infrastructure pentru Redbubble, Printful viitor

### ⚙️ Technical Excellence
- 🌐 **100% Static**: Fără backend necesar, rulează complet în browser
- ⚡ **Edge Computing**: Processing optimizat sub 3 secunde
- 🔒 **100% Private**: Zero tracking, confidențialitate totală
- ♾️ **Generații Nelimitate**: Fără limite sau rate limiting
- 📱 **Responsive Design**: Perfect pe desktop, tablet și mobile
- 🎭 **Dark Mode**: Premium dark UI cu glassmorphism effects

## 📊 Statistici

- **50,000+** logo-uri generate
- **Sub 3 secunde** timp de generare
- **100%** gratuit și open-source
- **6** template-uri premium
- **1024x1024** rezoluție export HD

## 🚀 Tehnologii

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **React** | 19.0.0 | UI Framework (Production Stable) |
| **TypeScript** | 5.7.2 | Type Safety |
| **Vite** | 6.1.0 | Build Tool (Lightning Fast) |
| **Tailwind CSS** | 4.0 | Styling (Native Engine) |
| **Framer Motion** | 11.5.0 | Animations (New API) |
| **Lucide React** | 0.468.0 | Icons |
| **React Colorful** | 5.6.1 | Color Picker |
| **Pollinations AI** | Flux | AI Backend |

## 📦 Instalare Locală

```bash
# Clone repository
git clone https://github.com/Gzeu/BrandCraft.git
cd BrandCraft

# Install dependencies
npm install

# Start development server
npm run dev
```

Aplicația va rula la `http://localhost:5173`

## 🏗️ Build și Deploy

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Local
```bash
# Build pentru producție
npm run build

# Preview build local
npm run preview

# Analyze bundle size
npm run analyze
```

Deployment automat se face prin Vercel la fiecare push pe branch-ul `main`.

### GitHub Pages (Backup)
```bash
# Deploy to GitHub Pages
npm run deploy
```

## 🎯 Utilizare

### Quick Start
1. **Selectează un Template**: Alege dintr-o varietate de stiluri profesionale
2. **Descrie Logo-ul**: Introdu numele brandului și descrierea dorită
3. **Customizează**: Ajustează culorile și stilul
4. **Advanced Editor (Optional)**: Fine-tune cu parametri avansați
5. **Generează**: AI-ul creează logo-ul personalizat în sub 3 secunde
6. **Download**: Exportă în format PNG HD (1024x1024)
7. **Print on Products**: Launch direct pe Zazzle pentru merchandise

### Advanced Studio Editor

Utilizează slider-ele pentru control precis:
- **Symmetry (0-100%)**: 0 = Asimetric energic, 100 = Simetrie perfectă
- **Complexity (0-100%)**: 0 = Ultra-minimalist, 100 = Detalii bogate
- **Vibe 2026 (0-100%)**: 0 = Classic clean, 100 = Futuristic glassmorphic
- **Icon/Text (0-100%)**: 0 = Wordmark only, 100 = Icon-based logomark

## 🎨 Template-uri Disponibile

| Template | Style | Best For |
|:---------|:------|:---------|
| **Minimal Modern** | Ultra-minimalist geometric | Tech startups, SaaS |
| **Bold & Vibrant** | Energetic, high contrast | Creative agencies, Events |
| **Tech & Innovation** | Futuristic, circuit-inspired | AI companies, Blockchain |
| **Elegant Classic** | Timeless, refined | Luxury brands, Legal |
| **Creative Abstract** | Artistic, organic shapes | Design studios, Arts |
| **Corporate Professional** | Authoritative, trust-building | Finance, Consulting |

## 🔧 API Integration

BrandCraft folosește Pollinations AI API direct din browser:

```typescript
// Exemplu de URL generation
const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&model=flux&seed=${Date.now()}`;
```

Nu necesită API key sau autentificare - funcționează instant!

## 🛍️ Print-on-Demand Integration

```typescript
import { ZazzleProvider } from './utils/ZazzleProvider';

// Generate Zazzle product URL
const productUrl = ZazzleProvider.generateProductUrl({
  brandName: 'MyBrand',
  primaryColor: '#8B5CF6',
  category: 'tshirts'
});
```

### Supported Marketplaces
- ✅ **Zazzle** (Active - 2026)
- 🔜 **Redbubble** (Coming soon)
- 🔜 **Printful** (Coming soon)
- 🔜 **TeeSpring** (Coming soon)

## 📁 Structura Proiectului

```
BrandCraft/
├── src/
│   ├── components/
│   │   ├── LogoGenerator.tsx      # Main generator with Advanced Editor
│   │   ├── TemplateGallery.tsx    # Template selection
│   │   └── PremiumFeatures.tsx    # Feature showcase
│   ├── utils/
│   │   └── ZazzleProvider.ts      # Print-on-demand integration
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🌐 Deployment Options

### Primary (Vercel)
- **URL**: https://brandcraft-ten.vercel.app/
- **Features**: Edge computing, automatic SSL, global CDN
- **Performance**: Sub 3s generation time
- **Custom Domain**: brandcraft.aiwind.ro (coming soon)

### Backup (GitHub Pages)
- **URL**: https://gzeu.github.io/BrandCraft/
- **Setup**: Via GitHub Actions workflow
- **Fallback**: Automatic if Vercel down

## 🎯 Roadmap 2026

- [x] Advanced Studio Editor
- [x] Zazzle Print Integration
- [x] React 19 & Vite 6 upgrade
- [ ] Custom domain (brandcraft.aiwind.ro)
- [ ] Pricing tiers (Free, Pro, Enterprise)
- [ ] User accounts & logo library
- [ ] Redbubble & Printful integration
- [ ] Vector export (SVG, PDF)
- [ ] Batch generation
- [ ] Brand style guides generator
- [ ] API access for developers

## 💼 Commercial Use

**Free Tier** (Current)
- ✅ Unlimited generations
- ✅ HD export (1024x1024)
- ✅ All templates
- ✅ Advanced Editor
- ✅ Print-on-demand launch

**Pro Tier** (Coming Soon)
- Everything in Free
- Vector export (SVG, EPS, PDF)
- Higher resolution (4096x4096)
- Batch generation
- Priority support
- Commercial license

## 📄 Licență

MIT License - vezi fișierul [LICENSE](LICENSE) pentru detalii

## 👨‍💻 Autor

**George Pricop**
- GitHub: [@Gzeu](https://github.com/Gzeu)
- Location: București, Romania
- Role: Blockchain Developer & AI Automation Specialist

## 🤝 Contributing

Contributions welcome! Check out:
1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Gzeu/BrandCraft/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Gzeu/BrandCraft/discussions)
- **Email**: Contact via GitHub profile

---

⭐ Dacă îți place proiectul, dă-i un star pe GitHub!

**Made with ❤️ in București, Romania · Powered by Pollinations AI · © 2026 George Pricop**
