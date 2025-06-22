function demoFunction() {
  let inputData = document.getElementById("inputData").value;
  // console.log(inputData);

  let itemCon = document.createElement("li");
  let danhSach2 = document.getElementById("danhSach2");

  itemCon.textContent = inputData;

  let danhSach = document.getElementById("danhSach");

  let deleteButton = document.createElement("deleteButton");
  deleteButton.className = "btn btn-danger";
  deleteButton.textContent = "Xóa";

  let selectBtn = document.createElement("selectBtn");
  selectBtn.className = "btn btn-success";
  selectBtn.textContent = "Chon";

  selectBtn.onclick = function () {
    const idParentOfItem = itemCon.parentElement.getAttribute("id");
    if (idParentOfItem === "danhSach") {
      danhSach.removeChild(itemCon);
      danhSach2.appendChild(itemCon);
    } else {
      danhSach2.removeChild(itemCon);
      danhSach.appendChild(itemCon);
    }
  };

  deleteButton.onclick = function () {
    const idParentOfItem = itemCon.parentElement.getAttribute("id");

    if (idParentOfItem === "danhSach") {
      danhSach.removeChild(itemCon);
    } else {
      danhSach2.removeChild(itemCon);
    }
  };

  itemCon.appendChild(deleteButton);
  itemCon.appendChild(selectBtn);

  danhSach.appendChild(itemCon);
}
