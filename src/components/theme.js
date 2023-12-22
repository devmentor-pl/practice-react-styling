const alert = {
  primary: {
    color: '#007bff',
    backgroundColor: '#cce5ff',
  },
  secondary: {
    color: '#6c757d',
    backgroundColor: '#e2e3e5',
  },
  default: {
    color: '#343a40',
  },
};

const button = {
  primary: {
    bgColor: '#0d6efd',
    hoverColor: '#0b5ed7',
    focus: {
      bgColor: '#0069d9',
      boxShadow: '0 0 0 0.2rem rgba(38,143,255,.5)',
      border: '#0062cc',
    },
  },
  secondary: {
    bgColor: '#6c757d',
    hoverColor: '#5c636a',
    focus: {
      bgColor: '#565c64',
      boxShadow: '0 0 0 0.2rem rgba(86,92,100,.5)',
      border: 'transparent',
    },
  },
  small: {
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    paddingHorizontal: '0.5rem',
    paddingVertical: '0.25rem',
  },

  medium: {
    borderRadius: '0.25rem',
    fontSize: '1rem',
    paddingHorizontal: '0.75rem',
    paddingVertical: '0.375rem',
  },

  large: {
    borderRadius: '0.3rem',
    fontSize: '1.25rem',
    paddingHorizontal: '1rem',
    paddingVertical: '0.5rem',
  },
};

const theme = {
  alert: alert,
  button: button,
};

export default theme;
