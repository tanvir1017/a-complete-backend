import "dotenv/config"; // required dotenv for production ready
import express from "express"; // importing or required express from package
const app = express(); // wrap the imported express by app variable

// added new .env and ignore it to push on public
const PORT = process.env.PORT || 3002; // stored secure port to PORT variable from .env file and if it is not available then it will run the the app into 3002 port

// The global route will send hello world when it will hit by '/'
app.get("/api/v1", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/v1/users", (req, res) => {
  const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      role: "admin",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      role: "moderator",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      role: "user",
    },
    {
      id: 4,
      username: "user4",
      email: "user4@example.com",
      role: "user",
    },
    {
      id: 5,
      username: "user5",
      email: "user5@example.com",
      role: "user",
    },
  ];
  res.send(users);
});
// Listening to the port
app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
