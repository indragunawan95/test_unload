const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/delete-file', (req, res) => {
    const { fileId } = req.body;
    console.log("being hit")
    console.log("req.body", req.body)

    if (!fileId) {
        return res.status(400).send('File ID is required');
    }

    // Introduce an intentional delay of 3 seconds (3000 milliseconds)
    setTimeout(() => {
        console.log(`Received request to delete file with ID: ${fileId}`);
        res.status(200).send('File delete request received');
    }, 3000);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
