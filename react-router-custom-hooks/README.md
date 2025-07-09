# 🚀 React Router & Custom Hooks Project

A modern, feature-rich React application demonstrating advanced concepts including React Router, Custom Hooks, Form Validation, TanStack Query, and more. Built with Vite for lightning-fast development.

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.3-purple?style=for-the-badge&logo=vite)
![React Router](https://img.shields.io/badge/React%20Router-7.6.3-green?style=for-the-badge&logo=react-router)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.0.0-orange?style=for-the-badge&logo=react-query)

## ✨ Features

### 🎯 **Core Functionality**

- **React Router v7**: Advanced routing with nested routes and dynamic parameters
- **Custom Hooks**: Reusable logic for data fetching and window resizing
- **Form Validation**: Complete form handling with React Hook Form
- **TanStack Query**: Server state management with caching and mutations
- **Modern UI/UX**: Glass morphism design with smooth animations
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### 🍳 **Recipe Management**

- **Recipe Gallery**: Beautiful 4-column grid layout with hover effects
- **API Integration**: Fetches recipes from DummyJSON API
- **Image Handling**: Fallback images for broken URLs
- **Recipe Details**: Individual recipe pages with dynamic routing
- **Cooking Information**: Display cooking time, servings, and tags
- **Interactive Cards**: Clickable recipe cards with overlay effects
- **Back Navigation**: Seamless navigation between recipe list and details

### 💬 **Comments System**

- **User Comments**: Community comments with user avatars
- **Real-time Data**: Live comments from API
- **User Information**: Username display and post references
- **Reaction System**: Like counts and user interactions
- **Modern Design**: Clean, card-based layout with user avatars

### 📝 **Form Validation**

- **React Hook Form**: Complete form validation solution
- **Real-time Validation**: Instant feedback on user input
- **Password Strength**: Advanced password requirements
- **Email Validation**: Proper email format checking
- **Success Feedback**: Visual confirmation of valid inputs
- **Form Navigation**: Easy access from main navigation

### 🔧 **React Hooks Demo**

- **useState**: State management with re-renders
- **useRef**: DOM references and previous value tracking
- **useCallback**: Memoized functions for performance
- **useMemo**: Expensive calculation optimization
- **Interactive Counter**: Live demonstration of hooks
- **Performance Optimization**: Proper hook usage patterns

### ⚡ **React Query Demo (NEW!)**

- **TanStack Query Integration**: Modern server state management
- **Product Management**: Add, view, and manage products
- **Mutation Handling**: Proper form submission with useMutation
- **Cache Management**: Automatic cache invalidation and updates
- **Loading States**: Beautiful loading spinners and states
- **Error Handling**: Comprehensive error display and recovery
- **Real-time Updates**: Instant UI updates after mutations
- **Form Validation**: Client-side validation with proper UX

## 🛠️ Technologies Used

- **React 19.1.0** - Latest React with concurrent features
- **Vite 7.0.3** - Lightning-fast build tool
- **React Router DOM 7.6.3** - Advanced routing solution
- **React Hook Form 7.60.0** - Performant form validation
- **TanStack Query 5.0.0** - Server state management
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-router-custom-hooks.git
   cd react-router-custom-hooks
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── header/           # Navigation header component
│   └── layout/           # Main layout wrapper
├── hooks/
│   ├── use-fetch.jsx     # Custom hook for API calls
│   └── use-window-resize.jsx  # Window resize hook
├── pages/
│   ├── comments/         # Comments page with user data
│   ├── hooks/            # React hooks demonstration
│   ├── react-hook-form/  # Form validation page
│   ├── recipes/          # Recipe gallery page
│   ├── recipe-details/   # Individual recipe page
│   ├── react-query-demo/ # TanStack Query demo (NEW!)
│   │   ├── index.jsx     # Main React Query component
│   │   ├── styles.css    # React Query styling
│   │   └── api/          # API functions
│   └── not-found/        # 404 error page
├── styles/
│   └── navigation.css    # Main navigation styling
├── App.jsx               # Main application component
└── main.jsx             # Application entry point
```

## 🎨 Design Features

### **Modern UI Elements**

- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful purple gradient theme
- **Smooth Animations**: CSS transitions and keyframe animations
- **Hover Effects**: Interactive elements with lift and shine effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Loading Spinners**: Animated loading indicators
- **Form Styling**: Modern form inputs with focus states

### **Color Scheme**

- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green gradient (#27ae60 to #229954)
- **Warning**: Orange gradient (#e67e22 to #d35400)
- **Error**: Red gradient (#e74c3c to #c0392b)
- **Neutral**: Gray gradient (#95a5a6 to #7f8c8d)

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: 1200px+ (4-column grid for recipes)
- **Tablet**: 768px-1199px (3-column grid)
- **Mobile**: <768px (1-column layout)

## 🌟 Key Features Explained

### **Custom Hooks**

- **useFetch**: Handles API calls with loading, error, and data states
- **useWindowResize**: Tracks window dimensions for responsive design

### **Routing System**

- **Nested Routes**: Layout wrapper with child routes
- **Dynamic Parameters**: Recipe details with ID-based routing
- **404 Handling**: Custom not-found page for invalid routes

### **Form Validation**

- **Real-time Feedback**: Instant validation messages
- **Password Requirements**: Uppercase, lowercase, number, 8+ characters
- **Email Format**: Proper email validation with regex
- **Confirm Password**: Matching password validation

### **TanStack Query Features**

- **Server State Management**: Efficient caching and synchronization
- **Mutations**: Optimistic updates and error handling
- **Cache Invalidation**: Automatic data refetching
- **Loading States**: Built-in loading and error states
- **Background Updates**: Seamless data synchronization

### **Performance Optimizations**

- **useCallback**: Prevents unnecessary re-renders
- **useMemo**: Memoizes expensive calculations
- **Lazy Loading**: Efficient component loading
- **Image Optimization**: Fallback handling for broken images
- **Query Caching**: Intelligent data caching with TanStack Query

## 🆕 Recent Updates

### **React Query Demo (Latest)**

- ✅ Complete TanStack Query integration
- ✅ Product management with mutations
- ✅ Real-time form validation
- ✅ Beautiful loading and error states
- ✅ Automatic cache management
- ✅ Responsive design with animations

### **Enhanced Styling**

- ✅ Modern glass morphism design
- ✅ Smooth hover animations
- ✅ Loading spinners and transitions
- ✅ Improved form styling
- ✅ Better responsive breakpoints

### **Navigation Improvements**

- ✅ Symmetrical header layout
- ✅ Enhanced hover effects
- ✅ Better mobile responsiveness
- ✅ Consistent design language

## 🙏 Acknowledgments

- **DummyJSON API** for providing test data
- **React Router** team for excellent routing solution
- **React Hook Form** for performant form handling
- **TanStack Query** for powerful server state management
- **Vite** team for the amazing build tool

## 📞 Contact

- **GitHub**: [@blackhawk-2003](https://github.com/blackhawk-2003)
- **Email**: hawkb1433@gmail.com
- **LinkedIn**: [Aditya Singh](www.linkedin.com/in/adityasingh0412)

---

<div align="center">
  <p>Made with ❤️ by <strong>Aditya Singh</strong></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
