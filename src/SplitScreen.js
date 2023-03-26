import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Pane1 = styled.div`
  flex: 1;
`;

const Pane2 = styled.div`
  flex: 0.5;
`;

export const SplitScreen = ({ left: Left, right: Right }) => (
  <Container>
    <Pane1>
      <Left />
    </Pane1>
    <Pane2>
      <Right />
    </Pane2>
  </Container>
)