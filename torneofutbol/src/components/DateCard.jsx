import React, { useState, useEffect, useCallback } from 'react';

const DateCard = ({ index, result, teams, onDateChange }) => {
  const initialMatches = Array(6).fill(null).map(() => ({ team1: "", team2: "", score1: 0, score2: 0 }));
  const [matches, setMatches] = useState(result.matches.length > 0 ? result.matches : initialMatches);
  const [freeTeam, setFreeTeam] = useState(result.freeTeam || "");
  const [errors, setErrors] = useState([]);

  const validateMatches = useCallback(() => {
    let validationErrors = [];
    const teamsInMatches = matches.reduce((acc, match) => {
      if (match.team1) acc.push(match.team1);
      if (match.team2) acc.push(match.team2);
      return acc;
    }, []);

    if (teamsInMatches.includes(freeTeam)) {
      validationErrors.push("El equipo libre no puede estar en un emparejamiento.");
    }

    const uniqueTeams = new Set(teamsInMatches);
    if (uniqueTeams.size !== teamsInMatches.length) {
      validationErrors.push("No puede haber equipos repetidos en los emparejamientos.");
    }

    matches.forEach((match, matchIndex) => {
      if (match.team1 && match.team2 && match.team1 === match.team2) {
        validationErrors.push(`Los equipos en el emparejamiento ${matchIndex + 1} no pueden ser iguales.`);
      }
    });

    setErrors(validationErrors);
  }, [matches, freeTeam]);

  useEffect(() => {
    validateMatches();
    onDateChange(index, { matches, freeTeam });
  }, [matches, freeTeam, index, onDateChange, validateMatches]);

  const handleMatchChange = (matchIndex, field, value) => {
    const newMatches = [...matches];
    newMatches[matchIndex] = { ...newMatches[matchIndex], [field]: value };
    setMatches(newMatches);
  };

  const handleFreeTeamChange = (team) => {
    setFreeTeam(team);
  };

  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-bold mb-4">Fecha {index + 1}</h2>
      {matches.map((match, matchIndex) => (
        <div key={matchIndex} className="mb-2">
          <select
            value={match.team1}
            onChange={(e) => handleMatchChange(matchIndex, 'team1', e.target.value)}
            className="border p-2 mr-2"
          >
            <option value="">Equipo 1</option>
            {teams.map((team, i) => (
              <option key={i} value={team}>{team}</option>
            ))}
          </select>
          <select
            value={match.team2}
            onChange={(e) => handleMatchChange(matchIndex, 'team2', e.target.value)}
            className="border p-2 mr-2"
          >
            <option value="">Equipo 2</option>
            {teams.map((team, i) => (
              <option key={i} value={team}>{team}</option>
            ))}
          </select>
          <input
            type="number"
            value={match.score1}
            onChange={(e) => handleMatchChange(matchIndex, 'score1', e.target.value)}
            className="border p-2 w-16 mr-2"
          />
          <input
            type="number"
            value={match.score2}
            onChange={(e) => handleMatchChange(matchIndex, 'score2', e.target.value)}
            className="border p-2 w-16"
          />
        </div>
      ))}
      <div className="mt-4">
        <label>Equipo Libre:</label>
        <select
          value={freeTeam}
          onChange={(e) => handleFreeTeamChange(e.target.value)}
          className="border p-2 ml-2"
        >
          <option value="">Seleccionar Equipo</option>
          {teams.map((team, i) => (
            <option key={i} value={team}>{team}</option>
          ))}
        </select>
      </div>
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 mt-2 block">{error}</span>
      ))}
    </div>
  );
};

export default DateCard;




