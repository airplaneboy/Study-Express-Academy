import { NextResponse } from 'next/server';
import Error from 'next/error';
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = () => {
  if (process.env.NODE_ENV !== 'production') console.log(Error);
  let customError = {
    // set default
    statusCode: Error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: Error.message || 'Something went wrong try again later',
  };

  if (Error.name === 'ValidationError') {
    customError.msg = Object.values(Error.errors)
      .map((item) => item.message)
      .join(',');
    customError.statusCode = 400;
  }
  if (Error.code && Error.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(Error.keyValue)} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (Error.name === 'CastError') {
    customError.msg = `No item found with id : ${Error.value}`;
    customError.statusCode = 404;
  }

  return NextResponse.json({ msg: customError.msg }, { status: customError.statusCode });
};

export default errorHandlerMiddleware;
