/**
 * @function
 * @name InsertCellularAutomata
 * @param {string} CanvasID
 * @returns {Promise<void>}
 */
async function InsertCellularAutomata(CanvasID: string): Promise<void>
{
    await new Promise((): void => {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {HTMLCanvasElement}
         * @alias Canvas
         */
        const Canvas: HTMLCanvasElement = (document.getElementById(CanvasID) as HTMLCanvasElement);

        /**
         * @access private
         * @member
         * @constant
         * @type {number}
         * @alias Size
         */
        const Size: number = Canvas.clientHeight;
        
        /**
         * @access private
         * @member
         * @constant
         * @type {CanvasRenderingContext2D | null}
         * @name ctx
         */
        const ctx: (CanvasRenderingContext2D | null) = Canvas.getContext(`2d`);



        // Objects.
        /**
         * @access private
         * @member
         * @constant
         * @type {CellularAutomata}
         * @name cellularAutomata
         */
        const cellularAutomata: CellularAutomata = new CellularAutomata(Size, ctx);

        cellularAutomata.Create();
        setInterval((): void => cellularAutomata.Next(), 1000);
    })
    .catch((reason: any): void => {
        console.error(`---`);
        console.error(`Error InsertCellularAutomata function.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    })
}