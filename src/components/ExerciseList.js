import React from 'react';

const ExerciseList = ({ exercises, onCheckboxChange, onLearnMoreClick }) => {
  return (
    <div>
      <h2>Lista de Exercícios</h2>
      {exercises.map((exercise) => (
        <div key={exercise.id} className="exercise-container">
          <input
            type="checkbox"
            checked={exercise.checkbox}
            onChange={() => onCheckboxChange(exercise.id)}
          />
          <span>{exercise.name} - {exercise.sets}</span>

        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
