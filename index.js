const wakeDog = function(dogName, dogBreed) {
    const str = `Wake ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}
const leashDog = function (dogName, dogBreed) {
    const str = `Leash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}
const walkToPark = function (dogName, dogBreed) {
    const str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}
const throwFrisbee = function (dogName, dogBreed) {
    const str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}
const walkHome = function (dogName, dogBreed) {
    const str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}
const unleashDog = function (dogName, dogBreed) {
    const str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }