const express = require("express");

const server = express();
server.disable("x-powered-by");


let requestCount = 0;
const projects = [];

const checkProjectExists = (req, res, next) => {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: "project not found" });
  }

  return next();
};

const logRequests = (req, res, next) => {
  requestCount++;

  console.log(`Requests count: ${requestCount}`);

  return next();
}

server.use(express.json());
server.use(logRequests);

server.get("/projects", (_, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const index = projects.findIndex(project => project.id === id);

  if (index !== -1) {
    return res.status(400).json({
      error: "project id already defined"
    });
  }

  projects.push({
    ...({ id, title } = req.body),
    tasks: []
  });

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id === id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(project => project.id === id);

  projects.splice(index, 1);

  return res.send();
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3333);
