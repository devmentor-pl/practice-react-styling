import styled from 'styled-components';
/*pewnie  lepiej byłoby to dać w osobnych plikach ? ale swierdziłam, że skoro jest mało tego to dam w jednym dla mojej wygody ale nie wiem czy to jest ok?*/


export  const StyledCard = styled.div`
   max-width: 18rem;
   border: 1px solid lightgray;
   min-height: 400px;
   border-top-left-radius: calc(.25rem - 1px);
   border-top-right-radius: calc(.25rem - 1px);
    `


export  const StyledImg = styled.img.attrs(props => ({
    src: props.src,
  }))`
   width: 100%;
   height: 200px;

    `

export  const StyledCardBody = styled.div`
   padding: 20px;

    `
export  const StyledTitle = styled.h2`
  font-size: 20px
    `



