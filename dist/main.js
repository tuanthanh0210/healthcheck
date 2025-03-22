"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('======================');
    console.log('======================');
    console.log('======================');
    console.log('DB_HOST', process.env.DB_HOST);
    console.log('DB_PORT', process.env.DB_PORT);
    console.log('REDIS_URL', process.env.REDIS_URL);
    console.log('======================');
    console.log('======================');
    console.log('======================');
    await app.listen(process.env.PORT || 8080, '0.0.0.0');
}
void bootstrap();
//# sourceMappingURL=main.js.map