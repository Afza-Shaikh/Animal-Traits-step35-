let animalPet: string[] = [' Dog  ',' Cat ',' Rabbit ']

console.log('animals Names :\n')
for(let i=0; i<animalPet.length; i++){
    console.log(`${animalPet[i]}`)
}

console.log("statements:\n")
for(let i=0; i<animalPet.length; i++){
    console.log(`\nA ${animalPet[i].toLocaleLowerCase()}would make a great pet`)
}

console.log("\n Any of these animals would make a great pet")