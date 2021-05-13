import styled from "styled-components";

const StyledAlert = styled.div`
  display: block;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
  border-radius: 4px;
  width: 100%;
  padding-left: 5%;
  line-height: 50px;
  color: #0064b8;
`;

const VariantedAlert = styled(StyledAlert)(({ variant, theme }) => {
  return {
    backgroundColor: theme[variant].backgroundColor,
    color: theme[variant].color,
    borderColor: theme[variant].borderColor,
  };
});

export { StyledAlert, VariantedAlert };
