declare module TcHmiCharting {
    class Area {
        /** The canvas as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement | undefined;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The backgroundColor as string. */
        protected __backgroundColor: string | null;
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: number;
        /** The area with start and end x-coordinate as array*/
        protected __areas: Area.AreaRange[];
        /** The middlepoints with values of the areas as array*/
        protected __areaPositionAndValue: Area.AreaValueAndPosition[];
        /**
        * Creates a new LineGraph.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The optional canvas element to drawing.
        */
        constructor(canvas?: HTMLCanvasElement);
        /**
        * Draws the lineGraph to the canvas.
        * @function
        * @param {LineGraph.Line} line      The line (yAxis and points) to drawing.
        * @param {XAxis} xAxis      The xAxis.
        */
        draw(xAxis: XAxis, yAxis: YAxis): void;
        /**
        * Sets the canvas.
        * @function
        * @param {HTMLCanvasElement} canvas  The new canvas.
        */
        setCanvas(canvas: HTMLCanvasElement): void;
        /**
        * Returns the canvas.
        * @function
        * @returns {HTMLCanvasElement} The canvas of the lineGraph.
        */
        getCanvas(): HTMLCanvasElement | undefined;
        /**
        * Sets the drawingBorder.
        * @function
        * @param {number} drawingBorder  The new drawingBorder.
        */
        setDrawingBorder(drawingBorder: number): void;
        /**
        * Returns the areas of the lineGraph areas as array.
        * @function
        * @returns {Area.AreaRange[]} The areas of the lineGraph areas.
        */
        getAreas(): Area.AreaRange[];
        /**
        * Removes all middlePoints of the lineGraph.
        * @function
        */
        removeAllAreas(): void;
        /**
        * Returns the middlePoints with values of the lineGraph areas.
        * @function
        * @returns {Area.AreaValueAndPosition[]} The middlePoints with values of the lineGraph areas.
        */
        getAreasPositionAndValue(): Area.AreaValueAndPosition[];
        /**
        * Removes all middlePoints of the lineGraph.
        * @function
        */
        addArea(area: Area.AreaRange): void;
        /**
        * Sets the backgroundColor.
        * @function
        * @param {string} backgroundColor  The new backgroundColor.
        */
        setBackgroundColor(backgroundColor: string | null): void;
        /**
       * Returns the backgroundColor.
       * @function
       * @returns {string} The backgroundColor value.
       */
        getBackgroundColor(): string | null;
    }
    module Area {
        interface AreaRange {
            beginX: number;
            endX: number;
        }
        interface AreaValueAndPosition {
            xBeginPosition: number;
            xEndPosition: number;
            xBeginValue: number;
            xEndValue: number;
        }
    }
}
declare module TcHmiCharting {
    class IChart {
        /** The elementRoot as jquery object. */
        protected __elementRoot: JQuery;
        /** The canvas to drawing axis, grid and subgrid as HTMLCanvasElement. */
        protected __canvasFrame: HTMLCanvasElement | null;
        /** The canvas to drawing the lines as HTMLCanvasElement. */
        protected __canvasDrawing: HTMLCanvasElement | null;
        /** The canvas frame context as CanvasRenderingContext2D. */
        protected __contextFrame: CanvasRenderingContext2D | null;
        /** The canvas context drawing as CanvasRenderingContext2D. */
        protected __contextDrawing: CanvasRenderingContext2D | null;
        /** The canvas to drawing the graphs as HTMLCanvasElement. */
        protected __canvasGraph: HTMLCanvasElement | null;
        /** The yAxis as YAxis[]. */
        protected __yAxis: YAxis[];
        /** The xAxis as XAxis object. */
        protected __xAxis: XAxis | null;
        /** The grid as Grid object. */
        protected __grid: Grid | null;
        /** The subgrid as Subgrid object. */
        protected __subgrid: Subgrid | null;
        private __hasChanged;
        /** The yAxisWidth as number. */
        protected __yAxisWidth: number | null;
        /** The yLabelFontFamily as string. */
        protected __yLabelFontFamily: TcHmi.FontFamily | null;
        /** The yLabelFontSize as number. */
        protected __yLabelFontSize: number | null;
        /** The yLabelFontSizeUnit as string. */
        protected __yLabelFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The yLabelFontWeight as string. */
        protected __yLabelFontWeight: TcHmi.FontWeight | null;
        /** The yShowLabels as boolean. */
        protected __yShowLabels: boolean;
        /** The yMainTickSteps as number. */
        protected __yMainTickSteps: number | null;
        /** The ySubTickSteps as number. */
        protected __ySubTickSteps: number | null;
        /** The showYSubTicks as boolean. */
        protected __showYSubTicks: boolean;
        /**
        * Creates a new IChart.
        * @constructor
        * @param {JQuery} elementRoot      The root element where the canvas elements added to.
        */
        constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
        /**
        * Adds a xAxis (only one xAxis are exists).
        * @function
        */
        addXAxis(): void;
        /**
        * Adds a yAxis.
        * @function
        * @param {IAxis.Position} position The position where the yAxis should added.
        */
        addYAxis(position: IAxis.Position): void;
        /**
        * Adds a yAxis at index.
        * @function
        * @param {IAxis.Position} position The position where the yAxis should added.
        * @param {number} index The index where the new yAxis should added in array.
        */
        addYAxisAtPosition(index: number, position: IAxis.Position): void;
        /**
        * Adds a grid (only one grid are exists).
        * @function
        */
        addGrid(): void;
        /**
        * Delete the grid.
        * @function
        */
        deleteGrid(): void;
        /**
        * Adds a subgrid (only one subgrid are exists).
        * @function
        */
        addSubgrid(): void;
        /**
        * Delete the subgrid.
        * @function
        */
        deleteSubgrid(): void;
        /**
        * Removes all canvas elements.
        * @function
        */
        remove(): void;
        /**
        * Clears all canvas elements.
        * @function
        */
        clear(width: number, height: number): void;
        /**
        * Returns all yAxis.
        * @function
        * @returns {YAxis[]} The yAxis.
        */
        getYAxis(): YAxis[];
        /**
        * Returns the specific yAxis.
        * @function
        * @param {number} index The index.
        * @returns {YAxis} The yAxis at index.
        */
        getYAxisAtPosition(index: number): YAxis;
        /**
        * Returns the xAxis.
        * @function
        * @returns {XAxis} The xAxis.
        */
        getXAxis(): XAxis | null;
        /**
        * Returns the grid.
        * @function
        * @returns {Grid} The grid.
        */
        getGrid(): Grid | null;
        /**
        * Returns the subgrid.
        * @function
        * @returns {Subgrid} The subgrid.
        */
        getSubgrid(): Subgrid | null;
        /**
        * Returns the yAxisWidth.
        * @function
        * @returns {number} The yAxisWidth.
        */
        getYAxisWidth(): number | null;
        /**
        * Returns the yLabelFontFamily.
        * @function
        * @returns {string} The yLabelFontFamily.
        */
        getYLabelFontFamily(): string | null;
        /**
        * Returns the yLabelFontSize.
        * @function
        * @returns {number} The yLabelFontSize.
        */
        getYLabelFontSize(): number | null;
        /**
        * Returns the yLabelFontSizeUnit.
        * @function
        * @returns {string} The yLabelFontSizeUnit.
        */
        getYLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | null;
        /**
        * Returns the yLabelFontWeight.
        * @function
        * @returns {string} The yLabelFontWeight.
        */
        getYLabelFontWeight(): "Normal" | "Bold" | "Auto" | null;
        /**
        * Returns the yShowLabels.
        * @function
        * @returns {boolean} The yShowLabels.
        */
        getYShowLabels(): boolean;
        /**
        * Returns the yMainTickSteps.
        * @function
        * @returns {number} The yMainTickSteps.
        */
        getYMainTickSteps(): number | null;
        /**
        * Returns the ySubTickSteps.
        * @function
        * @returns {number} The ySubTickSteps.
        */
        getYSubTickSteps(): number | null;
        /**
        * Returns the canvas object where the graphs are drawing.
        * @function
        * @returns {JQuery} The canvas where drawing the graphs.
        */
        getCanvasDrawing(): JQuery<HTMLElement> | null;
        /**
        * Returns the canvas object where the axis, grid and subgrid are drawing.
        * @function
        * @returns {JQuery} The canvas where drawing axis, grid and subgrid.
        */
        getCanvasFrame(): JQuery<HTMLElement> | null;
        /**
        * Returns the hasChanged attribute which saved if axis, grid and subgrid must be redrawing.
        * @function
        * @returns {boolean} The hasChanged attribute.
        */
        getHasChanged(): boolean;
        /**
        * Sets the yAxisWidth.
        * @function
        * @param {number} yAxisWidth  The new yAxisWidth.
        */
        setYAxisWidth(yAxisWidth: number | null): void;
        /**
        * Sets the labelFontFamily.
        * @function
        * @param {string} labelFontFamily  The new labelFontFamily.
        */
        setYLabelFontFamily(labelFontFamily: TcHmi.FontFamily | null | undefined): void;
        /**
        * Sets the labelFontSize.
        * @function
        * @param {number} labelFontSize  The new labelFontSize.
        */
        setYLabelFontSize(labelFontSize: number | null): void;
        /**
        * Sets the labelFontSizeUnit.
        * @function
        * @param {string} labelFontSizeUnit  The new labelFontSizeUnit.
        */
        setYLabelFontSizeUnit(labelFontSizeUnit: TcHmi.FontSizeUnit | null): void;
        /**
        * Sets the labelFontWeight.
        * @function
        * @param {string} labelFontWeight  The new labelFontWeight.
        */
        setYLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
        /**
        * Sets the yShowLabels.
        * @function
        * @param {boolean} yShowLabels  The new yShowLabels.
        */
        setYShowLabels(yShowLabels: boolean): void;
        /**
        * Sets the yMainTickSteps.
        * @function
        * @param {number} yMainTickSteps  The new yMainTickSteps.
        */
        setYMainTickSteps(yMainTickSteps: number | null): void;
        /**
        * Sets the ySubTickSteps.
        * @function
        * @param {number} ySubTickSteps  The new ySubTickSteps.
        */
        setYSubTickSteps(ySubTickSteps: number | null): void;
        /**
        * Sets the showYSubTicks.
        * @function
        * @param {boolean} showYSubTicks  The new showYSubTicks.
        */
        setShowYSubTicks(showYSubTicks: boolean): void;
        /**
        * Creates the canvas where axis, grid and subgrid are drawing.
        * @function
        */
        __initCanvas(canvasWidth: number, canvasHeight: number): void;
        /**
        * Sets the hasChanged.
        * @function
        * @param {boolean} hasChanged  The hasChanged attribute.
        */
        setHasChanged(hasChanged: boolean): void;
    }
}
declare module TcHmiCharting {
    class LineChart extends TcHmiCharting.IChart {
        /** The lineGraph as LineGraph.Line[]. */
        protected __lineGraph: LineGraph.Line[];
        /** The lineGraphs as  LineGraph[]. */
        protected __lineGraphs: LineGraph[];
        /** The lineChanged as boolean. */
        protected __lineChanged: boolean;
        /** The widthLeft as number. */
        protected __widthLeft: number | null;
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: number;
        /**
        * Creates a new LineChart.
        * @constructor
        * @param {JQuery} elementRoot      The root element where the canvas elements added to.
        */
        constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
        /**
        * Delete the yAxis at index.
        * @function
        * @param {number} index      The index.
        */
        deleteYAxis(index: number): void;
        /**
        * Delete all yAxis.
        * @function
        */
        deleteAllYAxis(): void;
        /**
        * Adds a lineGraph.
        * @function
        * @param {LineGraph.Line} newGraph      The newGraph (yAxis and points for drawing).
        */
        addGraph(newGraph: LineGraph.Line): void;
        /**
        * Delete the graph at index.
        * @function
        * @param {number} index      The index.
        */
        deleteGraph(index: number): void;
        /**
        * Delete all graphs.
        * @function
        */
        deleteAllGraphs(): void;
        /**
        * Removes all canvas elements and clears all arrays.
        * @function
        */
        remove(): void;
        /**
        * Clears all canvas elements and calls all delete functions.
        * @function
        */
        clear(width: number, height: number): void;
        /**
        * Returns the lineGraph.
        * @function
        * @returns {LineGraph.Line[]} The lineGraph.
        */
        getLines(): LineGraph.Line[];
        /**
        * Returns the lineGraph at position.
        * @function
        * @param {number} index      The index.
        * @returns {LineGraph.Line} The lineGraph.
        */
        getLinesAtPosition(index: number): LineGraph.Line;
        /**
        * Returns the lineGraphs.
        * @function
        * @returns {LineGraph[]} The lineGraphs.
        */
        getLineGraphs(): LineGraph[];
        /**
        * Returns the lineGraphs at position.
        * @function
        * @param {number} index      The index.
        * @returns {LineGraph} The lineGraphs.
        */
        getLineGraphsAtPosition(index: number): LineGraph;
        /**
        * Returns the drawingBorder.
        * @function
        * @returns {string} The drawingBorder of the lineGraph.
        */
        getDrawingBorder(): number;
        /**
        * Sets the lineChanged which saved if graphs must be redrawing.
        * @function
        * @param {boolean} lineChanged  The lineChanged attribute.
        */
        setLineChanged(lineChanged: boolean): void;
        /**
        * Draws the lineChart if anything is changed.
        * @function
        */
        draw(): void;
    }
}
declare module TcHmiCharting {
    class LineAreaChart extends TcHmiCharting.IChart {
        /** The lineGraph as LineGraph.Line[]. */
        protected __lineGraph: LineAreaGraph.Line[];
        /** The lineGraphs as  LineGraph[]. */
        protected __lineGraphs: LineAreaGraph[];
        /** The lineChanged as boolean. */
        protected __lineChanged: boolean;
        /** The widthLeft as number. */
        protected __widthLeft: number | null;
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: number;
        /**
        * Creates a new LineChart.
        * @constructor
        * @param {JQuery} elementRoot      The root element where the canvas elements added to.
        */
        constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
        /**
        * Delete the yAxis at index.
        * @function
        * @param {number} index      The index.
        */
        deleteYAxis(index: number): void;
        /**
        * Delete all yAxis.
        * @function
        */
        deleteAllYAxis(): void;
        /**
        * Adds a lineGraph.
        * @function
        * @param {LineAreaGraph.Line} newGraph      The newGraph (optional yAxis and points for drawing).
        */
        addGraph(newGraph: LineAreaGraph.Line): void;
        /**
        * Delete the graph at index.
        * @function
        * @param {number} index      The index.
        */
        deleteGraph(index: number): void;
        /**
        * Delete all graphs.
        * @function
        */
        deleteAllGraphs(): void;
        /**
        * Removes all canvas elements and clears all arrays.
        * @function
        */
        remove(): void;
        /**
        * Clears all canvas elements and calls all delete functions.
        * @function
        */
        clear(width: number, height: number): void;
        /**
        * Returns the lineGraph.
        * @function
        * @returns {LineAreaGraph.Line[]} The lineGraph.
        */
        getLines(): LineAreaGraph.Line[];
        /**
        * Returns the lineGraph at position.
        * @function
        * @param {number} index      The index.
        * @returns {LineAreaGraph.Line} The lineGraph.
        */
        getLinesAtPosition(index: number): LineAreaGraph.Line;
        /**
        * Returns the lineGraphs.
        * @function
        * @returns {LineAreaGraph[]} The lineGraphs.
        */
        getLineGraphs(): LineAreaGraph[];
        /**
        * Returns the lineGraphs at position.
        * @function
        * @param {number} index      The index.
        * @returns {LineAreaGraph} The lineGraphs.
        */
        getLineGraphsAtPosition(index: number): LineAreaGraph;
        /**
        * Returns the drawingBorder.
        * @function
        * @returns {string} The drawingBorder of the lineGraph.
        */
        getDrawingBorder(): number;
        /**
        * Sets the lineChanged which saved if graphs must be redrawing.
        * @function
        * @param {boolean} lineChanged  The lineChanged attribute.
        */
        setLineChanged(lineChanged: boolean): void;
        /**
        * Draws the lineChart if anything is changed.
        * @function
        */
        draw(): void;
    }
}
declare module TcHmiCharting {
    class BarChart extends TcHmiCharting.IChart {
        /** The barGraph as BarGraph.Bar[]. */
        protected __barGraph: BarGraph.Bar[];
        /** The barGraphs as  BarGraph[]. */
        protected __barGraphs: BarGraph[];
        /** The barChanged as boolean. */
        protected __barChanged: boolean;
        /** The widthLeft as number. */
        protected __widthLeft: number;
        /** The calculated width of the bars */
        protected __calcBarWidth: number;
        /** The width of the bars */
        protected __barWidth: number | null;
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: {
            height: number;
            width: number;
        };
        /**
        * Creates a new BarChart.
        * @constructor
        * @param {JQuery} elementRoot      The root element where the canvas elements added to.
        */
        constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
        /**
        * Delete the yAxis at index.
        * @function
        * @param {number} index      The index.
        */
        deleteYAxis(index: number): void;
        /**
        * Delete all yAxis.
        * @function
        */
        deleteAllYAxis(): void;
        /**
        * Adds a barGraph.
        * @function
        * @param {BarGraph.Bar} newGraph      The newGraph (yAxis and values for drawing).
        */
        addGraph(newGraph: BarGraph.Bar): void;
        /**
        * Delete the graph at index.
        * @function
        * @param {number} index      The index.
        */
        deleteGraph(index: number): void;
        /**
        * Delete all graphs.
        * @function
        */
        deleteAllGraphs(): void;
        /**
        * Removes all canvas elements and clears all arrays.
        * @function
        */
        remove(): void;
        /**
        * Clears all canvas elements and calls all delete functions.
        * @function
        */
        clear(width: number, height: number): void;
        /**
        * Returns the barGraph.
        * @function
        * @returns {BarGraph.Bar[]} The barGraph.
        */
        getBars(): BarGraph.Bar[];
        /**
        * Returns the barGraph at position.
        * @function
        * @param {number} index      The index.
        * @returns {BarGraph.Bar} The barGraph.
        */
        getBarsAtPosition(index: number): BarGraph.Bar;
        /**
        * Returns the barGraphs.
        * @function
        * @returns {BarGraph[]} The barGraphs.
        */
        getBarGraphs(): BarGraph[];
        /**
        * Returns the barGraphs at position.
        * @function
        * @param {number} index      The index.
        * @returns {BarGraph} The barGraphs.
        */
        getBarGraphsAtPosition(index: number): BarGraph;
        /**
        * Sets the barWidth.
        * @function
        * @param {number} barWidth  The new barWidth.
        */
        setBarWidth(barWidth: number | null): void;
        /**
        * Sets the barChanged which saved if graphs must be redrawing.
        * @function
        * @param {boolean} lineChanged  The barChanged attribute.
        */
        setBarChanged(barChanged: boolean): void;
        /**
        * Draws the barChart if anything is changed.
        * @function
        */
        draw(): void;
    }
}
declare module TcHmiCharting {
    class IAxis {
        /** The showAxis as boolean. */
        protected __showAxis: boolean;
        /** The showLabels as boolean. */
        protected __showLabels: boolean;
        /** The mainTickStartValue as number. */
        protected __mainTickStartValue: number | null;
        /** The mainTickSteps as number. */
        protected __mainTickSteps: number | null;
        /** The mainTickEndValue as number. */
        protected __mainTickEndValue: number | null;
        /** The subTickSteps as number. */
        protected __subTickSteps: number | null;
        /** The showSubTicks as boolean. */
        protected __showSubTicks: boolean;
        /** The mainTickStartValueOverride as number. */
        protected __mainTickStartValueOverride: number | null;
        /** The mainTickEndValueOverride as number. */
        protected __mainTickEndValueOverride: number | null;
        /** The labelFontFamily as string. */
        protected __labelFontFamily: TcHmi.FontFamily | null;
        /** The labelFontSize as number. */
        protected __labelFontSize: number | null;
        /** The labelFontSizeUnit as string. */
        protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The labelFontWeight as string. */
        protected __labelFontWeight: TcHmi.FontWeight | null;
        /** The labelFontColor as string. */
        protected __labelFontColor: string | null;
        /** The axisWidth as number. */
        protected __axisWidth: number | null;
        /** The axisColor as string. */
        protected __axisColor: string | null;
        /** The showAxisName as boolean. */
        protected __showAxisName: boolean;
        /** The axisName as string. */
        protected __axisName: string | null;
        /** The axisNameFontFamily as string. */
        protected __axisNameFontFamily: TcHmi.FontFamily | null;
        /** The axisNameFontSize as number. */
        protected __axisNameFontSize: number | null;
        /** The axisNameFontSizeUnit as string. */
        protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The axisNameFontWeight as string. */
        protected __axisNameFontWeight: TcHmi.FontWeight | null;
        /** The axisNameFontColor as string. */
        protected __axisNameFontColor: string | null;
        /** The decimalPlaces as number. */
        protected __decimalPlaces: number | null;
        /** The unit as string. */
        protected __unit: string | null;
        /** The autoScaling as boolean. */
        protected __autoScaling: boolean;
        /** The id as number. */
        protected __id: number;
        /** The canvas element as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /**
        * Creates a new IAxis.
        * @constructor
        * @param {number} id      The id of IAxis (index in parent array).
        * @param {HTMLCanvasElement} canvas      The canvas element where drawing the axis.
        */
        constructor(id: number, canvas: HTMLCanvasElement);
        /**
        * Returns an array with all labels as string for the axis.
        * @function
        * @private
        * @returns {string[]} The array with all labels as string.
        */
        getCalculatedLabels(): string[];
        /**
        * Returns an array with all labels as number for the axis.
        * @function
        * @returns {number[]} The array with all labels as number.
        */
        getCalculatedNumbers(): number[];
        /**
        * Returns the calculated width of a string.
        * @function
        * @private
        * @param {string} label      The label for calculating.
        * @returns {number} The width of label.
        */
        calculateLabelWidth(label: string | null): number;
        /**
        * Returns the calculated width of the longest label of all axis labels.
        * @function
        * @private
        * @returns {number} The width of the longest label.
        */
        getLongestTextWidth(): number;
        /**
        * Returns the height of the label content.
        * @function
        * @private
        * @param {string} content      The content of label.
        * @returns {number} The height of the content label.
        */
        calculateLabelHeight(content: string | null): number;
        /**
        * Returns the height of the axis name content.
        * @function
        * @private
        * @param {string} content      The content of axis name.
        * @returns {number} The height of the axis name content.
        */
        calculateAxisNameHeight(content: string): number;
        /**
        * Returns the width of the axis name content.
        * @function
        * @private
        * @param {string} content      The content of axis name.
        * @returns {number} The width of the axis name content.
        */
        calculateAxisNameWidth(content: string): number;
        /**
        * Returns the id.
        * @function
        * @returns {number} The id of the axis.
        */
        getId(): number;
        /**
        * Sets the showLabels.
        * @function
        * @param {boolean} showLabels  The new showLabels.
        */
        setShowLabels(showLabels: boolean): void;
        /**
       * Sets the showAxis.
       * @function
       * @param {boolean} showAxis  The new showAxis.
       */
        setShowAxis(showAxis: boolean): void;
        /**
       * Returns the showAxis.
       * @function
       * @returns {boolean} The showAxis value.
       */
        getShowAxis(): boolean;
        /**
        * Returns the showLabels.
        * @function
        * @returns {boolean} The showLabels.
        */
        getShowLabels(): boolean;
        /**
        * Sets the showSubTicks.
        * @function
        * @param {boolean} showSubTicks  The new showSubTicks.
        */
        setShowSubTicks(showSubTicks: boolean): void;
        /**
        * Returns the showSubTicks.
        * @function
        * @returns {boolean} The showSubTicks.
        */
        getShowSubTicks(): boolean;
        /**
        * Sets the mainTickStartValue.
        * @function
        * @param {number} mainTickStartValue  The new mainTickStartValue.
        */
        setMainTickStartValue(mainTickStartValue: number | null): void;
        /**
        * Returns the mainTickStartValue.
        * @function
        * @returns {number} The mainTickStartValue.
        */
        getMainTickStartValue(): number | null;
        /**
        * Sets the mainTickSteps.
        * @function
        * @param {number} mainTickSteps  The new mainTickSteps.
        */
        setMainTickSteps(mainTickSteps: number | null): void;
        /**
        * Returns the mainTickSteps.
        * @function
        * @returns {number} The mainTickSteps.
        */
        getMainTickSteps(): number | null;
        /**
        * Sets the mainTickEndValue.
        * @function
        * @param {number} mainTickEndValue  The new mainTickEndValue.
        */
        setMainTickEndValue(mainTickEndValue: number | null): void;
        /**
        * Returns the mainTickEndValue.
        * @function
        * @returns {number} The mainTickEndValue.
        */
        getMainTickEndValue(): number | null;
        /**
        * Sets the subTickSteps.
        * @function
        * @param {number} subTickSteps  The new subTickSteps.
        */
        setSubTickSteps(subTickSteps: number | null): void;
        /**
        * Returns the subTickSteps.
        * @function
        * @returns {number} The subTickSteps.
        */
        getSubTickSteps(): number | null;
        /**
        * Sets the labelFontFamily.
        * @function
        * @param {string} labelFontFamily  The new labelFontFamily.
        */
        setLabelFontFamily(labelFontFamily: TcHmi.FontFamily | null | undefined): void;
        /**
        * Returns the labelFontFamily.
        * @function
        * @returns {string} The labelFontFamily.
        */
        getLabelFontFamily(): string | null;
        /**
        * Sets the labelFontSize.
        * @function
        * @param {number} labelFontSize  The new labelFontSize.
        */
        setLabelFontSize(labelFontSize: number | null): void;
        /**
        * Returns the labelFontSize.
        * @function
        * @returns {number} The labelFontSize.
        */
        getLabelFontSize(): number | null;
        /**
        * Sets the labelFontSizeUnit.
        * @function
        * @param {string} labelFontSizeUnit  The new labelFontSizeUnit.
        */
        setLabelFontSizeUnit(labelFontSizeUnit: TcHmi.FontSizeUnit | null): void;
        /**
        * Returns the labelFontSizeUnit.
        * @function
        * @returns {string} The labelFontSizeUnit.
        */
        getLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | null;
        /**
        * Sets the labelFontWeight.
        * @function
        * @param {string} labelFontWeight  The new labelFontWeight.
        */
        setLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
        /**
        * Returns the labelFontWeight.
        * @function
        * @returns {string} The labelFontWeight.
        */
        getLabelFontWeight(): "Normal" | "Bold" | "Auto" | null;
        /**
        * Sets the labelFontColor.
        * @function
        * @param {string} labelFontColor  The new labelFontColor.
        */
        setLabelFontColor(labelFontColor: string | null): void;
        /**
        * Returns the labelFontColor.
        * @function
        * @returns {string} The labelFontColor.
        */
        getLabelFontColor(): string | null;
        /**
        * Sets the showAxisName.
        * @function
        * @param {boolean} showAxisName  The new showAxisName.
        */
        setShowAxisName(showAxisName: boolean): void;
        /**
        * Returns the showAxisName.
        * @function
        * @returns {boolean} The showAxisName.
        */
        getShowAxisName(): boolean;
        /**
        * Sets the axisWidth.
        * @function
        * @param {number} axisWidth  The new axisWidth.
        */
        setAxisWidth(axisWidth: number | null): void;
        /**
        * Returns the axisWidth.
        * @function
        * @returns {number} The axisWidth.
        */
        getAxisWidth(): number | null;
        /**
        * Sets the axisColor.
        * @function
        * @param {string} axisColor  The new axisColor.
        */
        setAxisColor(axisColor: string | null): void;
        /**
        * Returns the axisColor.
        * @function
        * @returns {string} The axisColor.
        */
        getAxisColor(): string | null;
        /**
        * Returns the axisName.
        * @function
        * @returns {string} The axisName.
        */
        getAxisName(): string | null;
        /**
        * Sets the axisNameFontFamily.
        * @function
        * @param {string} axisNameFontFamily  The new axisNameFontFamily.
        */
        setAxisNameFontFamily(axisNameFontFamily: TcHmi.FontFamily | null | undefined): void;
        /**
        * Returns the axisNameFontFamily.
        * @function
        * @returns {string} The axisNameFontFamily.
        */
        getAxisNameFontFamily(): string | null;
        /**
        * Sets the axisNameFontSize.
        * @function
        * @param {number} axisNameFontSize  The new axisNameFontSize.
        */
        setAxisNameFontSize(axisNameFontSize: number | null): void;
        /**
        * Returns the axisNameFontSize.
        * @function
        * @returns {number} The axisNameFontSize.
        */
        getAxisNameFontSize(): number | null;
        /**
        * Sets the axisNameFontSizeUnit.
        * @function
        * @param {string} axisNameFontSizeUnit  The new axisNameFontSizeUnit.
        */
        setAxisNameFontSizeUnit(axisNameFontSizeUnit: TcHmi.FontSizeUnit | null): void;
        /**
        * Returns the axisNameFontSizeUnit.
        * @function
        * @returns {string} The axisNameFontSizeUnit.
        */
        getAxisNameFontSizeUnit(): "px" | "%" | "em" | "rem" | null;
        /**
        * Sets the axisNameFontWeight.
        * @function
        * @param {string} axisNameFontWeight  The new axisNameFontWeight.
        */
        setAxisNameFontWeight(axisNameFontWeight: TcHmi.FontWeight | null): void;
        /**
        * Returns the axisNameFontWeight.
        * @function
        * @returns {string} The axisNameFontWeight.
        */
        getAxisNameFontWeight(): "Normal" | "Bold" | "Auto" | null;
        /**
        * Sets the axisNameFontColor.
        * @function
        * @param {string} axisNameFontColor  The new axisNameFontColor.
        */
        setAxisNameFontColor(axisNameFontColor: string | null): void;
        /**
        * Returns the axisNameFontColor.
        * @function
        * @returns {string} The axisNameFontColor.
        */
        getAxisNameFontColor(): string | null;
        /**
        * Sets the decimalPlaces.
        * @function
        * @param {number} decimalPlaces  The new decimalPlaces.
        */
        setDecimalPlaces(decimalPlaces: number | null): void;
        /**
        * Returns the decimalPlaces.
        * @function
        * @returns {number} The decimalPlaces.
        */
        getDecimalPlaces(): number | null;
        /**
        * Sets the unit.
        * @function
        * @param {string} unit  The new unit.
        */
        setUnit(unit: string | null): void;
        /**
        * Returns the unit.
        * @function
        * @returns {string} The unit.
        */
        getUnit(): string | null;
        /**
        * Sets the autoScaling.
        * @function
        * @param {boolean} autoScaling  The new autoScaling.
        */
        setAutoScaling(autoScaling: boolean): void;
        /**
        * Returns the autoScaling.
        * @function
        * @returns {boolean} The autoScaling.
        */
        getAutoScaling(): boolean;
        /**
        * Sets the mainTickStartValueOverride.
        * @function
        * @param {number} mainTickStartValueOverride  The new mainTickStartValueOverride.
        */
        setMainTickStartValueOverride(mainTickStartValueOverride: number | null): void;
        /**
        * Returns the mainTickStartValueOverride.
        * @function
        * @returns {number} The mainTickStartValueOverride.
        */
        getMainTickStartValueOverride(): number | null;
        /**
        * Sets the mainTickEndValueOverride.
        * @function
        * @param {number} mainTickEndValueOverride  The new mainTickEndValueOverride.
        */
        setMainTickEndValueOverride(mainTickEndValueOverride: number | null): void;
        /**
        * Returns the mainTickEndValueOverride.
        * @function
        * @returns {number} The mainTickEndValueOverride.
        */
        getMainTickEndValueOverride(): number | null;
    }
    module IAxis {
        enum Position {
            Left = 0,
            Right = 1
        }
    }
}
declare module TcHmiCharting {
    class XAxis extends TcHmiCharting.IAxis {
        /** The width of yAxis as number. */
        protected __width: number;
        /** The height of yAxis as number. */
        protected __height: number;
        /** The lineHeight of yAxis as number. */
        protected __lineWidth: number;
        /** The diffStartLabelAndLine of yAxis as number. */
        protected __diffStartLabelAndLine: number;
        /** The diffEndLabelAndLine of yAxis as number. */
        protected __diffEndLabelAndLine: number;
        /** The xAxisCallback as (e) => void. */
        protected __xAxisCallback: null | ((e: number) => string | null);
        /** The beginning of x Axis */
        protected __xAxisLeftWidth: number;
        /**
        * Creates a new YAxis.
        * @constructor
        * @param {number} id      The number of yAxis.
        * @param {HTMLCanvasElement} canvas      The canvas element where drawing the grid.
        */
        constructor(id: number, canvas: HTMLCanvasElement);
        /**
        * Draws the xAxis to the canvas.
        * @function
        * @param {LineGraph.Point} startPoint      The startpoint to drawing (bottom/left).
        * @param {LineGraph.Point} endPoint      The endpoint to drawing (top/right).
        */
        drawAxis(startPoint: LineGraph.Point, endPoint: LineGraph.Point): void;
        /**
       * Sets the axisName.
       * @function
       * @param {string} axisName  The new axisName.
       */
        setAxisName(axisName: string | null): void;
        /**
       * Returns the height.
       * @function
       * @returns {number} The height of the xAxis.
       */
        getHeight(): number;
        /**
        * Returns the width.
        * @function
        * @returns {number} The width of the xAxis.
        */
        getWidth(): number;
        /**
        * Returns the lineHeight.
        * @function
        * @returns {number} The lineHeight of the xAxis.
        */
        getLineWidth(): number;
        /**
        * Returns the diffStartLabelAndLine.
        * @function
        * @private
        * @returns {number} The diffStartLabelAndLine of the xAxis.
        */
        getDiffStartLabelAndLine(): number;
        /**
        * Returns the diffEndLabelAndLine.
        * @function
        * @private
        * @returns {number} The diffStartLabelAndLine of the xAxis.
        */
        getDiffEndLabelAndLine(): number;
        /**
        * Sets the xAxisCallback.
        * @function
        * @param {(e) => void} callback  The new xAxisCallback.
        */
        setXAxisCallback(callback: (e: number) => string | null): void;
        /**
        * Returns the xAxisCallback.
        * @function
        * @returns {number} The yAisCallback of the xAxis.
        */
        getXAxisCallback(): ((e: number) => string | null) | null;
        /**
        * Returns the xAxisLeftWidth.
        * @function
        * @private
        * @returns {number} The xAxisLeftWidth of the xAxis.
        */
        getXAxisLeftWidth(): number;
    }
}
declare module TcHmiCharting {
    class YAxis extends TcHmiCharting.IAxis {
        /** The position as IAxis.Position. */
        protected __position: IAxis.Position;
        /** The width of yAxis as number. */
        protected __width: number;
        /** The height of yAxis as number. */
        protected __height: number;
        /** The lineHeight of yAxis as number. */
        protected __lineHeight: number;
        /** The diffStartLabelAndLine of yAxis as number. */
        protected __diffStartLabelAndLine: number;
        /** The diffEndLabelAndLine of yAxis as number. */
        protected __diffEndLabelAndLine: number;
        /** The yAxisCallback as (e) => void. */
        protected __yAxisCallback: null | ((e: number) => string | null);
        /**
        * Creates a new YAxis.
        * @constructor
        * @param {number} id      The number of yAxis.
        * @param {HTMLCanvasElement} canvas      The canvas element where drawing the grid.
        * @param {IAxis.Position} position      The position where the yAxis should added.
        */
        constructor(id: number, canvas: HTMLCanvasElement, position: IAxis.Position);
        /**
        * Draws the yAxis to the canvas.
        * @function
        * @param {LineGraph.Point} startPoint      The startpoint to drawing (bottom/left).
        * @param {LineGraph.Point} endPoint      The endpoint to drawing (top/right).
        * @param {showOnlyYAxis} showOnlyYAxis      Only y Axis is drawing..
        */
        drawAxis(startPoint: LineGraph.Point, endPoint: LineGraph.Point, showOnlyYAxis: boolean, labelSize: {
            first: number;
            latest: number;
        }): void;
        /**
        * Sets the position.
        * @function
        * @param {number} position  The new position.
        */
        setPosition(position: IAxis.Position): void;
        /**
        * Returns the position.
        * @function
        * @returns {IAxis.Position} The position.
        */
        getPosition(): IAxis.Position;
        /**
        * Sets the axisName.
        * @function
        * @param {string} axisName  The new axisName.
        */
        setAxisName(axisName: string | null): void;
        /**
        * Returns the height.
        * @function
        * @returns {number} The height of the yAxis.
        */
        getHeight(): number;
        /**
        * Returns the width.
        * @function
        * @returns {number} The width of the yAxis.
        */
        getWidth(): number;
        /**
        * Returns the lineHeight.
        * @function
        * @returns {number} The lineHeight of the yAxis.
        */
        getLineHeight(): number;
        /**
        * Returns the diffStartLabelAndLine.
        * @function
        * @private
        * @returns {number} The diffStartLabelAndLine of the yAxis.
        */
        getDiffStartLabelAndLine(): number;
        /**
        * Returns the diffEndLabelAndLine.
        * @function
        * @private
        * @returns {number} The diffStartLabelAndLine of the yAxis.
        */
        getDiffEndLabelAndLine(): number;
        /**
        * Sets the yAxisCallback.
        * @function
        * @param {(e) => string | null} callback  The new yAxisCallback.
        */
        setYAxisCallback(callback: null | ((e: number) => string | null)): void;
        /**
        * Returns the yAxisCallback.
        * @function
        * @returns {number} The yAisCallback of the yAxis.
        */
        getYAxisCallback(): ((e: number) => string | null) | null;
    }
}
declare module TcHmiCharting {
    class IGrid {
        /** The showHorizontalLines as boolean. */
        protected __showHorizontalLines: boolean;
        /** The showVerticalLines as boolean. */
        protected __showVerticalLines: boolean;
        /** The lineWidth as positive number without zero. */
        protected __lineWidth: number | null;
        /** The lineColor as string. */
        protected __lineColor: string | null;
        /** The line style as enum. */
        protected __lineStyle: string | null;
        /** The backgroundColor as string. */
        protected __backgroundColor: string | null;
        /** The canvas as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /**
        * Creates a new IGrid.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The canvas element to drawing.
        */
        constructor(canvas: HTMLCanvasElement);
        /**
       * Sets the lineWidth.
       * @function
       * @param {number} lineWidth  The new lineWidth.
       */
        setLineWidth(lineWidth: number | null): void;
        /**
       * Returns the lineWidth.
       * @function
       * @returns {number} The lineWidth value.
       */
        getLineWidth(): number | null;
        /**
        * Sets the backgroundColor.
        * @function
        * @param {string} backgroundColor  The new backgroundColor.
        */
        setBackgroundColor(backgroundColor: string | null): void;
        /**
       * Returns the backgroundColor.
       * @function
       * @returns {string} The backgroundColor value.
       */
        getBackgroundColor(): string | null;
        /**
        * Sets the lineColor.
        * @function
        * @param {string} lineColor  The new lineColor.
        */
        setLineColor(lineColor: string | null): void;
        /**
       * Returns the lineColor.
       * @function
       * @returns {string} The lineColor value.
       */
        getLineColor(): string | null;
        /**
        * Sets the lineStyle.
        * @function
        * @param {string} lineStyle  The new lineStyle.
        */
        setLineStyle(lineStyle: string | null): void;
        /**
       * Returns the lineStyle.
       * @function
       * @returns {IGrid.LineStyle} The lineStyle value.
       */
        getLineStyle(): string | null;
        /**
        * Sets the showVerticalLines.
        * @function
        * @param {boolean} showVerticalLines  The new showVerticalLines.
        */
        setShowVerticalLines(showVerticalLines: boolean): void;
        /**
       * Returns the showVerticalLines.
       * @function
       * @returns {boolean} The showVerticalLines value.
       */
        getShowVerticalLines(): boolean;
        /**
        * Sets the showHorizontalLines.
        * @function
        * @param {boolean} showHorizontalLines  The new showHorizontalLines.
        */
        setShowHorizontalLines(showHorizontalLines: boolean): void;
        /**
       * Returns the showHorizontalLines.
       * @function
       * @returns {boolean} The showHorizontalLines value.
       */
        getShowHorizontalLines(): boolean;
    }
    module IGrid {
        interface Rect {
            startPoint: LineGraph.Point;
            width: number;
            height: number;
        }
        enum LineStyle {
            Dotted = 0,
            Dashed = 1,
            Solid = 2
        }
    }
}
declare module TcHmiCharting {
    class Grid extends TcHmiCharting.IGrid {
        /**
        * Creates a new Grid.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The canvas element where drawing the grid.
        */
        constructor(canvas: HTMLCanvasElement);
        /**
        * Draws the grid to the canvas.
        * @function
        * @param {LineGraph.Point} startPoint      The startpoint to drawing (bottom/left).
        * @param {number} width      The width of the grid.
        * @param {number} height      The height of the grid.
        * @param {number} numberOfWidthLines      The number of width lines.
        * @param {number} numberOfHeightLines      The number of height lines.
        * @param {number} drawingBorder The border (bigger than grid) of all sites.
        */
        draw(startPoint: LineGraph.Point, width: number, height: number, numberOfWidthLines: number, numberOfHeightLines: number, drawingBorder: {
            height: number;
            width: number;
        }): void;
    }
}
declare module TcHmiCharting {
    class Subgrid extends TcHmiCharting.IGrid {
        /**
        * Creates a new Grid.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The canvas element where drawing the grid.
        */
        constructor(canvas: HTMLCanvasElement);
        /**
        * Draws the subgrid to the canvas.
        * @function
        * @param {LineGraph.Point} startPoint      The startpoint to drawing (bottom/left).
        * @param {number} width      The width of the subgrid.
        * @param {number} height      The height of the subgrid.
        * @param {number} numberOfLinesBetweenMainGridWidth      The number of lines between maingrid in width.
        * @param {number} widthBetweenMainGrid      The width between two main grid lines.
        * @param {number} numberOfLinesBetweenMainGridHeight      The number of lines between maingrid in height.
        * @param {number} heightBetweenMainGrid      The height between two main grid lines.
        * @param {number} numberOfMainGridWidthLines      The number of main grid width lines.
        * @param {number} numberOfMainGridHeightLines      The number of main grid height lines.
        * @param {number} gridLineWidth The line width of the grid.
        * @param {number} drawingBorder The border (bigger than grid) of all sites.
        */
        draw(startPoint: LineGraph.Point, width: number, height: number, numberOfLinesBetweenMainGridWidth: number | null, widthBetweenMainGrid: number, numberOfLinesBetweenMainGridHeight: number | null, heightBetweenMainGrid: number, numberOfMainGridWidthLines: number, numberOfMainGridHeightLines: number, gridLineWidth: number, drawingBorder: {
            height: number;
            width: number;
        }): void;
    }
}
declare module TcHmiCharting {
    class IGraph {
        /** The canvas as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement | undefined;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /**
        * Creates a new IGraph.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The optional canvas element where drawing the grid.
        */
        constructor(canvas?: HTMLCanvasElement);
    }
}
declare module TcHmiCharting {
    class LineGraph extends TcHmiCharting.IGraph {
        /** The lineWidth as positive number without zero. */
        protected __lineWidth: number | null;
        /** The lineColor as string. */
        protected __lineColor: string | null;
        /** The pointDot as boolean. */
        protected __pointDot: boolean;
        /** The pointDotRadius as number. */
        protected __pointDotRadius: number | null;
        /** The pointDotFillCOlor as string. */
        protected __pointDotFillColor: string | null;
        /** The pointDotStrokeWidth as number. */
        protected __pointDotStrokeWidth: number | null;
        /** The pointDotStrokeColor as string. */
        protected __pointDotStrokeColor: string | null;
        /** The middlepoints of the lineGraph dots as array*/
        protected __points: LineGraph.Point[];
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: number;
        /**
        * Creates a new LineGraph.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The optional canvas element to drawing.
        */
        constructor(canvas?: HTMLCanvasElement);
        /**
        * Draws the lineGraph to the canvas.
        * @function
        * @param {LineGraph.Line} line      The line (yAxis and points) to drawing.
        * @param {XAxis} xAxis      The xAxis.
        */
        draw(line: LineGraph.Line, xAxis: XAxis): void;
        /**
        * Returns the middlePoints of the lineGraph dots.
        * @function
        * @returns {number} The middlePoints of the lineGraph dots.
        */
        getPoints(): LineGraph.Point[];
        /**
        * Removes all middlePoints of the lineGraph.
        * @function
        */
        removePoints(): void;
        /**
        * Sets the lineWidth.
        * @function
        * @param {number} lineWidth  The new lineWidth.
        */
        setLineWidth(lineWidth: number | null): void;
        /**
        * Returns the lineWidth.
        * @function
        * @returns {number} The lineWidth of the lineGraph.
        */
        getLineWidth(): number | null;
        /**
        * Sets the lineColor.
        * @function
        * @param {string} lineColor  The new lineColor.
        */
        setLineColor(lineColor: string | null): void;
        /**
        * Returns the lineColor.
        * @function
        * @returns {string} The lineColor of the lineGraph.
        */
        getLineColor(): string | null;
        /**
        * Sets the pointDot.
        * @function
        * @param {boolean} pointDot  The new pointDot.
        */
        setPointDot(pointDot: boolean): void;
        /**
        * Returns the pointDot.
        * @function
        * @returns {boolean} The pointDot of the lineGraph.
        */
        getPointDot(): boolean;
        /**
        * Sets the pointDotRadius.
        * @function
        * @param {number} pointDotRadius  The new pointDotRadius.
        */
        setPointDotRadius(pointDotRadius: number | null): void;
        /**
        * Returns the pointDotRadius.
        * @function
        * @returns {number} The pointDotRadius of the lineGraph.
        */
        getPointDotRadius(): number | null;
        /**
        * Sets the pointDotFillColor.
        * @function
        * @param {string} pointDotFillColor  The new pointDotFillColor.
        */
        setPointDotFillColor(pointDotFillColor: string | null): void;
        /**
        * Returns the pointDotFillColor.
        * @function
        * @returns {string} The pointDotFillColor of the lineGraph.
        */
        getPointDotFillColor(): string | null;
        /**
        * Sets the pointDotStrokeWidth.
        * @function
        * @param {number} pointDotStrokeWidth  The new pointDotStrokeWidth.
        */
        setPointDotStrokeWidth(pointDotStrokeWidth: number | null): void;
        /**
        * Returns the pointDotStrokeWidth.
        * @function
        * @returns {number} The pointDotStrokeWidth of the lineGraph.
        */
        getPointDotStrokeWidth(): number | null;
        /**
        * Sets the pointDotStrokeColor.
        * @function
        * @param {string} pointDotStrokeColor  The new pointDotStrokeColor.
        */
        setPointDotStrokeColor(pointDotStrokeColor: string | null): void;
        /**
        * Returns the pointDotStrokeColor.
        * @function
        * @returns {string} The pointDotStrokeColor of the lineGraph.
        */
        getPointDotStrokeColor(): string | null;
        /**
        * Sets the canvas.
        * @function
        * @param {HTMLCanvasElement} canvas  The new canvas.
        */
        setCanvas(canvas: HTMLCanvasElement): void;
        /**
        * Returns the canvas.
        * @function
        * @returns {HTMLCanvasElement} The canvas of the lineGraph.
        */
        getCanvas(): HTMLCanvasElement | undefined;
        /**
        * Sets the drawingBorder.
        * @function
        * @param {number} drawingBorder  The new drawingBorder.
        */
        setDrawingBorder(drawingBorder: number): void;
    }
    module LineGraph {
        interface Line {
            points: Point[];
            yAxis: YAxis | null;
        }
        interface Point {
            x: number;
            y: number;
        }
    }
}
declare module TcHmiCharting {
    class LineAreaGraph extends TcHmiCharting.IGraph {
        /** The lineWidth as positive number without zero. */
        protected __lineWidth: number | null;
        /** The lineColor as string. */
        protected __lineColor: string | null;
        /** The pointDot as boolean. */
        protected __pointDot: boolean;
        /** The pointDotRadius as number. */
        protected __pointDotRadius: number | null;
        /** The pointDotFillCOlor as string. */
        protected __pointDotFillColor: string | null;
        /** The pointDotStrokeWidth as number. */
        protected __pointDotStrokeWidth: number | null;
        /** The pointDotStrokeColor as string. */
        protected __pointDotStrokeColor: string | null;
        /** The middlepoints with values of the lineGraph dots as array*/
        protected __points: LineAreaGraph.PointValueAndPosition[];
        /** The middlepoints with values of the lineGraph areas as array*/
        protected __areaPoints: Area.AreaValueAndPosition[];
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: number;
        /** The area as Area[]*/
        protected __areas: LineAreaGraph.Area[];
        /**
        * Creates a new LineGraph.
        * @constructor
        * @param {HTMLCanvasElement} canvas      The optional canvas element to drawing.
        */
        constructor(canvas?: HTMLCanvasElement);
        /**
        * Draws the lineGraph to the canvas (first areas and then points).
        * @function
        * @param {LineAreaGraph.Line} line      The line (yAxis and points) to drawing.
        * @param {XAxis} xAxis      The xAxis.
        */
        draw(line: LineAreaGraph.Line, xAxis: XAxis): void;
        /**
       * Draws the lineGraph areas to the canvas.
       * @function
       * @param {LineAreaGraph.Line} line      The line (yAxis and points) to drawing.
       * @param {XAxis} xAxis      The xAxis.
       */
        drawAreas(line: LineAreaGraph.Line, xAxis: XAxis): void;
        /**
        * Draws the lineGraph points to the canvas.
        * @function
        * @param {LineAreaGraph.Line} line      The line (yAxis and points) to drawing.
        * @param {XAxis} xAxis      The xAxis.
        */
        drawPoints(line: LineAreaGraph.Line, xAxis: XAxis): void;
        /**
        * Returns the middlePoints with values of the lineGraph dots.
        * @function
        * @returns {LineAreaGraph.PointValueAndPosition[]} The middlePoints with values of the lineGraph dots.
        */
        getPoints(): LineAreaGraph.PointValueAndPosition[];
        /**
        * Removes all dots with middlePoints and values of the lineGraph.
        * @function
        */
        removePoints(): void;
        /**
        * Returns the middlePoints with values of the lineGraph areas.
        * @function
        * @returns {Area.AreaValueAndPosition[]} The middlePoints with values of the lineGraph areas.
        */
        getAreaPoints(): Area.AreaValueAndPosition[];
        /**
        * Removes all areas with middlePoints and values of the lineGraph.
        * @function
        */
        removeAreaPoints(): void;
        /**
        * Sets the lineWidth.
        * @function
        * @param {number} lineWidth  The new lineWidth.
        */
        setLineWidth(lineWidth: number | null): void;
        /**
        * Returns the lineWidth.
        * @function
        * @returns {number} The lineWidth of the lineGraph.
        */
        getLineWidth(): number | null;
        /**
        * Sets the lineColor.
        * @function
        * @param {string} lineColor  The new lineColor.
        */
        setLineColor(lineColor: string | null): void;
        /**
        * Returns the lineColor.
        * @function
        * @returns {string} The lineColor of the lineGraph.
        */
        getLineColor(): string | null;
        /**
        * Sets the pointDot.
        * @function
        * @param {boolean} pointDot  The new pointDot.
        */
        setPointDot(pointDot: boolean): void;
        /**
        * Returns the pointDot.
        * @function
        * @returns {boolean} The pointDot of the lineGraph.
        */
        getPointDot(): boolean;
        /**
        * Sets the pointDotRadius.
        * @function
        * @param {number} pointDotRadius  The new pointDotRadius.
        */
        setPointDotRadius(pointDotRadius: number | null): void;
        /**
        * Returns the pointDotRadius.
        * @function
        * @returns {number} The pointDotRadius of the lineGraph.
        */
        getPointDotRadius(): number | null;
        /**
        * Sets the pointDotFillColor.
        * @function
        * @param {string} pointDotFillColor  The new pointDotFillColor.
        */
        setPointDotFillColor(pointDotFillColor: string | null): void;
        /**
        * Returns the pointDotFillColor.
        * @function
        * @returns {string} The pointDotFillColor of the lineGraph.
        */
        getPointDotFillColor(): string | null;
        /**
        * Sets the pointDotStrokeWidth.
        * @function
        * @param {number} pointDotStrokeWidth  The new pointDotStrokeWidth.
        */
        setPointDotStrokeWidth(pointDotStrokeWidth: number | null): void;
        /**
        * Returns the pointDotStrokeWidth.
        * @function
        * @returns {number} The pointDotStrokeWidth of the lineGraph.
        */
        getPointDotStrokeWidth(): number | null;
        /**
        * Sets the pointDotStrokeColor.
        * @function
        * @param {string} pointDotStrokeColor  The new pointDotStrokeColor.
        */
        setPointDotStrokeColor(pointDotStrokeColor: string | null): void;
        /**
        * Returns the pointDotStrokeColor.
        * @function
        * @returns {string} The pointDotStrokeColor of the lineGraph.
        */
        getPointDotStrokeColor(): string | null;
        /**
        * Sets the canvas.
        * @function
        * @param {HTMLCanvasElement} canvas  The new canvas.
        */
        setCanvas(canvas: HTMLCanvasElement): void;
        /**
        * Returns the canvas.
        * @function
        * @returns {HTMLCanvasElement} The canvas of the lineGraph.
        */
        getCanvas(): HTMLCanvasElement | undefined;
        /**
        * Sets the drawingBorder.
        * @function
        * @param {number} drawingBorder  The new drawingBorder.
        */
        setDrawingBorder(drawingBorder: number): void;
        /**
        * Adds a area.
        * @function
        * @param {LineAreaGraph.Area} newArea      The newArea.
        */
        addArea(newArea: LineAreaGraph.Area): void;
        /**
        * Delete all areas.
        * @function
        */
        deleteAllAreas(): void;
        /**
        * Delete the area at index.
        * @function
        * @param {number} index      The index.
        */
        deleteArea(index: number): void;
        /**
        * Returns all areas.
        * @function
        * @returns {Area[]} The areas of the lineGraph.
        */
        getAllAreas(): LineAreaGraph.Area[];
        /**
        * Return the area at index.
        * @function
        * @returns {Area} The area at index.
        */
        getAreaAtPosition(index: number): LineAreaGraph.Area;
    }
    module LineAreaGraph {
        interface Line {
            points: Point[];
            yAxis?: YAxis | null;
        }
        interface Point {
            x: number;
            y?: number;
            isArea: boolean;
            bindPoints: boolean;
        }
        interface PointValueAndPosition {
            xPosition: number;
            yPosition: number;
            xValue: number;
            yValue: number;
        }
        interface Area {
            beginX: number;
            endX: number;
            backgroundColor: string | null;
        }
    }
}
declare module TcHmiCharting {
    class BarGraph extends TcHmiCharting.IGraph {
        /** The barWidth as number. */
        protected __barWidth: number | null;
        /** The barColor as string. */
        protected __barColor: string | null;
        /** The border (bigger than grid) of all sites.  */
        protected __drawingBorder: {
            height: number;
            width: number;
        };
        /**
        * Creates a new BarGraph.
        * @constructor
        * @param {JQuery} elementRoot      The root element where the canvas elements added to.
        */
        constructor(canvas: HTMLCanvasElement);
        /**
        * Draws the lineGraph to the canvas.
        * @function
        * @param {BarGraph.Bar} bar      The bar (yAxis and values) to drawing.
        * @param {XAxis} xAxis      The xAxis.
        */
        draw(bar: BarGraph.Bar, xAxis: XAxis): void;
        /**
        * Sets the barWidth.
        * @function
        * @param {number} barWidth  The new barWidth.
        */
        setBarWidth(barWidth: number | null): void;
        /**
        * Returns the barWidth.
        * @function
        * @returns {number} The barWidth of the barGraph.
        */
        getBarWidth(): number | null;
        /**
        * Sets the drawingBorder.
        * @function
        * @param {number} drawingBorder  The new drawingBorder.
        */
        setDrawingBorder(drawingBorder: {
            height: number;
            width: number;
        }): void;
        /**
        * Sets the barColor.
        * @function
        * @param {string} barColor  The new barColor.
        */
        setBarColor(barColor: string | null): void;
        /**
        * Returns the barColor.
        * @function
        * @returns {string} The barColor of the barGraph.
        */
        getBarColor(): string | null;
        /**
        * Sets the canvas.
        * @function
        * @param {HTMLCanvasElement} canvas  The new canvas.
        */
        setCanvas(canvas: HTMLCanvasElement): void;
        /**
        * Returns the canvas.
        * @function
        * @returns {HTMLCanvasElement} The canvas of the lineGraph.
        */
        getCanvas(): HTMLCanvasElement | undefined;
    }
    module BarGraph {
        interface Bar {
            values: number[];
            yAxis: YAxis | null;
        }
    }
}
