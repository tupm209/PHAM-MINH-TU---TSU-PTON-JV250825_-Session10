let mathPoint = Number(prompt("Hãy nhập điểm môn toán: "));
let physicsPoint = Number(prompt("Hãy nhập điểm môn lý: "));
let chemistryPoint = Number(prompt("Hãy nhập điểm môn hóa: "));

let pointAverage = (mathPoint + physicsPoint + chemistryPoint)/3;

document.writeln("Điểm trung bình 3 môn là: " + pointAverage);