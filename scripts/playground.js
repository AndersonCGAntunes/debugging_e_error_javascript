
function validaArray(arr, num){
    try {
        if (!arr && !num) {
            throw new ReferenceError("Envie os parâmetros.");
        }
        if (typeof arr !== 'object') {
            throw new TypeError("Array precisa ser do tipo object.");
        }
        if (typeof num !== 'number') {
            throw new TypeError("'Num' precisa ser do tipo number.");
        }
        if (arr.length !== num) {
            throw new RangeError("Tamanho inválido!");
        }
        document.getElementById("paragrafo").textContent = arr;
        //return arr;
        console.log(arr);
    } catch (e) {
        if (e instanceof ReferenceError) {
            //console.log(e.name);
            //console.log(e.stack);
            console.log("Esse erro é um ReferenceError");
            console.log(e.message);
            document.getElementById("paragrafo").textContent = "Esse erro é um ReferenceError. Mensagem: " + e.message;
        } else if (e instanceof TypeError) {
            console.log("Esse erro é um TypeError");
            console.log(e.message);
            document.getElementById("paragrafo").textContent = "Esse erro é um TypeError. Mensagem: " + e.message;
        } else if (e instanceof RangeError) {
            console.log("Esse erro é um RangeError");
            console.log(e.message);
            document.getElementById("paragrafo").textContent = "Esse erro é um RangeError. Mensagem: " + e.message;
        } else {
            console.log("Tipo de erro não esperado: " + e);
            document.getElementById("paragrafo").textContent = "Tipo de erro não esperado: " + e;
        }
    }
}
