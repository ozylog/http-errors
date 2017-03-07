# ozylog-http-errors
Create HTTP error objects

## Installation

```
npm install ozylog-http-errors --save
```

## List of error classes
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
