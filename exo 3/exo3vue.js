Vue.createApp({
  //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
  //Toutes les data seront contenues dans this
  data() {
    return {
      number: 0,
    };
  },
  // Dans cet Object methods, on va écrire nos fonctions
  methods: {
    addNumber() {
      this.number += 1;
    },
    delNumber() {
      this.number -= 1;
    },
  },
  // L'application est montée sur la balise HTML qui possède l'id app
}).mount("#app");
