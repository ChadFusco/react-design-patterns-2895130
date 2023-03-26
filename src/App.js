import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => (
  <h1 style={{ backgroundColor: 'green' }}>Left!</h1>
);
const RightHandComponent = () => (
  <h2 style={{ backgroundColor: 'red' }}>Right!</h2>
);

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
    />
  );
}

export default App;
