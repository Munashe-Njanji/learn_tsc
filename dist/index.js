"use strict";
function greet(name, greeting) {
    //   return `${greeting || 'Hello'}, ${name}!`;
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greet("Munashe", "Mhoroyi")); // Mhoroyi, Munashe!
