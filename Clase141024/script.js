//Funciones 
/*function Hello(){
    console.log("hola Js");
    console.log("hola html");
    console.log("hola Css");
}

Hello();
Hello();
Hello();
Hello();
Hello();
Hello();*/

//Retorna una función

/*function hello(){
return "Hola Js";
}

const result= hello();
console.log(result);
hello();*/

//Retorna objeto vacío
/*function hello(){
    return 10 ;
    }

    console.log(hello());*/

//retorna valor del objeto
    /*function hello(){
        return {
            nombre:"Raul"
            }

        }
    
        console.log(hello());*/

        //funión que retorna a otra función
        /*function hello(){
            return function (){
                return "Hola Js"

            }

        }
        console.log(hello()());*/

        //============ USO DE PARAMETROS EN FUNCIONES==============


        /*function helloconJs(name){
            return 'hola' + name

        }
        console.log('Luis');
        console.log('Yael');
        console.log('Charly');
        console.log('Juan');*/

//pasar mas de un parametro a la funcion

/*function helloconJs(x,y){
    return x + y;

}

console.log(helloconJs(10,20));*/

/*function helloconJs(x,y){
    return x - y;

}

console.log(helloconJs(10,20));*/

/*function helloconJs(x,y){
    return x / y;

}

console.log(helloconJs(10,20));*/

/*function helloconJs(x,y){
    return x * y;

}

console.log(helloconJs(10,20));
console.log(helloconJs(10,20));
console.log(helloconJs(10));*/

//control de errores en parametros

/*function helloconJs(x,y){
    if(y== undefined){
        y=0;
    }
    return x + y;

}

console.log(helloconJs(10));*/

/*function helloconJs(x,y=0){
    return x + y;
}
console.log(helloconJs(10));*/

//======= Objetos =========

 const user = {
    nombre : 'Luis',
    apellidoM : 'Flores',
    edad :17,
    edoCivil:'Soltero',
    domicilio : {
    ciudad : 'CDMX',
    calle : 'Lago Athabasca',
    numero : 14807

    },
    amigos:['Juan, Mateo'],
    activo:false,
    sendMensaje: function(){
        return 'enviando msj'
    },
}

//alert cuidad,calle,numero...
// consola, los amigos
// alert (Activo o Dado de baja)
//consola nombre,apellidos,estado civil...!!
//alert (estado del mensaje)
//alert(user.domicilio.ciudad, user.domicilio.calle, user.domicilio.numero);

//console.log(user.amigos, user.nombre, user.apellido, user.edoCivil);

alert(user.sendMensaje(), user.activo);
