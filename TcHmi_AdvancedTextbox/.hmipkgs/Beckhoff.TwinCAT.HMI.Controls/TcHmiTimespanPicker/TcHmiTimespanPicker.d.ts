declare function parseInt(s: string | undefined, radix: number): number;
declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiTimespanPicker extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTSTemplate: JQuery;
                /** Reference to the first timespan block as jquery object. */
                protected __elementTSFirstBlockTemplate: JQuery;
                /** Reference to the second timespan block as jquery object. */
                protected __elementTSSecondBlockTemplate: JQuery;
                /**
                * Internal reference to the attribute "data-tchmi-value"
                */
                protected __value: string | undefined;
                /** Event handlers */
                protected __mousedownHandler: (event: MouseEvent) => void;
                protected __mouseupHandler: (event: MouseEvent) => void;
                private __onMousedownYearUpDestroyEvent;
                private __onMousedownYearDownDestroyEvent;
                private __onMousedownMonthUpDestroyEvent;
                private __onMousedownMonthDownDestroyEvent;
                private __onMousedownDayUpDestroyEvent;
                private __onMousedownDayDownDestroyEvent;
                private __onMousedownHourUpDestroyEvent;
                private __onMousedownHourDownDestroyEvent;
                private __onMousedownMinuteUpDestroyEvent;
                private __onMousedownMinuteDownDestroyEvent;
                private __onMousedownSecondUpDestroyEvent;
                private __onMousedownSecondDownDestroyEvent;
                private __onMousedownMillisecondUpDestroyEvent;
                private __onMousedownMillisecondDownDestroyEvent;
                private __onPressedOkDestroyEvent;
                private __onPressedCancelDestroyEvent;
                private __onTextChangedYearDestroyEvent;
                private __onTextChangedMonthDestroyEvent;
                private __onTextChangedDayDestroyEvent;
                private __onTextChangedHourDestroyEvent;
                private __onTextChangedMinuteDestroyEvent;
                private __onTextChangedSecondDestroyEvent;
                private __onTextChangedMillisecondDestroyEvent;
                private __onUserInteractionFinishedYearDestroyEvent;
                private __onUserInteractionFinishedMonthDestroyEvent;
                private __onUserInteractionFinishedDayDestroyEvent;
                private __onUserInteractionFinishedHourDestroyEvent;
                private __onUserInteractionFinishedMinuteDestroyEvent;
                private __onUserInteractionFinishedSecondDestroyEvent;
                private __onUserInteractionFinishedMillisecondDestroyEvent;
                /** Stores the controls as System.baseTcHmiControl[] */
                protected __baseControls: Dictionary<System.baseTcHmiControl>;
                /** Saved if a time button is pressed */
                protected __isPressed: boolean;
                /** The interval timer for time buttons */
                protected __intervalTimer: number;
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
                * Created a documentFragment with controls (textbox, button, textbox and a second button).
                * @function
                * @param   {string}    name     -   The name of the region.
                * @returns {DocumentFragment}    The documentFragment with controls.
                */
                private __addControls;
                /**
                * Convert milliseconds to iso 8601 string
                * @function
                * @param {number} milliSec - Milliseconds
                */
                protected __timespanObjectToIso(timespanObject: {
                    years: number;
                    months: number;
                    days: number;
                    hours: number;
                    minutes: number;
                    seconds: number;
                    milliseconds: number;
                }): string;
                /**
                * Convert iso 8601 string to milliseconds
                * @function
                * @param {string} t - Iso 8601 string
                */
                protected __isoToTimespanObject(t: string): {
                    years: number;
                    months: number;
                    days: number;
                    hours: number;
                    minutes: number;
                    seconds: number;
                    milliseconds: number;
                };
                /**
                 * Returns an event handler for the mousedown event.
                 * @function
                 */
                protected __onMousedown(): (event: MouseEvent) => void;
                /**
                * Open the timespanPicker (in TopMostLayer).
                * @function
                */
                openTimespanPicker(): void;
                /**
                * Close the timespanPicker without changes (delete from TopMostLayer).
                * @function
                */
                closeTimespanPicker(): void;
                /**
              * Is called if onPressed event of buttons has raised.
              * @function
              * @callback
              */
                private __onMousedownTimeButtons;
                /**
               * Is called if onPressed event of buttons has raised.
               * @function
               * @callback
               */
                private __onMouseup;
                /**
                * Is called if onPressed event of buttons has raised.
                * @function
                * @callback
                */
                private __onPressed;
                /**
                * Is called if onValueChanged event of Textbox has raised.
                * @function
                * @callback
                */
                private __onTextChanged;
                /**
                * Is called if onUserInteractionFinished event of Textbox has raised.
                * @function
                * @callback
                */
                private __onUserInteractionFinished;
                /**
                * Sets the value of value
                * @function
                * @param {string} valueNew The new value for value
                */
                setValue(valueNew: string | null, process?: boolean): void;
                /**
                * Gets the value of value
                * @function
                * @returns {string}
                */
                getValue(): string | undefined;
                /**
                * Processes value
                * @function
                */
                protected __processValue(): void;
                /**
                 * Processes the current enabled state.
                 * @function
                 */
                __processIsEnabled(): void;
            }
        }
    }
}
