const express = require('express');

const app = express();

const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Library Management System'
    });
});

// app.all('*', (req, res) => {
//     res.status(500).json({
//         message: 'The requested resource was not found'
//     })
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// To run the server, use the command: npm run dev

  
