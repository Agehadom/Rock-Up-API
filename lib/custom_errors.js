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

const requireOwnership = function (req, doc) {
  const owner = doc.owner._id ? doc.owner._id : doc.owner
  // https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html#equals
  if (!req.user._id.equals(owner)) {
    throw new OwnershipError()
  }
  return doc
}

module.exports = {
  handle404,
  requireOwnership
}
