# 🎓 A/L Flashcards — Physics & Chemistry
### For Sri Lankan A/Level Students (Maths & Bio Streams)

A fast, free flashcard site covering the Sri Lanka A/Level syllabus for Physics and Chemistry.

---

## 📚 Subjects Covered

### ⚛️ Physics
- **Mechanics** — Kinematics, Newton's Laws, Work/Energy/Power
- **Waves & Optics** — Wave Properties, Refraction & Snell's Law
- **Electricity & Magnetism** — Circuits, Electric & Magnetic Fields
- **Thermal Physics** — Thermodynamics, Ideal Gas Law
- **Quantum & Nuclear** — Photoelectric Effect, Radioactivity

### 🧪 Chemistry
- **Atomic Structure & Bonding** — Atomic Structure, Chemical Bonding
- **Energetics** — Enthalpy Changes, Hess's Law, Bond Enthalpies
- **Kinetics** — Reaction Rates, Arrhenius Equation, Catalysts
- **Equilibrium** — Kc Expressions, Le Chatelier's Principle
- **Organic Chemistry** — Hydrocarbons, Functional Groups, Isomerism
- **Electrochemistry** — Electrolysis, Faraday's Laws

---

## 🚀 Deployment to Vercel via GitHub

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it: `al-flashcards` (or any name you prefer)
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload the files

**Option A: GitHub web interface (easiest)**
1. In your new repo, click **Add file** → **Upload files**
2. Upload ALL files keeping the folder structure:
   ```
   index.html
   vercel.json
   css/style.css
   js/app.js
   data/flashcards.js
   ```
3. Click **Commit changes**

**Option B: Git command line**
```bash
git init
git add .
git commit -m "Initial commit: A/L flashcards site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/al-flashcards.git
git push -u origin main
```

### Step 3 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account)
2. Click **Add New Project**
3. Find and select your `al-flashcards` repository → click **Import**
4. Leave all settings as default (Framework Preset: **Other**)
5. Click **Deploy**
6. Wait ~30 seconds — your site will be live at `https://al-flashcards.vercel.app`

### Future Updates

Every time you push to GitHub, Vercel automatically redeploys. To add more flashcards, edit `data/flashcards.js` and push.

---

## ➕ Adding More Flashcards

Open `data/flashcards.js` and add cards to any subtopic using this format:

```javascript
{
  id: "unique-id",
  question: "Your question here?",
  answer: "Your answer here\n\nWith line breaks for formatting"
}
```

To add a new subtopic:
```javascript
{
  id: "new-subtopic",
  title: "Subtopic Name",
  cards: [
    // your cards here
  ]
}
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` or `Enter` | Flip card |
| `→` | Next card |
| `←` | Previous card |
| `1` | Rate as Easy |
| `2` | Rate as Medium |
| `3` | Rate as Hard |

---

## 📁 File Structure

```
al-flashcards/
├── index.html          ← Main HTML entry point
├── vercel.json         ← Vercel deployment config
├── README.md           ← This file
├── css/
│   └── style.css       ← All styles
├── js/
│   └── app.js          ← App logic (navigation, flip, rating)
└── data/
    └── flashcards.js   ← ALL flashcard content (edit this!)
```

---

*Built for Sri Lankan A/Level Maths & Bio stream students. Add your own cards to customise for your school's syllabus.*
