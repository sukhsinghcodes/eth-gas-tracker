"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.userEvent = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@testing-library/react");
const vitest_1 = require("vitest");
(0, vitest_1.afterEach)(() => {
    (0, react_2.cleanup)();
});
function customRender(ui, options = {}) {
    return (0, react_2.render)(ui, Object.assign({ 
        // wrap provider(s) here if needed
        wrapper: ({ children }) => (<react_1.ChakraProvider>{children}</react_1.ChakraProvider>) }, options));
}
exports.render = customRender;
// eslint-disable-next-line react-refresh/only-export-components
__exportStar(require("@testing-library/react"), exports);
var user_event_1 = require("@testing-library/user-event");
Object.defineProperty(exports, "userEvent", { enumerable: true, get: function () { return __importDefault(user_event_1).default; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL3Rlc3QvdXRpbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWlEO0FBQ2pELGtEQUF3RDtBQUN4RCxtQ0FBa0M7QUFFbEMsSUFBQSxrQkFBUyxFQUFDLEdBQUcsRUFBRTtJQUNiLElBQUEsZUFBTyxHQUFFLENBQUE7QUFDWCxDQUFDLENBQUMsQ0FBQTtBQUVGLFNBQVMsWUFBWSxDQUFDLEVBQXNCLEVBQUUsT0FBTyxHQUFHLEVBQUU7SUFDeEQsT0FBTyxJQUFBLGNBQU0sRUFBQyxFQUFFO1FBQ2Qsa0NBQWtDO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsc0JBQWMsQ0FBQyxDQUFDLElBQ3JFLE9BQU8sRUFDVixDQUFBO0FBQ0osQ0FBQztBQU13Qiw4QkFBTTtBQUovQixnRUFBZ0U7QUFDaEUseURBQXNDO0FBQ3RDLDBEQUFrRTtBQUF6RCx3SEFBQSxPQUFPLE9BQWEifQ==