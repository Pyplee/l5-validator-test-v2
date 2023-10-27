class StringSchema {
  constructor() {
    this.upperCaseCheck = false;
    this.lengthCheck = false;
    this.hasExclamationCheck = false;
    this.lengthFuncArg = 0;
  }

  isValid(data) {
    if (typeof data !== 'string') {
      return false;
    }
    if (this.upperCaseCheck) {
      const firstSymb = data.slice(0, 1);
      const arrNot = [' ', '!', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''];
      if (arrNot.indexOf(firstSymb) !== -1) {
        return false;
      }
      const firtsSymbUpper = firstSymb.toUpperCase();
      if (firstSymb !== firtsSymbUpper) {
        return false;
      }
    }
    if (this.hasExclamationCheck) {
      if (data[data.length - 1] !== '!') {
        return false;
      }
    }
    if (this.lengthCheck) {
      const dataArr = data.split('');
      const dataLength = dataArr.length;
      if (dataLength !== this.lengthFuncArg) {
        return false;
      }
    }
    return true;
  }

  startsFromUpperCase() {
    this.upperCaseCheck = true;
    return this;
  }

  length(arg) {
    this.lengthCheck = true;
    this.lengthFuncArg = arg;
    return this;
  }

  hasExclamation() {
    this.hasExclamationCheck = true;
    return this;
  }
}

export default StringSchema;
