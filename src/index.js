'use strict';

export class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super();

    this.message = message; // support object
    this.status = 400;
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super();

    this.message = message;
    this.status = 403;
  }
}

export class InternalServerError extends Error {
  constructor(message = 'Internal Server Error') {
    super();

    this.message = message;
    this.status = 500;
  }
}

export class NotAcceptableError extends Error {
  constructor(message = 'Not Acceptable') {
    super();

    this.message = message;
    this.status = 406;
  }
}

export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super();

    this.message = message;
    this.status = 404;
  }
}

export class NotImplementedError extends Error {
  constructor(message = 'Not Implemented') {
    super();

    this.message = message;
    this.status = 501;
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super();

    this.message = message;
    this.status = 401;
  }
}

export class CreateError extends Error {
  constructor(message, status) {
    super();

    this.message = message;
    this.status = status;
  }
}
