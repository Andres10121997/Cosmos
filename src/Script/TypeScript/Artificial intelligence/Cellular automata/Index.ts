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
        for (let i: number = 0; i < this.#Size; i++)
        {
            /**
             * @access private
             * @member
             * @var
             * @type {Array<boolean>}
             * @alias row
             */
            let row: Array<boolean> = [];

            for (let j: number = 0; j < this.#Size; j++)
            {
                const alive: boolean = Math.random() < 0.5;
                row.push(alive);
            }

            this.#Cells.push(row);
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
        await new Promise((): void => {
            this.#Print();
            this.#Evaluate();
        })
        .catch((reason: any): void => {
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

            for (let i: number = 0; i < this.#Size; i++)
            {
                for (let j: number = 0; j < this.#Size; j++)
                {
                    if (this.#Cells[i][j])
                    {
                        this.#Context.fillStyle = `black`;
                    }
                    else
                    {
                        this.#Context.fillStyle = `white`;
                    }

                    this.#Context.fillRect(i, j, 1, 1);
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
         * @alias cellsAux
         */
        let cellsAux: boolean[][] = new Array(100).fill(``).map((): boolean[] => new Array(100).fill(false));

        for (let i: number = 0; i < this.#Size; i++)
        {
            for (let j: number = 0; j < this.#Size; j++)
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
                if (i > 0 && j > 0)
                {
                    if (this.#Cells[i - 1][j - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 2.
                if (j > 0)
                {
                    if (this.#Cells[i][j - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 3.
                if (i < (this.#Size - 1) && j > 0)
                {
                    if (this.#Cells[i + 1][j - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 4.
                if (i > 0)
                {
                    if (this.#Cells[i - 1][j])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 5.
                if (i < (this.#Size - 1))
                {
                    if (this.#Cells[i + 1][j])
                    {
                        livingNeighbor++;
                    }
                }

                // 6.
                if (i > 0 && j < (this.#Size - 1))
                {
                    if (this.#Cells[i - 1][j + 1])
                    {
                        livingNeighbor++;
                    }
                }

                // 7.
                if (j < (this.#Size - 1))
                {
                    if (this.#Cells[i][j + 1])
                    {
                        livingNeighbor++;
                    }
                }

                // 8.
                if (i < (this.#Size - 1) && j < (this.#Size - 1))
                {
                    if (this.#Cells[i + 1][j + 1])
                    {
                        livingNeighbor++;
                    }
                }

                if (this.#Cells[i][j])
                {
                    cellsAux[i][j] = livingNeighbor == 2 || livingNeighbor == 3 ? true : false;
                }
                else
                {
                    cellsAux[i][j] = livingNeighbor == 3 ? true : false;
                }
            }
        }

        this.#Cells = cellsAux;
    }
}