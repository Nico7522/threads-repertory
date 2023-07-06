declare module 'alpinejs'  {
    type AlpineInstance = {
        readonly $el: HTMLElement
    }

    type WithAplineInstance<T> = {
    [Key in keyof T]: T[Key] extends (...args: infer A) => infer R ? (this: T & AlpineInstance, ...args: A) => R : T[Key]
    }
    const Alpine: {
        start(): void

        data<T>(component: string, cb: (params: any) => WithAplineInstance<T>): void 
       
    };
    export default Alpine

}