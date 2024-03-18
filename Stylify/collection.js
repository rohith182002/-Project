var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")



search.addEventListener("keyup",function(){
    var enterValue = event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1)
    {
        var productname = productList[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enterValue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})