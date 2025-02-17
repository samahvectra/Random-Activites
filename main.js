let activities = ["Go for a run",
"Read a book",
"Watch a documentary",
"Cook a new recipe",
"Try a new hobby",
"Visit a museum",
"Learn a new skill"]
function random(){
    const randomly = Math.floor(Math.random() * activities.length);

    let randomActivity =activities[randomly];
    document.getElementById("activity").innerHTML = randomActivity

}

function add(){

    let newActivity = document.getElementById("active").value;
        
    activities.push(newActivity);

    document.getElementById("active").value = "";

    document.getElementById("activity").innerHTML = newActivity;

    
if(newActivity === ""){

    document.getElementById("activity").innerHTML ="ADD PLEASE AN ACTIVITY";
}
}

