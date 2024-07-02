"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const Context_1 = __importDefault(require("./Context"));
const react_native_portalize_1 = require("react-native-portalize");
const Toast_1 = __importDefault(require("./components/Toast"));
const react_native_reanimated_1 = require("react-native-reanimated");
const Provider = ({ children, config }) => {
    const [isOpen, setIsOpen] = (0, react_2.useState)(false);
    const [text, setText] = (0, react_2.useState)(null);
    const [icon, setIcon] = (0, react_2.useState)(null);
    (0, react_2.useEffect)(() => {
        ref.current = {
            show: start
        };
    }, []);
    const value = (0, react_native_reanimated_1.useSharedValue)(0);
    const start = (properties) => {
        if (properties.text)
            setText(properties.text);
        if (properties.icon)
            setIcon(properties.icon);
        startAnimation();
    };
    const startAnimation = () => {
        setIsOpen(true);
        value.value = (0, react_native_reanimated_1.withSequence)((0, react_native_reanimated_1.withTiming)(1, {
            easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.quad),
            duration: 350
        }), (0, react_native_reanimated_1.withDelay)(2500, (0, react_native_reanimated_1.withTiming)(0, {
            easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.quad),
            duration: 350
        }, () => {
            (0, react_native_reanimated_1.runOnJS)(setIsOpen)(false);
        })));
    };
    const ref = (0, react_2.useRef)({
        show: start
    });
    return (react_1.default.createElement(Context_1.default.Provider, { value: ref },
        react_1.default.createElement(react_native_portalize_1.Host, { style: {
                flex: 1
            } },
            react_1.default.createElement(react_native_portalize_1.Portal, null,
                react_1.default.createElement(Toast_1.default, { value: value, text: text, icon: icon, key: String(isOpen), paddingHorizontal: config === null || config === void 0 ? void 0 : config.paddingHorizontal, paddingBottom: config === null || config === void 0 ? void 0 : config.paddingBottom, font: config === null || config === void 0 ? void 0 : config.font, backgroundColor: config === null || config === void 0 ? void 0 : config.backgroundColor })),
            children)));
};
exports.default = Provider;
