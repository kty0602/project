import client from "./client"

export const listReplys = (bno) => 
client.get(`/replies/board/${bno}`);

export const submitReply = ({ bno, content, id }) => 
client.post('/replies/register',{ bno, content, id });

export const deleteReply = rno => 
client.post(`/replies/delete/${rno}`);

export const modifyReply = ({ bno, rno, content }) =>
client.post(`/replies/modify/${bno}`,({ rno, content }));