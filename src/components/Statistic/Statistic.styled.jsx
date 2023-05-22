import styled from '@emotion/styled';

export const StatisticList = styled.ul`
  padding: 12px;
  max-width: 480px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: ${props => props.theme.colors.white};
`;

export const DescrStatistic = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  margin: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;
