import React from 'react';

const PositionTable = ({ table }) => {
  const sortedTable = [...table].sort((a, b) => b.Puntos - a.Puntos || b.DG - a.DG || b.GF - a.GF);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Equipo</th>
            <th className="px-4 py-2">PJ</th>
            <th className="px-4 py-2">Puntos</th>
            <th className="px-4 py-2">PG</th>
            <th className="px-4 py-2">PP</th>
            <th className="px-4 py-2">GF</th>
            <th className="px-4 py-2">GC</th>
            <th className="px-4 py-2">DG</th>
          </tr>
        </thead>
        <tbody>
          {sortedTable.map((team, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{team.team}</td>
              <td className="border px-4 py-2">{team.PJ}</td>
              <td className="border px-4 py-2">{team.Puntos}</td>
              <td className="border px-4 py-2">{team.PG}</td>
              <td className="border px-4 py-2">{team.PP}</td>
              <td className="border px-4 py-2">{team.GF}</td>
              <td className="border px-4 py-2">{team.GC}</td>
              <td className="border px-4 py-2">{team.DG}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PositionTable;

