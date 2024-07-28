const dbUsername = process.env.dbUsername || "admin";
const dbPassword = process.env.dbPassword || "admin";
let url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.vuq1vfq.mongodb.net/capstone`;
module.exports = url;
