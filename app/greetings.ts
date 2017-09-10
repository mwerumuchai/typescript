class Greeter {         //greeter= class
greeting: string;       //greeter objects have a property called greeeting which stores a string

constructor (message: string) {
this.greeting = message;
}

greet() {
return "Hello, " + this.greeting;
}
}

var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for(var greeter of greeters) {
  alert(greeter.greet());
}
