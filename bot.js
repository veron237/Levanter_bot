''

```js
const { cmd } = require("../lib"); // adapte selon ta lib

// Commande menu
cmd({
  pattern: "menu",
  fromMe: true,
  desc: "Afficher le menu des commandes",
  type: "command",
}, async (message, match) => {
  const menuText = `
*Menu Levanter Bot*
1. Voir les statuts : *status*
2. Liker un statut : *like ❤️*
3. Envoyer une image : *sendimg*
  `;
  await message.sendMessage(menuText);
});

// Commande voir les statuts
cmd({
  pattern: "status",
  fromMe: true,
  desc: "Voir les statuts automatiques",
  type: "command",
}, async (message, match) => {
  // Exemple statuts fixes
  const statuses = [
    "Statut 1 : Disponible ✅",
    "Statut 2 : Occupé ❌",
    "Statut 3 : En réunion 🕒",
  ];
  await message.sendMessage(statuses.join("\n"));
});

// Commande liker un statut
cmd({
  pattern: "like ❤️",
  fromMe: true,
  desc: "Liker un statut",
  type: "command",
}, async (message, match) => {
  await message.sendMessage("Statut liké ❤️");
});
bash
node bot.js
```

