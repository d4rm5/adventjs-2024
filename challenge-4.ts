function createXmasTree(height: number, ornament: string): string {
    if (height <= 0) {
      return "\n ____#____" + "\n ____#____"
    } else {
      let tree: string = "";
      let maxLength = 1 + (2 * (height-1));
  
      for (let i = 0; i < height; i++) {
        let newLevel = ornament.repeat(1 + (2 * i));
        let ornamentQuant = newLevel.length;
        newLevel = "_".repeat((maxLength-ornamentQuant)/2) + newLevel + "_".repeat((maxLength-ornamentQuant)/2)
        tree += newLevel + "\n";
      }
  
      tree += "_".repeat((maxLength - (1 + (2 * height-1)) / 2)) + "#" + "_".repeat((maxLength - (1 + (2 * height-1)) / 2)) + "\n" + "_".repeat((maxLength - (1 + (2 * height-1)) / 2)) + "#" + "_".repeat((maxLength - (1 + (2 * height-1)) / 2));
      return tree 
    }
  }