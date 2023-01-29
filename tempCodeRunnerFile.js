let db = new sqlite3.Database('Account.db',sqlite3.OPEN_READWRITE,(err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('connected to the mydb database');
  }
});