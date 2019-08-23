export class Alert {
    constructor(
        public readonly typeAlert: TypeAlert,
        public readonly message: string) { }
}

export enum TypeAlert {
    SUCCESS,
    DANGER,
    WARNING,
    INFO
}