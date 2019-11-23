var animalData = require("../data/animalData");

module.exports = function(app) {
    app.get(
        "/api/data",
        function(req, res) {
            console.log(`Received a ${req.method} request from ${req.url}`)
            res.json(animalData)
        }
    )

    app.post(
        "/api/data",
        function(req, res) {
            console.log(`Received a ${req.method} request from ${req.url}`)
            console.log(req.body)
            animalData.push(req.body);
            res.json({ok: true})
        }
    )
}
