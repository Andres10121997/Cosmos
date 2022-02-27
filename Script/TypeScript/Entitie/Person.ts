class Person
{
    #FirstName: IAccountVariable;
    #SecondName: IAccountVariable;
    #FirstLastName: IAccountVariable;
    #SecondLastName: IAccountVariable;
    #DateOfBirth: IAccountVariable;
    


    constructor(FirstName: IAccountVariable = {
                    Value: "",
                    MaxLength: 30,
                    RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
                    Require: true,
                    FormType: FormType.Input
                },
                SecondName: IAccountVariable = {
                    Value: "",
                    MaxLength: 30,
                    RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{0,30}$`),
                    Require: false,
                    FormType: FormType.Input
                },
                FirstLastName: IAccountVariable = {
                    Value: "",
                    MaxLength: 30,
                    RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
                    Require: true,
                    FormType: FormType.Input
                },
                SecondLastName: IAccountVariable = {
                    Value: "",
                    MaxLength: 30,
                    RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
                    Require: false,
                    FormType: FormType.Input
                },
                DateOfBirth: IAccountVariable = {
                    Value: Today(),
                    MaxLength: NaN,
                    Require: true,
                    FormType: FormType.Date
                })
    {
        this.#FirstName = FirstName;
        this.#SecondName = SecondName;
        this.#FirstLastName = FirstLastName;
        this.#SecondLastName = SecondLastName;
        this.#DateOfBirth = DateOfBirth;
    }



    GetFirstName(): IAccountVariable
    {
        return this.#FirstName;
    }

    SetFirstName(FirstName: IAccountVariable): void
    {
        this.#FirstName = FirstName;
    }

    GetSecondName(): IAccountVariable
    {
        return this.#SecondName;
    }

    SetSecondName(SecondName: IAccountVariable): void
    {
        this.#SecondName = SecondName;
    }

    GetFirstLastName(): IAccountVariable
    {
        return this.#FirstLastName;
    }

    SetFirstLastName(FirstLastName: IAccountVariable): void
    {
        this.#FirstLastName = FirstLastName;
    }

    GetSecondLastName(): IAccountVariable
    {
        return this.#SecondLastName;
    }

    SetSecondLastName(SecondLastName: IAccountVariable)
    {
        this.#SecondLastName = SecondLastName;
    }

    GetDateOfBirth(): IAccountVariable
    {
        return this.#DateOfBirth;
    }

    SetDateOfBirth(DateOfBirth: IAccountVariable): void
    {
        this.#DateOfBirth = DateOfBirth;
    }
}