function plotgraph() {

    funcinp = document.getElementById("inputfunc").value;
    funcinp.trim();
    if (funcinp.includes("sin")) {
        funcinp=funcinp.replace("sin", "Math.sin");
    };
    if (funcinp.includes("cos")) {
        funcinp=funcinp.replace("cos", "Math.cos")
    };
    if (funcinp.includes("tan")) {
        funcinp=funcinp.replace("tan", "Math.tan")
    };
    if (funcinp.includes("^")) {
        funcinp=funcinp.replace("^", "**")
    };
    if (funcinp.includes("sqrt")) {
        funcinp=funcinp.replace("sqrt", "Math.sqrt")
    };
    if (funcinp.includes("pi")) {
        funcinp=funcinp.replace("pi", "Math.PI")
    };
    if (funcinp.includes("e")) {
        funcinp=    funcinp.replace("e", "Math.E")
    };

    // document.getElementById("fnout").innerHTML=funcinp;

    var datay = [];

    for (i = -1000; i < 1000; i++) {
        x = i / 100;
        yv = eval(funcinp);
        yvu = {
            x: x,
            y: yv
        };
        datay.push(yvu);
    }

    var chart = new CanvasJS.Chart("plotarea", {
        animationEnabled: true,
        zoomEnabled: true,
        zoomType: 'xy',
        title:{
            text:"Plotter",   //change name later
            fontFamily:"monospace"
        },
        axisX:{
            gridThickness:0.5,
            margin:20
        },
        axisY:{
            gridThickness:0.5,
            margin:20,
        },

        data:[
            {
                type:"spline",
                lineThickness:3,
                color:"rgba(255,215,0,0.9)",  //change later
                dataPoints: datay
            }
        ]

    })

    chart.render();

}