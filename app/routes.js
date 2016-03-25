var FoodOrder = require('./models/foodorder');

function getOrders(res) {
    FoodOrder.find(function (err, orders) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(orders); // return all orders in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all orders
    app.get('/api/food', function (req, res) {
        // use mongoose to get all orders in the database
        getOrders(res);
    });

    // create order and send back all orders after creation
    app.post('/api/food', function (req, res) {

        // create a order, information comes from AJAX request from Angular
        FoodOrder.create({
            name: req.body.name,
            done: false
        }, function (err, order) {
            if (err)
                res.send(err);

            // get and return all the orders after you create another
            getOrders(res);
        });

    });

    // delete a order
    app.delete('/api/food/:food_id', function (req, res) {
        FoodOrder.remove({
            _id: req.params.food_id
        }, function (err, order) {
            if (err)
                res.send(err);

            getOrders(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
