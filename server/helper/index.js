function enHanceBody (optipns) {
  let result = {}
  result.code = 200
  result.status = true
  result.data = optipns
  return result
}
module.exports = {
  enHanceBody
}
