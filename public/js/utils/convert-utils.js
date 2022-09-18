class ConvertUtils {

    static isHex(valueAsInt) {
        return /^0[xX][0-9a-fA-F]+$/.test(valueAsInt)
    }

    static isBinary(valueAsInt) {
        return /^0[bB][0-9a-fA-F]+$/.test(valueAsInt)
    }

    static toHex(valueAsInt) {
        return "0x" + valueAsInt.toString(16).toUpperCase();
    }

    static toInt(value) {

        if (ConvertUtils.isBinary(value)) {

            value = value.replace(/0[bB]/g, "");

            if (value.startsWith("1")) {

                const flipped = ConvertUtils.flip(value);

                return -1 * (Number("0b" + flipped) + 1);
            }

            return parseInt(value, 2);
        }
    }

    static flip(str) {
        return str.split('').map(b => (1 - b).toString()).join('');
    }

    /**
     * To Binary by using Two's complement
     * @param {*} value
     * @param {*} bitCount
     * @returns
     */
    static toBinary(value, bitCount = 4) {

        let binaryStr;

        if (value >= 0) {
            let twosComp = value.toString(2);
            binaryStr = ConvertUtils.padAndChop(twosComp, '0', (bitCount || twosComp.length));
        } else {

            binaryStr = (Math.pow(2, bitCount) + value).toString(2);

            if (Number(binaryStr) < 0) {
                return undefined
            }
        }

        return `0b${binaryStr}`;
    }

    static padAndChop(str, padChar, length) {
        return (Array(length).fill(padChar).join('') + str).slice(length * -1);
    }
}
