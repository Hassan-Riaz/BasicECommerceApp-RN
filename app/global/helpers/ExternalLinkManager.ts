import { Linking, Platform } from "react-native";

export default {
    call(phoneNumber: string) {
        Linking.openURL(`tel:${phoneNumber}`)
    },
    singleSMS(phoneNumber: string, text: string = '') {
        const url = (Platform.OS === 'android')
            ? `sms:${phoneNumber}?body=${text}`
            : `sms:/open?addresses=${phoneNumber}&body=${text}`;
        Linking.openURL(url);
    },
    multipleSMS(phones: string[], text: string = '') {
        let numbers = phones.join(',');
        const url = (Platform.OS === 'android')
            ? `sms:${numbers}?body=${text}`
            : `sms:/open?addresses=${numbers}&body=${text}`;
        Linking.openURL(url);
    },
    singleMail(param:{
        email: string;
        subject?: string;
        body?: string;
    }) {
        let url = `mailto:${param.email}`;
        let params: string[] = []
        if(param.subject) {
            params.push('subject=' + param.subject);
        }
        if (param.body) {
            params.push('body=' + param.body);
        }
        Linking.openURL(url + (params.length > 0 ? '?' + params.join('&'): ''))
    },
    multipleMail(param: {
        emails: string[];
        subject?: string;
        body?: string;
    }) {
        let url = `mailto:${param.emails.join(',')}`;
        let params: string[] = []
        if (param.subject) {
            params.push('subject=' + param.subject);
        }
        if (param.body) {
            params.push('body=' + param.body);
        }
        Linking.openURL(url + (params.length > 0 ? '?' + params.join('&') : ''))
    },
    searchonMap(searchQuery: string) {
        const url = Platform.OS == 'ios' ? `maps:0,0?q=${searchQuery}` : `geo:0,0?q=${searchQuery}`;
        Linking.openURL(url);
    },
    openUrl(url: string) {
        let rUrl = url.toLowerCase()
        if (!rUrl.startsWith('http')) {
            rUrl = 'https://' + rUrl;
        }
        Linking.openURL(rUrl)
    }
}