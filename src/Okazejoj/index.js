import LocalizedStrings from 'react-localization'

var ctx = require.context('.', true, /\.json$/)

var obj = { eo: {} }
ctx.keys().forEach(sxlosilo => {
  obj[sxlosilo.substr(2, 2)] = ctx(sxlosilo)
})

let cxenoj = new LocalizedStrings(obj)

export default cxenoj
