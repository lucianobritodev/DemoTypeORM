import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async conn => {
    const user = new User();
    user.name = "Luciano";
    user.email = "luciano@email.com";
    user.password = "12345";

    await conn.manager.save(user);
    console.log("Salvo um novo usuario com id: " + user.id);

    console.log("Carregando usuarios...");
    const users = await conn.manager.find(User);
    console.log("Usuarios carregados: ", users);

}).catch(err => console.log(err));
