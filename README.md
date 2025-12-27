# 🎨 BrandCraft

**Professional AI-Powered Logo Generator**

BrandCraft este o platformă modernă pentru crearea de logo-uri profesionale folosind Pollinations AI API. Oferă un dashboard intuitiv cu template-uri premium și opțiuni avansate de customizare.

🚀 **Live Demo**: [https://gzeu.github.io/BrandCraft/](https://gzeu.github.io/BrandCraft/)

## ✨ Caracteristici

- 🤖 **AI Integration**: Pollinations AI API pentru generare de înaltă calitate
- 🎨 **Template-uri Premium**: Colecție curatizată de stiluri profesionale
- ⚡ **Dashboard Modern**: Interface responsive și elegantă
- 🎯 **Customizare Avansată**: Control complet asupra culorilor, stilului și compoziției
- 📥 **Export PNG**: Download în format HD (1024x1024)
- 🔄 **Preview în Real-time**: Vizualizare instantanee a modificărilor
- 🌐 **100% Static**: Fără backend necesar, rulează complet în browser

## 🚀 Tehnologii

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **AI Backend**: Pollinations AI API (direct integration)
- **UI Components**: Lucide React, React Colorful
- **Deployment**: GitHub Pages

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

```bash
# Build pentru producție
npm run build

# Preview build local
npm run preview

# Deploy pe GitHub Pages
npm run deploy
```

Deployment automat se face prin GitHub Actions la fiecare push pe branch-ul `main`.

## 🎯 Utilizare

1. **Selectează un Template**: Alege dintr-o varietate de stiluri profesionale
2. **Descrie Logo-ul**: Introdu numele brandului și descrierea dorită
3. **Customizează**: Ajustează culorile, stilul și detaliile
4. **Generează**: AI-ul creează logo-ul personalizat
5. **Download**: Exportă în format PNG HD

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
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🌐 GitHub Pages Setup

1. Repository Settings → Pages
2. Source: GitHub Actions
3. Workflow-ul `.github/workflows/deploy.yml` va face deploy automat

## 📄 Licență

MIT License - vezi fișierul LICENSE pentru detalii

## 👨‍💻 Autor

**George Pricop** - [GitHub](https://github.com/Gzeu)

---

⭐ Dacă îți place proiectul, dă-i un star pe GitHub!
