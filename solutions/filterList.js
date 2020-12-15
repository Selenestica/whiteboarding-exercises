

function filterList(list) {
  newList = []
  for (let i = 0; i < list.length; i++) {
    console.log(typeof(list[i]))
    if (typeof(list[i]) !== "string") {
      newList.push(list[i])
    }
  }
  return newList
}

console.log(filterList([2, 3, 5, "4", "abc", false, true]))