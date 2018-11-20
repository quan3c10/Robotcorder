var keywords = {
    "A":  [
              {
                  "keyw":  "Add Cookie",
                  "argm":  "name, value, path=None, domain=None, secure=None, expiry=None ",
                  "desc":  "Adds a cookie to your current session"
              },
              {
                  "keyw":  "Add Location Strategy",
                  "argm":  "strategy_name, strategy_keyword, persist=False ",
                  "desc":  "Adds a custom location strategy"
              },
              {
                  "keyw":  "Alert Should Be Present",
                  "argm":  "text=, action=ACCEPT, timeout=None ",
                  "desc":  "Verifies that an alert is present and, by default, accepts it"
              },
              {
                  "keyw":  "Alert Should Not Be Present",
                  "argm":  "action=ACCEPT, timeout=0 ",
                  "desc":  "Verifies that no alert is present"
              },
              {
                  "keyw":  "Assign Id To Element",
                  "argm":  "locator, id ",
                  "desc":  "Assigns temporary id to element specified by locator"
              }
          ],
    "C":  [
              {
                  "keyw":  "Capture Page Screenshot",
                  "argm":  "filename=selenium-screenshot-{index}.png ",
                  "desc":  "Takes screenshot of the current page and embeds it into log file"
              },
              {
                  "keyw":  "Checkbox Should Be Selected",
                  "argm":  "locator ",
                  "desc":  "Verifies checkbox locator is selected/checked"
              },
              {
                  "keyw":  "Checkbox Should Not Be Selected",
                  "argm":  "locator ",
                  "desc":  "Verifies checkbox locator is not selected/checked"
              },
              {
                  "keyw":  "Choose Cancel On Next Confirmation",
                  "argm":  "",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Choose File",
                  "argm":  "locator, file_path ",
                  "desc":  "Inputs the file_path into file input field locator"
              },
              {
                  "keyw":  "Choose Ok On Next Confirmation",
                  "argm":  "",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Clear Element Text",
                  "argm":  "locator ",
                  "desc":  "Clears the value of text entry element identified by locator"
              },
              {
                  "keyw":  "Click Button",
                  "argm":  "locator ",
                  "desc":  "Clicks button identified by locator"
              },
              {
                  "keyw":  "Click Element",
                  "argm":  "locator ",
                  "desc":  "Click element identified by locator"
              },
              {
                  "keyw":  "Click Element At Coordinates",
                  "argm":  "locator, xoffset, yoffset ",
                  "desc":  "Click element locator at xoffset/yoffset"
              },
              {
                  "keyw":  "Click Image",
                  "argm":  "locator ",
                  "desc":  "Clicks an image identified by locator"
              },
              {
                  "keyw":  "Click Link",
                  "argm":  "locator ",
                  "desc":  "Clicks a link identified by locator"
              },
              {
                  "keyw":  "Close All Browsers",
                  "argm":  "",
                  "desc":  "Closes all open browsers and resets the browser cache"
              },
              {
                  "keyw":  "Close Browser",
                  "argm":  "",
                  "desc":  "Closes the current browser"
              },
              {
                  "keyw":  "Close Window",
                  "argm":  "",
                  "desc":  "Closes currently opened pop-up window"
              },
              {
                  "keyw":  "Confirm Action",
                  "argm":  "",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Create Webdriver",
                  "argm":  "driver_name, alias=None, kwargs={}, **init_kwargs ",
                  "desc":  "Creates an instance of Selenium WebDriver"
              },
              {
                  "keyw":  "Current Frame Contains",
                  "argm":  "text, loglevel=INFO ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Current Frame Should Contain",
                  "argm":  "text, loglevel=INFO ",
                  "desc":  "Verifies that current frame contains text"
              },
              {
                  "keyw":  "Current Frame Should Not Contain",
                  "argm":  "text, loglevel=INFO ",
                  "desc":  "Verifies that current frame does not contains text"
              }
          ],
    "D":  [
              {
                  "keyw":  "Delete All Cookies",
                  "argm":  "",
                  "desc":  "Deletes all cookies"
              },
              {
                  "keyw":  "Delete Cookie",
                  "argm":  "name ",
                  "desc":  "Deletes cookie matching name"
              },
              {
                  "keyw":  "Dismiss Alert",
                  "argm":  "accept=True ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Double Click Element",
                  "argm":  "locator ",
                  "desc":  "Double click element identified by locator"
              },
              {
                  "keyw":  "Drag And Drop",
                  "argm":  "locator, target ",
                  "desc":  "Drags element identified by locator into target element"
              },
              {
                  "keyw":  "Drag And Drop By Offset",
                  "argm":  "locator, xoffset, yoffset ",
                  "desc":  "Drags element identified with locator by xoffset/yoffset"
              }
          ],
    "E":  [
              {
                  "keyw":  "Element Should Be Disabled",
                  "argm":  "locator ",
                  "desc":  "Verifies that element identified with locator is disabled"
              },
              {
                  "keyw":  "Element Should Be Enabled",
                  "argm":  "locator ",
                  "desc":  "Verifies that element identified with locator is enabled"
              },
              {
                  "keyw":  "Element Should Be Focused",
                  "argm":  "locator ",
                  "desc":  "Verifies that element identified with locator is focused"
              },
              {
                  "keyw":  "Element Should Be Visible",
                  "argm":  "locator, message=None ",
                  "desc":  "Verifies that the element identified by locator is visible"
              },
              {
                  "keyw":  "Element Should Contain",
                  "argm":  "locator, expected, message=None, ignore_case=False ",
                  "desc":  "Verifies that element locator contains text expected"
              },
              {
                  "keyw":  "Element Should Not Be Visible",
                  "argm":  "locator, message=None ",
                  "desc":  "Verifies that the element identified by locator is NOT visible"
              },
              {
                  "keyw":  "Element Should Not Contain",
                  "argm":  "locator, expected, message=None, ignore_case=False ",
                  "desc":  "Verifies that element locator does not contains text expected"
              },
              {
                  "keyw":  "Element Text Should Be",
                  "argm":  "locator, expected, message=None, ignore_case=False ",
                  "desc":  "Verifies that element locator contains exact text expected"
              },
              {
                  "keyw":  "Element Text Should Not Be",
                  "argm":  "locator, not_expected, message=None, ignore_case=False ",
                  "desc":  "Verifies that element locator does not contain exact text not_expected"
              },
              {
                  "keyw":  "Execute Async Javascript",
                  "argm":  "*code ",
                  "desc":  "Executes asynchronous JavaScript code"
              },
              {
                  "keyw":  "Execute Javascript",
                  "argm":  "*code ",
                  "desc":  "Executes the given JavaScript code"
              }
          ],
    "F":  [
              {
                  "keyw":  "Focus",
                  "argm":  "locator ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Frame Should Contain",
                  "argm":  "locator, text, loglevel=INFO ",
                  "desc":  "Verifies that frame identified by locator contains text"
              }
          ],
    "G":  [
              {
                  "keyw":  "Get Alert Message",
                  "argm":  "dismiss=True ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Get All Links",
                  "argm":  "",
                  "desc":  "Returns a list containing ids of all links found in current page"
              },
              {
                  "keyw":  "Get Cookie",
                  "argm":  "name ",
                  "desc":  "Returns information of cookie with name as an object"
              },
              {
                  "keyw":  "Get Cookie Value",
                  "argm":  "name ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Get Cookies",
                  "argm":  "",
                  "desc":  "Returns all cookies of the current page"
              },
              {
                  "keyw":  "Get Element Attribute",
                  "argm":  "locator, attribute=None ",
                  "desc":  "Returns value of attribute from element locator"
              },
              {
                  "keyw":  "Get Element Count",
                  "argm":  "locator ",
                  "desc":  "Returns number of elements matching locator"
              },
              {
                  "keyw":  "Get Element Size",
                  "argm":  "locator ",
                  "desc":  "Returns width and height of element identified by locator"
              },
              {
                  "keyw":  "Get Horizontal Position",
                  "argm":  "locator ",
                  "desc":  "Returns horizontal position of element identified by locator"
              },
              {
                  "keyw":  "Get List Items",
                  "argm":  "locator, values=False ",
                  "desc":  "Returns all labels or values of selection list locator"
              },
              {
                  "keyw":  "Get Location",
                  "argm":  "",
                  "desc":  "Returns the current browser URL"
              },
              {
                  "keyw":  "Get Locations",
                  "argm":  "",
                  "desc":  "Returns and logs URLs of all known browser windows"
              },
              {
                  "keyw":  "Get Matching Xpath Count",
                  "argm":  "xpath, return_str=True ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Get Selected List Label",
                  "argm":  "locator ",
                  "desc":  "Returns label of selected option from selection list locator"
              },
              {
                  "keyw":  "Get Selected List Labels",
                  "argm":  "locator ",
                  "desc":  "Returns labels of selected options from selection list locator"
              },
              {
                  "keyw":  "Get Selected List Value",
                  "argm":  "locator ",
                  "desc":  "Returns value of selected option from selection list locator"
              },
              {
                  "keyw":  "Get Selected List Values",
                  "argm":  "locator ",
                  "desc":  "Returns values of selected options from selection list locator"
              },
              {
                  "keyw":  "Get Selenium Implicit Wait",
                  "argm":  "",
                  "desc":  "Gets the implicit wait value used by Selenium"
              },
              {
                  "keyw":  "Get Selenium Speed",
                  "argm":  "",
                  "desc":  "Gets the delay that is waited after each Selenium command"
              },
              {
                  "keyw":  "Get Selenium Timeout",
                  "argm":  "",
                  "desc":  "Gets the timeout that is used by various keywords"
              },
              {
                  "keyw":  "Get Source",
                  "argm":  "",
                  "desc":  "Returns the entire HTML source of the current page or frame"
              },
              {
                  "keyw":  "Get Table Cell",
                  "argm":  "locator, row, column, loglevel=INFO ",
                  "desc":  "Returns contents of table cell"
              },
              {
                  "keyw":  "Get Text",
                  "argm":  "locator ",
                  "desc":  "Returns the text value of element identified by locator"
              },
              {
                  "keyw":  "Get Title",
                  "argm":  "",
                  "desc":  "Returns the title of current page"
              },
              {
                  "keyw":  "Get Value",
                  "argm":  "locator ",
                  "desc":  "Returns the value attribute of element identified by locator"
              },
              {
                  "keyw":  "Get Vertical Position",
                  "argm":  "locator ",
                  "desc":  "Returns vertical position of element identified by locator"
              },
              {
                  "keyw":  "Get WebElement",
                  "argm":  "locator ",
                  "desc":  "Returns the first WebElement matching the given locator"
              },
              {
                  "keyw":  "Get WebElements",
                  "argm":  "locator ",
                  "desc":  "Returns list of WebElement objects matching the locator"
              },
              {
                  "keyw":  "Get Window Handles",
                  "argm":  "",
                  "desc":  "Return all current window handles as a list"
              },
              {
                  "keyw":  "Get Window Identifiers",
                  "argm":  "",
                  "desc":  "Returns and logs id attributes of all known browser windows"
              },
              {
                  "keyw":  "Get Window Names",
                  "argm":  "",
                  "desc":  "Returns and logs names of all known browser windows"
              },
              {
                  "keyw":  "Get Window Position",
                  "argm":  "",
                  "desc":  "Returns current window position"
              },
              {
                  "keyw":  "Get Window Size",
                  "argm":  "",
                  "desc":  "Returns current window width and height as integers"
              },
              {
                  "keyw":  "Get Window Titles",
                  "argm":  "",
                  "desc":  "Returns and logs titles of all known browser windows"
              },
              {
                  "keyw":  "Go Back",
                  "argm":  "",
                  "desc":  "Simulates the user clicking the back button on their browser"
              },
              {
                  "keyw":  "Go To",
                  "argm":  "url ",
                  "desc":  "Navigates the active browser instance to the provided url"
              }
          ],
    "H":  [
              {
                  "keyw":  "Handle Alert",
                  "argm":  "action=ACCEPT, timeout=None ",
                  "desc":  "Handles the current alert and returns its message"
              }
          ],
    "I":  [
              {
                  "keyw":  "Input Password",
                  "argm":  "locator, password ",
                  "desc":  "Types the given password into text field identified by locator"
              },
              {
                  "keyw":  "Input Text",
                  "argm":  "locator, text ",
                  "desc":  "Types the given text into text field identified by locator"
              },
              {
                  "keyw":  "Input Text Into Alert",
                  "argm":  "text, action=ACCEPT, timeout=None ",
                  "desc":  "Types the given text into an input field in an alert"
              },
              {
                  "keyw":  "Input Text Into Prompt",
                  "argm":  "text ",
                  "desc":  "Deprecated"
              }
          ],
    "L":  [
              {
                  "keyw":  "List Selection Should Be",
                  "argm":  "locator, *expected ",
                  "desc":  "Verifies selection list locator has expected options selected"
              },
              {
                  "keyw":  "List Should Have No Selections",
                  "argm":  "locator ",
                  "desc":  "Verifies selection list locator has no options selected"
              },
              {
                  "keyw":  "List Windows",
                  "argm":  "",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Location Should Be",
                  "argm":  "url ",
                  "desc":  "Verifies that current URL is exactly url"
              },
              {
                  "keyw":  "Location Should Contain",
                  "argm":  "expected ",
                  "desc":  "Verifies that current URL contains expected"
              },
              {
                  "keyw":  "Locator Should Match X Times",
                  "argm":  "locator, x, message=None, loglevel=INFO ",
                  "desc":  "Deprecated, use Page Should Contain Element with limit argument instead"
              },
              {
                  "keyw":  "Log Location",
                  "argm":  "",
                  "desc":  "Logs and returns the current URL"
              },
              {
                  "keyw":  "Log Source",
                  "argm":  "loglevel=INFO ",
                  "desc":  "Logs and returns the HTML source of the current page or frame"
              },
              {
                  "keyw":  "Log Title",
                  "argm":  "",
                  "desc":  "Logs and returns the title of current page"
              }
          ],
    "M":  [
              {
                  "keyw":  "Maximize Browser Window",
                  "argm":  "",
                  "desc":  "Maximizes current browser window"
              },
              {
                  "keyw":  "Mouse Down",
                  "argm":  "locator ",
                  "desc":  "Simulates pressing the left mouse button on the element locator"
              },
              {
                  "keyw":  "Mouse Down On Image",
                  "argm":  "locator ",
                  "desc":  "Simulates a mouse down event on an image identified by locator"
              },
              {
                  "keyw":  "Mouse Down On Link",
                  "argm":  "locator ",
                  "desc":  "Simulates a mouse down event on a link identified by locator"
              },
              {
                  "keyw":  "Mouse Out",
                  "argm":  "locator ",
                  "desc":  "Simulates moving mouse away from the element locator"
              },
              {
                  "keyw":  "Mouse Over",
                  "argm":  "locator ",
                  "desc":  "Simulates hovering mouse over the element locator"
              },
              {
                  "keyw":  "Mouse Up",
                  "argm":  "locator ",
                  "desc":  "Simulates releasing the left mouse button on the element locator"
              }
          ],
    "O":  [
              {
                  "keyw":  "Open Browser",
                  "argm":  "url, browser=firefox, alias=None, remote_url=False, desired_capabilities=None, ff_profile_dir=None ",
                  "desc":  "Opens a new browser instance to the given url"
              },
              {
                  "keyw":  "Open Context Menu",
                  "argm":  "locator ",
                  "desc":  "Opens context menu on element identified by locator"
              }
          ],
    "P":  [
              {
                  "keyw":  "Page Should Contain",
                  "argm":  "text, loglevel=INFO ",
                  "desc":  "Verifies that current page contains text"
              },
              {
                  "keyw":  "Page Should Contain Button",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies button locator is found from current page"
              },
              {
                  "keyw":  "Page Should Contain Checkbox",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies checkbox locator is found from current page"
              },
              {
                  "keyw":  "Page Should Contain Element",
                  "argm":  "locator, message=None, loglevel=INFO, limit=None ",
                  "desc":  "Verifies that element locator is found on the current page"
              },
              {
                  "keyw":  "Page Should Contain Image",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies image identified by locator is found from current page"
              },
              {
                  "keyw":  "Page Should Contain Link",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies link identified by locator is found from current page"
              },
              {
                  "keyw":  "Page Should Contain List",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies selection list locator is found from current page"
              },
              {
                  "keyw":  "Page Should Contain Radio Button",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies radio button locator is found from current page"
              },
              {
                  "keyw":  "Page Should Contain Textfield",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies text field locator is found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain",
                  "argm":  "text, loglevel=INFO ",
                  "desc":  "Verifies the current page does not contain text"
              },
              {
                  "keyw":  "Page Should Not Contain Button",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies button locator is not found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain Checkbox",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies checkbox locator is not found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain Element",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies that element locator is found on the current page"
              },
              {
                  "keyw":  "Page Should Not Contain Image",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies image identified by locator is found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain Link",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies link identified by locator is not found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain List",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies selection list locator is not found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain Radio Button",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies radio button locator is not found from current page"
              },
              {
                  "keyw":  "Page Should Not Contain Textfield",
                  "argm":  "locator, message=None, loglevel=INFO ",
                  "desc":  "Verifies text field locator is not found from current page"
              },
              {
                  "keyw":  "Press Key",
                  "argm":  "locator, key ",
                  "desc":  "Simulates user pressing key on element identified by locator"
              }
          ],
    "R":  [
              {
                  "keyw":  "Radio Button Should Be Set To",
                  "argm":  "group_name, value ",
                  "desc":  "Verifies radio button group group_name is set to value"
              },
              {
                  "keyw":  "Radio Button Should Not Be Selected",
                  "argm":  "group_name ",
                  "desc":  "Verifies radio button group group_name has no selection"
              },
              {
                  "keyw":  "Register Keyword To Run On Failure",
                  "argm":  "keyword ",
                  "desc":  "Sets the keyword to execute when a SeleniumLibrary keyword fails"
              },
              {
                  "keyw":  "Reload Page",
                  "argm":  "",
                  "desc":  "Simulates user reloading page"
              },
              {
                  "keyw":  "Remove Location Strategy",
                  "argm":  "strategy_name ",
                  "desc":  "Removes a previously added custom location strategy"
              }
          ],
    "S":  [
              {
                  "keyw":  "Select All From List",
                  "argm":  "locator ",
                  "desc":  "Selects all options from multi-selection list locator"
              },
              {
                  "keyw":  "Select Checkbox",
                  "argm":  "locator ",
                  "desc":  "Selects checkbox identified by locator"
              },
              {
                  "keyw":  "Select Frame",
                  "argm":  "locator ",
                  "desc":  "Sets frame identified by locator as the current frame"
              },
              {
                  "keyw":  "Select From List",
                  "argm":  "locator, *options ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Select From List By Index",
                  "argm":  "locator, *indexes ",
                  "desc":  "Selects options from selection list locator by indexes"
              },
              {
                  "keyw":  "Select From List By Label",
                  "argm":  "locator, *labels ",
                  "desc":  "Selects options from selection list locator by labels"
              },
              {
                  "keyw":  "Select From List By Value",
                  "argm":  "locator, *values ",
                  "desc":  "Selects options from selection list locator by values"
              },
              {
                  "keyw":  "Select Radio Button",
                  "argm":  "group_name, value ",
                  "desc":  "Sets radio button group group_name to value"
              },
              {
                  "keyw":  "Select Window",
                  "argm":  "locator=MAIN ",
                  "desc":  "Selects browser window matching locator"
              },
              {
                  "keyw":  "Set Browser Implicit Wait",
                  "argm":  "value ",
                  "desc":  "Sets the implicit wait value used by Selenium"
              },
              {
                  "keyw":  "Set Focus To Element",
                  "argm":  "locator ",
                  "desc":  "Sets focus to element identified by locator"
              },
              {
                  "keyw":  "Set Screenshot Directory",
                  "argm":  "path, persist=DEPRECATED ",
                  "desc":  "Sets the directory for captured screenshots"
              },
              {
                  "keyw":  "Set Selenium Implicit Wait",
                  "argm":  "value ",
                  "desc":  "Sets the implicit wait value used by Selenium"
              },
              {
                  "keyw":  "Set Selenium Speed",
                  "argm":  "value ",
                  "desc":  "Sets the delay that is waited after each Selenium command"
              },
              {
                  "keyw":  "Set Selenium Timeout",
                  "argm":  "value ",
                  "desc":  "Sets the timeout that is used by various keywords"
              },
              {
                  "keyw":  "Set Window Position",
                  "argm":  "x, y ",
                  "desc":  "Sets window position using x and y coordinates"
              },
              {
                  "keyw":  "Set Window Size",
                  "argm":  "width, height ",
                  "desc":  "Sets current windows size to given width and height"
              },
              {
                  "keyw":  "Simulate",
                  "argm":  "locator, event ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Simulate Event",
                  "argm":  "locator, event ",
                  "desc":  "Simulates event on element identified by locator"
              },
              {
                  "keyw":  "Submit Form",
                  "argm":  "locator=None ",
                  "desc":  "Submits a form identified by locator"
              },
              {
                  "keyw":  "Switch Browser",
                  "argm":  "index_or_alias ",
                  "desc":  "Switches between active browsers using index_or_alias"
              }
          ],
    "T":  [
              {
                  "keyw":  "Table Cell Should Contain",
                  "argm":  "locator, row, column, expected, loglevel=INFO ",
                  "desc":  "Verifies table cell contains text expected"
              },
              {
                  "keyw":  "Table Column Should Contain",
                  "argm":  "locator, column, expected, loglevel=INFO ",
                  "desc":  "Verifies table column contains text expected"
              },
              {
                  "keyw":  "Table Footer Should Contain",
                  "argm":  "locator, expected, loglevel=INFO ",
                  "desc":  "Verifies table footer contains text expected"
              },
              {
                  "keyw":  "Table Header Should Contain",
                  "argm":  "locator, expected, loglevel=INFO ",
                  "desc":  "Verifies table header contains text expected"
              },
              {
                  "keyw":  "Table Row Should Contain",
                  "argm":  "locator, row, expected, loglevel=INFO ",
                  "desc":  "Verifies that table row contains text expected"
              },
              {
                  "keyw":  "Table Should Contain",
                  "argm":  "locator, expected, loglevel=INFO ",
                  "desc":  "Verifies table contains text expected"
              },
              {
                  "keyw":  "Textarea Should Contain",
                  "argm":  "locator, expected, message=None ",
                  "desc":  "Verifies text area locator contains text expected"
              },
              {
                  "keyw":  "Textarea Value Should Be",
                  "argm":  "locator, expected, message=None ",
                  "desc":  "Verifies text area locator has exactly text expected"
              },
              {
                  "keyw":  "Textfield Should Contain",
                  "argm":  "locator, expected, message=None ",
                  "desc":  "Verifies text field locator contains text expected"
              },
              {
                  "keyw":  "Textfield Value Should Be",
                  "argm":  "locator, expected, message=None ",
                  "desc":  "Verifies text field locator has exactly text expected"
              },
              {
                  "keyw":  "Title Should Be",
                  "argm":  "title, message=None ",
                  "desc":  "Verifies that current page title equals title"
              }
          ],
    "U":  [
              {
                  "keyw":  "Unselect All From List",
                  "argm":  "locator ",
                  "desc":  "Unselects all options from multi-selection list locator"
              },
              {
                  "keyw":  "Unselect Checkbox",
                  "argm":  "locator ",
                  "desc":  "Removes selection of checkbox identified by locator"
              },
              {
                  "keyw":  "Unselect Frame",
                  "argm":  "",
                  "desc":  "Sets the main frame as the current frame"
              },
              {
                  "keyw":  "Unselect From List",
                  "argm":  "locator, *items ",
                  "desc":  "Deprecated"
              },
              {
                  "keyw":  "Unselect From List By Index",
                  "argm":  "locator, *indexes ",
                  "desc":  "Unselects options from selection list locator by indexes"
              },
              {
                  "keyw":  "Unselect From List By Label",
                  "argm":  "locator, *labels ",
                  "desc":  "Unselects options from selection list locator by labels"
              },
              {
                  "keyw":  "Unselect From List By Value",
                  "argm":  "locator, *values ",
                  "desc":  "Unselects options from selection list locator by values"
              }
          ],
    "W":  [
              {
                  "keyw":  "Wait For Condition",
                  "argm":  "condition, timeout=None, error=None ",
                  "desc":  "Waits until condition is true or timeout expires"
              },
              {
                  "keyw":  "Wait Until Element Contains",
                  "argm":  "locator, text, timeout=None, error=None ",
                  "desc":  "Waits until element locator contains text"
              },
              {
                  "keyw":  "Wait Until Element Does Not Contain",
                  "argm":  "locator, text, timeout=None, error=None ",
                  "desc":  "Waits until element locator does not contain text"
              },
              {
                  "keyw":  "Wait Until Element Is Enabled",
                  "argm":  "locator, timeout=None, error=None ",
                  "desc":  "Waits until element locator is enabled"
              },
              {
                  "keyw":  "Wait Until Element Is Not Visible",
                  "argm":  "locator, timeout=None, error=None ",
                  "desc":  "Waits until element locator is not visible"
              },
              {
                  "keyw":  "Wait Until Element Is Visible",
                  "argm":  "locator, timeout=None, error=None ",
                  "desc":  "Waits until element locator is visible"
              },
              {
                  "keyw":  "Wait Until Page Contains",
                  "argm":  "text, timeout=None, error=None ",
                  "desc":  "Waits until text appears on current page"
              },
              {
                  "keyw":  "Wait Until Page Contains Element",
                  "argm":  "locator, timeout=None, error=None ",
                  "desc":  "Waits until element locator appears on current page"
              },
              {
                  "keyw":  "Wait Until Page Does Not Contain",
                  "argm":  "text, timeout=None, error=None ",
                  "desc":  "Waits until text disappears from current page"
              },
              {
                  "keyw":  "Wait Until Page Does Not Contain Element",
                  "argm":  "locator, timeout=None, error=None ",
                  "desc":  "Waits until element locator disappears from current page"
              }
          ]
}

