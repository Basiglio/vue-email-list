
var app = new Vue({
  el: '#app',
  data: {
    mail: "",
    mailList: [],
    mailList2: [],
    message_1: "Qui 10 email casuali",
    message_2: "qui premi per generarne altre 10"
  },
  created: function (){
    // FACCIO 10 CHIAMATE AL SERVER
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail') .then((result) => {
        console.log(result);
        // SALVO IL RISULTATO DELLA CHIAMATA IN UN DATA
        this.mail = result.data.response;
        this.mailList.push(this.mail);
      });
    }
  },
  methods:{
    callMail: function (){
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail') .then((result) => {
           this.mail = result.data.response;
           this.mailList2.push(this.mail);
        })
      }
    }
  }
})
