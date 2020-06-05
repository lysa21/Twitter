
let db = require("./../config/database.js");

class User {
  constructor(props) {
    const {username, password} = props;
    this.username = username;
    this.password = password;
    // this.created_at = new Date()
  }

  static async create (user)  {
    console.log(user);
    let sql = "INSERT INTO user (username, password) values (?, ?)";
    const [results, fields] = await db.execute(sql, [user.username, user.password]);

    return results;
  };

  static async findByUsername (username)  {
    let sql = "SELECT * FROM user WHERE username = ?";
    const [results, fields] = await db.execute(sql, [username]);
    console.log(results)
    return results;
  };
  


}


module.exports = User;
