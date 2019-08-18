### Compilando o Projeto
O projeto está utilizando Firestore para armazenar os dados,
para configurar o firebase é necessário criar um projeto
no firebase e habilitar o firestore (deixar as regras do firestore abertas).
Para compilar o projeto crie o arquivo config em src\services\firebase\config.js com o seguinte padrão (pode ser copiada a configuração da página seetings do projeto):

```javascript
export default {
    apiKey: "**************************",
    authDomain: "**************************",
    databaseURL: "**************************",
    projectId: "**************************",
    storageBucket: "**************************",
    messagingSenderId: "**************************",            
    appId: "***********************************"    
};
```
uma app compilada já acessando uma base firebase pode ser encontrada em: https://hour-of-code-project-todo.web.app/