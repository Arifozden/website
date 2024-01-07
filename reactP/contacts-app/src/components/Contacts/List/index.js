import {useState} from 'react'

function List({ contacts}) {

  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    })
  });

  return (
    <div>
      <input placeholder="Search" value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
      <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Contact List</h1>
      <table className='list'>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((contact, index) => (
            <tr key={index}>
              <td>{contact.Fullname}</td>
              <td>{contact.Email}</td>
              <td>{contact.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <p>Found Contacts ({filtered.length}/{contacts.length})</p>
    </div>
  )
}

export default List
