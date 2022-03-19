const fetchPokemon = () => {
	const pokeName = document.getElementById("pokeName");
	let pokeInput = pokeName.value.toLowerCase();
	const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
	fetch(url).then((res) => {
		if(res.status != 200){
			pokeImage("/assets/img/error.png");
			refreshPokeStats();
			refreshAbout();
		}
		else{
			return res.json();
		}
	}).then((data) => {
		if(data != undefined){
			//console.log(data);
			pokeImage(data.sprites.front_default);
			pokeType(data.types);
			pokeAbilities(data.abilities);
			pokeHeight(data.height);
			pokeWeight(data.weight);
			pokeStats(data.stats);
		}
	}); 
}

const pokeImage = (url) => {
	const pokeImg = document.getElementById("pokeImg");
	pokeImg.src = url;
}

const pokeType = (types) => {
	const pokeTp = document.getElementById("pokeType");
	let allTypes = "";
	for(let i = 0; i < types.length; i++){
		allTypes += '<span class="'+ types[i].type.name +'">' + types[i].type.name + '</span>';
		pokeWeakness(types[i].type.name);
	}
	pokeTp.innerHTML  = allTypes;
}

const pokeWeakness = (type) => {
	let allWeakness = "";
	fetch('https://pokeapi.co/api/v2/type/'+type).then((res) => {
		if(res.status != 200){
			const pokewk = document.getElementById("pokeWeakness");
			pokewk.innerHTML  = "Unknown";
		}
		else{
			return res.json();
		}
	}).then((data) => {
		if(data != undefined){
			let damage_from = data.damage_relations.double_damage_from;
			for(let i = 0; i < damage_from.length; i++){
				allWeakness += '<span class="'+ damage_from[i].name +'">' + damage_from[i].name + '</span>';
			}
			const pokewk = document.getElementById("pokeWeakness");
			pokewk.innerHTML  = allWeakness;
		}
	}); 
}

const pokeAbilities = (abilities) => {
	const pokeAb = document.getElementById("pokeAbilities");
	let allAbilities = "";
	for(let i = 0; i < abilities.length; i++){
		allAbilities += '<span>' + abilities[i].ability.name + '</span>';
	}
	pokeAb.innerHTML  = allAbilities;
}

const pokeHeight = (height) => {
	const pokeH = document.getElementById("pokeHeight");
	pokeH.innerHTML = height + " m";
}

const pokeWeight = (weight) => {
	const pokeW = document.getElementById("pokeWeight");
	pokeW.innerHTML = weight + " kg";
}

const pokeStats = (stats) => {
	refreshPokeStats();

	let container = document.querySelector('.container-amout-stat');
	let height = container.offsetHeight;


	for(let i = 0; i < stats.length; i++){
		let amountStat = stats[i].base_stat;
		let nameStat = stats[i].stat.name;
		let heightStat = (amountStat * height) / 160 + 2.5;
		document.getElementById(nameStat).style.height = heightStat+"px";
	}
}

const refreshPokeStats = () => {
	let elements = document.querySelectorAll('.stat');
	for (let i = 0; i < elements.length; i++) {
	    elements[i].style.height = "0px";
	}
}

const refreshAbout = () => {
	document.getElementById("pokeType").innerHTML = "?";
	document.getElementById("pokeAbilities").innerHTML = "?";
	document.getElementById("pokeHeight").innerHTML = "?";
	document.getElementById("pokeWeight").innerHTML = "?";
	document.getElementById("pokeWeakness").innerHTML = "?";
}



document.getElementById("pokeName").addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) {
    	fetchPokemon();
    }
  });