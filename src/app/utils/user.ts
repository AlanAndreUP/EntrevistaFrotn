export type Role = 'admin' | 'user' | 'guest';

export interface User {
  id: number;
  name: string;
  role: Role;
}

export const fetchUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        role: 'admin', 
      });
    }, 1000);
  });
};
