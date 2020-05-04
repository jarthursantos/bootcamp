import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storagedData = localStorage.getItem('techs'); 

    if (storagedData) {
      setTechs(JSON.parse(storagedData));
    }
  }, []) ;

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))

    return () => {
      
    }
  }, [techs]);

  const handleSummit = e => {
    e.preventDefault();

    setTechs([...techs, newTech]);
    setNewTech('');
  };

  const handleDelete = (tech) => {
    let updatedTechs = [...techs];

    const index = updatedTechs.findIndex(t => t === tech);

    updatedTechs.splice(index, 1);

    setTechs(updatedTechs);
  }

  return (
    <form onSubmit={handleSummit}>
      <ul>
        {techs.map(tech => (
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={() => handleDelete(tech)} 
          />
        ))}
      </ul>
      
      <input 
        type='text'
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />

      <button type='submit'>Adicionar</button>
    </form>
  );
}
