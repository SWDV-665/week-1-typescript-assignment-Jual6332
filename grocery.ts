class GroceryItem {
  type: string;
  quantity: string;

  constructor(ty: string, qnty: number) {
    this.type = type;
    this.quanity = qnty;
  }
}

let eggs = new GroceryItem("eggs",2);
let bread = new GroceryItem("bread",1)
let milk = new GroceryItem("milk",2)

// Create Array of GroceryItems
let groceryList: GroceryItem[] = [eggs,bread,milk]

for (let i=0; i < 3; i++){
    const app1 = document.getElementById("groceryItem1");
    app1.textContent = groceryList[i].type + " " + groceryList[i].quantity;
    const app2 = document.getElementById("groceryItem2");
    app2.textContent = groceryList[i].type + " " + groceryList[i].quantity;
    const app3 = document.getElementById("groceryItem3");
    app3.textContent = groceryList[i].type + " " + groceryList[i].quantity;
}
