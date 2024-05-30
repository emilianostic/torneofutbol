import React from 'react';

const QuarterFinals = ({ table }) => {
  const topTeams = table.slice(0, 8);
  const quarterFinals = [
    { match: 'A', team1: topTeams[0]?.team, team2: topTeams[7]?.team },
    { match: 'B', team1: topTeams[1]?.team, team2: topTeams[6]?.team },
    { match: 'C', team1: topTeams[2]?.team, team2: topTeams[5]?.team },
    { match: 'D', team1: topTeams[3]?.team, team2: topTeams[4]?.team },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Cuartos de Final</h2>
      {quarterFinals.map((qf, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">Emparejamiento {qf.match}</h3>
          <div>
            <span>{qf.team1}</span> vs <span>{qf.team2}</span>
            <input type="number" className="border p-2 w-16 mx-2" placeholder="Score" />
            <input type="number" className="border p-2 w-16" placeholder="Score" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuarterFinals;
