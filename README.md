# ozylog-http-errors
Create HTTP error objects

## Usage
```javascript
import {BadRequestError, ForbiddenError, InternalServerError, NotAcceptableError} from 'ozylog-http-errors';
import {NotFoundError, NotImplementedError, UnauthorizedError, CreateError} from 'ozylog-http-errors';

let err;

err = new BadRequestError(message);
// err.status = 400
// err.message = message || 'Bad Request'

err = new ForbiddenError(message);
// err.status = 403
// err.message = message || 'Forbbiden'

err = new InternalServerError(message);
// err.status = 500
// err.message = message || 'Internal Server Error'

err = new NotAcceptableError(message);
// err.status = 406
// err.message = message || 'Not Acceptable'

err = new NotFoundError(message);
// err.status = 404
// err.message = message || 'Not Found'

err = new NotImplementedError(message);
// err.status = 501
// err.message = message || 'Not Implemented'

err = new UnauthorizedError(message);
// err.status = 401
// err.message = message || 'Unauthorized'

err = new CreateError(message, status);
// err.status = status
// err.message = message
```

## License
MIT
