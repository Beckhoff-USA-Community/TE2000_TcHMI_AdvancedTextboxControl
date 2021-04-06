declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiRectangle extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the underlying html svg rectangle element as jquery object. */
                protected __elementSvgRectangle: JQuery;
                /**
                * Internal reference to the attribute 'data-tchmi-fill-color'.
                * @type {SolidColor}
                */
                protected __fillColor: TcHmi.Color | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-stroke-color'
                * @type {SolidColor}
                */
                protected __strokeColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-stroke-thickness'
                */
                protected __strokeThickness: number | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-stroke-style'
               * Example: "2,2"
               */
                protected __strokeStyle: string | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-radius-x'
               */
                protected __radiusX: number | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-radius-y'
               */
                protected __radiusY: number | undefined;
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
                private __resizedEventDestroyEvent;
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
                 * Returns an event handler for the .onResized event
                 */
                protected __onResized(): (evt: EventProvider.Event, ctrl: System.TcHmiControl) => void;
                /**
                 * Updates x, y, width, height and stroke-width of rectangle
                 */
                protected __updateDimensions(): void;
                /**
                * Sets the fillColor attribute to a new value.
                * @function
                * @param   {SolidColor}    valueNew    -   The new value for the fillColor attribute;
                */
                setFillColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the fillColor object resolver.
                 */
                protected __onResolverForFillColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                *
                * @function
                * @returns      {SolidColor}    The current value of the fillColor attribute.
                */
                getFillColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current value of attribute fillColor.
                * @function
                */
                protected __processFillColor(): void;
                /**
                * Sets the stroke color attribute to a new value.
                * @function
                * @param   {SolidColor}    valueNew    -   The new value for the stroke color attribute;
                */
                setStrokeColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the strokeColor object resolver.
                 */
                protected __onResolverForStrokeColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * @function
                * @returns      {SolidColor}    The current value of the strokeColor attribute.
                */
                getStrokeColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute strokeColor.
                * @function
                */
                protected __processStrokeColor(): void;
                /**
                * Sets the stroke style and calls the associated process function (processStrokeStyle).
                * @function
                * @param   {string}    valueNew     -   The new value for strokeStyle.
                */
                setStrokeStyle(valueNew: string | null): void;
                /**
                * Returns the current value of strokeStyle.
                * @function
                * @returns      {string}    The current value of strokeStyle.
                */
                getStrokeStyle(): string | undefined;
                /**
                * Processes the current strokeStyle attribute value.
                * @function
                */
                protected __processStrokeStyle(): void;
                /**
                * Sets the stroke thickness and calls the associated process function (processStrokeThickness).
                * @function
                * @param   {number}    valueNew     -   The new value for strokeThickness.
                */
                setStrokeThickness(valueNew: number | null): void;
                /**
                * Returns the current value of strokeThickness.
                * @function
                * @returns      {number}    The current value of strokeThickness.
                */
                getStrokeThickness(): number | null | undefined;
                /**
                * Processes the current strokeThickness attribute value.
                * @function
                */
                protected __processStrokeThickness(): void;
                /**
               * Returns the current value of the member variable rowHeightUnit.
               * @function
               * @attributeGetter
               * @returns {MeasurementUnit}
               */
                getStrokeThicknessUnit(): string;
                /**
                * Empty function for compatibility
                * @function
                */
                protected __processStrokeThicknessUnit(): void;
                /**
                * Sets the radius X and calls the associated process function (processRadiusX).
                * @function
                * @param   {number}    valueNew     -   The new value for radiusX.
                */
                setRadiusX(valueNew: number | null): void;
                /**
                * Returns the current value of radiusX.
                * @function
                * @returns      {number}    The current value of radiusX.
                */
                getRadiusX(): number | undefined;
                /**
                * Processes the current radiusX attribute value.
                * @function
                */
                protected __processRadiusX(): void;
                /**
               * Returns the current value of the member variable RadiusXUnit.
               * @function
               * @attributeGetter
               * @returns {MeasurementUnit}
               */
                getRadiusXUnit(): string;
                /**
                * Processes the current value of RadiusXUnit.
                * @function
                */
                protected __processRadiusXUnit(): void;
                /**
                * Sets the radius y and calls the associated process function (processRadiusY).
                * @function
                * @param   {number}    valueNew     -   The new value for radiusY.
                */
                setRadiusY(valueNew: number | null): void;
                /**
                * Returns the current value of radiusY.
                * @function
                * @returns      {number}    The current value of radiusY.
                */
                getRadiusY(): number | undefined;
                /**
                * Processes the current radiusY attribute value.
                * @function
                */
                protected __processRadiusY(): void;
                /**
               * Returns the current value of the member variable RadiusYUnit.
               * @function
               * @attributeGetter
               * @returns {MeasurementUnit}
               */
                getRadiusYUnit(): string;
                /**
                * Processes the current value of RadiusYUnit.
                * @function
                */
                protected __processRadiusYUnit(): void;
            }
        }
    }
}
