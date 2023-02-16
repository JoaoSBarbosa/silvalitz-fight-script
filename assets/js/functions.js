const defaultCharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0,
};

const createKnight = (name) => {
  return {
    ...defaultCharacter,
    name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8,
  };
};
const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name,
    life: 50,
    maxLife: 50,
    attack: 14,
    defense: 3,
  };
};

const createLittleMonster = (name) => {
  return {
    ...defaultCharacter,
    name: "Estalador",
    life: 40,
    maxLife: 40,
    attack: 4,
    defense: 4,
  };
};
const createBigMonster = (name) => {
  return {
    ...defaultCharacter,
    name: "Necrofigo",
    life: 120,
    maxLife: 120,
    attack: 16,
    defense: 6,
  };
};

const stage = {
  fighter1: null,
  fighter2: null,
  fighter1El: null,
  fighter2El: null,

  star(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;

    this.fighter1El
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2)
      );
    this.fighter2El
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1)
      );
  },
  doAttack(attacking, attacked) {},
};
