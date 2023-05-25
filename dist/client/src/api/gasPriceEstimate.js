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
exports.getGasPriceEstimate = void 0;
const axios_1 = __importDefault(require("axios"));
function getGasPriceEstimate() {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield axios_1.default.get('https://api.ethgasstation.info/api/fee-estimate');
        return resp.data;
    });
}
exports.getGasPriceEstimate = getGasPriceEstimate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FzUHJpY2VFc3RpbWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvYXBpL2dhc1ByaWNlRXN0aW1hdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBbUMxQixTQUFzQixtQkFBbUI7O1FBQ3ZDLE1BQU0sSUFBSSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO1FBQy9FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0NBQUE7QUFIRCxrREFHQyJ9