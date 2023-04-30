const search=()=>{
	const searchbox=document.getElementById("search-item").value.toUpperCase();

	const product = document.querySelectorAll(".product")
	// const arr=[]
	// console.log("Product",product.length)
	// for(let i=0;i<product.length;i++){
	// 	arr.push(product[i])
	// }
	

	for(var i=0 ; i<15;i++){

		let match = product[i]
		if(match){
			let textvalue= match.textContent || match.innerHTML

			if(textvalue.toUpperCase().indexOf(searchbox) > -1){
				product[i].style.display="";

			}else{
				product[i].style.display="none";
			}
		}
	}

	// product.map((element)=>{
	// 	return element
	// })

	// arr.filter((ele)=>{
	// 	return ele.innerText.toUpperCase()=== searchbox
	// })

	
}