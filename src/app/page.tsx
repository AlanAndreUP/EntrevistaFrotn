"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUser, User } from './utils/user';
//LA PRUEBA INICIA AQUI. RECUERDA QUE PUEDES REUTILIZAR CUALQUIER CODIGO EXISTENTE EN EL REPOSITORIO.
//OBTENER EL USUARIO DE UTILS Y CREA UNA FUNCION PARA REDIRECCIONAR SEGUN EL ROL
const Home: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

  }, []);

  useEffect(() => {
    const redirectBasedOnRole = () => {

      redirectBasedOnRole();
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          <h1 className="text-xl font-semibold text-gray-700 mt-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Access</h1>
        <p className="text-lg text-gray-700">Redirecting based on role...</p>
      </div>
    </div>
  );
};

export default Home;
