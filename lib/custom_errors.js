class DocumentNotFoundError extends Error {
  constructor() {
    super()
    this.name = "DocumentNotFoundError"
    this.message = "ID does not match any document in database"
  }
}

const handle404 = doc => {
  // if document doesnt exist then throw our error
  if (doc === null) {
    throw new DocumentNotFoundError()
  }
  // otherwise pass the document along
  return doc
}

module.exports = handle404
