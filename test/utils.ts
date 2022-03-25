export const time = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
