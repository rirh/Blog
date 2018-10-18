module.exports = (type,response) => {
    if (type) {
        return {
            code: 200,
            msg: '成功',
            data: response
        }
    } else {
        return {
            code: 500,
            msg: response ||'失败',
           
        }
    }
}