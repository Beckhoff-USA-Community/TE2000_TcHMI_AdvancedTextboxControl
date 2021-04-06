declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiTrendLineChart extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the div element used as chart container as jquery object. */
                protected __elementChart: JQuery;
                /** Reference to the div element used as menu-bar as jquery object. */
                protected __elementMenuBar: JQuery;
                /** Reference to the div element used as tooltip as jquery object. */
                protected __elementTooltip: JQuery;
                /** Reference to the div element used as tooltip as jquery object. */
                protected __elementTooltipText: JQuery;
                /** Reference to the div element used as tooltip arrow as jquery object. */
                protected __elementTooltipArrow: JQuery;
                /** Reference to the div element used as parent for buttons (top most layer) as jquery object. */
                protected __elementMenuBarDropdown: JQuery;
                /** Reference to the div element used loading element as jquery object. */
                protected __elementLoading: JQuery;
                /** Linechart element' */
                protected __lineChart: TcHmiCharting.LineAreaChart | null;
                /** Stores the menuButtons as System.baseTcHmiControl[] */
                protected __menuBarControls: System.baseTcHmiControl[];
                /** Internal reference to the attribute 'data-tchmi-start' */
                protected __start: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-end' */
                protected __end: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-sections-background-color' */
                protected __sectionsBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
                protected __yAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-family' */
                protected __yLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size' */
                protected __yLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size-unit' */
                protected __yLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-weight' */
                protected __yLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-main-tick-steps' */
                protected __yMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-y-sub-ticks' */
                protected __showYSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-sub-tick-steps' */
                protected __ySubTickSteps: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis' */
                protected __showXAxis: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-show-labels' */
                protected __xShowLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-steps' */
                protected __xMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-sub-ticks' */
                protected __showXSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-sub-tick-steps' */
                protected __xSubTickSteps: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-family' */
                protected __xLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-size' */
                protected __xLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-size-unit' */
                protected __xLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-weight' */
                protected __xLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-color' */
                protected __xLabelFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-width' */
                protected __xAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-color' */
                protected __xAxisColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis-name' */
                protected __showXAxisName: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-name' */
                protected __xAxisName: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-family' */
                protected __xAxisNameFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-size' */
                protected __xAxisNameFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-size-unit' */
                protected __xAxisNameFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-weight' */
                protected __xAxisNameFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-color' */
                protected __xAxisNameFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-value-format' */
                protected __xAxisFormat: TcHmi.IFunction | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-y-axis' */
                protected __yAxis: TcHmiTrendLineChart.YAxis[] | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-line-graph-descriptions' */
                protected __lineGraphDescriptions: TcHmiTrendLineChart.LineGraphDescription[] | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-grid' */
                protected __showGrid: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-background-color' */
                protected __gridBackgroundColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-show-horizontal-lines' */
                protected __gridShowHorizontalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-show-vertical-lines' */
                protected __gridShowVerticalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-width' */
                protected __gridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-style' */
                protected __gridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-color' */
                protected __gridLineColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-show-horizontal-lines' */
                protected __subgridShowHorizontalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-show-vertical-lines' */
                protected __subgridShowVerticalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-width' */
                protected __subgridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-style' */
                protected __subgridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-color' */
                protected __subgridLineColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-menu-bar' */
                protected __showMenuBar: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-position' */
                protected __menuBarPosition: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-family' */
                protected __menuBarLabelFontFamily: FontFamily | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-size' */
                protected __menuBarLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-size-unit' */
                protected __menuBarLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-weight' */
                protected __menuBarLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-style' */
                protected __menuBarLabelFontStyle: FontStyle | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-color' */
                protected __menuBarLabelFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-tooltip' */
                protected __showTooltip: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-format' */
                protected __tooltipFormat: TcHmi.IFunction | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-family' */
                protected __tooltipFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-size' */
                protected __tooltipFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-size-unit' */
                protected __tooltipFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-weight' */
                protected __tooltipFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-color' */
                protected __tooltipFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-background-color' */
                protected __tooltipBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-interval */
                protected __interval: number | undefined;
                protected __serverDomain: string | undefined;
                /** Internal line graph data from historize-extension (fill in getDataCallback) */
                protected __lineGraphData: TcHmiTrendLineChart.Point[][] | null;
                /** Internal line graph data from historize-extension (fill in getDataCallback) */
                protected __lineGraphRawData: TcHmiTrendLineChart.ServerPoint[][] | null;
                /** Saved the internal start value */
                protected __internalStart: string | null;
                /** Saved the internal end value */
                protected __internalEnd: string | null;
                /** Saved the internal start value */
                protected __internalStartServer: number | null;
                /** Saved the internal end value */
                protected __internalEndServer: number | null;
                /** The actual start time in milliseconds */
                protected __actualStartTime: number | null | undefined;
                /** The actual end time in milliseconds */
                protected __actualEndTime: number | null | undefined;
                /** Saved the start before the last manipulation */
                protected __startBeforeManipulation: string | null;
                /** Saved the end before the last manipulation */
                protected __endBeforeManipulation: string | null;
                /** Mouse mode for zooming or panning as TcHmiTrendLineChart.MouseMode */
                protected __mouseMode: TcHmiTrendLineChart.MouseMode;
                /** Internal variable to save the manipulation infos */
                protected __manipulationInfo: {
                    isManipulating: boolean;
                    start: {
                        x: number;
                        y: number;
                    };
                    end: {
                        x: number;
                        y: number;
                    };
                    offset: {
                        left: number;
                        top: number;
                    };
                    scale: {
                        x: number;
                        y: number;
                    };
                    transform: {
                        x: number;
                        y: number;
                    };
                    click: boolean;
                    mousePosition: {
                        x: number;
                        y: number;
                    };
                };
                /** Internal variable to save the manipulation infos */
                protected __multitouchInfo: {
                    multitouchMode: boolean;
                    first: {
                        identifier: number | null;
                    };
                    second: {
                        identifier: null | number;
                    };
                    offset: {
                        left: number;
                        top: number;
                    };
                    distance: number;
                    newStart: number | null;
                    newTimespan: number | null;
                    newYAxis: TcHmiTrendLineChart.YAxis[] | null;
                };
                /** Internal variable to save the wheel infos */
                protected __wheelInfo: {
                    isWheeling: boolean;
                    wheelSteps: number;
                    mousePosition: {
                        x: number;
                        y: number;
                    };
                    timespan: number | null;
                    timeout: number;
                };
                /** The context from the TcHmi_Controls_Beckhoff_TcHmiTrendLineChart-canvas-zooming canvas */
                protected __zoomingCanvasContext: CanvasRenderingContext2D | null;
                /** Saved if the last update comes from an interaction (multitouch, touch, mouse or wheeling) */
                protected __lastInteraction: boolean;
                /** The start and end values before zooming */
                protected __startEndBeforeZoom: {
                    end: string | null;
                    start: string | null;
                };
                /** Event handlers */
                protected __clickHandler: (event: MouseEvent) => void;
                protected __mousedownHandler: (event: MouseEvent) => void;
                protected __mouseupHandler: (event: MouseEvent) => void;
                protected __mousemoveHandler: (event: MouseEvent) => void;
                protected __mousemoveTooltipHandler: (event: MouseEvent) => void;
                protected __touchstartHandler: (event: TouchEvent) => void;
                protected __touchmoveHandler: (event: TouchEvent) => void;
                protected __touchendHandler: (event: TouchEvent) => void;
                protected __mousewheelHandler: (event: MouseWheelEvent) => void;
                /**
                * Stores a reference to the function called when the resize event is raised
                * @type {Function}
                */
                protected __resizeEventDestroyEvent: DestroyFunction | null;
                protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
                /** Subscription ID for getData as number (null if no subscription is created) */
                protected __subscriptionId: number | null;
                /** Subscription ID for getData as number (null if no subscription is created) */
                protected __requestId: number | null;
                /** Internal counter of calling getTrendLineData */
                private __getDataCounter;
                /** Internal using of yAxis */
                protected __internalYAxis: TcHmiTrendLineChart.YAxis[] | null;
                /** Internal using of lineGraphDescription */
                protected __internalLineGraphDescription: TcHmiTrendLineChart.LineGraphDescription[] | null;
                /** Internal tooltip information */
                protected __tooltipInformation: {
                    show: boolean;
                    isActive: boolean;
                    time: number;
                    points: TcHmiTrendLineChart.TooltipInformationObject[];
                    errors: TcHmiTrendLineChart.TooltipErrorInformationObject[];
                };
                /** Internal start datatype */
                protected __startDatatype: TcHmiTrendLineChart.Datatype | null;
                /** Internal end datatype */
                protected __endDatatype: TcHmiTrendLineChart.Datatype | null;
                /** millisecond offset from the current (not browser) timeZone to utc */
                protected __utcOffset: number;
                private __onAttachedMenuButtonsEvent;
                private __onPressedStopDestroyEvent;
                private __onPressedTimespanStartDestroyEvent;
                private __onPressedDatetimeStartDestroyEvent;
                private __onPressedTimespanEndDestroyEvent;
                private __onPressedDatetimeEndDestroyEvent;
                private __onIsActiveChagedPanxDestroyEvent;
                private __onIsActiveChagedPanxyDestroyEvent;
                private __onIsActiveChagedZoomxDestroyEvent;
                private __onIsActiveChagedZoomxyDestroyEvent;
                private __onPressedResetZoomDestroyEvent;
                private __onPressedResetDestroyEvent;
                private __onPressedOptionsDestroyEvent;
                private __onUserInteractionFinishedStartDestroyEvent;
                private __onUserInteractionFinishedEndDestroyEvent;
                private __onValueChangedTimespanStartDestroyEvent;
                private __onValueChangedTimespanEndDestroyEvent;
                private __onValueChangedDatetimeStartDestroyEvent;
                private __onValueChangedDatetimeEndDestroyEvent;
                /** onValueChanged now */
                protected __nowIsValueChanged: boolean;
                /** LoadingSpinner */
                protected __loadingSpinner: Element;
                /** Touch and hold timer */
                protected __holdTimer: number;
                protected __holdTimerDuration: number;
                /**
                * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                * Call attribute processor functions here to initialize default values!
                * @function __previnit
                */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                * @function __init
                */
                __init(): void;
                /**
                * Added all munuBar-Items to the menuBar.
                * @function
                */
                private __addMenuBarControls;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @function
                */
                destroy(): void;
                /**
                * Check if the string is a Datetime
                * @function
                * @returns {boolean}
                */
                isDatetime(date: string | null | undefined): date is string;
                /**
                * Check if the string is a keyWord (Latest, First)
                * @function
                * @returns {boolean}
                */
                isKeyword(keyword: string | null): keyword is string;
                /**
                * Check if the string is a timespan
                * @function
                * @returns {boolean}
                */
                isTimespan(timespan: string | null | undefined): timespan is string;
                /**
                * Is called if onPressed event of start or stop button has raised.
                * @function
                * @callback
                */
                private __onPressed;
                /**
                * Is called if onUserInteractionFinished event of start or end combobox has raised.
                * @function
                * @callback
                */
                private __onUserInteractionFinished;
                /**
                * Is called if activeChangedEvent of toggleButtons has raised.
                * @function
                * @callback
                */
                private __onIsActiveChaged;
                /**
                * Is called if activeChangedEvent of toggleButtons has raised.
                * @function
                * @callback
                */
                private __onValueChanged;
                /**
                * Is raised if the control should be redrawn.
                * @function
                */
                protected __rebuild(): (evt: EventProvider.Event, ctrl?: System.TcHmiControl | undefined) => void;
                /**
                * Is called if timespan or startTime changed.
                * @function
                */
                protected __openWebsocket(): void;
                /**
                * Convert milliseconds to iso 8601 string
                * @function
                * @param {number} milliSec - Milliseconds
                */
                protected __milliSecToIso(milliSec: number): string;
                /**
                * Convert iso 8601 string to milliseconds
                * @function
                * @param {string} t - Iso 8601 string
                */
                protected __isoToMilliSec(t: string): number;
                /**
                * Is called from __onWebSocketOpen and called getTrendLineData from Historize-Extension.
                * @function
                */
                protected __getData(): void;
                /**
                * Is raised if the requestDisplay callback is raised.
                * @function
                * @callback
                */
                protected __getDataCallback(): (this: void, result: Server.IAnswerResultObject<any, any>) => void;
                /**
               * Reset the linechart before the last manipulation was made
               * @function
               */
                protected __resetBeforeLastManipulation(): void;
                /**
                * Is called initial and and if size changed.
                * @function
                */
                protected __drawLineChart(): void;
                /**
                * Calculated width and height of charting element.
                * @function
                */
                protected __calcSizes(): {
                    'width': null;
                    'height': null;
                } | {
                    'width': number;
                    'height': null;
                } | {
                    'width': number;
                    'height': number;
                };
                /**
                * Reset the linechart
                * @function
                */
                protected __reset(): void;
                /**
                * Create a tooltip if the offsetX and offsetY value is on a point.
                * @function
                * @param   {number}    offsetX     -   The x coordinate of the mouse or touch.
                * @param   {number}    offsetY     -   The y coordinate of the mouse or touch.
                * @param   {boolean}    activate     -   The value if the tooltip should be activated.
                */
                protected __createTooltip(offsetX: number, offsetY: number, activate: boolean): void;
                /**
                * Create a tooltip if the offsetX and offsetY value is on a point.
                * @function
                * @param   {number}    offsetX     -   The x coordinate of the mouse or touch.
                * @param   {number}    offsetY     -   The y coordinate of the mouse or touch.
                * @param   {boolean}    activate     -   The value if the tooltip should be activated.
                */
                protected __createTooltipFromTouch(offsetX: number, offsetY: number): void;
                /**
               * Is raised if mouseMove on canvasDrawing.
               * @function
               * @callback
               * @param {MouseEvent} e - The event of mouseMove.
               */
                protected __onMouseMoveTooltip(): (e: MouseEvent) => void;
                /**
                * Is raised if click on canvasDrawing.
                * @function
                * @callback
                * @param {MouseEvent} e - The event of click.
                */
                protected __onClick(): (e: MouseEvent) => void;
                /**
                * Is raised if mouseDown on canvasDrawing.
                * @function
                * @callback
                * @param {MouseEvent} e - The event of mouseDown.
                */
                protected __onMouseDown(): (e: MouseEvent) => void;
                /**
                * Is raised if mouseMove on document.
                * @function
                * @callback
                * @param {MouseEvent} e - The event of mouseMove.
                */
                protected __onMouseMove(): (e: MouseEvent) => void;
                /**
                * Is raised if mouseUp on document.
                * @function
                * @callback
                * @param {MouseEvent} e - The event of mouseDown.
                */
                protected __onMouseUp(): (e: MouseEvent) => void;
                /**
                * Is raised if touchStart on canvasDrawing.
                * @function
                * @callback
                * @param {TouchEvent} e - The event of touchStart.
                */
                protected __onTouchStart(): (e: TouchEvent) => void;
                /**
                * Is raised if touchMove on document.
                * @function
                * @callback
                * @param {TouchEvent} e - The event of touchMove.
                */
                protected __onTouchMove(): (e: TouchEvent) => void;
                /**
                * Is raised if touchEnd on document.
                * @function
                * @callback
                * @param {TouchEvent} e - The event of touchEnd.
                */
                protected __onTouchEnd(): (e: TouchEvent) => void;
                /**
                 * Transforms client coordinates of mouse and touch events into the coordinate system of the target element.
                 * Respects translation and sscaling.
                 * @param clientX The x coordinate.
                 * @param clientY The y coodinate.
                 * @param targetElement The target element.
                 */
                protected __transformEventCoords(clientX: number, clientY: number, targetElement?: Element): {
                    x: number;
                    y: number;
                };
                /**
                * Is called from onTouchStart and onMouseDown.
                * @function
                * @param   {float}    x     -   The x coordinate of the mouse or touch.
                * @param   {float}    y     -   The y coordinate of the mouse or touch.
                */
                protected __userInteractionStart(x: number, y: number): void;
                /**
                * Is called from onTouchMove and onMouseMove.
                * @function
                * @param   {float}    x     -   The x coordinate of the mouse or touch.
                * @param   {float}    y     -   The y coordinate of the mouse or touch.
                */
                protected __userInteractionMove(x: number, y: number): void;
                /**
                * Is called from onTouchEnd and onMouseUp.
                * Resets this.__drawing on canvas.
                * Zoom mode:    Clears the canvas.
                * Pan mode:     resets this.__drawing.
                * @function
                */
                protected __userInteractionEnd(): void;
                /**
               * MultitouchStarting.
               * @function
               * @param   {TouchEvent}    e     -   The touch event if more than one finger is touched.
               */
                protected __userMultitouchStart(e: TouchEvent): void;
                /**
                * MultitouchMoving.
                * @function
                * @param   {TouchEvent}    e     -   The touch event if more than one finger is touched.
                */
                protected __userMultitouchMove(e: TouchEvent): void;
                /**
                * MultitouchEnd.
                * @function
                * @param   {TouchEvent}    e     -   The touch event if more than one finger is touched.
                */
                protected __userMultitouchEnd(e: TouchEvent): void;
                /**
                * Is raised if mouseDown on canvasDrawing.
                * @function
                * @callback
                * @param {WheelEvent} e - The event of mouseDown.
                */
                protected __onMouseWheel(): (e: WheelEvent) => void;
                /**
                * Sets the xAxis of the xAxisFormat order attribute.
                * @param {Function} xAxis The new xAxisFormat method.
                * @function
                */
                setXAxisFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the xAxisFormat object resolver.
                 */
                protected __onResolverForXAxisFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current xAxisFormat method.
                 * @returns {Function} the current xAxisFormat method.
                 * @function
                 */
                getXAxisFormat(): IFunction | null | undefined;
                /**
                 * Processes the current xAxisFormat method
                 * @function
                 */
                protected __processXAxisFormat(): void;
                /**
                * Is raised if the x axis label is drawing.
                * @function
                * @callback
                * @returns {string}
                */
                protected __xAxisCallbackFunction(): (result: number) => string | null;
                /**
                * Stop to become new data. Get only the actually data clipping. Sets new values for __internalStart and __internalEnd.
                * @function
                */
                stop(): void;
                /**
                * Called stop function.
                * @function
                */
                pause(): void;
                /**
                * Reset the timespan before zooming.
                * @function
                */
                resetZoom(): void;
                /**
                * Reset all interactions, set internalStart and internalEnd to start and end.
                * @function
                */
                reset(): void;
                /**
                * Called reset function.
                * @function
                */
                play(): void;
                /**
                * Show options-div (with buttons which can not be shown)
                * @function
                */
                showOptions(): void;
                /**
                * Calculated which menuButtons added to topMostLayer
                * @function
                */
                __calcMenuButtons(): void;
                /**
                * Set the isEnable attribute to false at start, panx, panxy, zoomx, zoomxy and to true at stop menuButton.
                * @function
                */
                private __setMenuButtonsFromStart;
                /**
                * Set the isEnable attribute to true at start, panx, panxy, zoomx, zoomxy and to false at stop menuButton.
                * @function
                */
                private __setMenuButtonsFromStop;
                /**
               * Sets the background value and calls the associated process function (processSectionsBackground).
               * @function
               * @param   {string}    valueNew    -   The new value for the background attribute as json string.
               */
                setSectionsBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the sectionsBackgroundColor object resolver.
                 */
                protected __onResolverForSectionsBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current background value.
                * @function
                * @returns      {string}    The current value of the background member variable as json in string format.
                */
                getSectionsBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
              * Processes the current border-color attribute.
              * @function
              */
                protected __processSectionsBackgroundColor(): void;
                /**
                * Sets the value of yAxisWidth
                * @function
                * @param {number} valueNew The new value for yAxisWidth
                */
                setYAxisWidth(valueNew: number | null): void;
                /**
                * Gets the value of yAxisWidth
                * @function
                * @returns {number}
                */
                getYAxisWidth(): number | undefined;
                /**
                * Processes yAxisWidth
                * @function
                */
                protected __processYAxisWidth(): void;
                /**
                * Sets the value of yLabelFontFamily
                * @function
                * @param {string} valueNew The new value for yLabelFontFamily
                */
                setYLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of yLabelFontFamily
                * @function
                * @returns {string}
                */
                getYLabelFontFamily(): string | undefined;
                /**
                * Processes yLabelFontFamily
                * @function
                */
                protected __processYLabelFontFamily(): void;
                /**
                * Sets the value of yLabelFontSize
                * @function
                * @param {number} valueNew The new value for yLabelFontSize
                */
                setYLabelFontSize(valueNew: number | null): void;
                /**
                * Gets the value of yLabelFontSize
                * @function
                * @returns {number}
                */
                getYLabelFontSize(): number | undefined;
                /**
                * Processes yLabelFontSize
                * @function
                */
                protected __processYLabelFontSize(): void;
                /**
                * Sets the value of yLabelFontSizeUnit
                * @function
                * @param {string} valueNew The new value for yLabelFontSizeUnit
                * Possible Values: px, %
                */
                setYLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Gets the value of yLabelFontSizeUnit
                * @function
                * @returns {string}
                */
                getYLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes yLabelFontSizeUnit
                * @function
                */
                protected __processYLabelFontSizeUnit(): void;
                /**
                * Sets the value of yLabelFontWeight
                * @function
                * @param {string} valueNew The new value for yLabelFontWeight
                * Possible Values: normal, bold
                */
                setYLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                * Gets the value of yLabelFontWeight
                * @function
                * @returns {string}
                */
                getYLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes yLabelFontWeight
                * @function
                */
                protected __processYLabelFontWeight(): void;
                /**
                * Sets the value of yMainTickSteps
                * @function
                * @param {number} valueNew The new value for yMainTickSteps
                */
                setYMainTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of yMainTickSteps
                * @function
                * @returns {number}
                */
                getYMainTickSteps(): number | undefined;
                /**
                * Processes yMainTickSteps
                * @function
                */
                protected __processYMainTickSteps(): void;
                /**
                * Sets the value of showYSubTicks
                * @function
                * @param {boolean} valueNew The new value for showYSubTicks
                */
                setShowYSubTicks(valueNew: boolean | null): void;
                /**
                * Gets the value of showYSubTicks
                * @function
                * @returns {boolean}
                */
                getShowYSubTicks(): boolean | undefined;
                /**
                * Processes showYSubTicks
                * @function
                */
                protected __processShowYSubTicks(): void;
                /**
                * Sets the value of ySubTickSteps
                * @function
                * @param {number} valueNew The new value for ySubTickSteps
                */
                setYSubTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of ySubTickSteps
                * @function
                * @returns {number}
                */
                getYSubTickSteps(): number | null | undefined;
                /**
                * Processes ySubTickSteps
                * @function
                */
                protected __processYSubTickSteps(): void;
                /**
                * Sets the value of showXAxis
                * @function
                * @param {boolean} valueNew The new value for showXAxis
                */
                setShowXAxis(valueNew: boolean | null): void;
                /**
                * Gets the value of showXAxis
                * @function
                * @returns {boolean}
                */
                getShowXAxis(): boolean | undefined;
                /**
                * Processes showXAxis
                * @function
                */
                protected __processShowXAxis(): void;
                /**
                * Sets the value of xShowLabels
                * @function
                * @param {boolean} valueNew The new value for xShowLabels
                */
                setXShowLabels(valueNew: boolean | null): void;
                /**
                * Gets the value of xShowLabels
                * @function
                * @returns {boolean}
                */
                getXShowLabels(): boolean | undefined;
                /**
                 * Processes xShowLabels
                * @function
                 */
                protected __processXShowLabels(): void;
                /**
                * Sets the value of xMainTickSteps
                * @function
                * @param {number} valueNew The new value for xMainTickSteps
                */
                setXMainTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of xMainTickSteps
                * @function
                * @returns {number}
                */
                getXMainTickSteps(): number | undefined;
                /**
                * Processes xMainTickSteps
                * @function
                */
                protected __processXMainTickSteps(): void;
                /**
                * Sets the value of showXSubTicks
                * @function
                * @param {boolean} valueNew The new value for showXSubTicks
                */
                setShowXSubTicks(valueNew: boolean | null): void;
                /**
                * Gets the value of showXSubTicks
                * @function
                * @returns {boolean}
                */
                getShowXSubTicks(): boolean | undefined;
                /**
                * Processes showXSubTicks
                * @function
                */
                protected __processShowXSubTicks(): void;
                /**
                * Sets the value of xSubTickSteps
                * @function
                * @param {number} valueNew The new value for xSubTickSteps
                */
                setXSubTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of xSubTickSteps
                * @function
                * @returns {number}
                */
                getXSubTickSteps(): number | null | undefined;
                /**
                * Processes xSubTickSteps
                * @function
                */
                protected __processXSubTickSteps(): void;
                /**
                * Sets the value of xLabelFontFamily
                * @function
                * @param {string} valueNew The new value for xLabelFontFamily
                */
                setXLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of xLabelFontFamily
                * @function
                * @returns {string}
                */
                getXLabelFontFamily(): string | undefined;
                /**
                * Processes xLabelFontFamily
                * @function
                */
                protected __processXLabelFontFamily(): void;
                /**
                * Sets the value of xLabelFontSize
                * @function
                * @param {number} valueNew The new value for xLabelFontSize
                */
                setXLabelFontSize(valueNew: number | null): void;
                /**
                * Gets the value of xLabelFontSize
                * @function
                * @returns {number}
                */
                getXLabelFontSize(): number | undefined;
                /**
                * Processes xLabelFontSize
                * @function
                */
                protected __processXLabelFontSize(): void;
                /**
                * Sets the value of xLabelFontSizeUnit
                * @function
                * @param {string} valueNew The new value for xLabelFontSizeUnit
                * Possible Values: px, %
                */
                setXLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Gets the value of xLabelFontSizeUnit
                * @function
                * @returns {string}
                */
                getXLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes xLabelFontSizeUnit
                * @function
                */
                protected __processXLabelFontSizeUnit(): void;
                /**
                * Sets the value of xLabelFontWeight
                * @function
                * @param {string} valueNew The new value for xLabelFontWeight
                * Possible Values: normal, bold
                */
                setXLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                * Gets the value of xLabelFontWeight
                * @function
                * @returns {string}
                */
                getXLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes xLabelFontWeight
                * @function
                */
                protected __processXLabelFontWeight(): void;
                /**
                * Sets the xLabelFontColor value and calls the associated process function (processXLabelFontColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the xLabelFontColor attribute as json string.
                */
                setXLabelFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xLabelFontColor object resolver.
                 */
                protected __onResolverForXLabelFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xLabelFontColor value.
                * @function
                * @returns {string}
                */
                getXLabelFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current xLabelFontColor attribute.
                * @function
                */
                protected __processXLabelFontColor(): void;
                /**
                * Sets the value of xAxisWidth
                * @function
                * @param {number} valueNew The new value for xAxisWidth
                */
                setXAxisWidth(valueNew: number | null): void;
                /**
                * Gets the value of xAxisWidth
                * @function
                * @returns {number}
                */
                getXAxisWidth(): number | undefined;
                /**
                * Processes xAxisWidth
                * @function
                */
                protected __processXAxisWidth(): void;
                /**
                * Sets the xAxisColor value and calls the associated process function (processXAxisColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the xAxisColor attribute as json string.
                */
                setXAxisColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisColor object resolver.
                 */
                protected __onResolverForXAxisColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisColor value.
                * @function
                * @returns {string}
                */
                getXAxisColor(): SolidColor | null | undefined;
                /**
                * Processes the current xAxisColor attribute.
                * @function
                */
                protected __processXAxisColor(): void;
                /**
                * Sets the value of showXAxisName
                * @function
                * @param {boolean} valueNew The new value for showXAxisName
                */
                setShowXAxisName(valueNew: boolean | null): void;
                /**
                * Gets the value of showXAxisName
                * @function
                * @returns {boolean}
                */
                getShowXAxisName(): boolean | undefined;
                /**
                * Processes showXAxisName
                * @function
                */
                protected __processShowXAxisName(): void;
                /**
                * Sets the value of xAxisName
                * @function
                * @param {string} valueNew The new value for xAxisName
                */
                setXAxisName(valueNew: string | null): void;
                /**
                * Gets the value of xAxisName
                * @function
                * @returns {string}
                */
                getXAxisName(): string | null | undefined;
                /**
                * Processes xAxisName
                * @function
                */
                protected __processXAxisName(): void;
                /**
                * Sets the value of xAxisNameFontFamily
                * @function
                * @param {string} valueNew The new value for xAxisNameFontFamily
                */
                setXAxisNameFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of xAxisNameFontFamily
                * @function
                * @returns {string}
                */
                getXAxisNameFontFamily(): string | undefined;
                /**
                * Processes xAxisNameFontFamily
                * @function
                */
                protected __processXAxisNameFontFamily(): void;
                /**
                * Sets the value of xAxisNameFontSize
                * @function
                * @param {number} valueNew The new value for xAxisNameFontSize
                */
                setXAxisNameFontSize(valueNew: number | null): void;
                /**
                * Gets the value of xAxisNameFontSize
                * @function
                * @returns {number}
                */
                getXAxisNameFontSize(): number | undefined;
                /**
                * Processes xAxisNameFontSize
                * @function
                */
                protected __processXAxisNameFontSize(): void;
                /**
                * Sets the value of xAxisNameFontSizeUnit
                * @function
                * @param {string} valueNew The new value for xAxisNameFontSizeUnit
                * Possible Values: px, %
                */
                setXAxisNameFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Gets the value of xAxisNameFontSizeUnit
                * @function
                * @returns {string}
                */
                getXAxisNameFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes xAxisNameFontSizeUnit
                * @function
                */
                protected __processXAxisNameFontSizeUnit(): void;
                /**
                * Sets the value of xAxisNameFontWeight
                * @function
                * @param {string} valueNew The new value for xAxisNameFontWeight
                * Possible Values: normal, bold
                */
                setXAxisNameFontWeight(valueNew: FontWeight | null): void;
                /**
                * Gets the value of xAxisNameFontWeight
                * @function
                * @returns {string}
                */
                getXAxisNameFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes xAxisNameFontWeight
                * @function
                */
                protected __processXAxisNameFontWeight(): void;
                /**
                * Sets the xAxisNameFontColor value and calls the associated process function (processXAxisNameFontColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the xAxisNameFontColor attribute as json string.
                */
                setXAxisNameFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisNameFontColor object resolver.
                 */
                protected __onResolverForXAxisNameFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisNameFontColor value.
                * @function
                * @returns {string}
                */
                getXAxisNameFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current xAxisNameFontColor attribute.
                * @function
                */
                protected __processXAxisNameFontColor(): void;
                /**
                * Sets the value of the member variable 'yAxis' if the new value is not equal to the current value
                * and calls the associated process function (processYAxis) after that.
                * @function
                * @attributeSetter
                * @param   {Array.<ChartYAxisDefinitionList>}    valueNew     -   The new value for yAxis.
                */
                setYAxis(valueNew: TcHmiTrendLineChart.YAxis[] | null): void;
                /**
                 * The watch callback for the yAxis object resolver.
                 */
                protected __onResolverForYAxisWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTrendLineChart.YAxis[]>) => void;
                /**
                * Returns the current value of the member variable yAxis.
                * @function
                * @attributeGetter
                * @returns {Array.<ChartYAxisDefinitionList>}
                */
                getYAxis(): TcHmiTrendLineChart.YAxis[] | null | undefined;
                /**
                * Processes the current value of yAxis.
                * @function
                */
                protected __processYAxis(): void;
                /**
                * Sets the value of the member variable 'lineGraphDescriptions' if the new value is not equal to the current value
                * and calls the associated process function (processlineGraphDescriptions) after that.
                * @function
                * @attributeSetter
                * @param   {Array.<ChartLineGraphDescriptionDefinitionList>}    valueNew     -   The new value for lineGraphDescriptions.
                */
                setLineGraphDescriptions(valueNew: TcHmiTrendLineChart.LineGraphDescription[] | null): void;
                /**
                 * The watch callback for the lineGraphDescriptions object resolver.
                 */
                protected __onResolverForLineGraphDescriptionsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTrendLineChart.LineGraphDescription[]>) => void;
                /**
                * Returns the current value of the member variable lineGraphDescriptions.
                * @function
                * @attributeGetter
                * @returns {Array.<ChartLineGraphDescriptionDefinitionList>}
                */
                getLineGraphDescriptions(): TcHmiTrendLineChart.LineGraphDescription[] | null | undefined;
                /**
                * Processes the current value of lineGraphDescriptions.
                * @function
                */
                protected __processLineGraphDescriptions(): void;
                /**
                * Sets the value of showGrid
                * @function
                * @param {boolean} valueNew The new value for showGrid
                */
                setShowGrid(valueNew: boolean | null): void;
                /**
                * Gets the value of showGrid
                * @function
                * @returns {boolean}
                */
                getShowGrid(): boolean | undefined;
                /**
                * Processes showGrid
                * @function
                */
                protected __processShowGrid(): void;
                /**
                * Sets the gridBackgroundColor value and calls the associated process function (processGridBackgroundColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the gridBackgroundColor attribute as json string.
                */
                setGridBackgroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the gridBackgroundColor object resolver.
                 */
                protected __onResolverForGridBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current gridBackgroundColor value.
                * @function
                * @returns {string}
                */
                getGridBackgroundColor(): SolidColor | null | undefined;
                /**
                * Processes the current gridBackgroundColor attribute.
                * @function
                */
                protected __processGridBackgroundColor(): void;
                /**
                * Sets the value of gridShowHorizontalLines
                * @function
                * @param {boolean} valueNew The new value for gridShowHorizontalLines
                */
                setGridShowHorizontalLines(valueNew: boolean | null): void;
                /**
                * Gets the value of gridShowHorizontalLines
                * @function
                * @returns {boolean}
                */
                getGridShowHorizontalLines(): boolean | undefined;
                /**
                * Processes gridShowHorizontalLines
                * @function
                */
                protected __processGridShowHorizontalLines(): void;
                /**
                * Sets the value of gridShowVerticalLines
                * @function
                * @param {boolean} valueNew The new value for gridShowVerticalLines
                */
                setGridShowVerticalLines(valueNew: boolean | null): void;
                /**
                * Gets the value of gridShowVerticalLines
                * @function
                * @returns {boolean}
                */
                getGridShowVerticalLines(): boolean | undefined;
                /**
                * Processes gridShowVerticalLines
                * @function
                */
                protected __processGridShowVerticalLines(): void;
                /**
                * Sets the value of gridLineWidth
                * @function
                * @param {number} valueNew The new value for gridLineWidth
                */
                setGridLineWidth(valueNew: number | null): void;
                /**
                * Gets the value of gridLineWidth
                * @function
                * @returns {number}
                */
                getGridLineWidth(): number | undefined;
                /**
                * Processes gridLineWidth
                * @function
                */
                protected __processGridLineWidth(): void;
                /**
                * Sets the value of gridLineStyle
                * @function
                * @param {string} valueNew The new value for gridLineStyle
                */
                setGridLineStyle(valueNew: string | null): void;
                /**
                * Gets the value of gridLineStyle
                * @function
                * @returns {string}
                */
                getGridLineStyle(): string | undefined;
                /**
                * Processes gridLineStyle
                * @function
                */
                protected __processGridLineStyle(): void;
                /**
                * Sets the gridLineColor value and calls the associated process function (processGridLineColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the gridLineColor attribute as json string.
                */
                setGridLineColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the gridLineColor object resolver.
                 */
                protected __onResolverForGridLineColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current gridLineColor value.
                * @function
                * @returns {string}
                */
                getGridLineColor(): SolidColor | null | undefined;
                /**
                * Processes the current gridLineColor attribute.
                * @function
                */
                protected __processGridLineColor(): void;
                /**
                * Sets the value of subgridShowHorizontalLines
                * @function
                * @param {boolean} valueNew The new value for subgridShowHorizontalLines
                */
                setSubgridShowHorizontalLines(valueNew: boolean | null): void;
                /**
                * Gets the value of subgridShowHorizontalLines
                * @function
                * @returns {boolean}
                */
                getSubgridShowHorizontalLines(): boolean | undefined;
                /**
                * Processes subgridShowHorizontalLines
                * @function
                */
                protected __processSubgridShowHorizontalLines(): void;
                /**
                * Sets the value of subgridShowVerticalLines
                * @function
                * @param {boolean} valueNew The new value for subgridShowVerticalLines
                */
                setSubgridShowVerticalLines(valueNew: boolean | null): void;
                /**
                * Gets the value of subgridShowVerticalLines
                * @function
                * @returns {boolean}
                */
                getSubgridShowVerticalLines(): boolean | undefined;
                /**
                * Processes subgridShowVerticalLines
                * @function
                */
                protected __processSubgridShowVerticalLines(): void;
                /**
                * Sets the value of subgridLineWidth
                * @function
                * @param {number} valueNew The new value for subgridLineWidth
                */
                setSubgridLineWidth(valueNew: number | null): void;
                /**
                * Gets the value of subgridLineWidth
                * @function
                * @returns {number}
                */
                getSubgridLineWidth(): number | undefined;
                /**
                * Processes subgridLineWidth
                * @function
                */
                protected __processSubgridLineWidth(): void;
                /**
               * Sets the value of subgridLineStyle
               * @function
               * @param {string} valueNew The new value for subgridLineStyle
               */
                setSubgridLineStyle(valueNew: TcHmiTrendLineChart.LineStyle | null): void;
                /**
                * Gets the value of subgridLineStyle
                * @function
                * @returns {TcHmiTrendLineChart.LineStyle }
                */
                getSubgridLineStyle(): string | undefined;
                /**
                * Processes subgridLineStyle
                * @function
                */
                protected __processSubgridLineStyle(): void;
                /**
                * Sets the subgridLineColor value and calls the associated process function (processSubgridLineColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the subgridLineColor attribute as json string.
                */
                setSubgridLineColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the subgridLineColor object resolver.
                 */
                protected __onResolverForSubgridLineColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current subgridLineColor value.
                * @function
                * @returns {string}
                */
                getSubgridLineColor(): SolidColor | null | undefined;
                /**
                * Processes the current subgridLineColor attribute.
                * @function
                */
                protected __processSubgridLineColor(): void;
                /**
                * Sets the value of showMenuBar
                * @function
                * @param {boolean} valueNew The new value for showMenuBar
                */
                setShowMenuBar(valueNew: boolean | null): void;
                /**
                * Gets the value of showMenuBar
                * @function
                * @returns {boolean}
                */
                getShowMenuBar(): boolean | undefined;
                /**
                * Processes showMenuBar
                * @function
                */
                protected __processShowMenuBar(): void;
                /**
                * Sets the value of menuBarPosition
                * @function
                * @param {string} valueNew The new value for menuBarPosition
                */
                setMenuBarPosition(valueNew: string): void;
                /**
                * Gets the value of menuBarPosition
                * @function
                * @returns {string}
                */
                getMenuBarPosition(): string | undefined;
                /**
                * Processes menuBarPosition.
                * @function
                */
                protected __processMenuBarPosition(): void;
                /**
                * Sets the font size and calls the associated process function (processMenuBarLabelFontSize).
                * @function
                * @param   {MeasurementValue}    valueNew     -   The new value for menuBarLabelFontSize.
                */
                setMenuBarLabelFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of menuBarLabelFontSize.
                * @function
                * @returns      {MeasurementValue}    The current value of menuBarLabelFontSize.
                */
                getMenuBarLabelFontSize(): number | undefined;
                /**
                * Processes the current menuBarLabelFontSize attribute value.
                * @function
                */
                protected __processMenuBarLabelFontSize(calcButtons?: boolean): void;
                /**
                * Sets the font size unit and calls the associated process function (processMenuBarLabelFontSizeUnit).
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new value for menuBarLabelFontSizeUnit.
                */
                setMenuBarLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of menuBarLabelFontSizeUnit.
                * @function
                * @returns      {MeasurementUnit}    The current value of menuBarLabelFontSizeUnit.
                */
                getMenuBarLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current menuBarLabelFontSizeUnit attribute value.
                * @function
                */
                protected __processMenuBarLabelFontSizeUnit(calcButtons?: boolean): void;
                /**
                * Sets the font family and calls the associated process function (processMenuBarLabelFontFamily).
                * @function
                * @param   {string}    valueNew     -   The new value for menuBarLabelFontFamily.
                */
                setMenuBarLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of menuBarLabelFontFamily.
                * @function
                * @returns      {string}    The current value of menuBarLabelFontFamily.
                */
                getMenuBarLabelFontFamily(): string | null | undefined;
                /**
                * Processes the current menuBarLabelFontFamily attribute value.
                * @function
                */
                protected __processMenuBarLabelFontFamily(calcButtons?: boolean): void;
                /**
                * Sets the font style and calls the associated process function (processMenuBarLabelFontStyle).
                * @function
                * @param   {string}    valueNew     -   The new value for menuBarLabelFontStyle.
                */
                setMenuBarLabelFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of menuBarLabelFontStyle.
                * @function
                * @returns      {string}    The current value of menuBarLabelFontStyle.
                */
                getMenuBarLabelFontStyle(): "Normal" | "Auto" | "Italic" | "Oblique" | undefined;
                /**
                * Processes the current menuBarLabelFontStyle attribute value.
                * @function
                */
                protected __processMenuBarLabelFontStyle(calcButtons?: boolean): void;
                /**
                * Sets the font weight and calls the associated process function (processMenuBarLabelFontWeight).
                * @function
                * @param   {string}    valueNew     -   The new value for menuBarLabelFontWeight.
                */
                setMenuBarLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of menuBarLabelFontWeight.
                * @function
                * @returns      {string}    The current value of menuBarLabelFontWeight.
                */
                getMenuBarLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes the current menuBarLabelFontWeight attribute value.
                * @function
                */
                protected __processMenuBarLabelFontWeight(calcButtons?: boolean): void;
                /**
                * Sets the menuBarLabelFont color and calls the associated process function (processMenuBarLabelFontColor).
                * @function
                * @param   {string}    valueNew     -   The new value for menuBarLabelFontFColor.
                */
                setMenuBarLabelFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the menuBarLabelFontColor object resolver.
                 */
                protected __onResolverForMenuBarLabelFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of menuBarLabelFontColor.
                * @function
                * @returns      {string}    The current value of menuBarLabelFontColor.
                */
                getMenuBarLabelFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current menuBarLabelFontColor attribute value.
                * @function
                */
                protected __processMenuBarLabelFontColor(calcButtons?: boolean): void;
                /**
                * Sets the value of showTooltip
                * @function
                * @param {boolean} valueNew The new value for showTooltip
                */
                setShowTooltip(valueNew: boolean | null): void;
                /**
                * Gets the value of showTooltip
                * @function
                * @returns {boolean}
                */
                getShowTooltip(): boolean | undefined;
                /**
                * Processes showTooltip
                * @function
                */
                protected __processShowTooltip(): void;
                /**
                * Sets the value of the tooltipFormat order attribute.
                * @param {Function} value The new tooltipFormat method.
                * @function
                */
                setTooltipFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the tooltipFormat object resolver.
                 */
                protected __onResolverForTooltipFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current tooltipFormat method.
                 * @returns {Function} the current tooltipFormat method.
                 * @function
                 */
                getTooltipFormat(): IFunction | null | undefined;
                /**
                 * Processes the current tooltipFormat method
                 * @function
                 */
                protected __processTooltipFormat(): void;
                /**
                * Executes the current tooltipErrorFormat function.
                * @param first The first message to compare.
                * @param second The second message to compare.
                */
                private __executeTooltipFormatFunction;
                /**
                * Sets the value of tooltipFontFamily
                * @function
                * @param {string} valueNew The new value for tooltipFontFamily
                */
                setTooltipFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of tooltipFontFamily
                * @function
                * @returns {string}
                */
                getTooltipFontFamily(): string | undefined;
                /**
                * Processes tooltipFontFamily
                * @function
                */
                protected __processTooltipFontFamily(): void;
                /**
                * Sets the value of tooltipFontSize
                * @function
                * @param {number} valueNew The new value for tooltipFontSize
                */
                setTooltipFontSize(valueNew: number | null): void;
                /**
                * Gets the value of tooltipFontSize
                * @function
                * @returns {number}
                */
                getTooltipFontSize(): number | undefined;
                /**
                * Processes tooltipFontSize
                * @function
                */
                protected __processTooltipFontSize(): void;
                /**
                * Sets the value of tooltipFontSizeUnit
                * @function
                * @param {string} valueNew The new value for tooltipFontSizeUnit
                * Possible Values: px, %
                */
                setTooltipFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Gets the value of tooltipFontSizeUnit
                * @function
                * @returns {string}
                */
                getTooltipFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes tooltipFontSizeUnit
                * @function
                */
                protected __processTooltipFontSizeUnit(): void;
                /**
                * Sets the value of tooltipFontWeight
                * @function
                * @param {string} valueNew The new value for tooltipFontWeight
                * Possible Values: normal, bold
                */
                setTooltipFontWeight(valueNew: FontWeight | null): void;
                /**
                * Gets the value of tooltipFontWeight
                * @function
                * @returns {string}
                */
                getTooltipFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes tooltipFontWeight
                * @function
                */
                protected __processTooltipFontWeight(): void;
                /**
                * Sets the tooltipFontColor value and calls the associated process function (processTooltipFontColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the tooltipFontColor attribute as json string.
                */
                setTooltipFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the tooltipFontColor object resolver.
                 */
                protected __onResolverForTooltipFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current tooltipFontColor value.
                * @function
                * @returns {string}
                */
                getTooltipFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current tooltipFontColor attribute.
                * @function
                */
                protected __processTooltipFontColor(): void;
                /**
                * Sets the background value and calls the associated process function.
                * @function
                * @param   {string}    valueNew    -   The new value for the background attribute as json string.
                */
                setTooltipBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the tooltipBackgroundColor object resolver.
                 */
                protected __onResolverForTooltipBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current background value.
                * @function
                * @returns      {string}    The current value of the background member variable as json in string format.
                */
                getTooltipBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
              * Processes the current border-color attribute.
              * @function
              */
                protected __processTooltipBackgroundColor(): void;
                /**
                * Sets the interval and calls the associated process function (processInterval).
                * @function
                * @param   {number}    valueNew     -   The new value for interval.
                */
                setInterval(valueNew: number | null): void;
                /**
                * Returns the current value of interval.
                * @function
                * @returns {number}
                */
                getInterval(): number | undefined;
                /**
                * Processes the current interval attribute value.
                * @function
                */
                protected __processInterval(): void;
                /**
                * Sets the value of start
                * @function
                * @param {string} valueNew The new value for start
                */
                setStart(valueNew: string | null | undefined): void;
                /**
                * Gets the value of start
                * @function
                * @returns {string}
                */
                getStart(): string | null | undefined;
                /**
                 * Returns the actual StatTime.
                 * @returns {string} The actual startTime.
                 */
                getActualStartTime(): string | null;
                /**
                * Processes start
                * @function
                */
                protected __processStart(): void;
                /**
                * Sets the value of end
                * @function
                * @param {string} valueNew The new value for end
                */
                setEnd(valueNew: string | null | undefined): void;
                /**
                * Gets the value of end
                * @function
                * @returns {string}
                */
                getEnd(): string | null | undefined;
                /**
                 * Returns the actual endTime.
                 * @returns {string} The actual endTime.
                 */
                getActualEndTime(): string | null;
                protected __moveUtcToTimeZone(isoString: string): string;
                protected __moveTimeZoneToUtc(timeZoneIsoString: string): string | null;
                /**
                * Processes end
                * @function
                */
                protected __processEnd(): void;
                /**
                * Sets the mouseMode to zooming or panning
                * @function
                * @param {string} valueNew The new value for mouseMode
                */
                setMouseMode(valueNew: TcHmiTrendLineChart.MouseMode): void;
                /**
                * Gets the value of mouseMode
                * @function
                * @returns {string}
                */
                getMouseMode(): TcHmiTrendLineChart.MouseMode;
                /**
                * Processes the current value of attribute symbolList.
                * @function
                */
                protected __processMouseMode(): void;
                /**
                * Sets the mouseMode to zooming or panning
                * @function
                * @param {string} valueNew The new value for mouseMode
                */
                setServerDomain(valueNew: string): void;
                /**
                * Gets the value of mouseMode
                * @function
                * @returns {string}
                */
                getServerDomain(): string | undefined;
                /**
                * Processes the current value of attribute symbolList.
                * @function
                */
                protected __processServerDomain(): void;
                /**
                 * Processes the current enabled state.
                 * @function
                 */
                __processIsEnabled(): void;
            }
            module TcHmiTrendLineChart {
                interface YAxis {
                    id: number;
                    position: TcHmiTrendLineChart.AxisPosition;
                    mainTickMinValue?: number;
                    mainTickMaxValue?: number;
                    showLabels?: boolean;
                    labelFontColor?: TcHmi.SolidColor;
                    axisColor?: TcHmi.SolidColor;
                    showAxisName?: boolean;
                    axisName?: string;
                    axisNameFontFamily?: FontFamily | null;
                    axisNameFontSize?: number;
                    axisNameFontSizeUnit?: TcHmi.FontSizeUnit;
                    axisNameFontWeight?: TcHmi.FontWeight;
                    axisNameFontColor?: TcHmi.SolidColor;
                    decimalPlaces?: number;
                    unit?: string;
                    autoScaling?: boolean;
                }
                interface LineGraphDescription {
                    symbol: string;
                    yAxisId?: number;
                    lineWidth?: number;
                    lineColor?: TcHmi.SolidColor;
                    pointDot?: boolean;
                    pointDotInStopMode?: boolean;
                    pointDotRadius?: number;
                    pointDotFillColor?: TcHmi.SolidColor;
                    pointDotStrokeWidth?: number;
                    pointDotStrokeColor?: TcHmi.SolidColor;
                }
                enum MouseMode {
                    ZoomX = 0,
                    ZoomXY = 1,
                    PanX = 2,
                    PanXY = 3
                }
                enum MenuBarPosition {
                    Bottom = 0,
                    Top = 1
                }
                enum Datatype {
                    Datetime = 0,
                    Timespan = 1,
                    Keyword = 2
                }
                interface Point {
                    x: number;
                    y?: number;
                    isArea: boolean;
                    bindPoints: boolean;
                }
                enum AxisPosition {
                    Left = 0,
                    Right = 1
                }
                interface ServerPoint {
                    x: number;
                    y?: number;
                    error?: number;
                }
                interface TooltipInformationObject {
                    point: {
                        x: number;
                        y: number;
                    };
                    symbolname: string;
                    yAxis: TcHmiTrendLineChart.YAxis;
                }
                interface TooltipErrorInformationObject {
                    yAxis: null | TcHmiTrendLineChart.YAxis;
                    beginTime: number;
                    endTime: number;
                    errorCode: number | undefined | null;
                    symbolname: string;
                }
                enum LineStyle {
                    Dotted = 0,
                    Dashed = 1,
                    Solid = 2
                }
            }
        }
    }
}
