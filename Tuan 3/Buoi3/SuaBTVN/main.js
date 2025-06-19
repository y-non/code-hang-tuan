function simpleCal() {
  // console.log("nhập vào lần lượt gía trị a.b vào bên dưới")

  let inputA, inputB;

  do {
    inputA = prompt("nhập số thứ nhất : a");
    inputA = parseFloat(inputA);
  } while (isNaN(inputA));

  do {
    inputB = prompt("nhập số thứ 2: b");
    inputB = parseFloat(inputB);
  } while (isNaN(inputB));

  let cal = prompt("Vui lòng chọn phép tính cần thực hiện: + - * /");
  let result;
  switch (cal) {
    case "+":
      result = inputA + inputB;
      break;
    case "-":
      result = inputA - inputB;
      break;
    case "*":
      result = inputA * inputB;
      break;
    case "/":
      if (inputB === 0) {
        alert("Giá trị B phải khác 0");
        return;
      } else {
        result = inputA / inputB;
      }
      break;
    default:
      alert("phép toán không hợp lệ");
      return;
  }
  // alert(`Kết quả: ${inputA} ${Cal} ${inputB} = ${result}`);
  alert("Kết quả:" + inputA + cal + inputB + "=" + result.toFixed(2));
}

simpleCal();
