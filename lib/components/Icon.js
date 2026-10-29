"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lottie_react_native_1 = __importDefault(require("lottie-react-native"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const sources = {
    success: require('../../lottie/success.json'),
    warning: require('../../lottie/warning.json'),
    error: require('../../lottie/error.json'),
    link: require('../../lottie/link.json'),
    copy: require('../../lottie/copy.json')
};
const Icon = ({ icon }) => {
    return (react_1.default.createElement(lottie_react_native_1.default, { source: sources[icon], autoPlay: true, loop: false, style: styles.view }));
};
const styles = react_native_1.StyleSheet.create({
    view: {
        width: 25,
        height: 25
    }
});
exports.default = Icon;
