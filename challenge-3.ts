type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  let obj = {}

  inventory.forEach((toy) => {
    if (!(toy.category in obj)) {
      obj[toy.category] = {};
    }

    obj[toy.category][toy.name] = 
      (obj[toy.category][toy.name] || 0) + toy.quantity;
  })
  
  return obj
}