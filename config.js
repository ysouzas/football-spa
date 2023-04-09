const fs = require("fs");

const targetPath = "./src/environments/environment.prod.ts";

const envConfigFile = `export const environment = {
   production: true,
   apiUrl: '${process.env["API_URL"]}',
   apiURLPlayers: '${process.env["API_URL_PLAYERS"]}'
};
`;

fs.writeFile(targetPath, envConfigFile, "utf8", (err) => {
  if (err) {
    return console.log(err);
  }
});
