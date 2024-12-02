function prepareGifts(gifts: number[]): number[] {
    let uniques:number[] = [];
  
    for (let i = 0; i<gifts.length; i++) {
      let count = 0;
      let num = gifts[i];
      
      for (let j = 0; j<uniques.length; j++) {
        if (uniques[j] == num) {
          count++
        }
      }
  
      if (count == 0) {
        uniques.push(gifts[i])
      }
    }
    
    let sorted = false;
    while (!sorted) {
      sorted = true; 
      for (let i = 0; i < uniques.length - 1; i++) {
        if (uniques[i] > uniques[i + 1]) {
          let temp = uniques[i];
          uniques[i] = uniques[i + 1];
          uniques[i + 1] = temp;
          sorted = false;
        }
      }
    }
    return uniques;
  }