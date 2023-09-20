export default function(btn,parent,array){
    if(btn.classList.contains('activeCategorie')){
        btn.classList.remove('activeCategorie')
        while (parent.lastChild && parent.children.length > 1) {
            parent.removeChild(parent.lastChild);
        }
    } else{
        btn.classList.add('activeCategorie')
        array.forEach(item => {
            let itemContainer = document.createElement('div');
            itemContainer.classList.add('itemContainer');
            
            let name = document.createElement('p');
            name.classList.add('itemName');
            name.textContent = item.name;
            itemContainer.appendChild(name);

            let description = document.createElement('p');
            description.classList.add('itemDescription');
            description.textContent = item.description;
            itemContainer.appendChild(description);

            let price = document.createElement('p')
            price.classList.add('itemPrice')
            price.textContent = item.price;
            itemContainer.appendChild(price); 

            parent.appendChild(itemContainer);
        });
    }
};