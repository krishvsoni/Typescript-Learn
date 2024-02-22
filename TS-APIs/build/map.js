"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersMap = void 0;
exports.usersMap = new Map();
exports.usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
exports.usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
console.log(exports.usersMap.get('abc123'));
