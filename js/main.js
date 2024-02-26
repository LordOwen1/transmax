function Saludo() {
    alert("Hello World")
}
function Suma(){
    //declaramos las variables necesarias
    let A=0;
    let B=0;
    let S=0;
    //solicitamos los valores y los asignamos en las variables
    A= parseInt(prompt("porfavor ingrese el primer valor"))
    B= parseInt(prompt("porfavor ingrese el segundo valor"))
    //realizamos las operaciones necesarias 
    S= A + B;
    //mostramos el resultado en pantalla 
    alert(" el resultado de la suma es: " + S)
    
}
function OPERACIONESBASICAS(){
    //declaramos variables necesarias
    let N1=0
    let N2=0
    let R=0
    let S=0
    let M=0
    let D=0
    //solicitamos los valores y los asignamos en las variables
    N1= parseInt(prompt("ingresa el primer numero"))
    N2= parseInt(prompt("ingresa el segundo numero"))
    //realizamos las operaciones 
    R= N1 - N2
    S= N1 + N2
    M= N1 * N2
    D= N1 / N2
    //mostramos los resultados en pantalla
    alert("el resultado de la resta es: "+R+" el resultado de la sumas es: "+S+" el resultado de la divicion es: "+D+" el resultado de la multiplicacion es: "+M)
}

function CONVERSIONDEMEDIDAS(){
    //declaramos variables necesarias 
    let M=0
    let P=0
    let C=0
    //solicitamos los valores y los asignamos en las variables
    M= parseInt(prompt("ingrese su valor en metros"))
    //realizamos operaciones 
    P= M*39,32
    C= M*100
    //mostramos el resultado en pantalla 
    alert("el resultado en pulgadas es: "+P+" el resultado en centimetros es :"+C);
}
function CUADRADODEUNNUMERO(){
    //declaramos variables necesarias
    let N1=0
    let C=0
    //solicitamos valores y los asignamos en las variables
    N1=parseInt(prompt("ingrese el numero"))
    //realizamos operaciones
    C= N1*N1
    //mostramos el resultado en pantalla
    alert("el cuadrado del numero es :"+C);
}
function PROMEDIOESTUDIANTE(){
    //Declaramos variables necesarias
    let N1=0
    let N2=0
    let N3=0
    let N4=0
    let N5=0
    let N6=0
    let N7=0
    let P=0
    let materia =""
    //solicitamos valores y asignamosen las variables 
    materia=prompt("ingrese la materia")
    N1=parseInt(prompt("primer nota"))
    N2=parseInt(prompt("segunda nota"))
    N3=parseInt(prompt("tercer nota"))
    N4=parseInt(prompt("cuarta nota"))
    N5=parseInt(prompt("quinta nota"))
    N6=parseInt(prompt("sexta nota"))
    N7=parseInt(prompt("septima nota"))
    //realizamos operaciones
    P=(N1+N2+N3+N4+N5+N6+N7)/7
    //mostramos el rasultado en pantalla
    
     if (P >=6)   { alert("aprobo la materia :" + materia + " con : "+ P );}
    else { alert("reprobo la materia con :" + materia + " con : " + P )}
}
function CDT(){
    //declaramos variables necesarias
    let C=0
    let T=0
    let G=0
    let A=0
    //solicitamos valores y asignamos variables
    A=parseInt(prompt("ingrese el numero de años"))
    C=parseInt(prompt("ingrese valor del capital"))
    //realizamos operaciones
    G= (C*0.204)*A
    T= C+G
    //mostramos resultado en pantalla
    alert("su ganacia seria :"*T);
}
function AÑODENACIMIENTO(){
    //Declaremos la variables
    let E=0
    let A=0
    let N=0
    //solicitamos valores y asignamos variables
    E=parseInt(prompt("ingrese su edad"))
    A=parseInt(prompt("ingrese el año actual"))
    //realizamos operaciones
    N=A-E
    //mostramos resultados en pantalla
    alert("su año de nacimiento es :"+N);
}
function AREADEUNTRIANGULO(){
    //Declaramos la variables
    let A=0
    let B=0
    let C=0
    //solicitamos valores y asignamos variables
    A=parseInt(prompt("ingrese la altura"))
    B=parseInt(prompt("ingrese la base"))
    //realizamos las operaciones
    C=(B*A)/2
     //mostramos resultado en pantalla
    alert("el area es :"+C);
}
function MAYORDEDOSNUMEROS(){
    //Declaramos variables
    let N1=0
    let N2=0
    //solicitamos valores y asignamos variables
    N1=parseInt(prompt("ingrese primer numero"))
    N2=parseInt(prompt("ingrese el segundo numero"))
    //realizamos operaciones
    if (N1==N2) {alert("es igual")}
    else {
        if (N1>N2) {alert("el numero mayor es: "+N1)}
        else {alert("el numero mayor es: "+N2)}
    }
}
function MENORDE3NUMEROS(){
    //Declaramos variables
    let N1=0
    let N2=0
    let N3=0
    //solicitamos valores y asignamos variables
    N1=parseInt(prompt("ingrese primero numero a comparar"))
    N2=parseInt(prompt("ingrese segundo numero a comparar"))
    N3=parseInt(prompt("ingrese tercer numero a comparar"))
    //realizamos operaciones
    if (N1==N2 && N2==N3) { 
        alert("son iguales");
   
    }else if (N1<N2 && N1<N3) {alert("el menor es :"+N1)
}else if (N2<N1 && N2<N3) {alert("el menor es :"+N2)}
    else alert("el menor es :"+N3)
}
function PAREIMPAR(){
    //Declaramos variables
    let N1=0
    //solicitamos valores y asignamos variables
    N1=parseInt(prompt("ingresa el numero"))
    //ralizamos operaciones
    if (N1%2==0) {alert("su numero es par")}
    else {alert("su numero es impar")}
}
function FRUTAS(){
    //Declaramos variables
    let F=""
    let P=0
    let k=0
    let A=0
    let T=0
    let Total=0
    // solicitamos valores
    F=prompt("ingrese la fruta")
    K=parseInt(prompt("ingrese el numero de kilos"))
    P=parseInt(prompt("ingrese el precio por kilo"))
    //resultado en pantalla
    
    
    if (F==="manzana"){
        switch (true) {
            case k<3:
                T=P*k;
                A=T*0.02;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                case k<6:
                T=P*k;
                A=T*0.04;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                case k<11:
                T=P*k;
                A=T*0.12;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;

        
            default:
                
                T=P*k;
                A=T*0.18;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                break;
        }
    }
    else if (F==="peras"){
        switch (true) {
            case k<3:
                T=P*k;
                A=T*0.03;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                case k<6:
                T=P*k;
                A=T*0.06;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                case k<11:
                T=P*k;
                A=T*0.12;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;

        
            default:
                
                T=P*k;
                A=T*0.18;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                break;
        }
    }
    else if (F==="sandias"){
        switch (true) {
            case k<3:
                T=P*k;
                A=T*0.06;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                case k<6:
                T=P*k;
                A=T*0.08;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                case k<11:
                T=P*k;
                A=T*0.15;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;

        
            default:
                
                T=P*k;
                A=T*0.20;
                Total=T-A
                alert("El usuario debe pagar: "+ Total);
                alert("el desceunto aplicado fue de: "+A);
                
                break;
                break;
        }
    }

    }


    
        
    
        
        
        
        

        

       

