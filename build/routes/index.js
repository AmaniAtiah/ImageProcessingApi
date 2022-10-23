"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('<p><a href="/api/images?filename=encenadaport">/api/images?filename=encenadaport</p></a><p><a href="/api/images?filename=encenadaport&width=100&height=100">/api/images?filename=encenadaport&width=100&height=100</p></a>');
});
routes.use('/api/images', images_1.default);
exports.default = routes;
