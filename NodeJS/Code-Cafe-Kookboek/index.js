const express = require('express');

const PORT = 6000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});