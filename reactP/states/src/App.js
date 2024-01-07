import {useState} from 'react';

function App() {

  const [name, setName] = useState("inci");
  const [age, setAge] = useState(12);
  const [friends, setFriends] = useState(["mustafa", "akif"]);
  const [address, setAddress] = useState({
    title: "Sakarya",
    zip: 54040,
  });

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>Yaşın: {age}</h2>

      <button onClick={() => setName("akin")}>İsmi değiştir</button>
      <button onClick={() => setAge(8)}>Yaşı değiştir</button>

      <hr />
      <br></br>
      <h2>Arkadaşlar</h2>
      <button onClick={() => setFriends([...friends, "özden"])}>
          Arkadaş ekle
        </button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>

      <hr />
      <br></br>

      <h2>Adres</h2>
      <div>
        {address.title} / {address.zip}
      </div>
      <br/>
      <button onClick={() => setAddress({...address, title: "norvec",zip:2013})}>
        Adresi değiştir
      </button>
      
    </div>
  );
}

export default App;
