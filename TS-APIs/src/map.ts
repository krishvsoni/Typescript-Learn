export interface User {
    id: string;
    name: string;
    age?: number;
    email?: string;
    password?: string;
}

export const usersMap = new Map<string, User>();

usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

console.log(usersMap.get('abc123'));
