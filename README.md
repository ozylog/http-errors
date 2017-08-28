# http-errors
Create HTTP error objects

[![Travis](https://img.shields.io/travis/ozylog/http-errors.svg?style=flat-square)](https://travis-ci.org/ozylog/http-errors) [![npm](https://img.shields.io/npm/dt/@ozylog/http-errors.svg?style=flat-square)](https://www.npmjs.com/package/@ozylog/http-errors)

## Installation

```
npm install @ozylog/http-errors --save
```

## List of errors
```javascript
new BadRequestError([message = 'Bad Request'])
new ForbiddenError([message = 'Forbidden'])
new InternalServerError([message = 'Internal Server Error'])
new NotAcceptableError([message = 'Not Acceptable'])
new NotFoundError([message = 'Not Found'])
new NotImplementedError([message = 'Not Implemented'])
new UnauthorizedError([message = 'Unauthorized'])
new CreateError([message], [statusCode])
```

## Usage Example
```javascript
import {BadRequestError} from '@ozylog/http-errors';

export function validate(req, res, next) {
  if (!req.body.name) return next(new BadRequestError());
}
```

## License
MIT
