/**
 * Creates a resumable function that only gets imported when needed.
 */
export default function Resumable<Func extends (...args: any[]) => any, This = unknown>(importURL: string | URL, exportName = 'default') {
    /**
     * A wrapper function around the importee that will pass params and `this` down to the function
     */
    return function(this: This, ...params: Parameters<Func>) {
        return import(importURL.toString()).then((mod) => mod[exportName].apply(this, params)) as Promise<ReturnType<Func>>
    }
}

// One-liner: const Resumable = (importURL, exportName = 'default') => function(...params) { return import(importURL.toString()).then(mod => mod[exportName].apply(this, params)) }