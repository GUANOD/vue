Vue.createApp({
  //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
  //Toutes les data seront contenues dans this
  data() {
    return {
      number: 0,
      msg: "ESSAIE ENCORE",
    };
  },
  // Dans cet Object methods, on va écrire nos fonctions

  watch: {
    number(value) {
      if (value == 7) {
        this.msg = 7;
      } else if (value > 7) {
        this.msg = "Tu as dépassé le Nb Mystère ";
      }
    },
  },
  // L'application est montée sur la balise HTML qui possède l'id app
}).mount("#app");
