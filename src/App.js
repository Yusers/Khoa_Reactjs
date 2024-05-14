import { Homepage } from './components/Homepage.js';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
      }}
      className='App'
    >
      <Homepage />
    </div>
  );
}

export default App;
