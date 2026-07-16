//If an argument isn't provided,can use a default value.
function greet(name = "Guest"){
   console.log("Hello" + ' ' + name);
}
greet();
greet("Riththi");