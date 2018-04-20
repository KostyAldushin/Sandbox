const {PORT = 9988} = process.env;
const express = require('express');
const app = express();

app.use(express.static('./build'));
app.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});
