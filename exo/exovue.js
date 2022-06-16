Vue.createApp({
  //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
  //Toutes les data seront contenues dans this
  data() {
    return {
      vars: ["uneVar", "autreVar"],
      stringvar: "im a string (❁´◡`❁)",
      objvar: {
        hi: "hi",
        hello: "hello",
      },
      random: "default",
    };
  },
  // Dans cet Object methods, on va écrire nos fonctions
  methods: {
    randomString() {
      let rand = Math.random();
      this.random = rand > 0.5 ? "unlucky bro" : "Good news everyone";
    },
  },
  // L'application est montée sur la balise HTML qui possède l'id app
}).mount("#app");
