class TableUtils {

    static removeAllRows($table) {
        $table.find("tbody tr").remove();
    }

    static appendRowCpu(table, id, value) {

        table.find('tbody').append(`
            <tr>
                <td>${id}</td>
                <td id="${id}">${value}</td>
            </tr>
        `);
    }

    static appendRowSpan(table, id, value, rowspan = 1) {

        let rows = [`
            <tr>
                <td>${id}</td>
                <td id="${id}" rowspan="${rowspan}">${value}</td>
            </tr>
        ` ];

        for (let i = 1; i < rowspan; i++) {
            rows.push(`
                <tr>
                    <td>${(id + 1)}</td>
                </tr>
            `);
        }


        table.find('tbody').append(rows);
    }

    static appendMemoryRow(table, addressAsInt, value, rowspan = 1) {

        let convertedAddress;
        let nextConvertedAddress;

        if (Settings.getMemoryAddressAs() === "decimal") {
            convertedAddress = addressAsInt;
            nextConvertedAddress = addressAsInt + 1;
        } else if (Settings.getMemoryAddressAs() === "hex") {
            convertedAddress = ConvertUtils.toHex(addressAsInt);
            nextConvertedAddress = ConvertUtils.toHex(addressAsInt + 1);
        }

        let rows = [`
            <tr>
                <td>${convertedAddress}</td>
                <td rowspan="${rowspan}">${value}</td>
            </tr>
        ` ];

        for (let i = 1; i < rowspan; i++) {

            // let next = (address + i).toHex();
            // let next = address;

            rows.push(`
                <tr>
                    <td>${nextConvertedAddress}</td>
                </tr>
            `);
        }

        table.find('tbody').append(rows);
    }
}
