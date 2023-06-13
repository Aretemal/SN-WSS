import server from './app.js';

const PORT = 1000;

server.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
