/**
 * @function
 * @name InsertCellularAutomata
 * @param {string} CanvasID
 * @returns {Promise<void>}
 * @description This function inserts the Cellular Automata "Artificial Intelligence" into the HTML on a canvas. Warning: the Height and Width must measure the same.
 */
async function InsertCellularAutomata(CanvasID: string): Promise<void>
{
    await new Promise<void>((): void => {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {HTMLCanvasElement}
         * @alias Canvas
         */
        const Canvas: HTMLCanvasElement = (document.getElementById(CanvasID) as HTMLCanvasElement);

        if (Canvas.clientHeight === Canvas.clientWidth)
        {
            // Constants.
            /**
             * @access private
             * @member
             * @constant
             * @type {number}
             * @alias Size
             */
            const Size: number = Number(Canvas.clientHeight);
            
            /**
             * @access private
             * @member
             * @constant
             * @type {CanvasRenderingContext2D | null}
             * @name Context
             */
            const Context: (CanvasRenderingContext2D | null) = Canvas.getContext(`2d`);



            // Objects.
            /**
             * @access private
             * @member
             * @constant
             * @type {CellularAutomata}
             * @name OCellularAutomata
             */
            const OCellularAutomata: CellularAutomata = new CellularAutomata(Size, Context);

            OCellularAutomata.Create();
            setInterval(async (): Promise<void> => await OCellularAutomata.Next(), 1000);
        }
        else
        {
            console.info(`---`);
            console.info(`Canvas' id: ${Canvas.id}`);
            console.info(`Canvas Height: ${Canvas.clientHeight}`);
            console.info(`Canvas Width: ${Canvas.clientWidth}`);
            console.info(`---`);
        }
    })
    .catch<void>((reason: any): void => {
        console.error(`---`);
        console.error(`Error InsertCellularAutomata function.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    });
}