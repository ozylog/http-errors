'use strict';

export class BadRequestError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Bad Request';
    this.status = 400;
  }
}

export class ForbiddenError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Forbidden';
    this.status = 403;
  }
}

export class InternalServerError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Internal Server Error';
    this.status = 500;
  }
}

export class NotAcceptableError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Not Acceptable';
    this.status = 406;
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Not Found';
    this.status = 404;
  }
}

export class NotImplementedError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Not Implemented';
    this.status = 501;
  }
}

export class UnauthorizedError extends Error {
  constructor(message) {
    super();

    this.message = message || 'Unauthorized';
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
