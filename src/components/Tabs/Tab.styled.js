import styled from 'styled-components';

const StyledTab = styled.div`
	display: ${(props) => (props.active ? 'block' : 'none')};
`;

export default StyledTab;
