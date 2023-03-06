export const templateInfo = [
  {
    "className": "AppComponent",
    "tags": []
  },
  {
    "className": "SourceCodeTooltipComponent",
    "tags": []
  },
  {
    "className": "SourceCodeComponent",
    "tags": [
      {
        "name": "button",
        "body": "<button #button>"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeAComponent",
    "tags": [
      {
        "name": "nodeB",
        "body": "<onpush-bindings-node-b #nodeB (counterChange)=\"updateCounter($event)\" />"
      },
      {
        "name": "nodeF",
        "body": "<onpush-bindings-node-f\n      #nodeF\n      [counter]=\"processAsyncCounter(delayedCounter$ | async)\"\n    />"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeBComponent",
    "tags": [
      {
        "name": "nodeC",
        "body": "<onpush-bindings-node-c #nodeC (counterChange)=\"updateCounter($event)\" />"
      },
      {
        "name": "nodeE",
        "body": "<onpush-bindings-node-e #nodeE [counter]=\"counter\" />"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeCComponent",
    "tags": []
  },
  {
    "className": "OnpushBindingsNodeDComponent",
    "tags": []
  },
  {
    "className": "OnpushBindingsNodeEComponent",
    "tags": []
  },
  {
    "className": "OnpushBindingsNodeFComponent",
    "tags": []
  },
  {
    "className": "OnpushBindingsDemoComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeAComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeBComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeCComponent",
    "tags": [
      {
        "name": "nodeE",
        "body": "<onpush-node-e #nodeE [counter]=\"counter\" />"
      }
    ]
  },
  {
    "className": "OnpushNodeDComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeEComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeFComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeGComponent",
    "tags": []
  },
  {
    "className": "OnpushNodeJComponent",
    "tags": []
  },
  {
    "className": "OnpushDemoComponent",
    "tags": []
  },
  {
    "className": "SignalsDemoComponent",
    "tags": []
  }
];