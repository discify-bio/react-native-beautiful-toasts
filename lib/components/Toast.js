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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_native_keyboard_controller_1 = require("react-native-keyboard-controller");
const blur_1 = require("@react-native-community/blur");
const Icon_1 = __importDefault(require("./Icon"));
const DEFAULT_BACKGROUND = '#2B2B2B';
const isIOS = react_native_1.Platform.OS === 'ios';
const Toast = ({ value, text, icon, numberOfLines, font, paddingHorizontal, paddingBottom = 0, backgroundColor = DEFAULT_BACKGROUND, tintOpacity = 0.25 }) => {
    const insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const { height, progress } = (0, react_native_keyboard_controller_1.useReanimatedKeyboardAnimation)();
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        const safeArea = (0, react_native_reanimated_1.interpolate)(progress.get(), [0, 1], [insets.bottom, 0]);
        return {
            opacity: value.get(),
            bottom: Math.abs(height.get()) + safeArea + paddingBottom
        };
    });
    return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: [styles.layout, { paddingHorizontal }, animatedStyle] },
        react_1.default.createElement(react_native_1.View, { style: [styles.toast, isIOS ? styles.glass : { backgroundColor }] },
            isIOS && (react_1.default.createElement(react_native_1.View, { style: styles.glassClip },
                react_1.default.createElement(blur_1.BlurView, { style: react_native_1.StyleSheet.absoluteFill, blurType: 'ultraThinMaterialDark', blurAmount: 25 }),
                react_1.default.createElement(react_native_1.View, { style: [styles.glassTint, { backgroundColor, opacity: tintOpacity }] }))),
            icon && react_1.default.createElement(Icon_1.default, { icon: icon }),
            !!text && (react_1.default.createElement(react_native_1.Text, { numberOfLines: numberOfLines, style: [styles.text, { fontFamily: font }] }, text)))));
};
const styles = react_native_1.StyleSheet.create({
    layout: {
        position: 'absolute',
        zIndex: 1000000,
        width: '100%',
        pointerEvents: 'none'
    },
    toast: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    glass: {
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
    glassClip: Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { borderRadius: 16, borderWidth: react_native_1.StyleSheet.hairlineWidth, borderColor: 'rgba(255, 255, 255, 0.3)', overflow: 'hidden' }),
    glassTint: react_native_1.StyleSheet.absoluteFillObject,
    text: Object.assign({ color: '#ffffff', flexShrink: 1 }, react_native_1.Platform.select({
        ios: {
            flex: 1,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            letterSpacing: -0.16
        },
        default: {
            marginLeft: 8
        }
    }))
});
exports.default = Toast;
