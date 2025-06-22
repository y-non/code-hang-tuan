function nhapTen() {
  let nameInput = document.getElementById("myText").value;

  let danhSach = document.getElementById("danhSach");
  let itemCon = document.createElement("li");
  itemCon.textContent = nameInput;
  itemCon.classList.add("li-child");

  danhSach.appendChild(itemCon);

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.textContent = "Xóa";

  deleteBtn.onclick = function () {
    danhSach.removeChild(itemCon);
  };

  itemCon.appendChild(deleteBtn);

  document.getElementById("myText").value = "";
}

function xoaTatCa() {
  let tatCaLi = document.querySelectorAll("li.li-child");

  let danhSach = document.getElementById("danhSach");
  for (let i = 0; i < tatCaLi.length; i++) {
    danhSach.removeChild(tatCaLi[i]);
  }
}
