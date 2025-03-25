const express = require('express');
const app = express();


const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' }
];

// Endpoint to fetch user by ID
app.get('/users/:id', (req, res) => {
  const userId = Number(req.params.id); // Convert ID from string to number
  const user = users.find(user => user.id === userId); // Find the matching user

  if (user) {
    res.status(200).json(user); // Send the user data with status 200
  } else {
    res.status(404).json({ error: 'User not found' }); // Send error message for invalid ID
  }
});


const port = 3000; 
app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
