import styled from "styled-components";

// Zrezygnowałem ze standardowego użycia funkcji strzałkowej, tj. pominięcia 'return', ponieważ styled components powoduje problem z kolorowaniem składni poniżej takiego użycia (nie wiem dlaczego tak się dzieje, ale w sieci znalazłem tylko takie rozwiązanie)
const StyledBreadcrumbItem = styled.li`
  color: ${({ active }) => active && "#6c757d"};
  padding-left: 0.5rem;
  :not(:first-child)::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
`;

StyledBreadcrumbItem.displayName = "StyledBreadcrumbItem";

export default StyledBreadcrumbItem;
