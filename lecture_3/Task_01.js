function isValid(nums) {
  return nums.every((n) => typeof n === "number" && !isNaN(n));
};

myIterable[Symbol.iterator] = function () {
  if (!isValid([this.from, this.to]))
    throw new Error("Arguments are invalid");
  if (this.from > this.to)
    [this.from, this.to] = [this.to, this.from];

  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last)
        return { done: false, value: this.current++ };
      else
        return { done: true };
    }
  };
};