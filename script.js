// Intro
alert ("Ciao , sono Cristian uno studente di Boolean, ti vorrei fare delle domande cosi ti posso creare una FAKEpassword");
// Dati
var nome = prompt ('Inserisci il tuo Nome, sempre se te lo ricordi.');
alert ('Ciao , bentrovato ' + nome);
console.log (nome);
var cognome = prompt ('Inserisci il tuo Cognome, almeno questo te lo ricordi.');
alert ('Ahhhh , che bel cognome ' + "" + cognome);
console.log (cognome);
var colore = prompt ('Quale e il tuo colore preferito? ... il mio e Nero.')
alert ('Uhhh , complimenti!');
console.log (colore);
var eta = prompt ('Ti ricordi quanti anni hai?');
var data_nascita = 2019 - eta;
alert ('Allora sei nato nel ' + data_nascita);
console.log (eta);
// RISULTATO FINALE
console.log (nome + cognome + colore + eta);
alert ('La tua fakepassword: ' + nome + cognome +colore +eta);
