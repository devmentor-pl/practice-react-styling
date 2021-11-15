export default {
    variant: {
        primary: {
            color: '#fff',
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            active: {
                backgroundColor: '#0062cc',
                borderColor: '#005cbf'
            }
        },
        secondary: {
            color: '#fff',
            backgroundColor: '#6c757d',
            borderColor: '#6c757d',
            active: {
                backgroundColor: '#545b62',
                borderColor: '#4e555b'
            }
        },
        success: {
            color: '#fff',
            backgroundColor: '#28a745',
            borderColor: '#28a745',
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
