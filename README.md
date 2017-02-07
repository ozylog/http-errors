# ozylog-http-errors
Create HTTP error objects

## Errors
```javascript
export class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super(message);

    this.status = 400;
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message);

    this.status = 403;
  }
}

export class InternalServerError extends Error {
  constructor(message = 'Internal Server Error') {
    super(message);

    this.status = 500;
  }
}

export class NotAcceptableError extends Error {
  constructor(message = 'Not Acceptable') {
    super(message);

    this.status = 406;
  }
}

export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);

    this.status = 404;
  }
}

export class NotImplementedError extends Error {
  constructor(message = 'Not Implemented') {
    super(message);

    this.status = 501;
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);

    this.status = 401;
  }
}

export class CreateError extends Error {
  constructor(message, status) {
    super(message);

    this.status = status;
  }
}
```

## Usage Example
```javascript
import {BadRequestError} from 'ozylog-http-errors';


export function validate(req, res, next) {
  if (!req.body.name) return next(new BadRequestError());
}
```

## License
MIT
