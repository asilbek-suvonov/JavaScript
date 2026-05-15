// leecode masalalar yechish


// 2 - masala
const names=['asilbek', 'azizbek', 'sardorbek', 'shaxzodbek', 'sardorbek', 'shaxzodbek', 'sardorbek', 'shaxzodbek', 'sardorbek', 'shaxzodbek']

function nameUppercase(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i].toUpperCase());
  }
  return name
}
nameUppercase(names)
