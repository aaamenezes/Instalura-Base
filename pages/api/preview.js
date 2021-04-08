export default function handler(req, res) {
  res.setPreviewData({})

  const key = 'BIRDMAN'
  if (res.query.key !== key) {
    return res.status(401).json({
      message: 'Chave inválida'
    })
  }
  res.writeHead(307, { location: '/' })
  return res.end
}
