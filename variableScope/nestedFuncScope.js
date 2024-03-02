function first(){
    const firstVariable = "first";

    function second(){
        console.log(firstVariable); 
        const secondVariable = "second";
    }

    second();
}

first();