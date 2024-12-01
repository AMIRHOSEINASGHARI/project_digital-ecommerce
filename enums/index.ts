export enum ResponseMessages {
  USER_NOT_FOUND = "User Not Found!",
  SERVER_ERROR = "Server Error!",
  UN_AUTHORIZED = "Un Authorized!",
  ACCESS_DENIED = "Access Denied!",
  SUCCESSFULLY_FETCHED = "Successfully Fetched!",
  SUCCESSFULLY_CREATED = "Successfully Created!",
  SUCCESSFULLY_UPDATED = "Successfully Updated!",
  SUCCESSFULLY_DELETED = "Successfully Deleted!",
  SOMTHING_WENT_WRONG = "Somthing Went Wrong!",
  LOGGED_IN_SUCCESSFULLY = "Logged In Successfully!",
  MISSING_CREDENTIALS = "Missing Credentials!",
}

export enum ResponseCodes {
  SUCCESSFULLY_FETCHED = 200,
  SUCCESSFULLY_CREATED = 201,
  SUCCESSFULLY_UPDATED = 202,
  SUCCESSFULLY_DELETED = 203,
  BAD_REQUEST = 400,
  UN_AUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
