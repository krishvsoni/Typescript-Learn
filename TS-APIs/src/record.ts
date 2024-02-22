interface User {
    id: string;
    name: string;
  }
  
  type Users = Record<string, User>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' } as User,
    'xyz789': { id: 'xyz789', name: 'Jane Doe' } as User,
  };
  
  console.log(users['abc123']); 