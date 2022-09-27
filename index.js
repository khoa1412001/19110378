const express = require("express");
const app = express();
const PORT = 5000;
const MessageRoute = require("./routes/MessageRoute");
const DefaultRoute = require("./routes/DefaultRoute");
const MSSVRoute = require("./routes/MSSVRoute");
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// neu dung fetch brower
//fetch('http://localhost:5000/19110378',{headers: {  'Accept': 'application/json','Content-Type': 'application/json'},method:'POST', body: JSON.stringify({id:'19110332',name:'Le Van Cuong'})})
app.use("/19110378", MSSVRoute);
app.use("/message", MessageRoute);
app.use("/", DefaultRoute);
app.listen(PORT);
