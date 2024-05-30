import React from 'react';

const SemiFinals = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Semifinales</h2>
      {['1', '2'].map((semi, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">Emparejamiento {semi}</h3>
          <div>
            <span>Ganador {semi === '1' ? 'A vs D' : 'B vs C'}</span>
            <input type="number" className="border p-2 w-16 mx-2" placeholder="Score" />
            <input type="number" className="border p-2 w-16" placeholder="Score" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SemiFinals;
