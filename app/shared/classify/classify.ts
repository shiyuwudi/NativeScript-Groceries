export class Classify {
    constructor(public className: string, public id: string) {}
}
export class ClassifySecond {
    constructor(public className: string, public id: string, public third: ClassifyThird[]) {}
}
export class ClassifyThird {
    constructor(public className: string, public id: string, public icon_path: string, public name?: string, public index?:boolean) {}
}
