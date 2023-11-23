const { db } = require('../config/db');
const config = require('../config/config');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = {
  async findUser(email) {
    const usersRef = db.collection('users'); 
    const snapshot = await usersRef.get();

    let users = [];
    snapshot.forEach(doc => {
      users.push({
        id: doc.id,
        username: doc.data().username,
        email: doc.data().email,
        password: doc.data().password,
        isAdmin: doc.data().isAdmin
      });
    });
    const userMatch = users.filter( user => 
      email === user.email  
    );
    return userMatch;
  },

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  },

  async comparePassword(user, password) {
    // (a) Retrieves hashed password in DB
    const hashPassword = user[0].password;

    // (b) Compare password passed in with DB hashed password via Bcrypt for match
    const passwordMatch = await bcrypt.compare(
      password, 
      hashPassword
    );

    // (c) Return result (we want a match!)
    return passwordMatch;
  },

  async userDetailsToJSON(id) {
    const usersRef = db.collection('users'); 
    const user = await usersRef.doc(id).get();

    const userJSON = _.omit(
      { id: id, ...user.data() },
      'password'
    );
    console.log(userJSON);

    return userJSON;
  },

  jwtSignUser(user) {
    const payload = user;
    const secret = config.authentication.jwtSecret;
    const tokenExpireTime = 60 * 60 * 24

    const token = jwt.sign(
      payload,
      secret,
      { expiresIn: tokenExpireTime }
    );
    return token;
  }
}