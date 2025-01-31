import React from 'react';
import { FiPlus } from 'react-icons/fi';
import '../styles/Table.css';

const AddVisitButton = () => {
  return (
    <button className="add-visit-button">
      Adicionar Nova Visita
      <FiPlus className="plus-icon" />
    </button>
  );
};

export default AddVisitButton;