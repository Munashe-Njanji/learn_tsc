function greet(name: string, greeting?: string): string {
  //   return `${greeting || 'Hello'}, ${name}!`;
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("Munashe", "Mhoroyi")); // Mhoroyi, Munashe!