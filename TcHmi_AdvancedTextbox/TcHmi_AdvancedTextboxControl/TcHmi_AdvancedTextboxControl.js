/*

Zero-Clause BSD
Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Training;
        (function (Training) {
            class AdvancedTextbox extends TcHmi.Controls.Beckhoff.TcHmiTextbox {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    this.__PopUpKeyboardControl = undefined;
                    this.__PopUpTextBoxPadding = 3;
                    this.__keyboardRelationalPlacement = true;
                    this.__PageLayout = { Width: 0, Height: 0 };
                    this.__TextboxLayout = { Width: 0, Height: 0, Left: 0, Top: 0 };
                    this.__KeyboardLayout = {
                        Width: 0,
                        Height: 0,
                        Left: 0,
                        Top: 0,
                        KeyboardPadding: {},
                        KeyPadding: {},
                        AdditionalKeyBackdropPadding: {},
                        FromTheBottom: false
                    };
                    this.__TooltipLayout = { Position: 'top' };
                    /** Declare event namespaces for unique event listeners to prevent unregistering wrong events in some cases (heredity e.g.) */
                    this.guid = tchmi_create_guid();
                    this.__evtNsKeyDown = 'keydown.' + this.guid;
                    /** Declare an array to store all destroy functions of registered tchmi framework events */
                    this.__PopupEventDestroyFunctions = [];
                    this.__EventDestroyFunctions = [];
                    this.__setTchmiEvents = function (tcHmiControl) {
                        logToConsole("Set Events");
                        var controlId = undefined;
                        // If the use popup textbox setting is true and the popup textbox instance is valid
                        // Then this current function run is meant for the popup textbox events
                        if (tcHmiControl.__PopUpKeyboardSettings.Textbox && tcHmiControl.__PopUpTextBox !== undefined) {
                            controlId = tcHmiControl.__PopUpTextBox.getId();
                            // Reregister on the key down event of the textarea
                            $("#AdvancedTextbox_Text input").on("keydown." + controlId, tcHmiControl.__onTextareaKeyDown());
                            // Else this current function run is meant to register the main AdvancedTextbox events
                        }
                        else {
                            controlId = tcHmiControl.getId();
                        }
                        //TcHmi.EventProvider.register('TcHmiButton', function (event) { });
                        if (controlId !== undefined) {
                            // If the Id is not the static popup id for the popup textbox
                            if (!controlId.includes('AdvancedTextbox_Text') || $("#AdvancedTextbox_Text input").length == 0) {
                                // This is the main control
                                tcHmiControl.__isPopUp = false;
                                tcHmiControl.__EventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onFocusIn', tcHmiControl._onFocusIn()));
                                tcHmiControl.__EventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onTextChanged', tcHmiControl.__onTextChanged()));
                                tcHmiControl.__EventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onUserInteractionFinished', tcHmiControl._onUserInteractionFinished()));
                                tcHmiControl.__EventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onUserInteractionCanceled', tcHmiControl._onUserInteractionCanceled()));
                                tcHmiControl.__EventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onFocusOut', tcHmiControl._onFocusOut()));
                                // Else if the Id is the static popup id for the popup textbox
                            }
                            else if (controlId.includes('AdvancedTextbox_Text')) {
                                logToConsole('I am  a popup');
                                tcHmiControl.__isPopUp = true;
                                tcHmiControl.__PopupEventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onFocusIn', tcHmiControl._onFocusIn()));
                                tcHmiControl.__PopupEventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onTextChanged', tcHmiControl.__onTextChanged()));
                                tcHmiControl.__PopupEventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onUserInteractionFinished', tcHmiControl._onUserInteractionFinished()));
                                tcHmiControl.__PopupEventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onUserInteractionCanceled', tcHmiControl._onUserInteractionCanceled()));
                                tcHmiControl.__PopupEventDestroyFunctions.push(TcHmi.EventProvider.register(controlId + '.onFocusOut', tcHmiControl._onFocusOut()));
                                logToConsole("Added events for: " + controlId + " Total: " + tcHmiControl.__PopupEventDestroyFunctions.length);
                            }
                        }
                    };
                    // TODO: Move popup control events to seperate destroy handler
                    this.__destroyTchmiEvents = function (tcHmiControl) {
                        logToConsole("Destroy Events");
                        if (tcHmiControl) {
                            if (tcHmiControl.__isPopUp) {
                                for (var i = 0; i < tcHmiControl.__PopupEventDestroyFunctions.length; i++) {
                                    if (typeof tcHmiControl.__PopupEventDestroyFunctions[i] === "function") {
                                        logToConsole("Event Destroyed!!");
                                        tcHmiControl.__PopupEventDestroyFunctions[i]();
                                    }
                                    else {
                                        logToConsole("Event wasn't a function??");
                                    }
                                }
                                tcHmiControl.__PopupEventDestroyFunctions = [];
                                tcHmiControl.__PopupEventDestroyFunctions.length = 0;
                            }
                            else {
                                for (var i = 0; i < tcHmiControl.__EventDestroyFunctions.length; i++) {
                                    if (typeof tcHmiControl.__EventDestroyFunctions[i] === "function") {
                                        logToConsole("Event Destroyed!!");
                                        tcHmiControl.__EventDestroyFunctions[i]();
                                    }
                                    else {
                                        logToConsole("Event wasn't a function??");
                                    }
                                }
                                tcHmiControl.__EventDestroyFunctions = [];
                                tcHmiControl.__EventDestroyFunctions.length = 0;
                            }
                        }
                    };
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    if (!TCHMI_DESIGNER) {
                        /** Handle template elements. Should be done before call to __previnit of super class. */
                        this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Training_AdvancedTextbox-Template');
                        if (this.__elementTemplateRoot.length === 0) {
                            throw new Error('Invalid Template.html');
                        }
                        this.__elementTooltipText = this.__elementTemplateRoot.find('.tooltiptext');
                    }
                    super.__previnit();
                }
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    // If in the engineering designer, do not register events
                    // Live-view is seperate, and will still register
                    if (TCHMI_DESIGNER) {
                        return;
                    }
                    this.__elementTextarea = this.__elementTemplateRoot.find('.TcHmi_Controls_Beckhoff_TcHmiTextbox-template-input');
                    // Only register events if thepopup keyboard is true,
                    // else no events are regisiter and this behaves as a nomral textbox
                    if (this.__PopUpKeyboardSettings.Active == true) {
                        // Register on the tchmi framework events
                        this.__setTchmiEvents(this);
                    }
                }
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                    if (TCHMI_DESIGNER) {
                        return;
                    }
                    /**
                    * Disable everything which is not needed while the control is not part of the active dom.
                    * No need to listen to events for example!
                    */
                    // Deregister from the key down event
                    this.__elementTextarea.off(this.__evtNsKeyDown);
                    // Deregister from all tchmi framework events
                    this.__destroyTchmiEvents(this);
                    this.__PopupEventDestroyFunctions = [];
                    this.__EventDestroyFunctions = [];
                }
                ;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                    if (!TCHMI_DESIGNER) {
                        this.__destroyTchmiEvents(this);
                    }
                }
                /**
                * @description Eventhandler for __processMultiline
                * Will be called if the textbox switches into a textarea or back when the multiline option is used
                */
                __processMultiline() {
                    logToConsole("__processMultiline");
                    /** Call base __processMultiline function */
                    super.__processMultiline.call(this);
                    if (TCHMI_DESIGNER) {
                        return;
                    }
                    // Update the reference to the textarea element
                    this.__elementTextarea = this.__elementTemplateRoot.find('.tchmi-textbox-template-input');
                    // Reregister on the key down event of the textarea
                    this.__elementTextarea.on(this.__evtNsKeyDown, this.__onTextareaKeyDown());
                }
                ;
                /**
                * @description On enter only function
                * @returns null
                */
                __onEnterPress(_this) {
                    logToConsole("__onEnterPress");
                    if (_this.CheckValue(0)) {
                        logToConsole("Valued Checked Good");
                        if (_this.__PopUpTextBox !== undefined) {
                            logToConsole("Updating value");
                            _this.CopyDataToPrimaryTextBox();
                            _this.SetSavedValue();
                        }
                    }
                }
                /**
                  * @description Eventhandler for __onTextareaKeyDown
                  * @returns {function} Handler for the event __onTextareaKeyDown
                  */
                __onTextareaKeyDown() {
                    logToConsole("__onTextareaKeyDown");
                    var _this = this;
                    return function (eventData) {
                        var textObject;
                        if (_this.__PopUpTextBox !== undefined)
                            textObject = _this.__PopUpTextBox;
                        else
                            textObject = _this;
                        // Check if the operator has the permissions to interact with the control
                        if (_this.__CheckPermissions('allowValueChange', textObject) !== true) {
                            eventData.preventDefault();
                            _this.OpenTooltip('Insufficient rights!', 3000);
                            return;
                        }
                        // Extract which key was pressed
                        var key = eventData.key;
                        var keyCode = eventData.keyCode;
                        var isSpecialKey = eventData.altKey || eventData.ctrlKey || eventData.metaKey || eventData.shiftKey;
                        var isCursorKey = keyCode >= 37 && keyCode <= 40;
                        var isBackspaceKey = keyCode === 8;
                        var isEnterKey = keyCode === 13;
                        var isEscKey = keyCode === 27;
                        var isSpaceKey = keyCode === 32;
                        var isDelKey = keyCode === 46;
                        var isCommaKey = keyCode === 188 || keyCode === 110;
                        var isPeriodKey = keyCode === 190;
                        var isExceptionKey = isSpecialKey || isCursorKey || isBackspaceKey || isEnterKey || isEscKey || isSpaceKey || isDelKey || isCommaKey || isPeriodKey;
                        if (isEnterKey)
                            _this.__onEnterPress(_this);
                        if (!isExceptionKey) {
                            // Check if the pressed key is a number, if yes prevent the default event
                            if (!_this.__InputSettingsAllow.Numbers) {
                                if (!isNaN(Number(key))) {
                                    eventData.preventDefault();
                                }
                            }
                            // Check if the pressed key is a character or symbol, if yes prevent the default event
                            if (!_this.__InputSettingsAllow.Strings) {
                                if (isNaN(Number(key))) {
                                    eventData.preventDefault();
                                }
                            }
                        }
                        // Check if the maximum number of characters is reached, if yes prevent the default event
                        if (_this.__InputSettingsCheck.Strings.Check && _this.__InputSettingsCheck.Strings.ForbidMoreCharacters) {
                            var CurrentText = textObject.getText();
                            if (CurrentText.length >= _this.__InputSettingsCheck.Strings.MaxCharacters) {
                                if (!isExceptionKey) {
                                    eventData.preventDefault();
                                }
                            }
                        }
                    };
                }
                ;
                /**
                  * @description Debugging function, attempting to get what called an event
                  * @returns string of method that called the event (maybe)
                  */
                getClassNameOfRelatedTarget(eventData) {
                    //logToConsole("getClassNameOfRelatedTarget");
                    if (eventData === undefined) {
                        if (this.__type !== undefined || this.__type != null) {
                            return this.__type;
                        }
                        return "Unknown";
                    }
                    if (eventData.relatedTarget !== undefined && eventData.relatedTarget != null)
                        return eventData.relatedTarget.className;
                    else if (eventData.currentTarget !== undefined && eventData.currentTarget != null)
                        return eventData.currentTarget.className;
                    else if (eventData.name !== undefined && eventData.name !== null) {
                        return eventData.name;
                    }
                    return "Unknown";
                }
                ;
                /**
                 * @description Eventhandler for __onTextChanged
                 * @returns {function} Handler for the event __onTextChanged
                 */
                __onTextChanged(eventData) {
                    logToConsole("TextChange : " + this.getClassNameOfRelatedTarget(eventData));
                    var _this = this;
                    return function (eventData) {
                        logToConsole("TextChange - sub : " + _this.getClassNameOfRelatedTarget(eventData));
                        // Check the current text in the textbox
                        _this.CheckValue();
                    };
                }
                ;
                /**
                 * @description Eventhandler for __onUserInteractionFinished
                 * @returns {function} Handler for the event __onUserInteractionFinished
                 */
                _onUserInteractionFinished(eventData) {
                    logToConsole("Interaction Finished : " + this.getClassNameOfRelatedTarget(eventData));
                    var _this = this;
                    return function (eventData) {
                        logToConsole("Interaction Finished - sub : " + _this.getClassNameOfRelatedTarget(eventData));
                        if (eventData.name.includes('AdvancedTextbox_Text') && _this.__PopUpTextBox !== undefined) {
                            // Check the current text in the textbox
                            if (_this.CheckValue(0)) {
                                // If the check result is true, fire the event
                                _this.CopyDataToPrimaryTextBox();
                                _this.SetSavedValue();
                                logToConsole(eventData);
                                TcHmi.EventProvider.raise(_this.getId() + '.onUserInteractionFinishedWithCheckOk');
                            }
                            else {
                                _this.ResetToInitValue();
                            }
                            // Close the popup keyboard
                            _this.ClosePopUpKeyboard();
                        }
                        logToConsole("Finished Interaction Finished : " + _this.getClassNameOfRelatedTarget(eventData));
                    };
                }
                ;
                /**
                 * @description Eventhandler for __onUserInteractionCanceled
                 * @returns {function} Handler for the event __onUserInteractionCanceled
                 */
                _onUserInteractionCanceled(eventData) {
                    logToConsole("Interaction Canceled : " + this.getClassNameOfRelatedTarget(eventData));
                    var _this = this;
                    return function (eventData) {
                        logToConsole("Interaction Canceled - sub : " + _this.getClassNameOfRelatedTarget(eventData));
                        //_this.CopyDataToPrimaryTextBox();
                        _this.ResetToInitValue();
                        // Close the popup keyboard
                        _this.ClosePopUpKeyboard();
                    };
                }
                ;
                /**
                 * @description Eventhandler for __onFocusIn
                 * @returns {function} Handler for the event __onFocusIn
                 */
                _onFocusIn(eventData) {
                    logToConsole("Focus In : " + this.getClassNameOfRelatedTarget(eventData));
                    var _this = this;
                    return function (eventData) {
                        logToConsole("Focus In - Sub : " + _this.getClassNameOfRelatedTarget(eventData));
                        // If popup keyboard is active in the settings, open it
                        if (_this.__PopUpKeyboardSettings.Active) {
                            _this.OpenPopUpKeyboard();
                            // If Temp text box is active in the settings, open it
                            if (_this.__PopUpKeyboardSettings.Textbox) {
                                _this.OpenTempTextBox();
                                _this.SetInitValueOnTempTextbox();
                            }
                        }
                        _this.SetSavedValue();
                        // Preselect the current text in the textarea
                        _this.__elementTextarea.select();
                        // Check the current text in the textbox
                        _this.CheckValue();
                    };
                }
                ;
                /**
                 * @description Eventhandler for __onFocusOut
                 * @returns {function} Handler for the event __onFocusOut
                 */
                _onFocusOut(eventData) {
                    logToConsole("onFocusOut : " + this.getClassNameOfRelatedTarget(eventData));
                    var _this = this;
                    this.__onFocusOut;
                    return function (eventData) {
                        logToConsole("onFocusOut - Sub : " + _this.getClassNameOfRelatedTarget(eventData.name));
                        if (_this.__PopUpKeyboardSettings.Textbox) {
                            //if (eventData.relatedTarget === undefined) {
                            //if (eventData.relatedTarget === undefined && _this.__PopUpTextBox !== undefined) {
                            if (eventData.name.includes('AdvancedTextbox_Text') && _this.__PopUpTextBox !== undefined) {
                                //_this.CopyDataToPrimaryTextBox();
                                // Close popup Keyboard
                                _this.ClosePopUpKeyboard();
                                // Close tooltip
                                _this.CloseTooltip();
                                // Remove highlighting
                                _this.__ClearCheckHighlighting();
                            }
                            else {
                                //Disabling the "parent" textbox
                                //_this.setIsEnabled(false);
                                /*
                                //Getting DOM object
                                var tempTextBoxDomObject = $("#AdvancedTextbox_Text input");
                                //_this.__elementTextarea
                                tempTextBoxDomObject.ready(function () {
                                    //ReEnable the temp box control
                                    _this.__PopUpTextBox.setIsEnabled(true);
                                    logToConsole("ReEnabled");
                                });
                                */
                                return;
                            }
                        }
                        else {
                            // Close popup Keyboard
                            _this.ClosePopUpKeyboard();
                            // Close tooltip
                            _this.CloseTooltip();
                            // Remove highlighting
                            _this.__ClearCheckHighlighting();
                            logToConsole("Check Value: " + _this.CheckValue());
                            if (!_this.CheckValue()) {
                                //Revert to (Updated) initial value
                                _this.ResetToInitValue();
                            }
                        }
                    };
                }
                /**
      * CUSTOM AREA
      * Public functions
      */
                /**
                 * @description Copy inital value of the text box to the temp box
                 * @returns Boolean
                 */
                SetInitValueOnTempTextbox() {
                    this.__PopUpTextBox.setText(this.getText());
                }
                /**
                 * @description Stores inital value of the text box
                 * @returns Boolean
                 */
                SetSavedValue() {
                    this.__initValue = this.getText();
                    logToConsole("Saved Value: " + this.__initValue);
                }
                /**
                 * @description Stores inital value of the text box
                 * @returns Boolean
                 */
                ResetToInitValue() {
                    this.setText(this.__initValue);
                }
                /**
                 * @description Checks to see if the keyboard is a small form factor (Keypad style)
                 * @returns Boolean
                 */
                IsKeypad() {
                    if (this.__PopUpKeyboardSettings.Type.includes("PINpad") || this.__PopUpKeyboardSettings.Type.includes("Numpad") || this.__PopUpKeyboardSettings.Type.includes("Calculator") || this.__PopUpKeyboardSettings.Type.includes("CustomerNumpad")) {
                        logToConsole('Is Keypad: true');
                        return true;
                    }
                    else {
                        logToConsole('Is Keypad: true');
                        return false;
                    }
                }
                /**
                 * @description Open the popup keyboard
                 * @returns {void}
                 */
                OpenPopUpKeyboard() {
                    // Calculate the position of the popup keyboard
                    this.__CalculateKeyboardPosition();
                    logToConsole('From the bottom: ' + this.__KeyboardLayout.FromTheBottom);
                    // Check if there is any instance of the popup keyboard is open, also from another advanced textboxes.
                    // If no create on, if yes get these instance reference
                    if (TcHmi.Controls.get('AdvancedTextbox_PopUpKeyboard') === undefined) {
                        this.__PopUpKeyboardControl = TcHmi.ControlFactory.createEx('tchmi-keyboard', 'AdvancedTextbox_PopUpKeyboard', { 'data-tchmi-layout-file': this.__PopUpKeyboardSettings.Type }, TcHmi.View.get());
                    }
                    else {
                        this.__PopUpKeyboardControl = TcHmi.Controls.get('AdvancedTextbox_PopUpKeyboard');
                        logToConsole("Grabbed the keyboard");
                    }
                    // There is an instance of the keyboard control, set parameter and append it to the active dom
                    if (this.__PopUpKeyboardControl !== undefined) {
                        // Ensure keep alive is off to allow destroying popup
                        this.__PopUpKeyboardControl.__setKeepAlive(false);
                        logToConsole("ZIndex of control: " + this.getZindex());
                        if (this.__PopUpKeyboardSettings.ZIndex) {
                            this.__PopUpKeyboardControl.setZindex(Math.round(this.__PopUpKeyboardSettings.ZIndex));
                        }
                        else {
                            this.__PopUpKeyboardControl.setZindex(this.getZindex());
                        }
                        // Depending on keyboard style open it beside the textbox or at the top or bottom
                        if (this.IsKeypad()) {
                            // Set calculated keyboard positions
                            //this.__PopUpKeyboardControl.setLabelFontSizeUnit("%");
                            //this.__PopUpKeyboardControl.setLabelFontSize(200);
                            logToConsole("Keyboard size: " + this.__PopUpKeyboardControl.getLabelFontSizeUnit() + this.__PopUpKeyboardControl.getLabelFontSize());
                            this.__PopUpKeyboardControl.setLeft(this.__KeyboardLayout.Left + 5);
                            if (this.__PopUpKeyboardSettings.Textbox) {
                                if (this.__KeyboardLayout.FromTheBottom) {
                                    this.__PopUpKeyboardControl.setTop(this.__KeyboardLayout.Top + this.__PopUpTextBoxPadding);
                                }
                                else {
                                    this.__PopUpKeyboardControl.setTop(this.__KeyboardLayout.Top + 26 + this.__PopUpTextBoxPadding);
                                }
                            }
                            else {
                                this.__PopUpKeyboardControl.setTop(this.__KeyboardLayout.Top);
                            }
                            this.__PopUpKeyboardControl.setHeight(this.__KeyboardLayout.Height);
                            this.__PopUpKeyboardControl.setWidth(this.__KeyboardLayout.Width);
                        }
                        else {
                            // Set visibility options
                            this.__PopUpKeyboardControl.setWidthMode("Parent");
                            this.__PopUpKeyboardControl.setLeft(0);
                            this.__PopUpKeyboardControl.setRight(0);
                            // Decide if the full keyboard should appear at the top or at the bottom of the screen
                            if (this.__TextboxLayout.Top < this.__PageLayout.Height / 2) {
                                this.__PopUpKeyboardControl.setBottom(0);
                            }
                            else {
                                this.__PopUpKeyboardControl.setTop(0);
                            }
                            // Set the height of the full keyboard to a third of the full screen
                            this.__PopUpKeyboardControl.setHeight(this.__PageLayout.Height / 3);
                        }
                        // Set keyboard layout and font options
                        //this.__PopUpKeyboardControl.setLabelFontSize(this.__PageLayout.Height / this.__PopUpKeyboardSettings.FontSize);
                        this.__PopUpKeyboardControl.setLabelFontSize(this.__PopUpKeyboardSettings.KeyboardFontSize);
                        this.__PopUpKeyboardControl.setKeyboardPadding(this.__KeyboardLayout.KeyboardPadding);
                        this.__PopUpKeyboardControl.setKeyPadding(this.__KeyboardLayout.KeyPadding);
                        this.__PopUpKeyboardControl.setAdditionalKeyBackdropPadding(this.__KeyboardLayout.AdditionalKeyBackdropPadding);
                        if (this.__PopUpKeyboardSettings.ScaleMode) {
                            this.__PopUpKeyboardControl.setScaleMode(this.__PopUpKeyboardSettings.ScaleMode);
                        }
                        else {
                            this.__PopUpKeyboardControl.setScaleMode("ScaleToFit");
                        }
                        // Append the keyboard to the current view
                        logToConsole("OpenPopUpKeyboard (Appending): " + TcHmi.View.get().getElement() + " " + this.__PopUpKeyboardControl.getElement());
                        TcHmi.View.get().getElement().append(this.__PopUpKeyboardControl.getElement());
                    }
                }
                ;
                /**
                 * @description Open Temp text box
                 * @returns {void}
                 */
                OpenTempTextBox() {
                    var _this = this;
                    //Create the temp text box//
                    //if (this.__PopUpKeyboardSettings.Textbox && TcHmi.Controls.get('AdvancedTextbox_Text') === undefined) {
                    if (this.__PopUpKeyboardSettings.Textbox) {
                        if (TcHmi.Controls.get('AdvancedTextbox_Text') === undefined) {
                            this.__PopUpTextBox = TcHmi.ControlFactory.create('tchmi-textbox', 'AdvancedTextbox_Text', this);
                        }
                        else {
                            this.__PopUpTextBox = TcHmi.Controls.get('AdvancedTextbox_Text');
                            this.__addChild(this.__PopUpTextBox, null);
                            logToConsole("Grabbed the textbox");
                        }
                        //TcHmi_AdvancedTextbox.prototype.__destroyTchmiEvents(this);
                        //Create temp text box to write into
                        //this.__PopUpTextBox = TcHmi.ControlFactory.create('tchmi-textbox', 'AdvancedTextbox_Text', this);
                        //this.addChild(this.__PopUpTextBox, null);
                        logToConsole("Chidren: " + this.__children[0].getId());
                        //this.__PopUpTextBox = TcHmi.ControlFactory.create('tchmi-advanced-textbox', 'AdvancedTextbox_Text', TcHmi.View.get());
                        if (this.__PopUpTextBox !== undefined) {
                            //ReEnable the control
                            this.__PopUpTextBox.setIsEnabled(true);
                            logToConsole("ZIndex of textBox: " + this.getZindex());
                            if (this.__PopUpKeyboardSettings.ZIndex) {
                                this.__PopUpTextBox.setZindex(Math.round(this.__PopUpKeyboardSettings.ZIndex));
                            }
                            else {
                                this.__PopUpTextBox.setZindex(this.getZindex());
                            }
                            //Set standard position and size data
                            this.__PopUpTextBox.setWidth(this.__KeyboardLayout.Width);
                            this.__PopUpTextBox.setHeight(26);
                            this.__PopUpTextBox.setTextFontSize(this.__PopUpKeyboardSettings.TextboxFontSize);
                            //Set the position of the Text Box
                            if (this.IsKeypad()) {
                                if (this.__KeyboardLayout.FromTheBottom) {
                                    this.__PopUpTextBox.setTop(this.__KeyboardLayout.Top - 26);
                                }
                                else {
                                    this.__PopUpTextBox.setTop(this.__KeyboardLayout.Top);
                                }
                                this.__PopUpTextBox.setLeft(this.__KeyboardLayout.Left);
                            }
                            else {
                                this.__PopUpTextBox.setLeft(this.__PageLayout.Width / 2 - (this.__KeyboardLayout.Width / 2));
                                if (this.__PopUpKeyboardControl.getTop() == 0) {
                                    //Keyboard is at the top of the screen//
                                    this.__PopUpTextBox.setTop(this.__PopUpKeyboardControl.getHeight() + (this.__PopUpTextBoxPadding));
                                }
                                else {
                                    //Keyboard is a tthe bottom on the screen//
                                    //this.__PopUpTextBox.setTop(this.__PopUpKeyboardControl.getTop() - (this.__PopUpTextBoxPadding));
                                    this.__PopUpTextBox.setTop(this.__PageLayout.Height - this.__PopUpKeyboardControl.getHeight() - (this.__PopUpTextBoxPadding) - 26);
                                }
                            }
                            logToConsole("OpenTempTextBox (Appending): " + TcHmi.View.get().getElement() + " " + this.__PopUpTextBox.getElement());
                            TcHmi.View.get().getElement().append(this.__PopUpTextBox.getElement());
                            //Getting DOM object
                            var tempTextBoxDomObject = this.__PopUpTextBox.getElement().find('.tchmi-textbox-template-input');
                            //var tempTextBoxDomObject = $("#AdvancedTextbox_Text input");
                            //Setting focus to the new text box after it is on the DOM
                            tempTextBoxDomObject.ready(function () {
                                var _a;
                                logToConsole("Setting Focus to: " + ((_a = _this.__PopUpTextBox) === null || _a === void 0 ? void 0 : _a.getId()));
                                logToConsole(tempTextBoxDomObject);
                                tempTextBoxDomObject.focus();
                                tempTextBoxDomObject.select();
                                _this.__setTchmiEvents(_this);
                            });
                        }
                    }
                }
                /**
                 * @description Close the popup keyboard
                 * @returns {void}
                 */
                ClosePopUpKeyboard() {
                    var _this = this;
                    if (!_this.__PopUpKeyboardSettings.Active) {
                        return;
                    }
                    logToConsole("Close Popup Keyboard");
                    //var tempTextBoxDomObject = this.__PopUpTextBox.__element.find('.tchmi-textbox-template-input');
                    //tempTextBoxDomObject.ready(function () {
                    // Check if an instance of the popup keyboard exists
                    if (_this.__PopUpKeyboardControl !== undefined) {
                        // Destroy the popup keyboard instance / will also close the popup keyboard
                        // Some function stacks will include destroy twice - switching content destroys parent which destroys children
                        // Which then also calls user interaction cancel which also calls child destroy
                        if (!_this.__PopUpKeyboardControl.getIsDestroyed()) {
                            _this.__PopUpKeyboardControl.destroy();
                            _this.__PopUpKeyboardControl = undefined;
                        }
                    }
                    if (_this.__PopUpKeyboardSettings.Textbox) {
                        this.__destroyTchmiEvents(_this);
                        if (_this.__PopUpTextBox !== undefined) {
                            // Destroy the popup temp textbox
                            logToConsole(_this.__PopupEventDestroyFunctions);
                            if (!_this.__PopUpTextBox.getIsDestroyed()) {
                                _this.__PopUpTextBox.destroy();
                                _this.__PopUpTextBox = undefined;
                            }
                        }
                    }
                    //});
                    //Reenabling the "parent" textbox
                    this.setIsEnabled(true);
                }
                ;
                /**
                 * @description Open the tooltip
                 * @param {string} TooltipText Text to display in the tooltip
                 * @param {number} Timeout Timeout before the style gets set back to theme
                 * @returns {void}
                 */
                OpenTooltip(TooltipText, Timeout) {
                    // Calculate the new position of the tooltip
                    this.__CalculateTooltipPosition();
                    // Set tooltip text
                    this.__elementTooltipText.text(TooltipText);
                    // Depending on the calculated tooltip position add the correct CSS class
                    if (this.__TooltipLayout.Position === 'bottom') {
                        this.__elementTooltipText.removeClass('tooltiptexttop').addClass('tooltiptextbottom');
                    }
                    else if (this.__TooltipLayout.Position === 'top') {
                        this.__elementTooltipText.removeClass('tooltiptextbottom').addClass('tooltiptexttop');
                    }
                    // Set CSS visibility style
                    this.__elementTooltipText.css('visibility', 'visible');
                    // Start a timeout to close the tooltip
                    if (Timeout !== undefined) {
                        var _this = this;
                        this.__TooltipTimeoutId = setTimeout(function () {
                            _this.CloseTooltip();
                        }, Timeout);
                    }
                }
                ;
                /**
                 * @description Close the tooltip
                 * @returns {void}
                 */
                CloseTooltip() {
                    // Set CSS visibility style
                    this.__elementTooltipText.css('visibility', 'collapse');
                }
                ;
                /**
                 * @description Checks the value in the textbox depending on the input settings for checking
                 * @param {number} Timeout Timeout in ms to set back to normal style
                 * @returns {boolean} Returns the result of the check, true = value is ok, false = value is not ok
                 */
                CheckValue(Timeout) {
                    // Get current text of the textbox
                    this.__ValidValue = false;
                    if (this.__PopUpKeyboardSettings.Textbox && this.__PopUpTextBox !== undefined) {
                        var NewText = this.__PopUpTextBox.getText();
                    }
                    else if (this.__PopUpKeyboardSettings.Textbox && this.__PopUpTextBox === undefined) {
                        return;
                    }
                    else {
                        var NewText = this.getText();
                    }
                    // Create return value
                    var Result = false;
                    // Create tooltip text
                    var TooltipText = "";
                    // Verify that not both, string and number, checking is enabled
                    if (this.__InputSettingsCheck.Numbers.Check && this.__InputSettingsCheck.Strings.Check) {
                        TooltipText = 'Can not check numbers and strings at the same time!\nCheck settings!';
                        Result = false;
                    }
                    else {
                        // Check if the number is in the allowed range
                        if (this.__InputSettingsCheck.Numbers.Check) {
                            var NewNumber = Number(NewText);
                            if (isNaN(NewNumber)) {
                                TooltipText = 'Can not check string as a number!!!';
                                Result = false;
                            }
                            else {
                                if (NewNumber >= this.__InputSettingsCheck.Numbers.Min && NewNumber <= this.__InputSettingsCheck.Numbers.Max) {
                                    Result = true;
                                }
                                else {
                                    TooltipText = 'Max: ' + this.__InputSettingsCheck.Numbers.Max + '\nMin: ' + this.__InputSettingsCheck.Numbers.Min;
                                    Result = false;
                                }
                            }
                        }
                        // Check if the text has only the allowed length
                        if (this.__InputSettingsCheck.Strings.Check) {
                            if (NewText.length <= this.__InputSettingsCheck.Strings.MaxCharacters) {
                                Result = true;
                            }
                            else {
                                TooltipText = 'Max: ' + this.__InputSettingsCheck.Strings.MaxCharacters + '\ncharacters allowed!';
                                Result = false;
                            }
                        }
                        //Check if no checks are being requested
                        if (!this.__InputSettingsCheck.Strings.Check && !this.__InputSettingsCheck.Numbers.Check) {
                            Result = true;
                        }
                    }
                    // If highlighting is enabled, set highlighting depending on the checking result
                    if (this.__InputSettingsCheck.Highlighting && (this.__InputSettingsCheck.Numbers.Check || this.__InputSettingsCheck.Strings.Check)) {
                        this.__SetCheckHighlighting(Result, Timeout);
                    }
                    // If tooltip is enabled, open a hint with the allowed value or message
                    if (this.__InputSettingsCheck.Tooltip) {
                        if (Result) {
                            this.CloseTooltip();
                        }
                        else {
                            if (this.__InputSettingsCheck.Strings.Check) {
                                this.OpenTooltip(TooltipText, Timeout);
                            }
                            if (this.__InputSettingsCheck.Numbers.Check) {
                                this.OpenTooltip(TooltipText, Timeout);
                            }
                        }
                    }
                    // Return the checking result
                    this.__ValidValue = Result;
                    return Result;
                }
                ;
                /**
                 * CUSTOM AREA
                 * Private functions
                 */
                /**
                 * @description Copies data to the permanent text box
                 * @returns {void}
                 */
                CopyDataToPrimaryTextBox() {
                    logToConsole("CopyDataToPrimaryTextBox - Start");
                    if (this.__PopUpKeyboardSettings.Textbox && this.__PopUpTextBox !== undefined && this.CheckValue(0)) {
                        logToConsole("CopyDataToPrimaryTextBox - Processing");
                        this.setText(this.__PopUpTextBox.getText());
                    }
                }
                /**
                 * @description Check the permissions of the control
                 * @param {string} permissionName The name of the permission to check
                 * @returns {boolean} true = permissions are ok / false = permissions are not ok
                 */
                __CheckPermissions(permissionName, _this) {
                    //Set the default for _this
                    _this = _this || this;
                    // Check permissions to operate _this control
                    if (TcHmi.Access.checkAccess(_this, permissionName) !== true) {
                        TcHmi.Log.warn('The current user is not allowed to interact with _this control');
                        return false;
                    }
                    // Check if _this control is enabled
                    if (_this.getIsEnabled() !== true) {
                        TcHmi.Log.warn('The control is not enabled, no interaction is allowed');
                        return false;
                    }
                    // Permissions are ok
                    return true;
                }
                ;
                /**
                 * @description Calculate the position of the popup keyboard
                 * @returns {void}
                 */
                __CalculateKeyboardPosition() {
                    // Get the current page layout
                    this.__PageLayout.Width = TcHmi.View.get().getRenderedWidth();
                    this.__PageLayout.Height = TcHmi.View.get().getRenderedHeight();
                    // Get the current textbox layout
                    this.__TextboxLayout.Width = this.getRenderedWidth();
                    this.__TextboxLayout.Height = this.getRenderedHeight();
                    this.__TextboxLayout.Left = this.getRenderedLeft();
                    this.__TextboxLayout.Top = this.getRenderedTop();
                    // Calculate the keyboard layout
                    this.__KeyboardLayout.Width = this.__PageLayout.Width / 8;
                    this.__KeyboardLayout.Height = this.__KeyboardLayout.Width * 1.3;
                    // Set min sizes//
                    /*
                    this.__keyboardMinWidth = 0;
                    this.__keyboardMinHeight = 0; //this.__PopUpKeyboardSettings.FontSize
                    */
                    if (this.__PopUpKeyboardSettings.MinWidth && this.__PopUpKeyboardSettings.MinWidth > 0 && this.__PopUpKeyboardSettings.MinWidth > this.__KeyboardLayout.Width) {
                        this.__KeyboardLayout.Width = this.__PopUpKeyboardSettings.MinWidth;
                    }
                    if (this.__PopUpKeyboardSettings.MinHeight && this.__PopUpKeyboardSettings.MinHeight > 0 && this.__PopUpKeyboardSettings.MinHeight > this.__KeyboardLayout.Height) {
                        this.__KeyboardLayout.Height = this.__PopUpKeyboardSettings.MinHeight;
                    }
                    // Setting Position
                    if (this.__PopUpKeyboardSettings.CenterKeypadKeyboards && this.IsKeypad()) {
                        this.__KeyboardLayout.Left = (this.__PageLayout.Width / 2) - (this.__KeyboardLayout.Width / 2);
                        var textboxOffset = 0;
                        if (this.__PopUpKeyboardSettings.Textbox) {
                            textboxOffset = 26 / 2;
                        }
                        this.__KeyboardLayout.Top = (this.__PageLayout.Height / 2) - (this.__KeyboardLayout.Height / 2) - textboxOffset;
                    }
                    else {
                        if (this.__TextboxLayout.Left + this.__TextboxLayout.Width + this.__KeyboardLayout.Width > this.__PageLayout.Width) {
                            this.__KeyboardLayout.Left = this.__TextboxLayout.Left - this.__KeyboardLayout.Width - 10;
                        }
                        else {
                            this.__KeyboardLayout.Left = this.__TextboxLayout.Left + this.__TextboxLayout.Width + 10;
                        }
                        textboxOffset = 0;
                        if (this.__PopUpKeyboardSettings.Textbox) {
                            textboxOffset = 26;
                        }
                        if (this.__TextboxLayout.Top + this.__KeyboardLayout.Height + textboxOffset > this.__PageLayout.Height) {
                            this.__KeyboardLayout.Top = this.__TextboxLayout.Top + this.__TextboxLayout.Height - this.__KeyboardLayout.Height;
                            this.__KeyboardLayout.FromTheBottom = true;
                        }
                        else {
                            this.__KeyboardLayout.Top = this.__TextboxLayout.Top;
                            this.__KeyboardLayout.FromTheBottom = false;
                        }
                    }
                    // Set additional keyboard parameter
                    this.__KeyboardLayout.KeyboardPadding = {
                        "top": 10,
                        "topUnit": "px",
                        "right": 10,
                        "rightUnit": "px",
                        "bottom": 10,
                        "bottomUnit": "px",
                        "left": 10,
                        "leftUnit": "px"
                    };
                    this.__KeyboardLayout.KeyPadding = {
                        "top": 4,
                        "topUnit": "px",
                        "right": 4,
                        "rightUnit": "px",
                        "bottom": 4,
                        "bottomUnit": "px",
                        "left": 4,
                        "leftUnit": "px"
                    };
                    this.__KeyboardLayout.AdditionalKeyBackdropPadding = {
                        "top": 10,
                        "topUnit": "px",
                        "right": 10,
                        "rightUnit": "px",
                        "bottom": 10,
                        "bottomUnit": "px",
                        "left": 10,
                        "leftUnit": "px"
                    };
                }
                ;
                /**
                 * @description Calculate the position of the tooltip
                 * @returns {void}
                 */
                __CalculateTooltipPosition() {
                    // Get the current textbox layout
                    this.__TextboxLayout.Top = this.getRenderedTop();
                    // Decide where to open the tooltip
                    if (this.__TextboxLayout.Top > 100) {
                        this.__TooltipLayout.Position = 'top';
                    }
                    else {
                        this.__TooltipLayout.Position = 'bottom';
                    }
                }
                ;
                /**
                 * @description Set the highlighting of the textarea
                 * @param {boolean} Result Result of the check function to decide which highlighting color should be set
                 * @param {number} Timeout Timeout before the highlighting will be removed
                 * @returns {void}
                 */
                __SetCheckHighlighting(Result, Timeout) {
                    // Check if a valid color is available
                    if (this.__CheckColors === undefined || this.__CheckColors === null)
                        return;
                    // Depending on the result, set the good or bad highlighting color by adding the highlight css class
                    if (Result) {
                        if (this.__PopUpKeyboardSettings.Textbox) {
                            TcHmi.StyleProvider.processBackgroundColor($("#AdvancedTextbox_Text input"), this.__CheckColors.GoodHighlight);
                        }
                        else {
                            TcHmi.StyleProvider.processBackgroundColor(this.__elementTextarea, this.__CheckColors.GoodHighlight);
                        }
                    }
                    else {
                        if (this.__PopUpKeyboardSettings.Textbox) {
                            TcHmi.StyleProvider.processBackgroundColor($("#AdvancedTextbox_Text input"), this.__CheckColors.BadHighlight);
                        }
                        else {
                            TcHmi.StyleProvider.processBackgroundColor(this.__elementTextarea, this.__CheckColors.BadHighlight);
                        }
                    }
                    // Start a timeout to set the highlighting back to theme
                    if (Timeout !== undefined) {
                        var _this = this;
                        this.__HighlightTimeoutId = setTimeout(function () {
                            _this.__ClearCheckHighlighting();
                        }, Timeout);
                    }
                }
                ;
                /**
                 * @description Set the highlighting of the textarea back to theme
                 * @returns {void}
                 */
                __ClearCheckHighlighting() {
                    // Remove the highlight css classes
                    TcHmi.StyleProvider.processBackgroundColor(this.__elementTextarea, { "color": "rgba(255, 255, 255, 1)" });
                }
                ;
                /**
                 * CUSTOM AREA
                 * Getter and setter of the control attributes
                 */
                /**
                 * @description Setter function for 'data-tchmi-checkcolors' attribute.
                 * @param {object} NewColors The new color settings
                 * @returns {void}
                 */
                setCheckColors(NewColors) {
                    var convertedSettings = TcHmi.ValueConverter.toObject(NewColors);
                    if (convertedSettings === null) {
                        // If we have no value to set we have to fall back to the defaultValueInternal from JSON
                        convertedSettings = this.getAttributeDefaultValueInternal('CheckColors');
                    }
                    if (tchmi_equal(convertedSettings, this.__CheckColors)) {
                        // Skip processing when the settings has not changed
                        return;
                    }
                    // Remember the new settings
                    this.__CheckColors = convertedSettings;
                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.getId() + ".onFunctionResultChanged", ["getCheckColors"]);
                }
                ;
                /**
                 * @description Getter function for 'data-tchmi-checkcolors' attribute.
                 * @returns {object} Current color settings
                 */
                getCheckColors() {
                    // Return the current color settings
                    return this.__CheckColors;
                }
                ;
                /**
                 * @description Setter function for 'data-tchmi-inputsettingsallow' attribute.
                 * @param {object} NewSettings The new input settings
                 * @returns {void}
                 */
                setInputSettingsAllow(NewSettings) {
                    var convertedSettings = TcHmi.ValueConverter.toObject(NewSettings);
                    if (convertedSettings === null) {
                        // If we have no value to set we have to fall back to the defaultValueInternal from JSON
                        convertedSettings = this.getAttributeDefaultValueInternal('InputSettingsAllow');
                    }
                    if (tchmi_equal(convertedSettings, this.__InputSettingsAllow)) {
                        // Skip processing when the settings has not changed
                        return;
                    }
                    // Remember the new settings
                    this.__InputSettingsAllow = convertedSettings;
                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.getId() + ".onFunctionResultChanged", ["getInputSettingsAllow"]);
                }
                ;
                /**
                 * @description Getter function for 'data-tchmi-inputsettingsallow' attribute.
                 * @returns {object} Current input settings
                 */
                getInputSettingsAllow() {
                    // Return the current input settings
                    return this.__InputSettingsAllow;
                }
                ;
                /**
                 * @description Setter function for 'data-tchmi-inputsettingscheck' attribute.
                 * @param {object} NewSettings The new input settings
                 * @returns {void}
                 */
                setInputSettingsCheck(NewSettings) {
                    var convertedSettings = TcHmi.ValueConverter.toObject(NewSettings);
                    if (convertedSettings === null) {
                        // If we have no value to set we have to fall back to the defaultValueInternal from JSON
                        convertedSettings = this.getAttributeDefaultValueInternal('InputSettingsCheck');
                    }
                    if (tchmi_equal(convertedSettings, this.__InputSettingsCheck)) {
                        // Skip processing when the settings has not changed
                        return;
                    }
                    // Remember the new settings
                    this.__InputSettingsCheck = convertedSettings;
                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.getId() + ".onFunctionResultChanged", ["getInputSettingsCheck"]);
                }
                ;
                /**
                 * @description Getter function for 'data-tchmi-inputsettingscheck' attribute.
                 * @returns {object} Current input settings
                 */
                getInputSettingsCheck() {
                    // Return the current input settings
                    return this.__InputSettingsCheck;
                }
                ;
                /**
                 * @description Setter function for 'data-tchmi-popupkeyboardsettings' attribute.
                 * @param {object} NewSettings The new popup keyboadr settings
                 * @returns {void}
                 */
                setPopUpKeyboardSettings(NewSettings) {
                    var convertedSettings = TcHmi.ValueConverter.toObject(NewSettings);
                    if (convertedSettings === null) {
                        // If we have no value to set we have to fall back to the defaultValueInternal from JSON
                        convertedSettings = this.getAttributeDefaultValueInternal('PopUpKeyboardSettings');
                    }
                    if (tchmi_equal(convertedSettings, this.__PopUpKeyboardSettings)) {
                        // Skip processing when the settings has not changed
                        return;
                    }
                    // Remember the new settings
                    this.__PopUpKeyboardSettings = convertedSettings;
                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.getId() + ".onFunctionResultChanged", ["getPopUpKeyboardSettings"]);
                }
                ;
                /**
                 * @description Getter function for 'data-tchmi-popupkeyboardsettings' attribute.
                 * @returns {object} Current popup keyboard settings
                 */
                getPopUpKeyboardSettings() {
                    // Return the current popup keyboard settings
                    return this.__PopUpKeyboardSettings;
                }
                ;
            }
            Training.AdvancedTextbox = AdvancedTextbox;
        })(Training = Controls.Training || (Controls.Training = {}));
        (function (Training) {
            ;
        })(Training = Controls.Training || (Controls.Training = {}));
        Controls.registerEx('AdvancedTextbox', 'TcHmi.Controls.Training', Training.AdvancedTextbox);
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
    // Debugging function for logging
    function logToConsole(logThis) {
        if (false) {
            console.log(logThis);
        }
    }
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=TcHmi_AdvancedTextboxControl.js.map