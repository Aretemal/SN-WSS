import axios from 'axios';

const makeInstanceWithToken = (token) => axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: { Authorization: token },
});
export const dialogAPI = {
    sendMessage({ token, id, message }) {
        return makeInstanceWithToken(token).post(`dialog/message/${id}`, { message });
    },
};
