// // ========================================= Mavzu: Data Typelar =====================================

// // Data typelar 2 ga bo'linadi Primitive va noPrimitive ga

// // 1.Primitive data typelar 8 ta

// let string = "hello"; //sting
// let number = 211314; //number
// let boolean = true; //boolean
// let undefined = undefined; //undefined
// let symbol = Symbol("id"); //Symbol()
// const nulll = null; //null
// let bigints = 10n; //BigInt

// // 2.Non-Primitive data typelar

// // 1.Object
// let user = {
//   name: "Ali",
//   age: 25,
// };

// // 2.Array
// let numbers = [1, 2, 3, 4];

// // 3.Function
// function greet(s) {
//   console.log(s);
// }
// const run = typeof greet("hello");
// console.log(run);

// // 4.date
// let now = new Date();

// // 5.RegExp
// let pattern = /abc/;

// // TypeOf() - o‘zgaruvchining data typeini aniqlash uchun ishlatiladi.
// // yuqoridagi barcha data typelarni TypeOf() operatori bilan aniqlash mumkin

// // Primitive data typelar vazifasi

// // 1.Number - Sonlar bilan ishlash uchun ishlatiladi.
// let age = 25;
// let price = 99.99;
// // 2.String - Matnli ma’lumotlarni saqlash va ular bilan ishlash uchun.
// let name = "Ali";
// let message = "Hello world";
// // 3.Boolean - Mantiqiy holatlarni ifodalash uchun. True / False
// let isLoggedIn = true;
// let hasPermission = false;
// // 4.Undefined - Qiymat berilmagan o‘zgaruvchini bildiradi.  (undefined ni JavaScript’ning o‘zi beradi.)
// let x;
// console.log(x);
// // 5.Null - Ataylab bo‘sh yoki mavjud bo‘lmagan qiymatni ko‘rsatish uchun. (null ni developer o‘zi qo‘yadi. )
// let user = null;
// // 6.Symbol - Unikal (takrorlanmaydigan) qiymatlar yaratish uchun. (Har bir Symbol doim unikal bo‘ladi. )
// let id = Symbol("id");
// // 7.BigInt - Juda katta sonlar bilan ishlash uchun. (Oxirida n bo‘lishi shart.)
// let bigNumber = 12345678901234567890n;
