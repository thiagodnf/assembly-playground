class AssemblyUtils {

    static ID = "[a-zA-Z\\_0-9]+";

    static DEC = "-?[0-9]+";

    static HEX = "0[xX][0-9a-fA-F]+";

    static BIN = "0[bB][01]+";

    static REG = "R[0-9]+";

    static IM = "\\#(?:[DEC]|[HEX]|[BIN])";

    static LABEL = "[ID]\\:";

    static isOnlyLabel(str) {
        return /^[a-zA-Z\_0-9]+\:$/.test(str);
    }

    static isSyntacticallyCorrect(str) {

        if (AssemblyUtils.isOnlyLabel(str)) {
            return true;
        }


        // let regexs = [
        //     AssemblyUtils.LABEL,
        //     ADD.REGEX,
        //     SUB.REGEX,
        //     JMP.REGEX
        // ];

        // for (let regex of regexs) {

        //     regex = regex.replaceAll("[IM]", AssemblyUtils.IM);

        //     regex = regex.replaceAll("[ID]", AssemblyUtils.ID);
        //     regex = regex.replaceAll("[REG]", AssemblyUtils.REG);
        //     regex = regex.replaceAll("[DEC]", AssemblyUtils.DEC);
        //     regex = regex.replaceAll("[HEX]", AssemblyUtils.HEX);
        //     regex = regex.replaceAll("[BIN]", AssemblyUtils.BIN);

        //     regex = `^${regex}$`;


        //     console.debug(regex);

        //     if (new RegExp(regex).test(str)) {
        //         return true;
        //     }
        // }

        return false;
    }

    static getMnemonicAndOperands(str) {

        const parts2 = str.split(/^([a-zA-Z\_0-9]+\:)(.*)$/).map(e => e.trim()).filter(e => e.length !== 0);


        console.debug(parts2);

        // const parts = str.match(/([a-zA-Z\_0-9]+\:?)\s*([a-zA-Z]+)\s+(.*)\s*,?\s*(.*)/);

        // if(!parts){
        //     return "";
        // }

        // console.debug("sdf", parts);

        // return `${parts[1]} ${parts[2]} ${parts[3]} }`
    }

    static ONLY_INSTRUCTION = /^([\w]{2,3})\s+([\#\d\w]+)\s*\,?\s*([\#\d\w]*)$/;

    static LABEL_AND_INSTRUCTION = /^([\w\d\_]*)\:\s+([\w]{2,3})\s+([\#\d\w]+)\s*\,?\s*([\#\d\w]*)$/;

    static ONLY_LABEL = /^([\w\d\_]+)\:$/

    static isOnlyInstruction(str) {
        return AssemblyUtils.ONLY_INSTRUCTION.test(str)
    }

    static isLabelAndInstructions(str) {
        return AssemblyUtils.LABEL_AND_INSTRUCTION.test(str)
    }

    static isOnlyLabel(str) {
        return AssemblyUtils.ONLY_LABEL.test(str)
    }

    static parseToLines(str) {

        return str
            .split("\n")
            .map(e => e.trim())
            .map(e => e.replace(/\;(.*)/g, ''))
            .filter(el => el.length !== 0);
    }

    static compile(text) {

        let lines = AssemblyUtils.parseToLines(text);
        let validLines = [];
        let parsedLines = [];

        lines.forEach((line, i) => {
            if (AssemblyUtils.isOnlyLabel(line)) {
                validLines.push(line);
            } else if (AssemblyUtils.isLabelAndInstructions(line)) {
                validLines.push(line);
            } else if (AssemblyUtils.isOnlyInstruction(line)) {
                validLines.push(line);
            } else {
                throw new Error(`Line ${i + 1} is invalid`);
            }
        });

        validLines.forEach((line, i) => {

            if (AssemblyUtils.isLabelAndInstructions(line)) {

                let parts = line.match(/^([\w\d\_]+\:)(.*)$/);

                parsedLines.push(parts[1].trim())
                parsedLines.push(parts[2].trim())
            }else{
                parsedLines.push(line);
            }
        });

        console.debug(parsedLines);



        return parsedLines;
    }



}
