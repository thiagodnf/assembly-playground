class ConvertUtils {

    static isHex(value) {
        return /^0[xX][0-9a-fA-F]+$/.test(value)
    }

    static isBinary(value) {
        return /^0[bB][0-9a-fA-F]+$/.test(value)
    }

    static toHex(value) {
        return "0x" + value.toString(16).toUpperCase();
    }

    static toBinary(value) {

        let output = "";

        for (let bit = BITS - 1; bit >= 0; bit--) {   // print each bit
            let mask = (1 << bit);                   // only this bit is set
            let biti = mask & value;                      // extract this bit from i
            if (biti != 0)
                output += "1";
            else
                output += "0";
        }

        return "0b" + output;
    }
}
