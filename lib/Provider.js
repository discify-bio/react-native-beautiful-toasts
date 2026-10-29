"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_native_1 = require("react-native");
const Context_1 = __importDefault(require("./Context"));
const Toast_1 = __importDefault(require("./components/Toast"));
const react_native_reanimated_1 = require("react-native-reanimated");
const react_native_worklets_1 = require("react-native-worklets");
const Provider = ({ children, config }) => {
    const [toast, setToast] = (0, react_2.useState)(null);
    const lastId = (0, react_2.useRef)(0);
    const value = (0, react_native_reanimated_1.useSharedValue)(0);
    const hide = (0, react_2.useCallback)(() => setToast(null), []);
    const show = (0, react_2.useCallback)((properties) => {
        lastId.current += 1;
        setToast(Object.assign(Object.assign({}, properties), { id: lastId.current }));
        value.set((0, react_native_reanimated_1.withSequence)((0, react_native_reanimated_1.withTiming)(1, {
            easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.quad),
            duration: 350
        }), (0, react_native_reanimated_1.withDelay)(2500, (0, react_native_reanimated_1.withTiming)(0, {
            easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.quad),
            duration: 350
        }, finished => {
            // A cancelled sequence still calls this with finished = false, e.g. when show() is called again mid-toast.
            if (finished)
                (0, react_native_worklets_1.scheduleOnRN)(hide);
        }))));
    }, [hide, value]);
    const methods = (0, react_2.useMemo)(() => ({ show }), [show]);
    return (react_1.default.createElement(Context_1.default.Provider, { value: methods },
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            children,
            toast && (react_1.default.createElement(Toast_1.default, { key: toast.id, value: value, text: toast.text, icon: toast.icon, numberOfLines: toast.numberOfLines, paddingHorizontal: config === null || config === void 0 ? void 0 : config.paddingHorizontal, paddingBottom: config === null || config === void 0 ? void 0 : config.paddingBottom, font: config === null || config === void 0 ? void 0 : config.font, backgroundColor: config === null || config === void 0 ? void 0 : config.backgroundColor, tintOpacity: config === null || config === void 0 ? void 0 : config.tintOpacity })))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports.default = Provider;
