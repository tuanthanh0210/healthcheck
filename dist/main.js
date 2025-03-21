"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(process.env);
    await app.listen(process.env.PORT || 8080);
}
void bootstrap();
//# sourceMappingURL=main.js.map