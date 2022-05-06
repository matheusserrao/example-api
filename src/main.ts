import 'module-alias/register';
import { setupApp } from '@app/app';

(async() => {
    const app = await setupApp();
    app.listen(3000, () => console.log('Server Started'));

})();
