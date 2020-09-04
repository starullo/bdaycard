const button = document.querySelector('button');
button.addEventListener('click', obj=>{
    const funnyLastName = prompt('Type in an animal');
    const funnyBkfast1 = prompt('Type in a type of food');
    const funnyBkfast2 = prompt('Gimme another type of food');
    const sound = prompt('Give me a funny sound');
    const adj1 = prompt('Give me an adjective');
    const animal = prompt('Gimme an animal');
    const carPart = prompt('Gimme a car part');
    const day = prompt('Gimme a day of the week');
    const drink = prompt('Give me a popular drink brand');
    const phrase = prompt('Gimme a fun catchphrase');
    const phrase2 = prompt('Tell me something you would never say to someone on their birthday');
    const thing = prompt('Type in your most prized possesion');
    const div = document.querySelector('div.results');
    div.textContent = `It started off just like any other birthday for Rose Mc${funnyLastName}. She had her normal birthday breakfast of steamed ${funnyBkfast1} and ${funnyBkfast2}. Suddenly, she heard a sound from outside. "${sound.toUpperCase()}!" As the "${sound.toUpperCase()}!" got louder she got more nervous, so she looked out the window and saw a ${adj1} ${animal} eating a ${carPart}. Rose though, "Weird. I thought that a ${animal} only ate ${carPart}s on ${day}. Just then someone came crashing through her wall. It was the ${drink} Man! "${phrase}!" yelled the ${drink} man. "Hey, you changed your slogan," said Rose. "${phrase2}!" said the ${drink} man. Then Rose killed the ${drink} man with her ${thing}. And they lived happily ever after`;

})
