const myGlobal = 0;

function myFunction() {

    const myNombre = 1;
    console.log(myGlobal);

    function parent(){ // function interna
        const inner = 2;
        console.log(myNombre, myGlobal)

        function child(){
            console.log(inner, myNombre, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();