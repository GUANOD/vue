Vue.createApp({
  //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
  //Toutes les data seront contenues dans this
  data() {
    return {
      ipt1: "",
      ipt2: "",
    };
  },
  // Dans cet Object methods, on va écrire nos fonctions
  methods: {
    say(msg, msg2) {
      alert(msg);
      alert(msg2);
    },

    inputOne(event) {
      this.ipt1 = event.target.value;
    },
    inputTwo(event) {
      this.ipt2 = event.target.value;
    },
  },
  // L'application est montée sur la balise HTML qui possède l'id app
}).mount("#app");
