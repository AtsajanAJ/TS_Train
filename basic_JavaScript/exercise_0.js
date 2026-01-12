function even(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
    console.log(result.join(', '));
  }
  
  even(7); // แสดง: 2, 4, 6