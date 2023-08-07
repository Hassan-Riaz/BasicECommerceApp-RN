import { trigger } from "react-native-haptic-feedback";

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
};

export default {
    lightImpact() {
        trigger("impactLight", options);
    },

    mediumImpact() {
        trigger("impactMedium", options);
    },

    heavyImpact() {
        trigger("impactHeavy", options);
    },

    soft() {
        trigger("soft", options);
    },

    rigid() {
        trigger("rigid", options);
    },

    success() {
        trigger("notificationSuccess", options);
    },

    warning() {
        trigger("notificationWarning", options);
    },

    error() {
        trigger("notificationError", options);
    },
}