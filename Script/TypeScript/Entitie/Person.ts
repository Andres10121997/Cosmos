class Person
{
    #FirstName: IAccountVariable = {
        MaxLength: 30,
        Require: true,
        FormType: FormType.Input
    };

    #SecondName: IAccountVariable = {
        MaxLength: 30,
        Require: false,
        FormType: FormType.Input
    };

    #FirstLastName: IAccountVariable = {
        MaxLength: 30,
        Require: true,
        FormType: FormType.Input
    };

    #SecondLastName: IAccountVariable = {
        MaxLength: 30,
        Require: false,
        FormType: FormType.Input
    };

    #DateOfBirth: IAccountVariable = {
        MaxLength: NaN,
        Require: true,
        FormType: FormType.Date
    }
    


    constructor()
    {
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