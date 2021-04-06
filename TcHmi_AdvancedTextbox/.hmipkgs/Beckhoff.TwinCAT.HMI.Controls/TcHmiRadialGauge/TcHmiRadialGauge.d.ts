declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiRadialGauge extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the underlying html svg element as jquery object. */
                protected __elementSvg: JQuery;
                /** Reference to the background circle. */
                protected __elementBackgroundCircle: JQuery;
                /** Refernece to the main tick container */
                protected __elementMainTickContainer: JQuery;
                /** Reference to the sub tick container */
                protected __elementSubTickContainer: JQuery;
                /** Reference to the label container */
                protected __elementLabelContainer: JQuery;
                /** Reference to the range container */
                protected __elementRangeContainer: JQuery;
                /** Referenve to the progress bar background */
                protected __elementProgressBackgroundCircle: JQuery;
                /** Reference to the progress bar foreground */
                protected __elementProgressForegroundCircle: JQuery;
                /** Reference to the value text element */
                protected __elementValueText: JQuery;
                /** Reference to the unit text element */
                protected __elementUnitText: JQuery;
                /** Reference to the edit knob group */
                protected __elementKnob: JQuery;
                /** Reference to the knob SVGGElement. */
                protected __elementKnobG: SVGGElement;
                protected __knobXhr: XMLHttpRequest | undefined;
                protected __knobXhrUrl: string | undefined;
                protected __knobSvgString: string | null;
                /** Internal reference to the attribute 'data-tchmi-start-position' */
                protected __startPosition: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-end-position' */
                protected __endPosition: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-min-value' */
                protected __minValue: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-max-value' */
                protected __maxValue: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-step' */
                protected __step: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-range' */
                protected __range: TcHmiRadialGauge.Range[] | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-label' */
                protected __showLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-start-from-zero' */
                protected __startFromZero: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-editable' */
                protected __editable: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-click-anywhere-to-edit' */
                protected __clickAnywhereToEdit: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-value-text' */
                protected __showValueText: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-ticks' */
                protected __showTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-position' */
                protected __labelPosition: 'Inside' | 'Outside' | undefined;
                /** Internal reference to the attribute 'data-tchmi-tick-definition' */
                protected __tickDefinition: TcHmiRadialGauge.TickDefinition | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-range' */
                protected __labelRange: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-sub-tick-position' */
                protected __subTickPosition: 'Inside' | 'Outside' | undefined;
                /** Internal reference to the attribute 'data-tchmi-value' */
                protected __value: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-value-format' */
                protected __valueFormat: TcHmi.IFunction | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-unit' */
                protected __unit: string | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-size'
                */
                protected __labelFontSize: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-size-unit'
                */
                protected __labelFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-family'
                */
                protected __labelFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-style'
                */
                protected __labelFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-style'
                */
                protected __labelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-format' */
                protected __labelFormat: TcHmi.IFunction | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-size'
                */
                protected __valueFontSize: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-size-unit'
                */
                protected __valueFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-family'
                */
                protected __valueFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-style'
                */
                protected __valueFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-style'
                */
                protected __valueFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-size'
                */
                protected __unitFontSize: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-size-unit'
                */
                protected __unitFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-family'
                */
                protected __unitFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-style'
                */
                protected __unitFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-style'
                */
                protected __unitFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-color'
                */
                protected __valueColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-color'
                */
                protected __labelColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-color'
                */
                protected __unitColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-tick-color'
                */
                protected __tickColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-progress-foreground-color'
                */
                protected __progressForegroundColor: TcHmi.SolidColor | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-progress-background-color'
               */
                protected __progressBackgroundColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-gauge-background-color'
                */
                protected __gaugeBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-knob-color' */
                protected __knobColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-knob-arrows-color' */
                protected __knobArrowsColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-base-animation-time'
                */
                protected __baseAnimationTime: number | undefined;
                /** Saved old value of value */
                protected __oldValue: number;
                /** Identifier of currently running requestAnimationFrame */
                protected __requestAnimatonFrameID: number;
                /** Stores information about drag operations */
                protected __draggingInfo: {
                    isDragging: boolean;
                    offset: number;
                    touchIdentifier: number | null;
                    originalValue: number | null;
                };
                protected __knobConfig: TcHmiRadialGauge.KnobConfig;
                /** Stores proportions for gauge layout
                Is only allowed to be updated by __updateLayout
                 */
                protected __proportions: {
                    mainTickLength: number;
                    subTickLength: number;
                    rangeThickness: number;
                    valueThickness: number;
                    labelRadius: number;
                    tickRadius: number;
                    valueRadius: number;
                    rangeRadius: number;
                    outerRadius: number;
                    startAngle: number;
                    endAngle: number;
                };
                protected __labels: {
                    element: SVGTextElement;
                    angle: number;
                }[];
                /**
                 * Stores a reference to the function called when the resize event is raised
                 * @type {Function}
                 */
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
                /** Normalized internal value */
                protected __internalValue: number;
                protected __internalMinValue: number;
                protected __internalMaxValue: number;
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
                * Is raised if the control are resized.
                * @function
                */
                protected __onResized(): (evt: EventProvider.Event, ctrl: System.TcHmiControl) => void;
                protected __fetchKnob: () => void;
                /**
                * Resolves a LinearGradientColor object to two string representations for use in a svg fill and defs property.
                * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
                * @param gradientColor The colorObject to resolve.
                * @returns {gradientString: string, fillString: string}
               */
                private __resolveLinearGradientColorAsSvgStrings;
                /**
                 * Compiles the knob SVG String and appends the svg to the DOM
                 */
                protected __updateKnobColors(): void;
                /**
                 * Returns an event handler for the mousedown event.
                 * @function
                 */
                protected __onMouseDownKnob: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mousedown event.
                 * @function
                 */
                protected __onMouseDownControl: (event: MouseEvent) => void;
                /**
                * Check if the angle is between to angles.
                * @param angleToCheck {number} Angle to check.
                * @param angle1 {number} First angle.
                * @param angle2 {number} Second angle.
                * @returns {boolean} -
                */
                private __checkAngleBetweenAngles;
                /**
                 * Returns an event handler for the mousemove event.
                 * @function
                 */
                protected __onMouseMove: (event: MouseEvent) => void;
                /**
                 * Returns an event hanlder for the mouseup event.
                 * @function
                 */
                protected __onMouseUp: (event: MouseEvent) => void;
                /**
                 * Returns an event hanlder for the touchstart event.
                 * @function
                 */
                protected __onTouchStartKnob: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchstart event.
                 * @function
                 */
                protected __onTouchStartControl: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchmove event.
                 * @function
                 */
                protected __onTouchMove: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchend event.
                 * @function
                 */
                protected __onTouchEnd: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchcancel event.
                 * @function
                 */
                protected __onTouchCancel: (event: TouchEvent) => void;
                /**
                 * Calculates the value relating to the screen coordinates of a mouse or touch event.
                 * @param x {number} Client x coordinate.
                 * @param y {number} Client y coordinate.
                 */
                protected __calcValueFromEventCoords(x: number, y: number): number;
                /**
                 * Calculates the angle in degrees correspending to a given value. Angle increases clockwise, is always positive and can be directly used in CSS transforms.
                 * @param value {number} The number to calculate the angle from.
                 */
                protected __calcAngleFromValue(value: number): number;
                /**
                 * Returns an object with proportion values.
                 * @function
                 */
                protected __getProportions(): {
                    mainTickLength: number;
                    subTickLength: number;
                    rangeThickness: number;
                    valueThickness: number;
                    labelRadius: number;
                    tickRadius: number;
                    valueRadius: number;
                    rangeRadius: number;
                    outerRadius: number;
                    startAngle: number;
                    endAngle: number;
                } | undefined;
                /**
                 * Relayouts the gauge by calling all necessary processors and update __proportions cache.
                 * @function
                 */
                protected __updateLayout(): void;
                /**
                 * Draws the progress circles.
                 * @param layout {boolean} Whether to call updateLayout after drawing progress circles.
                 */
                protected __drawProgressCircles(layout?: boolean): void;
                /**
                * Sets __internalMinValue/__inernalMaxValue based on __minValue/__maxValue;
                * @function
                */
                protected __setInternalMinMaxValue(): void;
                /**
                * Sets the internal minValue, maxValue and value attribute for internal using.
                * @function
                */
                protected __setInternalValues(): void;
                /**
                * Sets the value attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for value.
                */
                setValue(valueNew: number | null): void;
                /**
                * Sets the value attribute, regardless of user interaction.
                * @function
                * @param   {number}      valueNew     -   The new value for value.
                */
                protected __setValue(valueNew: number | null): void;
                /**
                * Returns the current value of value.
                * @function
                * @returns      {number}     The current value of value.
                */
                getValue(): number | undefined;
                /**
                * Processes the current value of attribute value.
                * @function
                */
                protected __processValue(): void;
                /**
                * Sets the minValue attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for minValue.
                */
                setMinValue(valueNew: number | null): void;
                /**
                * Returns the current value of minValue.
                * @function
                * @returns      {number}     The current value of minValue.
                */
                getMinValue(): number | undefined;
                /**
                * Processes the current value of attribute minvalue.
                * @function
                */
                protected __processMinValue(): void;
                /**
                * Sets the maxValue attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for maxValue.
                */
                setMaxValue(valueNew: number | null): void;
                /**
                * Returns the current value of maxValue.
                * @function
                * @returns      {number}     The current value of maxValue.
                */
                getMaxValue(): number | undefined;
                /**
                * Processes the current value of attribute maxvalue.
                * @function
                */
                protected __processMaxValue(): void;
                /**
                * Sets the step attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for step.
                */
                setStep(valueNew: number | null): void;
                /**
                * Returns the current value of step.
                * @function
                * @returns      {number}     The current value of step.
                */
                getStep(): number | undefined;
                /**
                * Processes the current value of attribute step.
                * @function
                */
                protected __processStep(): void;
                /**
                * Sets the value of the valueFormat order attribute.
                * @param {Function} value The new valueFormat method.
                * @function
                */
                setValueFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the valueFormat object resolver.
                 */
                protected __onResolverForValueFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current valueFormat method.
                 * @returns {Function} the current valueFormat method.
                 * @function
                 */
                getValueFormat(): IFunction | null | undefined;
                /**
                 * Processes the current valueFormat method
                 * @function
                 */
                protected __processValueFormat(): void;
                /**
                 * Executes the current valueFormat function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeValueFormatFunction;
                /**
                * Sets the range attribute.
                * @function
                * @param   {JSON}      valueNew     -   The new value for range.
                */
                setRange(valueNew: TcHmiRadialGauge.Range[] | null): void;
                /**
                 * The watch callback for the range object resolver.
                 */
                protected __onResolverForRangeWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.Range[]>) => void;
                /**
                * Returns the current value of range.
                * @function
                * @returns      {JSON}     The current value of range.
                */
                getRange(): TcHmiRadialGauge.Range[] | undefined;
                /**
                * Processes the current value of attribute range.
                * @function
                */
                protected __processRange(layout?: boolean): void;
                /**
                * Sets the tickDefinition attribute.
                * @function
                * @param   {JSON}      valueNew     -   The new value for tickDefinition.
                */
                setTickDefinition(valueNew: TcHmiRadialGauge.TickDefinition | null): void;
                /**
                 * The watch callback for the tickDefinition object resolver.
                 */
                protected __onResolverForTickDefinitionWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.TickDefinition>) => void;
                /**
                * Returns the current value of tickDefinition.
                * @function
                * @returns      {JSON}     The current value of tickDefinition.
                */
                getTickDefinition(): TcHmiRadialGauge.TickDefinition | null | undefined;
                /**
                * Processes the current value of attribute tickdefinition.
                * @function
                */
                protected __processTickDefinition(layout?: boolean): void;
                /**
                * Sets the startPosition attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for startPosition.
                */
                setStartPosition(valueNew: number | null): void;
                /**
                * Returns the current value of startPosition.
                * @function
                * @returns      {number}     The current value of startPosition.
                */
                getStartPosition(): number | undefined;
                /**
                * Processes the current value of attribute startPosition.
                * @function
                */
                protected __processStartPosition(): void;
                /**
                * Sets the endPosition attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for endPosition.
                */
                setEndPosition(valueNew: number | null): void;
                /**
                * Returns the current value of endPosition.
                * @function
                * @returns      {number}     The current value of endPosition.
                */
                getEndPosition(): number | undefined;
                /**
                * Processes the current value of attribute endposition.
                * @function
                */
                protected __processEndPosition(): void;
                /**
                * Sets the showLabels attribute.
                * @function
                * @param   {boolean}      valueNew     -   The new value for showLabels.
                */
                setShowLabels(valueNew: boolean | null): void;
                /**
                * Returns the current value of showLabels.
                * @function
                * @returns      {boolean}     The current value of showLabels.
                */
                getShowLabels(): boolean | undefined;
                /**
                * Processes the current value of attribute showlabels.
                * @function
                */
                protected __processShowLabels(layout?: boolean): void;
                /**
                * Sets the value of the labelFormat order attribute.
                * @param {Function} value The new labelFormat method.
                * @function
                */
                setLabelFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the labelFormat object resolver.
                 */
                protected __onResolverForLabelFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current labelFormat method.
                 * @returns {Function} the current labelFormat method.
                 * @function
                 */
                getLabelFormat(): IFunction | null | undefined;
                /**
                 * Processes the current labelFormat method
                 * @function
                 */
                protected __processLabelFormat(): void;
                /**
                 * Executes the current labelFormat function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeLabelFormatFunction;
                /**
                * Sets the start-from-zero attribute.
                * @function
                * @param   {boolean}      valueNew     -   The new value for start-from-zero.
                */
                setStartFromZero(valueNew: boolean | null): void;
                /**
                * Returns the current value of start-from-zero.
                * @function
                * @returns      {boolean}     The current value of start-from-zero.
                */
                getStartFromZero(): boolean | undefined;
                /**
                * Processes the current value of attribute start-from-zero.
                * @function
                */
                protected __processStartFromZero(): void;
                /**
                * Sets the editable attribute.
                * @function
                * @param   {boolean}      valueNew     -   The new value for editable.
                */
                setEditable(valueNew: boolean | null): void;
                /**
                * Returns the current value of editable.
                * @function
                * @returns      {boolean}     The current value of editable.
                */
                getEditable(): boolean | undefined;
                /**
                * Processes the current value of attribute editable.
                * @function
                */
                protected __processEditable(layout?: boolean): void;
                /**
                 * Updates the knob position.
                 * @param value {number} The value to update to.
                 */
                private __updateEditKnob;
                /**
                * Sets the clickAnywhereToEdit attribute.
                * @function
                * @param   {boolean}      valueNew     -   The new value for clickAnywhereToEdit.
                */
                setClickAnywhereToEdit(valueNew: boolean | null): void;
                /**
                * Returns the current value of clickAnywhereToEdit.
                * @function
                * @returns      {boolean}     The current value of clickAnywhereToEdit.
                */
                getClickAnywhereToEdit(): boolean | undefined;
                /**
                * Processes the current value of attribute clickAnywhereToEdit.
                * @function
                */
                protected __processClickAnywhereToEdit(): void;
                /**
                * Sets the showValueText attribute.
                * @function
                * @param   {boolean}      valueNew     -   The new value for showValueText.
                */
                setShowValueText(valueNew: boolean | null): void;
                /**
                * Returns the current value of showValueText.
                * @function
                * @returns      {boolean}     The current value of showValueText.
                */
                getShowValueText(): boolean | undefined;
                /**
                * Processes the current value of attribute showValueText.
                * @function
                */
                protected __processShowValueText(): void;
                /**
                * Sets the showTicks attribute.
                * @function
                * @param   {boolean}      valueNew     -   The new value for showTicks.
                */
                setShowTicks(valueNew: boolean | null): void;
                /**
                * Returns the current value of showTicks.
                * @function
                * @returns      {boolean}     The current value of showTicks.
                */
                getShowTicks(): boolean | undefined;
                /**
                * Processes the current value of attribute showTicks.
                * @function
                */
                protected __processShowTicks(layout?: boolean): void;
                /**
                * Sets the labelPosition attribute.
                * @function
                * @param   {string}      valueNew     -   The new value for labelPosition.
                *                                  Possible values: Inside, Outside
                */
                setLabelPosition(valueNew: 'Inside' | 'Outside' | null): void;
                /**
                * Returns the current value of labelPosition.
                * @function
                * @returns      {string}     The current value of labelPosition.
                *                                  Possible values: Inside, Outside
                */
                getLabelPosition(): "Inside" | "Outside" | undefined;
                /**
                * Processes the current value of attribute labelposition.
                * @function
                */
                protected __processLabelPosition(): void;
                /**
                * Sets the subTickPosition attribute.
                * @function
                * @param   {string}      valueNew     -   The new value for labelPosition.
                *                                  Possible values: Inside, Outside
                */
                setSubTickPosition(valueNew: 'Inside' | 'Outside' | null): void;
                /**
                * Returns the current value of subTickPosition.
                * @function
                * @returns      {string}     The current value of subTickPosition.
                *                                  Possible values: Inside, Outside
                */
                getSubTickPosition(): "Inside" | "Outside" | undefined;
                /**
                * Processes the current value of attribute subtickposition.
                * @function
                */
                protected __processSubTickPosition(): void;
                /**
                * Sets the labelRange attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for labelRange.
                */
                setLabelRange(valueNew: number | null): void;
                /**
                * Returns the current value of labelRange.
                * @function
                * @returns      {number}     The current value of labelRange.
                */
                getLabelRange(): number | null | undefined;
                /**
                * Processes the current value of attribute labelrange.
                * @function
                */
                protected __processLabelRange(): void;
                /**
                * Sets the gaugeValueColor attribute.
                * @function
                        * @param   {TcHmi.SolidColor}    valueNew     -   The new value for gaugeValueColor.
                */
                setValueColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the valueColor object resolver.
                 */
                protected __onResolverForValueColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of valueColor.
                * @function
                        * @returns      {TcHmi.SolidColor}    The current value of valueColor.
                */
                getValueColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute valueColor.
                * @function
                */
                protected __processValueColor(): void;
                /**
                * Sets the labelColor attribute.
                * @function
                        * @param   {TcHmi.SolidColor}    valueNew     -   The new value for labelColor.
                */
                setLabelColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the labelColor object resolver.
                 */
                protected __onResolverForLabelColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of labelColor.
                * @function
                        * @returns      {TcHmi.SolidColor}    The current value of labelColor.
                */
                getLabelColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute labelColor.
                * @function
                */
                protected __processLabelColor(): void;
                /**
                * Sets the unitColor attribute.
                * @function
                        * @param   {TcHmi.SolidColor}    valueNew     -   The new value for unitColor.
                */
                setUnitColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the unitColor object resolver.
                 */
                protected __onResolverForUnitColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of unitColor.
                * @function
                        * @returns      {TcHmi.SolidColor}    The current value of unitColor.
                */
                getUnitColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute unitColor.
                * @function
                */
                protected __processUnitColor(): void;
                /**
                * Sets the tickColor attribute.
                * @function
                        * @param   {TcHmi.SolidColor}    valueNew     -   The new value for tickColor.
                */
                setTickColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the tickColor object resolver.
                 */
                protected __onResolverForTickColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of tickColor.
                * @function
                        * @returns      {TcHmi.SolidColor}    The current value of tickColor.
                */
                getTickColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute tickColor.
                * @function
                */
                protected __processTickColor(): void;
                /**
                * Sets the gaugeBackgroundColor attribute.
                * @function
                * @param   {tchmi:framework#/definitions/Color}    valueNew     -   The new value for gaugeBackgroundColor.
                */
                setGaugeBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the gaugeBackgroundColor object resolver.
                 */
                protected __onResolverForGaugeBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of gaugeBackgroundColor.
                * @function
                * @returns      {tchmi:framework#/definitions/Color}    The current value of gaugeBackgroundColor.
                */
                getGaugeBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current value of attribute gaugeBackgroundColor.
                * @function
                */
                protected __processGaugeBackgroundColor(): void;
                /**
                * Sets the progressForegroundColor attribute.
                * @function
                        * @param   {TcHmi.SolidColor}    valueNew     -   The new value for progressForegroundColor.
                */
                setProgressForegroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the progressForegroundColor object resolver.
                 */
                protected __onResolverForProgressForegroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of progressForegroundColor.
                * @function
                        * @returns      {TcHmi.SolidColor}    The current value of progressForegroundColor.
                */
                getProgressForegroundColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute progressForegroundColor.
                * @function
                */
                protected __processProgressForegroundColor(): void;
                /**
                * Sets the progressBackColor attribute.
                * @function
                        * @param   {TcHmi.SolidColor}    valueNew     -   The new value for progressBackgroundColor.
                */
                setProgressBackgroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the progressBackgroundColor object resolver.
                 */
                protected __onResolverForProgressBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of progressBackgroundColor.
                * @function
                        * @returns      {TcHmi.SolidColor}    The current value of progressBackgroundColor.
                */
                getProgressBackgroundColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute progressBackgroundColor.
                * @function
                */
                protected __processProgressBackgroundColor(): void;
                /**
                * Sets the knob color attribute.
                * @function
                * @param   {Color}    valueNew     -   The new value for KnobColor.
                */
                setKnobColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the knobColor object resolver.
                 */
                protected __onResolverForKnobColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of KnobColor.
                * @function
                * @returns      {string}    The current value of KnobColor.
                */
                getKnobColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current value of attribute KnobColor.
                * @function
                */
                protected __processKnobColor(): void;
                /**
                * Sets the knob color attribute.
                * @function
                * @param   {Color}    valueNew     -   The new value for KnobColor.
                */
                setKnobArrowsColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the knobArrowsColor object resolver.
                 */
                protected __onResolverForKnobArrowsColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of KnobColor.
                * @function
                * @returns      {string}    The current value of KnobColor.
                */
                getKnobArrowsColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute KnobColor.
                * @function
                */
                protected __processKnobArrowsColor(): void;
                /**
                * Sets the baseAnimationTime attribute.
                * @function
                * @param   {number}      valueNew     -   The new value for baseAnimationTime.
                */
                setBaseAnimationTime(valueNew: number | null): void;
                /**
                * Returns the current value of baseAnimationTime.
                * @function
                * @returns      {number}     The current value of baseAnimationTime.
                */
                getBaseAnimationTime(): number | undefined;
                /**
                * Processes the current value of attribute baseAnimationTime.
                * @function
                */
                protected __processBaseAnimationTime(): void;
                /**
                * Sets the unit attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for Unit.
                */
                setUnit(valueNew: string | null): void;
                /**
                * Returns the current value of Unit.
                * @function
                * @returns      {string}    The current value of Unit.
                */
                getUnit(): string | undefined;
                /**
                * Processes the current value of attribute Unit.
                * @function
                */
                protected __processUnit(): void;
                /**
                * Sets the font size attribute.
                * @function
                * @param   {MeasurementValue}    valueNew     -   The new value for labelFontSize.
                */
                setLabelFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of labelFontSize.
                * @function
                * @returns      {MeasurementValue}    The current value of labelFontSize.
                */
                getLabelFontSize(): number | undefined;
                /**
                * Processes the current value of attribute labelfontsize.
                * @function
                */
                protected __processLabelFontSize(): void;
                /**
                * Sets the font size unit attribute.
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new value for labelFontSizeUnit.
                *                                                Possible Values: px, %
                */
                setLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of labelFontSizeUnit.
                * @function
                * @returns      {MeasurementUnit}    The current value of labelFontSizeUnit.
                */
                getLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current value of attribute labelfontsizeunit.
                * @function
                */
                protected __processLabelFontSizeUnit(): void;
                /**
                * Sets the font family attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for labelFontFamily.
                */
                setLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of labelFontFamily.
                * @function
                * @returns      {string}    The current value of labelFontFamily.
                */
                getLabelFontFamily(): string | null | undefined;
                /**
                * Processes the current value of attribute labelfontfamily.
                * @function
                */
                protected __processLabelFontFamily(): void;
                /**
                * Sets the font style attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for labelFontStyle.
                */
                setLabelFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of labelFontStyle.
                * @function
                * @returns      {string}    The current value of labelFontStyle.
                */
                getLabelFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current value of attribute labelfontstyle.
                * @function
                */
                protected __processLabelFontStyle(): void;
                /**
                * Sets the font weight attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for labelFontWeight.
                */
                setLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of labelFontWeight.
                * @function
                * @returns      {string}    The current value of labelFontWeight.
                */
                getLabelFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current value of attribute labelfontweight.
                * @function
                */
                protected __processLabelFontWeight(): void;
                /**
                * Sets the font size attribute.
                * @function
                * @param   {MeasurementValue}    valueNew     -   The new value for ValueFontSize.
                */
                setValueFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of ValueFontSize.
                * @function
                * @returns      {MeasurementValue}    The current value of ValueFontSize.
                */
                getValueFontSize(): number | undefined;
                /**
                * Processes the current value of attribute Valuefontsize.
                * @function
                */
                protected __processValueFontSize(): void;
                /**
                * Sets the font size unit attribute.
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new value for ValueFontSizeUnit.
                *                                                Possible Values: px, %
                */
                setValueFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of ValueFontSizeUnit.
                * @function
                * @returns      {MeasurementUnit}    The current value of ValueFontSizeUnit.
                */
                getValueFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current value of attribute Valuefontsizeunit.
                * @function
                */
                protected __processValueFontSizeUnit(): void;
                /**
                * Sets the font family attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for ValueFontFamily.
                */
                setValueFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of ValueFontFamily.
                * @function
                * @returns      {string}    The current value of ValueFontFamily.
                */
                getValueFontFamily(): string | null | undefined;
                /**
                * Processes the current value of attribute Valuefontfamily.
                * @function
                */
                protected __processValueFontFamily(): void;
                /**
                * Sets the font style attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for ValueFontStyle.
                */
                setValueFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of ValueFontStyle.
                * @function
                * @returns      {string}    The current value of ValueFontStyle.
                */
                getValueFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current value of attribute Valuefontstyle.
                * @function
                */
                protected __processValueFontStyle(): void;
                /**
                * Sets the font weight attribute.
                * @function
                * @param   {string}    valueNew     -   The new value for ValueFontWeight.
                */
                setValueFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of ValueFontWeight.
                * @function
                * @returns      {string}    The current value of ValueFontWeight.
                */
                getValueFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current value of attribute Valuefontweight.
                * @function
                */
                protected __processValueFontWeight(): void;
                /**
                * Sets the font size attribute.
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new Unit for UnitFontSize.
                */
                setUnitFontSize(valueNew: number | null): void;
                /**
                * Returns the current Unit of UnitFontSize.
                * @function
                * @returns      {MeasurementUnit}    The current Unit of UnitFontSize.
                */
                getUnitFontSize(): number | undefined;
                /**
                * Processes the current Unit of attribute Unitfontsize.
                * @function
                */
                protected __processUnitFontSize(): void;
                /**
                * Sets the font size unit attribute.
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new Unit for UnitFontSizeUnit.
                *                                                Possible Units: px, %
                */
                setUnitFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current Unit of UnitFontSizeUnit.
                * @function
                * @returns      {MeasurementUnit}    The current Unit of UnitFontSizeUnit.
                */
                getUnitFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current Unit of attribute Unitfontsizeunit.
                * @function
                */
                protected __processUnitFontSizeUnit(): void;
                /**
                * Sets the font family attribute.
                * @function
                * @param   {string}    valueNew     -   The new Unit for UnitFontFamily.
                */
                setUnitFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current Unit of UnitFontFamily.
                * @function
                * @returns      {string}    The current Unit of UnitFontFamily.
                */
                getUnitFontFamily(): string | null | undefined;
                /**
                * Processes the current Unit of attribute Unitfontfamily.
                * @function
                */
                protected __processUnitFontFamily(): void;
                /**
                * Sets the font style attribute.
                * @function
                * @param   {string}    valueNew     -   The new Unit for UnitFontStyle.
                */
                setUnitFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current Unit of UnitFontStyle.
                * @function
                * @returns      {string}    The current Unit of UnitFontStyle.
                */
                getUnitFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current Unit of attribute Unitfontstyle.
                * @function
                */
                protected __processUnitFontStyle(): void;
                /**
                * Sets the font weight attribute.
                * @function
                * @param   {string}    valueNew     -   The new Unit for UnitFontWeight.
                */
                setUnitFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current Unit of UnitFontWeight.
                * @function
                * @returns      {string}    The current Unit of UnitFontWeight.
                */
                getUnitFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current Unit of attribute Unitfontweight.
                * @function
                */
                protected __processUnitFontWeight(): void;
            }
            module TcHmiRadialGauge {
                interface Range {
                    color: TcHmi.SolidColor;
                    start: number;
                    end: number;
                }
                interface TickDefinition {
                    mainTickRange: number;
                    subTickRange: number;
                }
                interface KnobConfig {
                    imagePath: string;
                    width: number;
                    height: number;
                    offsetX: number;
                    offsetY: number;
                }
            }
        }
    }
}
