import { createOptions } from 'use-request';

type StringLike = string | number | boolean | bigint | undefined | null;
export const server = (strings: TemplateStringsArray, ...values: StringLike[]) => {
  const prefix = 'https://jsonplaceholder.typicode.com';

  const postfix = strings.reduce((prev, curr, index) => index > 0 ? prev + values[index - 1] + curr : prev + curr, '');
  
  return prefix + '/' + (postfix[0] === '/' ? postfix.substring(1) : postfix);
};

export const Options = {
  GET: createOptions({
    fetcher: async (url, headers: RequestInit['headers'] = {}) => (await fetch(url, {
      headers,
    })).json(),
  })
};
