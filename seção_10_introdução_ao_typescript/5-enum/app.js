var Boat;
(function (Boat) {
    Boat[Boat["Motor"] = 2] = "Motor";
    Boat[Boat["Proa"] = 1] = "Proa";
    Boat[Boat["Poupa"] = 1] = "Poupa";
})(Boat || (Boat = {}));
;
var numeroDeMotores = Boat.Motor;
console.log(numeroDeMotores);
console.log(Boat);
