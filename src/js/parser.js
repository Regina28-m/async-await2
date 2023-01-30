export default async function json(data) {
  const promise = new Promise((resolve) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
  const result = await promise;
  return result;
}
