
import React, { useState } from 'react';
import ExerciseList from './components/ExerciseList';
import DaySelector from './components/DaySelector';
import Timer from './components/Timer';
import Login from './Login';
import './index.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [exercises, setExercises] = useState({
    Monday: [
      { id: 1, name: 'Remada Curvada com Barra Livre', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 2, name: 'Serrote com Halter', sets: '3 x 12', checkbox: false },
      { id: 3, name: 'Puxador Frente com Triângulo', sets: '3 x 12', checkbox: false },
      { id: 4, name: 'Voador Invertido ou Crucifixo Invertido com Halter', sets: '3 x 12', checkbox: false },
      { id: 5, name: 'Rosca Alternada com Halter', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 6, name: 'Lombar', sets: '4 x 12', checkbox: false }
    ],
    Tuesday: [
      { id: 1, name: 'Supino Inclinado com Halter', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 2, name: 'Crucifixo Inclinado com Halter', sets: '3 x 12', checkbox: false },
      { id: 3, name: 'Elevação Frontal com a Barra', sets: '3 x 12', checkbox: false },
      { id: 4, name: 'Elevação Lateral com Halter', sets: '3 x 12', checkbox: false },
      { id: 5, name: 'Tríceps Banco', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 6, name: 'Tríceps Corda', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 7, name: 'Abdome', sets: 'Variável', checkbox: false }
    ],
    Wednesday: [
      { id: 1, name: 'Agachamento Livre', sets: '1 aquecimento, 1 x 15, 3 x 8-12', checkbox: false },
      { id: 2, name: 'Extensora', sets: '4 x 12', checkbox: false },
      { id: 3, name: 'Mesa Flexora', sets: '4 x 12', checkbox: false },
      { id: 4, name: 'Stiff com Barra ou Halter', sets: '1 x 15, 3 x 8-12', checkbox: false },
      { id: 5, name: 'Panturrilha em Pé', sets: '4 x 12', checkbox: false },
      { id: 6, name: 'Panturrilha Sentado (ou Flexora em Pé)', sets: '3 x 8-12', checkbox: false }
    ],
    Thursday: [
      { id: 1, name: 'Remada Curvada com Barra Livre', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 2, name: 'Serrote com Halter', sets: '3 x 12', checkbox: false },
      { id: 3, name: 'Puxador Frente com Triângulo', sets: '3 x 12', checkbox: false },
      { id: 4, name: 'Voador Invertido ou Crucifixo Invertido com Halter', sets: '3 x 12', checkbox: false },
      { id: 5, name: 'Rosca Alternada com Halter', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 6, name: 'Lombar', sets: '4 x 12', checkbox: false }
    ],
    Friday: [
      { id: 1, name: 'Supino Inclinado com Halter', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 2, name: 'Crucifixo Inclinado com Halter', sets: '3 x 12', checkbox: false },
      { id: 3, name: 'Elevação Frontal com a Barra', sets: '3 x 12', checkbox: false },
      { id: 4, name: 'Elevação Lateral com Halter', sets: '3 x 12', checkbox: false },
      { id: 5, name: 'Tríceps Banco', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 6, name: 'Tríceps Corda', sets: '1 x 15, 3 x 12', checkbox: false },
      { id: 7, name: 'Abdome', sets: 'Variável', checkbox: false }
    ],
    Saturday: [
      { id: 1, name: 'Agachamento Livre', sets: '1 aquecimento, 1 x 15, 3 x 8-12', checkbox: false },
      { id: 2, name: 'Extensora', sets: '4 x 12', checkbox: false },
      { id: 3, name: 'Mesa Flexora', sets: '4 x 12', checkbox: false },
      { id: 4, name: 'Stiff com Barra ou Halter', sets: '1 x 15, 3 x 8-12', checkbox: false },
      { id: 5, name: 'Panturrilha em Pé', sets: '4 x 12', checkbox: false },
      { id: 6, name: 'Panturrilha Sentado (ou Flexora em Pé)', sets: '3 x 8-12', checkbox: false }
    ],
    Sunday: [
      { id: 1, name: 'Dia Livre', sets: 'Manter dieta e hidratação', checkbox: false }
    ]
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleCheckboxChange = (id) => {
    setExercises((prevExercises) => {
      const updatedExercises = { ...prevExercises };
      updatedExercises[selectedDay] = updatedExercises[selectedDay].map((exercise) =>
        exercise.id === id ? { ...exercise, checkbox: !exercise.checkbox } : exercise
      );
      return updatedExercises;
    });
  };

  const handleLearnMoreClick = (exercise) => {
    console.log(`Learning more about ${exercise.name}...`);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>App de treino</h1>
          <DaySelector selectedDay={selectedDay} onDayChange={handleDayChange} />
          <ExerciseList
            exercises={exercises[selectedDay]}
            onCheckboxChange={handleCheckboxChange}
            onLearnMoreClick={handleLearnMoreClick}
          />
          <Timer />
        </>
      )}
    </div>
  );
};

export default App;
