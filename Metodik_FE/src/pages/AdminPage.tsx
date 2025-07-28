// src/pages/AdminPage.tsx
// This page allows administrators to log in and view messages received from users.
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

type Contact = {
  name: string;
  email: string;
  message: string;
  date: string;
};

const AdminPage = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [inputToken, setInputToken] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState('');

  const fetchContacts = async (authToken: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!res.ok) {
        throw new Error('Unauthorized');
      }

      const data = await res.json();
      setContacts(data);
      setError('');
    } catch (err) {
      setError('Token inválido o error de autenticación');
      localStorage.removeItem('adminToken');
      setToken('');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('adminToken', inputToken);
    setToken(inputToken);
    fetchContacts(inputToken);
  };

  useEffect(() => {
    if (token) {
      fetchContacts(token);
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {!token ? (
        <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Administrador - Iniciar sesión</h2>
          <input
            type="password"
            placeholder="Admin Token"
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Ingresar
          </button>
          {error && <p className="text-red-500 mt-3">{error}</p>}
        </form>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black text-2xl font-bold mb-6">Mensajes recibidos</h2>
          {contacts.length === 0 ? (
            <p className="text-gray-600">No hay mensajes aún.</p>
          ) : (
            <table className="w-full bg-white shadow rounded overflow-hidden text-black">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Mensaje</th>
                  <th className="p-3">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">{contact.name}</td>
                    <td className="p-3">{contact.email}</td>
                    <td className="p-3">{contact.message}</td>
                    <td className="p-3">{new Date(contact.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
