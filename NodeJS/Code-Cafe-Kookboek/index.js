const express = require('express');

const PORT = 8080;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({status: "server running"});
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});