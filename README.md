Set Up Instructions:
1. 1st of all , Clone this Repo.
2. Then open the terminal of the IDE you use.
3. Then , run the command : npm install and press enter
4. Then , run the command : npm start and press enter
5. Then go to any browser you use and type the URL : "http://localhost:8080/ideas/new"
6. Then , you can use the website.

 Brief Explanation of my solution :
 
 My solution to the task 4 is a web application built with Node.js and Express that allows users to submit and view innovative ideas.
 Key Components:
 1.Frontend:
 HTML/CSS for styling the layout and JavaScript for handling user interactions (e.g., clicking on posts).
 
 2.Backend:
 The server (index.js) manages routes for displaying ideas, showing a submission form, handling idea submissions, and displaying success messages.

 3.Data Storage:
 Ideas are stored in a JSON file (ideas.json), which the application reads from and writes to. (using file storage technique by importing the fs module)
 
 4.User Interaction:
 Users can submit their name, email, and idea description, which are saved and displayed on the site.
 
Here , EJS (Embedded JavaScript) files are used to:

1.Render Dynamic Content: Generate HTML pages with embedded JavaScript.
2.Separate Logic and Presentation: Keep server logic distinct from HTML.
3.Inject Data: Pass data from the server to templates for display.
4.Reuse Components: Create reusable HTML components for consistency.

