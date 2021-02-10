const themeSettings = {
  variants: {
    primary: {
      bgColor: '#007bff',
      textColor: '#fff',
      borderColor: '#007bff',
      active: { bgColor: '#0062cc', borderColor: '#005cbf' },
    },
    secondary: {
      bgColor: '#6c757d',
      textColor: '#fff',
      borderColor: '#6c757d',
      active: { bgColor: '#545b62', borderColor: '#4e555b' },
    },
    success: {
      bgColor: '#28a745',
      textColor: '#fff',
      borderColor: '#28a745',
      active: { bgColor: '#1e7e34', borderColor: '#1c7430' },
    },
    danger: {
      bgColor: '#dc3545',
      textColor: '#fff',
      borderColor: '#dc3545',
      active: { bgColor: '#bd2130', borderColor: '#b21f2d' },
    },
    warning: {
      bgColor: '#ffc107',
      textColor: '#212529',
      borderColor: '#ffc107',
      active: { bgColor: '#d39e00', borderColor: '#c69500' },
    },
    info: {
      bgColor: '#17a2b8',
      textColor: '#fff',
      borderColor: '#17a2b8',
      active: { bgColor: '#117a8b', borderColor: '#10707f' },
    },
    light: {
      bgColor: '#f8f9fa',
      textColor: '#212529',
      borderColor: '#f8f9fa',
      active: { bgColor: '#dae0e5', borderColor: '#d3d9df' },
    },
    dark: {
      bgColor: '#343a40',
      textColor: '#fff',
      borderColor: '#343a40',
      active: { bgColor: '#1d2124', borderColor: '#171a1d' },
    },
    link: {
      textColor: '#007bff',
      active: {},
    },
  },
  sizes: {
    lg: {
      padding: '.5rem 1rem',
      fontSize: '1.25rem',
      lineHeight: '1.5',
      borderRadius: '.3rem',
    },
    sm: {
      padding: '.25rem .5rem',
      fontSize: '.875rem',
      lineHeight: '1.5',
      borderRadius: '.2rem',
    },
  },
  disabled: { opacity: '0.65' },
};

export default themeSettings;
