function logger(message, type = 'log') {
    console[type](message);
}

function logger2(message, type = 'log') {
    console[type](message);
}

function logger3(message, type = 'log') {
    console[type](message);
}

export default logger;
// export default là export mặc định chỉ có 1

export { logger2, logger3 };
// export { logger2, logger3 } là export nhiều