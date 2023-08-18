import React, { useState } from 'react';

const Barra = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [rooms, setRooms] = useState('');

  const handleSearch = () => {
    const searchData = {
      location,
      guests,
      rooms
    };

    // Llamar a la función de búsqueda pasando los datos como argumento
    onSearch(searchData);
  };

  const searchBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
    width: '80%', // Ajusta el ancho de la barra aquí
    margin: '0 auto' // Centrar horizontalmente
  };

  const inputStyles = {
    padding: '5px',
    border: 'none',
    borderRadius: '3px',
    width: '30%' // Ajusta el ancho de los campos de entrada aquí
  };

  const buttonStyles = {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
  };

  return (
    <div style={searchBarStyles}>
      <input
        type="text"
        placeholder="Ubicación"
        style={inputStyles}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Huéspedes"
        style={inputStyles}
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <input
        type="number"
        placeholder="Habitaciones"
        style={inputStyles}
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      />
      <button style={buttonStyles} onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Barra;