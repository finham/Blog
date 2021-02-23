import http from './http'

//这个 () => {} 是ES6里的箭头函数，和function()定义大体一样，但还是会有一些差别例如this的指向
// （x） => x + n 相当于 function(x) { return x+n;}
export const checkToken = () => {
    return http.requestGet("/user/check-token");
}

export const login = (verifyCode, from, user) => {
    return http.requestPost("/user/login" + verifyCode + "/" + from, user);
}

//一次性拿完，所以不需要参数
export const listCategory = () => {
    return http.requestGet("/admin/category/list");
}

export const deleteCategory = (id) => {
    return http.requestDelete("/admin/category/" + id);
}