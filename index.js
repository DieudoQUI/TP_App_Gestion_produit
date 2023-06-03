let taballProduct =[]
   const RegisterProductInformations = document.getElementById('RegisterProductInformations');
    RegisterProductInformations.addEventListener('submit',(e)=>{
        e.preventDefault()
        const productName =document.getElementById('product').value;
        const quantity=document.getElementById('quantity').value;
        const price =document.getElementById('price').value;
        const totalPrice =Number(quantity)*Number(price);
        console.log(productName)
        console.log(quantity)
        console.log(price)
        console.log(totalPrice)

        if (productName=='' || quantity=='' || price==''){
            alert("Please fill all fields")
        }else{
            alert("Informations about products are added !");
        }
    
        const allProductInformations = {
            "productName" : productName,
            "quantity" : quantity,
            "price" : price,
            "totalPrice" : totalPrice
        }
        let dataExist = localStorage.getItem("tabProduct");
        let dataExistReceive
        dataExist =  dataExistReceive;
        taballProduct.push(allProductInformations)
        console.log(allProductInformations)
        console.log(taballProduct)
        
        localStorage.setItem('tabProduct', JSON.stringify(taballProduct));
        RegisterProductInformations.reset();  
    })


    /* let tableSaved = JSON.parse(localStorage.getItem(taballProduct))
    alert (tableSaved) 
    let tbody =document.getElementById('DATA tbody');
    tableSaved.forEach(element => {
        let newtr = document.createAttribute('tr');
        let celluleproduct =document.createElement('td');
        celluleproduct.textContent=element.Products;
        newtr.appendChild(celluleproduct);
        
        let celluleNumberOfproductchoose =document.createElement('td');
        celluleNumberOfproductchoose.textContent=element.NumberOfproductchoose;
        newtr.appendChild(celluleNumberOfproductchoose);

        let celluleValueOfProduct =document.createElement('td');
        celluleValueOfProduct.textContent=element.ValueOfProduct;
        newtr.appendChild(celluleValueOfProduct);

        let celluleTotalprice =document.createElement('td');
        celluleTotalprice.textContent=element.Totalprice;
        newtr.appendChild(celluleTotalprice);
        tbody.appendChild('tr')
        
    });  */

