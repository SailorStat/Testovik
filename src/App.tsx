import s from './App.module.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={s.body}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
