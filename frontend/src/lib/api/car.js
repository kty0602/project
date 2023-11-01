import client from "./client";

export const carList = (params) => client.get('/car/list', { params });

export const sendUserTrend = ({ id, cdno }) => {

    console.log(cdno);
    client.post('/view/register', { id, cdno })
};
