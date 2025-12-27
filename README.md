# 🎨 BrandCraft

[![Vercel](https://img.shields.io/badge/Vercel-Active-success?logo=vercel)](https://brandcraft-ten.vercel.app/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Professional AI-Powered Logo Generator · 2026 Edition**

BrandCraft este o platformă modernă pentru crearea de logo-uri profesionale folosind Pollinations AI API. Oferă un dashboard intuitiv cu template-uri premium și opțiuni avansate de customizare.

🚀 **Live Demo**: [https://brandcraft-ten.vercel.app/](https://brandcraft-ten.vercel.app/)

## ✨ Caracteristici

- 🤖 **AI Integration**: Pollinations AI API pentru generare de înaltă calitate
- 🎨 **Template-uri Premium**: Colecție curatizată de stiluri profesionale
- ⚡ **Dashboard Modern**: Interface responsive și elegantă (2026 Edition)
- 🎯 **Customizare Avansată**: Control complet asupra culorilor, stilului și compoziției
- 📥 **Export PNG**: Download în format HD (1024x1024)
- 🔄 **Preview în Real-time**: Vizualizare instantanee a modificărilor
- 🌐 **100% Static**: Fără backend necesar, rulează complet în browser
- ⚡ **Edge Computing**: Processing optimizat sub 3 secunde
- 🔒 **100% Private**: Zero tracking, confidențialitate totală
- ♾️ **Generații Nelimitate**: Fără limite sau rate limiting

## 📊 Statistici

- **50,000+** logo-uri generate
- **Sub 3 secunde** timp de generare
- **100%** gratuit și open-source

## 🚀 Tehnologii

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **AI Backend**: Pollinations AI API (direct integration)
- **UI Components**: Lucide React, React Colorful
- **Deployment**: Vercel (primary), GitHub Pages (backup)

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
```

Deployment automat se face prin Vercel la fiecare push pe branch-ul `main`.

## 🎯 Utilizare

1. **Selectează un Template**: Alege dintr-o varietate de stiluri profesionale
2. **Descrie Logo-ul**: Introdu numele brandului și descrierea dorită
3. **Customizează**: Ajustează culorile, stilul și detaliile
4. **Generează**: AI-ul creează logo-ul personalizat în sub 3 secunde
5. **Download**: Exportă în format PNG HD (1024x1024)

## 🎨 Template-uri Disponibile

- **Minimal Modern**: Design curat și minimalist
- **Bold & Vibrant**: Culori vii și energie
- **Tech & Innovation**: Stil futurist și tehnologic
- **Elegant Classic**: Rafinament și tradiție
- **Creative Abstract**: Forme artistice și unice
- **Corporate Professional**: Business și credibilitate

## 🔧 API Integration

BrandCraft folosește Pollinations AI API direct din browser:

```typescript
// Exemplu de URL generation
const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&model=flux&seed=${Date.now()}`;
```

Nu necesită API key sau autentificare - funcționează instant!

## 📁 Structura Proiectului

```
BrandCraft/
├── src/
│   ├── components/
│   │   ├── LogoGenerator.tsx
│   │   └── TemplateGallery.tsx
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

### Backup (GitHub Pages)
- **URL**: https://gzeu.github.io/BrandCraft/
- **Setup**: Via GitHub Actions workflow

## 📄 Licență

MIT License - vezi fișierul LICENSE pentru detalii

## 👨‍💻 Autor

**George Pricop** - [GitHub](https://github.com/Gzeu)

---

⭐ Dacă îți place proiectul, dă-i un star pe GitHub!