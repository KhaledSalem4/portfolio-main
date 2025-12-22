# 🚀 Portfolio Website - Khaled Ahmed

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Animated Background** - Beautiful gradient orbs with smooth animations
- 📧 **EmailJS Integration** - Functional contact form that sends emails directly
- 🌙 **Dark Mode** - Elegant dark theme with custom color palette
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎭 **Framer Motion** - Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Email Service:** EmailJS
- **Icons:** Lucide React

## 🚀 Getting Started

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd portfolio

# Step 3: Install dependencies
npm install

# Step 4: Configure EmailJS (see EMAILJS_SETUP.md for details)
# Create .env file with your EmailJS credentials

# Step 5: Start the development server
npm run dev
```

The application will open at `http://localhost:8080`

## 📧 EmailJS Setup

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Connect your Gmail account
3. Create an email template
4. Get your credentials (Service ID, Template ID, Public Key)
5. Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed instructions.

## 📚 Available Scripts

```sh
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   └── assets/         # Images and static files
├── public/             # Public assets
├── .env                # Environment variables
└── vite.config.ts      # Vite configuration
```

## 📦 Deployment

You can deploy this project to:

- **Vercel** - Recommended for React apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting option

```sh
# Build for production
npm run build

# The dist/ folder will contain your production-ready files
```

## 👨‍💻 Author

**Khaled Ahmed**  
Software Engineer  
📧 khaledas418@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/khaled-salem-121a94260)  
💙 [GitHub](https://github.com/KhaledSalem4)

---

Made with ❤️ using React + TypeScript + Tailwind CSS
