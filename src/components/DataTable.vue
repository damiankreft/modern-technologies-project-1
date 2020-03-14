<!-- component template -->
<script type="text/x-template" id="grid-template">
    <table>
        <thead>
            <tr>
                <th v-for="key in columns">
                    {{ key }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredHeroes">
                <td v-for="key in columns">
                    {{entry : key}}
                </td>
            </tr>
        </tbody>
    </table>
</script>