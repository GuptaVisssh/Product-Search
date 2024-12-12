const search = () =>{
    const searchBox= document.getElementById("search-item").value.toUpperCase()
    const storeItem = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const productName = storeItem .getElementsByTagName("h2")

    for(var i = 0; i<productName.length; i++){
        let match  = product[i].getElementsByTagName("h2")[0]
        // console.log(match);
        

        if(match){
            let textValue = match.textContent || match.innerHTML
            console.log(textValue);

            if (textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = ""
                
            }else{
                 product[i].style.display = "none"
            }
        }
    }
} 