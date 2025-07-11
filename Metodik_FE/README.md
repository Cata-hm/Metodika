# Metodika – Frontend

This is the frontend of **Metodika**, a personal portfolio for Catalina Hernández Mejía. It showcases professional project management services and integrates animation, responsive design, and multilingual support.

## 🚀 Tech Stack

- **React + Vite**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **i18next** (for internationalization)
- **ESLint + Prettier**

## 🌐 Features

- Fully responsive design
- Animations with Framer Motion
- Multilingual: English / Spanish
- Contact form connected to backend
- Testimonials, Services, and About sections
- Light & fast thanks to Vite

## 📦 Installation

```bash
git clone https://github.com/Cata-hm/metodika-frontend.git
cd metodika-frontend
npm install
npm run dev

🧪 Linting
bash
Copiar
Editar
npm run lint
🌍 i18n Translations
Languages are stored under src/locales/en.json and src/locales/es.json.

To switch languages, use the language switcher component in the header.

📧 Contact Form
The contact form submits data to a backend API:

bash
Copiar
Editar
POST http://localhost:5000/api/contact
Update the endpoint in Contact.tsx if your backend URL changes.

📁 Project Structure
css
Copiar
Editar
src/
├── components/
├── locales/
├── pages/
├── styles/
└── App.tsx
🔒 Environment Variables
If needed, create a .env file for API base URLs:

ini
Copiar
Editar
VITE_API_BASE_URL=http://localhost:5000