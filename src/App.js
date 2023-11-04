import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbared from './components/Navbar';
import Studentdata from './components/Student';

function App() {
  return (
    <div className="App">
      <Navbared />
      <div className='Content'>
        <Studentdata />
        <div className="contact-container">
        </div>
      </div>
    </div>
  );
}

export default App;
