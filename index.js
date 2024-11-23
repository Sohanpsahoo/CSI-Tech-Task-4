const express = require("express");
const methodOverride = require('method-override');
const fs = require('fs');
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const ideasFilePath = path.join(__dirname, 'ideas.json');

// Function to read ideas from the JSON file
function readIdeasFromFile() {
    if (!fs.existsSync(ideasFilePath)) {
        return []; 
    }
    try {
        const data = fs.readFileSync(ideasFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading or parsing ideas.json:", error);
        return []; 
    }
}


// Function to write ideas to the JSON file
function writeIdeasToFile(ideas) {
    try {
        fs.writeFileSync(ideasFilePath, JSON.stringify(ideas, null, 2));
    } catch (error) {
        console.error("Error writing to ideas.json:", error);
    }
}

// Route to display all ideas
app.get("/ideas", (req, res) => {
    const ideas = readIdeasFromFile();
    res.render("index.ejs", { ideas: ideas, heading: "Submit Your Innovative Ideas Here!" });
});

// Route to display the form for new idea submission
app.get("/ideas/new", (req, res) => {
    res.render("new.ejs", { heading: "Welcome to TechSparks!" });
});

// Route to view submitted ideas with a different heading for admin
app.get("/ideas/admin", (req, res) => {
    const ideas = readIdeasFromFile();
    res.render("index.ejs", { ideas: ideas, heading: "Hello Admin! This is the list of the Submitted Ideas!!" });
});
// Route to handle form submission
app.post("/ideas", (req, res) => {
    let { name, email, description } = req.body;
    let id = uuidv4();
    const ideas = readIdeasFromFile(); 
    ideas.unshift({ id, name, email, description });
    writeIdeasToFile(ideas); 
    // Redirect to the new route to display a success message
    res.redirect("/ideas/success");
});

// Route to display success message
app.get("/ideas/success", (req, res) => {
    res.render("success.ejs", { message: "Your Idea has been submitted successfully!" });
});
// Route to view a single idea
app.get("/ideas/:id", (req, res) => {
    const ideas = readIdeasFromFile();
    let { id } = req.params; 
    let idea = ideas.find((item) => id === item.id); 
    if (idea) {
        res.render("show.ejs", { idea });
    } else {
        res.status(404).send("Idea not found"); // Handle case where idea is not found
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});