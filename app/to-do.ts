class Task {
  done: boolean;
  constructor(public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy Chocolates.", "low"));
tasks.push(new Task("Wash the Laaundry.", "High"));
tasks[0].markDone();
console.log(tasks);

/*A description property, containing a brief string description of the Task.
A priority property, containing string information on how urgent the Task is, like "High", "Low", or "Medium".
a done property containing a boolean denoting whether this Task is complete.*/

//markDone is a method. it changes the done property from false to true
