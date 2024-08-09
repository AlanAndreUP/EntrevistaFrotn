import React from 'react';
// USA TAILWILD PARA MEJORAR ESTA INTERFAZ
//CREA UNA TABLA USANDO TAILWILD PARA MAPEAR LOS DATOS DE PRODUCTOS
const UserComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">User Panel</h2>
      <p className="text-lg text-gray-700">
        Welcome, User!
      </p>
    </div>
  </div>
  );
};

export default UserComponent;
