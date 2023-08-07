import { RegexValidator } from "./RegexValidator";

export default {
    /**
     * format the number accordingly
     **/
    number(value: string): string {
        return value.match(/.{1,4}/g)?.join(' ') || '';
    },
    /**
     * Its generic function which formats according to data
     * Returns string into human readable formatted 
     **/
    format(value: string) {
        return this.number(value);
    },
    /**
     * clear the applied formatting on string
     **/
    clear(text: string) {
        return text.trim().split(' ').join('');
    }
}