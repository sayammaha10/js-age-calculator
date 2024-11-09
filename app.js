const inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0];

const result = document.getElementById("result");

function calculateAge() {
  const birthDate = new Date(inputDate.value);

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  let yearDifference, monthDifference, dayDifference;

  yearDifference = todayYear - birthYear;

  if (todayMonth >= birthMonth) {
    monthDifference = todayMonth - birthMonth;
  } else {
    yearDifference--;
    monthDifference = 12 + todayMonth - birthMonth;
  }

  if (todayDay >= birthDay) {
    dayDifference = todayDay - birthDay;
  } else {
    monthDifference--;
    dayDifference = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay;
  }

  if (monthDifference < 0) {
    monthDifference = 11;
    yearDifference--;
  }

  result.innerHTML = `You are <span>${yearDifference}</span> years, <span>${monthDifference}</span> months, <span>${dayDifference}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
