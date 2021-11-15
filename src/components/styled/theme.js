export default {
    variant: {
        primary: {
            color: '#004085',
            backgroundColor: '#cce5ff',
            borderColor: '#b8daff',
            active: {
                backgroundColor: '#0062cc',
                borderColor: '#005cbf'
            }
        },
        secondary: {
            color: '#383d41',
            backgroundColor: '#e2e3e5',
            borderColor: '#d6d8db',
            active: {
                backgroundColor: '#545b62',
                borderColor: '#4e555b'
            }
        },
        success: {
            color: '#155724',
            backgroundColor: '#d4edda',
            borderColor: '#c3e6cb',
            active: {
                backgroundColor: '#1e7e34',
                borderColor: '#1e7e34',
            }
        }
    },
    size: {
        sm: {
            fontSize: '.875rem',
            padding: '.25rem .5rem',
            borderRadius: '.2rem',
        },
        lg: {
            fontSize: '1.25rem',
            padding: '.5rem 1rem',
            borderRadius: '.3rem',
        }
    },
    menu: {
        display: 'flex',
        padding: '.75rem 1rem',
        marginBottom: '1rem',
        listStyle: 'none',
        backgroundColor: '#e9ecef',
        borderRadius: '.25rem',

        elements: {
            textDecoration: 'none',
            backgroundColor: 'transparent',
            paddingLeft: '.5rem'
        },
        links: {},
        before: {
            content: '"/"',
            paddingRight: '.5rem',
            color: '#6c757d'
        }
    }
}
