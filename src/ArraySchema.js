class ArraySchema {
  constructor() {
    this.maxDepthValue = 0;
  }

  maxDepth(depth) {
    this.maxDepthValue = depth;
    return this;
  }

  isValid(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    return this.checkArrayDepth(data, 0) <= this.maxDepthValue;
  }

  checkArrayDepth(arr, depth) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return depth;
    }

    const depths = [depth];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of arr) {
      if (Array.isArray(item)) {
        depths.push(this.checkArrayDepth(item, depth + 1));
      }
    }

    return Math.max(...depths);
  }
}

export default ArraySchema;
