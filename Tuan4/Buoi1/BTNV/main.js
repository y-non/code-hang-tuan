/* 
 Mini Task (10 phút):**
"Làm việc với array điểm số [7, 8, 6, 9, 5]:
1. Thêm điểm 10 vào cuối
2. Tìm điểm >= 8
3. Tính điểm trung bình
4. Đếm số điểm >= 7"
*/

/* 
  push(): thêm phần tử vào cuối
  unshift(): thêm phần tử vào đầu
  pop(): xóa phần tử cuối
  shift(): xóa phần tử đầu
*/
// 1.
var arr = [7, 8, 6, 9, 5];
arr.push(10);

// 2.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 8) {
    console.log("Phần tử lớn hơn bằng 8: ", arr[i]);
  }
}

//3.
let average = 0;
for (let i = 0; i < arr.length; i++) {
  average += arr[i];
  // average = average + arr[i];
}
average = average / arr.length;

console.log("Trung binh cong: ", average.toFixed(2));

// 4.
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 7) {
    count++;
    // count = count + 1;
  }
}

console.log(`Trong mảng arr có ${count} giá trị lớn hơn bằng 7.`);
