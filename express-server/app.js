
var express = require("express"), cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors()); // para usar mi puerto 3000
app.listen(3000, () => console.log("Server running on port 3000"));

/*app.get("/url", (req, res, next) => res.json(["Paris", "Atenas", "Praga", "Montevideo",
    "Santiago de Chile", "CDMX", "Nueva York"]));
    */

var ciudades = ["Paris", "Atenas", "Praga", "Montevideo",
    "Santiago de Chile", "CDMX", "Nueva York"];
app.get("/ciudades", (req, res, next) => res.json(ciudades.filter((c) => c.toLowerCase().indexOf(
    req.query.q.toString().toLowerCase()) > -1)));

var misDestinos = [];
app.get("/my", (req, res, next) => res.json(misDestinos));
app.post("/my", (req, res, next) => {
    console.log(req.body);
    //misDestinos = req.body;
    misDestinos.push(req.body.nuevo);
    res.json(misDestinos);
});

app.get("/api/translation", (req, res, next) => res.json([
    { lang: req.query.lang, key: 'HOLA', value: 'HOLA ' + req.query.lang }
]));

