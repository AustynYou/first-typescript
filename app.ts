const sendGreeting = (message = 'Hello', userName = 'there'): 
void =>  console.log(`${message}, ${userName}`);

sendGreeting('Hello');
sendGreeting();
sendGreeting('Good Morning');
sendGreeting('Good afternoon', 'Jenny');
