class CellularAutomata
{
    #size: number;
    #ctx: CanvasRenderingContext2D;
    #cells: boolean[][] = [];
    
    // Constructor.
    constructor(size: number,
                ctx: CanvasRenderingContext2D)
    {
        this.#size = size;
        this.#ctx = ctx;
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
        return this.#size;
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.SetSize
     * @param {number} size
     * @returns {void}
     */
    SetSize(size: number): void
    {
        this.#size = size;
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.GetCtx
     * @returns {CanvasRenderingContext2D}
     */
    GetCtx(): CanvasRenderingContext2D
    {
        return this.#ctx;
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.SetCtx
     * @param {CanvasRenderingContext2D} ctx
     * @returns {void}
     */
    SetCtx(ctx: CanvasRenderingContext2D): void
    {
        this.#ctx = ctx;
    }



    // Cellular Automata
    /**
     * @access public
     * @method
     * @alias CellularAutomata.Create
     * @returns {void}
     */
    Create(): void
    {
        for (let i = 0; i < this.#size; i++)
        {
            let row: Array<boolean> = [];

            for (let j = 0; j < this.#size; j++)
            {
                const alive: boolean = Math.random() < 0.5;
                row.push(alive);
            }

            this.#cells.push(row);
        }
    }

    /**
     * @access public
     * @method
     * @alias CellularAutomata.Next
     * @returns {void}
     */
    Next(): void
    {
        this.#Print();
        this.#Evaluate();
    }

    /**
     * @access private
     * @method
     * @alias CellularAutomata.Print
     * @returns {void}
     */
    #Print(): void
    {
        this.#ctx.clearRect(0, 0, this.#size, this.#size);

        for (let i = 0; i < this.#size; i++)
        {
            for (let j = 0; j < this.#size; j++)
            {
                if (this.#cells[i][j])
                {
                    this.#ctx.fillStyle = `black`;
                }
                else
                {
                    this.#ctx.fillStyle = `white`;
                }

                this.#ctx.fillRect(i, j, 1, 1);
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
        let cellsAux: boolean[][] = new Array(100).fill(``).map((): boolean[] => new Array(100).fill(false));

        for (let i = 0; i < this.#size; i++)
        {
            for (let j = 0; j < this.#size; j++)
            {
                let livingNeighbor: number = 0;

                // 1
                if (i > 0 && j > 0)
                {
                    if (this.#cells[i - 1][j - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 2
                if (j > 0)
                {
                    if (this.#cells[i][j - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 3
                if (i < (this.#size - 1) && j > 0)
                {
                    if (this.#cells[i + 1][j - 1])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 4
                if (i > 0)
                {
                    if (this.#cells[i - 1][j])
                    {
                        livingNeighbor++;
                    }
                }
                
                // 5.
                if (i < (this.#size - 1))
                {
                    if (this.#cells[i + 1][j])
                    {
                        livingNeighbor++;
                    }
                }

                // 6
                if (i > 0 && j < (this.#size - 1))
                {
                    if (this.#cells[i - 1][j + 1])
                    {
                        livingNeighbor++;
                    }
                }

                // 7
                if (j < (this.#size - 1))
                {
                    if (this.#cells[i][j + 1])
                    {
                        livingNeighbor++;
                    }
                }

                // 8
                if (i < (this.#size - 1) && j < (this.#size - 1))
                {
                    if (this.#cells[i + 1][j + 1])
                    {
                        livingNeighbor++;
                    }
                }

                if (this.#cells[i][j])
                {
                    cellsAux[i][j] = livingNeighbor == 2 || livingNeighbor == 3 ? true : false;
                }
                else
                {
                    cellsAux[i][j] = livingNeighbor == 3 ? true : false;
                }
            }
        }

        this.#cells = cellsAux;
    }
}