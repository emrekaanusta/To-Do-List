import express from "express";
import bodyParser from "body-parser";

let daily_work_list = ["Clean the house!", "Brush your teeth!"];

let work_work_list = ["Finish your assignment!", "Debug your code!"];

let hobby_work_list = ["Watch a TV show!", "Go jogging!"];


let daily_event = "";

let work_event = "";

let hobbyyy = "";


let app = express();
const port = 3000;


// Serve static files from the "public" folder

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        daily_goal: daily_work_list,
        work_goal: work_work_list,
        hobby: hobby_work_list
    });
});



// daily event arrangements

app.post("/new_event_daily", (req, res) => {
    const newgoal = req.body.newgoal;  //newgoal yeni girilecek veri(
    const index = daily_work_list.indexOf(daily_event);
    
    
    if (newgoal) {
        daily_work_list[index] = newgoal; 
    }
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list });
})

app.post("/change_daily", (req, res) => {
    daily_event = req.body.task;
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list, change: daily_event });
});

app.post('/delete_daily', (req, res) => {
    const deletedTask = req.body.task;
    // Delete the task from the array
    console.log('Deleting task:', deletedTask);
    const index = daily_work_list.indexOf(deletedTask);
    if (index !== -1) {
        daily_work_list.splice(index, 1);
        console.log('Task deleted:', deletedTask);
    } else {
        console.log('Task not found:', deletedTask);
    }

    res.redirect('/'); // Redirect back to the main page after deletion
});


app.post("/add_daily", (req, res) => {
    if (req.body["goal"] !== "") {
        if (!daily_work_list.includes(req.body["goal"]))
        daily_work_list.push(req.body["goal"]);
    }
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list });
});



// work goals arrangements

app.post("/add_work", (req, res) => {
    if (req.body["goal"] !== "") {
        if (!work_work_list.includes(req.body["goal"]))
        work_work_list.push(req.body["goal"]);
    }
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list });
});

app.post("/new_event_work", (req, res) => {
    const newgoal = req.body.newgoal;  //newgoal yeni girilecek veri(
    const index = work_work_list.indexOf(work_event);
    
    if (newgoal) {
        work_work_list[index] = newgoal; 
    }
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list });
})

app.post('/delete_work', (req, res) => {
    const deletedTask = req.body.task;
    // Delete the task from the array
    console.log('Deleting task:', deletedTask);
    const index = work_work_list.indexOf(deletedTask);
    if (index !== -1) {
        work_work_list.splice(index, 1);
        console.log('Task deleted:', deletedTask);
    } else {
        console.log('Task not found:', deletedTask);
    }

    res.redirect('/'); // Redirect back to the main page after deletion
});

app.post("/change_work", (req, res) => {
    work_event = req.body.task;
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list, changeb: work_event });
});



// hobby arrangements

app.post("/add_hobby", (req, res) => {
    if (req.body["goal"] !== "") {
        if (!hobby_work_list.includes(req.body["goal"]))
        hobby_work_list.push(req.body["goal"]);
    }
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list });
});

app.post("/new_event_hobby", (req, res) => {
    const newgoal = req.body.newgoal;  //newgoal yeni girilecek veri(
    const index = hobby_work_list.indexOf(hobbyyy);
    
    if (newgoal) {
        hobby_work_list[index] = newgoal; 
    }
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list });
})

app.post('/delete_hobby', (req, res) => {
    const deletedTask = req.body.task;
    // Delete the task from the array
    console.log('Deleting task:', deletedTask);
    const index = hobby_work_list.indexOf(deletedTask);
    if (index !== -1) {
        hobby_work_list.splice(index, 1);
        console.log('Task deleted:', deletedTask);
    } else {
        console.log('Task not found:', deletedTask);
    }

    res.redirect('/'); // Redirect back to the main page after deletion
});

app.post("/change_hobby", (req, res) => {
    hobbyyy = req.body.task;
    res.render("index.ejs", { daily_goal: daily_work_list, work_goal: work_work_list, hobby: hobby_work_list, changec: hobbyyy });
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// about page

app.get("/about", (req, res) =>{
    res.render("work.ejs")
})