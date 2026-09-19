import app from '@/app';
import { ENV } from '@/config/env';

app.listen(ENV.PORT, () => {
  console.log('--------------------------------------------------');
  console.log('🚀 ' + ENV.APP_NAME + ' started successfully!');
  console.log('📡 URL: ' + ENV.BACKEND_URL);
  console.log('🌍 MODE: ' + ENV.NODE_ENV);
  console.log('--------------------------------------------------');
});
