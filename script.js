function calculateLinolium() {
    //mainīgo definēšana
    let roomWidht = parseFloat(document.getElementById("roomWidth").value);
    let roomLength = parseFloat(document.getElementById("roomLength").value);
    let linoliumWidth = parseFloat(document.getElementById("linoliumWidth").value);
    let linoliumPrice = parseFloat(document.getElementById("linoliumPrice").value);

    //datu ievades pārbaude


    //rēķināšana šķērsām
    let stripsNeededCross = Math.ceil(roomLength / linoliumWidth);
    let linoliumLenghtCross = stripsNeededCross * roomWidht;
    let linoliumAreaCross = linoliumLenghtCross * linoliumWidth;
    let costCross = linoliumAreaCross * linoliumPrice;
    let wasteCross = linoliumAreaCross - (roomLength * roomWidht);
    let wasteCostCross = wasteCross * linoliumPrice;


    //rēķināšana gareniski



    //izvade
    document.getElementById("longCross").value = linoliumLenghtCross.toFixed(2) + 'm';


}