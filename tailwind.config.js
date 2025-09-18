module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
          600: "#2b77cb", // blue-600
          700: "#2c5282", // blue-700
          800: "#2a4365", // blue-800
          900: "#1a365d", // blue-900
        },
        secondary: {
          DEFAULT: "#2d3748", // gray-700
          50: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
        },
        accent: {
          DEFAULT: "#00d4ff", // cyan-400
          50: "#ecfeff", // cyan-50
          100: "#cffafe", // cyan-100
          200: "#a5f3fc", // cyan-200
          300: "#67e8f9", // cyan-300
          400: "#00d4ff", // cyan-400
          500: "#06b6d4", // cyan-500
          600: "#0891b2", // cyan-600
          700: "#0e7490", // cyan-700
          800: "#155e75", // cyan-800
          900: "#164e63", // cyan-900
        },
        background: "#f7fafc", // gray-50
        surface: "#edf2f7", // gray-100
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
        },
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
          700: "#276749", // green-700
          800: "#22543d", // green-800
          900: "#1c4532", // green-900
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          200: "#faf089", // yellow-200
          300: "#f6e05e", // yellow-300
          400: "#ecc94b", // yellow-400
          500: "#d69e2e", // yellow-500
          600: "#c05621", // yellow-600
          700: "#b7791f", // yellow-700
          800: "#975a16", // yellow-800
          900: "#744210", // yellow-900
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-50
          100: "#feb2b2", // red-100
          200: "#fc8181", // red-200
          300: "#f56565", // red-300
          400: "#ed8936", // red-400
          500: "#e53e3e", // red-500
          600: "#c53030", // red-600
          700: "#9b2c2c", // red-700
          800: "#822727", // red-800
          900: "#63171b", // red-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        code: ['Source Code Pro', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'code-reveal': 'codeReveal 400ms ease-out',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        codeReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}