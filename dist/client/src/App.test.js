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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./test/utils");
const App_1 = require("./App");
describe('App', () => __awaiter(void 0, void 0, void 0, function* () {
    it('should render the App', () => {
        (0, utils_1.render)(<App_1.App />);
        expect(utils_1.screen.getByText('Hello World')).toBeInTheDocument();
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0FwcC50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUE2QztBQUM3QywrQkFBMkI7QUFFM0IsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFTLEVBQUU7SUFDekIsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUMvQixJQUFBLGNBQU0sRUFDSixDQUFDLFNBQUcsQ0FBQyxBQUFELEVBQUcsQ0FDUixDQUFBO1FBQ0QsTUFBTSxDQUFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzdELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9