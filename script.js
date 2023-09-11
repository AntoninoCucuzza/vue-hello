/* 

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.

*/
const { createApp } = Vue
    
createApp({
    data() {
        return {
        message: '(☞ﾟヮﾟ)☞ HELLO WORLD ☜(ﾟヮﾟ☜)',
        image:'avatar.jpg',
        img: 'https://picsum.photos/200/300',
    }
}
}).mount('#app')
