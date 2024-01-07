import {useState} from 'react'

export default function InputExample() {
    const [form,setForm] = useState('{name:"",surname:""}')
    const onChangeInput = e => {
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <h1>Please enter your name</h1>
        <input name='name' type="text" value={form.name} onChange={onChangeInput} />
        <br/>
        <h1>Please enter your surname</h1>
        <input name='surname' type="text" value={form.surname} onChange={onChangeInput} />
        <br/>
        <h1>Full Name</h1>
        <h2>{form.name} {form.surname}</h2>
    </div>
  )
}
