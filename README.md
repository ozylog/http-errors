# ozylog-http-errors
Create HTTP error objects

[![Travis](https://img.shields.io/travis/ozylog/ozylog-http-errors.svg?style=flat-square)](https://travis-ci.org/ozylog/ozylog-http-errors) [![npm](https://img.shields.io/npm/dt/ozylog-http-errors.svg?style=flat-square)](https://www.npmjs.com/package/ozylog-http-errors)

## Installation

```
npm install ozylog-http-errors --save
```

## List of errors
```
- BadRequestError([message = 'Bad Request'])
- ForbiddenError([message = 'Forbidden'])
- InternalServerError([message = 'Internal Server Error'])
- NotAcceptableError([message = 'Not Acceptable'])
- NotFoundError([message = 'Not Found'])
- NotImplementedError([message = 'Not Implemented'])
- UnauthorizedError([message = 'Unauthorized'])
- CreateError([message], [responseCode])
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
