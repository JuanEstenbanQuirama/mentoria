export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


console.log("otro cambio")

array.forEach(element => {
  
});
console.log("holaaaa");
alert("luisA MALA")