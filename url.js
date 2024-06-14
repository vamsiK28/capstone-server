const dbUsername = process.env.dbUsername;
const dbPassword = process.env.dbPassword;
let url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.vuq1vfq.mongodb.net/capstone`;
module.exports = url;
