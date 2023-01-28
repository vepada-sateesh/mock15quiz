const express = require("express")
const { connection } = require("./Config/db")
const { userRoute } = require("./Routes/User.route")
var cors = require("cors")
const app = express()
 app.use(express.json())
 app.use(cors({
    origin:"*"
}))
app.use("/user", userRoute)
app.get("/", (req, res) => {
    res.send("welcome")
})

app.listen(8080, async () => {
    try {
        await connection
    } catch (error) {
        console.log(error);
    }
})
