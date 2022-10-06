class CPU {

    $table;
    $tbody;
    $regiters;

    constructor() {

        this.$table = $(".panel-cpu .card-body table");
        this.$tbody = this.$table.find('tbody');

        let value = "0";

        let regiterIds = ["PC", "SR", "R2", "R3", "R4", "R5", "R6"];

        for (const registerId of regiterIds) {

            if (registerId === "SR") {
                this.$tbody.append(`
                    <tr>
                        <td rowspan="2" class="px-3">${registerId}</td>
                        <td class="text-center small my-0 py-0">N</td>
                        <td class="text-center small my-0 py-0">Z</td>
                    </tr>
                    <tr>
                        <td class="text-center small my-0 py-0" id="${registerId}">0</td>
                        <td class="text-center small my-0 py-0" id="${registerId}">0</td>
                    </tr>
                `);
            } else {
                this.$tbody.append(`
                    <tr>
                        <td class="px-3">${registerId}</td>
                        <td class="px-3" id="${registerId}" colspan="2">0</td>
                    </tr>
                `);
            }
        }
    }
}
