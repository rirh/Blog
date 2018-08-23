import Cookies from 'js-cookie';

export const oneOf = (value, validList) => {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
};

export const getToken = () => {
  const token = Cookies.get();
  if (token) return token;
  return false;
};
/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
function hasOneOf(target, arr) {
  return target.some(_ => arr.indexOf(_) > -1);
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access);
  return true;
};

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = list => list.some((item) => {
    if (item.children && item.children.length) {
      return routePermissionJudge(item.children);
    } if (item.name === name) {
      return hasAccess(access, item);
    }
  });

  return routePermissionJudge(routes);
};

// export default {
//   oneOf,
//   getToken,
//   canTurnTo,
// };
// module.exports = {
//   oneOf,
//   getToken,
//   canTurnTo,
// };
