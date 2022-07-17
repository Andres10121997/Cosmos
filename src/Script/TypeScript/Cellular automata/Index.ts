/**
 * @class
 * @name CellularAutomata
 * @classdesc
 */
class CellularAutomata
{
    #Size: number;
    #Context: (CanvasRenderingContext2D | null);
    #Cells: boolean[][] = [];
    
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
     * @access public
     * @method
     * @alias CellularAutomata.Create
     * @returns {void}
     */
    Create(): void
    {
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
            let Row: Array<boolean> = [];

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
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.Next
     * @returns {Promise<void>}
     */
    async Next(): Promise<void>
    {
        await new Promise<void>((): void => {
            this.#Print();
            this.#Evaluate();
        })
        .catch<void>((reason: any): void => {
            console.error(`---`);
            console.error(`Error CellularAutomata.Next method.`);
            console.error(`Error: ${reason}`);
            console.error(`---`);
        })
    }

    /**
     * @access private
     * @method
     * @alias CellularAutomata.Print
     * @returns {void}
     */
    #Print(): void
    {
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
    }

    /**
     * @access private
     * @method
     * @alias CellularAutomata.Evaluate
     * @returns {void}
     */
    #Evaluate(): void
    {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {boolean[][]}
         * @alias CellsAux
         */
        let CellsAux: boolean[][] = new Array(this.#Size).fill(``).map((): boolean[] => new Array(this.#Size).fill(false));

        for (let x: number = 0; x < this.#Size; x++)
        {
            for (let y: number = 0; y < this.#Size; y++)
            {
                /**
                 * @access private
                 * @member
                 * @var
                 * @type {number}
                 * @alias livingNeighbor
                 */
                let livingNeighbor: number = 0;

                // 1.
                if (x > 0 && y > 0)
                {
                    if (this.#Cells[x - 1][y - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 2.
                if (y > 0)
                {
                    if (this.#Cells[x][y - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 3.
                if (x < (this.#Size - 1) && y > 0)
                {
                    if (this.#Cells[x + 1][y - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 4.
                if (x > 0)
                {
                    if (this.#Cells[x - 1][y])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 5.
                if (x < (this.#Size - 1))
                {
                    if (this.#Cells[x + 1][y])
                    {
                        livingNeighbor++;
                    }
                }

                // 6.
                if (x > 0 && y < (this.#Size - 1))
                {
                    if (this.#Cells[x - 1][y + 1])
                    {
                        livingNeighbor++;
                    }
                }

                // 7.
                if (y < (this.#Size - 1))
                {
                    if (this.#Cells[x][y + 1])
                    {
                        livingNeighbor++;
                    }
                }

                // 8.
                if (x < (this.#Size - 1) && y < (this.#Size - 1))
                {
                    if (this.#Cells[x + 1][y + 1])
                    {
                        livingNeighbor++;
                    }
                }

                if (this.#Cells[x][y])
                {
                    CellsAux[x][y] = livingNeighbor == 2 || livingNeighbor == 3 ? true : false;
                }
                else
                {
                    CellsAux[x][y] = livingNeighbor == 3 ? true : false;
                }
            }
        }

        this.#Cells = CellsAux;
    }
}