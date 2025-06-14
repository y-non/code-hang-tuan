let a = 5;
let b = 10;

let c = "5";
let isCheckNumber = false;

/* Toán tử số học */
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

/* Toán tử so sánh */
// console.log(a > b);
// console.log(a < b);
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);

/* Toán tử logic */
// &&: toán tử và => cả 2 điều kiện phải thỏa mới chạy
// ||: toán tử hoặc => 1 điều kiện thỏa là chạy
// toán tử phủ định

/* Câu lệnh điều kiện */
//IF ELSE
let age = 18;
if (age >= 18) {
  console.log("Bạn đã đủ tuổi");
} else {
  console.log("Bạn chưa đủ tuối");
}

let diem = 8.5;
if (diem >= 9) {
  console.log("Xuat sac");
} else if (diem >= 8) {
  console.log("Gioi");
} else if (diem >= 6.5) {
  console.log("Kha");
} else {
  console.log("Trung binh");
}

//SWITCH CASE
let ngayTrongTuan = 2;

switch (ngayTrongTuan) {
  case 1:
    console.log("Thu 2");
    break;
  case 2:
    console.log("Thu 3");
    break;
  default:
    console.log("Ngay khac");
    break;
}

// const ask = prompt("Bạn vui lòng nhập vào...");
// console.log(typeof ask);

/* Function */
// Quy tắc tạo hàm
// function tenHam(thamSo1, thamSo2) {
//   return ketQua;
// }

// tạo 1 hàm cơ bản
function sayHello() {
  console.log("Hello world");
}

sayHello();

function xinChao(ten) {
  console.log("Xin chao: ", ten);
}

xinChao();

function tinhTong(a, b) {
  return a + b;
}
let number1 = 1;
let number2 = 2;

console.log(tinhTong(number1, number2));

/* ES6 */
const tinhHieu = (a, b) => {
  return a - b;
};

console.log(tinhHieu(10, 5));

function layGioHienTai() {
  return new Date().toLocaleTimeString();
}

console.log(layGioHienTai());
