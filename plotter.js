function plotgraph() {

    funcinp = document.getElementById("inputfunc").value;
    funcinp.trim();
    if (funcinp.includes("sin")) {                                     //sine
        funcinp = funcinp.replace("sin", "Math.sin");
    };
    if (funcinp.includes("cos")) {                                     //cosine
        funcinp = funcinp.replace("cos", "Math.cos")
    };
    if (funcinp.includes("tan")) {                                     //tangent
        funcinp = funcinp.replace("tan", "Math.tan")
    };
    if (funcinp.includes("^")) {                                       //exponent
        funcinp = funcinp.replace("^", "**")
    };
    if (funcinp.includes("sqrt")) {                                     //square root
        funcinp = funcinp.replace("sqrt", "Math.sqrt")
    };
    if (funcinp.includes("pi")) {                                     //Pi=3.141592653589793238
        funcinp = funcinp.replace("pi", "Math.PI")
    };
    if (funcinp.includes("e")) {                                       //Euler's number --- e=2.71828182845904
        funcinp = funcinp.replace("e", "Math.E")
    };
    if (funcinp.includes("atan")) {                                       //tangent inverse
        funcinp = funcinp.replace("atan", "Math.atan")
    };
    if (funcinp.includes("acos")) {                                       //cosine inverse
        funcinp = funcinp.replace("acos", "Math.acos")
    };
    if (funcinp.includes("asin")) {                                       //sine inverse
        funcinp = funcinp.replace("asin", "Math.asin")
    };
    if (funcinp.includes("abs")) {                                       //modulus or absolute
        funcinp = funcinp.replace("abs", "Math.abs")
    };
    if (funcinp.includes("cbrt")) {                                       //cube root
        funcinp = funcinp.replace("cbrt", "Math.cbrt")
    };
    if (funcinp.includes("log")) {                                       //natural log
        funcinp = funcinp.replace("log", "Math.log")
    };
    if (funcinp.includes("ln")) {                                       //natuarl log
        funcinp = funcinp.replace("ln", "Math.log")
    };
    if (funcinp.includes("log10")) {                                       //log to base 10
        funcinp = funcinp.replace("log10", "Math.log10")
    };
    if (funcinp.includes("Sgn")) {                                       //Signum function
        funcinp = funcinp.replace("Sgn", "Math.sign")
    };

    if (funcinp.includes("[")) {                                       //GIF -Greatest Integer Function
        indexstrt = funcinp.indexOf("[");
        indexend = funcinp.lastIndexOf("]");
        strtkn = funcinp.substring(indexstrt + 1, indexend);
        toreplace = `[${strtkn}]`;
        fnl = "Math.floor(" + strtkn + ")";
        funcinp = funcinp.replace(toreplace, fnl);


    };

    // document.getElementById("fnout").innerHTML=funcinp;

    var datay = [];

    for (i = -1000; i < 1000; i++) {
        x = i / 100;
        yv = eval(funcinp);                                          //evaluating the function and returning y values
        yvu = {
            x: x,
            y: yv
        };
        datay.push(yvu);
    }

    var chart = new CanvasJS.Chart("plotarea", {
        animationEnabled: true,
        zoomEnabled: true,
        backgroundColor: 'rgba(255,255,255,0.3)',
        zoomType: 'xy',
        title: {
            text: "Plotter", //change name later
            fontFamily: "montserrat"
        },
        axisX: {
            gridThickness: 0.5,
            margin: 20
        },
        axisY: {
            gridThickness: 0.5,
            margin: 20,
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