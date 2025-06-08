import app from './app';
import { config } from './config/env';

const port = config.PORT;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
