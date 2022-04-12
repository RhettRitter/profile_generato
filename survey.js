const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :)', (name) => {
    rl.question('What is an activity you like doing?', (activity) => {
        rl.question('What do you listen to while doing that?', (music) => {
            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (favMeal) => {
                rl.question('What is your favourite thing to eat for that meal?', (favFood) => {
                    rl.question('Which sport is your absolute favourite?', (favSport) => {
                        rl.question('What is your super power', (superPower) => {
        console.log(`${name} likes to ${activity} while listening to${music}.
        ${name}, is also very paticular about his ${favMeal}. if his ${favFood} doesn't come out just right ${name} is likely to cry.
        ${name},s absolute favourite sport is ${favSport} (*Do Not Disturb while watching*).
        ${superPower} is ${name}'s SuperPower!`);

                            rl.close();
                        });
                       
                    });
                });
            });
        });
    });
});


