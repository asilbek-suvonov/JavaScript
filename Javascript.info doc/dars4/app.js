// =========================== Mavzu Javascriptda o'zgaruvchilar ===============================

// let admin='John'
// let name=admin
// console.log(name);

// 1 chi misol

// function sayHi() {
//   if (true) {
//     var name = true;
//   }
//   console.log(name);

// }

// sayHi()
// console.log(name);// scopedan tashqarida bo'lgani uchun ishlamadi

// 2 chi misol
// for (let i = 0; i < 10; i++) {
//   var one=1
// console.log(i); // bu yerda funksiya ishlaydi chunki forni ichida console bor [1,2,3,4,5,6,7,8,9,10]
// }
// console.log(i);// bu yerda ishlamaydi chunki console for ni ichida emas
// console.log(one);

// Var va Let o'zgaruvchilarning farqi

// ********* 1 - farq ***********
// let Salom='Assalomu alaykum'
// let Salom='Hello' // bu yerda o'zgaruvchi uniikal ochilishi kerak aks holda error beryadi

// var hello ='Assalomu alaykum'
// var hello = 'Hello' // varda esa avval ochilgan o'zgaruvchilarni qayta ochsa ham error bermaydi

// ********* 2 - farq ***********
// Hoisting nima - Hoisting o'zgaruvchidan oldin o'zgaruvchini ishlatish deyiladi
// 2 chi farq Hoistingda bo'ladi

// 1. agar letda hoisting bulsa ReferenceError beradi
// console.log(a); //referenceError qaytaradi
// let a ='Assalomu alaykum'

// 2. agar Varda hoisting qilinsa Undefined qaytaradi
// console.log(b); //undefined qaytaradi

// var b = 'Hello World'

// ********* 3 - farq ***********
// Global object bilan bog'lanish yani - Window objecti bilan

// let numbers=10
// console.log(window.numbers); //undefined qaytaradi

// var num=10
// console.log(window.num);//10 natija chiqaradi

// Homework
// 1.Vazifa
// let name='Asilbek'
// let lastName='Suvonov'

// console.log(`Salom, ${name}, ${lastName}, Saytimizga xush kelibsiz`);

// 2.Vazifa
// let name='Asilbek'
// let age=17

// console.log(`Sizning ismingiz ${name} va yoshingiz ${age} da. Bir yil o'tib ${age + 1} yosh bo'lasiz.`);

// 3.Vazifa

// let book = "Kitob";
// let price = 15000;
// let takeProduct = 5;
// console.log(
//   `Siz ${takeProduct} dona ${book} sotib oldingiz. Jami to'lov: ${
//     takeProduct * price
//   } so'm.`
// );

// 4.Vazifa

// let firstName='Asilbek'
// let lastName='Suvonov'

// console.log(`${firstName}${lastName}@gmail.com`);
