import React from 'react';

const Final = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Final</h2>
      <div className="mb-4">
        <h3 className="font-bold">Emparejamiento Final</h3>
        <div>
          <span>Ganador 1 vs Ganador 2</span>
          <input type="number" className="border p-2 w-16 mx-2" placeholder="Score" />
          <input type="number" className="border p-2 w-16" placeholder="Score" />
        </div>
      </div>
      <div className="mt-4 font-bold text-xl">
        <span>CAMPEÓN:</span>
        <span className="ml-2">Equipo Ganador</span>
      </div>
    </div>
  );
};

export default Final;
