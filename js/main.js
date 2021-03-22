function myFunction() {
	var x = document.getElementById("siteLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}



	// const newBox = document.querySelector('new-box');


// const query = document.body.querySelector("#urlInput")

// fetch("https://api.shrtco.de/v2/shorten?url=https://www.amazon.com/American-West-Interpretive-History-Western/dp/0300185170/ref=pd_bkstr_rtpb_12?_encoding=UTF8&pd_rd_i=0300185170&pd_rd_r=af56651e-6229-41fa-882b-ac44400c7f70&pd_rd_w=DDRFU&pd_rd_wg=GWTJI&pf_rd_p=cf35b793-d3c7-404e-8f37-f9e58567007f&pf_rd_r=W0SNBQ2P87F9FMTFEDTC&psc=1&refRID=55A2A9PPYS0PZ2J2Q2TT", { mode: 'cors' })
// 		.then(response => response.json())
// 		.then(response => console.log(response.result.short_link))



//Stops submit from refreshing page
let form = document.getElementById("myForm");
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener('submit', handleForm);


//Fetches API and cheks that something written on form
// function getInputValue() {
// 	let input = document.getElementById('urlInput').value

// 	if(input === ""){
// 		alert("Hey! You need to write something!")
// 	}else{
// 		fetch(`https://api.shrtco.de/v2/shorten?url=${input}`, { mode: 'cors' })
// 			.then(response => response.json())
// 			.then(response => console.log(response.result.short_link))
// 	}
// }
// function myFunction() {

// }
async function getInputValue() {
	let input = document.getElementById('urlInput').value

	let path = `https://api.shrtco.de/v2/shorten?url=${input}`

	createNewBox(await getData(path));

}


async function getData(path) {
	const response = await fetch(path, { mode: 'cors' })
			.then(response => response.json())
			return urlObj = response.result;
}

function createNewBox(){
	$("#submit").click(function () {
		$(`<div class="important"><div class="file1">${urlObj.original_link.slice(0, 27)}</div><div class="file2">${urlObj.short_link}</div><button class="file3">Copy</button></div>`).appendTo('#newUrl');
	});
}
