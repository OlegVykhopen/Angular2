// Generics are types which can hold/ use several types
// We're only touching the very basics here - you can go MUCH more into detail
// Consider the Array object
var numberArray; // This array will only accept numbers
// Try to initialize it with strings
var a = "1";
// numberArray = ['test']; // => Error
numberArray = [a, 2, 3];
