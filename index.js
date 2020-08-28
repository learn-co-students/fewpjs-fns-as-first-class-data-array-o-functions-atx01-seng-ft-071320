function wakeDog(dogName, dogBreed) {
    var string1 = `Wake ${dogName} the ${dogBreed}`;
    console.log(string1);
    return string1;
}

function leashDog(dogName, dogBreed) {
    var string2 = `Leash ${dogName} the ${dogBreed}`;
    console.log(string2);
    return string2;
}

function walkToPark(dogName, dogBreed) {
    var string3 = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string3);
    return string3;
}

function throwFrisbee(dogName, dogBreed) {
    var string4 = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string4);
    return string4;
}

function walkHome(dogName, dogBreed) {
    var string5 = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string5);
    return string5;
}

function unleashDog(dogName, dogBreed) {
    var string6 = `Unleash ${dogName} the ${dogBreed}`
    console.log(string6);
    return string6;
}

const routine = [ wakeDog, leashDog, 
    walkToPark, throwFrisbee, walkHome, unleashDog ]

function exerciseDog(dogName, dogBreed) {
    return routine.map(element => element(dogName, dogBreed));
}
console.log(exerciseDog("Scarlett", "Red Heeler"));
