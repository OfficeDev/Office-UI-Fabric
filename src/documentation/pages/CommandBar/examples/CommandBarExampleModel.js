var CommandBarExampleModel = {
  "props": {
    "transientComponent": {
      "component": "SearchBox",
      "props":  {
        "label": "Search",
        "icon": "search",
        "defaultValue": "",
        "modifier": "commandBar",
        "clearButton": {
          "component": "CommandButton",
          "props": {
            "icon": "x",
            "modifier": "noLabel",
            "tag": "button",
            "customClasses": "ms-SearchBox-close"
          }
        }
      }
    },
    "commands": [
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "New",
          "icon": "circleFill",
          "tag": "button",
          "dropdownIcon": "chevronDown",
          "iconColor": "themePrimary",
          "dropdown": {
            "component": "ContextualMenu",
            "props":  {
              "state": "is-opened",
              "modifier": "hasIcons",
              "items": [
                {
                  "title": "Folder",
                  "state": "",
                  "icon": "folder"
                },
                {
                  "modifier": "divider",
                  "title": ""
                },
                {
                  "title": "Plain Text Document",
                  "icon": "document"
                },
                {
                  "title": "A Dog",
                  "icon": "dogAlt"
                },
                {
                  "title": "The Sun",
                  "state": "",
                  "icon": "sun"
                },
                {
                  "title": "Money",
                  "icon": "money"
                }
              ]
            }
          }
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      }
    ],
    "sideCommands": [
      {
        "component": "CommandButton",
        "props":  {
          "icon": "circleFill",
          "tag": "button",
          "modifier": "noLabel",
          "iconColor": "themePrimary"
        }
      }
    ],
    "overflow": {
      "component": "CommandButton",
      "props":  {
        "icon": "ellipsis",
        "customClasses": "ms-CommandBar-overflowButton",
        "tag": "button",
        "modifier": "noLabel",
        "dropdown": {
          "component": "ContextualMenu",
          "props":  {
            "state": "is-opened",
            "modifier": "hasIcons",
            "items": [
              {
                "title": "Folder",
                "state": "",
                "icon": "folder"
              },
              {
                "modifier": "divider",
                "title": ""
              },
              {
                "title": "Plain Text Document",
                "icon": "document"
              },
              {
                "title": "A Dog",
                "icon": "dogAlt"
              },
              {
                "title": "The Sun",
                "state": "",
                "icon": "sun"
              },
              {
                "title": "Money",
                "icon": "money"
              }
            ]
          }
        }
      }
    }
  },
  "propsDropdown": {
    "transientComponent": {
      "component": "CommandButton",
      "props":  {
        "icon": "menu",
        "modifier": "actionButton",
        "tag": "button",
        "iconColor": "themePrimary"
      }
    },
    "overflow": {
      "component": "CommandButton",
      "props":  {
        "icon": "ellipsis",
        "customClasses": "ms-CommandBar-overflowButton",
        "tag": "button",
        "modifier": "noLabel",
        "dropdown": {
          "component": "ContextualMenu",
          "props":  {
            "state": "is-opened",
            "modifier": "hasIcons",
            "items": [
              {
                "title": "Folder",
                "state": "",
                "icon": "folder"
              },
              {
                "modifier": "divider",
                "title": ""
              },
              {
                "title": "Plain Text Document",
                "icon": "document"
              },
              {
                "title": "A Dog",
                "icon": "dogAlt"
              },
              {
                "title": "The Sun",
                "state": "",
                "icon": "sun"
              },
              {
                "title": "Money",
                "icon": "money"
              }
            ]
          }
        }
      }
    },
    "commands": [
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "search",
          "tag": "button",
          "iconColor": "themePrimary",
          "modifier": "noLabel"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Reply",
          "icon": "circleFill",
          "splitIcon": "chevronDown",
          "iconColor": "themePrimary",
          "tag": "button",
          "dropdown": {
            "component": "ContextualMenu",
            "props":  {
              "state": "is-opened",
              "items": [
                {
                  "title": "Reply",
                  "state": ""
                },
                {
                  "title": "Reply all",
                  "state": ""
                },
                {
                  "title": "Forward",
                  "state": "is-selected"
                },
                {
                  "title": "Flag",
                  "state": ""
                },
                {
                  "title": "Delete",
                  "state": "is-disabled"
                }
              ]
            }
          }  
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Command",
          "icon": "circleFill",
          "tag": "button",
          "iconColor": "themePrimary"
        }
      }
    ],
    "sideCommands": [
      {
        "component": "CommandButton",
        "props":  {
          "icon": "listBullets",
          "tag": "button",
          "modifier": "noLabel",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "icon": "sortLines",
          "tag": "button",
          "modifier": "noLabel",
          "iconColor": "themePrimary"
        }
      }
    ]
  },
  "propsNavBar": {
    "modifier": "navBar",
    "transientComponent": {
      "component": "SearchBox",
      "props":  {
        "label": "Search photos",
        "icon": "search",
        "defaultValue": "",
        "modifier": "commandBar",
        "clearButton": {
          "component": "CommandButton",
          "props": {
            "icon": "x",
            "modifier": "noLabel",
            "tag": "button",
            "customClasses": "ms-SearchBox-close"
          }
        }
      }
    },
    "overflow": {
      "component": "CommandButton",
      "props":  {
        "icon": "ellipsis",
        "customClasses": "ms-CommandBar-overflowButton",
        "tag": "button",
        "modifier": "noLabel",
        "dropdown": {
          "component": "ContextualMenu",
          "props":  {
            "state": "is-opened",
            "modifier": "hasIcons",
            "items": [
              {
                "title": "Folder",
                "state": "",
                "icon": "folder"
              },
              {
                "modifier": "divider",
                "title": ""
              },
              {
                "title": "Plain Text Document",
                "icon": "document"
              },
              {
                "title": "A Dog",
                "icon": "dogAlt"
              },
              {
                "title": "The Sun",
                "state": "",
                "icon": "sun"
              },
              {
                "title": "Money",
                "icon": "money"
              }
            ]
          }
        }
      }
    },
    "commands": [
      {
        "component": "CommandButton",
        "props":  {
          "label": "All Photos",
          "tag": "button",
          "dropdownIcon": "chevronDown",
          "iconColor": "themePrimary",
          "modifier": "pivot",
          "state": "is-active",
          "dropdown": {
            "component": "ContextualMenu",
            "props":  {
              "state": "is-opened",
              "modifier": "hasIcons",
              "items": [
                {
                  "title": "Folder",
                  "state": "",
                  "icon": "folder"
                },
                {
                  "modifier": "divider",
                  "title": ""
                },
                {
                  "title": "Plain Text Document",
                  "icon": "document"
                },
                {
                  "title": "A Dog",
                  "icon": "dogAlt"
                },
                {
                  "title": "The Sun",
                  "state": "",
                  "icon": "sun"
                },
                {
                  "title": "Money",
                  "icon": "money"
                }
              ]
            }
          }
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Albums",
          "tag": "a",
          "modifier": "pivot",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Tags",
          "tag": "a",
          "modifier": "pivot",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "Places",
          "tag": "a",
          "modifier": "pivot",
          "iconColor": "themePrimary"
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "label": "People",
          "tag": "a",
          "modifier": "pivot",
          "iconColor": "themePrimary"
        }
      }
    ],
    "sideCommands": [
      {
        "component": "CommandButton",
        "props":  {
          "label": "Show photos from",
          "icon": "gear",
          "tag": "button",
          "modifier": "dropdown",
          "iconColor": "themePrimary",
          "dropdownIcon": "chevronDown",
          "dropdown": {
            "component": "ContextualMenu",
            "props":  {
              "state": "is-opened",
              "modifier": "hasIcons",
              "items": [
                {
                  "title": "Folder",
                  "state": "",
                  "icon": "folder"
                },
                {
                  "modifier": "divider",
                  "title": ""
                },
                {
                  "title": "Plain Text Document",
                  "icon": "document"
                },
                {
                  "title": "A Dog",
                  "icon": "dogAlt"
                },
                {
                  "title": "The Sun",
                  "state": "",
                  "icon": "sun"
                },
                {
                  "title": "Money",
                  "icon": "money"
                }
              ]
            }
          }
        }
      },
      {
        "component": "CommandButton",
        "props":  {
          "icon": "circleInfo",
          "tag": "button",
          "modifier": "noLabel",
          "iconColor": "themePrimary"
        }
      }
    ]
  }
}

module.exports = CommandBarExampleModel;