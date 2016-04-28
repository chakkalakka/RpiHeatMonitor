function test_old() {
    // Get the Object by ID
    var a = document.getElementById("reservoirObject");
    // Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;
    // Get one of the SVG items by ID;
    var svgItem = svgDoc.getElementById("svg");
    // Set the colour to something else
    //svgItem.setAttribute("fill", "red");
    var dummy = svgItem.style.fill
    if (svgItem.style.fill != "rgb(255, 0, 0)") {
        Velocity(svgItem, {fill: "#ff0000", height: "100", width: "100", stroke: "#00ff00" }, {duration:1000})
    } else {
        Velocity(svgItem, {fill: "#00ffff", stroke: "#00ff00" }, {duration:1000})
    }
    // Not possible to access svg inside an object via jQuery!!!! (jQuery doesn't understand the SVG DOM)
    //$('#rect').velocity({fill: "#ff0000", stroke: "#00ff00" });
}

function test2() {
    // Get the Object by ID
    var a = document.getElementById("reservoirObject");
    // Get the SVG document inside the Object tag
    var dummy = a.getAttribute("data-state")
    var anim = a.contentDocument.getElementById("animation")
    if (dummy == "animated") {
        a.setAttribute("data-state", "still");
        anim[0].endElement();
    } else {
        a.setAttribute("data-state", "animated")
        anim[0].beginElement();
    }
}

function test(num) {
    var wireClass = ".solarCircle" + num;
    var wireCircle = $(wireClass);
    if (wireCircle.hasClass('flow')) {
        wireCircle.removeClass('flow');
    } else {
        wireCircle.addClass('flow');
    }
}

function pump() {
    var pump = $('#pump1');
    //var anim = document.getElementById("animatePump")
    if (pump.hasClass('pumpOn')) {
        pump.removeClass('pumpOn');
        $("#pump1 .animatePump")[0].endElement();
    } else {
        pump.addClass('pumpOn');
        $("#pump1 .animatePump")[0].beginElement();
    }
}

function valve(num) {
    var valve = $("#valve" + num);
    if (valve.hasClass('valveClosed')) {
        valve.removeClass('valveClosed');
    } else {
        valve.addClass('valveClosed');
    }
}

function calcBezierPoints(deg, r) {
    var rad = deg/180*Math.PI;
    var cos = Math.cos(rad/2);
    var sin = Math.sin(rad/2);
    var x0 = cos;
    var y0 = sin;
    var x1 = (4-x0)/3;
    var y1 = (1-x0)*(3-x0)/(3*y0);
    var x2 = x1;
    var y2 = -y1;
    var x3 = x0;
    var y3 = -y0;
    var rx0 = (x0*cos - y0*sin) * r;
    var ry0 = (x0*sin + y0*cos) * r;
    var rx1 = (x1*cos - y1*sin) * r;
    var ry1 = (x1*sin + y1*cos) * r;
    var rx2 = (x2*cos - y2*sin) * r;
    var ry2 = (x2*sin + y2*cos) * r;
    var rx3 = (x3*cos - y3*sin) * r;
    var ry3 = (x3*sin + y3*cos) * r;
    var result = "("+rx0+","+ry0+");("+rx1+","+ry1+");("+rx2+","+ry2+");("+rx3+","+ry3+")";
    alert(result);
}