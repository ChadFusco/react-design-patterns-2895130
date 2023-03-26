import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => (
  <h1 style={{ backgroundColor: 'green' }}>{name}</h1>
);
const RightHandComponent = ({ message }) => (
  <h2 style={{ backgroundColor: 'red' }}>{message}!</h2>
);

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name='Chad' />
      <RightHandComponent message='Hello' />
    </SplitScreen>
  );
}

export default App;
