function demoFunc() {
  //lấy giá trị input người dùng nhập
  let myText = document.getElementById("myText").value;

  //tạo li
  let itemCon = document.createElement("li");
  // gán giá trị input cho li
  itemCon.textContent = myText;

  //ánh xạ đến ul
  let danhSach = document.getElementById("danhSach");

  //thêm con cho ul
  danhSach.appendChild(itemCon);
}
