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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const Success_1 = __importDefault(require("../animations/Success"));
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const Warning_1 = __importDefault(require("../animations/Warning"));
const Error_1 = __importDefault(require("../animations/Error"));
const Link_1 = __importDefault(require("../animations/Link"));
const Copy_1 = __importDefault(require("../animations/Copy"));
const react_native_keyboard_controller_1 = require("react-native-keyboard-controller");
const Toast = ({ value, text, icon, font, paddingHorizontal, paddingBottom, backgroundColor }) => {
    const insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const { height, progress } = (0, react_native_keyboard_controller_1.useReanimatedKeyboardAnimation)();
    const backgroundAnimation = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            opacity: value.value
        };
    });
    const getIcon = () => {
        switch (icon) {
            case 'success':
                return react_1.default.createElement(Success_1.default, null);
            case 'error':
                return react_1.default.createElement(Error_1.default, null);
            case 'warning':
                return react_1.default.createElement(Warning_1.default, null);
            case 'copy':
                return react_1.default.createElement(Copy_1.default, null);
            case 'link':
                return react_1.default.createElement(Link_1.default, null);
        }
    };
    const bottom = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        const interpolated = (0, react_native_reanimated_1.interpolate)(progress.value, [0, 1], [insets.bottom, 0]);
        return {
            bottom: ((-height.value + interpolated) + (paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : 0))
        };
    });
    return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: [
            Object.assign(Object.assign({}, styles.layout), { paddingHorizontal }),
            bottom,
            backgroundAnimation
        ], pointerEvents: 'none' },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.toast,
                backgroundColor ? {
                    backgroundColor
                } : undefined
            ] },
            getIcon(),
            text && (react_1.default.createElement(react_native_1.Text, { style: [
                    styles.text,
                    {
                        fontFamily: font
                    }
                ] }, text)))));
};
const styles = react_native_1.StyleSheet.create({
    layout: {
        position: 'absolute',
        zIndex: 1000000,
        bottom: 100,
        width: '100%'
    },
    toast: {
        backgroundColor: '#2B2B2B',
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        marginLeft: 8
    }
});
exports.default = Toast;
