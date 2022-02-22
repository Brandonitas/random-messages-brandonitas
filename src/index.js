const messages = [
    'Brandon',
    'Ana',
    'Carlos',
    'Nicole',
    'Armando',
    'Mariana'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };