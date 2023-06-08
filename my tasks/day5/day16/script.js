const greet = (message = "", cb = (d) => {}) => {
 console.log(message);
 cb(message);

}
 greet(10, () =>{
    greet(9, () => {
        greet(8,() => {
            greet(7,() => {
                greet(6,() => {
                    greet(5,() => {
                        greet(4,() => {
                            greet(3,() =>{
                                greet(2,() => {
                                    greet(1,() => {
                                        greet('happy independence day...');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
 });
 
 const countdown = (num, callback) => {
    if (num > 0) {
      setTimeout(() => {
        console.log(num);
        countdown(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  };
  
  countdown(10, () => {
    setTimeout(() => {
      console.log("Happy Independence Day");
    }, 1000);
  });
  
 
 
 
 