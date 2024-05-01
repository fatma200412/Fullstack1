// eger(sert){
//       icra edeceyimiz kodlar
// }yoxsa{
//       icra edeceyimiz kodlar
// }

// let num = 10;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else {
//   console.log("eded menfidir");
// }

// let result = 40;

// if (result > 50) {
//   console.log("Telebe imtahandan ugurlar kecib");
// } else {
//   console.log("Telebe kesilib");
// }

// let btn = 1;

// if (btn == true) {
//   console.log("isiqlar yanir");
// } else {
//   console.log("isiqlar sonur");
// }

// false-0
// true-1

// false deyerler=>false,0,NaN,null,underfined, ""

// let num = 25;

// console.log(typeof num);

// num = String(num);

// console.log(typeof num);

// console.log("1 deyeri=>", Boolean(1));

// console.log("0 deyeri=>", Boolean(0));
// console.log("NaN deyeri=>", Boolean(NaN));
// console.log("null deyeri=>", Boolean(null));
// console.log("underfined deyeri=>", Boolean(undefined));
// console.log("_ deyeri=>", Boolean(""));

// console.log("asdfg deyeri=>", Boolean(" "));

// let num = 10;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else if (num < 0) {
//   console.log("eded menfidir");
// } else {
//   console.log("eded 0-a beraberdir");
// }

// let num = 5;

// if (num % 2 == 0) {
//   if (num == 0) {
//     console.log("eded 0-a beraberdir");
//   } else {
//     console.log("eded cutdur");
//   }
// } else {
//   console.log("eded tekdir");
// }

// if (num % 2 == 0 && num != 0) {
//   console.log("eded cutdur");
// } else if (num % 2 != 0 && num != 0) {
//   console.log("eded tekdir");
// } else {
//   console.log("eded 0-a beraberdir");
// }

// let result = 81;

// if (result > 50 && result < 61) {
//   console.log("Telebe E alib");
// } else if (result > 60 && result < 71) {
//   console.log("Telebe D alib");
// } else if (result > 70 && result < 81) {
//   console.log("Telebe C alib");
// } else if (result > 80 && result < 91) {
//   console.log("Telebe B alib");
// } else if (result > 90) {
//   console.log("Telebe A alib");
// } else {
//   console.log("Telebe kesilib");
// }

// let btn = true;

// // if (btn == true) {
// //   console.log("isiqlar yanir");
// // } else {
// //   console.log("isiqlar sonur");
// // }

// btn ? console.log("isiqlar yanir") : console.log("isiqlar sonur");

//  &&-and (true, true)
// || -or (bir true olsa da true)
//  !-not
// ??-nullish (null ve underfined)

// false   true
// if (NaN ?? 4 < 5) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let day = 2;
// let ticket = false;

// switch (day) {
//   case 1:
//     console.log("bazar ertesi");
//     break;
//   case 2:
//     console.log("cersenbe axsami");

//     if (ticket) {
//       console.log("Film var");
//     } else {
//       console.log("Film yoxdur");
//     }

//     break;
//   case 3:
//     console.log("cersenbe");
//     break;
//   case 4:
//     console.log("cume axsami");
//     break;
//   case 5:
//     console.log("cume");
//     break;
//   case 6:
//     console.log("senbe");
//     break;
//   case 7:
//     console.log("bazar ");
//     break;

//   default:
//     console.log("gunu duzgun teyin edin");
//     break;
// }

// alert("hello");
// let age = prompt("Yasiniz necedir?");
// console.log(typeof age);
// // age = Number(age);
// // console.log(typeof age);
// console.log("age=", age);
// console.log("Tevellud25: ", 2024 - age);

// let width = prompt("terefi daxil edin:");
// console.log(typeof width);
// width = Number(width);
// console.log(`Kvadratin sahesi: ${width ** 2}`);
// console.log(typeof width);

// let btn = confirm("Sertlerle razisinizmi?");
// console.log(btn);
// // alert(btn);
// if (btn) {
//   alert("Beli raziyam");
// } else {
//   alert("Xeyr, razi deyilem");
// }

// Alqoritm

// 1-balansi gostermek
// 2-balansa pul elave et
// 3-balansdan pul cek
// 4-ternimaldan cixmaq

let balans = 200;
let emeliyyat = prompt("Emeliyyati secin");
emeliyyat = Number(emeliyyat);
let mebleg;

switch (emeliyyat) {
  case 1:
    alert(`Balansiniz ${balans} AZN-dir`);
    break;
  case 2:
    mebleg = prompt("Elave edilecek meblegi daxil edin");
    mebleg = Number(mebleg);
    //     balans=balans+mebleg
    balans += mebleg;
    //     console.log(balans);
    alert(`Balansiniz ${balans} AZN oldu`);
    break;
  case 3:
    mebleg = prompt("Cixarilacaq meblegi daxil edin:");
    mebleg = Number(mebleg);
    if (mebleg > balans) {
      alert("Balansinizda kifayet qeder mebleg yoxdur");
    } else {
      balans -= mebleg;
      alert(
        `Balansinizda ${mebleg} AZN qeder pul cixarildi, Yekun balansiniz ${balans}AZN oldu`
      );
    }
    break;
  case 4:
    alert("Terminaldan cixildi");
    break;
  default:
    alert("Emeliyyati duzgun secin!");
    break;
}
