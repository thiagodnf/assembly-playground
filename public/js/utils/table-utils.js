class TableUtils {

    static removeAllRows($table){
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
                    <td>${(id+1)}</td>
                </tr>
            `);
        }


        table.find('tbody').append(rows);
    }

    static appendMemoryRow(table, addressAsInt, value, rowspan = 1) {

        let address = addressAsInt.toHex();

        let rows = [`
            <tr>
                <td>${address}</td>
                <td rowspan="${rowspan}">${value}</td>
            </tr>
        ` ];

        for (let i = 1; i < rowspan; i++) {

            let next = (addressAsInt + i).toHex();

            rows.push(`
                <tr>
                    <td>${next}</td>
                </tr>
            `);
        }

        table.find('tbody').append(rows);
    }
}
