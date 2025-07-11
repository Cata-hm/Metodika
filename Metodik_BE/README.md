
---

### ✅ `README.md` para el **Backend** (Node + Express)

```md
# Metodika – Backend API

This is the backend for the Metodika portfolio. It handles contact form submissions and can be extended to store or forward data via email, databases, or other integrations.

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **dotenv**
- **Nodemailer** (optional)
- **Helmet** (recommended for production)

## 🚀 Installation

```bash
git clone https://github.com/Cata-hm/metodika-backend.git
cd metodika-backend
npm install
npm run dev


📨 Contact Endpoint
POST /api/contact
Body:

json
Copiar
Editar
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello, I need help..."
}
Response:

json
Copiar
Editar
{
  "success": true,
  "message": "Message received"
}
🔒 Environment Variables
Create a .env file in the root with the following (if using mail):

ini
Copiar
Editar
PORT=5000
EMAIL_USER=youremail@example.com
EMAIL_PASS=yourpassword
🛡️ Middleware
CORS enabled for http://localhost:5173 (Vite frontend)

JSON body parsing

Helmet for security (recommended in production)

🔧 Optional Mail Support
If you want the contact form to send emails, integrate Nodemailer and configure SMTP in .env.

📁 Project Structure
pgsql
Copiar
Editar
.
├── routes/
│   └── contact.js
├── app.js
└── server.js
🧪 Testing Locally
Use Postman or the frontend form to test POST /api/contact.