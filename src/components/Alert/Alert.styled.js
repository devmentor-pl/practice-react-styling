import styled from 'styled-components';

const StyledAlertDefault = styled.div`
    position: relative;
    border: 1px solid black;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
`

const StyledAlert = styled(StyledAlertDefault)(
    props => ({
        backgroundColor: props.theme[props.variant + 'Background'],
        borderColor: props.theme[props.variant + 'Border'],
        color: props.theme[props.variant + 'TextColor'],
    })
)

export { StyledAlert };