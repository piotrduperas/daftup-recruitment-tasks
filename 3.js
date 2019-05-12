(function(){

	let data = ["Walmart",
		"State Grid",
		"Sinopec Group",
		"China National Petroleum",
		"Royal Dutch Shell",
		"Toyota Motor",
		"Volkswagen",
		"BP",
		"Exxon Mobil",
		"Berkshire Hathaway"
	]

	let filterTable = function() {
		let filterInput = document.querySelector(".filter__input");
		if(filterInput) {
			let phrase = filterInput.value.toLowerCase();

			let res = data;

			if(phrase){
				res = data.filter((el) => (~el.toLowerCase().indexOf(phrase)));
			}

			let table = document.querySelector(".results");

			if(table){
				table.innerHTML = "";
				for(let i in res){
					table.innerHTML += "<tr><td>" + res[i] + "</td></tr>";
				}
			}
		}
		return false;
	}

	let form = document.querySelector(".filter");
	if(form){
		console.log(form);
		form.onsubmit = filterTable;
	}

	filterTable();
})();