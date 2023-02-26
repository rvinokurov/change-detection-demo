export const classInfo = [
  {
    "className": "AbsctractComponentNode",
    "superClass": null,
    "properties": [
      {
        "name": "title",
        "body": "abstract title: string;"
      },
      {
        "name": "nodeColor",
        "body": "abstract nodeColor: string;"
      },
      {
        "name": "logSettingsService",
        "body": "private readonly logSettingsService = inject(LogSettingsService);"
      },
      {
        "name": "wrappedCountOfRerender",
        "body": "protected wrappedCountOfRerender = 0;"
      },
      {
        "name": "backgroundColor",
        "body": "protected readonly backgroundColor = '#1a1a1a';"
      }
    ],
    "methods": [
      {
        "name": "logOptions",
        "body": "protected logOptions() {\n  return [\n    `color: ${this.backgroundColor}`,\n    `background: ${this.nodeColor}`,\n    `padding: 2px 10px 2px 10px`,\n    'font-weight: 600',\n    'border-radius: 3px'\n  ];\n}"
      },
      {
        "name": "log",
        "body": "protected log(message: string) {\n  console.log(`%c-> ${message}`, this.logOptions().join(';'));\n}"
      },
      {
        "name": "ngOnInit",
        "body": "ngOnInit() {\n  if(this.logSettingsService.settings.onInit) {\n    this.log(`OnInit ${this.title}`);\n  }\n}"
      },
      {
        "name": "ngDoCheck",
        "body": "ngDoCheck() {\n  if(this.logSettingsService.settings.doCheck) {\n    this.log(`DoCheck ${this.title}`);\n  }\n}"
      },
      {
        "name": "countOfReRender",
        "body": "get countOfReRender() {\n  this.log(`re-render ${this.title}`);\n\n  return this.wrappedCountOfRerender++;\n}"
      },
      {
        "name": "bgColor",
        "body": "@HostBinding('style.background-color')\nget bgColor() {\n  return this.nodeColor;\n}"
      },
      {
        "name": "className",
        "body": "@HostBinding('class')\nget className() {\n  return 'onpush-node';\n}"
      },
      {
        "name": "instance",
        "body": "get instance() {\n  return this;\n}"
      }
    ]
  },
  {
    "className": "AppComponent",
    "superClass": null,
    "properties": [],
    "methods": [
      {
        "name": "logOptions",
        "body": "protected logOptions() {\n  return [\n    `color: white`,\n    `background: gray`,\n    `padding: 2px 10px 2px 10px`,\n    `margin: 20px 10px`,\n    'font-weight: 600',\n    'border-radius: 3px',\n  ];\n}"
      },
      {
        "name": "log",
        "body": "protected log(message: string) {\n  console.log(`%c-> ${message}`, this.logOptions().join(';'));\n}"
      },
      {
        "name": "constructor",
        "body": "constructor(private readonly ngZone: NgZone) {\n  this.ngZone.onStable.subscribe(() => {\n    this.log('Zone stable');\n  });\n\n  this.ngZone.onUnstable.subscribe(() => {\n    this.log('Zone unstable');\n  });\n}"
      }
    ]
  },
  {
    "className": "SourceCodeTooltipComponent",
    "superClass": null,
    "properties": [
      {
        "name": "cdr",
        "body": "private readonly cdr = inject(ChangeDetectorRef);"
      },
      {
        "name": "tooltipService",
        "body": "private readonly tooltipService = inject(TooltipService);"
      },
      {
        "name": "isOpen",
        "body": "private isOpen = false;"
      },
      {
        "name": "coords",
        "body": "private coords: OpenMessage['coords'];"
      },
      {
        "name": "content",
        "body": "content: string = '';"
      }
    ],
    "methods": [
      {
        "name": "ngOnInit",
        "body": "ngOnInit() {\n  this.tooltipService.isOpen$.subscribe(({ isOpen, coords, content }) => {\n    this.isOpen = isOpen;\n    this.coords = coords;\n    this.content = content ?? '';\n    this.cdr.markForCheck();\n  });\n}"
      },
      {
        "name": "top",
        "body": "@HostBinding('style.top')\nget top() {\n  return `${this.coords?.top ? this.coords.top : 0}px`;\n}"
      },
      {
        "name": "left",
        "body": "@HostBinding('style.left')\nget left() {\n  return `${this.coords?.right ? this.coords.right : 0}px`;\n}"
      },
      {
        "name": "display",
        "body": "@HostBinding('style.display')\nget display() {\n  return this.isOpen ? 'block' : 'none';\n}"
      },
      {
        "name": "click",
        "body": "@HostListener('click', ['$event'])\nclick($event: MouseEvent) {\n  $event.stopPropagation();\n}"
      }
    ]
  },
  {
    "className": "TooltipService",
    "superClass": null,
    "properties": [
      {
        "name": "document",
        "body": "private readonly document = inject<Document>(DOCUMENT);"
      },
      {
        "name": "isOpenSubject$",
        "body": "private readonly isOpenSubject$ = new BehaviorSubject<OpenMessage>({\n  isOpen: false,\n});"
      },
      {
        "name": "isOpen$",
        "body": "readonly isOpen$ = this.isOpenSubject$.asObservable();"
      }
    ],
    "methods": [
      {
        "name": "constructor",
        "body": "constructor() {\n  this.document.addEventListener('click', () => {\n    this.isOpenSubject$.next({ isOpen: false });\n  });\n}"
      },
      {
        "name": "show",
        "body": "show(element: HTMLElement, content: string) {\n  const rect = element.getBoundingClientRect();\n  this.isOpenSubject$.next({\n    isOpen: true,\n    coords: rect,\n    content: content,\n  });\n}"
      }
    ]
  },
  {
    "className": "SourceCodeComponent",
    "superClass": null,
    "properties": [
      {
        "name": "method",
        "body": "@Input() method: Function = () => {};"
      },
      {
        "name": "instance",
        "body": "@Input() instance: Object = {};"
      },
      {
        "name": "template",
        "body": "@Input() template: string = '';"
      },
      {
        "name": "combined",
        "body": "@Input() combined: Array<string> = [];"
      },
      {
        "name": "button",
        "body": "@ViewChild('button') button: ElementRef<HTMLElement> | null = null;"
      },
      {
        "name": "tooltipService",
        "body": "private readonly tooltipService = inject(TooltipService);"
      },
      {
        "name": "elementRef",
        "body": "private readonly elementRef = inject(ElementRef);"
      },
      {
        "name": "click",
        "body": "click = ($event: MouseEvent) => {\n  $event.stopPropagation();\n  this.showCode();\n};"
      }
    ],
    "methods": [
      {
        "name": "parseMethodName",
        "body": "parseMethodName(name: string) {\n  const match = name.match(/^[A-z[0-9_]+/);\n  return match && match[0] ? match[0] : '';\n}"
      },
      {
        "name": "getPropertyBody",
        "body": "private getPropertyBody(className: string, propertyName: string): string {\n  return (\n    classInfo\n      .find((classInfo) => classInfo?.className === className)\n      ?.properties.find((property) => property.name === propertyName)?.body ||\n    ''\n  );\n}"
      },
      {
        "name": "getMethodBody",
        "body": "private getMethodBody(className: string, methodName: string): string {\n  return (\n    classInfo\n      .find((classInfo) => classInfo?.className === className)\n      ?.methods.filter((method) => method.name === methodName)\n      ?.map(({ body }) => body) || []\n  ).join('\\n\\n');\n}"
      },
      {
        "name": "getTemplateBody",
        "body": "private getTemplateBody(className: string, template: string): string {\n  return (\n    templateInfo\n      .find((classInfo) => classInfo?.className === className)\n      ?.tags.find((method) => method.name === template)?.body || ''\n  );\n}"
      },
      {
        "name": "getClassPartBody",
        "body": "private getClassPartBody(className: string): string {\n  return [\n    ...this.combined\n      .map((part) => this.getPropertyBody(className, part))\n      .filter((part) => part.length),\n    ...this.combined\n      .map((part) => this.getMethodBody(className, part))\n      .filter((part) => part.length),\n  ].join('\\n\\n');\n}"
      },
      {
        "name": "ngAfterViewInit",
        "body": "ngAfterViewInit() {\n  this.button?.nativeElement.addEventListener('click', this.click);\n}"
      },
      {
        "name": "ngOnDestroy",
        "body": "ngOnDestroy() {\n  this.button?.nativeElement.removeEventListener('click', this.click);\n}"
      },
      {
        "name": "showCode",
        "body": "showCode() {\n  const className = this.instance.constructor.name;\n  const methodName = this.parseMethodName(this.method.toString());\n\n  this.tooltipService.show(\n    this.elementRef.nativeElement,\n    this.template\n      ? this.getTemplateBody(className, this.template)\n      : this.combined.length\n      ? this.getClassPartBody(className)\n      : this.getMethodBody(className, methodName)\n  );\n}"
      }
    ]
  },
  {
    "className": "LogSettingsService",
    "superClass": null,
    "properties": [],
    "methods": [
      {
        "name": "constructor",
        "body": "constructor() {}"
      },
      {
        "name": "configure",
        "body": "configure(config: Partial<LogConfig>) {\n  this.config = {...this.config, ...config};\n}"
      },
      {
        "name": "settings",
        "body": "get settings(): LogConfig {\n  return this.config;\n}"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeAComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#ceffc3';"
      },
      {
        "name": "title",
        "body": "title = 'A';"
      },
      {
        "name": "wrappedCounter",
        "body": "private wrappedCounter = 0;"
      },
      {
        "name": "counter$",
        "body": "private counter$ = new BehaviorSubject(0);"
      },
      {
        "name": "delayedCounter$",
        "body": "delayedCounter$ = this.counter$.pipe(delay(3000));"
      }
    ],
    "methods": [
      {
        "name": "counter",
        "body": "get counter() {\n  this.log('render counter');\n  return this.wrappedCounter;\n}"
      },
      {
        "name": "updateCounter",
        "body": "updateCounter(counter: number) {\n  this.log('set counter');\n  this.wrappedCounter = counter;\n  this.counter$.next(counter);\n}"
      },
      {
        "name": "processAsyncCounter",
        "body": "processAsyncCounter(counter: number | null) {\n  const resultedCounter = counter === null ? 0 : counter;\n  this.log(`return async counter to binding: ${resultedCounter}`);\n  return resultedCounter;\n}"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeBComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#b0cfff';"
      },
      {
        "name": "title",
        "body": "title = 'B';"
      },
      {
        "name": "counter",
        "body": "counter = 0;"
      },
      {
        "name": "counterChange",
        "body": "@Output() counterChange = new EventEmitter();"
      }
    ],
    "methods": [
      {
        "name": "updateCounter",
        "body": "updateCounter(counter: number) {\n  this.counter = counter;\n  this.log('emit counter');\n  this.counterChange.emit(counter);\n}"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeCComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#fcf3d1';"
      },
      {
        "name": "title",
        "body": "title = 'C';"
      },
      {
        "name": "wrappedCounter",
        "body": "wrappedCounter = 0;"
      },
      {
        "name": "counterChange",
        "body": "@Output() counterChange = new EventEmitter();"
      }
    ],
    "methods": [
      {
        "name": "counter",
        "body": "get counter() {\n  this.log('render counter');\n  return this.wrappedCounter;\n}"
      },
      {
        "name": "click",
        "body": "click() {\n  this.log('emit counter');\n  this.counterChange.emit(++this.wrappedCounter);\n}"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeDComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#ffd7d7';"
      },
      {
        "name": "title",
        "body": "title = 'D';"
      }
    ],
    "methods": []
  },
  {
    "className": "OnpushBindingsNodeEComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#b4affc';"
      },
      {
        "name": "title",
        "body": "title = 'E';"
      },
      {
        "name": "wrappedCounter",
        "body": "private wrappedCounter = -1;"
      }
    ],
    "methods": [
      {
        "name": "counter",
        "body": "@Input()\nset counter(counter: number) {\n  this.log('set counter');\n  this.wrappedCounter = counter;\n}"
      },
      {
        "name": "counter",
        "body": "get counter() {\n  this.log('render counter')\n  return this.wrappedCounter;\n}"
      }
    ]
  },
  {
    "className": "OnpushBindingsNodeFComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#b3efd0';"
      },
      {
        "name": "title",
        "body": "title = 'F';"
      },
      {
        "name": "wrappedCounter",
        "body": "private wrappedCounter = -1;"
      }
    ],
    "methods": [
      {
        "name": "counter",
        "body": "@Input()\nset counter(counter: number) {\n  this.log(`set counter: ${counter}`);\n  this.wrappedCounter = counter;\n}"
      },
      {
        "name": "counter",
        "body": "get counter() {\n  this.log('render counter')\n  return this.wrappedCounter;\n}"
      }
    ]
  },
  {
    "className": "OnpushBindingsDemoComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'OnPush Bindings Demo';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#e0e0e0';"
      }
    ],
    "methods": [
      {
        "name": "constructor",
        "body": "constructor() {\n  super();\n  inject(LogSettingsService).configure({doCheck: false, onInit: false})\n}"
      }
    ]
  },
  {
    "className": "OnpushNodeAComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "nodeColor",
        "body": "nodeColor = '#9ce388';"
      },
      {
        "name": "title",
        "body": "title = 'A';"
      }
    ],
    "methods": []
  },
  {
    "className": "OnpushNodeBComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'B';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#a1a1de';"
      }
    ],
    "methods": []
  },
  {
    "className": "OnpushNodeCComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'C';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#eaeaa0';"
      },
      {
        "name": "counter",
        "body": "counter = 0;"
      }
    ],
    "methods": [
      {
        "name": "constructor",
        "body": "constructor(\n  private readonly cdr: ChangeDetectorRef,\n  private readonly ngZone: NgZone\n) {\n  super();\n}"
      },
      {
        "name": "click",
        "body": "click($event: MouseEvent) {\n  $event.stopPropagation();\n  this.log(`click ${this.title}`);\n}"
      },
      {
        "name": "runCounter",
        "body": "runCounter() {\n  setInterval(() => {\n    this.counter++;\n  }, 1000);\n}"
      },
      {
        "name": "runCounterWithMarkForCheck",
        "body": "runCounterWithMarkForCheck() {\n  setInterval(() => {\n    this.counter++;\n    this.cdr.markForCheck();\n  }, 1000);\n}"
      },
      {
        "name": "runCounterWithMarkForCheckOutSideZone",
        "body": "runCounterWithMarkForCheckOutSideZone() {\n  this.ngZone.runOutsideAngular(() => {\n    setInterval(() => {\n      this.counter++;\n      this.cdr.markForCheck();\n    }, 1000);\n  });\n}"
      },
      {
        "name": "runCounterWithDetectChangesOutSideZone",
        "body": "runCounterWithDetectChangesOutSideZone() {\n  this.ngZone.runOutsideAngular(() => {\n    setInterval(() => {\n      this.counter++;\n      this.cdr.detectChanges();\n    }, 1000);\n  });\n}"
      }
    ]
  },
  {
    "className": "OnpushNodeDComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'D';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#ffd1d1';"
      }
    ],
    "methods": [
      {
        "name": "click",
        "body": "click($event: MouseEvent) {\n  $event.stopPropagation();\n  this.log(`click ${this.title}`);\n}"
      }
    ]
  },
  {
    "className": "OnpushNodeEComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'E';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#fdb7c4';"
      },
      {
        "name": "counter",
        "body": "@Input() counter = 0;"
      }
    ],
    "methods": []
  },
  {
    "className": "OnpushNodeFComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'F';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = 'deepskyblue';"
      }
    ],
    "methods": []
  },
  {
    "className": "OnpushNodeGComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'G';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#9ce388';"
      },
      {
        "name": "counter",
        "body": "counter = 0;"
      }
    ],
    "methods": [
      {
        "name": "constructor",
        "body": "constructor(private readonly cdr: ChangeDetectorRef) {\n  super();\n}"
      },
      {
        "name": "ngDoCheck",
        "body": "override ngDoCheck() {\n  super.ngDoCheck();\n  this.counter++;\n\n  if(this.counter % 2 === 0) {\n    this.cdr.markForCheck();\n  }\n}"
      }
    ]
  },
  {
    "className": "OnpushNodeJComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'J';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = 'deepskyblue';"
      }
    ],
    "methods": []
  },
  {
    "className": "OnpushDemoComponent",
    "superClass": "AbsctractComponentNode",
    "properties": [
      {
        "name": "title",
        "body": "title = 'OnPush Demo';"
      },
      {
        "name": "nodeColor",
        "body": "nodeColor = '#e0e0e0';"
      }
    ],
    "methods": [
      {
        "name": "constructor",
        "body": "constructor() {\n  super();\n  inject(LogSettingsService).configure({ doCheck: true, onInit: true });\n}"
      }
    ]
  }
];