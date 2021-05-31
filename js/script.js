//prompt e-mail
var addressMails = ['perizat.shatyrbekova@gmail.com', 'hey@mail.ru', 'perlas@gmail.com', 'boolean@gmail.com', 'atom@yandex.ru' ];

var mail = prompt ('Inserire la Sua e-mail');
var check = false;

for (var y = 0; y < addressMails.length; y++) {
    if(addressMails [y] === mail) {
        check = true;
    }
}

//risultato 

if (check) {
    document.getElementById('start').innerHTML += 'Lei è il nostro cliente!';
} else {
    document.getElementById('start').innerHTML += 'Si chiede di registrarsi con l\'e-mail!';
}