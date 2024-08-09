import React, { useState } from 'react';
import { getLeads, addLead, updateLead, deleteLead, Lead } from '../utils/leads';
//SEPERA POR COMPONENTES 
//AÑADE VALIDACIONES, AÑADE UNA FUNCION PARA ELIMINAR TODOS LOS LEADS
//AÑADE UN BASURERO PARA RECUPERAR LEADS ELIMINADOS
//AÑADE ALERTAS PARA CONFIRMAR ACCIONES
//CORRIGE EL ERROR DE TIPOS

const AdminComponent: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(getLeads());
  const [editLead, setEditLead] = useState<Lead | null>(null);
  const [newLead, setNewLead] = useState<Partial<Lead>>({});

  const handleAddLead = () => {
    if (newLead.name && newLead.email && newLead.phone && newLead.status) {
      const newId = leads.length ? Math.max(...leads.map(lead => lead.id)) + 1 : 1;
      const leadToAdd: Lead = { id: newId, ...newLead } as Lead;
      addLead(leadToAdd);
      setLeads(getLeads());
      setNewLead({});
    }
  };

  const handleUpdateLead = () => {
    if (editLead) {
      updateLead(editLead);
      setLeads(getLeads());
      setEditLead(null);
    }
  };

  const handleDeleteLead = (id: number) => {
    deleteLead(id);
    setLeads(getLeads());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Admin Panel</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Add New Lead</h3>
          <input
            type="text"
            placeholder="Name"
            value={newLead.name || ''}
            onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newLead.email || ''}
            onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newLead.phone || ''}
            onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <select
            value={newLead.status || ''}
            onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
            className="mb-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Status</option>
            <option value="Contacted">Contacted</option>
            <option value="Not Contacted">Not Contacted</option>
            <option value="Interested">Interested</option>
            <option value="Closed">Closed</option>
          </select>
          <button
            onClick={handleAddLead}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Lead
          </button>
        </div>

        {editLead && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Edit Lead</h3>
            <input
              type="text"
              placeholder="Name"
              value={editLead.name || ''}
              onChange={(e) => setEditLead({ ...editLead, name: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={editLead.email || ''}
              onChange={(e) => setEditLead({ ...editLead, email: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              value={editLead.phone || ''}
              onChange={(e) => setEditLead({ ...editLead, phone: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded"
            />
            <select
              value={editLead.status || ''}
              onChange={(e) => setEditLead({ ...editLead, status: e.target.value })}
              className="mb-2 p-2 border border-gray-300 rounded"
            >
              <option value="">Select Status</option>
              <option value="Contacted">Contacted</option>
              <option value="Not Contacted">Not Contacted</option>
              <option value="Interested">Interested</option>
              <option value="Closed">Closed</option>
            </select>
            <button
              onClick={handleUpdateLead}
              className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            >
              Update Lead
            </button>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead: Lead) => (
                <tr key={lead.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setEditLead(lead)}
                      className="text-blue-600 hover:text-blue-900 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteLead(lead.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
