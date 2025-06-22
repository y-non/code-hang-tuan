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
  deleteButton.onclick = function () {
    danhSach.removeChild(itemCon);
  };
  let selectBtn = document.createElement("selectBtn");
  selectBtn.className = "btn btn-success";
  selectBtn.textContent = "Chon";

  function selectTuTodoQuaComplete() {
    //mang item từ todo sang complete
    // thực hiện xóa ở todo
    danhSach.removeChild(itemCon);
    // thêm vào complete
    danhSach2.appendChild(itemCon);

    //xóa cả 2 nút delete và chọn vì nó lưu sự kiện cũ
    itemCon.removeChild(deleteButton);
    itemCon.removeChild(selectBtn);

    //add lại sự kiện mới cho delete
    deleteButton.onclick = function () {
      danhSach2.removeChild(itemCon);
    };

    selectBtn.onclick = function () {
      selectTuCompleteSangTodo();
    };

    itemCon.appendChild(deleteButton);
    itemCon.appendChild(selectBtn);
  }
  selectBtn.onclick = function () {
    selectTuTodoQuaComplete();
  };

  function selectTuCompleteSangTodo() {
    //mang item từ todo sang complete
    // thực hiện xóa ở todo
    danhSach2.removeChild(itemCon);
    // thêm vào complete
    danhSach.appendChild(itemCon);

    //xóa cả 2 nút delete và chọn vì nó lưu sự kiện cũ
    itemCon.removeChild(deleteButton);
    itemCon.removeChild(selectBtn);

    //add lại sự kiện mới cho delete
    deleteButton.onclick = function () {
      danhSach.removeChild(itemCon);
    };

    itemCon.appendChild(deleteButton);
    itemCon.appendChild(selectBtn);
  }

  selectBtn.onclick = function () {
    selectTuTodoQuaComplete();
  };

  itemCon.appendChild(deleteButton);
  itemCon.appendChild(selectBtn);

  danhSach.appendChild(itemCon);
}
