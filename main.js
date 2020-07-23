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
    
    // if (species.includes('us') === true) {
    //   dino.species.slice(species.length-2, species.length-1)
    // } else {
    //   dino.species = species;
    // }
    
   return dino

    }
const dinosaurus = makeSingular('Eoraptor', 'Jurassic', false, true);
console.log(dinosaurus);




const truncateSpecies = function(species, period, carnivore, extinct) {
  const expectedDino = {};
  expectedDino.species = species;
  expectedDino.period = period;
  expectedDino.carnivore = carnivore;
  expectedDino.extinct = extinct;
  

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
  
  if (extinct !== undefined) {
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