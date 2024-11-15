import app from "./app";
import config from "./utils/config";

const { port } = config;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
