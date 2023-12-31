"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lottie_react_native_1 = __importDefault(require("lottie-react-native"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Error = ({ style }) => {
    return (react_1.default.createElement(lottie_react_native_1.default, { source: require('../../lottie/error.json'), autoPlay: true, style: [styles.view, style], loop: false }));
};
const styles = react_native_1.StyleSheet.create({
    view: {
        width: 25,
        height: 25
    }
});
exports.default = Error;
