import React, { useState, useCallback } from 'react';
import PositionTable from './components/PositionTable';
import DateCard from './components/DateCard';
import QuarterFinals from './components/QuarterFinals';
import SemiFinals from './components/SemiFinals';
import Final from './components/Final';

const teams = [
  "Ingenieros A", "Contadores D", "Contadores S", "Contadores E", 
  "Abogados A", "Abogados E", "Kinesiólogos", "Ingenieros Arq.",
  "Ingenieros O", "Ingenieros Z", "Ingenieros Bio.", "Contadores J", "Contadores V"
];

const App = () => {
  const initialResults = Array(13).fill(null).map(() => ({
    matches: Array(6).fill(null).map(() => ({ team1: "", team2: "", score1: 0, score2: 0 })),
    freeTeam: null
  }));

  const initialPositionTable = teams.map(team => ({
    team,
    PJ: 0,
    Puntos: 0,
    PG: 0,
    PP: 0,
    GF: 0,
    GC: 0,
    DG: 0
  }));

  const [results, setResults] = useState(initialResults);
  const [positionTable, setPositionTable] = useState(initialPositionTable);

  const handleDateChange = useCallback((index, newResults) => {
    const newResultsArray = [...results];
    newResultsArray[index] = newResults;
    setResults(newResultsArray);
    updatePositionTable(newResultsArray);
  }, [results]);

  const updatePositionTable = (resultsArray) => {
    const newTable = teams.map(team => ({
      team,
      PJ: 0,
      Puntos: 0,
      PG: 0,
      PP: 0,
      GF: 0,
      GC: 0,
      DG: 0
    }));

    resultsArray.forEach(result => {
      result.matches.forEach(match => {
        if (!match.team1 || !match.team2) return;

        const team1 = newTable.find(t => t.team === match.team1);
        const team2 = newTable.find(t => t.team === match.team2);
        const score1 = parseInt(match.score1, 10);
        const score2 = parseInt(match.score2, 10);

        if (!team1 || !team2) return;

        team1.PJ++;
        team2.PJ++;

        if (score1 > score2) {
          team1.PG++;
          team1.Puntos += 3;
          team2.PP++;
        } else if (score1 < score2) {
          team2.PG++;
          team2.Puntos += 3;
          team1.PP++;
        } else {
          team1.Puntos++;
          team2.Puntos++;
        }

        team1.GF += score1;
        team1.GC += score2;
        team1.DG = team1.GF - team1.GC;

        team2.GF += score2;
        team2.GC += score1;
        team2.DG = team2.GF - team2.GC;
      });
    });

    setPositionTable(newTable);
  };

  return (
    <div className="container mx-auto p-4">
      <PositionTable table={positionTable} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <DateCard 
            key={index}
            index={index}
            result={result}
            teams={teams}
            onDateChange={handleDateChange}
          />
        ))}
      </div>
      <QuarterFinals table={positionTable} />
      <SemiFinals />
      <Final />
    </div>
  );
};

export default App;





