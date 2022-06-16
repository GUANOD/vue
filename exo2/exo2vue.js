Vue.createApp({
  //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
  //Toutes les data seront contenues dans this
  data() {
    return {
      nom: "Emma Roids",
      pic: "https://randomuser.me/api/portraits/women/3.jpg",
      age: 26,
    };
  },
  // Dans cet Object methods, on va écrire nos fonctions
  methods: {
    randomNumber() {
      return Math.floor(Math.random() * 100);
    },
    plusten() {
      return this.age + 10;
    },
  },
  // L'application est montée sur la balise HTML qui possède l'id app
}).mount("#app");
