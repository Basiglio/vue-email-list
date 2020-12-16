
var app = new Vue({
  el: '#app',
  data: {
    mail: "",
    mailList: [],
  },
  methods:{


  }
})

// FACCIO LA CHIAMATA AL SERVER PER 10 VOLTE
for (var i = 0; i < 10; i++) {
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail') .then(function (response) {
    // SALVO IL RISULTATO DELLA CHIAMATA IN UN DATA
    this.mail = response.data;
    console.log(this.mail);
  });
}
