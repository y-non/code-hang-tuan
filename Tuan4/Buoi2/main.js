/* Get theo Id */
let tieuDe = document.getElementById("tieuDe");
console.log(tieuDe);

/* Trường hợp 1 class moTa */
let moTa = document.querySelector(".moTa");
console.log(moTa);

/* Trường hợp nhiều class moTa */
let moTaAll = document.querySelectorAll(".moTa");
// console.log(moTa);

/* get theo tag name */
let tatCaLi = document.querySelectorAll("li");
console.log(tatCaLi);

/* css selector */
let firstItem = document.querySelector("#danhSach li:first-child");
console.log(firstItem);

// thay đổi text
tieuDe.textContent = "Tiều đề mới";
tieuDe.innerText = "Tiêu đề mới 2";

tieuDe.innerHTML = "<strong>Đây là tiêu đề in đậm</strong>";
tieuDe.setAttribute("class", "tieude-moi");
tieuDe.style.color = "red";
tieuDe.style.fontSize = "50px";

moTa.classList.add("highlight");
moTa.classList.remove("moTa");
moTa.classList.toggle("active");

/* Tạo element mới */
let itemMoi = document.createElement("li");
itemMoi.textContent = "Item 3";

// Thêm element
let danhSach = document.getElementById("danhSach");
danhSach.appendChild(itemMoi);

// Xóa element
danhSach.removeChild(firstItem);
