import firebase from 'firebase/app';
import 'firebase/firestore'
import config from './config'


/*
para configurar o firebase é necessário criar um projeto
no firebase e habilitar o firestore (deixar as regras do firestore abertas) 

criar o arquivo arquivo config.js com sequinte conteúdo
(pode ser copiada a configuração da página seetings do projeto)

export default {
    apiKey: "**************************",
    authDomain: "**************************",
    databaseURL: "**************************",
    projectId: "**************************",
    storageBucket: "**************************",
    messagingSenderId: "**************************",            
    appId: "***********************************"    
};

*/

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

export {
  db,
};