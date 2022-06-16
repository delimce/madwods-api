export class Movement {

    constructor(
        private id: number,
        private name: string,
        private description: string) {

    }

    public getId(): number {    
        return this.id;
    }

    public getName(): string {        
        return this.name;
    }

    public getDescription(): string {     
        return this.description;
    }
}