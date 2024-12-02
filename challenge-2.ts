function createFrame(names: string[]): string {
    let maxLength: number = 0;
  
    for (let i = 0; i < names.length; i++) {
      if (maxLength < names[i].length) {
        maxLength = names[i].length;
      }
    }
  
    let frame: string = "*";
    frame = frame.repeat(maxLength+4);
  
    for (let i = 0; i < names.length; i++) {
      const name = `* ${names[i]}`.padEnd(maxLength+2)+" *" ;
      name.padEnd(maxLength-1);
      frame = frame + "\n" + name;
    }
    frame = frame + "\n" + ``.padEnd(maxLength+4, "*")
    return frame;
}