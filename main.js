const makeDino = function(species, period, carnivore, extinct) {
    const expectedDino = {};
    expectedDino.species = species;
    expectedDino.period = period;
    expectedDino.carnivore = carnivore;
    expectedDino.extinct = extinct;
    
    if (extinct === undefined) {
      expectedDino.extinct = false;
    }
   return expectedDino

    }
const dinosaur = makeDino('Eoraptor', 'Triassic', true, false);
console.log(dinosaur)

   

const makeSingular = function(species, period, carnivore, extinct) {
  const dino = {};
    dino.species = species;
    dino.period = period;
    dino.carnivore = carnivore;
    dino.extinct = extinct;
    
    if (dino.species.charAt(dino.species.length-1) === 's' && dino.species.charAt(dino.species.length-2) === 'u') {
      dino.species.slice(dino.species.length-2)
    } else {
      return dino.species;
    }
    
   return dino

    }
const dinosaurus = makeSingular('Brachiosaurus', 'Jurassic', false, true);
console.log(dinosaurus);




const truncateSpecies = function(species, period, carnivore, extinct) {
  const expectedDino = {};
  expectedDino.species = species;
  expectedDino.period = period;
  expectedDino.carnivore = carnivore;
  expectedDino.extinct = extinct;
  
  if (expectedDino.species !== undefined) {
    expectedDino.species.slice(0, 7);
  } else if (expectedDino.species.length <= 10) {
    expectedDino.species;
  }


 return expectedDino

  }
const dinosaury = truncateSpecies('Brontasaurus', 'Triassic', true, false);
console.log(dinosaury)


const makeExtinct = function(species, period, carnivore, extinct) {
  
  const expectedDino = {};
  expectedDino.species = species;
  expectedDino.period = period;
  expectedDino.carnivore = carnivore;
  expectedDino.extinct = extinct;
  
  if (extinct === undefined) {
    expectedDino.extinct = true;
  }
 return expectedDino

  }
const dinosaurizzo = makeExtinct('Eoraptor', 'Triassic', true, true);
console.log(dinosaurizzo)

















module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}