const app = require('./src/app');

const PORT = process.env.DEV_APP_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on running with port ${PORT}`);
});
