import React, { useEffect, useState } from 'react';
import Table from './Table';

function Form() {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [editIdx, setEditIdx] = useState (-1)
  useEffect(() => {

  }, [formData])



  const handleSubmit = (event) => {
    event.preventDefault();
    if (status === '--Select Option--') {
      alert('Please select a status option');
    } else {
      const newData = { name, age, status};
      setFormData([...formData, newData]);
      setShowTable(true);
      setName('');
      setAge('');
      setStatus('--Select Option--');
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        pattern="[A-Za-z]+"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br /> <br />
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        id="age"
        name="age"
        required
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br /><br />
      <label htmlFor="status">Status: </label>
      <select
        id="status"
        name="status"
        required
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="">--Select Option--</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
    {showTable && 
      <Table formData={formData} setFormData={setFormData}/>
    }
    </div>
  );
}

export default Form