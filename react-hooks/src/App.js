import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storagedItems = localStorage.getItem('techs');
    if (storagedItems) setTechs(JSON.parse(storagedItems));

    return () => {
      setNewTech('');
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <strong>Você tem {techsSize} tecnologias.</strong>
      <br />

      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
        placeholder="Tech name"
      />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}
