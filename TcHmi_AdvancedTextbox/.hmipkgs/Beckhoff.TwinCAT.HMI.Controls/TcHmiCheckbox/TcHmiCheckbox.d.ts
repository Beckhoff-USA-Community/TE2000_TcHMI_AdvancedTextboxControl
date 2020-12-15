declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiCheckbox extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementCheckbox: JQuery;
                protected __textDiv: HTMLDivElement | null;
                protected __toggleGroup: string | null | undefined;
                protected __toggleState: ToggleState | undefined;
                protected __stateSymbol: TcHmi.Symbol<boolean> | null | undefined;
                protected __toggleStateIconColor: TcHmi.SolidColor | null | undefined;
                protected __text: string | null | undefined;
                protected __textPosition: TcHmiCheckbox.TextPosition | undefined;
                protected __textHorizontalAlignment: HorizontalAlignment | undefined;
                protected __textVerticalAlignment: VerticalAlignment | undefined;
                protected __textFontFamily: FontFamily | null | undefined;
                protected __textFontSize: number | null | undefined;
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                protected __textFontStyle: FontStyle | undefined;
                protected __textFontWeight: FontWeight | undefined;
                protected __textColor: SolidColor | null | undefined;
                protected __textBackgroundColor: Color | null | undefined;
                /** Event destroy functions */
                protected __onPressedEventDestroyEvent: DestroyFunction | null;
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __onToggleGroupToggledEventDestroyEvent: DestroyFunction | null;
                /** Helper */
                protected __state: boolean;
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
                * Is raised if a member of 'toggleGroup' has raised the toggled event.
                * @function
                * @callback
                */
                protected __onToggleGroupToggled(): (evt: EventProvider.Event, data: {
                    ActiveElementId: string;
                    source: string;
                }) => void;
                /**
                * Sets the toggleGroup attribute to a new value.
                * @function
                * @param   {string}    valueNew    -   The new value for the toggleGroup attribute.
                */
                setToggleGroup(valueNew: string | null): void;
                /**
                * Returns the current  value of the toggleGroup attribute
                * @function
                */
                getToggleGroup(): string | null | undefined;
                /**
                * Processes the current value of the toggleGroup attribute.
                * @function
                */
                protected __processToggleGroup(): void;
                /**
                 * Processes the current state if state has changed.
                 * @function
                 * @param {boolean} state The new state of the control.
                 * @param {boolean} forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param {boolean} source What caused the change of state. Either user interaction, the change of an attribute or the state symbol.
                 */
                protected __processState(state: boolean, forwardStateSymbol: boolean, source: string): void;
                /**
                 * Returns an event handler function for the onResized event.
                 * @function
                 */
                protected __onResized(): () => void;
                /**
                 * Is raised when the onPressed event is fired from the base control.
                 * @function
                 * @callback
                 */
                protected __onPressed(): () => void;
                /**
                * Sets the toggleState attribute to a new value.
                * @function
                * @param   {string}     valueNew                -   The new value for the toggleState attribute.
                *                                                   Possible values: Normal, Active
                * @param   {boolean}    forwardStateSymbol      -   Controls if a change should be reflected to an possible existing state symbol.
                *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param  {boolean}    process                 -   Allows to disable underlying calls to processToggleState. Required if a StateSymbol change is reflected to the ToggleState.
                */
                protected __setToggleState(valueNew: ToggleState | null, forwardStateSymbol: boolean, process: boolean): void;
                /**
                 * Sets the toggleState attribute to a new value.
                 * @function
                 * @param   {string}    valueNew    -   The new value for the toggleState attribute.
                 *                                      Possible values: Normal, Active
                 */
                setToggleState(valueNew: ToggleState | null): void;
                /**
                 * Returns the current  value of the toggleState attribute
                 * @function
                 */
                getToggleState(): "Normal" | "Active" | undefined;
                /**
                 * Processes the current value of the toggleState attribute.
                 * @function
                 */
                protected __processToggleState(forwardStateSymbol?: boolean): void;
                /**
                * Sets the text color and calls the associated process function (processToggleStateIconColor).
                * @function
                * @param   {string}    valueNew     -   The new value for toggleStateIconColor.
                */
                setToggleStateIconColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the toggleStateIconColor object resolver.
                 */
                protected __onResolverForToggleStateIconColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of toggleStateIconColor.
                * @function
                * @returns      {string}    The current value of toggleStateIconColor.
                */
                getToggleStateIconColor(): SolidColor | null | undefined;
                /**
                * Processes the current toggleStateIconColor attribute value.
                * @function
                */
                protected __processToggleStateIconColor(): void;
                protected __destroyStateSymbolWatch: DestroyFunction | null;
                protected __onStateSymbolWatch(): (data: Symbol.IReadResultObject<boolean>) => void;
                /**
                 * @function
                 * @param valueNew
                 */
                setStateSymbol(valueNew: TcHmi.Symbol | null): void;
                /**
                 * @function
                 */
                getStateSymbol(): Symbol<boolean> | null | undefined;
                /**
                 * Sets the text attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the text attribute.
                 */
                setText(valueNew: string | null): void;
                /**
                 * Returns the current  value of the text attribute
                 * @function
                 */
                getText(): string | null | undefined;
                /**
                 * Processes the current value of the text attribute.
                 * @function
                 */
                protected __processText(): void;
                /**
                 * Sets the textPosition attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textPosition attribute.
                 */
                setTextPosition(valueNew: TcHmiCheckbox.TextPosition | null): void;
                /**
                 * Returns the current  value of the textPosition attribute
                 * @function
                 */
                getTextPosition(): "Left" | "Right" | undefined;
                /**
                 * Processes the current value of the textPosition attribute.
                 * @function
                 */
                protected __processTextPosition(): void;
                /**
                 * Sets the textHorizontalAlignment attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textHorizontalAlignment attribute.
                 */
                setTextHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                 * Returns the current  value of the textHorizontalAlignment attribute
                 * @function
                 */
                getTextHorizontalAlignment(): "Left" | "Right" | "Center" | undefined;
                /**
                 * Processes the current value of the textHorizontalAlignment attribute.
                 * @function
                 */
                protected __processTextHorizontalAlignment(): void;
                /**
                 * Sets the textVerticalAlignment attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textVerticalAlignment attribute.
                 */
                setTextVerticalAlignment(valueNew: VerticalAlignment | null): void;
                /**
                 * Returns the current  value of the textVerticalAlignment attribute
                 * @function
                 */
                getTextVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                 * Processes the current value of the textVerticalAlignment attribute.
                 * @function
                 */
                protected __processTextVerticalAlignment(): void;
                /**
                 * Sets the textFontFamily attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontFamily attribute.
                 */
                setTextFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Returns the current  value of the textFontFamily attribute
                 * @function
                 */
                getTextFontFamily(): string | null | undefined;
                /**
                 * Processes the current value of the textFontFamily attribute.
                 * @function
                 */
                protected __processTextFontFamily(): void;
                /**
                 * Sets the textFontSize attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontSize attribute.
                 */
                setTextFontSize(valueNew: number | null): void;
                /**
                 * Returns the current  value of the textFontSize attribute
                 * @function
                 */
                getTextFontSize(): number | null | undefined;
                /**
                 * Processes the current value of the textFontSize attribute.
                 * @function
                 */
                protected __processTextFontSize(): void;
                /**
                 * Sets the textFontSizeUnit attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontSizeUnit attribute.
                 */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current  value of the textFontSizeUnit attribute
                 * @function
                 */
                getTextFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes the current value of the textFontSizeUnit attribute.
                 * @function
                 */
                protected __processTextFontSizeUnit(): void;
                /**
                 * Sets the textFontStyle attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontStyle attribute.
                 */
                setTextFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current  value of the textFontStyle attribute
                 * @function
                 */
                getTextFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current value of the textFontStyle attribute.
                 * @function
                 */
                protected __processTextFontStyle(): void;
                /**
                 * Sets the textFontWeight attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontWeight attribute.
                 */
                setTextFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current  value of the textFontWeight attribute
                 * @function
                 */
                getTextFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current value of the textFontWeight attribute.
                 * @function
                 */
                protected __processTextFontWeight(): void;
                /**
                 * Sets the text color and calls the associated process function (processTextColor).
                 * @function
                 * @param {string} valueNew The new value for textColor.
                 */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 * @function
                 * @callback
                 * @param {IWatchResultCallback} data Object containing the new value for textColor
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                 * Returns the current value of textColor.
                 * @function
                 * @returns {string} The current value of textColor.
                 */
                getTextColor(): SolidColor | null | undefined;
                /**
                 * Processes the current textColor attribute value.
                 * @function
                 */
                protected __processTextColor(): void;
                /**
                * Returns the current background value.
                * @preserve (Part of the public API)
                */
                getTextBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setTextBackgroundColor(valueNew: Color | null): void;
                /**
                * The watch callback for the TextBackgroundColor object resolver.
                */
                protected __onResolverForTextBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Processes the current border-color attribute.
                */
                protected __processTextBackgroundColor(): void;
                /**
                * Before 1.12 BackgroundColor was the checkbox itself, as we had no label...
                * So we have to move the processed overall background config to the checkbox element
                */
                protected __processAllBackground(): void;
            }
            module TcHmiCheckbox {
                type TextPosition = 'Left' | 'Right';
            }
        }
    }
}
