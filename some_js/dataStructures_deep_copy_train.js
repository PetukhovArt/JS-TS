let girl = {
  name: "Regina",
  age: 27,
  university: "PGG_PU",
  status: {
    isMarried: false,
    isLoved: true,
    activity: {
      body: "gym",
      mind: "programming",
    },
    work: "Project manager",
  },
};

let girlShallowCopy = { ...girl }; //поверхностная копия
let girlDeepCopy = { ...girl, status: { ...girl.status } }; // глубокая копия
//проваливаемся в объект статус и говорим, что статус состоит из спреда всех свойств girl.status

// 1. Simple object
let man = {
  name: "John",
  age: 28,
};

let manFullCopy = { ...man };
man.age = 38;
console.log(manFullCopy);

// 2. Array of primitives
let numbers = [1, 2, 3];
let numbersFullCopy = [...numbers];
numbers[2] = 4;
console.log(numbersFullCopy);

// 3. Object inside an object
let man1 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
  },
};

let man1FullCopy = { ...man1, mother: { ...man1.mother } };
man1.mother.name = "Regina";
console.log(man1FullCopy);

// 4. Array of primitives inside an object
let man2 = {
  name: "John",
  age: 28,
  friends: ["Peter", "Steven", "William"],
};

let man2FullCopy = { ...man2, friends: [...man2.friends] };
man2.friends[2] = "bibak";
console.log(man2FullCopy);

// 5 Array of objects
let people = [
  { name: "Peter", age: 30 },
  { name: "Steven", age: 32 },
  { name: "William", age: 28 },
];

let peopleFullCopy = people.map((x) => ({ ...x }));
people[1].name = "Los";
console.log(peopleFullCopy);

// 6 Array of objects inside object
let man3 = {
  name: "John",
  age: 28,
  friends: [
    { name: "Peter", age: 30 },
    { name: "Steven", age: 32 },
    { name: "William", age: 28 },
  ],
};

let man3FullCopy = { ...man3, friends: man3.friends.map((x) => ({ ...x })) };
man3.friends[2].name = "barebuh";
console.log(man3FullCopy);

// 7 Object inside an object, inside an object
let man4 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
  },
};

let man4FullCopy = {
  ...man4,
  mother: { ...man4.mother, work: { ...man4.mother.work } },
};
man4.mother.work.position = "bibasos";
console.log(man4FullCopy);

// 8 Array of objects inside object -> object
let man5 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      { name: "Kevin", age: 80 },
      { name: "Jennifer", age: 78 },
    ],
  },
};

let man5FullCopy = {
  ...man5,
  mother: {
    ...man5.mother,
    work: { ...man5.mother.work },
    parents: man5.mother.parents.map((x) => ({ ...x })),
  },
};
man5.mother.parents[0].age = 32;
console.log(man5FullCopy);

// 9 Object inside an object -> array -> object ->  object
let man6 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
        },
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
        },
      },
    ],
  },
};

let man6FullCopy = {
  ...man6,
  mother: {
    ...man6.mother,
    work: { ...man6.mother.work },
    parents: man6.mother.parents.map((p) => ({
      ...p,
      favoriteDish: { ...p.favoriteDish },
    })),
  },
};
man6.mother.parents[0].favoriteDish.title = "UHA";
console.log(man6FullCopy);

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            { title: "beet", amount: 3 },
            { title: "potatoes", amount: 5 },
            { title: "carrot", amount: 1 },
          ],
        },
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            { title: "fish", amount: 1 },
            { title: "rise", amount: 0.5 },
          ],
        },
      },
    ],
  },
};
let man7FullCopy = {
  ...man7,
  mother: {
    ...man7.mother,
    work: { ...man7.mother.work },
    parents: man7.mother.parents.map((x) => ({
      ...x,
      favoriteDish: {
        ...x.favoriteDish,
        ingredients: x.favoriteDish.ingredients.map((x) => ({ ...x })),
      },
    })),
  },
};
man7.mother.parents[0].favoriteDish.ingredients[0].title = "ЛОСЬ";
console.log(man7.mother.parents[0].favoriteDish.ingredients[0].title);
console.log(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title);
