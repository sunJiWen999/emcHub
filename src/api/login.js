import request, {Method} from '@/plugins/request.js';

/**
 * use loginId and password
 */
export function LoginByPassWD(params) {
  params.bussData.identiType="PASSWD";
  return request({
    url: '/userLogin.do',
    method:'POST',
    data:params
  });
}


/**
 * register user
 */
export function userRegOrigin(params) {
  return request({
    url: '/applyRegister.do',
    method:'POST',
    data:params
  });
}

/**
 * 
 * reset password
 * @param {*} params 
 * @returns 
 */
export function authTokenSet(params){
  return request({
    url: '/setAutoration.do',
    method:'POST',
    data:params
  });

}

export function openAcct(params){
  return request({
    url: '/userRelatedWithPrinciple.do',
    method:'POST',
    data:params
  });
}


