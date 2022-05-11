const express = require ('express');
const cors = require ('cors');
const bodyparser = require ('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(cors())

app.post('/formulario', (req, res) => {})
app.listen(3000, () => {
  console.log("servidor corriendo.")
});
