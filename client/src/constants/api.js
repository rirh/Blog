import { host } from '@/utils/config';
// GET /homePage 首页标语
export const GET_HOME_URL = `${host}/home`;
// GET /inventory/invenFindExport批次详情(导出)
// export const GET_INVENFINDEXPORT_URL = `${host}/inventory/invenFindExport`
// GET /homePage 首页标语
export const GET_INIT_URL = `${host}/init`;
// GET /homePage 首页标语
export const GET_USERINFO_URL = 'http://whois.pconline.com.cn/ipJson.jsp';


// 登录
export const POST_LOGIN_URL = `${host}/users/login`;
// 注册
export const POST_REGISTER_URL = `${host}/users/register`;
// blog
export const POST_BLOG_URL = `${host}/blog`;
// 简历
export const GET_RESUME_URL = `${host}/resume`;
