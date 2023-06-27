export default function createIteratorObject(report) {
  const iter = {
    [Symbol.iterator]() {
      const values = Object.values(report.allEmployees).flat();
      let index = 0;

      return {
        next() {
          if (index < values.length) {
            const val = values[index];
            index += 1;
            return { value: val, done: false };
          } return { done: true };
        },
      };
    },
  };

  return iter;
}
