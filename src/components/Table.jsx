import React from 'react';
import AddVisitButton from './AddVisitButton';
import "../styles/Table.css";

const Table = () => {
  const visits = [
    { id: 1, name: "Carla Tavares", date: "23/01/2025", time: "13:00", status: "Não realizada" },
    { id: 2, name: "Pedro da Silva", date: "22/01/2025", time: "11:32", status: "Cancelada" },
    { id: 3, name: "Ricardo Almeida", date: "16/01/2025", time: "20:00", status: "Visita realizada" },
    { id: 4, name: "Pedro da Silva", date: "14/01/2025", time: "12:00", status: "Visita realizada" },
    { id: 5, name: "Ricardo Almeida", date: "11/01/2025", time: "10:00", status: "Visita realizada" },
    { id: 6, name: "Pedro da Silva", date: "10/01/2025", time: "09:00", status: "Visita realizada" },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Gerencie as suas visitas</h1>
        <AddVisitButton />
      </div>
      
      <table className="visits-table">
        <thead>
          <tr>
            <th>VISITANTE</th>
            <th>DATA</th>
            <th>HORA</th>
            <th>STATUS</th>
          </tr>
        </thead>
        
        <tbody>
          {visits.map((visit) => (
            <tr key={visit.id}>
              <td>{visit.name}</td>
              <td>{visit.date}</td>
              <td>
                <div className="time-and-actions">
                  <span className="time-display">{visit.time}</span>
                  <div className="actions-buttons">
                    <button className="edit-button">
                      <svg className="button-icon" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1.997 1.997 0 0 0-1.41-.59c-.51 0-1.02.2-1.41.59l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                      Editar
                    </button>
                    {visit.status === "Cancelada" && (
                      <button className="cancel-button">
                        <svg className="button-icon" viewBox="0 0 24 24" width="16" height="16">
                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                        Cancelar
                      </button>
                    )}
                  </div>
                </div>
              </td>
              <td className={
                visit.status === "Cancelada" ? "status-cancelada" :
                visit.status === "Visita realizada" ? "status-realizada" : "status-não-realizada"
              }>
                {visit.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button className="pagination-button">Anterior</button>
        <div className="page-numbers">
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
        </div>
        <button className="pagination-button">Próximo</button>
      </div>
    </div>
  );
};

export default Table;