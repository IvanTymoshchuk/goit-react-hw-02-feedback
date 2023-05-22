import styled from '@emotion/styled';


export const SectionBox = styled.section`
   display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

`

export const Title = styled.h1`
font-size: ${p => p.theme.fonstSize.l};
color: ${p => p.theme.colors.white};
margin-bottom: ${p => p.theme.space[4]}px;
`