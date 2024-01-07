import { useState, useEffect } from "react";

const initialForm = {
    Fullname: "",
    Email: "",
    Phone: "",
    };

function Form({ addContact, contacts}) {
  const [form, setForm] = useState(initialForm);

    useEffect(() => {
        setForm(initialForm);
    }, [contacts])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.Fullname === "" || form.Email === "" || form.Phone === "") {
      return false;
    }

    addContact([...contacts, form]);

    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input placeholder="Name" name="Fullname" onChange={handleChange} value={form.Fullname} />
        </div>
        <div>
          <input placeholder="Email" name="Email" onChange={handleChange} value={form.Email} />
        </div>
        <div>
          <input placeholder="Phone" name="Phone" onChange={handleChange} value={form.Phone}/>
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
