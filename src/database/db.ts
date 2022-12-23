import SQLite from 'react-native-sqlite-storage';

export default class DB {
    database_name = "trJewels.db";
    database_version = "1.0";
    database_displayname = "SQLite Test Database";
    database_size = 200000;
    db: any; //TODO: map with approproate property type
    async init() {
        try {
            //SQLite.DEBUG(true);
            // SQLite.enablePromise(false);
            await this.connectToDB();
            return true;
        } catch(e) {
            return false;
        }
    }

    async connectToDB() {
        this.db = SQLite.openDatabase({name: this.database_name, createFromLocation: '~trJewels.db', location: 'Library'});
        return true;
    }

    executeSql(sql, options, successCB, errorCB) {
        console.log('DB.js =====EXecuting sql: ', sql);
        return new Promise( (resolve, reject) => {
            this.db.transaction( (txn) => {
                txn.executeSql(sql, options, (tx, results) => {
                                    console.log('DB.js =========EXECUTED SQL');
                                    //console.log(results);
                                    if(successCB)
                                        successCB(results);
                                    return resolve(results);
                                }, (err) => {
                                    console.log('DB.js -----ERROR EXECUTED SQL');
                                    console.log(err);
                                    if(errorCB)
                                        errorCB(err);
                                    return reject(err);
                                });
            });
        });
    }
}