function isValidWalk(walk) {
    let ns = 0;
    let we = 0; 
      for (let i of walk) { 
        if (i == 'n') ns += 1; 
        if (i == 's') ns -= 1; 
        if (i == 'w') we += 1; 
        if (i == 'e') we -= 1; 
      } 
  
      return walk.length == 10 && ns === 0 && we === 0; 
  }