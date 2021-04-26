//Global vars
var saveButton = document.querySelector('saveBtn')
var localTodos = grabLocalTodos();
var timeNine = moment().hour(9);
var timeTen = moment().hour(10);
var timeEleven = moment().hour(11);
var timeTwelve = moment().hour(12);
var timeOne = moment().hour(13);
var timeTwo = moment().hour(14);
console.log(timeOne)
var timeThree = moment().hour(15);
var timeFour = moment().hour(16);
var timeFive = moment().hour(17);
var time = ["#timeNine","#timeTen","#timeEleven","#timeTwelve","#timeOne","timeTwo",time-3,time-4,time-5]




//Time for header
var now = moment();
document.getElementById("currentDay").innerHTML = now;
console.log(now)

//Event Listener + LocalStorage

for (var i = 0; i <localTodos.length; i++) {
    console.log(localTodos[i]);
    $("#todos").append("<input>" + localTodos[i].todoText + "---" + localTodos[i].currentTime + "</input>");

}

$("#save").on("click", function(){
    var currentTime = moment().format("hh:mm A");
    console.log("the current hour is:" + currentTime);
    var newTodo = {
        todoText: $("input[name=todo-text]").val(),
        currentTime: currentTime
    }

    localTodos.push(newTodo);

    $("#todo").append("<input>" + newTodo.todoText + "---" + newTodo.currentTime + "</input>");

    localStorage.setItem("todos", JSON.stringify(localTodos));
});

function grabLocalTodos() {
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;

}

function updateTodoElement(newTodo) {
    $("#todos").append("<input>" + newTodo.todoText + "---" + newTodo.currentTime + "</input>");
}

console.log(grabLocalTodos());

//color timer
function colorTimer() {
    if (now > timeOne) {
    document.getElementById('task').style.backgroundColor = "red"
    alert("correct")
    }
}
