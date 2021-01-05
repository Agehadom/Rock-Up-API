const requestLogger = (req, res, next)=>{
  console.log('\n===== Incoming Request =====\n')
  console.log(`${new Date()}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`body: ${JSON.stringify(req.body)}`)
  next()
}

module.exports = requestLogger
