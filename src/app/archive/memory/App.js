let itemList = Array.from({ length: 10 }, (_, i) => i + 1);

itemList.sort(() => 0.5 - Math.random());

console.log(itemList)