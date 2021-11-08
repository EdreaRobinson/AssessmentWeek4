const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {getGoals, deleteGoal, createGoal, updateGoal} = require('./controller')

app.get(`/api/goals`, getGoals)
app.delete(`/api/goals/:id`, deleteGoal)
app.post(`/api/goals`, createGoal)
app.put(`/api/goals/:id`, updateGoal)

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A gambler not only will lose what he has, but also will lose what he doesn’t have.", "Advice is like kissing. It costs nothing and is a pleasant thing to do.", "An acquaintance of the past will affect you in the near future.", "Each day, compel yourself to do something you would rather not do.", "Imagination rules the world."
  ];

  // choose random fortune
  let randomIndex2 = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex2];

  res.status(200).send(randomFortune);
  
});













app.listen(4000, () => console.log("Server running on 4000"));
