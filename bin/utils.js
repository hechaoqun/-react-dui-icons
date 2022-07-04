const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split('-')
  const style = nameSlices[nameSlices.length - 1]

  return {
    name,
    componentName: upperCamelCase(name.replace(/(-stroke)$/ig,'')),
    style: style==='fill' || style==='stroke' ? style : defaultStyle
  }
}

module.exports = {
  parseName
};
