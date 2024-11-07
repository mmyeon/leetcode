type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    let results: T[] = [];
    let resolvedCount = 0;

    functions.forEach((fn, index) =>
      fn()
        .then((result) => {
          results[index] = result;

          resolvedCount++;

          if (resolvedCount === functions.length) resolve(results);
        })
        .catch(reject)
    );
  });
}
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */