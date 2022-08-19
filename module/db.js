const mongoose = require('mongoose')
const ConnectDB =  async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
    )
    console.log(`mon connected to: ${conn.connection.host}`)

}
module.exports = ConnectDB