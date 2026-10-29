"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Context_1 = __importDefault(require("./Context"));
const useToast = () => {
    const toast = (0, react_1.useContext)(Context_1.default);
    if (!toast)
        throw new Error('useToast must be used inside <Provider> from react-native-beautiful-toasts');
    return toast;
};
exports.default = useToast;
