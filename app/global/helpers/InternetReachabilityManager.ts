import NetInfo, { NetInfoChangeHandler } from "@react-native-community/netinfo";

export default {
    addEventListener(addEventListener: NetInfoChangeHandler) {
        return NetInfo.addEventListener(addEventListener);
    },
    async isInternetReachable() {
        return (await NetInfo.fetch()).isConnected || false;
    }
}