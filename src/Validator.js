import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  // eslint-disable-next-line class-methods-use-this
  string() {
    return new StringSchema();
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new ArraySchema();
  }

  // eslint-disable-next-line class-methods-use-this
  object() {
    return new ObjectSchema();
  }
}

export default Validator;

