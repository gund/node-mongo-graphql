/**
 * Created by alex on 8/13/2016.
 */
"use strict";
var body_parser_1 = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var graffiti_1 = require('@risingstack/graffiti');
var graffiti_mongoose_1 = require('@risingstack/graffiti-mongoose');
var mongoose_1 = require("./config/mongoose");
var User_1 = require("./app/model/User");
mongoose.connect(mongoose_1.URI, function (error) { return console.log(error); });
var port = process.env.PORT || 8080;
var app = express();
app.use(body_parser_1.json());
app.use(graffiti_1.default.express({
    schema: graffiti_mongoose_1.getSchema([User_1.default])
}));
var router = express.Router();
app.listen(port);
console.log("App listening on port " + port);
//# sourceMappingURL=server.js.map