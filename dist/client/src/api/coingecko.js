"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEthUsdPrice = void 0;
const axios_1 = __importDefault(require("axios"));
function getEthUsdPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield axios_1.default.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        return resp.data;
    });
}
exports.getEthUsdPrice = getEthUsdPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29pbmdlY2tvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9hcGkvY29pbmdlY2tvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUF5QjtBQVF6QixTQUFzQixjQUFjOztRQUNsQyxNQUFNLElBQUksR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsOEVBQThFLENBQUMsQ0FBQTtRQUU1RyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDbEIsQ0FBQztDQUFBO0FBSkQsd0NBSUMifQ==