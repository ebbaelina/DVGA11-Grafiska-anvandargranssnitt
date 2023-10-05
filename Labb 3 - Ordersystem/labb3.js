var menu = {
	"Pizzor klass 1": [
		{"name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
		{"name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
		{"name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
	],
	"Pizzor klass 2": [
		{"name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
		{"name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner" ], "price": 70 },
		{"name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor" ], "price": 70 },
		{"name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas" ], "price": 70 },
		{"name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs" ], "price": 70 },
		{"name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk" ], "price": 70 },
		{"name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök" ], "price": 70 },
		{"name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner" ], "price": 70 }
	],
	"Pizzor klass 3": [
		{"name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg" ], "price": 75 },
		{"name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 75 },
		{"name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner" ], "price": 75 },
		{"name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 85 },
		{"name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor" ], "price": 75 },
		{"name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor" ], "price": 75 },
		{"name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas" ], "price": 75 },
		{"name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)" ], "price": 75 },
		{"name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika" ], "price": 75 },
		{"name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök" ], "price": 75 },
		{"name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "a:Nötter"], "price": 75 }
	],
	"Såser": [
		{"name": "Bearnaisesås 10 cl ", "price":  10 },
		{"name": "Kebabsås mild 10 cl ", "price":  10 },
		{"name": "Kebabsås stark 10 cl ", "price":  10 },
		{"name": "Kebabsås blandad 10 cl ", "price":  10 },
		{"name": "Tzatzikisås 10 cl ", "price":  10 },
		{"name": "Vitlökssås 10 cl ", "price": 10}
	],
	"Dryck": [
		{"name": "Coca-Cola 33 cl ", "price":  15 },
		{"name": "Coca-Cola light 33 cl ", "price":  15 },
		{"name": "Fanta 33 cl ", "price":  15  },
		{"name": "Sprite 33 cl ", "price":  15 },
		{"name": "Mineralvatten 33 cl ", "price":  15 },
		{"name": "Lättöl 33 cl ", "price":  15 },
		{"name": "Coca-Cola 50 cl ", "price":  20 },
		{"name": "Fanta 50 cl ", "price":  20 }
	]
}

window.addEventListener('load', init);

function init() {
	//hämtar ut knappar och meny + order sektioner, döljer och visar sektionerna beroende på vilken knapp som trycks 
	let menyKnapp = document.getElementById("menybtn"); 
	let orderKnapp = document.getElementById("bestallningbtn"); 
	let menySection = document.getElementById("meny"); 
	let orderSection = document.getElementById("order"); 

	orderSection.style.display = "none"; 

	orderKnapp.addEventListener("click", (event) => {
		
		  orderSection.style.display = "block";
		  menySection.style.display = "none";
		  
	});

	menyKnapp.addEventListener("click", (event) => {

			menySection.style.display = "block"; 
			orderSection.style.display = "none";
		 
	});

	JsonData(menySection, orderSection); 
}

function JsonData(meny){
	//loopar igenom Json arrayen 
	for(const [menuname, menusection] of Object.entries(menu)){
		//hämtar ut rubrikerna, Pizza klass 1 osv 
		let menyHeader = document.createElement('h2');
		menyHeader.classList.add('menysections'); 
		let textnode = document.createTextNode(menuname);
		menyHeader.appendChild(textnode); 
		meny.appendChild(menyHeader); 
		
		//hämtar ut name och price från array i en h5, lägger därefter in en + icon 
		for(const menuitem of menusection) {
			let name = document.createElement('h5');
			name.classList.add('items'); 
			let nameText = document.createTextNode(menuitem['name']);
			let priceText = document.createTextNode("  "+ menuitem['price'] + ":-");
			name.appendChild(nameText);
			name.appendChild(priceText)

			let icon = document.createElement('span');
			icon.classList.add('material-icons');
			icon.textContent = 'add'; 

			name.appendChild(icon);
			name.classList.add('h5-icon');
			meny.appendChild(name);

			//skapar ett p element och i den läggs innehållet i contens från json datan 
			let content = document.createElement('p');
			content.classList.add('contents');
			//loopar igenom arrayen och kollar om någon av värderna börjar på a:, om ja så skivs texten ut i bold font 
			for(let i = 0; i < menuitem["contents"].length; i++) {
				let tt = menuitem["contents"][i];
				if(tt.startsWith("a:")){
					//a: tas bort från värdet
					let contentText = document.createTextNode(tt.replace("a:", "") + " ");
					let node = document.createElement("b");
					node.appendChild(contentText);
					content.appendChild(node);
				} else {//Annars så skivs den ut utan bold font
					let contentText = document.createTextNode(tt + " ");
					content.appendChild(contentText);

				}
			}
			
			//om något objekt i jsondatan inte innehåller contents så döljs den datan 
			if(menuitem['contents'] === undefined){
				content.style.display = "none"
			}
			///content.appendChild(contentText);	 
			meny.appendChild(content); 	
	}
	meny.addEventListener('click', selectedItems);
}
}
//variabel som används när totalpriset räknas upp 
let totalpris = 0;

function selectedItems(e) {
  let target = e.target;
  //om klickat element är en span så hämtas secktionen med klass .order ut 
  if (target.tagName === 'SPAN') {
    let orderSection = document.getElementById("order");
    let h3 = document.createElement('h3');
	h3.classList.add('orderedItem'); 
    h3.style.backgroundColor = "white"; 
	h3.style.margin = "0px"; 
	h3.style.padding = "15px"; 

	//icon skapas som ska hantera när användaren ska ta bord en vara ur beställningen 
	let icon = document.createElement('span');
		icon.classList.add('material-icons', 'delete');
		icon.textContent = 'delete'; 

		h3.appendChild(icon);
		//hittar det närmsta elementet till target som är en h5 och lägger in i variabel 
	 let h5Element = target.closest('h5');

	 //kod för uppräkning av totalpris 
	let counterSpan = h5Element.querySelector('.counter');
    if (!counterSpan) {
      counterSpan = document.createElement('span');
      counterSpan.classList.add('counter');
      h5Element.appendChild(counterSpan);
    }
    let counter = parseInt(counterSpan.textContent) || 0;
    counter++;
    counterSpan.textContent = counter;
	//skapar variablar som innehåller innehållet i den närmaste h5 som blivit klickad, den hämtar ut childnode 0 och 1 som innehåller namn på varan och pris 
    let nameText = h5Element.childNodes[0].textContent;
    let priceText = h5Element.childNodes[1].textContent;
	//lägger sedan in dessa i en textnode 
    textNode = document.createTextNode(nameText + priceText);

	//skiver ut på sidan 
    h3.appendChild(textNode);
    orderSection.appendChild(h3);
  }
  //totalpris skrivs ut på sidan 
  let totalSektion = document.querySelector('.totalPris');
  
  let h5Element = target.closest('h5');
  let priceText = h5Element.childNodes[1].textContent;
  let pris = parseInt(priceText.substring(2));
  

  totalpris += pris;

  totalSektion.textContent = '';
  //totalpris skrivs ut på sidan 
  let prisSumma = document.createTextNode('Totalpris:' + totalpris);
  totalSektion.appendChild(prisSumma);

  //lyssnare läggs på order sektionen
  document.getElementById("order").addEventListener("click", taBort); 

  function taBort(e) {
	//om klickat element är en span så tas det närmsta elementet till spanen som är en h3 bort 
	if (e.target.tagName === 'SPAN'){
		let h3Element = e.target.closest('h3');
		h3Element.remove(); 
	}
	
  }
}
