# 🚀 React Zustand - State Management Demo

A beautiful React application demonstrating modern state management with **Zustand** - featuring a counter app and a stunning product showcase with external CSS styling.

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Zustand](https://img.shields.io/badge/Zustand-5.0.6-purple?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-7.0.4-orange?style=for-the-badge&logo=vite)

## ✨ Features

### 🎯 **Counter Application**

- **Global State Management**: Counter state managed with Zustand
- **Payload Support**: Increment/decrement with custom amounts
- **Real-time Updates**: Instant state synchronization across components
- **Reset Functionality**: Easy state reset capability

### 🛍️ **Product Showcase**

- **Beautiful UI**: Modern card-based design with hover effects
- **External CSS**: Clean, responsive styling with animations
- **API Integration**: Fetches products from FakeStore API
- **Loading States**: Elegant loading spinners and error handling
- **Responsive Design**: Mobile-first approach with CSS Grid

### 🎨 **Design Highlights**

- **Gradient Effects**: Beautiful color gradients throughout
- **Hover Animations**: Smooth transitions and interactive elements
- **Star Ratings**: Visual rating system with review counts
- **Category Badges**: Colorful product categorization
- **Modern Typography**: Clean, readable font hierarchy

## 🛠️ Tech Stack

- **React 19.1.0** - Latest React with modern features
- **Zustand 5.0.6** - Lightweight state management
- **Vite 7.0.4** - Fast build tool and dev server
- **CSS3** - Modern styling with Grid, Flexbox, and Animations
- **FakeStore API** - Product data for demonstration

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-zustand.git
   cd react-zustand
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
react-zustand/
├── src/
│   ├── counter-app/
│   │   ├── count-value.jsx      # Counter display component
│   │   ├── manage-counter.jsx   # Counter controls
│   │   ├── product-list.jsx     # Product showcase
│   │   └── ProductList.css      # Beautiful external styling
│   ├── store/
│   │   └── useCounter.js        # Zustand store configuration
│   ├── App.jsx                  # Main application component
│   └── main.jsx                 # Application entry point
├── public/                      # Static assets
└── package.json                 # Dependencies and scripts
```

## 🎯 Key Components

### **Zustand Store** (`src/store/useCounter.js`)

```javascript
const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

### **Product Store** (`src/store/useCounter.js`)

```javascript
const useProduct = create((set) => ({
  product: [],
  loading: false,
  error: null,
  fetchProduct: async () => {
    // API integration with loading states
  },
}));
```

## 🎨 Styling Features

- **CSS Grid Layout**: Responsive product grid
- **CSS Animations**: Smooth hover effects and transitions
- **Gradient Backgrounds**: Modern visual appeal
- **Box Shadows**: Depth and elevation
- **Media Queries**: Mobile-responsive design

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: Full grid layout with hover effects
- **Tablet**: Adjusted grid columns and spacing
- **Mobile**: Single column layout with touch-friendly elements

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Learning Outcomes

This project demonstrates:

- **Modern State Management** with Zustand
- **Component Architecture** in React
- **External CSS** organization and best practices
- **API Integration** with loading states
- **Responsive Design** principles
- **Modern JavaScript** features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Zustand](https://github.com/pmndrs/zustand) - For the amazing state management library
- [FakeStore API](https://fakestoreapi.com/) - For providing product data
- [Vite](https://vitejs.dev/) - For the fast build tool

---

⭐ **Star this repository if you found it helpful!**
