import './App.css';
import UseState from './hooks/useState'
import UseEffect from './hooks/useEffect'
import ContextComponent from './hooks/useContext'
import UseRef from './hooks/useRef'
import UseMemo from './hooks/useMemo'
import UseReducer from './hooks/useReducer'
import UseLayoutEffect from './hooks/useLayoutEffect';
import UseCallback from './hooks/useCallback'

function App() {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <ContextComponent />
      <UseRef />
      <UseMemo />
      <UseReducer />
      <UseLayoutEffect />
      <UseCallback />

    </div>
  );
}

export default App;
