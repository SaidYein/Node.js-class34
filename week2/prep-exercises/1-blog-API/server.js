const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

// creating a new blog content
app.post("/blogs", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  fs.writeFileSync(title, content);
  res.end("ok");
});
// Updating the existing blog content
app.put("/posts/:title", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end("ok");
  } else {
    res.end("This post does not exist!");
  }
});
// Deleting a blog content
app.delete("/blogs/:title", (req, res) => {
  const title = req.body.title;

  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    res.end("This post does not exist!");
  }
});
// Reading selected blog content
app.get("/blogs/:title", (req, res) => {
  const title = req.body.title;

  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.end(post);
  } else {
    res.end("This post does not exist!");
  }
});
// reading all blog contents in a particular directory
app.get("/blogs", (req, res) => {
  const allPosts = [];
  fs.readdir("./", (err, files) => {
    if (err) {
      return console.error("Unable to scan directory...");
    }
    files.forEach((blog) => {
      allPosts.push(blog);
    });
    res.end(allPosts.join("\n"));
  });
});

app.listen(3000);
