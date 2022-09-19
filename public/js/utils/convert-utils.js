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

    static toInt(str) {

        if (IsUtils.isBin(str)) {

            str = str.replace(/0[bB]/g, "");

            if (str.startsWith("1")) {

                const flipped = ConvertUtils.flip(str);

                return -1 * (Number("0b" + flipped) + 1);
            }

            return parseInt(str, 2);
        } else if (IsUtils.isHex(str)) {
            return parseInt(str, 16);
        }

        return parseInt(str);
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

    static toUI(str, target = "dec") {

        // str = str.replace(/0[bB]/g, "");

        const numberAsInt = ConvertUtils.toInt(str);

        // console.debug(parseInt(numberAsInt, 16));

        if (target === "dec") {
            return numberAsInt;
        } else if (target === "bin") {
            return ConvertUtils.toBinary(str);
        } else if (target === "hex") {
            return ConvertUtils.toHex(str);
        }

        throw new Error(`Number system ${target} not recognized. Try "dec", "bin", "hex"`)
    }
}
