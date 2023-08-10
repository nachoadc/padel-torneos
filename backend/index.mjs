import { server } from './src/app.mjs';
import { sequelize } from './src/db.mjs';

server.listen(3001, async() => {
    await sequelize.sync();
    console.log('Listen on port 3001');
});