class Task {
  done: boolean;
  constructor(public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}
class HomeTask extends Task {}
class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string) {
    super(description, priority);
  }
}
class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low");
  }
}

var tasks: Task[] = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy Chocolates.", "low"));
tasks.push(new Task("Wash the Laaundry.", "High"));
tasks[0].markDone(); //mark the first task as done

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date(); //get the current date and store it in the variable called 'today'
var tomorrow = today; //set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;   //create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));

console.log(tasks);

/*A description property, containing a brief string description of the Task.
A priority property, containing string information on how urgent the Task is, like "High", "Low", or "Medium".
a done property containing a boolean denoting whether this Task is complete.*/

//markDone is a method. it changes the done property from false to true
/*HomeTask is inheriting from base class Task*/
