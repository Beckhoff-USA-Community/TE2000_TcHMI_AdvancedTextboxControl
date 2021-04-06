declare module TcHmi {
    module Controls {
        module Training {
            class AdvancedTextbox extends TcHmi.Controls.Beckhoff.TcHmiTextbox {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __elementTemplateRoot: JQuery<HTMLElement>;
                __elementTextarea: JQuery<HTMLElement>;
                __elementTooltipText: JQuery<HTMLElement>;
                __isPopUp: boolean;
                __CheckColors: CheckColors;
                __InputSettingsAllow: InputSettingsAllow;
                __InputSettingsCheck: InputSettingsCheck;
                __ValidValue: boolean;
                __PopUpKeyboardSettings: PopUpKeyboardSettings;
                __PopUpKeyboardControl: TcHmi.Controls.Beckhoff.TcHmiKeyboard | undefined;
                __initValue: string;
                __PopUpTextBox: TcHmi.Controls.Beckhoff.TcHmiTextbox | undefined;
                __PopUpTextBoxPadding: number;
                __keyboardRelationalPlacement: boolean;
                /** Declare internal settings variables for keyboard, tooltip etc. */
                __HighlightTimeoutId: number;
                __TooltipTimeoutId: number;
                __PageLayout: {
                    Width: number;
                    Height: number;
                };
                __TextboxLayout: {
                    Width: number;
                    Height: number;
                    Left: number;
                    Top: number;
                };
                __KeyboardLayout: KeyboardLayout;
                __TooltipLayout: {
                    Position: string;
                };
                /** Declare event namespaces for unique event listeners to prevent unregistering wrong events in some cases (heredity e.g.) */
                private guid;
                __evtNsKeyDown: string;
                /** Declare an array to store all destroy functions of registered tchmi framework events */
                __PopupEventDestroyFunctions: Array<DestroyFunction>;
                __EventDestroyFunctions: Array<DestroyFunction>;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                __setTchmiEvents: (tcHmiControl: AdvancedTextbox) => void;
                __destroyTchmiEvents: (tcHmiControl: AdvancedTextbox) => void;
                /**
                * @description Eventhandler for __processMultiline
                * Will be called if the textbox switches into a textarea or back when the multiline option is used
                */
                __processMultiline(): void;
                /**
                * @description On enter only function
                * @returns null
                */
                __onEnterPress(_this: AdvancedTextbox): void;
                /**
                  * @description Eventhandler for __onTextareaKeyDown
                  * @returns {function} Handler for the event __onTextareaKeyDown
                  */
                __onTextareaKeyDown(): (eventData?: any) => void;
                /**
                  * @description Debugging function, attempting to get what called an event
                  * @returns string of method that called the event (maybe)
                  */
                getClassNameOfRelatedTarget(eventData?: any): any;
                /**
                 * @description Eventhandler for __onTextChanged
                 * @returns {function} Handler for the event __onTextChanged
                 */
                __onTextChanged(eventData?: any): (eventData?: any) => void;
                /**
                 * @description Eventhandler for __onUserInteractionFinished
                 * @returns {function} Handler for the event __onUserInteractionFinished
                 */
                _onUserInteractionFinished(eventData?: any): (eventData?: any) => void;
                /**
                 * @description Eventhandler for __onUserInteractionCanceled
                 * @returns {function} Handler for the event __onUserInteractionCanceled
                 */
                _onUserInteractionCanceled(eventData?: any): (eventData?: any) => void;
                /**
                 * @description Eventhandler for __onFocusIn
                 * @returns {function} Handler for the event __onFocusIn
                 */
                _onFocusIn(eventData?: any): (eventData?: any) => void;
                /**
                 * @description Eventhandler for __onFocusOut
                 * @returns {function} Handler for the event __onFocusOut
                 */
                _onFocusOut(eventData?: any): (eventData?: any) => void;
                /**
      * CUSTOM AREA
      * Public functions
      */
                /**
                 * @description Copy inital value of the text box to the temp box
                 * @returns Boolean
                 */
                SetInitValueOnTempTextbox(): void;
                /**
                 * @description Stores inital value of the text box
                 * @returns Boolean
                 */
                SetSavedValue(): void;
                /**
                 * @description Stores inital value of the text box
                 * @returns Boolean
                 */
                ResetToInitValue(): void;
                /**
                 * @description Checks to see if the keyboard is a small form factor (Keypad style)
                 * @returns Boolean
                 */
                IsKeypad(): boolean;
                /**
                 * @description Open the popup keyboard
                 * @returns {void}
                 */
                OpenPopUpKeyboard(): void;
                /**
                 * @description Open Temp text box
                 * @returns {void}
                 */
                OpenTempTextBox(): void;
                /**
                 * @description Close the popup keyboard
                 * @returns {void}
                 */
                ClosePopUpKeyboard(): void;
                /**
                 * @description Open the tooltip
                 * @param {string} TooltipText Text to display in the tooltip
                 * @param {number} Timeout Timeout before the style gets set back to theme
                 * @returns {void}
                 */
                OpenTooltip(TooltipText: string, Timeout?: number): void;
                /**
                 * @description Close the tooltip
                 * @returns {void}
                 */
                CloseTooltip(): void;
                /**
                 * @description Checks the value in the textbox depending on the input settings for checking
                 * @param {number} Timeout Timeout in ms to set back to normal style
                 * @returns {boolean} Returns the result of the check, true = value is ok, false = value is not ok
                 */
                CheckValue(Timeout?: number): boolean | undefined;
                /**
                 * CUSTOM AREA
                 * Private functions
                 */
                /**
                 * @description Copies data to the permanent text box
                 * @returns {void}
                 */
                CopyDataToPrimaryTextBox(): void;
                /**
                 * @description Check the permissions of the control
                 * @param {string} permissionName The name of the permission to check
                 * @returns {boolean} true = permissions are ok / false = permissions are not ok
                 */
                __CheckPermissions(permissionName: string, _this: Beckhoff.TcHmiTextbox): boolean;
                /**
                 * @description Calculate the position of the popup keyboard
                 * @returns {void}
                 */
                __CalculateKeyboardPosition(): void;
                /**
                 * @description Calculate the position of the tooltip
                 * @returns {void}
                 */
                __CalculateTooltipPosition(): void;
                /**
                 * @description Set the highlighting of the textarea
                 * @param {boolean} Result Result of the check function to decide which highlighting color should be set
                 * @param {number} Timeout Timeout before the highlighting will be removed
                 * @returns {void}
                 */
                __SetCheckHighlighting(Result: boolean, Timeout?: number): void;
                /**
                 * @description Set the highlighting of the textarea back to theme
                 * @returns {void}
                 */
                __ClearCheckHighlighting(): void;
                /**
                 * CUSTOM AREA
                 * Getter and setter of the control attributes
                 */
                /**
                 * @description Setter function for 'data-tchmi-checkcolors' attribute.
                 * @param {object} NewColors The new color settings
                 * @returns {void}
                 */
                setCheckColors(NewColors: CheckColors): void;
                /**
                 * @description Getter function for 'data-tchmi-checkcolors' attribute.
                 * @returns {object} Current color settings
                 */
                getCheckColors(): CheckColors;
                /**
                 * @description Setter function for 'data-tchmi-inputsettingsallow' attribute.
                 * @param {object} NewSettings The new input settings
                 * @returns {void}
                 */
                setInputSettingsAllow(NewSettings: InputSettingsAllow): void;
                /**
                 * @description Getter function for 'data-tchmi-inputsettingsallow' attribute.
                 * @returns {object} Current input settings
                 */
                getInputSettingsAllow(): InputSettingsAllow;
                /**
                 * @description Setter function for 'data-tchmi-inputsettingscheck' attribute.
                 * @param {object} NewSettings The new input settings
                 * @returns {void}
                 */
                setInputSettingsCheck(NewSettings: InputSettingsCheck): void;
                /**
                 * @description Getter function for 'data-tchmi-inputsettingscheck' attribute.
                 * @returns {object} Current input settings
                 */
                getInputSettingsCheck(): InputSettingsCheck;
                /**
                 * @description Setter function for 'data-tchmi-popupkeyboardsettings' attribute.
                 * @param {object} NewSettings The new popup keyboadr settings
                 * @returns {void}
                 */
                setPopUpKeyboardSettings(NewSettings: PopUpKeyboardSettings): void;
                /**
                 * @description Getter function for 'data-tchmi-popupkeyboardsettings' attribute.
                 * @returns {object} Current popup keyboard settings
                 */
                getPopUpKeyboardSettings(): PopUpKeyboardSettings;
            }
        }
        namespace Training {
            interface PopUpKeyboardSettings {
                Active: boolean;
                Type: string;
                Textbox: boolean;
                TextboxFontSize: number;
                KeyboardFontSize: number;
                MinWidth: number;
                MinHeight: number;
                CenterKeypadKeyboards: boolean;
                ZIndex: number;
                ScaleMode: TcHmi.ScaleModeString;
            }
            interface CheckColors {
                GoodHighlight: TcHmi.Color;
                BadHighlight: TcHmi.Color;
            }
            interface InputSettingsAllow {
                Numbers: boolean;
                Strings: boolean;
            }
            interface InputSettingsCheck {
                Numbers: {
                    Check: boolean;
                    Max: number;
                    Min: number;
                };
                Strings: {
                    Check: boolean;
                    MaxCharacters: number;
                    ForbidMoreCharacters: boolean;
                };
                Highlighting: boolean;
                Tooltip: boolean;
            }
            interface KeyboardLayout {
                Width: number;
                Height: number;
                Left: number;
                Top: number;
                KeyboardPadding: FourSidedCss;
                KeyPadding: FourSidedCss;
                AdditionalKeyBackdropPadding: FourSidedCss;
                FromTheBottom: boolean;
            }
        }
    }
}
