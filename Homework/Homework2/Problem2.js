class Cat {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
}

function compareName(cat1, cat2) {
  if (cat1.name < cat2.name) {
    return -1;
  }
  if (cat1.name > cat2.name) {
    return 1;
  }
  
  return 0;
}

function compareBreed(cat1, cat2) {
  if (cat1.breed.lenght < cat2.breed.lenght) {
    return -1;
  }
  if (cat1.breed.lenght > cat2.breed.lenght) {
    return 1;
  }
  
  return 0;
}

function compareAge(cat1, cat2) {
  if (cat1.age < cat2.age) {
    return -1;
  }
  if (cat1.age > cat2.age) {
    return 1;
  }
  
  return 0;
}

function compareAll(cat1, cat2) {
  if (cat1.name.lenght + cat1.breed.lenght + cat1.age < cat2.name.lenght + cat2.breed.lenght + cat2.age) {
    return -1;
  }
  if (cat1.name.lenght + cat1.breed.lenght + cat1.age > cat2.name.lenght + cat2.breed.lenght + cat2.age) {
    return 1;
  }
  
  return 0;
}

function sort(cats,  criteria) {
    switch(criteria) {
        case "name":
        cats.sort(compareName);
        break;
        case "breed":
        cats.sort(compareBreed);
        break;
        case "age":
        cats.sort(compareAge);
        break;
        case "all":
        cats.sort(compareAll);
        break;
    }

    return cats;
}