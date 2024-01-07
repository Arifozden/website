import './App.css';
import User from './components/User';

const friends = [
  { id: 1, name: "mustafa" },
  { id: 2, name: "akif" },
  { id: 3, name: "øzden" },
];

function App() {
  return (
    <div>
      <User 
      name="inci"
      surname="akin"
      isLogged={true}
      age={40}
      friends={friends}
      address={{
        title: "Sakarya",
        zip: 54040,
      }} />
    </div>
  )
}

export default App;
