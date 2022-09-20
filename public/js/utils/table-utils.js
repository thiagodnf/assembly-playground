class TableUtils {

    static removeAllRows($table) {
        $table.find("tbody tr").remove();
    }

    static appendRowCpu(table, id, value) {

        if (id === "SR") {
            value = `N: ${value.n}<span class="mx-3">|</span>Z: ${value.z}`
        }else if (id === "PC") {
            value = ConvertUtils.toUI(value, Settings.getShowMemoryAddressAs());
        }else {
            value = ConvertUtils.toUI(value, Settings.getShowMemoryValueAs());
        }

        table.find('tbody').append(`
            <tr>
                <td class="px-3">${id}</td>
                <td class="px-3" id="${id}">${value}</td>
            </tr>
        `);
    }

    static appendMemoryRow(table, addressAsInt, value, rowspan = 1) {

        let convertedAddress;
        let nextConvertedAddress;

        if (Settings.getShowMemoryAddressAs() == "dec") {
            convertedAddress = addressAsInt;
            nextConvertedAddress = addressAsInt + 1;
        } else if (Settings.getShowMemoryAddressAs() == "hex") {
            convertedAddress = ConvertUtils.toHex(addressAsInt);
            nextConvertedAddress = ConvertUtils.toHex(addressAsInt + 1);
        }

        let rows = [`
            <tr>
                <td class="px-3" data-address="${addressAsInt}">${convertedAddress}</td>
                <td class="px-3" rowspan="${rowspan}">${value}</td>
            </tr>
        ` ];

        for (let i = 1; i < rowspan; i++) {

            rows.push(`
                <tr class="px-3">
                    <td class="px-3">${nextConvertedAddress}</td>
                </tr>
            `);
        }

        table.find('tbody').append(rows);
    }
}
