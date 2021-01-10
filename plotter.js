function plotgraph(){

    funcinp=document.getElementById("inputfunc").value;
    funcinp.strip();
    if(funcinp.includes("sin")){
        funcinp.replace("sin","Math.sin")
    };
    if(funcinp.includes("cos")){
        funcinp.replace("cos","Math.cos")
    };
    if(funcinp.includes("tan")){
        funcinp.replace("tan","Math.tan")
    };
    if(funcinp.includes("^")){
        funcinp.replace("^","**")
    };
    if(funcinp.includes("sqrt")){
        funcinp.replace("sqrt","Math.sqrt")
    };
    
}