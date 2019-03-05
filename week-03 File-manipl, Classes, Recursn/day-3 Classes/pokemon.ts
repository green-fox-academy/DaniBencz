/* Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.
You have a Pokemon class with a method called isEffectiveAgainst().
A wild pokemon appeared!
Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.*/

class Pokemon {
  name: string;
  type: string;
  effectiveAgainst: string;

  constructor(name: string, type: string, effectiveAgainst: string) {
    this.name = name;
    this.type = type;
    this.effectiveAgainst = effectiveAgainst;
  }
}

let pokemonOfAsh: Pokemon[] = initializePokemon();

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

pokemonOfAsh.forEach(function (element) {
  if (element.effectiveAgainst === wildPokemon.type) {
    console.log(element.name + ', I choose you!');
  }
});

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'leaf'),
    new Pokemon('Charizard', 'fire', 'water'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}