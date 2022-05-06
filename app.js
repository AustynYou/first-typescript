var sendGreeting = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    return console.log("".concat(message, ", ").concat(userName));
};
sendGreeting('Hello');
sendGreeting();
sendGreeting('Good Morning');
sendGreeting('Good afternoon', 'Jenny');
