import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
`;

const EditedButton = styled(StyledButton)(({ variant, size, theme }) => {
  let obj = {};
  if (variant) {
    obj = {
      ...obj,
      backgroundColor: theme[variant].backgroundColor,
    };
  }
  if (size === "lg") {
    obj = {
      ...obj,
      padding: "10px 40px",
    };
  }
  if (size === "sm") {
    obj = {
      ...obj,
      padding: "5px 20px",
      fontSize: "1em",
    };
  }
  return obj;
});

export { StyledButton, EditedButton };
