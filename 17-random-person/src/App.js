import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random');
  const [person, setPerson] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

    const { phone, email } = person;
    const { first, last } = person.name;
    const { age } = person.dob;
    const { number, name } = person.location.street;
    const { medium: image } = person.picture;
    const { password } = person.login;
    const tempPerson = {
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${name}`,
      phone,
      password,
      image,
    };

    setPerson(tempPerson);
    setLoading(false);
    setTitle('name');
    setValue(tempPerson.name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleValues = (e) => {
    if (e.target.classList.contains('icon')) {
      const label = e.target.dataset.label;
      setTitle(label);
      setValue(person[label]);
    }
  };

  console.log(person);
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="photo"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={toggleValues}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={toggleValues}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={toggleValues}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={toggleValues}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={toggleValues}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={toggleValues}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button">
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
