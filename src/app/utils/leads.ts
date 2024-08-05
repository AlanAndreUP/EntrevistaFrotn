export interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: 'Contacted' | 'Not Contacted' | 'Interested' | 'Closed';
  }
  
  let leads: Lead[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Contacted' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: 'Interested' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '456-789-0123', status: 'Not Contacted' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', phone: '321-654-9870', status: 'Closed' },
  ];
  

  export const getLeads = () => leads;
  

  export const addLead = (lead: Lead) => {
    leads = [...leads, lead];
  };
  
  export const updateLead = (updatedLead: Lead) => {
    leads = leads.map(lead => (lead.id === updatedLead.id ? updatedLead : lead));
  };
  
  export const deleteLead = (id: number) => {
    leads = leads.filter(lead => lead.id !== id);
  };
  