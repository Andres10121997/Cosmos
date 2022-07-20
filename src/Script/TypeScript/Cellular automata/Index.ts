/**
 * @class
 * @name CellularAutomata
 * @classdesc
 */
class CellularAutomata
{
    #Size: number;
    #Context: (CanvasRenderingContext2D | null);
    #Cells: Array<Array<boolean>> = Array<Array<boolean>>();
    
    // Constructor.
    /**
     * @hideconstructor
     * @param {number} Size
     * @param {(CanvasRenderingContext2D | null)} Context
     * @returns {void}
     */
    constructor(Size: number,
                Context: (CanvasRenderingContext2D | null))
    {
        this.#Size = Size;
        this.#Context = Context;
    }



    // Getters and Setters.
    /**
     * @access public
     * @method
     * @alias CellularAutomata.GetSize
     * @returns {number}
     */
    GetSize(): number
    {
        return this.#Size;
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.SetSize
     * @param {number} Size
     * @returns {void}
     */
    SetSize(Size: number): void
    {
        this.#Size = Size;
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.GetContext
     * @returns {(CanvasRenderingContext2D | null)}
     */
    GetContext(): (CanvasRenderingContext2D | null)
    {
        return this.#Context;
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.SetContext
     * @param {(CanvasRenderingContext2D | null)} Context
     * @returns {void}
     */
    SetContext(Context: (CanvasRenderingContext2D | null)): void
    {
        this.#Context = Context;
    }



    // Cellular Automata.
    /**
     * @async
     * @access public
     * @method
     * @alias CellularAutomata.CreateAsync
     * @returns {Promise<void>}
     */
    async CreateAsync(): Promise<void>
    {
        new Promise<void>((): void => {
            for (let x: number = 0; x < this.#Size; x++)
            {
                // Varirables.
                /**
                 * @access private
                 * @member
                 * @var
                 * @type {Array<boolean>}
                 * @alias row
                 */
                let Row: Array<boolean> = new Array<boolean>();

                for (let y: number = 0; y < this.#Size; y++)
                {
                    // Constant.
                    /**
                     * @access private
                     * @member
                     * @constant
                     * @type {boolean}
                     * @alias Alive
                     */
                    const Alive: boolean = Boolean(Math.random() < 0.5);



                    Row.push(Alive);
                }

                this.#Cells.push(Row);
            }
        })
        .catch<void>((reason: any): void => {
            console.error(`---`);
            console.error(`Error CellularAutomata.Create method.`);
            console.error(`Error: ${reason}`);
            console.error(`---`);
        });
    }

    /**
     * @async
     * @access public
     * @method
     * @alias CellularAutomata.NextAsync
     * @returns {Promise<void>}
     */
    async NextAsync(): Promise<void>
    {
        await this.#PrintAsync()
            .then<void, never>(async (): Promise<void> => await this.#EvaluateAsync())
            .catch<void>((reason: any): void => {
                console.error(`---`);
                console.error(`Error CellularAutomata.Next method.`);
                console.error(`Error: ${reason}`);
                console.error(`---`);
            });
    }

    /**
     * @async
     * @access private
     * @method
     * @alias CellularAutomata.PrintAsync
     * @returns {Promise<void>}
     */
    async #PrintAsync(): Promise<void>
    {
        new Promise<void>((): void => {
            if (this.#Context !== null)
            {
                this.#Context.clearRect(0, 0, this.#Size, this.#Size);

                for (let x: number = 0; x < this.#Size; x++)
                {
                    for (let y: number = 0; y < this.#Size; y++)
                    {
                        if (this.#Cells[x][y])
                        {
                            this.#Context.fillStyle = `black`;
                        }
                        else
                        {
                            this.#Context.fillStyle = `white`;
                        }

                        this.#Context.fillRect(x, y, 1, 1);
                    }
                }
            }
        })
        .catch<void>((reason: any): void => {
            console.error(`---`);
            console.error(`Error CellularAutomata.Print method.`);
            console.error(`Error: ${reason}`);
            console.error(`---`);
        });
    }

    /**
     * @async
     * @access private
     * @method
     * @alias CellularAutomata.EvaluateAsync
     * @returns {Promise<void>}
     */
    async #EvaluateAsync(): Promise<void>
    {
        new Promise<void>((): void => {
            // Variables.
            /**
             * @access private
             * @member
             * @var
             * @type {Array<Array<boolean>>}
             * @alias CellsAux
             */
            let CellsAux: Array<Array<boolean>> = new Array(this.#Size).fill(``).map((): boolean[] => new Array(this.#Size).fill(false));

            for (let x: number = 0; x < this.#Size; x++)
            {
                for (let y: number = 0; y < this.#Size; y++)
                {
                    /**
                     * @access private
                     * @member
                     * @var
                     * @type {number}
                     * @alias LivingNeighbor
                     */
                    let LivingNeighbor: number = 0;

                    // 1.
                    if (x > 0 && y > 0)
                    {
                        if (this.#Cells[x - 1][y - 1])
                        {
                            LivingNeighbor++;
                        }
                    }
                    
                    // 2.
                    if (y > 0)
                    {
                        if (this.#Cells[x][y - 1])
                        {
                            LivingNeighbor++;
                        }
                    }
                    
                    // 3.
                    if (x < (this.#Size - 1) && y > 0)
                    {
                        if (this.#Cells[x + 1][y - 1])
                        {
                            LivingNeighbor++;
                        }
                    }
                    
                    // 4.
                    if (x > 0)
                    {
                        if (this.#Cells[x - 1][y])
                        {
                            LivingNeighbor++;
                        }
                    }
                    
                    // 5.
                    if (x < (this.#Size - 1))
                    {
                        if (this.#Cells[x + 1][y])
                        {
                            LivingNeighbor++;
                        }
                    }

                    // 6.
                    if (x > 0 && y < (this.#Size - 1))
                    {
                        if (this.#Cells[x - 1][y + 1])
                        {
                            LivingNeighbor++;
                        }
                    }

                    // 7.
                    if (y < (this.#Size - 1))
                    {
                        if (this.#Cells[x][y + 1])
                        {
                            LivingNeighbor++;
                        }
                    }

                    // 8.
                    if (x < (this.#Size - 1) && y < (this.#Size - 1))
                    {
                        if (this.#Cells[x + 1][y + 1])
                        {
                            LivingNeighbor++;
                        }
                    }

                    if (this.#Cells[x][y])
                    {
                        CellsAux[x][y] = LivingNeighbor == 2 || LivingNeighbor == 3 ? true : false;
                    }
                    else
                    {
                        CellsAux[x][y] = LivingNeighbor == 3 ? true : false;
                    }
                }
            }

            this.#Cells = CellsAux;
        })
        .catch<void>((reason: any): void => {
            console.error(`---`);
            console.error(`Error CellularAutomata.Evaluate method.`);
            console.error(`Error: ${reason}`);
            console.error(`---`);
        });
    }
}