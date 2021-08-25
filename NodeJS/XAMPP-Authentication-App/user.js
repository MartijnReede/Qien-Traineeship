function User(userName, userAge, userHash, userSalt){
    this.userName = userName;
    this.userAge = userAge;
    this.userHash = userHash;
    this.userSalt = userSalt;
}

module.exports = User;