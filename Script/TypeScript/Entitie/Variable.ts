interface IAccountVariable {
    Value: string | Date
    MaxLength: number;
    RegularExpression?: RegExp;
    Require: boolean;
    FormType: string
};