import { LOGGED_IN_SUCCESS, LOGGED_OUT_SUCCESS, LOGIN_FAILURE, MARK_AUTH_TRUE } from '../constants';
import { uniqStringGenerator } from '../utils/utils';

export const isAuthenticated = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getState().db.dbReference.executeSql(`SELECT * FROM access_token`);
            if(res.rows.length) {
                let userId = res.rows.item(0).user_id;
                let userDataResp = await getState().db.dbReference.executeSql(`SELECT * FROM user WHERE id = ${userId}`);
                dispatch({
                    type: MARK_AUTH_TRUE,
                    data: userDataResp.rows.item(0)
                });
            }
        } catch(e) {
            console.log('---Exception in actions auth.ts: ', e);
        }
    }
}

export const doLogin = (params) => {
    return async (dispatch, getState) => {
        try {
            let token_id = uniqStringGenerator();
            // let expiry_time = +new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            let sql = `INSERT INTO access_token (token_id, user_id, created_at) Values ("${token_id}", ${params.id}, ${+new Date()})`;
            let res = await getState().db.dbReference.executeSql(sql);
            if(res.rowsAffected == 1) {
                dispatch({
                    type: LOGGED_IN_SUCCESS,
                    data: params
                });
            } else {
                dispatch({
                    type: LOGIN_FAILURE,
                    data: params
                })
            }
        } catch(e) {
            console.log('====Error in auth actions ', e);
        }
    }
}

export const doLogout = (params) => {
    return async (dispatch) => {
        try {
            //await AsyncStorage.removeItem('USER_KEY');
            dispatch({
                type: LOGGED_OUT_SUCCESS
            })
        } catch(e) {

        }
    }
}