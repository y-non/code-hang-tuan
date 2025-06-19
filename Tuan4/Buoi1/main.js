/* Vòng lặp for */
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// lặp qua Array
let listSubject = ["Toán", "Lý", "Hóa", "Sinh"];

for (let i = 0; i < listSubject.length; i++) {
  console.log(`Danh sách môn học thứ ${i + 1}: ${listSubject[i]}`);
}

/* WHILE LOOP */
//
/* 
    while(condition) {
        chạy cho tới khi condition bị sai
    }
*/
let flag = 1;
while (flag <= 5) {
  //   console.log(flag);
  flag++;
}

/* DO WHILE */
let A;

// do {
//   A = prompt("Vui lòng nhập số A: ");
// } while (isNaN(A));

/* FOR IN */
const objInfo = {
  ten: "An",
  tuoi: 20,
  lop: "12A1",
};

for (let thuocTinh in objInfo) {
  console.log(objInfo[thuocTinh]);
}

let arr = ["toan", "li", "hoa", "sinh"];
for (const key in arr) {
  if (arr[key] === "toan") {
    console.log("iu toan");
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "toan") {
    console.log("iu toan");
  }
}
