
var app = new Vue({
  el: '#app',
  data: {
    mail: "",
    mailList: [],
  },
  created: function (){
    // FACCIO 10 CHIAMATE AL SERVER
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail') .then((response) => {
        // SALVO IL RISULTATO DELLA CHIAMATA IN UN DATA
        this.mail = response.data.response;
        this.mailList.push(this.mail);
      });
    }
   }

})
