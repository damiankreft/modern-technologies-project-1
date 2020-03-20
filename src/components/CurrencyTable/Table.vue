<template>
  <table>
    <thead>
    <tr>
      <th>Nazwa waluty</th>
      <th>Kod waluty</th>
      <th>Obecny kurs</th>
    </tr>
    </thead>
    <tbody>
    <!-- Tutaj będziemy robić sztuczkę, czyli od razu na danym komponencie wbijemy pętlę i on będzie się automatycznie
         powtarzał dopóki są elementy w tablicy bazowej -->
    <item v-for='currency in data' :key=currency.code v-bind=currency />
    </tbody>
  </table>
</template>

<script>
import Item from './Item';

export default {
  components: {
    Item,
  },
  props: {
    // Własność (ang. Property, w skrócie "props") to własność komponentu, czyli element, który musii/może przyjąć
    //  aby nim manipulować. Stosuje się je w celu podpowiedzi czego dany komponent oczekuje.
    // Niestety, nie można wypisywać "szczegółów" danej własności, dlatego tutaj podajemy tylko, że oczekujemy tablicy
    //  elementów, natomiast w komponencie `Item` rozbijamy to na konkretne wartości z określonymi typami.
    data: { type: Array, required: true },
  },
};
</script>
