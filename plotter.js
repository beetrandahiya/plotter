function plotgraph() {

    funcinp = document.getElementById("inputfunc").value;
    funcinp.trim();
    if (funcinp.includes("sin")) {                                     //sine
        funcinp = funcinp.replaceAll("sin", "Math.sin");
    };
    if (funcinp.includes("cos")) {                                     //cosine
        funcinp = funcinp.replaceAll("cos", "Math.cos")
    };
    if (funcinp.includes("tan")) {                                     //tangent
        funcinp = funcinp.replaceAll("tan", "Math.tan")
    };
    if (funcinp.includes("^")) {                                       //exponent
        funcinp = funcinp.replaceAll("^", "**")
    };
    if (funcinp.includes("sqrt")) {                                     //square root
        funcinp = funcinp.replaceAll("sqrt", "Math.sqrt")
    };
    if (funcinp.includes("pi")) {                                     //Pi=3.141592653589793238
        funcinp = funcinp.replaceAll("pi", "Math.PI")
    };
    if (funcinp.includes("e")) {                                       //Euler's number --- e=2.71828182845904
        funcinp = funcinp.replaceAll("e", "Math.E")
    };
    if (funcinp.includes("atan")) {                                       //tangent inverse
        funcinp = funcinp.replaceAll("atan", "Math.atan")
    };
    if (funcinp.includes("acos")) {                                       //cosine inverse
        funcinp = funcinp.replaceAll("acos", "Math.acos")
    };
    if (funcinp.includes("asin")) {                                       //sine inverse
        funcinp = funcinp.replaceAll("asin", "Math.asin")
    };
    if (funcinp.includes("abs")) {                                       //modulus or absolute
        funcinp = funcinp.replaceAll("abs", "Math.abs")
    };
    if (funcinp.includes("cbrt")) {                                       //cube root
        funcinp = funcinp.replaceAll("cbrt", "Math.cbrt")
    };
    if (funcinp.includes("log")) {                                       //natural log
        funcinp = funcinp.replaceAll("log", "Math.log")
    };
    if (funcinp.includes("ln")) {                                       //natuarl log
        funcinp = funcinp.replaceAll("ln", "Math.log")
    };
    if (funcinp.includes("log10")) {                                       //log to base 10
        funcinp = funcinp.replaceAll("log10", "Math.log10")
    };
    if (funcinp.includes("Sgn")) {                                       //Signum function
        funcinp = funcinp.replaceAll("Sgn", "Math.sign")
    };

    if (funcinp.includes("[")) {                                       //GIF -Greatest Integer Function
        indexstrt = funcinp.indexOf("[");
        indexend = funcinp.lastIndexOf("]");
        strtkn = funcinp.substring(indexstrt + 1, indexend);
        toreplace = `[${strtkn}]`;
        fnl = "Math.floor(" + strtkn + ")";
        funcinp = funcinp.replaceAll(toreplace, fnl);


    };

     var dmnstart=parseInt(document.getElementById("dmnstart").value);
     var dmnend=parseInt(document.getElementById("dmnend").value);
     dmnstart=dmnstart*100;
     dmnend=dmnend*100;


    var datay = [];

    for (i = dmnstart; i < dmnend; i++) {
        x = i / 100;
        yv = eval(funcinp);                                          //evaluating the function and returning y values
        if(yv==Infinity){
            yvu = {
                x: x,
                y: null
            };

        }
        else{
        yvu = {
            x: x,
            y: yv
        };
    }
        datay.push(yvu);
        //console.log(datay[i]);
    }
    
    window.chart = new CanvasJS.Chart("plotarea", {
        animationEnabled: true,
        zoomEnabled: true,
        backgroundColor: '#fcfcfc',
        zoomType: 'xy',
        title: {
            
        },
        axisX: {
            gridThickness: 0.5,
            margin: 20
        },
        axisY: {
            gridThickness: 0.5,
            margin: 20
        },

        data: [{
            type: "spline",
            lineThickness: 3,
            color: "rgba(255,215,0,0.9)", //change later
            dataPoints: datay
        }]

    })

    
    chart.render();

}
function changecolor(){
    grphcolor=document.getElementById("color_select").value;
    chart.options.data[0].color=grphcolor;
    chart.render();



}


