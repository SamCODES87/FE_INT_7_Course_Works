function friend(friends) {
  let result = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      result.push(friends[i]);
    }
  }

  return result;
}

let x = ["Sara", "Dave", "David", "Paloma", "Sam"];
const result = x.filter((name) => name.length === 4);

console.log(result);
