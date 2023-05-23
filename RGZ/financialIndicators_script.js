const date_to_close_value = new Map();

date_to_close_value.set("28.04.2023", "112.00");
date_to_close_value.set("27.04.2023", "110.00");
date_to_close_value.set("26.04.2023", "110.00");
date_to_close_value.set("25.04.2023", "111.00");
date_to_close_value.set("24.04.2023", "110.50");
date_to_close_value.set("21.04.2023", "112.00");
date_to_close_value.set("20.04.2023", "110.00");
date_to_close_value.set("19.04.2023", "110.50");
date_to_close_value.set("18.04.2023", "110.50");
date_to_close_value.set("17.04.2023", "110.00");
date_to_close_value.set("14.04.2023", "109.00");
date_to_close_value.set("13.04.2023", "109.50");
date_to_close_value.set("12.04.2023", "114.00");
date_to_close_value.set("11.04.2023", "115.50");
date_to_close_value.set("10.04.2023", "113.00");
date_to_close_value.set("07.04.2023", "108.50");
date_to_close_value.set("06.04.2023", "108.00");
date_to_close_value.set("05.04.2023", "105.50");
date_to_close_value.set("04.04.2023", "103.50");
date_to_close_value.set("03.04.2023", "109.00");

const table = document.getElementById("table")

for (const [key, value] of date_to_close_value) {
    const tr_element = document.createElement("tr")
    const td_date = document.createElement("td")
    const td_value = document.createElement("td")

    tr_element.appendChild(td_date)
    tr_element.appendChild(td_value)

    td_date.innerHTML = key
    td_value.innerHTML = value

    table.appendChild(tr_element)
}

const max_value_container = document.getElementById("max_value")
const min_value_container = document.getElementById("min_value")
const avg_value_container = document.getElementById("avg_value")

const max_value_innerHTML = max_value_container.innerHTML
const min_value_innerHTML = min_value_container.innerHTML
const avg_value_innerHTML = avg_value_container.innerHTML

const date_to_max_value = new Map();

date_to_max_value.set("28.04.2023", "115.00");
date_to_max_value.set("27.04.2023", "112.00");
date_to_max_value.set("26.04.2023", "111.50");
date_to_max_value.set("25.04.2023", "111.50");
date_to_max_value.set("24.04.2023", "111.50");
date_to_max_value.set("21.04.2023", "113.00");
date_to_max_value.set("20.04.2023", "112.00");
date_to_max_value.set("19.04.2023", "113.00");
date_to_max_value.set("18.04.2023", "111.00");
date_to_max_value.set("17.04.2023", "111.50");
date_to_max_value.set("14.04.2023", "109.50");
date_to_max_value.set("13.04.2023", "118.50");
date_to_max_value.set("12.04.2023", "116.50");
date_to_max_value.set("11.04.2023", "120.00");
date_to_max_value.set("10.04.2023", "117.50");
date_to_max_value.set("07.04.2023", "110.50");
date_to_max_value.set("06.04.2023", "109.00");
date_to_max_value.set("05.04.2023", "108.00");
date_to_max_value.set("04.04.2023", "113.00");
date_to_max_value.set("03.04.2023", "113.50");

const date_to_min_value = new Map();

date_to_min_value.set("28.04.2023", "110.00");
date_to_min_value.set("27.04.2023", "111.00");
date_to_min_value.set("26.04.2023", "110.00");
date_to_min_value.set("25.04.2023", "108.50");
date_to_min_value.set("24.04.2023", "109.50");
date_to_min_value.set("21.04.2023", "108.50");
date_to_min_value.set("20.04.2023", "108.50");
date_to_min_value.set("19.04.2023", "108.50");
date_to_min_value.set("18.04.2023", "108.50");
date_to_min_value.set("17.04.2023", "108.50");
date_to_min_value.set("14.04.2023", "109.00");
date_to_min_value.set("13.04.2023", "108.00");
date_to_min_value.set("12.04.2023", "110.00");
date_to_min_value.set("11.04.2023", "111.00");
date_to_min_value.set("10.04.2023", "108.00");
date_to_min_value.set("07.04.2023", "106.50");
date_to_min_value.set("06.04.2023", "103.50");
date_to_min_value.set("05.04.2023", "103.00");
date_to_min_value.set("04.04.2023", "99.00");
date_to_min_value.set("03.04.2023", "98.50");

const max_array = []
const min_array = []

for (const [key, value] of date_to_max_value) {
    max_array.push(Number(value))
}

for (const [key, value] of date_to_min_value) {
    min_array.push(Number(value))
}

const calc_max_value = Math.max(...max_array)
const calc_min_value = Math.max(...min_array)

max_value_container.innerHTML = `${max_value_innerHTML} ${calc_max_value}`
min_value_container.innerHTML = `${min_value_innerHTML} ${calc_min_value}`
















