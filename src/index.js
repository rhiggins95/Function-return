function isWindy(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}
let speed = prompt("What is the wind speed today?");
let unit = prompt("In what unit? Metric or imperial?");

if (isWindy(speed)) {
  alert("It is windy today");
} else {
  alert("It is not windy today");
}
