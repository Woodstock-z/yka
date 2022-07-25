export const covertSVG2Image = (node, name, width, height, logo, type = 'png' ) => {

  let serializer = new XMLSerializer()

  let source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(node)

  let image = new Image()

  image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)
  console.log(image.src)

  let canvas = document.createElement('canvas')

  canvas.width = width

  canvas.height = height

  let context = canvas.getContext('2d')

  context.fillStyle = '#fff'

  context.fillRect(0, 0, width, height)

  image.onload = function () {

    context.drawImage(image, 0, 0)
    context.drawImage(logo, 50, 50, 636, 132)

    let a = document.createElement('a')

    a.download = `${name}.${type}`

    a.href = canvas.toDataURL(`image/${type}`)

    a.click()

  }
}
