/**
 * Creates a resumable function that only gets imported when needed.
 */
export default function Resumable<Func extends (...args: any[]) => any, This = unknown>(importURL: string | URL, exportName?: string): (this: This, ...params: Parameters<Func>) => Promise<ReturnType<Func>>;
