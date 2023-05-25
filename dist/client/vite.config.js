"use strict";
/// <reference types="vitest" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml0ZS5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jbGllbnQvdml0ZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQzs7Ozs7QUFFaEMsK0JBQW1DO0FBQ25DLHdFQUF3QztBQUV4Qyw2QkFBNkI7QUFDN0Isa0JBQWUsSUFBQSxtQkFBWSxFQUFDO0lBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUEsc0JBQUssR0FBRSxDQUFDO0lBQ2xCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxJQUFJO1FBQ2IsV0FBVyxFQUFFLE9BQU87UUFDcEIsVUFBVSxFQUFFLHFCQUFxQjtLQUNsQztDQUNGLENBQUMsQ0FBQSJ9