"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🩵", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello am  *𝗥𝗔𝗩𝗘𝗡𝗦 𝗠𝗗* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *мαℓνιη кιηg*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/dc73e16b9988c7c56b56f.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *RAVENS* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Ravens*'
      let varmess=z+d
      var img='https://telegra.ph/file/dc73e16b9988c7c56b56f.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
