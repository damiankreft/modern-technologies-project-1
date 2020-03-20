<template>
  <!-- Tutaj komponent MickeyMouse możemy wywołać jako <MickeyMouse> ale dobrą praktyką jest zamienić to na małe litery
       rozdzielone myślnikami, czyli <mickey-mouse> -->
  <mickey-mouse :data=currencies />
</template>

<script>
// Zwróć uwagę, że nazwa pliku może być inna niż nazwa importu, ale niżej musimy konsekwentnie nazwać tak samo komponent
import MickeyMouse from '../components/CurrencyTable/Table';

export default {
  components: {
    MickeyMouse,
  },
  data: () => ({ // Jest to tzw. "fat arrow", czyli odpowiednik function, patrz poniższy przykład
    currencies: [
      { code: 'PLN', currency: 'złoty polski', mid: 1 },
      { code: 'EUR', currency: 'euro', mid: 4.39 },
      { code: 'PLN', currency: 'złoty polski', mid: 1 },
      { code: 'USD', currency: 'dolar amerykański', mid: 3.92 },
      { code: 'PLN', currency: 'złoty polski', mid: 1 },
      { code: 'PLN', currency: 'złoty polski', mid: 1 }, // Zwróć uwagę co się dzieje gdy wpisy się powtarzają
    ],
  }),
  /**
   * Który zapis jest najwygodniejszy?
   *
   * function () {           vs     () => ({              vs     () => ({ currencies: [] })
   *   return {                       currencies: [],
   *     currencies: [],            })
   *   };
   * }
   *
   * Zauważ, że zapisy środowy i prawy są takie same, kwestia formatowania.
   */
  mounted() { // To jest funkcja wywoływana po "zamontowaniu" elementu w DOMie strony
    this.$nbpApi.get('exchangerates/tables/a') // Tutaj wywołujemy zapytanie o tabelę kursów, otrzymujemy Promisę
      .then((res) => { this.currencies = res.data[0].rates; }) // Tutaj rozwiązujemy Promisę w przypadku powodzenia
      .catch((err) => console.log(`Coś się zepsuło?! ${err}`)); // Tutaj rozwiązujemy Promisę gdy nastąpi błąd
  },
  /**
   * Zwróć uwagę co się stało z wpisami podanymi wyżej.
   */
};
</script>
