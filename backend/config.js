require('dotenv').config()

module.exports = {
    //MONGODB_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@smolify.me:27017/slts`,
    MONGODB_URI: `mongodb://nikolasutic.xyz:27017/slts`,
    PORT: 4040,
    baseUrl: "smolify.me/"
}
