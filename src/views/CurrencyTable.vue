<template>
  <div style="width: ">
    <currency-table-searchbox :query.sync='userInput' />
    <currency-table-record-counter :recordsCount='this.countCurrencies' />
    <currency-table :data=processCurrencies />
  </div>
</template>

<script>
import CurrencyTable from '../components/CurrencyTable/Table';
import CurrencyTableSearchbox from '../components/CurrencyTable/SearchBox';
import CurrencyTableRecordCounter from '../components/CurrencyTable/RecordCounter'

export default {
  components: {
    CurrencyTable,
    CurrencyTableSearchbox,
    CurrencyTableRecordCounter,
  },
  mounted() {
    this.$nbpApi.get('exchangerates/tables/a')
      .then((res) => res.data[0].rates.forEach(v => this.currencies.push(v)))
      .catch((err) => console.log(`Unexpected error: ${err}`));
  },
  data: () => ({
    currencies: [
      { code: "PLN", currency: "złoty polski", mid: 1 },
    ],
    userInput: "",
  }),
  computed: {
    processCurrencies: function() {
      return this.filterCurrencies.sort(this.sortCurrencies);
    },
    countCurrencies: function () {
      return this.processCurrencies.length;
    },
    filterCurrencies: function () {
      return this.currencies.filter(this.filterModels(this.userInput));
    },
  },
  methods: {
      sortCurrencies: function(a, b) {
            return a.code > b.code ? 1: -1;
      },
      filterModels: function (query) {
        return (item) => item.currency.includes(query);
      },
  },
}
</script>