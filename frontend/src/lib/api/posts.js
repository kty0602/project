import client from './client';

export const writePost = ({ id, title, content, options1, options2, options3, options4, options5 }) => 
client.post('/board/register', { id, title, content, options1, options2, options3, options4, options5 });

export const updatePost = ({ bno, title, content, options1, options2, options3, options4, options5 }) => 
client.post('/board/modify', { bno, title, content, options1, options2, options3, options4, options5 });
