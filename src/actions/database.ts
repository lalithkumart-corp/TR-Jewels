import MyDatabase from '../database/db';
export const setDBReference = (params) => {
    return async (dispatch) => {
        try {
            let db = new MyDatabase();
            db.init();
            dispatch({
                type: "DB_REFERENCE",
                data: {dbReference: db}
            });
        } catch(e) {
            console.log('====Error in DB setup (actions) ', e);
        }
    }
}
