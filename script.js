const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
let resultsDay = document.getElementById("results-day");
let resultsMonth = document.getElementById("results-month");
let resultsYear = document.getElementById("results-year");
const form = document.getElementById("form");
const dayError = document.getElementById("day-error");
const dayLabel = document.getElementById("day-label");
const monthError = document.getElementById("month-error");
const monthLabel = document.getElementById("month-label");
const yearError = document.getElementById("year-error");
const yearLabel = document.getElementById("year-label");
const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = 1 + currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if ((day.value < 1) | (day.value > 31)) {
        day.classList.add("border-red-400");
        dayError.classList.remove("hidden");
        dayLabel.classList.add("text-red-400");
    } else if ((month.value < 1) | (month.value > 12)) {
        month.classList.add("border-red-400");
        monthError.classList.remove("hidden");
        monthLabel.classList.add("text-red-400");

        day.classList.remove("border-red-400");
        dayError.classList.add("hidden");
        dayLabel.classList.remove("text-red-400");
    } else if ((year.value < 1900) | (year.value > currentYear)) {
        year.classList.add("border-red-400");
        yearError.classList.remove("hidden");
        yearLabel.classList.add("text-red-400");

        month.classList.remove("border-red-400");
        monthError.classList.add("hidden");
        monthLabel.classList.remove("text-red-400");
    } else {
        getAge();
        year.classList.remove("border-red-400");
        yearError.classList.add("hidden");
        yearLabel.classList.remove("text-red-400");
    }
});

function getAge() {
    if (day.value > currentDay) {
        currentDay = currentDay + monthDays[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }

    if (month.value > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    totalDays = currentDay - day.value;
    totalMonths = currentMonth - month.value;
    totalYears = currentYear - year.value;

    resultsDay.textContent = totalDays;
    resultsMonth.textContent = totalMonths;
    resultsYear.textContent = totalYears;
}
