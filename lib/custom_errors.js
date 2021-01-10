class OwnershipError extends Error {
  constructor () {
    super()
    this.name = 'OwnershipError'
    this.message = 'The provided token does not match the owner of this document'
  }
}

class DocumentNotFoundError extends Error {
  constructor() {
    super()
    this.name = "DocumentNotFoundError"
    this.message = "ID does not match any document in database"
  }
}

class BadParamsError extends Error {
  constructor() {
    super();
    // define the errors name
    this.name = 'BadParamsError'
    // define the error message
    this.message = 'A required parameter was omitted or invalid'
  }
}

class BadCredentialsError extends Error {
  constructor () {
    super()
    this.name = 'BadCredentialsError'
    this.message = 'The provided username or password is incorrect'
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
  requireOwnership,
  OwnershipError,
  BadCredentialsError,
  BadParamsError
}
