var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/tweakpane/dist/tweakpane.js
var require_tweakpane = __commonJS((exports2, module2) => {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports2 === "object" && typeof module2 === "object")
      module2.exports = factory();
    else if (typeof define === "function" && define.amd)
      define([], factory);
    else if (typeof exports2 === "object")
      exports2["tweakpane"] = factory();
    else
      root["Tweakpane"] = factory();
  })(typeof self !== "undefined" ? self : exports2, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module3 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
        module3.l = true;
        return module3.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports3, name, getter) {
        if (!__webpack_require__.o(exports3, name)) {
          Object.defineProperty(exports3, name, {enumerable: true, get: getter});
        }
      };
      __webpack_require__.r = function(exports3) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports3, Symbol.toStringTag, {value: "Module"});
        }
        Object.defineProperty(exports3, "__esModule", {value: true});
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {enumerable: true, value});
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module3) {
        var getter = module3 && module3.__esModule ? function getDefault() {
          return module3["default"];
        } : function getModuleExports() {
          return module3;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "./src/main/js/index.ts");
    }({
      "./node_modules/css-loader/lib/css-base.js": function(module3, exports3) {
        module3.exports = function(useSourceMap) {
          var list = [];
          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return "@media " + item[2] + "{" + content + "}";
              } else {
                return content;
              }
            }).join("");
          };
          list.i = function(modules, mediaQuery) {
            if (typeof modules === "string")
              modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
              var id = this[i][0];
              if (typeof id === "number")
                alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
              var item = modules[i];
              if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }
                list.push(item);
              }
            }
          };
          return list;
        };
        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || "";
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (useSourceMap && typeof btoa === "function") {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        }
        function toComment(sourceMap) {
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64," + base64;
          return "/*# " + data + " */";
        }
      },
      "./node_modules/process/browser.js": function(module3, exports3) {
        var process2 = module3.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
          }
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e2) {
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker2) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker2);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker2);
          }
          try {
            return cachedClearTimeout(marker2);
          } catch (e) {
            try {
              return cachedClearTimeout.call(null, marker2);
            } catch (e2) {
              return cachedClearTimeout.call(this, marker2);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }
        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;
          var len5 = queue.length;
          while (len5) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len5) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len5 = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }
        process2.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process2.title = "browser";
        process2.browser = true;
        process2.env = {};
        process2.argv = [];
        process2.version = "";
        process2.versions = {};
        function noop() {
        }
        process2.on = noop;
        process2.addListener = noop;
        process2.once = noop;
        process2.off = noop;
        process2.removeListener = noop;
        process2.removeAllListeners = noop;
        process2.emit = noop;
        process2.prependListener = noop;
        process2.prependOnceListener = noop;
        process2.listeners = function(name) {
          return [];
        };
        process2.binding = function(name) {
          throw new Error("process.binding is not supported");
        };
        process2.cwd = function() {
          return "/";
        };
        process2.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process2.umask = function() {
          return 0;
        };
      },
      "./src/main/js/api/button.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ButtonApi = void 0;
        var ButtonApi = function() {
          function ButtonApi2(buttonController) {
            this.controller = buttonController;
          }
          Object.defineProperty(ButtonApi2.prototype, "hidden", {
            get: function() {
              return this.controller.viewModel.hidden;
            },
            set: function(hidden) {
              this.controller.viewModel.hidden = hidden;
            },
            enumerable: false,
            configurable: true
          });
          ButtonApi2.prototype.dispose = function() {
            this.controller.viewModel.dispose();
          };
          ButtonApi2.prototype.on = function(eventName, handler) {
            var emitter = this.controller.button.emitter;
            emitter.on(eventName, handler.bind(this));
            return this;
          };
          return ButtonApi2;
        }();
        exports3.ButtonApi = ButtonApi;
      },
      "./src/main/js/api/event-handler-adapters.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.folder = exports3.monitor = exports3.input = void 0;
        function input(_a2) {
          var binding = _a2.binding, eventName = _a2.eventName, handler = _a2.handler;
          if (eventName === "change") {
            var emitter = binding.emitter;
            emitter.on("change", function(ev) {
              handler(ev.sender.getValueToWrite(ev.rawValue));
            });
          }
        }
        exports3.input = input;
        function monitor(_a2) {
          var binding = _a2.binding, eventName = _a2.eventName, handler = _a2.handler;
          if (eventName === "update") {
            var emitter = binding.emitter;
            emitter.on("update", function(ev) {
              handler(ev.sender.target.read());
            });
          }
        }
        exports3.monitor = monitor;
        function folder(_a2) {
          var eventName = _a2.eventName, folder2 = _a2.folder, handler = _a2.handler, uiContainer = _a2.uiContainer;
          if (eventName === "change") {
            var emitter = uiContainer.emitter;
            emitter.on("inputchange", function(ev) {
              handler(ev.inputBinding.getValueToWrite(ev.value));
            });
          }
          if (eventName === "update") {
            var emitter = uiContainer.emitter;
            emitter.on("monitorupdate", function(ev) {
              handler(ev.monitorBinding.target.read());
            });
          }
          if (eventName === "fold") {
            uiContainer.emitter.on("itemfold", function(ev) {
              handler(ev.expanded);
            });
            folder2 === null || folder2 === void 0 ? void 0 : folder2.emitter.on("change", function(ev) {
              if (ev.propertyName !== "expanded") {
                return;
              }
              handler(ev.sender.expanded);
            });
          }
        }
        exports3.folder = folder;
      },
      "./src/main/js/api/folder.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.FolderApi = void 0;
        var InputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/input.ts");
        var MonitorBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/monitor.ts");
        var button_1 = __webpack_require__("./src/main/js/controller/button.ts");
        var folder_1 = __webpack_require__("./src/main/js/controller/folder.ts");
        var separator_1 = __webpack_require__("./src/main/js/controller/separator.ts");
        var target_1 = __webpack_require__("./src/main/js/model/target.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var button_2 = __webpack_require__("./src/main/js/api/button.ts");
        var EventHandlerAdapters = __webpack_require__("./src/main/js/api/event-handler-adapters.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/api/input-binding.ts");
        var monitor_binding_1 = __webpack_require__("./src/main/js/api/monitor-binding.ts");
        var separator_2 = __webpack_require__("./src/main/js/api/separator.ts");
        var FolderApi = function() {
          function FolderApi2(folderController) {
            this.controller = folderController;
          }
          Object.defineProperty(FolderApi2.prototype, "expanded", {
            get: function() {
              return this.controller.folder.expanded;
            },
            set: function(expanded) {
              this.controller.folder.expanded = expanded;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FolderApi2.prototype, "hidden", {
            get: function() {
              return this.controller.viewModel.hidden;
            },
            set: function(hidden) {
              this.controller.viewModel.hidden = hidden;
            },
            enumerable: false,
            configurable: true
          });
          FolderApi2.prototype.dispose = function() {
            this.controller.viewModel.dispose();
          };
          FolderApi2.prototype.addInput = function(object, key, opt_params) {
            var params = opt_params || {};
            var uc = InputBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key, params.presetKey), params);
            this.controller.uiContainer.add(uc, params.index);
            return new input_binding_1.InputBindingApi(uc);
          };
          FolderApi2.prototype.addMonitor = function(object, key, opt_params) {
            var params = opt_params || {};
            var uc = MonitorBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key), params);
            this.controller.uiContainer.add(uc, params.index);
            return new monitor_binding_1.MonitorBindingApi(uc);
          };
          FolderApi2.prototype.addFolder = function(params) {
            var uc = new folder_1.FolderController(this.controller.document, __assign(__assign({}, params), {viewModel: new view_model_1.ViewModel()}));
            this.controller.uiContainer.add(uc, params.index);
            return new FolderApi2(uc);
          };
          FolderApi2.prototype.addButton = function(params) {
            var uc = new button_1.ButtonController(this.controller.document, __assign(__assign({}, params), {viewModel: new view_model_1.ViewModel()}));
            this.controller.uiContainer.add(uc, params.index);
            return new button_2.ButtonApi(uc);
          };
          FolderApi2.prototype.addSeparator = function(opt_params) {
            var params = opt_params || {};
            var uc = new separator_1.SeparatorController(this.controller.document, {
              viewModel: new view_model_1.ViewModel()
            });
            this.controller.uiContainer.add(uc, params.index);
            return new separator_2.SeparatorApi(uc);
          };
          FolderApi2.prototype.on = function(eventName, handler) {
            EventHandlerAdapters.folder({
              eventName,
              folder: this.controller.folder,
              handler: handler.bind(this),
              uiContainer: this.controller.uiContainer
            });
            return this;
          };
          return FolderApi2;
        }();
        exports3.FolderApi = FolderApi;
      },
      "./src/main/js/api/input-binding.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.InputBindingApi = void 0;
        var HandlerAdapters = __webpack_require__("./src/main/js/api/event-handler-adapters.ts");
        var InputBindingApi = function() {
          function InputBindingApi2(bindingController) {
            this.controller = bindingController;
          }
          Object.defineProperty(InputBindingApi2.prototype, "hidden", {
            get: function() {
              return this.controller.viewModel.hidden;
            },
            set: function(hidden) {
              this.controller.viewModel.hidden = hidden;
            },
            enumerable: false,
            configurable: true
          });
          InputBindingApi2.prototype.dispose = function() {
            this.controller.viewModel.dispose();
          };
          InputBindingApi2.prototype.on = function(eventName, handler) {
            HandlerAdapters.input({
              binding: this.controller.binding,
              eventName,
              handler: handler.bind(this)
            });
            return this;
          };
          InputBindingApi2.prototype.refresh = function() {
            this.controller.binding.read();
          };
          return InputBindingApi2;
        }();
        exports3.InputBindingApi = InputBindingApi;
      },
      "./src/main/js/api/monitor-binding.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.MonitorBindingApi = void 0;
        var EventHandlerAdapters = __webpack_require__("./src/main/js/api/event-handler-adapters.ts");
        var MonitorBindingApi = function() {
          function MonitorBindingApi2(bindingController) {
            this.controller = bindingController;
          }
          Object.defineProperty(MonitorBindingApi2.prototype, "hidden", {
            get: function() {
              return this.controller.viewModel.hidden;
            },
            set: function(hidden) {
              this.controller.viewModel.hidden = hidden;
            },
            enumerable: false,
            configurable: true
          });
          MonitorBindingApi2.prototype.dispose = function() {
            this.controller.viewModel.dispose();
          };
          MonitorBindingApi2.prototype.on = function(eventName, handler) {
            EventHandlerAdapters.monitor({
              binding: this.controller.binding,
              eventName,
              handler: handler.bind(this)
            });
            return this;
          };
          MonitorBindingApi2.prototype.refresh = function() {
            this.controller.binding.read();
          };
          return MonitorBindingApi2;
        }();
        exports3.MonitorBindingApi = MonitorBindingApi;
      },
      "./src/main/js/api/preset.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.importJson = exports3.exportJson = void 0;
        function exportJson(targets) {
          return targets.reduce(function(result, target) {
            var _a2;
            return Object.assign(result, (_a2 = {}, _a2[target.presetKey] = target.read(), _a2));
          }, {});
        }
        exports3.exportJson = exportJson;
        function importJson(targets, preset) {
          targets.forEach(function(target) {
            var value = preset[target.presetKey];
            if (value !== void 0) {
              target.write(value);
            }
          });
        }
        exports3.importJson = importJson;
      },
      "./src/main/js/api/root.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.RootApi = void 0;
        var InputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/input.ts");
        var MonitorBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/monitor.ts");
        var button_1 = __webpack_require__("./src/main/js/controller/button.ts");
        var folder_1 = __webpack_require__("./src/main/js/controller/folder.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var monitor_binding_1 = __webpack_require__("./src/main/js/controller/monitor-binding.ts");
        var separator_1 = __webpack_require__("./src/main/js/controller/separator.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var target_1 = __webpack_require__("./src/main/js/model/target.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var button_2 = __webpack_require__("./src/main/js/api/button.ts");
        var EventHandlerAdapters = __webpack_require__("./src/main/js/api/event-handler-adapters.ts");
        var folder_2 = __webpack_require__("./src/main/js/api/folder.ts");
        var input_binding_2 = __webpack_require__("./src/main/js/api/input-binding.ts");
        var monitor_binding_2 = __webpack_require__("./src/main/js/api/monitor-binding.ts");
        var Preset = __webpack_require__("./src/main/js/api/preset.ts");
        var separator_2 = __webpack_require__("./src/main/js/api/separator.ts");
        var RootApi = function() {
          function RootApi2(rootController) {
            this.controller = rootController;
          }
          Object.defineProperty(RootApi2.prototype, "element", {
            get: function() {
              return this.controller.view.element;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(RootApi2.prototype, "expanded", {
            get: function() {
              var folder = this.controller.folder;
              return folder ? folder.expanded : true;
            },
            set: function(expanded) {
              var folder = this.controller.folder;
              if (folder) {
                folder.expanded = expanded;
              }
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(RootApi2.prototype, "hidden", {
            get: function() {
              return this.controller.viewModel.hidden;
            },
            set: function(hidden) {
              this.controller.viewModel.hidden = hidden;
            },
            enumerable: false,
            configurable: true
          });
          RootApi2.prototype.dispose = function() {
            this.controller.viewModel.dispose();
          };
          RootApi2.prototype.addInput = function(object, key, opt_params) {
            var params = opt_params || {};
            var uc = InputBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key, params.presetKey), params);
            this.controller.uiContainer.add(uc, params.index);
            return new input_binding_2.InputBindingApi(uc);
          };
          RootApi2.prototype.addMonitor = function(object, key, opt_params) {
            var params = opt_params || {};
            var uc = MonitorBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key), params);
            this.controller.uiContainer.add(uc, params.index);
            return new monitor_binding_2.MonitorBindingApi(uc);
          };
          RootApi2.prototype.addButton = function(params) {
            var uc = new button_1.ButtonController(this.controller.document, __assign(__assign({}, params), {viewModel: new view_model_1.ViewModel()}));
            this.controller.uiContainer.add(uc, params.index);
            return new button_2.ButtonApi(uc);
          };
          RootApi2.prototype.addFolder = function(params) {
            var uc = new folder_1.FolderController(this.controller.document, __assign(__assign({}, params), {viewModel: new view_model_1.ViewModel()}));
            this.controller.uiContainer.add(uc, params.index);
            return new folder_2.FolderApi(uc);
          };
          RootApi2.prototype.addSeparator = function(opt_params) {
            var params = opt_params || {};
            var uc = new separator_1.SeparatorController(this.controller.document, {
              viewModel: new view_model_1.ViewModel()
            });
            this.controller.uiContainer.add(uc, params.index);
            return new separator_2.SeparatorApi(uc);
          };
          RootApi2.prototype.importPreset = function(preset) {
            var targets = UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).map(function(ibc) {
              return ibc.binding.target;
            });
            Preset.importJson(targets, preset);
            this.refresh();
          };
          RootApi2.prototype.exportPreset = function() {
            var targets = UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).map(function(ibc) {
              return ibc.binding.target;
            });
            return Preset.exportJson(targets);
          };
          RootApi2.prototype.on = function(eventName, handler) {
            EventHandlerAdapters.folder({
              eventName,
              folder: this.controller.folder,
              handler: handler.bind(this),
              uiContainer: this.controller.uiContainer
            });
            return this;
          };
          RootApi2.prototype.refresh = function() {
            UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).forEach(function(ibc) {
              ibc.binding.read();
            });
            UiUtil.findControllers(this.controller.uiContainer.items, monitor_binding_1.MonitorBindingController).forEach(function(mbc) {
              mbc.binding.read();
            });
          };
          return RootApi2;
        }();
        exports3.RootApi = RootApi;
      },
      "./src/main/js/api/separator.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SeparatorApi = void 0;
        var SeparatorApi = function() {
          function SeparatorApi2(controller) {
            this.controller = controller;
          }
          Object.defineProperty(SeparatorApi2.prototype, "hidden", {
            get: function() {
              return this.controller.viewModel.hidden;
            },
            set: function(hidden) {
              this.controller.viewModel.hidden = hidden;
            },
            enumerable: false,
            configurable: true
          });
          SeparatorApi2.prototype.dispose = function() {
            this.controller.viewModel.dispose();
          };
          return SeparatorApi2;
        }();
        exports3.SeparatorApi = SeparatorApi;
      },
      "./src/main/js/binding/input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.InputBinding = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var InputBinding = function() {
          function InputBinding2(config) {
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.reader_ = config.reader;
            this.writer_ = config.writer;
            this.emitter = new emitter_1.Emitter();
            this.value = config.value;
            this.value.emitter.on("change", this.onValueChange_);
            this.target = config.target;
            this.read();
          }
          InputBinding2.prototype.read = function() {
            var targetValue = this.target.read();
            if (targetValue !== void 0) {
              this.value.rawValue = this.reader_(targetValue);
            }
          };
          InputBinding2.prototype.getValueToWrite = function(rawValue) {
            return this.writer_(rawValue);
          };
          InputBinding2.prototype.write_ = function(rawValue) {
            this.target.write(this.getValueToWrite(rawValue));
          };
          InputBinding2.prototype.onValueChange_ = function(ev) {
            this.write_(ev.rawValue);
            this.emitter.emit("change", {
              rawValue: ev.rawValue,
              sender: this
            });
          };
          return InputBinding2;
        }();
        exports3.InputBinding = InputBinding;
      },
      "./src/main/js/binding/monitor.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.MonitorBinding = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var MonitorBinding = function() {
          function MonitorBinding2(config) {
            this.onTick_ = this.onTick_.bind(this);
            this.onValueUpdate_ = this.onValueUpdate_.bind(this);
            this.reader_ = config.reader;
            this.target = config.target;
            this.emitter = new emitter_1.Emitter();
            this.value = config.value;
            this.value.emitter.on("update", this.onValueUpdate_);
            this.ticker = config.ticker;
            this.ticker.emitter.on("tick", this.onTick_);
            this.read();
          }
          MonitorBinding2.prototype.dispose = function() {
            this.ticker.disposable.dispose();
          };
          MonitorBinding2.prototype.read = function() {
            var targetValue = this.target.read();
            if (targetValue !== void 0) {
              this.value.append(this.reader_(targetValue));
            }
          };
          MonitorBinding2.prototype.onTick_ = function(_) {
            this.read();
          };
          MonitorBinding2.prototype.onValueUpdate_ = function(ev) {
            this.emitter.emit("update", {
              rawValue: ev.rawValue,
              sender: this
            });
          };
          return MonitorBinding2;
        }();
        exports3.MonitorBinding = MonitorBinding;
      },
      "./src/main/js/constraint/composite.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.CompositeConstraint = void 0;
        var CompositeConstraint = function() {
          function CompositeConstraint2(config) {
            this.constraints_ = config.constraints;
          }
          Object.defineProperty(CompositeConstraint2.prototype, "constraints", {
            get: function() {
              return this.constraints_;
            },
            enumerable: false,
            configurable: true
          });
          CompositeConstraint2.prototype.constrain = function(value) {
            return this.constraints_.reduce(function(result, c) {
              return c.constrain(result);
            }, value);
          };
          return CompositeConstraint2;
        }();
        exports3.CompositeConstraint = CompositeConstraint;
      },
      "./src/main/js/constraint/list.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ListConstraint = void 0;
        var ListConstraint = function() {
          function ListConstraint2(config) {
            this.opts_ = config.options;
          }
          Object.defineProperty(ListConstraint2.prototype, "options", {
            get: function() {
              return this.opts_;
            },
            enumerable: false,
            configurable: true
          });
          ListConstraint2.prototype.constrain = function(value) {
            var opts = this.opts_;
            if (opts.length === 0) {
              return value;
            }
            var matched = opts.filter(function(item) {
              return item.value === value;
            }).length > 0;
            return matched ? value : opts[0].value;
          };
          return ListConstraint2;
        }();
        exports3.ListConstraint = ListConstraint;
      },
      "./src/main/js/constraint/point-2d.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dConstraint = void 0;
        var point_2d_1 = __webpack_require__("./src/main/js/model/point-2d.ts");
        var Point2dConstraint = function() {
          function Point2dConstraint2(config) {
            this.xConstraint = config.x;
            this.yConstraint = config.y;
          }
          Point2dConstraint2.prototype.constrain = function(value) {
            return new point_2d_1.Point2d(this.xConstraint ? this.xConstraint.constrain(value.x) : value.x, this.yConstraint ? this.yConstraint.constrain(value.y) : value.y);
          };
          return Point2dConstraint2;
        }();
        exports3.Point2dConstraint = Point2dConstraint;
      },
      "./src/main/js/constraint/range.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.RangeConstraint = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var RangeConstraint = function() {
          function RangeConstraint2(config) {
            this.maxValue = config.max;
            this.minValue = config.min;
          }
          RangeConstraint2.prototype.constrain = function(value) {
            var result = value;
            if (!type_util_1.TypeUtil.isEmpty(this.minValue)) {
              result = Math.max(result, this.minValue);
            }
            if (!type_util_1.TypeUtil.isEmpty(this.maxValue)) {
              result = Math.min(result, this.maxValue);
            }
            return result;
          };
          return RangeConstraint2;
        }();
        exports3.RangeConstraint = RangeConstraint;
      },
      "./src/main/js/constraint/step.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.StepConstraint = void 0;
        var StepConstraint = function() {
          function StepConstraint2(config) {
            this.step = config.step;
          }
          StepConstraint2.prototype.constrain = function(value) {
            var r = value < 0 ? -Math.round(-value / this.step) : Math.round(value / this.step);
            return r * this.step;
          };
          return StepConstraint2;
        }();
        exports3.StepConstraint = StepConstraint;
      },
      "./src/main/js/constraint/util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ConstraintUtil = void 0;
        var composite_1 = __webpack_require__("./src/main/js/constraint/composite.ts");
        exports3.ConstraintUtil = {
          findConstraint: function(c, constraintClass) {
            if (c instanceof constraintClass) {
              return c;
            }
            if (c instanceof composite_1.CompositeConstraint) {
              var result = c.constraints.reduce(function(tmpResult, sc) {
                if (tmpResult) {
                  return tmpResult;
                }
                return sc instanceof constraintClass ? sc : null;
              }, null);
              if (result) {
                return result;
              }
            }
            return null;
          }
        };
      },
      "./src/main/js/controller/binding-creators/boolean-input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var input_1 = __webpack_require__("./src/main/js/binding/input.ts");
        var composite_1 = __webpack_require__("./src/main/js/constraint/composite.ts");
        var list_1 = __webpack_require__("./src/main/js/constraint/list.ts");
        var util_1 = __webpack_require__("./src/main/js/constraint/util.ts");
        var BooleanConverter = __webpack_require__("./src/main/js/converter/boolean.ts");
        var input_value_1 = __webpack_require__("./src/main/js/model/input-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var checkbox_1 = __webpack_require__("./src/main/js/controller/input/checkbox.ts");
        var list_2 = __webpack_require__("./src/main/js/controller/input/list.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        function createConstraint(params) {
          var constraints = [];
          if ("options" in params && params.options !== void 0) {
            constraints.push(new list_1.ListConstraint({
              options: UiUtil.normalizeInputParamsOptions(params.options, BooleanConverter.fromMixed)
            }));
          }
          return new composite_1.CompositeConstraint({
            constraints
          });
        }
        function createController(document2, value) {
          var c = value.constraint;
          if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
            return new list_2.ListInputController(document2, {
              viewModel: new view_model_1.ViewModel(),
              stringifyValue: BooleanConverter.toString,
              value
            });
          }
          return new checkbox_1.CheckboxInputController(document2, {
            viewModel: new view_model_1.ViewModel(),
            value
          });
        }
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "boolean") {
            return null;
          }
          var value = new input_value_1.InputValue(false, createConstraint(params));
          var binding = new input_1.InputBinding({
            reader: BooleanConverter.fromMixed,
            target,
            value,
            writer: function(v) {
              return v;
            }
          });
          return new input_binding_1.InputBindingController(document2, {
            binding,
            controller: createController(document2, value),
            label: params.label || target.key
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/boolean-monitor.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var monitor_1 = __webpack_require__("./src/main/js/binding/monitor.ts");
        var BooleanConverter = __webpack_require__("./src/main/js/converter/boolean.ts");
        var boolean_1 = __webpack_require__("./src/main/js/formatter/boolean.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var monitor_value_1 = __webpack_require__("./src/main/js/model/monitor-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var monitor_binding_1 = __webpack_require__("./src/main/js/controller/monitor-binding.ts");
        var multi_log_1 = __webpack_require__("./src/main/js/controller/monitor/multi-log.ts");
        var single_log_1 = __webpack_require__("./src/main/js/controller/monitor/single-log.ts");
        var util_1 = __webpack_require__("./src/main/js/controller/binding-creators/util.ts");
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "boolean") {
            return null;
          }
          var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
          var controller = value.totalCount === 1 ? new single_log_1.SingleLogMonitorController(document2, {
            viewModel: new view_model_1.ViewModel(),
            formatter: new boolean_1.BooleanFormatter(),
            value
          }) : new multi_log_1.MultiLogMonitorController(document2, {
            viewModel: new view_model_1.ViewModel(),
            formatter: new boolean_1.BooleanFormatter(),
            value
          });
          return new monitor_binding_1.MonitorBindingController(document2, {
            binding: new monitor_1.MonitorBinding({
              reader: BooleanConverter.fromMixed,
              target,
              ticker: util_1.createTicker(document2, params.interval),
              value
            }),
            controller,
            label: params.label || target.key
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/color-input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.createWithObject = exports3.createWithNumber = exports3.createWithString = void 0;
        var input_1 = __webpack_require__("./src/main/js/binding/input.ts");
        var ColorConverter = __webpack_require__("./src/main/js/converter/color.ts");
        var color_1 = __webpack_require__("./src/main/js/formatter/color.ts");
        var color_2 = __webpack_require__("./src/main/js/model/color.ts");
        var input_value_1 = __webpack_require__("./src/main/js/model/input-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var NumberColorParser = __webpack_require__("./src/main/js/parser/number-color.ts");
        var StringColorParser = __webpack_require__("./src/main/js/parser/string-color.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var color_swatch_text_1 = __webpack_require__("./src/main/js/controller/input/color-swatch-text.ts");
        function createWithString(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "string") {
            return null;
          }
          if ("input" in params && params.input === "string") {
            return null;
          }
          var notation = StringColorParser.getNotation(initialValue);
          if (!notation) {
            return null;
          }
          var converter = ColorConverter.fromString;
          var color = converter(initialValue);
          var value = new input_value_1.InputValue(color);
          var writer = ColorConverter.getStringifier(notation);
          return new input_binding_1.InputBindingController(document2, {
            binding: new input_1.InputBinding({
              reader: converter,
              target,
              value,
              writer
            }),
            controller: new color_swatch_text_1.ColorSwatchTextInputController(document2, {
              formatter: new color_1.ColorFormatter(writer),
              parser: StringColorParser.CompositeParser,
              supportsAlpha: StringColorParser.hasAlphaComponent(notation),
              value,
              viewModel: new view_model_1.ViewModel()
            }),
            label: params.label || target.key
          });
        }
        exports3.createWithString = createWithString;
        function createWithNumber(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "number") {
            return null;
          }
          if (!("input" in params)) {
            return null;
          }
          if (params.input !== "color" && params.input !== "color.rgb" && params.input !== "color.rgba") {
            return null;
          }
          var supportsAlpha = params.input === "color.rgba";
          var parser = supportsAlpha ? NumberColorParser.RgbaParser : NumberColorParser.RgbParser;
          var color = parser(initialValue);
          if (!color) {
            return null;
          }
          var formatter = supportsAlpha ? new color_1.ColorFormatter(ColorConverter.toHexRgbaString) : new color_1.ColorFormatter(ColorConverter.toHexRgbString);
          var reader = supportsAlpha ? ColorConverter.fromNumberToRgba : ColorConverter.fromNumberToRgb;
          var writer = supportsAlpha ? ColorConverter.toRgbaNumber : ColorConverter.toRgbNumber;
          var value = new input_value_1.InputValue(color);
          return new input_binding_1.InputBindingController(document2, {
            binding: new input_1.InputBinding({
              reader,
              target,
              value,
              writer
            }),
            controller: new color_swatch_text_1.ColorSwatchTextInputController(document2, {
              formatter,
              parser: StringColorParser.CompositeParser,
              supportsAlpha,
              value,
              viewModel: new view_model_1.ViewModel()
            }),
            label: params.label || target.key
          });
        }
        exports3.createWithNumber = createWithNumber;
        function createWithObject(document2, target, params) {
          var initialValue = target.read();
          if (!color_2.Color.isColorObject(initialValue)) {
            return null;
          }
          var color = color_2.Color.fromObject(initialValue);
          var supportsAlpha = color_2.Color.isRgbaColorObject(initialValue);
          var formatter = supportsAlpha ? new color_1.ColorFormatter(ColorConverter.toHexRgbaString) : new color_1.ColorFormatter(ColorConverter.toHexRgbString);
          var value = new input_value_1.InputValue(color);
          return new input_binding_1.InputBindingController(document2, {
            binding: new input_1.InputBinding({
              reader: ColorConverter.fromObject,
              target,
              value,
              writer: color_2.Color.toRgbaObject
            }),
            controller: new color_swatch_text_1.ColorSwatchTextInputController(document2, {
              viewModel: new view_model_1.ViewModel(),
              formatter,
              parser: StringColorParser.CompositeParser,
              supportsAlpha,
              value
            }),
            label: params.label || target.key
          });
        }
        exports3.createWithObject = createWithObject;
      },
      "./src/main/js/controller/binding-creators/input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var BooleanInputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/boolean-input.ts");
        var ColorInputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/color-input.ts");
        var NumberInputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/number-input.ts");
        var Point2dInputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/point-2d-input.ts");
        var StringInputBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/string-input.ts");
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (type_util_1.TypeUtil.isEmpty(initialValue)) {
            throw new pane_error_1.PaneError({
              context: {
                key: target.key
              },
              type: "emptyvalue"
            });
          }
          var bc = [
            BooleanInputBindingControllerCreators.create,
            ColorInputBindingControllerCreators.createWithNumber,
            ColorInputBindingControllerCreators.createWithObject,
            ColorInputBindingControllerCreators.createWithString,
            NumberInputBindingControllerCreators.create,
            StringInputBindingControllerCreators.create,
            Point2dInputBindingControllerCreators.create
          ].reduce(function(result, createBindingController) {
            return result || createBindingController(document2, target, params);
          }, null);
          if (bc) {
            return bc;
          }
          throw new pane_error_1.PaneError({
            context: {
              key: target.key
            },
            type: "nomatchingcontroller"
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/monitor.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var BooleanMonitorBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/boolean-monitor.ts");
        var NumberMonitorBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/number-monitor.ts");
        var StringMonitorBindingControllerCreators = __webpack_require__("./src/main/js/controller/binding-creators/string-monitor.ts");
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (type_util_1.TypeUtil.isEmpty(initialValue)) {
            throw new pane_error_1.PaneError({
              context: {
                key: target.key
              },
              type: "emptyvalue"
            });
          }
          var bc = [
            NumberMonitorBindingControllerCreators.create,
            StringMonitorBindingControllerCreators.create,
            BooleanMonitorBindingControllerCreators.create
          ].reduce(function(result, createBindingController) {
            return result || createBindingController(document2, target, params);
          }, null);
          if (bc) {
            return bc;
          }
          throw new pane_error_1.PaneError({
            context: {
              key: target.key
            },
            type: "nomatchingcontroller"
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/number-input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var input_1 = __webpack_require__("./src/main/js/binding/input.ts");
        var composite_1 = __webpack_require__("./src/main/js/constraint/composite.ts");
        var list_1 = __webpack_require__("./src/main/js/constraint/list.ts");
        var range_1 = __webpack_require__("./src/main/js/constraint/range.ts");
        var step_1 = __webpack_require__("./src/main/js/constraint/step.ts");
        var util_1 = __webpack_require__("./src/main/js/constraint/util.ts");
        var NumberConverter = __webpack_require__("./src/main/js/converter/number.ts");
        var number_1 = __webpack_require__("./src/main/js/formatter/number.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var input_value_1 = __webpack_require__("./src/main/js/model/input-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var string_number_1 = __webpack_require__("./src/main/js/parser/string-number.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var list_2 = __webpack_require__("./src/main/js/controller/input/list.ts");
        var number_text_1 = __webpack_require__("./src/main/js/controller/input/number-text.ts");
        var slider_text_1 = __webpack_require__("./src/main/js/controller/input/slider-text.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        function createConstraint(params) {
          var constraints = [];
          if ("step" in params && !type_util_1.TypeUtil.isEmpty(params.step)) {
            constraints.push(new step_1.StepConstraint({
              step: params.step
            }));
          }
          if ("max" in params && !type_util_1.TypeUtil.isEmpty(params.max) || "min" in params && !type_util_1.TypeUtil.isEmpty(params.min)) {
            constraints.push(new range_1.RangeConstraint({
              max: params.max,
              min: params.min
            }));
          }
          if ("options" in params && params.options !== void 0) {
            constraints.push(new list_1.ListConstraint({
              options: UiUtil.normalizeInputParamsOptions(params.options, NumberConverter.fromMixed)
            }));
          }
          return new composite_1.CompositeConstraint({
            constraints
          });
        }
        function createController(document2, value) {
          var c = value.constraint;
          if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
            return new list_2.ListInputController(document2, {
              stringifyValue: NumberConverter.toString,
              value,
              viewModel: new view_model_1.ViewModel()
            });
          }
          if (c && util_1.ConstraintUtil.findConstraint(c, range_1.RangeConstraint)) {
            return new slider_text_1.SliderTextInputController(document2, {
              formatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(value.constraint, value.rawValue)),
              parser: string_number_1.StringNumberParser,
              value,
              viewModel: new view_model_1.ViewModel()
            });
          }
          return new number_text_1.NumberTextInputController(document2, {
            formatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(value.constraint, value.rawValue)),
            parser: string_number_1.StringNumberParser,
            value,
            viewModel: new view_model_1.ViewModel()
          });
        }
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "number") {
            return null;
          }
          var value = new input_value_1.InputValue(0, createConstraint(params));
          var binding = new input_1.InputBinding({
            reader: NumberConverter.fromMixed,
            target,
            value,
            writer: function(v) {
              return v;
            }
          });
          var controller = createController(document2, value);
          return new input_binding_1.InputBindingController(document2, {
            binding,
            controller,
            label: params.label || target.key
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/number-monitor.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var monitor_1 = __webpack_require__("./src/main/js/binding/monitor.ts");
        var NumberConverter = __webpack_require__("./src/main/js/converter/number.ts");
        var number_1 = __webpack_require__("./src/main/js/formatter/number.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var monitor_value_1 = __webpack_require__("./src/main/js/model/monitor-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var monitor_binding_1 = __webpack_require__("./src/main/js/controller/monitor-binding.ts");
        var graph_1 = __webpack_require__("./src/main/js/controller/monitor/graph.ts");
        var multi_log_1 = __webpack_require__("./src/main/js/controller/monitor/multi-log.ts");
        var single_log_1 = __webpack_require__("./src/main/js/controller/monitor/single-log.ts");
        var util_1 = __webpack_require__("./src/main/js/controller/binding-creators/util.ts");
        function createFormatter() {
          return new number_1.NumberFormatter(2);
        }
        function createTextMonitor(document2, target, params) {
          var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
          var controller = value.totalCount === 1 ? new single_log_1.SingleLogMonitorController(document2, {
            formatter: createFormatter(),
            value,
            viewModel: new view_model_1.ViewModel()
          }) : new multi_log_1.MultiLogMonitorController(document2, {
            formatter: createFormatter(),
            value,
            viewModel: new view_model_1.ViewModel()
          });
          return new monitor_binding_1.MonitorBindingController(document2, {
            binding: new monitor_1.MonitorBinding({
              reader: NumberConverter.fromMixed,
              target,
              ticker: util_1.createTicker(document2, params.interval),
              value
            }),
            controller,
            label: params.label || target.key
          });
        }
        function createGraphMonitor(document2, target, params) {
          var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 64));
          var controller = new graph_1.GraphMonitorController(document2, {
            formatter: createFormatter(),
            maxValue: type_util_1.TypeUtil.getOrDefault("max" in params ? params.max : null, 100),
            minValue: type_util_1.TypeUtil.getOrDefault("min" in params ? params.min : null, 0),
            value,
            viewModel: new view_model_1.ViewModel()
          });
          return new monitor_binding_1.MonitorBindingController(document2, {
            binding: new monitor_1.MonitorBinding({
              reader: NumberConverter.fromMixed,
              target,
              ticker: util_1.createTicker(document2, params.interval),
              value
            }),
            controller,
            label: params.label || target.key
          });
        }
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "number") {
            return null;
          }
          if ("view" in params && params.view === "graph") {
            return createGraphMonitor(document2, target, params);
          }
          return createTextMonitor(document2, target, params);
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/point-2d-input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var input_1 = __webpack_require__("./src/main/js/binding/input.ts");
        var composite_1 = __webpack_require__("./src/main/js/constraint/composite.ts");
        var point_2d_1 = __webpack_require__("./src/main/js/constraint/point-2d.ts");
        var range_1 = __webpack_require__("./src/main/js/constraint/range.ts");
        var step_1 = __webpack_require__("./src/main/js/constraint/step.ts");
        var Point2dConverter = __webpack_require__("./src/main/js/converter/point-2d.ts");
        var number_1 = __webpack_require__("./src/main/js/formatter/number.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var input_value_1 = __webpack_require__("./src/main/js/model/input-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var any_point_2d_1 = __webpack_require__("./src/main/js/parser/any-point-2d.ts");
        var string_number_1 = __webpack_require__("./src/main/js/parser/string-number.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var point_2d_pad_text_1 = __webpack_require__("./src/main/js/controller/input/point-2d-pad-text.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        function createDimensionConstraint(params) {
          if (!params) {
            return void 0;
          }
          var constraints = [];
          if (!type_util_1.TypeUtil.isEmpty(params.step)) {
            constraints.push(new step_1.StepConstraint({
              step: params.step
            }));
          }
          if (!type_util_1.TypeUtil.isEmpty(params.max) || !type_util_1.TypeUtil.isEmpty(params.min)) {
            constraints.push(new range_1.RangeConstraint({
              max: params.max,
              min: params.min
            }));
          }
          return new composite_1.CompositeConstraint({
            constraints
          });
        }
        function createConstraint(params) {
          return new point_2d_1.Point2dConstraint({
            x: createDimensionConstraint("x" in params ? params.x : void 0),
            y: createDimensionConstraint("y" in params ? params.y : void 0)
          });
        }
        function createController(document2, value, invertsY) {
          var c = value.constraint;
          if (!(c instanceof point_2d_1.Point2dConstraint)) {
            throw pane_error_1.PaneError.shouldNeverHappen();
          }
          return new point_2d_pad_text_1.Point2dPadTextInputController(document2, {
            invertsY,
            parser: string_number_1.StringNumberParser,
            value,
            viewModel: new view_model_1.ViewModel(),
            xFormatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(c.xConstraint, value.rawValue.x)),
            yFormatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(c.yConstraint, value.rawValue.y))
          });
        }
        function create7(document2, target, params) {
          var initialValue = target.read();
          var p = any_point_2d_1.AnyPoint2dParser(initialValue);
          if (!p) {
            return null;
          }
          var value = new input_value_1.InputValue(p, createConstraint(params));
          var binding = new input_1.InputBinding({
            reader: Point2dConverter.fromMixed,
            target,
            value,
            writer: function(v) {
              return v.toObject();
            }
          });
          var yParams = "y" in params ? params.y : void 0;
          var invertsY = yParams ? !!yParams.inverted : false;
          var controller = createController(document2, value, invertsY);
          return new input_binding_1.InputBindingController(document2, {
            binding,
            controller,
            label: params.label || target.key
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/string-input.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var input_1 = __webpack_require__("./src/main/js/binding/input.ts");
        var composite_1 = __webpack_require__("./src/main/js/constraint/composite.ts");
        var list_1 = __webpack_require__("./src/main/js/constraint/list.ts");
        var util_1 = __webpack_require__("./src/main/js/constraint/util.ts");
        var StringConverter = __webpack_require__("./src/main/js/converter/string.ts");
        var string_1 = __webpack_require__("./src/main/js/formatter/string.ts");
        var input_value_1 = __webpack_require__("./src/main/js/model/input-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var list_2 = __webpack_require__("./src/main/js/controller/input/list.ts");
        var text_1 = __webpack_require__("./src/main/js/controller/input/text.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        function createConstraint(params) {
          var constraints = [];
          if ("options" in params && params.options !== void 0) {
            constraints.push(new list_1.ListConstraint({
              options: UiUtil.normalizeInputParamsOptions(params.options, StringConverter.fromMixed)
            }));
          }
          return new composite_1.CompositeConstraint({
            constraints
          });
        }
        function createController(document2, value) {
          var c = value.constraint;
          if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
            return new list_2.ListInputController(document2, {
              stringifyValue: StringConverter.toString,
              value,
              viewModel: new view_model_1.ViewModel()
            });
          }
          return new text_1.TextInputController(document2, {
            formatter: new string_1.StringFormatter(),
            parser: StringConverter.toString,
            value,
            viewModel: new view_model_1.ViewModel()
          });
        }
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "string") {
            return null;
          }
          var value = new input_value_1.InputValue("", createConstraint(params));
          var binding = new input_1.InputBinding({
            reader: StringConverter.fromMixed,
            target,
            value,
            writer: function(v) {
              return v;
            }
          });
          var controller = createController(document2, value);
          return new input_binding_1.InputBindingController(document2, {
            binding,
            controller,
            label: params.label || target.key
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/string-monitor.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.create = void 0;
        var monitor_1 = __webpack_require__("./src/main/js/binding/monitor.ts");
        var StringConverter = __webpack_require__("./src/main/js/converter/string.ts");
        var string_1 = __webpack_require__("./src/main/js/formatter/string.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var monitor_value_1 = __webpack_require__("./src/main/js/model/monitor-value.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        var monitor_binding_1 = __webpack_require__("./src/main/js/controller/monitor-binding.ts");
        var multi_log_1 = __webpack_require__("./src/main/js/controller/monitor/multi-log.ts");
        var single_log_1 = __webpack_require__("./src/main/js/controller/monitor/single-log.ts");
        var util_1 = __webpack_require__("./src/main/js/controller/binding-creators/util.ts");
        function create7(document2, target, params) {
          var initialValue = target.read();
          if (typeof initialValue !== "string") {
            return null;
          }
          var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
          var multiline = value.totalCount > 1 || "multiline" in params && params.multiline;
          var controller = multiline ? new multi_log_1.MultiLogMonitorController(document2, {
            formatter: new string_1.StringFormatter(),
            value,
            viewModel: new view_model_1.ViewModel()
          }) : new single_log_1.SingleLogMonitorController(document2, {
            formatter: new string_1.StringFormatter(),
            value,
            viewModel: new view_model_1.ViewModel()
          });
          return new monitor_binding_1.MonitorBindingController(document2, {
            binding: new monitor_1.MonitorBinding({
              reader: StringConverter.fromMixed,
              target,
              ticker: util_1.createTicker(document2, params.interval),
              value
            }),
            controller,
            label: params.label || target.key
          });
        }
        exports3.create = create7;
      },
      "./src/main/js/controller/binding-creators/util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.createTicker = void 0;
        var constants_1 = __webpack_require__("./src/main/js/misc/constants.ts");
        var interval_1 = __webpack_require__("./src/main/js/misc/ticker/interval.ts");
        var manual_1 = __webpack_require__("./src/main/js/misc/ticker/manual.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        function createTicker(document2, interval) {
          return interval === 0 ? new manual_1.ManualTicker() : new interval_1.IntervalTicker(document2, type_util_1.TypeUtil.getOrDefault(interval, constants_1.Constants.monitorDefaultInterval));
        }
        exports3.createTicker = createTicker;
      },
      "./src/main/js/controller/button.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ButtonController = void 0;
        var button_1 = __webpack_require__("./src/main/js/model/button.ts");
        var button_2 = __webpack_require__("./src/main/js/view/button.ts");
        var ButtonController = function() {
          function ButtonController2(document2, config) {
            this.onButtonClick_ = this.onButtonClick_.bind(this);
            this.button = new button_1.Button(config.title);
            this.viewModel = config.viewModel;
            this.view = new button_2.ButtonView(document2, {
              button: this.button,
              model: this.viewModel
            });
            this.view.buttonElement.addEventListener("click", this.onButtonClick_);
          }
          ButtonController2.prototype.onButtonClick_ = function() {
            this.button.click();
          };
          return ButtonController2;
        }();
        exports3.ButtonController = ButtonController;
      },
      "./src/main/js/controller/container-util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.computeExpandedFolderHeight = exports3.updateAllItemsPositions = void 0;
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        function updateAllItemsPositions(uiContainer) {
          var visibleItems = uiContainer.items.filter(function(uc) {
            return !uc.viewModel.hidden;
          });
          var firstVisibleItem = visibleItems[0];
          var lastVisibleItem = visibleItems[visibleItems.length - 1];
          uiContainer.items.forEach(function(uc) {
            var ps = [];
            if (uc === firstVisibleItem) {
              ps.push("first");
            }
            if (uc === lastVisibleItem) {
              ps.push("last");
            }
            uc.viewModel.positions = ps;
          });
        }
        exports3.updateAllItemsPositions = updateAllItemsPositions;
        function computeExpandedFolderHeight(folder, containerElement) {
          var height = 0;
          DomUtil.disableTransitionTemporarily(containerElement, function() {
            folder.expandedHeight = null;
            folder.temporaryExpanded = true;
            DomUtil.forceReflow(containerElement);
            height = containerElement.clientHeight;
            folder.temporaryExpanded = null;
            DomUtil.forceReflow(containerElement);
          });
          return height;
        }
        exports3.computeExpandedFolderHeight = computeExpandedFolderHeight;
      },
      "./src/main/js/controller/folder.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.FolderController = void 0;
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var folder_1 = __webpack_require__("./src/main/js/model/folder.ts");
        var ui_container_1 = __webpack_require__("./src/main/js/model/ui-container.ts");
        var folder_2 = __webpack_require__("./src/main/js/view/folder.ts");
        var ContainerUtil = __webpack_require__("./src/main/js/controller/container-util.ts");
        var FolderController = function() {
          function FolderController2(document2, config) {
            this.onContainerTransitionEnd_ = this.onContainerTransitionEnd_.bind(this);
            this.onFolderBeforeChange_ = this.onFolderBeforeChange_.bind(this);
            this.onTitleClick_ = this.onTitleClick_.bind(this);
            this.onUiContainerAdd_ = this.onUiContainerAdd_.bind(this);
            this.onUiContainerItemLayout_ = this.onUiContainerItemLayout_.bind(this);
            this.onUiContainerRemove_ = this.onUiContainerRemove_.bind(this);
            this.viewModel = config.viewModel;
            this.folder = new folder_1.Folder(config.title, type_util_1.TypeUtil.getOrDefault(config.expanded, true));
            this.folder.emitter.on("beforechange", this.onFolderBeforeChange_);
            this.ucList_ = new ui_container_1.UiContainer();
            this.ucList_.emitter.on("add", this.onUiContainerAdd_);
            this.ucList_.emitter.on("itemlayout", this.onUiContainerItemLayout_);
            this.ucList_.emitter.on("remove", this.onUiContainerRemove_);
            this.doc_ = document2;
            this.view = new folder_2.FolderView(this.doc_, {
              folder: this.folder,
              model: this.viewModel
            });
            this.view.titleElement.addEventListener("click", this.onTitleClick_);
            this.view.containerElement.addEventListener("transitionend", this.onContainerTransitionEnd_);
          }
          Object.defineProperty(FolderController2.prototype, "document", {
            get: function() {
              return this.doc_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FolderController2.prototype, "uiContainer", {
            get: function() {
              return this.ucList_;
            },
            enumerable: false,
            configurable: true
          });
          FolderController2.prototype.onFolderBeforeChange_ = function(ev) {
            if (ev.propertyName !== "expanded") {
              return;
            }
            if (type_util_1.TypeUtil.isEmpty(this.folder.expandedHeight)) {
              this.folder.expandedHeight = ContainerUtil.computeExpandedFolderHeight(this.folder, this.view.containerElement);
            }
            this.folder.shouldFixHeight = true;
            DomUtil.forceReflow(this.view.containerElement);
          };
          FolderController2.prototype.onTitleClick_ = function() {
            this.folder.expanded = !this.folder.expanded;
          };
          FolderController2.prototype.applyUiContainerChange_ = function() {
            ContainerUtil.updateAllItemsPositions(this.uiContainer);
          };
          FolderController2.prototype.onUiContainerAdd_ = function(ev) {
            DomUtil.insertElementAt(this.view.containerElement, ev.uiController.view.element, ev.index);
            this.applyUiContainerChange_();
          };
          FolderController2.prototype.onUiContainerRemove_ = function(_) {
            this.applyUiContainerChange_();
          };
          FolderController2.prototype.onUiContainerItemLayout_ = function(_) {
            this.applyUiContainerChange_();
          };
          FolderController2.prototype.onContainerTransitionEnd_ = function(ev) {
            if (ev.propertyName !== "height") {
              return;
            }
            this.folder.shouldFixHeight = false;
            this.folder.expandedHeight = null;
          };
          return FolderController2;
        }();
        exports3.FolderController = FolderController;
      },
      "./src/main/js/controller/input-binding.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.InputBindingController = void 0;
        var labeled_1 = __webpack_require__("./src/main/js/view/labeled.ts");
        var InputBindingController = function() {
          function InputBindingController2(document2, config) {
            this.binding = config.binding;
            this.controller = config.controller;
            this.view = new labeled_1.LabeledView(document2, {
              model: this.controller.viewModel,
              label: config.label,
              view: this.controller.view
            });
          }
          Object.defineProperty(InputBindingController2.prototype, "viewModel", {
            get: function() {
              return this.controller.viewModel;
            },
            enumerable: false,
            configurable: true
          });
          return InputBindingController2;
        }();
        exports3.InputBindingController = InputBindingController;
      },
      "./src/main/js/controller/input/a-palette.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.APaletteInputController = void 0;
        var pointer_handler_1 = __webpack_require__("./src/main/js/misc/pointer-handler.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var a_palette_1 = __webpack_require__("./src/main/js/view/input/a-palette.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var APaletteInputController = function() {
          function APaletteInputController2(document2, config) {
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new a_palette_1.APaletteInputView(document2, {
              model: this.viewModel,
              value: this.value
            });
            this.ptHandler_ = new pointer_handler_1.PointerHandler(document2, this.view.element);
            this.ptHandler_.emitter.on("down", this.onPointerDown_);
            this.ptHandler_.emitter.on("move", this.onPointerMove_);
            this.ptHandler_.emitter.on("up", this.onPointerUp_);
            this.view.element.addEventListener("keydown", this.onKeyDown_);
          }
          APaletteInputController2.prototype.handlePointerEvent_ = function(d) {
            var alpha = d.px;
            var c = this.value.rawValue;
            var _a2 = c.getComponents("hsv"), h = _a2[0], s = _a2[1], v = _a2[2];
            this.value.rawValue = new color_1.Color([h, s, v, alpha], "hsv");
            this.view.update();
          };
          APaletteInputController2.prototype.onPointerDown_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          APaletteInputController2.prototype.onPointerMove_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          APaletteInputController2.prototype.onPointerUp_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          APaletteInputController2.prototype.onKeyDown_ = function(ev) {
            var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(true), UiUtil.getHorizontalStepKeys(ev));
            var c = this.value.rawValue;
            var _a2 = c.getComponents("hsv"), h = _a2[0], s = _a2[1], v = _a2[2], a = _a2[3];
            this.value.rawValue = new color_1.Color([h, s, v, a + step], "hsv");
          };
          return APaletteInputController2;
        }();
        exports3.APaletteInputController = APaletteInputController;
      },
      "./src/main/js/controller/input/checkbox.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.CheckboxInputController = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var checkbox_1 = __webpack_require__("./src/main/js/view/input/checkbox.ts");
        var CheckboxInputController = function() {
          function CheckboxInputController2(document2, config) {
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new checkbox_1.CheckboxInputView(document2, {
              model: this.viewModel,
              value: this.value
            });
            this.view.inputElement.addEventListener("change", this.onInputChange_);
          }
          CheckboxInputController2.prototype.onInputChange_ = function(e) {
            var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            this.value.rawValue = inputElem.checked;
            this.view.update();
          };
          return CheckboxInputController2;
        }();
        exports3.CheckboxInputController = CheckboxInputController;
      },
      "./src/main/js/controller/input/color-component-texts.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorComponentTextsInputController = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var color_component_texts_1 = __webpack_require__("./src/main/js/view/input/color-component-texts.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var ColorComponentTextsInputController = function() {
          function ColorComponentTextsInputController2(document2, config) {
            var _this = this;
            this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
            this.parser_ = config.parser;
            this.pickedColor = config.pickedColor;
            this.viewModel = config.viewModel;
            this.view = new color_component_texts_1.ColorComponentTextsInputView(document2, {
              model: this.viewModel,
              pickedColor: this.pickedColor
            });
            this.view.inputElements.forEach(function(inputElem) {
              inputElem.addEventListener("change", _this.onInputChange_);
              inputElem.addEventListener("keydown", _this.onInputKeyDown_);
            });
            this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
          }
          Object.defineProperty(ColorComponentTextsInputController2.prototype, "value", {
            get: function() {
              return this.pickedColor.value;
            },
            enumerable: false,
            configurable: true
          });
          ColorComponentTextsInputController2.prototype.findIndexOfInputElem_ = function(inputElem) {
            var inputElems = this.view.inputElements;
            for (var i = 0; i < inputElems.length; i++) {
              if (inputElems[i] === inputElem) {
                return i;
              }
            }
            return null;
          };
          ColorComponentTextsInputController2.prototype.updateComponent_ = function(index, newValue) {
            var mode = this.pickedColor.mode;
            var comps = this.value.rawValue.getComponents(mode);
            var newComps = comps.map(function(comp, i) {
              return i === index ? newValue : comp;
            });
            this.value.rawValue = new color_1.Color(newComps, mode);
            this.view.update();
          };
          ColorComponentTextsInputController2.prototype.onInputChange_ = function(e) {
            var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            var parsedValue = this.parser_(inputElem.value);
            if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
            }
            var compIndex = this.findIndexOfInputElem_(inputElem);
            if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
            }
            this.updateComponent_(compIndex, parsedValue);
          };
          ColorComponentTextsInputController2.prototype.onInputKeyDown_ = function(e) {
            var compIndex = this.findIndexOfInputElem_(e.currentTarget);
            var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(compIndex === 3), UiUtil.getVerticalStepKeys(e));
            if (step === 0) {
              return;
            }
            var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            var parsedValue = this.parser_(inputElem.value);
            if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
            }
            if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
            }
            this.updateComponent_(compIndex, parsedValue + step);
          };
          ColorComponentTextsInputController2.prototype.onModeSelectChange_ = function(ev) {
            var selectElem = ev.currentTarget;
            this.pickedColor.mode = selectElem.value;
          };
          return ColorComponentTextsInputController2;
        }();
        exports3.ColorComponentTextsInputController = ColorComponentTextsInputController;
      },
      "./src/main/js/controller/input/color-picker.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorPickerInputController = void 0;
        var number_1 = __webpack_require__("./src/main/js/formatter/number.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var foldable_1 = __webpack_require__("./src/main/js/model/foldable.ts");
        var input_value_1 = __webpack_require__("./src/main/js/model/input-value.ts");
        var ModelSync = __webpack_require__("./src/main/js/model/model-sync.ts");
        var string_number_1 = __webpack_require__("./src/main/js/parser/string-number.ts");
        var color_picker_1 = __webpack_require__("./src/main/js/view/input/color-picker.ts");
        var a_palette_1 = __webpack_require__("./src/main/js/controller/input/a-palette.ts");
        var color_component_texts_1 = __webpack_require__("./src/main/js/controller/input/color-component-texts.ts");
        var h_palette_1 = __webpack_require__("./src/main/js/controller/input/h-palette.ts");
        var number_text_1 = __webpack_require__("./src/main/js/controller/input/number-text.ts");
        var sv_palette_1 = __webpack_require__("./src/main/js/controller/input/sv-palette.ts");
        var ColorPickerInputController = function() {
          function ColorPickerInputController2(document2, config) {
            var _this = this;
            this.triggerElement = null;
            this.onFocusableElementBlur_ = this.onFocusableElementBlur_.bind(this);
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.pickedColor = config.pickedColor;
            this.foldable = new foldable_1.Foldable();
            this.viewModel = config.viewModel;
            this.hPaletteIc_ = new h_palette_1.HPaletteInputController(document2, {
              value: this.pickedColor.value,
              viewModel: this.viewModel
            });
            this.svPaletteIc_ = new sv_palette_1.SvPaletteInputController(document2, {
              value: this.pickedColor.value,
              viewModel: this.viewModel
            });
            this.alphaIcs_ = config.supportsAlpha ? {
              palette: new a_palette_1.APaletteInputController(document2, {
                value: this.pickedColor.value,
                viewModel: this.viewModel
              }),
              text: new number_text_1.NumberTextInputController(document2, {
                formatter: new number_1.NumberFormatter(2),
                parser: string_number_1.StringNumberParser,
                step: 0.1,
                value: new input_value_1.InputValue(0),
                viewModel: this.viewModel
              })
            } : null;
            if (this.alphaIcs_) {
              ModelSync.connect({
                primary: {
                  apply: function(from, to) {
                    to.rawValue = from.value.rawValue.getComponents()[3];
                  },
                  emitter: function(m) {
                    return m.value.emitter;
                  },
                  value: this.pickedColor
                },
                secondary: {
                  apply: function(from, to) {
                    var comps = to.value.rawValue.getComponents();
                    comps[3] = from.rawValue;
                    to.value.rawValue = new color_1.Color(comps, to.value.rawValue.mode);
                  },
                  emitter: function(m) {
                    return m.emitter;
                  },
                  value: this.alphaIcs_.text.value
                }
              });
            }
            this.compTextsIc_ = new color_component_texts_1.ColorComponentTextsInputController(document2, {
              parser: string_number_1.StringNumberParser,
              pickedColor: this.pickedColor,
              viewModel: this.viewModel
            });
            this.view = new color_picker_1.ColorPickerInputView(document2, {
              alphaInputViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
              } : null,
              componentTextsView: this.compTextsIc_.view,
              foldable: this.foldable,
              hPaletteInputView: this.hPaletteIc_.view,
              model: this.viewModel,
              pickedColor: this.pickedColor,
              supportsAlpha: config.supportsAlpha,
              svPaletteInputView: this.svPaletteIc_.view
            });
            this.view.element.addEventListener("keydown", this.onKeyDown_);
            this.view.allFocusableElements.forEach(function(elem) {
              elem.addEventListener("blur", _this.onFocusableElementBlur_);
            });
          }
          Object.defineProperty(ColorPickerInputController2.prototype, "value", {
            get: function() {
              return this.pickedColor.value;
            },
            enumerable: false,
            configurable: true
          });
          ColorPickerInputController2.prototype.onFocusableElementBlur_ = function(ev) {
            var elem = this.view.element;
            var nextTarget = DomUtil.findNextTarget(ev);
            if (nextTarget && elem.contains(nextTarget)) {
              return;
            }
            if (nextTarget && nextTarget === this.triggerElement && !DomUtil.supportsTouch(elem.ownerDocument)) {
              return;
            }
            this.foldable.expanded = false;
          };
          ColorPickerInputController2.prototype.onKeyDown_ = function(ev) {
            if (ev.keyCode === 27) {
              this.foldable.expanded = false;
            }
          };
          return ColorPickerInputController2;
        }();
        exports3.ColorPickerInputController = ColorPickerInputController;
      },
      "./src/main/js/controller/input/color-swatch-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorSwatchTextInputController = void 0;
        var color_swatch_text_1 = __webpack_require__("./src/main/js/view/input/color-swatch-text.ts");
        var color_swatch_1 = __webpack_require__("./src/main/js/controller/input/color-swatch.ts");
        var text_1 = __webpack_require__("./src/main/js/controller/input/text.ts");
        var ColorSwatchTextInputController = function() {
          function ColorSwatchTextInputController2(document2, config) {
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.swatchIc_ = new color_swatch_1.ColorSwatchInputController(document2, {
              supportsAlpha: config.supportsAlpha,
              value: this.value,
              viewModel: this.viewModel
            });
            this.textIc_ = new text_1.TextInputController(document2, {
              formatter: config.formatter,
              parser: config.parser,
              value: this.value,
              viewModel: this.viewModel
            });
            this.view = new color_swatch_text_1.ColorSwatchTextInputView(document2, {
              swatchInputView: this.swatchIc_.view,
              textInputView: this.textIc_.view,
              model: this.viewModel
            });
          }
          return ColorSwatchTextInputController2;
        }();
        exports3.ColorSwatchTextInputController = ColorSwatchTextInputController;
      },
      "./src/main/js/controller/input/color-swatch.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorSwatchInputController = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var picked_color_1 = __webpack_require__("./src/main/js/model/picked-color.ts");
        var color_swatch_1 = __webpack_require__("./src/main/js/view/input/color-swatch.ts");
        var color_picker_1 = __webpack_require__("./src/main/js/controller/input/color-picker.ts");
        var ColorSwatchInputController = function() {
          function ColorSwatchInputController2(document2, config) {
            this.onButtonBlur_ = this.onButtonBlur_.bind(this);
            this.onButtonClick_ = this.onButtonClick_.bind(this);
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.pickerIc_ = new color_picker_1.ColorPickerInputController(document2, {
              pickedColor: new picked_color_1.PickedColor(this.value),
              supportsAlpha: config.supportsAlpha,
              viewModel: this.viewModel
            });
            this.view = new color_swatch_1.ColorSwatchInputView(document2, {
              model: this.viewModel,
              pickerInputView: this.pickerIc_.view,
              value: this.value
            });
            this.view.buttonElement.addEventListener("blur", this.onButtonBlur_);
            this.view.buttonElement.addEventListener("click", this.onButtonClick_);
            this.pickerIc_.triggerElement = this.view.buttonElement;
          }
          ColorSwatchInputController2.prototype.onButtonBlur_ = function(e) {
            var elem = this.view.element;
            var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
            if (!nextTarget || !elem.contains(nextTarget)) {
              this.pickerIc_.foldable.expanded = false;
            }
          };
          ColorSwatchInputController2.prototype.onButtonClick_ = function() {
            this.pickerIc_.foldable.expanded = !this.pickerIc_.foldable.expanded;
            if (this.pickerIc_.foldable.expanded) {
              this.pickerIc_.view.allFocusableElements[0].focus();
            }
          };
          return ColorSwatchInputController2;
        }();
        exports3.ColorSwatchInputController = ColorSwatchInputController;
      },
      "./src/main/js/controller/input/h-palette.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.HPaletteInputController = void 0;
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pointer_handler_1 = __webpack_require__("./src/main/js/misc/pointer-handler.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var h_palette_1 = __webpack_require__("./src/main/js/view/input/h-palette.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var HPaletteInputController = function() {
          function HPaletteInputController2(document2, config) {
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new h_palette_1.HPaletteInputView(document2, {
              model: this.viewModel,
              value: this.value
            });
            this.ptHandler_ = new pointer_handler_1.PointerHandler(document2, this.view.element);
            this.ptHandler_.emitter.on("down", this.onPointerDown_);
            this.ptHandler_.emitter.on("move", this.onPointerMove_);
            this.ptHandler_.emitter.on("up", this.onPointerUp_);
            this.view.element.addEventListener("keydown", this.onKeyDown_);
          }
          HPaletteInputController2.prototype.handlePointerEvent_ = function(d) {
            var hue = number_util_1.NumberUtil.map(d.px, 0, 1, 0, 360);
            var c = this.value.rawValue;
            var _a2 = c.getComponents("hsv"), s = _a2[1], v = _a2[2], a = _a2[3];
            this.value.rawValue = new color_1.Color([hue, s, v, a], "hsv");
            this.view.update();
          };
          HPaletteInputController2.prototype.onPointerDown_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          HPaletteInputController2.prototype.onPointerMove_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          HPaletteInputController2.prototype.onPointerUp_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          HPaletteInputController2.prototype.onKeyDown_ = function(ev) {
            var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(false), UiUtil.getHorizontalStepKeys(ev));
            var c = this.value.rawValue;
            var _a2 = c.getComponents("hsv"), h = _a2[0], s = _a2[1], v = _a2[2], a = _a2[3];
            this.value.rawValue = new color_1.Color([h + step, s, v, a], "hsv");
          };
          return HPaletteInputController2;
        }();
        exports3.HPaletteInputController = HPaletteInputController;
      },
      "./src/main/js/controller/input/list.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ListInputController = void 0;
        var list_1 = __webpack_require__("./src/main/js/constraint/list.ts");
        var util_1 = __webpack_require__("./src/main/js/constraint/util.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var list_2 = __webpack_require__("./src/main/js/view/input/list.ts");
        function findListItems(value) {
          var c = value.constraint ? util_1.ConstraintUtil.findConstraint(value.constraint, list_1.ListConstraint) : null;
          if (!c) {
            return null;
          }
          return c.options;
        }
        var ListInputController = function() {
          function ListInputController2(document2, config) {
            this.onSelectChange_ = this.onSelectChange_.bind(this);
            this.value_ = config.value;
            this.listItems_ = findListItems(this.value_) || [];
            this.viewModel = config.viewModel;
            this.view_ = new list_2.ListInputView(document2, {
              model: this.viewModel,
              options: this.listItems_,
              stringifyValue: config.stringifyValue,
              value: this.value_
            });
            this.view_.selectElement.addEventListener("change", this.onSelectChange_);
          }
          Object.defineProperty(ListInputController2.prototype, "value", {
            get: function() {
              return this.value_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(ListInputController2.prototype, "view", {
            get: function() {
              return this.view_;
            },
            enumerable: false,
            configurable: true
          });
          ListInputController2.prototype.onSelectChange_ = function(e) {
            var selectElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            var optElem = selectElem.selectedOptions.item(0);
            if (!optElem) {
              return;
            }
            var itemIndex = Number(optElem.dataset.index);
            this.value_.rawValue = this.listItems_[itemIndex].value;
            this.view_.update();
          };
          return ListInputController2;
        }();
        exports3.ListInputController = ListInputController;
      },
      "./src/main/js/controller/input/number-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.NumberTextInputController = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var text_1 = __webpack_require__("./src/main/js/controller/input/text.ts");
        var NumberTextInputController = function(_super) {
          __extends(NumberTextInputController2, _super);
          function NumberTextInputController2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onInputKeyDown_ = _this.onInputKeyDown_.bind(_this);
            _this.step_ = type_util_1.TypeUtil.getOrDefault(config.step, UiUtil.getStepForTextInput(_this.value.constraint));
            _this.view.inputElement.addEventListener("keydown", _this.onInputKeyDown_);
            return _this;
          }
          NumberTextInputController2.prototype.onInputKeyDown_ = function(e) {
            var step = UiUtil.getStepForKey(this.step_, UiUtil.getVerticalStepKeys(e));
            if (step !== 0) {
              this.value.rawValue += step;
              this.view.update();
            }
          };
          return NumberTextInputController2;
        }(text_1.TextInputController);
        exports3.NumberTextInputController = NumberTextInputController;
      },
      "./src/main/js/controller/input/point-2d-pad-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dPadTextInputController = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var point_2d_pad_text_1 = __webpack_require__("./src/main/js/view/input/point-2d-pad-text.ts");
        var point_2d_pad_1 = __webpack_require__("./src/main/js/controller/input/point-2d-pad.ts");
        var point_2d_text_1 = __webpack_require__("./src/main/js/controller/input/point-2d-text.ts");
        var Point2dPadTextInputController = function() {
          function Point2dPadTextInputController2(document2, config) {
            this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
            this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.padIc_ = new point_2d_pad_1.Point2dPadInputController(document2, {
              invertsY: config.invertsY,
              value: this.value,
              viewModel: this.viewModel
            });
            this.textIc_ = new point_2d_text_1.Point2dTextInputController(document2, {
              parser: config.parser,
              value: this.value,
              viewModel: this.viewModel,
              xFormatter: config.xFormatter,
              yFormatter: config.yFormatter
            });
            this.view = new point_2d_pad_text_1.Point2dPadTextInputView(document2, {
              model: this.viewModel,
              padInputView: this.padIc_.view,
              textInputView: this.textIc_.view
            });
            this.view.padButtonElement.addEventListener("blur", this.onPadButtonBlur_);
            this.view.padButtonElement.addEventListener("click", this.onPadButtonClick_);
            this.padIc_.triggerElement = this.view.padButtonElement;
          }
          Point2dPadTextInputController2.prototype.onPadButtonBlur_ = function(e) {
            var elem = this.view.element;
            var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
            if (!nextTarget || !elem.contains(nextTarget)) {
              this.padIc_.foldable.expanded = false;
            }
          };
          Point2dPadTextInputController2.prototype.onPadButtonClick_ = function() {
            this.padIc_.foldable.expanded = !this.padIc_.foldable.expanded;
            if (this.padIc_.foldable.expanded) {
              this.padIc_.view.allFocusableElements[0].focus();
            }
          };
          return Point2dPadTextInputController2;
        }();
        exports3.Point2dPadTextInputController = Point2dPadTextInputController;
      },
      "./src/main/js/controller/input/point-2d-pad.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dPadInputController = void 0;
        var point_2d_1 = __webpack_require__("./src/main/js/constraint/point-2d.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pointer_handler_1 = __webpack_require__("./src/main/js/misc/pointer-handler.ts");
        var foldable_1 = __webpack_require__("./src/main/js/model/foldable.ts");
        var point_2d_2 = __webpack_require__("./src/main/js/model/point-2d.ts");
        var point_2d_pad_1 = __webpack_require__("./src/main/js/view/input/point-2d-pad.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var Point2dPadInputController = function() {
          function Point2dPadInputController2(document2, config) {
            var _this = this;
            this.triggerElement = null;
            this.onFocusableElementBlur_ = this.onFocusableElementBlur_.bind(this);
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config.value;
            this.foldable = new foldable_1.Foldable();
            this.maxValue_ = UiUtil.getSuitableMaxValueForPoint2dPad(this.value.constraint, this.value.rawValue);
            this.invertsY_ = config.invertsY;
            var c = this.value.constraint;
            this.xStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.xConstraint : void 0);
            this.yStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.yConstraint : void 0);
            this.viewModel = config.viewModel;
            this.view = new point_2d_pad_1.Point2dPadInputView(document2, {
              foldable: this.foldable,
              invertsY: this.invertsY_,
              maxValue: this.maxValue_,
              model: this.viewModel,
              value: this.value
            });
            this.ptHandler_ = new pointer_handler_1.PointerHandler(document2, this.view.padElement);
            this.ptHandler_.emitter.on("down", this.onPointerDown_);
            this.ptHandler_.emitter.on("move", this.onPointerMove_);
            this.ptHandler_.emitter.on("up", this.onPointerUp_);
            this.view.padElement.addEventListener("keydown", this.onPadKeyDown_);
            this.view.element.addEventListener("keydown", this.onKeyDown_);
            this.view.allFocusableElements.forEach(function(elem) {
              elem.addEventListener("blur", _this.onFocusableElementBlur_);
            });
          }
          Point2dPadInputController2.prototype.handlePointerEvent_ = function(d) {
            var max4 = this.maxValue_;
            var px = number_util_1.NumberUtil.map(d.px, 0, 1, -max4, +max4);
            var py = number_util_1.NumberUtil.map(this.invertsY_ ? 1 - d.py : d.py, 0, 1, -max4, +max4);
            this.value.rawValue = new point_2d_2.Point2d(px, py);
            this.view.update();
          };
          Point2dPadInputController2.prototype.onPointerDown_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          Point2dPadInputController2.prototype.onPointerMove_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          Point2dPadInputController2.prototype.onPointerUp_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          Point2dPadInputController2.prototype.onPadKeyDown_ = function(ev) {
            if (UiUtil.isArrowKey(ev.keyCode)) {
              ev.preventDefault();
            }
            this.value.rawValue = new point_2d_2.Point2d(this.value.rawValue.x + UiUtil.getStepForKey(this.xStep_, UiUtil.getHorizontalStepKeys(ev)), this.value.rawValue.y + UiUtil.getStepForKey(this.yStep_, UiUtil.getVerticalStepKeys(ev)) * (this.invertsY_ ? 1 : -1));
          };
          Point2dPadInputController2.prototype.onFocusableElementBlur_ = function(ev) {
            var elem = this.view.element;
            var nextTarget = DomUtil.findNextTarget(ev);
            if (nextTarget && elem.contains(nextTarget)) {
              return;
            }
            if (nextTarget && nextTarget === this.triggerElement && !DomUtil.supportsTouch(elem.ownerDocument)) {
              return;
            }
            this.foldable.expanded = false;
          };
          Point2dPadInputController2.prototype.onKeyDown_ = function(ev) {
            if (ev.keyCode === 27) {
              this.foldable.expanded = false;
            }
          };
          return Point2dPadInputController2;
        }();
        exports3.Point2dPadInputController = Point2dPadInputController;
      },
      "./src/main/js/controller/input/point-2d-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dTextInputController = void 0;
        var point_2d_1 = __webpack_require__("./src/main/js/constraint/point-2d.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var point_2d_2 = __webpack_require__("./src/main/js/model/point-2d.ts");
        var point_2d_text_1 = __webpack_require__("./src/main/js/view/input/point-2d-text.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var Point2dTextInputController = function() {
          function Point2dTextInputController2(document2, config) {
            var _this = this;
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
            this.parser_ = config.parser;
            this.value = config.value;
            var c = this.value.constraint;
            this.xStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.xConstraint : void 0);
            this.yStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.yConstraint : void 0);
            this.viewModel = config.viewModel;
            this.view = new point_2d_text_1.Point2dTextInputView(document2, {
              model: this.viewModel,
              value: this.value,
              xFormatter: config.xFormatter,
              yFormatter: config.yFormatter
            });
            this.view.inputElements.forEach(function(inputElem) {
              inputElem.addEventListener("change", _this.onInputChange_);
              inputElem.addEventListener("keydown", _this.onInputKeyDown_);
            });
          }
          Point2dTextInputController2.prototype.findIndexOfInputElem_ = function(inputElem) {
            var inputElems = this.view.inputElements;
            for (var i = 0; i < inputElems.length; i++) {
              if (inputElems[i] === inputElem) {
                return i;
              }
            }
            return null;
          };
          Point2dTextInputController2.prototype.updateComponent_ = function(index, newValue) {
            var comps = this.value.rawValue.getComponents();
            var newComps = comps.map(function(comp, i) {
              return i === index ? newValue : comp;
            });
            this.value.rawValue = new point_2d_2.Point2d(newComps[0], newComps[1]);
            this.view.update();
          };
          Point2dTextInputController2.prototype.onInputChange_ = function(e) {
            var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            var parsedValue = this.parser_(inputElem.value);
            if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
            }
            var compIndex = this.findIndexOfInputElem_(inputElem);
            if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
            }
            this.updateComponent_(compIndex, parsedValue);
          };
          Point2dTextInputController2.prototype.onInputKeyDown_ = function(e) {
            var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            var parsedValue = this.parser_(inputElem.value);
            if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
            }
            var compIndex = this.findIndexOfInputElem_(inputElem);
            if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
            }
            var step = UiUtil.getStepForKey(compIndex === 0 ? this.xStep_ : this.yStep_, UiUtil.getVerticalStepKeys(e));
            if (step === 0) {
              return;
            }
            this.updateComponent_(compIndex, parsedValue + step);
          };
          return Point2dTextInputController2;
        }();
        exports3.Point2dTextInputController = Point2dTextInputController;
      },
      "./src/main/js/controller/input/slider-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SliderTextInputController = void 0;
        var slider_text_1 = __webpack_require__("./src/main/js/view/input/slider-text.ts");
        var number_text_1 = __webpack_require__("./src/main/js/controller/input/number-text.ts");
        var slider_1 = __webpack_require__("./src/main/js/controller/input/slider.ts");
        var SliderTextInputController = function() {
          function SliderTextInputController2(document2, config) {
            this.value_ = config.value;
            this.viewModel = config.viewModel;
            this.sliderIc_ = new slider_1.SliderInputController(document2, {
              value: config.value,
              viewModel: this.viewModel
            });
            this.textIc_ = new number_text_1.NumberTextInputController(document2, {
              formatter: config.formatter,
              parser: config.parser,
              value: config.value,
              viewModel: this.viewModel
            });
            this.view_ = new slider_text_1.SliderTextInputView(document2, {
              model: this.viewModel,
              sliderInputView: this.sliderIc_.view,
              textInputView: this.textIc_.view
            });
          }
          Object.defineProperty(SliderTextInputController2.prototype, "value", {
            get: function() {
              return this.value_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(SliderTextInputController2.prototype, "view", {
            get: function() {
              return this.view_;
            },
            enumerable: false,
            configurable: true
          });
          return SliderTextInputController2;
        }();
        exports3.SliderTextInputController = SliderTextInputController;
      },
      "./src/main/js/controller/input/slider.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SliderInputController = void 0;
        var range_1 = __webpack_require__("./src/main/js/constraint/range.ts");
        var util_1 = __webpack_require__("./src/main/js/constraint/util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pointer_handler_1 = __webpack_require__("./src/main/js/misc/pointer-handler.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var slider_1 = __webpack_require__("./src/main/js/view/input/slider.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        function findRange(value) {
          var c = value.constraint ? util_1.ConstraintUtil.findConstraint(value.constraint, range_1.RangeConstraint) : null;
          if (!c) {
            return [void 0, void 0];
          }
          return [c.minValue, c.maxValue];
        }
        function estimateSuitableRange(value) {
          var _a2 = findRange(value), min4 = _a2[0], max4 = _a2[1];
          return [
            type_util_1.TypeUtil.getOrDefault(min4, 0),
            type_util_1.TypeUtil.getOrDefault(max4, 100)
          ];
        }
        var SliderInputController = function() {
          function SliderInputController2(document2, config) {
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config.value;
            this.step_ = UiUtil.getStepForTextInput(this.value.constraint);
            var _a2 = estimateSuitableRange(this.value), min4 = _a2[0], max4 = _a2[1];
            this.minValue_ = min4;
            this.maxValue_ = max4;
            this.viewModel = config.viewModel;
            this.view = new slider_1.SliderInputView(document2, {
              maxValue: this.maxValue_,
              minValue: this.minValue_,
              model: this.viewModel,
              value: this.value
            });
            this.ptHandler_ = new pointer_handler_1.PointerHandler(document2, this.view.outerElement);
            this.ptHandler_.emitter.on("down", this.onPointerDown_);
            this.ptHandler_.emitter.on("move", this.onPointerMove_);
            this.ptHandler_.emitter.on("up", this.onPointerUp_);
            this.view.outerElement.addEventListener("keydown", this.onKeyDown_);
          }
          SliderInputController2.prototype.handlePointerEvent_ = function(d) {
            this.value.rawValue = number_util_1.NumberUtil.map(d.px, 0, 1, this.minValue_, this.maxValue_);
          };
          SliderInputController2.prototype.onPointerDown_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          SliderInputController2.prototype.onPointerMove_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          SliderInputController2.prototype.onPointerUp_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          SliderInputController2.prototype.onKeyDown_ = function(ev) {
            this.value.rawValue += UiUtil.getStepForKey(this.step_, UiUtil.getHorizontalStepKeys(ev));
          };
          return SliderInputController2;
        }();
        exports3.SliderInputController = SliderInputController;
      },
      "./src/main/js/controller/input/sv-palette.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SvPaletteInputController = void 0;
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pointer_handler_1 = __webpack_require__("./src/main/js/misc/pointer-handler.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var sv_palette_1 = __webpack_require__("./src/main/js/view/input/sv-palette.ts");
        var UiUtil = __webpack_require__("./src/main/js/controller/ui-util.ts");
        var SvPaletteInputController = function() {
          function SvPaletteInputController2(document2, config) {
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new sv_palette_1.SvPaletteInputView(document2, {
              model: this.viewModel,
              value: this.value
            });
            this.ptHandler_ = new pointer_handler_1.PointerHandler(document2, this.view.element);
            this.ptHandler_.emitter.on("down", this.onPointerDown_);
            this.ptHandler_.emitter.on("move", this.onPointerMove_);
            this.ptHandler_.emitter.on("up", this.onPointerUp_);
            this.view.element.addEventListener("keydown", this.onKeyDown_);
          }
          SvPaletteInputController2.prototype.handlePointerEvent_ = function(d) {
            var saturation = number_util_1.NumberUtil.map(d.px, 0, 1, 0, 100);
            var value = number_util_1.NumberUtil.map(d.py, 0, 1, 100, 0);
            var _a2 = this.value.rawValue.getComponents("hsv"), h = _a2[0], a = _a2[3];
            this.value.rawValue = new color_1.Color([h, saturation, value, a], "hsv");
            this.view.update();
          };
          SvPaletteInputController2.prototype.onPointerDown_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          SvPaletteInputController2.prototype.onPointerMove_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          SvPaletteInputController2.prototype.onPointerUp_ = function(ev) {
            this.handlePointerEvent_(ev.data);
          };
          SvPaletteInputController2.prototype.onKeyDown_ = function(ev) {
            if (UiUtil.isArrowKey(ev.keyCode)) {
              ev.preventDefault();
            }
            var _a2 = this.value.rawValue.getComponents("hsv"), h = _a2[0], s = _a2[1], v = _a2[2], a = _a2[3];
            var baseStep = UiUtil.getBaseStepForColor(false);
            this.value.rawValue = new color_1.Color([
              h,
              s + UiUtil.getStepForKey(baseStep, UiUtil.getHorizontalStepKeys(ev)),
              v + UiUtil.getStepForKey(baseStep, UiUtil.getVerticalStepKeys(ev)),
              a
            ], "hsv");
          };
          return SvPaletteInputController2;
        }();
        exports3.SvPaletteInputController = SvPaletteInputController;
      },
      "./src/main/js/controller/input/text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.TextInputController = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var text_1 = __webpack_require__("./src/main/js/view/input/text.ts");
        var TextInputController = function() {
          function TextInputController2(document2, config) {
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.parser_ = config.parser;
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new text_1.TextInputView(document2, {
              formatter: config.formatter,
              model: this.viewModel,
              value: this.value
            });
            this.view.inputElement.addEventListener("change", this.onInputChange_);
          }
          TextInputController2.prototype.onInputChange_ = function(e) {
            var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
            var value = inputElem.value;
            var parsedValue = this.parser_(value);
            if (!type_util_1.TypeUtil.isEmpty(parsedValue)) {
              this.value.rawValue = parsedValue;
            }
            this.view.update();
          };
          return TextInputController2;
        }();
        exports3.TextInputController = TextInputController;
      },
      "./src/main/js/controller/monitor-binding.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.MonitorBindingController = void 0;
        var labeled_1 = __webpack_require__("./src/main/js/view/labeled.ts");
        var MonitorBindingController = function() {
          function MonitorBindingController2(document2, config) {
            var _this = this;
            this.binding = config.binding;
            this.controller = config.controller;
            this.view = new labeled_1.LabeledView(document2, {
              label: config.label,
              model: this.viewModel,
              view: this.controller.view
            });
            this.viewModel.emitter.on("dispose", function() {
              _this.binding.dispose();
            });
          }
          Object.defineProperty(MonitorBindingController2.prototype, "viewModel", {
            get: function() {
              return this.controller.viewModel;
            },
            enumerable: false,
            configurable: true
          });
          return MonitorBindingController2;
        }();
        exports3.MonitorBindingController = MonitorBindingController;
      },
      "./src/main/js/controller/monitor/graph.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.GraphMonitorController = void 0;
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var graph_cursor_1 = __webpack_require__("./src/main/js/model/graph-cursor.ts");
        var graph_1 = __webpack_require__("./src/main/js/view/monitor/graph.ts");
        var GraphMonitorController = function() {
          function GraphMonitorController2(document2, config) {
            this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
            this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
            this.value = config.value;
            this.cursor_ = new graph_cursor_1.GraphCursor();
            this.viewModel = config.viewModel;
            this.view = new graph_1.GraphMonitorView(document2, {
              cursor: this.cursor_,
              formatter: config.formatter,
              maxValue: config.maxValue,
              minValue: config.minValue,
              model: this.viewModel,
              value: this.value
            });
            this.view.graphElement.addEventListener("mouseleave", this.onGraphMouseLeave_);
            this.view.graphElement.addEventListener("mousemove", this.onGraphMouseMove_);
          }
          GraphMonitorController2.prototype.onGraphMouseLeave_ = function() {
            this.cursor_.index = -1;
          };
          GraphMonitorController2.prototype.onGraphMouseMove_ = function(e) {
            var bounds = this.view.graphElement.getBoundingClientRect();
            var x = e.offsetX;
            this.cursor_.index = Math.floor(number_util_1.NumberUtil.map(x, 0, bounds.width, 0, this.value.totalCount));
          };
          return GraphMonitorController2;
        }();
        exports3.GraphMonitorController = GraphMonitorController;
      },
      "./src/main/js/controller/monitor/multi-log.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.MultiLogMonitorController = void 0;
        var multi_log_1 = __webpack_require__("./src/main/js/view/monitor/multi-log.ts");
        var MultiLogMonitorController = function() {
          function MultiLogMonitorController2(document2, config) {
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new multi_log_1.MultiLogMonitorView(document2, {
              formatter: config.formatter,
              model: this.viewModel,
              value: this.value
            });
          }
          return MultiLogMonitorController2;
        }();
        exports3.MultiLogMonitorController = MultiLogMonitorController;
      },
      "./src/main/js/controller/monitor/single-log.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SingleLogMonitorController = void 0;
        var single_log_1 = __webpack_require__("./src/main/js/view/monitor/single-log.ts");
        var SingleLogMonitorController = function() {
          function SingleLogMonitorController2(document2, config) {
            this.value = config.value;
            this.viewModel = config.viewModel;
            this.view = new single_log_1.SingleLogMonitorView(document2, {
              formatter: config.formatter,
              model: this.viewModel,
              value: this.value
            });
          }
          return SingleLogMonitorController2;
        }();
        exports3.SingleLogMonitorController = SingleLogMonitorController;
      },
      "./src/main/js/controller/root.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.RootController = void 0;
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var folder_1 = __webpack_require__("./src/main/js/model/folder.ts");
        var ui_container_1 = __webpack_require__("./src/main/js/model/ui-container.ts");
        var root_1 = __webpack_require__("./src/main/js/view/root.ts");
        var ContainerUtil = __webpack_require__("./src/main/js/controller/container-util.ts");
        function createFolder(config) {
          if (!config.title) {
            return null;
          }
          return new folder_1.Folder(config.title, type_util_1.TypeUtil.getOrDefault(config.expanded, true));
        }
        var RootController = function() {
          function RootController2(document2, config) {
            this.onContainerTransitionEnd_ = this.onContainerTransitionEnd_.bind(this);
            this.onFolderBeforeChange_ = this.onFolderBeforeChange_.bind(this);
            this.onTitleClick_ = this.onTitleClick_.bind(this);
            this.onUiContainerAdd_ = this.onUiContainerAdd_.bind(this);
            this.onUiContainerItemLayout_ = this.onUiContainerItemLayout_.bind(this);
            this.onUiContainerRemove_ = this.onUiContainerRemove_.bind(this);
            this.folder = createFolder(config);
            if (this.folder) {
              this.folder.emitter.on("beforechange", this.onFolderBeforeChange_);
            }
            this.ucList_ = new ui_container_1.UiContainer();
            this.ucList_.emitter.on("add", this.onUiContainerAdd_);
            this.ucList_.emitter.on("itemlayout", this.onUiContainerItemLayout_);
            this.ucList_.emitter.on("remove", this.onUiContainerRemove_);
            this.doc_ = document2;
            this.viewModel = config.viewModel;
            this.view = new root_1.RootView(this.doc_, {
              folder: this.folder,
              model: this.viewModel
            });
            if (this.view.titleElement) {
              this.view.titleElement.addEventListener("click", this.onTitleClick_);
            }
            this.view.containerElement.addEventListener("transitionend", this.onContainerTransitionEnd_);
          }
          Object.defineProperty(RootController2.prototype, "document", {
            get: function() {
              return this.doc_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(RootController2.prototype, "uiContainer", {
            get: function() {
              return this.ucList_;
            },
            enumerable: false,
            configurable: true
          });
          RootController2.prototype.onFolderBeforeChange_ = function(ev) {
            if (ev.propertyName !== "expanded") {
              return;
            }
            var folder = this.folder;
            if (!folder) {
              return;
            }
            if (type_util_1.TypeUtil.isEmpty(folder.expandedHeight)) {
              folder.expandedHeight = ContainerUtil.computeExpandedFolderHeight(folder, this.view.containerElement);
            }
            folder.shouldFixHeight = true;
            DomUtil.forceReflow(this.view.containerElement);
          };
          RootController2.prototype.applyUiContainerChange_ = function() {
            ContainerUtil.updateAllItemsPositions(this.uiContainer);
          };
          RootController2.prototype.onUiContainerAdd_ = function(ev) {
            DomUtil.insertElementAt(this.view.containerElement, ev.uiController.view.element, ev.index);
            this.applyUiContainerChange_();
          };
          RootController2.prototype.onUiContainerRemove_ = function(_) {
            this.applyUiContainerChange_();
          };
          RootController2.prototype.onUiContainerItemLayout_ = function(_) {
            this.applyUiContainerChange_();
          };
          RootController2.prototype.onTitleClick_ = function() {
            if (this.folder) {
              this.folder.expanded = !this.folder.expanded;
            }
          };
          RootController2.prototype.onContainerTransitionEnd_ = function(ev) {
            if (ev.propertyName !== "height") {
              return;
            }
            if (this.folder) {
              this.folder.shouldFixHeight = false;
              this.folder.expandedHeight = null;
            }
          };
          return RootController2;
        }();
        exports3.RootController = RootController;
      },
      "./src/main/js/controller/separator.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SeparatorController = void 0;
        var separator_1 = __webpack_require__("./src/main/js/view/separator.ts");
        var SeparatorController = function() {
          function SeparatorController2(document2, config) {
            this.viewModel = config.viewModel;
            this.view = new separator_1.SeparatorView(document2, {
              model: this.viewModel
            });
          }
          return SeparatorController2;
        }();
        exports3.SeparatorController = SeparatorController;
      },
      "./src/main/js/controller/ui-util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.getBaseStepForColor = exports3.getSuitableMaxValueForPoint2dPad = exports3.getSuitableDecimalDigits = exports3.isArrowKey = exports3.isVerticalArrowKey = exports3.getHorizontalStepKeys = exports3.getVerticalStepKeys = exports3.getStepForKey = exports3.getStepForTextInput = exports3.findControllers = exports3.normalizeInputParamsOptions = void 0;
        var point_2d_1 = __webpack_require__("./src/main/js/constraint/point-2d.ts");
        var range_1 = __webpack_require__("./src/main/js/constraint/range.ts");
        var step_1 = __webpack_require__("./src/main/js/constraint/step.ts");
        var util_1 = __webpack_require__("./src/main/js/constraint/util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var folder_1 = __webpack_require__("./src/main/js/controller/folder.ts");
        function normalizeInputParamsOptions(options, convert) {
          if (Array.isArray(options)) {
            return options.map(function(item) {
              return {
                text: item.text,
                value: convert(item.value)
              };
            });
          }
          var textToValueMap = options;
          var texts = Object.keys(textToValueMap);
          return texts.reduce(function(result, text) {
            return result.concat({
              text,
              value: convert(textToValueMap[text])
            });
          }, []);
        }
        exports3.normalizeInputParamsOptions = normalizeInputParamsOptions;
        function findControllers(uiControllers, controllerClass) {
          return uiControllers.reduce(function(results, uc) {
            if (uc instanceof folder_1.FolderController) {
              results.push.apply(results, findControllers(uc.uiContainer.items, controllerClass));
            }
            if (uc instanceof controllerClass) {
              results.push(uc);
            }
            return results;
          }, []);
        }
        exports3.findControllers = findControllers;
        function findStep(constraint) {
          var c = constraint ? util_1.ConstraintUtil.findConstraint(constraint, step_1.StepConstraint) : null;
          if (!c) {
            return null;
          }
          return c.step;
        }
        function getStepForTextInput(constraint) {
          var step = findStep(constraint);
          return type_util_1.TypeUtil.getOrDefault(step, 1);
        }
        exports3.getStepForTextInput = getStepForTextInput;
        function getStepForKey(baseStep, keys) {
          var step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
          if (keys.upKey) {
            return +step;
          } else if (keys.downKey) {
            return -step;
          }
          return 0;
        }
        exports3.getStepForKey = getStepForKey;
        function getVerticalStepKeys(ev) {
          return {
            altKey: ev.altKey,
            downKey: ev.keyCode === 40,
            shiftKey: ev.shiftKey,
            upKey: ev.keyCode === 38
          };
        }
        exports3.getVerticalStepKeys = getVerticalStepKeys;
        function getHorizontalStepKeys(ev) {
          return {
            altKey: ev.altKey,
            downKey: ev.keyCode === 37,
            shiftKey: ev.shiftKey,
            upKey: ev.keyCode === 39
          };
        }
        exports3.getHorizontalStepKeys = getHorizontalStepKeys;
        function isVerticalArrowKey(keyCode) {
          return keyCode === 38 || keyCode === 40;
        }
        exports3.isVerticalArrowKey = isVerticalArrowKey;
        function isArrowKey(keyCode) {
          return isVerticalArrowKey(keyCode) || keyCode === 37 || keyCode === 39;
        }
        exports3.isArrowKey = isArrowKey;
        function getSuitableDecimalDigits(constraint, rawValue) {
          var sc = constraint && util_1.ConstraintUtil.findConstraint(constraint, step_1.StepConstraint);
          if (sc) {
            return number_util_1.NumberUtil.getDecimalDigits(sc.step);
          }
          return Math.max(number_util_1.NumberUtil.getDecimalDigits(rawValue), 2);
        }
        exports3.getSuitableDecimalDigits = getSuitableDecimalDigits;
        function getSuitableMaxDimensionValue(constraint, rawValue) {
          var rc = constraint && util_1.ConstraintUtil.findConstraint(constraint, range_1.RangeConstraint);
          if (rc) {
            return Math.max(Math.abs(rc.minValue || 0), Math.abs(rc.maxValue || 0));
          }
          var step = getStepForTextInput(constraint);
          return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
        }
        function getSuitableMaxValueForPoint2dPad(constraint, rawValue) {
          var xc = constraint instanceof point_2d_1.Point2dConstraint ? constraint.xConstraint : void 0;
          var yc = constraint instanceof point_2d_1.Point2dConstraint ? constraint.yConstraint : void 0;
          var xr = getSuitableMaxDimensionValue(xc, rawValue.x);
          var yr = getSuitableMaxDimensionValue(yc, rawValue.y);
          return Math.max(xr, yr);
        }
        exports3.getSuitableMaxValueForPoint2dPad = getSuitableMaxValueForPoint2dPad;
        function getBaseStepForColor(forAlpha) {
          return forAlpha ? 0.1 : 1;
        }
        exports3.getBaseStepForColor = getBaseStepForColor;
      },
      "./src/main/js/converter/boolean.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.toString = exports3.fromMixed = void 0;
        function fromMixed(value) {
          if (value === "false") {
            return false;
          }
          return !!value;
        }
        exports3.fromMixed = fromMixed;
        function toString(value) {
          return String(value);
        }
        exports3.toString = toString;
      },
      "./src/main/js/converter/color.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.toRgbaNumber = exports3.toRgbNumber = exports3.getStringifier = exports3.toFunctionalHslaString = exports3.toFunctionalHslString = exports3.toFunctionalRgbaString = exports3.toFunctionalRgbString = exports3.toHexRgbaString = exports3.toHexRgbString = exports3.fromNumberToRgba = exports3.fromNumberToRgb = exports3.fromObject = exports3.fromString = void 0;
        var number_1 = __webpack_require__("./src/main/js/formatter/number.ts");
        var ColorModel = __webpack_require__("./src/main/js/misc/color-model.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var NumberColorParser = __webpack_require__("./src/main/js/parser/number-color.ts");
        var StringColorParser = __webpack_require__("./src/main/js/parser/string-color.ts");
        function createEmptyColor() {
          return new color_1.Color([0, 0, 0], "rgb");
        }
        function fromString(value) {
          if (typeof value === "string") {
            var cv = StringColorParser.CompositeParser(value);
            if (cv) {
              return cv;
            }
          }
          return createEmptyColor();
        }
        exports3.fromString = fromString;
        function fromObject(value) {
          if (color_1.Color.isColorObject(value)) {
            return color_1.Color.fromObject(value);
          }
          return createEmptyColor();
        }
        exports3.fromObject = fromObject;
        function fromNumberToRgb(value) {
          if (typeof value === "number") {
            var cv = NumberColorParser.RgbParser(value);
            if (cv) {
              return cv;
            }
          }
          return createEmptyColor();
        }
        exports3.fromNumberToRgb = fromNumberToRgb;
        function fromNumberToRgba(value) {
          if (typeof value === "number") {
            var cv = NumberColorParser.RgbaParser(value);
            if (cv) {
              return cv;
            }
          }
          return createEmptyColor();
        }
        exports3.fromNumberToRgba = fromNumberToRgba;
        function zerofill(comp) {
          var hex = number_util_1.NumberUtil.constrain(Math.floor(comp), 0, 255).toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        }
        function toHexRgbString(value) {
          var hexes = ColorModel.withoutAlpha(value.getComponents("rgb")).map(zerofill).join("");
          return "#" + hexes;
        }
        exports3.toHexRgbString = toHexRgbString;
        function toHexRgbaString(value) {
          var rgbaComps = value.getComponents("rgb");
          var hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255].map(zerofill).join("");
          return "#" + hexes;
        }
        exports3.toHexRgbaString = toHexRgbaString;
        function toFunctionalRgbString(value) {
          var formatter = new number_1.NumberFormatter(0);
          var comps = ColorModel.withoutAlpha(value.getComponents("rgb")).map(function(comp) {
            return formatter.format(comp);
          });
          return "rgb(" + comps.join(", ") + ")";
        }
        exports3.toFunctionalRgbString = toFunctionalRgbString;
        function toFunctionalRgbaString(value) {
          var aFormatter = new number_1.NumberFormatter(2);
          var rgbFormatter = new number_1.NumberFormatter(0);
          var comps = value.getComponents("rgb").map(function(comp, index) {
            var formatter = index === 3 ? aFormatter : rgbFormatter;
            return formatter.format(comp);
          });
          return "rgba(" + comps.join(", ") + ")";
        }
        exports3.toFunctionalRgbaString = toFunctionalRgbaString;
        function toFunctionalHslString(value) {
          var formatter = new number_1.NumberFormatter(0);
          var comps = ColorModel.withoutAlpha(value.getComponents("hsl")).map(function(comp) {
            return formatter.format(comp);
          });
          return "hsl(" + comps.join(", ") + ")";
        }
        exports3.toFunctionalHslString = toFunctionalHslString;
        function toFunctionalHslaString(value) {
          var aFormatter = new number_1.NumberFormatter(2);
          var hslFormatter = new number_1.NumberFormatter(0);
          var comps = value.getComponents("hsl").map(function(comp, index) {
            var formatter = index === 3 ? aFormatter : hslFormatter;
            return formatter.format(comp);
          });
          return "hsla(" + comps.join(", ") + ")";
        }
        exports3.toFunctionalHslaString = toFunctionalHslaString;
        var NOTATION_TO_STRINGIFIER_MAP = {
          "func.hsl": toFunctionalHslString,
          "func.hsla": toFunctionalHslaString,
          "func.rgb": toFunctionalRgbString,
          "func.rgba": toFunctionalRgbaString,
          "hex.rgb": toHexRgbString,
          "hex.rgba": toHexRgbaString
        };
        function getStringifier(notation) {
          return NOTATION_TO_STRINGIFIER_MAP[notation];
        }
        exports3.getStringifier = getStringifier;
        function toRgbNumber(value) {
          return ColorModel.withoutAlpha(value.getComponents("rgb")).reduce(function(result, comp) {
            return result << 8 | Math.floor(comp) & 255;
          }, 0);
        }
        exports3.toRgbNumber = toRgbNumber;
        function toRgbaNumber(value) {
          return value.getComponents("rgb").reduce(function(result, comp, index) {
            var hex = Math.floor(index === 3 ? comp * 255 : comp) & 255;
            return result << 8 | hex;
          }, 0);
        }
        exports3.toRgbaNumber = toRgbaNumber;
      },
      "./src/main/js/converter/number.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.toString = exports3.fromMixed = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var string_number_1 = __webpack_require__("./src/main/js/parser/string-number.ts");
        function fromMixed(value) {
          if (typeof value === "number") {
            return value;
          }
          if (typeof value === "string") {
            var pv = string_number_1.StringNumberParser(value);
            if (!type_util_1.TypeUtil.isEmpty(pv)) {
              return pv;
            }
          }
          return 0;
        }
        exports3.fromMixed = fromMixed;
        function toString(value) {
          return String(value);
        }
        exports3.toString = toString;
      },
      "./src/main/js/converter/point-2d.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.fromMixed = void 0;
        var point_2d_1 = __webpack_require__("./src/main/js/model/point-2d.ts");
        var any_point_2d_1 = __webpack_require__("./src/main/js/parser/any-point-2d.ts");
        function fromMixed(value) {
          return any_point_2d_1.AnyPoint2dParser(value) || new point_2d_1.Point2d();
        }
        exports3.fromMixed = fromMixed;
      },
      "./src/main/js/converter/string.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.toString = exports3.fromMixed = void 0;
        function fromMixed(value) {
          return String(value);
        }
        exports3.fromMixed = fromMixed;
        function toString(value) {
          return value;
        }
        exports3.toString = toString;
      },
      "./src/main/js/formatter/boolean.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.BooleanFormatter = void 0;
        var BooleanConverter = __webpack_require__("./src/main/js/converter/boolean.ts");
        var BooleanFormatter = function() {
          function BooleanFormatter2() {
          }
          BooleanFormatter2.prototype.format = function(value) {
            return BooleanConverter.toString(value);
          };
          return BooleanFormatter2;
        }();
        exports3.BooleanFormatter = BooleanFormatter;
      },
      "./src/main/js/formatter/color.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorFormatter = void 0;
        var ColorFormatter = function() {
          function ColorFormatter2(stringifier) {
            this.stringifier_ = stringifier;
          }
          ColorFormatter2.prototype.format = function(value) {
            return this.stringifier_(value);
          };
          return ColorFormatter2;
        }();
        exports3.ColorFormatter = ColorFormatter;
      },
      "./src/main/js/formatter/number.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.NumberFormatter = void 0;
        var NumberFormatter = function() {
          function NumberFormatter2(digits) {
            this.digits_ = digits;
          }
          Object.defineProperty(NumberFormatter2.prototype, "digits", {
            get: function() {
              return this.digits_;
            },
            enumerable: false,
            configurable: true
          });
          NumberFormatter2.prototype.format = function(value) {
            return value.toFixed(Math.max(Math.min(this.digits_, 20), 0));
          };
          return NumberFormatter2;
        }();
        exports3.NumberFormatter = NumberFormatter;
      },
      "./src/main/js/formatter/string.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.StringFormatter = void 0;
        var StringFormatter = function() {
          function StringFormatter2() {
          }
          StringFormatter2.prototype.format = function(value) {
            return value;
          };
          return StringFormatter2;
        }();
        exports3.StringFormatter = StringFormatter;
      },
      "./src/main/js/index.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        var Style = __webpack_require__("./src/main/sass/bundle.scss");
        var tweakpane_without_style_1 = __webpack_require__("./src/main/js/tweakpane-without-style.ts");
        function embedDefaultStyleIfNeeded(document2) {
          var MARKER = "tweakpane";
          if (document2.querySelector("style[data-for=" + MARKER + "]")) {
            return;
          }
          var styleElem = document2.createElement("style");
          styleElem.dataset.for = MARKER;
          styleElem.textContent = Style.toString();
          if (document2.head) {
            document2.head.appendChild(styleElem);
          }
        }
        var Tweakpane3 = function(_super) {
          __extends(Tweakpane4, _super);
          function Tweakpane4(opt_config) {
            var _this = _super.call(this, opt_config) || this;
            embedDefaultStyleIfNeeded(_this.document);
            return _this;
          }
          return Tweakpane4;
        }(tweakpane_without_style_1.TweakpaneWithoutStyle);
        exports3.default = Tweakpane3;
      },
      "./src/main/js/misc/class-name.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ClassName = void 0;
        var PREFIX = "tp";
        var TYPE_TO_POSTFIX_MAP = {
          "": "v",
          input: "iv",
          monitor: "mv"
        };
        function ClassName(viewName, opt_viewType) {
          var viewType = opt_viewType || "";
          var postfix = TYPE_TO_POSTFIX_MAP[viewType];
          return function(opt_elementName, opt_modifier) {
            return [
              PREFIX,
              "-",
              viewName,
              postfix,
              opt_elementName ? "_" + opt_elementName : "",
              opt_modifier ? "-" + opt_modifier : ""
            ].join("");
          };
        }
        exports3.ClassName = ClassName;
      },
      "./src/main/js/misc/color-model.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.convertMode = exports3.withAlpha = exports3.withoutAlpha = exports3.opaque = exports3.hsvToRgb = void 0;
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        function rgbToHsl(r, g, b) {
          var rp = number_util_1.NumberUtil.constrain(r / 255, 0, 1);
          var gp = number_util_1.NumberUtil.constrain(g / 255, 0, 1);
          var bp = number_util_1.NumberUtil.constrain(b / 255, 0, 1);
          var cmax = Math.max(rp, gp, bp);
          var cmin = Math.min(rp, gp, bp);
          var c = cmax - cmin;
          var h = 0;
          var s = 0;
          var l = (cmin + cmax) / 2;
          if (c !== 0) {
            s = l > 0.5 ? c / (2 - cmin - cmax) : c / (cmax + cmin);
            if (rp === cmax) {
              h = (gp - bp) / c;
            } else if (gp === cmax) {
              h = 2 + (bp - rp) / c;
            } else {
              h = 4 + (rp - gp) / c;
            }
            h = h / 6 + (h < 0 ? 1 : 0);
          }
          return [h * 360, s * 100, l * 100];
        }
        function hslToRgb(h, s, l) {
          var _a2, _b, _c, _d, _e, _f;
          var hp = (h % 360 + 360) % 360;
          var sp = number_util_1.NumberUtil.constrain(s / 100, 0, 1);
          var lp = number_util_1.NumberUtil.constrain(l / 100, 0, 1);
          var c = (1 - Math.abs(2 * lp - 1)) * sp;
          var x = c * (1 - Math.abs(hp / 60 % 2 - 1));
          var m = lp - c / 2;
          var rp, gp, bp;
          if (hp >= 0 && hp < 60) {
            _a2 = [c, x, 0], rp = _a2[0], gp = _a2[1], bp = _a2[2];
          } else if (hp >= 60 && hp < 120) {
            _b = [x, c, 0], rp = _b[0], gp = _b[1], bp = _b[2];
          } else if (hp >= 120 && hp < 180) {
            _c = [0, c, x], rp = _c[0], gp = _c[1], bp = _c[2];
          } else if (hp >= 180 && hp < 240) {
            _d = [0, x, c], rp = _d[0], gp = _d[1], bp = _d[2];
          } else if (hp >= 240 && hp < 300) {
            _e = [x, 0, c], rp = _e[0], gp = _e[1], bp = _e[2];
          } else {
            _f = [c, 0, x], rp = _f[0], gp = _f[1], bp = _f[2];
          }
          return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
        }
        function rgbToHsv(r, g, b) {
          var rp = number_util_1.NumberUtil.constrain(r / 255, 0, 1);
          var gp = number_util_1.NumberUtil.constrain(g / 255, 0, 1);
          var bp = number_util_1.NumberUtil.constrain(b / 255, 0, 1);
          var cmax = Math.max(rp, gp, bp);
          var cmin = Math.min(rp, gp, bp);
          var d = cmax - cmin;
          var h;
          if (d === 0) {
            h = 0;
          } else if (cmax === rp) {
            h = 60 * (((gp - bp) / d % 6 + 6) % 6);
          } else if (cmax === gp) {
            h = 60 * ((bp - rp) / d + 2);
          } else {
            h = 60 * ((rp - gp) / d + 4);
          }
          var s = cmax === 0 ? 0 : d / cmax;
          var v = cmax;
          return [h, s * 100, v * 100];
        }
        function hsvToRgb(h, s, v) {
          var _a2, _b, _c, _d, _e, _f;
          var hp = number_util_1.NumberUtil.loop(h, 360);
          var sp = number_util_1.NumberUtil.constrain(s / 100, 0, 1);
          var vp = number_util_1.NumberUtil.constrain(v / 100, 0, 1);
          var c = vp * sp;
          var x = c * (1 - Math.abs(hp / 60 % 2 - 1));
          var m = vp - c;
          var rp, gp, bp;
          if (hp >= 0 && hp < 60) {
            _a2 = [c, x, 0], rp = _a2[0], gp = _a2[1], bp = _a2[2];
          } else if (hp >= 60 && hp < 120) {
            _b = [x, c, 0], rp = _b[0], gp = _b[1], bp = _b[2];
          } else if (hp >= 120 && hp < 180) {
            _c = [0, c, x], rp = _c[0], gp = _c[1], bp = _c[2];
          } else if (hp >= 180 && hp < 240) {
            _d = [0, x, c], rp = _d[0], gp = _d[1], bp = _d[2];
          } else if (hp >= 240 && hp < 300) {
            _e = [x, 0, c], rp = _e[0], gp = _e[1], bp = _e[2];
          } else {
            _f = [c, 0, x], rp = _f[0], gp = _f[1], bp = _f[2];
          }
          return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
        }
        exports3.hsvToRgb = hsvToRgb;
        function opaque(comps) {
          return [comps[0], comps[1], comps[2], 1];
        }
        exports3.opaque = opaque;
        function withoutAlpha(comps) {
          return [comps[0], comps[1], comps[2]];
        }
        exports3.withoutAlpha = withoutAlpha;
        function withAlpha(comps, alpha) {
          return [comps[0], comps[1], comps[2], alpha];
        }
        exports3.withAlpha = withAlpha;
        var MODE_CONVERTER_MAP = {
          hsl: {
            hsl: function(h, s, l) {
              return [h, s, l];
            },
            hsv: function(h, s, l) {
              var _a2 = hslToRgb(h, s, l), r = _a2[0], g = _a2[1], b = _a2[2];
              return rgbToHsv(r, g, b);
            },
            rgb: hslToRgb
          },
          hsv: {
            hsl: function(h, s, v) {
              var _a2 = hsvToRgb(h, s, v), r = _a2[0], g = _a2[1], b = _a2[2];
              return rgbToHsl(r, g, b);
            },
            hsv: function(h, s, v) {
              return [h, s, v];
            },
            rgb: hsvToRgb
          },
          rgb: {
            hsl: rgbToHsl,
            hsv: rgbToHsv,
            rgb: function(r, g, b) {
              return [r, g, b];
            }
          }
        };
        function convertMode(components, fromMode, toMode) {
          var _a2;
          return (_a2 = MODE_CONVERTER_MAP[fromMode])[toMode].apply(_a2, components);
        }
        exports3.convertMode = convertMode;
      },
      "./src/main/js/misc/constants.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Constants = void 0;
        exports3.Constants = {
          monitorDefaultInterval: 200
        };
      },
      "./src/main/js/misc/disposing-util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.disposeElement = void 0;
        function disposeElement(elem) {
          if (elem && elem.parentElement) {
            elem.parentElement.removeChild(elem);
          }
          return null;
        }
        exports3.disposeElement = disposeElement;
      },
      "./src/main/js/misc/dom-util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        (function(process2) {
          Object.defineProperty(exports3, "__esModule", {value: true});
          exports3.findNextTarget = exports3.indexOfChildElement = exports3.removeElement = exports3.insertElementAt = exports3.createSvgIconElement = exports3.getCanvasContext = exports3.getWindowDocument = exports3.supportsTouch = exports3.disableTransitionTemporarily = exports3.forceReflow = exports3.SVG_NS = void 0;
          var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
          exports3.SVG_NS = "http://www.w3.org/2000/svg";
          function forceReflow(element) {
            element.offsetHeight;
          }
          exports3.forceReflow = forceReflow;
          function disableTransitionTemporarily(element, callback) {
            var t = element.style.transition;
            element.style.transition = "none";
            callback();
            element.style.transition = t;
          }
          exports3.disableTransitionTemporarily = disableTransitionTemporarily;
          function supportsTouch(document2) {
            return document2.ontouchstart !== void 0;
          }
          exports3.supportsTouch = supportsTouch;
          function getWindowDocument() {
            var globalObj = type_util_1.TypeUtil.forceCast(new Function("return this")());
            return globalObj.document;
          }
          exports3.getWindowDocument = getWindowDocument;
          function isBrowser() {
            return !!process2.browser;
          }
          function getCanvasContext(canvasElement) {
            return isBrowser() ? canvasElement.getContext("2d") : null;
          }
          exports3.getCanvasContext = getCanvasContext;
          var ICON_ID_TO_INNER_HTML_MAP = {
            p2dpad: '<path d="M8 2V14" stroke="currentColor" stroke-width="1.5"/><path d="M2 8H14" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2" fill="currentColor"/>'
          };
          function createSvgIconElement(document2, iconId) {
            var elem = document2.createElementNS(exports3.SVG_NS, "svg");
            elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
            return elem;
          }
          exports3.createSvgIconElement = createSvgIconElement;
          function insertElementAt(parentElement, element, index) {
            parentElement.insertBefore(element, parentElement.children[index]);
          }
          exports3.insertElementAt = insertElementAt;
          function removeElement(element) {
            if (element.parentElement) {
              element.parentElement.removeChild(element);
            }
          }
          exports3.removeElement = removeElement;
          function indexOfChildElement(element) {
            var parentElem = element.parentElement;
            if (!parentElem) {
              return -1;
            }
            var children = Array.prototype.slice.call(parentElem.children);
            return children.indexOf(element);
          }
          exports3.indexOfChildElement = indexOfChildElement;
          function findNextTarget(ev) {
            if (ev.relatedTarget) {
              return type_util_1.TypeUtil.forceCast(ev.relatedTarget);
            }
            if ("explicitOriginalTarget" in ev) {
              return ev.explicitOriginalTarget;
            }
            return null;
          }
          exports3.findNextTarget = findNextTarget;
        }).call(this, __webpack_require__("./node_modules/process/browser.js"));
      },
      "./src/main/js/misc/emitter.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Emitter = void 0;
        var Emitter = function() {
          function Emitter2() {
            this.observers_ = {};
          }
          Emitter2.prototype.on = function(eventName, handler) {
            var observers = this.observers_[eventName];
            if (!observers) {
              observers = this.observers_[eventName] = [];
            }
            observers.push({
              handler
            });
            return this;
          };
          Emitter2.prototype.off = function(eventName, handler) {
            var observers = this.observers_[eventName];
            if (observers) {
              this.observers_[eventName] = observers.filter(function(observer) {
                return observer.handler !== handler;
              });
            }
            return this;
          };
          Emitter2.prototype.emit = function(eventName, event) {
            var observers = this.observers_[eventName];
            if (!observers) {
              return;
            }
            observers.forEach(function(observer) {
              observer.handler(event);
            });
          };
          return Emitter2;
        }();
        exports3.Emitter = Emitter;
      },
      "./src/main/js/misc/number-util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.NumberUtil = void 0;
        exports3.NumberUtil = {
          map: function(value, start1, end1, start2, end2) {
            var p = (value - start1) / (end1 - start1);
            return start2 + p * (end2 - start2);
          },
          getDecimalDigits: function(value) {
            var text = String(value.toFixed(10));
            var frac = text.split(".")[1];
            return frac.replace(/0+$/, "").length;
          },
          constrain: function(value, min4, max4) {
            return Math.min(Math.max(value, min4), max4);
          },
          loop: function(value, max4) {
            return (value % max4 + max4) % max4;
          }
        };
      },
      "./src/main/js/misc/pane-error.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.PaneError = void 0;
        function createMessage(config) {
          if (config.type === "alreadydisposed") {
            return "View has been already disposed";
          }
          if (config.type === "emptyvalue") {
            return "Value is empty for " + config.context.key;
          }
          if (config.type === "invalidparams") {
            return "Invalid parameters for " + config.context.name;
          }
          if (config.type === "nomatchingcontroller") {
            return "No matching controller for " + config.context.key;
          }
          if (config.type === "shouldneverhappen") {
            return "This error should never happen";
          }
          return "Unexpected error";
        }
        var PaneError = function() {
          function PaneError2(config) {
            this.message = createMessage(config);
            this.name = this.constructor.name;
            this.stack = new Error(this.message).stack;
            this.type = config.type;
          }
          PaneError2.alreadyDisposed = function() {
            return new PaneError2({type: "alreadydisposed"});
          };
          PaneError2.shouldNeverHappen = function() {
            return new PaneError2({type: "shouldneverhappen"});
          };
          return PaneError2;
        }();
        exports3.PaneError = PaneError;
        PaneError.prototype = Object.create(Error.prototype);
        PaneError.prototype.constructor = PaneError;
      },
      "./src/main/js/misc/pointer-handler.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.PointerHandler = void 0;
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var PointerHandler = function() {
          function PointerHandler2(document2, element) {
            this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
            this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
            this.onMouseDown_ = this.onMouseDown_.bind(this);
            this.onTouchMove_ = this.onTouchMove_.bind(this);
            this.onTouchStart_ = this.onTouchStart_.bind(this);
            this.document = document2;
            this.element = element;
            this.emitter = new emitter_1.Emitter();
            this.pressed_ = false;
            if (DomUtil.supportsTouch(this.document)) {
              element.addEventListener("touchstart", this.onTouchStart_);
              element.addEventListener("touchmove", this.onTouchMove_);
            } else {
              element.addEventListener("mousedown", this.onMouseDown_);
              this.document.addEventListener("mousemove", this.onDocumentMouseMove_);
              this.document.addEventListener("mouseup", this.onDocumentMouseUp_);
            }
          }
          PointerHandler2.prototype.computePosition_ = function(offsetX, offsetY) {
            var rect = this.element.getBoundingClientRect();
            return {
              px: offsetX / rect.width,
              py: offsetY / rect.height
            };
          };
          PointerHandler2.prototype.onMouseDown_ = function(e) {
            var _a2;
            e.preventDefault();
            (_a2 = e.currentTarget) === null || _a2 === void 0 ? void 0 : _a2.focus();
            this.pressed_ = true;
            this.emitter.emit("down", {
              data: this.computePosition_(e.offsetX, e.offsetY),
              sender: this
            });
          };
          PointerHandler2.prototype.onDocumentMouseMove_ = function(e) {
            if (!this.pressed_) {
              return;
            }
            var win = this.document.defaultView;
            var rect = this.element.getBoundingClientRect();
            this.emitter.emit("move", {
              data: this.computePosition_(e.pageX - ((win && win.scrollX || 0) + rect.left), e.pageY - ((win && win.scrollY || 0) + rect.top)),
              sender: this
            });
          };
          PointerHandler2.prototype.onDocumentMouseUp_ = function(e) {
            if (!this.pressed_) {
              return;
            }
            this.pressed_ = false;
            var win = this.document.defaultView;
            var rect = this.element.getBoundingClientRect();
            this.emitter.emit("up", {
              data: this.computePosition_(e.pageX - ((win && win.scrollX || 0) + rect.left), e.pageY - ((win && win.scrollY || 0) + rect.top)),
              sender: this
            });
          };
          PointerHandler2.prototype.onTouchStart_ = function(e) {
            e.preventDefault();
            var touch = e.targetTouches[0];
            var rect = this.element.getBoundingClientRect();
            this.emitter.emit("down", {
              data: this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top),
              sender: this
            });
          };
          PointerHandler2.prototype.onTouchMove_ = function(e) {
            var touch = e.targetTouches[0];
            var rect = this.element.getBoundingClientRect();
            this.emitter.emit("move", {
              data: this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top),
              sender: this
            });
          };
          return PointerHandler2;
        }();
        exports3.PointerHandler = PointerHandler;
      },
      "./src/main/js/misc/ticker/interval.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.IntervalTicker = void 0;
        var disposable_1 = __webpack_require__("./src/main/js/model/disposable.ts");
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var IntervalTicker = function() {
          function IntervalTicker2(document2, interval) {
            var _this = this;
            this.onTick_ = this.onTick_.bind(this);
            this.doc_ = document2;
            this.emitter = new emitter_1.Emitter();
            if (interval <= 0) {
              this.id_ = null;
            } else {
              var win = this.doc_.defaultView;
              if (win) {
                this.id_ = win.setInterval(this.onTick_, interval);
              }
            }
            this.disposable = new disposable_1.Disposable();
            this.disposable.emitter.on("dispose", function() {
              if (_this.id_ !== null) {
                var win2 = _this.doc_.defaultView;
                if (win2) {
                  win2.clearInterval(_this.id_);
                }
              }
              _this.id_ = null;
            });
          }
          IntervalTicker2.prototype.onTick_ = function() {
            this.emitter.emit("tick", {
              sender: this
            });
          };
          return IntervalTicker2;
        }();
        exports3.IntervalTicker = IntervalTicker;
      },
      "./src/main/js/misc/ticker/manual.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ManualTicker = void 0;
        var disposable_1 = __webpack_require__("./src/main/js/model/disposable.ts");
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var ManualTicker = function() {
          function ManualTicker2() {
            this.disposable = new disposable_1.Disposable();
            this.emitter = new emitter_1.Emitter();
          }
          ManualTicker2.prototype.tick = function() {
            this.emitter.emit("tick", {
              sender: this
            });
          };
          return ManualTicker2;
        }();
        exports3.ManualTicker = ManualTicker;
      },
      "./src/main/js/misc/type-util.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.TypeUtil = void 0;
        exports3.TypeUtil = {
          forceCast: function(v) {
            return v;
          },
          isEmpty: function(value) {
            return value === null || value === void 0;
          },
          getOrDefault: function(value, defaultValue) {
            return !exports3.TypeUtil.isEmpty(value) ? value : defaultValue;
          },
          deepEqualsArray: function(a1, a2) {
            if (a1.length !== a2.length) {
              return false;
            }
            for (var i = 0; i < a1.length; i++) {
              if (a1[i] !== a2[i]) {
                return false;
              }
            }
            return true;
          }
        };
      },
      "./src/main/js/model/button.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Button = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var Button = function() {
          function Button2(title) {
            this.emitter = new emitter_1.Emitter();
            this.title = title;
          }
          Button2.prototype.click = function() {
            this.emitter.emit("click", {
              sender: this
            });
          };
          return Button2;
        }();
        exports3.Button = Button;
      },
      "./src/main/js/model/color.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Color = void 0;
        var ColorModel = __webpack_require__("./src/main/js/misc/color-model.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var CONSTRAINT_MAP = {
          hsl: function(comps) {
            return [
              number_util_1.NumberUtil.loop(comps[0], 360),
              number_util_1.NumberUtil.constrain(comps[1], 0, 100),
              number_util_1.NumberUtil.constrain(comps[2], 0, 100),
              number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1)
            ];
          },
          hsv: function(comps) {
            return [
              number_util_1.NumberUtil.loop(comps[0], 360),
              number_util_1.NumberUtil.constrain(comps[1], 0, 100),
              number_util_1.NumberUtil.constrain(comps[2], 0, 100),
              number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1)
            ];
          },
          rgb: function(comps) {
            return [
              number_util_1.NumberUtil.constrain(comps[0], 0, 255),
              number_util_1.NumberUtil.constrain(comps[1], 0, 255),
              number_util_1.NumberUtil.constrain(comps[2], 0, 255),
              number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1)
            ];
          }
        };
        function isRgbColorComponent(obj, key) {
          if (typeof obj !== "object" || type_util_1.TypeUtil.isEmpty(obj)) {
            return false;
          }
          return key in obj && typeof obj[key] === "number";
        }
        var Color = function() {
          function Color2(comps, mode) {
            this.mode_ = mode;
            this.comps_ = CONSTRAINT_MAP[mode](comps);
          }
          Color2.fromObject = function(obj) {
            var comps = "a" in obj ? [obj.r, obj.g, obj.b, obj.a] : [obj.r, obj.g, obj.b];
            return new Color2(comps, "rgb");
          };
          Color2.toRgbaObject = function(color) {
            return color.toRgbaObject();
          };
          Color2.isRgbColorObject = function(obj) {
            return isRgbColorComponent(obj, "r") && isRgbColorComponent(obj, "g") && isRgbColorComponent(obj, "b");
          };
          Color2.isRgbaColorObject = function(obj) {
            return this.isRgbColorObject(obj) && isRgbColorComponent(obj, "a");
          };
          Color2.isColorObject = function(obj) {
            return this.isRgbColorObject(obj);
          };
          Object.defineProperty(Color2.prototype, "mode", {
            get: function() {
              return this.mode_;
            },
            enumerable: false,
            configurable: true
          });
          Color2.prototype.getComponents = function(opt_mode) {
            return ColorModel.withAlpha(ColorModel.convertMode(ColorModel.withoutAlpha(this.comps_), this.mode_, opt_mode || this.mode_), this.comps_[3]);
          };
          Color2.prototype.toRgbaObject = function() {
            var rgbComps = this.getComponents("rgb");
            return {
              r: rgbComps[0],
              g: rgbComps[1],
              b: rgbComps[2],
              a: rgbComps[3]
            };
          };
          return Color2;
        }();
        exports3.Color = Color;
      },
      "./src/main/js/model/disposable.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Disposable = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var Disposable = function() {
          function Disposable2() {
            this.emitter = new emitter_1.Emitter();
            this.disposed_ = false;
          }
          Object.defineProperty(Disposable2.prototype, "disposed", {
            get: function() {
              return this.disposed_;
            },
            enumerable: false,
            configurable: true
          });
          Disposable2.prototype.dispose = function() {
            if (this.disposed_) {
              return false;
            }
            this.disposed_ = true;
            this.emitter.emit("dispose", {
              sender: this
            });
            return true;
          };
          return Disposable2;
        }();
        exports3.Disposable = Disposable;
      },
      "./src/main/js/model/foldable.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Foldable = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var Foldable = function() {
          function Foldable2() {
            this.emitter = new emitter_1.Emitter();
            this.expanded_ = false;
          }
          Object.defineProperty(Foldable2.prototype, "expanded", {
            get: function() {
              return this.expanded_;
            },
            set: function(expanded) {
              var changed = this.expanded_ !== expanded;
              if (changed) {
                this.expanded_ = expanded;
                this.emitter.emit("change", {
                  sender: this
                });
              }
            },
            enumerable: false,
            configurable: true
          });
          return Foldable2;
        }();
        exports3.Foldable = Foldable;
      },
      "./src/main/js/model/folder.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Folder = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var Folder = function() {
          function Folder2(title, expanded) {
            this.emitter = new emitter_1.Emitter();
            this.expanded_ = expanded;
            this.expandedHeight_ = null;
            this.temporaryExpanded_ = null;
            this.shouldFixHeight_ = false;
            this.title = title;
          }
          Object.defineProperty(Folder2.prototype, "expanded", {
            get: function() {
              return this.expanded_;
            },
            set: function(expanded) {
              var changed = this.expanded_ !== expanded;
              if (!changed) {
                return;
              }
              this.emitter.emit("beforechange", {
                propertyName: "expanded",
                sender: this
              });
              this.expanded_ = expanded;
              this.emitter.emit("change", {
                propertyName: "expanded",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Folder2.prototype, "temporaryExpanded", {
            get: function() {
              return this.temporaryExpanded_;
            },
            set: function(expanded) {
              var changed = this.temporaryExpanded_ !== expanded;
              if (!changed) {
                return;
              }
              this.emitter.emit("beforechange", {
                propertyName: "temporaryExpanded",
                sender: this
              });
              this.temporaryExpanded_ = expanded;
              this.emitter.emit("change", {
                propertyName: "temporaryExpanded",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Folder2.prototype, "expandedHeight", {
            get: function() {
              return this.expandedHeight_;
            },
            set: function(expandedHeight) {
              var changed = this.expandedHeight_ !== expandedHeight;
              if (!changed) {
                return;
              }
              this.emitter.emit("beforechange", {
                propertyName: "expandedHeight",
                sender: this
              });
              this.expandedHeight_ = expandedHeight;
              this.emitter.emit("change", {
                propertyName: "expandedHeight",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Folder2.prototype, "shouldFixHeight", {
            get: function() {
              return this.shouldFixHeight_;
            },
            set: function(shouldFixHeight) {
              var changed = this.shouldFixHeight_ !== shouldFixHeight;
              if (!changed) {
                return;
              }
              this.emitter.emit("beforechange", {
                propertyName: "shouldFixHeight",
                sender: this
              });
              this.shouldFixHeight_ = shouldFixHeight;
              this.emitter.emit("change", {
                propertyName: "shouldFixHeight",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Folder2.prototype, "styleExpanded", {
            get: function() {
              return type_util_1.TypeUtil.getOrDefault(this.temporaryExpanded, this.expanded);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Folder2.prototype, "styleHeight", {
            get: function() {
              if (!this.styleExpanded) {
                return "0";
              }
              if (this.shouldFixHeight && !type_util_1.TypeUtil.isEmpty(this.expandedHeight)) {
                return this.expandedHeight + "px";
              }
              return "auto";
            },
            enumerable: false,
            configurable: true
          });
          return Folder2;
        }();
        exports3.Folder = Folder;
      },
      "./src/main/js/model/graph-cursor.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.GraphCursor = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var GraphCursor = function() {
          function GraphCursor2() {
            this.emitter = new emitter_1.Emitter();
            this.index_ = -1;
          }
          Object.defineProperty(GraphCursor2.prototype, "index", {
            get: function() {
              return this.index_;
            },
            set: function(index) {
              var changed = this.index_ !== index;
              if (changed) {
                this.index_ = index;
                this.emitter.emit("change", {
                  index,
                  sender: this
                });
              }
            },
            enumerable: false,
            configurable: true
          });
          return GraphCursor2;
        }();
        exports3.GraphCursor = GraphCursor;
      },
      "./src/main/js/model/input-value.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.InputValue = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var InputValue = function() {
          function InputValue2(initialValue, constraint) {
            this.constraint_ = constraint;
            this.emitter = new emitter_1.Emitter();
            this.rawValue_ = initialValue;
          }
          InputValue2.equalsValue = function(v1, v2) {
            return v1 === v2;
          };
          Object.defineProperty(InputValue2.prototype, "constraint", {
            get: function() {
              return this.constraint_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(InputValue2.prototype, "rawValue", {
            get: function() {
              return this.rawValue_;
            },
            set: function(rawValue) {
              var constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
              var changed = !InputValue2.equalsValue(this.rawValue_, constrainedValue);
              if (changed) {
                this.rawValue_ = constrainedValue;
                this.emitter.emit("change", {
                  rawValue: constrainedValue,
                  sender: this
                });
              }
            },
            enumerable: false,
            configurable: true
          });
          return InputValue2;
        }();
        exports3.InputValue = InputValue;
      },
      "./src/main/js/model/list.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.List = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var List = function() {
          function List2() {
            this.emitter = new emitter_1.Emitter();
            this.items_ = [];
          }
          Object.defineProperty(List2.prototype, "items", {
            get: function() {
              return this.items_;
            },
            enumerable: false,
            configurable: true
          });
          List2.prototype.add = function(item, opt_index) {
            var index = opt_index !== void 0 ? opt_index : this.items_.length;
            this.items_.splice(index, 0, item);
            this.emitter.emit("add", {
              index,
              item,
              sender: this
            });
          };
          List2.prototype.remove = function(item) {
            var index = this.items_.indexOf(item);
            if (index < 0) {
              return;
            }
            this.items_.splice(index, 1);
            this.emitter.emit("remove", {
              sender: this
            });
          };
          return List2;
        }();
        exports3.List = List;
      },
      "./src/main/js/model/model-sync.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.connect = void 0;
        function connect(_a2) {
          var primary = _a2.primary, secondary = _a2.secondary;
          primary.emitter(primary.value).on("change", function() {
            primary.apply(primary.value, secondary.value);
          });
          secondary.emitter(secondary.value).on("change", function() {
            secondary.apply(secondary.value, primary.value);
          });
          primary.apply(primary.value, secondary.value);
        }
        exports3.connect = connect;
      },
      "./src/main/js/model/monitor-value.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.MonitorValue = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var MonitorValue = function() {
          function MonitorValue2(totalCount) {
            this.emitter = new emitter_1.Emitter();
            this.rawValues_ = [];
            this.totalCount_ = totalCount;
          }
          Object.defineProperty(MonitorValue2.prototype, "rawValues", {
            get: function() {
              return this.rawValues_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(MonitorValue2.prototype, "totalCount", {
            get: function() {
              return this.totalCount_;
            },
            enumerable: false,
            configurable: true
          });
          MonitorValue2.prototype.append = function(rawValue) {
            this.rawValues_.push(rawValue);
            if (this.rawValues_.length > this.totalCount_) {
              this.rawValues_.splice(0, this.rawValues_.length - this.totalCount_);
            }
            this.emitter.emit("update", {
              rawValue,
              sender: this
            });
          };
          return MonitorValue2;
        }();
        exports3.MonitorValue = MonitorValue;
      },
      "./src/main/js/model/picked-color.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.PickedColor = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var PickedColor = function() {
          function PickedColor2(value) {
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.mode_ = "rgb";
            this.value = value;
            this.value.emitter.on("change", this.onValueChange_);
            this.emitter = new emitter_1.Emitter();
          }
          Object.defineProperty(PickedColor2.prototype, "mode", {
            get: function() {
              return this.mode_;
            },
            set: function(mode) {
              if (this.mode_ === mode) {
                return;
              }
              this.mode_ = mode;
              this.emitter.emit("change", {
                propertyName: "mode",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          PickedColor2.prototype.onValueChange_ = function() {
            this.emitter.emit("change", {
              propertyName: "value",
              sender: this
            });
          };
          return PickedColor2;
        }();
        exports3.PickedColor = PickedColor;
      },
      "./src/main/js/model/point-2d.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2d = void 0;
        var Point2d = function() {
          function Point2d2(x, y) {
            if (x === void 0) {
              x = 0;
            }
            if (y === void 0) {
              y = 0;
            }
            this.x = x;
            this.y = y;
          }
          Point2d2.prototype.getComponents = function() {
            return [this.x, this.y];
          };
          Point2d2.prototype.toObject = function() {
            return {
              x: this.x,
              y: this.y
            };
          };
          return Point2d2;
        }();
        exports3.Point2d = Point2d;
      },
      "./src/main/js/model/target.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Target = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var Target = function() {
          function Target2(object, key, opt_id) {
            this.obj_ = object;
            this.key_ = key;
            this.presetKey_ = type_util_1.TypeUtil.getOrDefault(opt_id, key);
          }
          Object.defineProperty(Target2.prototype, "key", {
            get: function() {
              return this.key_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Target2.prototype, "presetKey", {
            get: function() {
              return this.presetKey_;
            },
            enumerable: false,
            configurable: true
          });
          Target2.prototype.read = function() {
            return this.obj_[this.key_];
          };
          Target2.prototype.write = function(value) {
            this.obj_[this.key_] = value;
          };
          return Target2;
        }();
        exports3.Target = Target;
      },
      "./src/main/js/model/ui-container.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.UiContainer = void 0;
        var folder_1 = __webpack_require__("./src/main/js/controller/folder.ts");
        var input_binding_1 = __webpack_require__("./src/main/js/controller/input-binding.ts");
        var monitor_binding_1 = __webpack_require__("./src/main/js/controller/monitor-binding.ts");
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var list_1 = __webpack_require__("./src/main/js/model/list.ts");
        var UiContainer = function() {
          function UiContainer2() {
            this.onItemFolderFold_ = this.onItemFolderFold_.bind(this);
            this.onListItemLayout_ = this.onListItemLayout_.bind(this);
            this.onSubitemLayout_ = this.onSubitemLayout_.bind(this);
            this.onSubitemFolderFold_ = this.onSubitemFolderFold_.bind(this);
            this.onSubitemInputChange_ = this.onSubitemInputChange_.bind(this);
            this.onSubitemMonitorUpdate_ = this.onSubitemMonitorUpdate_.bind(this);
            this.onItemInputChange_ = this.onItemInputChange_.bind(this);
            this.onListAdd_ = this.onListAdd_.bind(this);
            this.onListItemDispose_ = this.onListItemDispose_.bind(this);
            this.onListRemove_ = this.onListRemove_.bind(this);
            this.onItemMonitorUpdate_ = this.onItemMonitorUpdate_.bind(this);
            this.ucList_ = new list_1.List();
            this.emitter = new emitter_1.Emitter();
            this.ucList_.emitter.on("add", this.onListAdd_);
            this.ucList_.emitter.on("remove", this.onListRemove_);
          }
          Object.defineProperty(UiContainer2.prototype, "items", {
            get: function() {
              return this.ucList_.items;
            },
            enumerable: false,
            configurable: true
          });
          UiContainer2.prototype.add = function(uc, opt_index) {
            this.ucList_.add(uc, opt_index);
          };
          UiContainer2.prototype.onListAdd_ = function(ev) {
            var uc = ev.item;
            this.emitter.emit("add", {
              index: ev.index,
              sender: this,
              uiController: uc
            });
            uc.viewModel.emitter.on("dispose", this.onListItemDispose_);
            uc.viewModel.emitter.on("change", this.onListItemLayout_);
            if (uc instanceof input_binding_1.InputBindingController) {
              var emitter = uc.binding.emitter;
              emitter.on("change", this.onItemInputChange_);
            } else if (uc instanceof monitor_binding_1.MonitorBindingController) {
              var emitter = uc.binding.emitter;
              emitter.on("update", this.onItemMonitorUpdate_);
            } else if (uc instanceof folder_1.FolderController) {
              uc.folder.emitter.on("change", this.onItemFolderFold_);
              var emitter = uc.uiContainer.emitter;
              emitter.on("itemfold", this.onSubitemFolderFold_);
              emitter.on("itemlayout", this.onSubitemLayout_);
              emitter.on("inputchange", this.onSubitemInputChange_);
              emitter.on("monitorupdate", this.onSubitemMonitorUpdate_);
            }
          };
          UiContainer2.prototype.onListRemove_ = function(_) {
            this.emitter.emit("remove", {
              sender: this
            });
          };
          UiContainer2.prototype.onListItemLayout_ = function(ev) {
            if (ev.propertyName === "hidden" || ev.propertyName === "positions") {
              this.emitter.emit("itemlayout", {
                sender: this
              });
            }
          };
          UiContainer2.prototype.onListItemDispose_ = function(_) {
            var _this = this;
            var disposedUcs = this.ucList_.items.filter(function(uc) {
              return uc.viewModel.disposed;
            });
            disposedUcs.forEach(function(uc) {
              _this.ucList_.remove(uc);
            });
          };
          UiContainer2.prototype.onItemInputChange_ = function(ev) {
            this.emitter.emit("inputchange", {
              inputBinding: ev.sender,
              sender: this,
              value: ev.rawValue
            });
          };
          UiContainer2.prototype.onItemMonitorUpdate_ = function(ev) {
            this.emitter.emit("monitorupdate", {
              monitorBinding: ev.sender,
              sender: this,
              value: ev.rawValue
            });
          };
          UiContainer2.prototype.onItemFolderFold_ = function(ev) {
            if (ev.propertyName !== "expanded") {
              return;
            }
            this.emitter.emit("itemfold", {
              expanded: ev.sender.expanded,
              sender: this
            });
          };
          UiContainer2.prototype.onSubitemLayout_ = function(_) {
            this.emitter.emit("itemlayout", {
              sender: this
            });
          };
          UiContainer2.prototype.onSubitemInputChange_ = function(ev) {
            this.emitter.emit("inputchange", {
              inputBinding: ev.inputBinding,
              sender: this,
              value: ev.value
            });
          };
          UiContainer2.prototype.onSubitemMonitorUpdate_ = function(ev) {
            this.emitter.emit("monitorupdate", {
              monitorBinding: ev.monitorBinding,
              sender: this,
              value: ev.value
            });
          };
          UiContainer2.prototype.onSubitemFolderFold_ = function(ev) {
            this.emitter.emit("itemfold", {
              expanded: ev.expanded,
              sender: this
            });
          };
          return UiContainer2;
        }();
        exports3.UiContainer = UiContainer;
      },
      "./src/main/js/model/view-model.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ViewModel = void 0;
        var emitter_1 = __webpack_require__("./src/main/js/misc/emitter.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var disposable_1 = __webpack_require__("./src/main/js/model/disposable.ts");
        var ViewModel = function() {
          function ViewModel2() {
            this.onDispose_ = this.onDispose_.bind(this);
            this.emitter = new emitter_1.Emitter();
            this.positions_ = [];
            this.hidden_ = false;
            this.disposable_ = new disposable_1.Disposable();
            this.disposable_.emitter.on("dispose", this.onDispose_);
          }
          Object.defineProperty(ViewModel2.prototype, "hidden", {
            get: function() {
              return this.hidden_;
            },
            set: function(hidden) {
              if (this.hidden_ === hidden) {
                return;
              }
              this.hidden_ = hidden;
              this.emitter.emit("change", {
                propertyName: "hidden",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(ViewModel2.prototype, "positions", {
            get: function() {
              return this.positions_;
            },
            set: function(positions) {
              if (type_util_1.TypeUtil.deepEqualsArray(positions, this.positions_)) {
                return;
              }
              this.positions_ = positions;
              this.emitter.emit("change", {
                propertyName: "positions",
                sender: this
              });
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(ViewModel2.prototype, "disposed", {
            get: function() {
              return this.disposable_.disposed;
            },
            enumerable: false,
            configurable: true
          });
          ViewModel2.prototype.dispose = function() {
            this.disposable_.dispose();
          };
          ViewModel2.prototype.onDispose_ = function() {
            this.emitter.emit("dispose", {
              sender: this
            });
          };
          return ViewModel2;
        }();
        exports3.ViewModel = ViewModel;
      },
      "./src/main/js/model/view-positions.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.getAll = void 0;
        function getAll() {
          return ["first", "last"];
        }
        exports3.getAll = getAll;
      },
      "./src/main/js/parser/any-point-2d.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.AnyPoint2dParser = void 0;
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var point_2d_1 = __webpack_require__("./src/main/js/model/point-2d.ts");
        exports3.AnyPoint2dParser = function(obj) {
          if (type_util_1.TypeUtil.isEmpty(obj)) {
            return null;
          }
          var x = obj.x;
          var y = obj.y;
          if (typeof x !== "number" || typeof y !== "number") {
            return null;
          }
          return new point_2d_1.Point2d(x, y);
        };
      },
      "./src/main/js/parser/number-color.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.RgbaParser = exports3.RgbParser = void 0;
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        exports3.RgbParser = function(num) {
          return new color_1.Color([num >> 16 & 255, num >> 8 & 255, num & 255], "rgb");
        };
        exports3.RgbaParser = function(num) {
          return new color_1.Color([
            num >> 24 & 255,
            num >> 16 & 255,
            num >> 8 & 255,
            number_util_1.NumberUtil.map(num & 255, 0, 255, 0, 1)
          ], "rgb");
        };
      },
      "./src/main/js/parser/string-color.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.hasAlphaComponent = exports3.CompositeParser = exports3.getNotation = void 0;
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        function parseCssNumberOrPercentage(text, maxValue) {
          var m = text.match(/^(.+)%$/);
          if (!m) {
            return Math.min(parseFloat(text), maxValue);
          }
          return Math.min(parseFloat(m[1]) * 0.01 * maxValue, maxValue);
        }
        var ANGLE_TO_DEG_MAP = {
          deg: function(angle3) {
            return angle3;
          },
          grad: function(angle3) {
            return angle3 * 360 / 400;
          },
          rad: function(angle3) {
            return angle3 * 360 / (2 * Math.PI);
          },
          turn: function(angle3) {
            return angle3 * 360;
          }
        };
        function parseCssNumberOrAngle(text) {
          var m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
          if (!m) {
            return parseFloat(text);
          }
          var angle3 = parseFloat(m[1]);
          var unit = m[2];
          return ANGLE_TO_DEG_MAP[unit](angle3);
        }
        var NOTATION_TO_PARSER_MAP = {
          "func.rgb": function(text) {
            var m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) {
              return null;
            }
            var comps = [
              parseCssNumberOrPercentage(m[1], 255),
              parseCssNumberOrPercentage(m[2], 255),
              parseCssNumberOrPercentage(m[3], 255)
            ];
            if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
              return null;
            }
            return new color_1.Color(comps, "rgb");
          },
          "func.rgba": function(text) {
            var m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) {
              return null;
            }
            var comps = [
              parseCssNumberOrPercentage(m[1], 255),
              parseCssNumberOrPercentage(m[2], 255),
              parseCssNumberOrPercentage(m[3], 255),
              parseCssNumberOrPercentage(m[4], 1)
            ];
            if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
              return null;
            }
            return new color_1.Color(comps, "rgb");
          },
          "func.hsl": function(text) {
            var m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) {
              return null;
            }
            var comps = [
              parseCssNumberOrAngle(m[1]),
              parseCssNumberOrPercentage(m[2], 100),
              parseCssNumberOrPercentage(m[3], 100)
            ];
            if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
              return null;
            }
            return new color_1.Color(comps, "hsl");
          },
          "func.hsla": function(text) {
            var m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) {
              return null;
            }
            var comps = [
              parseCssNumberOrAngle(m[1]),
              parseCssNumberOrPercentage(m[2], 100),
              parseCssNumberOrPercentage(m[3], 100),
              parseCssNumberOrPercentage(m[4], 1)
            ];
            if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
              return null;
            }
            return new color_1.Color(comps, "hsl");
          },
          "hex.rgb": function(text) {
            var mRrggbb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
            if (mRrggbb) {
              return new color_1.Color([
                parseInt(mRrggbb[1] + mRrggbb[1], 16),
                parseInt(mRrggbb[2] + mRrggbb[2], 16),
                parseInt(mRrggbb[3] + mRrggbb[3], 16)
              ], "rgb");
            }
            var mRgb = text.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
            if (mRgb) {
              return new color_1.Color([parseInt(mRgb[1], 16), parseInt(mRgb[2], 16), parseInt(mRgb[3], 16)], "rgb");
            }
            return null;
          },
          "hex.rgba": function(text) {
            var mRrggbb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
            if (mRrggbb) {
              return new color_1.Color([
                parseInt(mRrggbb[1] + mRrggbb[1], 16),
                parseInt(mRrggbb[2] + mRrggbb[2], 16),
                parseInt(mRrggbb[3] + mRrggbb[3], 16),
                number_util_1.NumberUtil.map(parseInt(mRrggbb[4] + mRrggbb[4], 16), 0, 255, 0, 1)
              ], "rgb");
            }
            var mRgb = text.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
            if (mRgb) {
              return new color_1.Color([
                parseInt(mRgb[1], 16),
                parseInt(mRgb[2], 16),
                parseInt(mRgb[3], 16),
                number_util_1.NumberUtil.map(parseInt(mRgb[4], 16), 0, 255, 0, 1)
              ], "rgb");
            }
            return null;
          }
        };
        function getNotation(text) {
          var notations = Object.keys(NOTATION_TO_PARSER_MAP);
          return notations.reduce(function(result, notation) {
            if (result) {
              return result;
            }
            var subparser = NOTATION_TO_PARSER_MAP[notation];
            return subparser(text) ? notation : null;
          }, null);
        }
        exports3.getNotation = getNotation;
        exports3.CompositeParser = function(text) {
          var notation = getNotation(text);
          return notation ? NOTATION_TO_PARSER_MAP[notation](text) : null;
        };
        function hasAlphaComponent(notation) {
          return notation === "func.hsla" || notation === "func.rgba" || notation === "hex.rgba";
        }
        exports3.hasAlphaComponent = hasAlphaComponent;
      },
      "./src/main/js/parser/string-number.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.StringNumberParser = void 0;
        exports3.StringNumberParser = function(text) {
          var num = parseFloat(text);
          if (isNaN(num)) {
            return null;
          }
          return num;
        };
      },
      "./src/main/js/tweakpane-without-style.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.TweakpaneWithoutStyle = void 0;
        var root_1 = __webpack_require__("./src/main/js/api/root.ts");
        var root_2 = __webpack_require__("./src/main/js/controller/root.ts");
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var view_model_1 = __webpack_require__("./src/main/js/model/view-model.ts");
        function createDefaultWrapperElement(document2) {
          var elem = document2.createElement("div");
          elem.classList.add(class_name_1.ClassName("dfw")());
          if (document2.body) {
            document2.body.appendChild(elem);
          }
          return elem;
        }
        var TweakpaneWithoutStyle = function(_super) {
          __extends(TweakpaneWithoutStyle2, _super);
          function TweakpaneWithoutStyle2(opt_config) {
            var _this = this;
            var config = opt_config || {};
            var document2 = type_util_1.TypeUtil.getOrDefault(config.document, DomUtil.getWindowDocument());
            var rootController = new root_2.RootController(document2, {
              expanded: config.expanded,
              viewModel: new view_model_1.ViewModel(),
              title: config.title
            });
            _this = _super.call(this, rootController) || this;
            _this.containerElem_ = config.container || createDefaultWrapperElement(document2);
            _this.containerElem_.appendChild(_this.element);
            _this.doc_ = document2;
            _this.usesDefaultWrapper_ = !config.container;
            return _this;
          }
          TweakpaneWithoutStyle2.prototype.dispose = function() {
            var containerElem = this.containerElem_;
            if (!containerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            if (this.usesDefaultWrapper_) {
              var parentElem = containerElem.parentElement;
              if (parentElem) {
                parentElem.removeChild(containerElem);
              }
            }
            this.containerElem_ = null;
            this.doc_ = null;
            _super.prototype.dispose.call(this);
          };
          Object.defineProperty(TweakpaneWithoutStyle2.prototype, "document", {
            get: function() {
              if (!this.doc_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.doc_;
            },
            enumerable: false,
            configurable: true
          });
          return TweakpaneWithoutStyle2;
        }(root_1.RootApi);
        exports3.TweakpaneWithoutStyle = TweakpaneWithoutStyle;
      },
      "./src/main/js/view/button.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ButtonView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("btn");
        var ButtonView = function(_super) {
          __extends(ButtonView2, _super);
          function ButtonView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.button = config.button;
            _this.element.classList.add(className());
            var buttonElem = document2.createElement("button");
            buttonElem.classList.add(className("b"));
            buttonElem.textContent = _this.button.title;
            _this.element.appendChild(buttonElem);
            _this.buttonElem_ = buttonElem;
            config.model.emitter.on("dispose", function() {
              _this.buttonElem_ = DisposingUtil.disposeElement(_this.buttonElem_);
            });
            return _this;
          }
          Object.defineProperty(ButtonView2.prototype, "buttonElement", {
            get: function() {
              if (!this.buttonElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.buttonElem_;
            },
            enumerable: false,
            configurable: true
          });
          return ButtonView2;
        }(view_1.View);
        exports3.ButtonView = ButtonView;
      },
      "./src/main/js/view/folder.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.FolderView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("fld");
        var FolderView = function(_super) {
          __extends(FolderView2, _super);
          function FolderView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onFolderChange_ = _this.onFolderChange_.bind(_this);
            _this.folder_ = config.folder;
            _this.folder_.emitter.on("change", _this.onFolderChange_);
            _this.element.classList.add(className());
            var titleElem = document2.createElement("button");
            titleElem.classList.add(className("t"));
            titleElem.textContent = _this.folder_.title;
            _this.element.appendChild(titleElem);
            _this.titleElem_ = titleElem;
            var markElem = document2.createElement("div");
            markElem.classList.add(className("m"));
            _this.titleElem_.appendChild(markElem);
            var containerElem = document2.createElement("div");
            containerElem.classList.add(className("c"));
            _this.element.appendChild(containerElem);
            _this.containerElem_ = containerElem;
            _this.applyModel_();
            config.model.emitter.on("dispose", function() {
              _this.containerElem_ = DisposingUtil.disposeElement(_this.containerElem_);
              _this.titleElem_ = DisposingUtil.disposeElement(_this.titleElem_);
            });
            return _this;
          }
          Object.defineProperty(FolderView2.prototype, "titleElement", {
            get: function() {
              if (!this.titleElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.titleElem_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FolderView2.prototype, "containerElement", {
            get: function() {
              if (!this.containerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.containerElem_;
            },
            enumerable: false,
            configurable: true
          });
          FolderView2.prototype.applyModel_ = function() {
            var containerElem = this.containerElem_;
            if (!containerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var expanded = this.folder_.styleExpanded;
            var expandedClass = className(void 0, "expanded");
            if (expanded) {
              this.element.classList.add(expandedClass);
            } else {
              this.element.classList.remove(expandedClass);
            }
            containerElem.style.height = this.folder_.styleHeight;
          };
          FolderView2.prototype.onFolderChange_ = function() {
            this.applyModel_();
          };
          return FolderView2;
        }(view_1.View);
        exports3.FolderView = FolderView;
      },
      "./src/main/js/view/input/a-palette.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.APaletteInputView = void 0;
        var ColorConverter = __webpack_require__("./src/main/js/converter/color.ts");
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("apl", "input");
        var APaletteInputView = function(_super) {
          __extends(APaletteInputView2, _super);
          function APaletteInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.value = config.value;
            _this.value.emitter.on("change", _this.onValueChange_);
            _this.element.classList.add(className());
            _this.element.tabIndex = 0;
            var barElem = document2.createElement("div");
            barElem.classList.add(className("b"));
            _this.element.appendChild(barElem);
            var colorElem = document2.createElement("div");
            colorElem.classList.add(className("c"));
            barElem.appendChild(colorElem);
            _this.colorElem_ = colorElem;
            var markerElem = document2.createElement("div");
            markerElem.classList.add(className("m"));
            _this.element.appendChild(markerElem);
            _this.markerElem_ = markerElem;
            var previewElem = document2.createElement("div");
            previewElem.classList.add(className("p"));
            _this.markerElem_.appendChild(previewElem);
            _this.previewElem_ = previewElem;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.colorElem_ = DisposingUtil.disposeElement(_this.colorElem_);
              _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
            });
            return _this;
          }
          APaletteInputView2.prototype.update = function() {
            if (!this.markerElem_ || !this.previewElem_ || !this.colorElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var c = this.value.rawValue;
            var rgbaComps = c.getComponents("rgb");
            var leftColor = new color_1.Color([rgbaComps[0], rgbaComps[1], rgbaComps[2], 0], "rgb");
            var rightColor = new color_1.Color([rgbaComps[0], rgbaComps[1], rgbaComps[2], 255], "rgb");
            var gradientComps = [
              "to right",
              ColorConverter.toFunctionalRgbaString(leftColor),
              ColorConverter.toFunctionalRgbaString(rightColor)
            ];
            this.colorElem_.style.background = "linear-gradient(" + gradientComps.join(",") + ")";
            this.previewElem_.style.backgroundColor = ColorConverter.toFunctionalRgbaString(c);
            var left = number_util_1.NumberUtil.map(rgbaComps[3], 0, 1, 0, 100);
            this.markerElem_.style.left = left + "%";
          };
          APaletteInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return APaletteInputView2;
        }(view_1.View);
        exports3.APaletteInputView = APaletteInputView;
      },
      "./src/main/js/view/input/checkbox.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.CheckboxInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("ckb", "input");
        var CheckboxInputView = function(_super) {
          __extends(CheckboxInputView2, _super);
          function CheckboxInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.element.classList.add(className());
            var labelElem = document2.createElement("label");
            labelElem.classList.add(className("l"));
            _this.element.appendChild(labelElem);
            var inputElem = document2.createElement("input");
            inputElem.classList.add(className("i"));
            inputElem.type = "checkbox";
            labelElem.appendChild(inputElem);
            _this.inputElem_ = inputElem;
            var markElem = document2.createElement("div");
            markElem.classList.add(className("m"));
            labelElem.appendChild(markElem);
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
            });
            return _this;
          }
          Object.defineProperty(CheckboxInputView2.prototype, "inputElement", {
            get: function() {
              if (!this.inputElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElem_;
            },
            enumerable: false,
            configurable: true
          });
          CheckboxInputView2.prototype.update = function() {
            if (!this.inputElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            this.inputElem_.checked = this.value.rawValue;
          };
          CheckboxInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return CheckboxInputView2;
        }(view_1.View);
        exports3.CheckboxInputView = CheckboxInputView;
      },
      "./src/main/js/view/input/color-component-texts.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorComponentTextsInputView = void 0;
        var number_1 = __webpack_require__("./src/main/js/formatter/number.ts");
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("cctxts", "input");
        var FORMATTER = new number_1.NumberFormatter(0);
        function createModeSelectElement(document2) {
          var selectElem = document2.createElement("select");
          var items = [
            {text: "RGB", value: "rgb"},
            {text: "HSL", value: "hsl"},
            {text: "HSV", value: "hsv"}
          ];
          selectElem.appendChild(items.reduce(function(frag, item) {
            var optElem = document2.createElement("option");
            optElem.textContent = item.text;
            optElem.value = item.value;
            frag.appendChild(optElem);
            return frag;
          }, document2.createDocumentFragment()));
          return selectElem;
        }
        var ColorComponentTextsInputView = function(_super) {
          __extends(ColorComponentTextsInputView2, _super);
          function ColorComponentTextsInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.element.classList.add(className());
            var modeElem = document2.createElement("div");
            modeElem.classList.add(className("m"));
            _this.modeSelectElement = createModeSelectElement(document2);
            _this.modeSelectElement.classList.add(className("ms"));
            modeElem.appendChild(_this.modeSelectElement);
            var modeMarkerElem = document2.createElement("div");
            modeMarkerElem.classList.add(className("mm"));
            modeElem.appendChild(modeMarkerElem);
            _this.element.appendChild(modeElem);
            var wrapperElem = document2.createElement("div");
            wrapperElem.classList.add(className("w"));
            _this.element.appendChild(wrapperElem);
            var inputElems = [0, 1, 2].map(function() {
              var inputElem = document2.createElement("input");
              inputElem.classList.add(className("i"));
              inputElem.type = "text";
              return inputElem;
            });
            inputElems.forEach(function(elem) {
              wrapperElem.appendChild(elem);
            });
            _this.inputElems_ = [inputElems[0], inputElems[1], inputElems[2]];
            _this.pickedColor = config.pickedColor;
            _this.pickedColor.emitter.on("change", _this.onValueChange_);
            _this.update();
            config.model.emitter.on("dispose", function() {
              if (_this.inputElems_) {
                _this.inputElems_.forEach(function(elem) {
                  DisposingUtil.disposeElement(elem);
                });
                _this.inputElems_ = null;
              }
            });
            return _this;
          }
          Object.defineProperty(ColorComponentTextsInputView2.prototype, "inputElements", {
            get: function() {
              if (!this.inputElems_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElems_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(ColorComponentTextsInputView2.prototype, "value", {
            get: function() {
              return this.pickedColor.value;
            },
            enumerable: false,
            configurable: true
          });
          ColorComponentTextsInputView2.prototype.update = function() {
            var inputElems = this.inputElems_;
            if (!inputElems) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var comps = this.pickedColor.value.rawValue.getComponents(this.pickedColor.mode);
            comps.forEach(function(comp, index) {
              var inputElem = inputElems[index];
              if (!inputElem) {
                return;
              }
              inputElem.value = FORMATTER.format(comp);
            });
          };
          ColorComponentTextsInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return ColorComponentTextsInputView2;
        }(view_1.View);
        exports3.ColorComponentTextsInputView = ColorComponentTextsInputView;
      },
      "./src/main/js/view/input/color-picker.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var __spreadArrays = this && this.__spreadArrays || function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorPickerInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var type_util_1 = __webpack_require__("./src/main/js/misc/type-util.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("clp", "input");
        var ColorPickerInputView = function(_super) {
          __extends(ColorPickerInputView2, _super);
          function ColorPickerInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onFoldableChange_ = _this.onFoldableChange_.bind(_this);
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.pickedColor = config.pickedColor;
            _this.pickedColor.value.emitter.on("change", _this.onValueChange_);
            _this.foldable = config.foldable;
            _this.foldable.emitter.on("change", _this.onFoldableChange_);
            _this.element.classList.add(className());
            var hsvElem = document2.createElement("div");
            hsvElem.classList.add(className("hsv"));
            var svElem = document2.createElement("div");
            svElem.classList.add(className("sv"));
            _this.svPaletteView_ = config.svPaletteInputView;
            svElem.appendChild(_this.svPaletteView_.element);
            hsvElem.appendChild(svElem);
            var hElem = document2.createElement("div");
            hElem.classList.add(className("h"));
            _this.hPaletteView_ = config.hPaletteInputView;
            hElem.appendChild(_this.hPaletteView_.element);
            hsvElem.appendChild(hElem);
            _this.element.appendChild(hsvElem);
            var rgbElem = document2.createElement("div");
            rgbElem.classList.add(className("rgb"));
            _this.compTextsView_ = config.componentTextsView;
            rgbElem.appendChild(_this.compTextsView_.element);
            _this.element.appendChild(rgbElem);
            if (config.alphaInputViews) {
              _this.alphaViews_ = {
                palette: config.alphaInputViews.palette,
                text: config.alphaInputViews.text
              };
              var aElem = document2.createElement("div");
              aElem.classList.add(className("a"));
              var apElem = document2.createElement("div");
              apElem.classList.add(className("ap"));
              apElem.appendChild(_this.alphaViews_.palette.element);
              aElem.appendChild(apElem);
              var atElem = document2.createElement("div");
              atElem.classList.add(className("at"));
              atElem.appendChild(_this.alphaViews_.text.element);
              aElem.appendChild(atElem);
              _this.element.appendChild(aElem);
            }
            _this.update();
            return _this;
          }
          Object.defineProperty(ColorPickerInputView2.prototype, "allFocusableElements", {
            get: function() {
              var elems = __spreadArrays([
                this.svPaletteView_.element,
                this.hPaletteView_.element
              ], this.compTextsView_.inputElements);
              if (this.alphaViews_) {
                elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
              }
              return type_util_1.TypeUtil.forceCast(elems);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(ColorPickerInputView2.prototype, "value", {
            get: function() {
              return this.pickedColor.value;
            },
            enumerable: false,
            configurable: true
          });
          ColorPickerInputView2.prototype.update = function() {
            if (this.foldable.expanded) {
              this.element.classList.add(className(void 0, "expanded"));
            } else {
              this.element.classList.remove(className(void 0, "expanded"));
            }
          };
          ColorPickerInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          ColorPickerInputView2.prototype.onFoldableChange_ = function() {
            this.update();
          };
          return ColorPickerInputView2;
        }(view_1.View);
        exports3.ColorPickerInputView = ColorPickerInputView;
      },
      "./src/main/js/view/input/color-swatch-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorSwatchTextInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("cswtxt", "input");
        var ColorSwatchTextInputView = function(_super) {
          __extends(ColorSwatchTextInputView2, _super);
          function ColorSwatchTextInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.element.classList.add(className());
            var swatchElem = document2.createElement("div");
            swatchElem.classList.add(className("s"));
            _this.swatchInputView_ = config.swatchInputView;
            swatchElem.appendChild(_this.swatchInputView_.element);
            _this.element.appendChild(swatchElem);
            var textElem = document2.createElement("div");
            textElem.classList.add(className("t"));
            _this.textInputView = config.textInputView;
            textElem.appendChild(_this.textInputView.element);
            _this.element.appendChild(textElem);
            return _this;
          }
          Object.defineProperty(ColorSwatchTextInputView2.prototype, "value", {
            get: function() {
              return this.textInputView.value;
            },
            enumerable: false,
            configurable: true
          });
          ColorSwatchTextInputView2.prototype.update = function() {
            this.swatchInputView_.update();
            this.textInputView.update();
          };
          return ColorSwatchTextInputView2;
        }(view_1.View);
        exports3.ColorSwatchTextInputView = ColorSwatchTextInputView;
      },
      "./src/main/js/view/input/color-swatch.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ColorSwatchInputView = void 0;
        var ColorConverter = __webpack_require__("./src/main/js/converter/color.ts");
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("csw", "input");
        var ColorSwatchInputView = function(_super) {
          __extends(ColorSwatchInputView2, _super);
          function ColorSwatchInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            if (_this.element === null) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.element.classList.add(className());
            var swatchElem = document2.createElement("div");
            swatchElem.classList.add(className("sw"));
            _this.element.appendChild(swatchElem);
            _this.swatchElem_ = swatchElem;
            var buttonElem = document2.createElement("button");
            buttonElem.classList.add(className("b"));
            _this.element.appendChild(buttonElem);
            _this.buttonElem_ = buttonElem;
            var pickerElem = document2.createElement("div");
            pickerElem.classList.add(className("p"));
            _this.pickerView_ = config.pickerInputView;
            pickerElem.appendChild(_this.pickerView_.element);
            _this.element.appendChild(pickerElem);
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.buttonElem_ = DisposingUtil.disposeElement(_this.buttonElem_);
              _this.swatchElem_ = DisposingUtil.disposeElement(_this.swatchElem_);
            });
            return _this;
          }
          Object.defineProperty(ColorSwatchInputView2.prototype, "buttonElement", {
            get: function() {
              if (this.buttonElem_ === null) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.buttonElem_;
            },
            enumerable: false,
            configurable: true
          });
          ColorSwatchInputView2.prototype.update = function() {
            if (!this.swatchElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var value = this.value.rawValue;
            this.swatchElem_.style.backgroundColor = ColorConverter.toHexRgbaString(value);
          };
          ColorSwatchInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return ColorSwatchInputView2;
        }(view_1.View);
        exports3.ColorSwatchInputView = ColorSwatchInputView;
      },
      "./src/main/js/view/input/h-palette.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.HPaletteInputView = void 0;
        var ColorConverter = __webpack_require__("./src/main/js/converter/color.ts");
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var color_1 = __webpack_require__("./src/main/js/model/color.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("hpl", "input");
        var HPaletteInputView = function(_super) {
          __extends(HPaletteInputView2, _super);
          function HPaletteInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.value = config.value;
            _this.value.emitter.on("change", _this.onValueChange_);
            _this.element.classList.add(className());
            _this.element.tabIndex = 0;
            var colorElem = document2.createElement("div");
            colorElem.classList.add(className("c"));
            _this.element.appendChild(colorElem);
            _this.colorElem_ = colorElem;
            var markerElem = document2.createElement("div");
            markerElem.classList.add(className("m"));
            _this.element.appendChild(markerElem);
            _this.markerElem_ = markerElem;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.colorElem_ = DisposingUtil.disposeElement(_this.colorElem_);
              _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
            });
            return _this;
          }
          HPaletteInputView2.prototype.update = function() {
            if (!this.markerElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var c = this.value.rawValue;
            var h = c.getComponents("hsv")[0];
            this.markerElem_.style.backgroundColor = ColorConverter.toFunctionalRgbString(new color_1.Color([h, 100, 100], "hsv"));
            var left = number_util_1.NumberUtil.map(h, 0, 360, 0, 100);
            this.markerElem_.style.left = left + "%";
          };
          HPaletteInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return HPaletteInputView2;
        }(view_1.View);
        exports3.HPaletteInputView = HPaletteInputView;
      },
      "./src/main/js/view/input/list.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.ListInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("lst", "input");
        var ListInputView = function(_super) {
          __extends(ListInputView2, _super);
          function ListInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.element.classList.add(className());
            _this.stringifyValue_ = config.stringifyValue;
            var selectElem = document2.createElement("select");
            selectElem.classList.add(className("s"));
            config.options.forEach(function(item, index) {
              var optionElem = document2.createElement("option");
              optionElem.dataset.index = String(index);
              optionElem.textContent = item.text;
              optionElem.value = _this.stringifyValue_(item.value);
              selectElem.appendChild(optionElem);
            });
            _this.element.appendChild(selectElem);
            _this.selectElem_ = selectElem;
            var markElem = document2.createElement("div");
            markElem.classList.add(className("m"));
            _this.element.appendChild(markElem);
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.selectElem_ = DisposingUtil.disposeElement(_this.selectElem_);
            });
            return _this;
          }
          Object.defineProperty(ListInputView2.prototype, "selectElement", {
            get: function() {
              if (!this.selectElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.selectElem_;
            },
            enumerable: false,
            configurable: true
          });
          ListInputView2.prototype.update = function() {
            if (!this.selectElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            this.selectElem_.value = this.stringifyValue_(this.value.rawValue);
          };
          ListInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return ListInputView2;
        }(view_1.View);
        exports3.ListInputView = ListInputView;
      },
      "./src/main/js/view/input/point-2d-pad-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dPadTextInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("p2dpadtxt", "input");
        var Point2dPadTextInputView = function(_super) {
          __extends(Point2dPadTextInputView2, _super);
          function Point2dPadTextInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.element.classList.add(className());
            var padWrapperElem = document2.createElement("div");
            padWrapperElem.classList.add(className("w"));
            _this.element.appendChild(padWrapperElem);
            var buttonElem = document2.createElement("button");
            buttonElem.classList.add(className("b"));
            buttonElem.appendChild(DomUtil.createSvgIconElement(document2, "p2dpad"));
            padWrapperElem.appendChild(buttonElem);
            _this.padButtonElem_ = buttonElem;
            var padElem = document2.createElement("div");
            padElem.classList.add(className("p"));
            padWrapperElem.appendChild(padElem);
            _this.padInputView_ = config.padInputView;
            padElem.appendChild(_this.padInputView_.element);
            var textElem = document2.createElement("div");
            textElem.classList.add(className("t"));
            _this.textInputView_ = config.textInputView;
            textElem.appendChild(_this.textInputView_.element);
            _this.element.appendChild(textElem);
            return _this;
          }
          Object.defineProperty(Point2dPadTextInputView2.prototype, "value", {
            get: function() {
              return this.textInputView_.value;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Point2dPadTextInputView2.prototype, "padButtonElement", {
            get: function() {
              return this.padButtonElem_;
            },
            enumerable: false,
            configurable: true
          });
          Point2dPadTextInputView2.prototype.update = function() {
            this.padInputView_.update();
            this.textInputView_.update();
          };
          return Point2dPadTextInputView2;
        }(view_1.View);
        exports3.Point2dPadTextInputView = Point2dPadTextInputView;
      },
      "./src/main/js/view/input/point-2d-pad.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dPadInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var SVG_NS = DomUtil.SVG_NS;
        var className = class_name_1.ClassName("p2dpad", "input");
        var Point2dPadInputView = function(_super) {
          __extends(Point2dPadInputView2, _super);
          function Point2dPadInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onFoldableChange_ = _this.onFoldableChange_.bind(_this);
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.foldable = config.foldable;
            _this.foldable.emitter.on("change", _this.onFoldableChange_);
            _this.invertsY_ = config.invertsY;
            _this.maxValue_ = config.maxValue;
            _this.element.classList.add(className());
            var padElem = document2.createElement("div");
            padElem.tabIndex = 0;
            padElem.classList.add(className("p"));
            _this.element.appendChild(padElem);
            _this.padElem_ = padElem;
            var svgElem = document2.createElementNS(SVG_NS, "svg");
            svgElem.classList.add(className("g"));
            _this.padElem_.appendChild(svgElem);
            _this.svgElem_ = svgElem;
            var xAxisElem = document2.createElementNS(SVG_NS, "line");
            xAxisElem.classList.add(className("ax"));
            xAxisElem.setAttributeNS(null, "x1", "0");
            xAxisElem.setAttributeNS(null, "y1", "50%");
            xAxisElem.setAttributeNS(null, "x2", "100%");
            xAxisElem.setAttributeNS(null, "y2", "50%");
            _this.svgElem_.appendChild(xAxisElem);
            var yAxisElem = document2.createElementNS(SVG_NS, "line");
            yAxisElem.classList.add(className("ax"));
            yAxisElem.setAttributeNS(null, "x1", "50%");
            yAxisElem.setAttributeNS(null, "y1", "0");
            yAxisElem.setAttributeNS(null, "x2", "50%");
            yAxisElem.setAttributeNS(null, "y2", "100%");
            _this.svgElem_.appendChild(yAxisElem);
            var lineElem = document2.createElementNS(SVG_NS, "line");
            lineElem.classList.add(className("l"));
            lineElem.setAttributeNS(null, "x1", "50%");
            lineElem.setAttributeNS(null, "y1", "50%");
            _this.svgElem_.appendChild(lineElem);
            _this.lineElem_ = lineElem;
            var markerElem = document2.createElementNS(SVG_NS, "circle");
            markerElem.classList.add(className("m"));
            markerElem.setAttributeNS(null, "r", "2px");
            _this.svgElem_.appendChild(markerElem);
            _this.markerElem_ = markerElem;
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.padElem_ = DisposingUtil.disposeElement(_this.padElem_);
            });
            return _this;
          }
          Object.defineProperty(Point2dPadInputView2.prototype, "padElement", {
            get: function() {
              if (!this.padElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.padElem_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Point2dPadInputView2.prototype, "allFocusableElements", {
            get: function() {
              if (!this.padElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return [this.padElem_];
            },
            enumerable: false,
            configurable: true
          });
          Point2dPadInputView2.prototype.update = function() {
            if (this.foldable.expanded) {
              this.element.classList.add(className(void 0, "expanded"));
            } else {
              this.element.classList.remove(className(void 0, "expanded"));
            }
            var lineElem = this.lineElem_;
            var markerElem = this.markerElem_;
            if (!lineElem || !markerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var _a2 = this.value.rawValue.getComponents(), x = _a2[0], y = _a2[1];
            var max4 = this.maxValue_;
            var px = number_util_1.NumberUtil.map(x, -max4, +max4, 0, 100);
            var py = number_util_1.NumberUtil.map(y, -max4, +max4, 0, 100);
            var ipy = this.invertsY_ ? 100 - py : py;
            lineElem.setAttributeNS(null, "x2", px + "%");
            lineElem.setAttributeNS(null, "y2", ipy + "%");
            markerElem.setAttributeNS(null, "cx", px + "%");
            markerElem.setAttributeNS(null, "cy", ipy + "%");
          };
          Point2dPadInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          Point2dPadInputView2.prototype.onFoldableChange_ = function() {
            this.update();
          };
          return Point2dPadInputView2;
        }(view_1.View);
        exports3.Point2dPadInputView = Point2dPadInputView;
      },
      "./src/main/js/view/input/point-2d-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.Point2dTextInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var COMPONENT_LABELS = ["X", "Y"];
        var className = class_name_1.ClassName("p2dtxt", "input");
        var Point2dTextInputView = function(_super) {
          __extends(Point2dTextInputView2, _super);
          function Point2dTextInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.formatters_ = [config.xFormatter, config.yFormatter];
            _this.element.classList.add(className());
            var inputElems = COMPONENT_LABELS.map(function() {
              var inputElem = document2.createElement("input");
              inputElem.classList.add(className("i"));
              inputElem.type = "text";
              return inputElem;
            });
            COMPONENT_LABELS.forEach(function(_, index) {
              var elem = document2.createElement("div");
              elem.classList.add(className("w"));
              elem.appendChild(inputElems[index]);
              _this.element.appendChild(elem);
            });
            _this.inputElems_ = [inputElems[0], inputElems[1]];
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              if (_this.inputElems_) {
                _this.inputElems_.forEach(function(elem) {
                  DisposingUtil.disposeElement(elem);
                });
                _this.inputElems_ = null;
              }
            });
            return _this;
          }
          Object.defineProperty(Point2dTextInputView2.prototype, "inputElements", {
            get: function() {
              if (!this.inputElems_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElems_;
            },
            enumerable: false,
            configurable: true
          });
          Point2dTextInputView2.prototype.update = function() {
            var _this = this;
            var inputElems = this.inputElems_;
            if (!inputElems) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var xyComps = this.value.rawValue.getComponents();
            xyComps.forEach(function(comp, index) {
              var inputElem = inputElems[index];
              inputElem.value = _this.formatters_[index].format(comp);
            });
          };
          Point2dTextInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return Point2dTextInputView2;
        }(view_1.View);
        exports3.Point2dTextInputView = Point2dTextInputView;
      },
      "./src/main/js/view/input/slider-text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SliderTextInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("sldtxt", "input");
        var SliderTextInputView = function(_super) {
          __extends(SliderTextInputView2, _super);
          function SliderTextInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.element.classList.add(className());
            var sliderElem = document2.createElement("div");
            sliderElem.classList.add(className("s"));
            _this.sliderInputView_ = config.sliderInputView;
            sliderElem.appendChild(_this.sliderInputView_.element);
            _this.element.appendChild(sliderElem);
            var textElem = document2.createElement("div");
            textElem.classList.add(className("t"));
            _this.textInputView_ = config.textInputView;
            textElem.appendChild(_this.textInputView_.element);
            _this.element.appendChild(textElem);
            return _this;
          }
          Object.defineProperty(SliderTextInputView2.prototype, "value", {
            get: function() {
              return this.sliderInputView_.value;
            },
            enumerable: false,
            configurable: true
          });
          SliderTextInputView2.prototype.update = function() {
            this.sliderInputView_.update();
            this.textInputView_.update();
          };
          return SliderTextInputView2;
        }(view_1.View);
        exports3.SliderTextInputView = SliderTextInputView;
      },
      "./src/main/js/view/input/slider.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SliderInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("sld", "input");
        var SliderInputView = function(_super) {
          __extends(SliderInputView2, _super);
          function SliderInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.minValue_ = config.minValue;
            _this.maxValue_ = config.maxValue;
            _this.element.classList.add(className());
            var outerElem = document2.createElement("div");
            outerElem.classList.add(className("o"));
            outerElem.tabIndex = 0;
            _this.element.appendChild(outerElem);
            _this.outerElem_ = outerElem;
            var innerElem = document2.createElement("div");
            innerElem.classList.add(className("i"));
            _this.outerElem_.appendChild(innerElem);
            _this.innerElem_ = innerElem;
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.innerElem_ = DisposingUtil.disposeElement(_this.innerElem_);
              _this.outerElem_ = DisposingUtil.disposeElement(_this.outerElem_);
            });
            return _this;
          }
          Object.defineProperty(SliderInputView2.prototype, "outerElement", {
            get: function() {
              if (!this.outerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.outerElem_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(SliderInputView2.prototype, "innerElement", {
            get: function() {
              if (!this.innerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.innerElem_;
            },
            enumerable: false,
            configurable: true
          });
          SliderInputView2.prototype.update = function() {
            if (!this.innerElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var p = number_util_1.NumberUtil.constrain(number_util_1.NumberUtil.map(this.value.rawValue, this.minValue_, this.maxValue_, 0, 100), 0, 100);
            this.innerElem_.style.width = p + "%";
          };
          SliderInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return SliderInputView2;
        }(view_1.View);
        exports3.SliderInputView = SliderInputView;
      },
      "./src/main/js/view/input/sv-palette.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SvPaletteInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var color_model_1 = __webpack_require__("./src/main/js/misc/color-model.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("svp", "input");
        var CANVAS_RESOL = 64;
        var SvPaletteInputView = function(_super) {
          __extends(SvPaletteInputView2, _super);
          function SvPaletteInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.value = config.value;
            _this.value.emitter.on("change", _this.onValueChange_);
            _this.element.classList.add(className());
            _this.element.tabIndex = 0;
            var canvasElem = document2.createElement("canvas");
            canvasElem.height = CANVAS_RESOL;
            canvasElem.width = CANVAS_RESOL;
            canvasElem.classList.add(className("c"));
            _this.element.appendChild(canvasElem);
            _this.canvasElem_ = canvasElem;
            var markerElem = document2.createElement("div");
            markerElem.classList.add(className("m"));
            _this.element.appendChild(markerElem);
            _this.markerElem_ = markerElem;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.canvasElem_ = DisposingUtil.disposeElement(_this.canvasElem_);
              _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
            });
            return _this;
          }
          Object.defineProperty(SvPaletteInputView2.prototype, "canvasElement", {
            get: function() {
              if (!this.canvasElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.canvasElem_;
            },
            enumerable: false,
            configurable: true
          });
          SvPaletteInputView2.prototype.update = function() {
            if (!this.markerElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var ctx = DomUtil.getCanvasContext(this.canvasElement);
            if (!ctx) {
              return;
            }
            var c = this.value.rawValue;
            var hsvComps = c.getComponents("hsv");
            var width = this.canvasElement.width;
            var height = this.canvasElement.height;
            var imgData = ctx.getImageData(0, 0, width, height);
            var data = imgData.data;
            for (var iy = 0; iy < height; iy++) {
              for (var ix = 0; ix < width; ix++) {
                var s = number_util_1.NumberUtil.map(ix, 0, width, 0, 100);
                var v = number_util_1.NumberUtil.map(iy, 0, height, 100, 0);
                var rgbComps = color_model_1.hsvToRgb(hsvComps[0], s, v);
                var i = (iy * width + ix) * 4;
                data[i] = rgbComps[0];
                data[i + 1] = rgbComps[1];
                data[i + 2] = rgbComps[2];
                data[i + 3] = 255;
              }
            }
            ctx.putImageData(imgData, 0, 0);
            var left = number_util_1.NumberUtil.map(hsvComps[1], 0, 100, 0, 100);
            this.markerElem_.style.left = left + "%";
            var top = number_util_1.NumberUtil.map(hsvComps[2], 0, 100, 100, 0);
            this.markerElem_.style.top = top + "%";
          };
          SvPaletteInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return SvPaletteInputView2;
        }(view_1.View);
        exports3.SvPaletteInputView = SvPaletteInputView;
      },
      "./src/main/js/view/input/text.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.TextInputView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("txt", "input");
        var TextInputView = function(_super) {
          __extends(TextInputView2, _super);
          function TextInputView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueChange_ = _this.onValueChange_.bind(_this);
            _this.formatter_ = config.formatter;
            _this.element.classList.add(className());
            var inputElem = document2.createElement("input");
            inputElem.classList.add(className("i"));
            inputElem.type = "text";
            _this.element.appendChild(inputElem);
            _this.inputElem_ = inputElem;
            config.value.emitter.on("change", _this.onValueChange_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
            });
            return _this;
          }
          Object.defineProperty(TextInputView2.prototype, "inputElement", {
            get: function() {
              if (!this.inputElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElem_;
            },
            enumerable: false,
            configurable: true
          });
          TextInputView2.prototype.update = function() {
            if (!this.inputElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            this.inputElem_.value = this.formatter_.format(this.value.rawValue);
          };
          TextInputView2.prototype.onValueChange_ = function() {
            this.update();
          };
          return TextInputView2;
        }(view_1.View);
        exports3.TextInputView = TextInputView;
      },
      "./src/main/js/view/labeled.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.LabeledView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("lbl");
        function createLabelNode(document2, label) {
          var frag = document2.createDocumentFragment();
          var lineNodes = label.split("\n").map(function(line) {
            return document2.createTextNode(line);
          });
          lineNodes.forEach(function(lineNode, index) {
            if (index > 0) {
              frag.appendChild(document2.createElement("br"));
            }
            frag.appendChild(lineNode);
          });
          return frag;
        }
        var LabeledView = function(_super) {
          __extends(LabeledView2, _super);
          function LabeledView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.label = config.label;
            _this.element.classList.add(className());
            var labelElem = document2.createElement("div");
            labelElem.classList.add(className("l"));
            labelElem.appendChild(createLabelNode(document2, _this.label));
            _this.element.appendChild(labelElem);
            var viewElem = document2.createElement("div");
            viewElem.classList.add(className("v"));
            viewElem.appendChild(config.view.element);
            _this.element.appendChild(viewElem);
            return _this;
          }
          return LabeledView2;
        }(view_1.View);
        exports3.LabeledView = LabeledView;
      },
      "./src/main/js/view/monitor/graph.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.GraphMonitorView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var DomUtil = __webpack_require__("./src/main/js/misc/dom-util.ts");
        var number_util_1 = __webpack_require__("./src/main/js/misc/number-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var SVG_NS = DomUtil.SVG_NS;
        var className = class_name_1.ClassName("grp", "monitor");
        var GraphMonitorView = function(_super) {
          __extends(GraphMonitorView2, _super);
          function GraphMonitorView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onCursorChange_ = _this.onCursorChange_.bind(_this);
            _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
            _this.element.classList.add(className());
            _this.formatter_ = config.formatter;
            _this.minValue_ = config.minValue;
            _this.maxValue_ = config.maxValue;
            _this.cursor_ = config.cursor;
            _this.cursor_.emitter.on("change", _this.onCursorChange_);
            var svgElem = document2.createElementNS(SVG_NS, "svg");
            svgElem.classList.add(className("g"));
            _this.element.appendChild(svgElem);
            _this.svgElem_ = svgElem;
            var lineElem = document2.createElementNS(SVG_NS, "polyline");
            _this.svgElem_.appendChild(lineElem);
            _this.lineElem_ = lineElem;
            var tooltipElem = document2.createElement("div");
            tooltipElem.classList.add(className("t"));
            _this.element.appendChild(tooltipElem);
            _this.tooltipElem_ = tooltipElem;
            config.value.emitter.on("update", _this.onValueUpdate_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.lineElem_ = DisposingUtil.disposeElement(_this.lineElem_);
              _this.svgElem_ = DisposingUtil.disposeElement(_this.svgElem_);
              _this.tooltipElem_ = DisposingUtil.disposeElement(_this.tooltipElem_);
            });
            return _this;
          }
          Object.defineProperty(GraphMonitorView2.prototype, "graphElement", {
            get: function() {
              if (!this.svgElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.svgElem_;
            },
            enumerable: false,
            configurable: true
          });
          GraphMonitorView2.prototype.update = function() {
            var tooltipElem = this.tooltipElem_;
            if (!this.lineElem_ || !this.svgElem_ || !tooltipElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var bounds = this.svgElem_.getBoundingClientRect();
            var maxIndex = this.value.totalCount - 1;
            var min4 = this.minValue_;
            var max4 = this.maxValue_;
            this.lineElem_.setAttributeNS(null, "points", this.value.rawValues.map(function(v, index) {
              var x = number_util_1.NumberUtil.map(index, 0, maxIndex, 0, bounds.width);
              var y = number_util_1.NumberUtil.map(v, min4, max4, bounds.height, 0);
              return [x, y].join(",");
            }).join(" "));
            var value = this.value.rawValues[this.cursor_.index];
            if (value === void 0) {
              tooltipElem.classList.remove(className("t", "valid"));
              return;
            }
            tooltipElem.classList.add(className("t", "valid"));
            var tx = number_util_1.NumberUtil.map(this.cursor_.index, 0, maxIndex, 0, bounds.width);
            var ty = number_util_1.NumberUtil.map(value, min4, max4, bounds.height, 0);
            tooltipElem.style.left = tx + "px";
            tooltipElem.style.top = ty + "px";
            tooltipElem.textContent = "" + this.formatter_.format(value);
          };
          GraphMonitorView2.prototype.onValueUpdate_ = function() {
            this.update();
          };
          GraphMonitorView2.prototype.onCursorChange_ = function() {
            this.update();
          };
          return GraphMonitorView2;
        }(view_1.View);
        exports3.GraphMonitorView = GraphMonitorView;
      },
      "./src/main/js/view/monitor/multi-log.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.MultiLogMonitorView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("mll", "monitor");
        var MultiLogMonitorView = function(_super) {
          __extends(MultiLogMonitorView2, _super);
          function MultiLogMonitorView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
            _this.formatter_ = config.formatter;
            _this.element.classList.add(className());
            var textareaElem = document2.createElement("textarea");
            textareaElem.classList.add(className("i"));
            textareaElem.readOnly = true;
            _this.element.appendChild(textareaElem);
            _this.textareaElem_ = textareaElem;
            config.value.emitter.on("update", _this.onValueUpdate_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.textareaElem_ = DisposingUtil.disposeElement(_this.textareaElem_);
            });
            return _this;
          }
          MultiLogMonitorView2.prototype.update = function() {
            var _this = this;
            var elem = this.textareaElem_;
            if (!elem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
            elem.textContent = this.value.rawValues.map(function(value) {
              return _this.formatter_.format(value);
            }).join("\n");
            if (shouldScroll) {
              elem.scrollTop = elem.scrollHeight;
            }
          };
          MultiLogMonitorView2.prototype.onValueUpdate_ = function() {
            this.update();
          };
          return MultiLogMonitorView2;
        }(view_1.View);
        exports3.MultiLogMonitorView = MultiLogMonitorView;
      },
      "./src/main/js/view/monitor/single-log.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SingleLogMonitorView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("sgl", "monitor");
        var SingleLogMonitorView = function(_super) {
          __extends(SingleLogMonitorView2, _super);
          function SingleLogMonitorView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
            _this.formatter_ = config.formatter;
            _this.element.classList.add(className());
            var inputElem = document2.createElement("input");
            inputElem.classList.add(className("i"));
            inputElem.readOnly = true;
            inputElem.type = "text";
            _this.element.appendChild(inputElem);
            _this.inputElem_ = inputElem;
            config.value.emitter.on("update", _this.onValueUpdate_);
            _this.value = config.value;
            _this.update();
            config.model.emitter.on("dispose", function() {
              _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
            });
            return _this;
          }
          SingleLogMonitorView2.prototype.update = function() {
            if (!this.inputElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var values = this.value.rawValues;
            this.inputElem_.value = values.length > 0 ? this.formatter_.format(values[values.length - 1]) : "";
          };
          SingleLogMonitorView2.prototype.onValueUpdate_ = function() {
            this.update();
          };
          return SingleLogMonitorView2;
        }(view_1.View);
        exports3.SingleLogMonitorView = SingleLogMonitorView;
      },
      "./src/main/js/view/root.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.RootView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("rot");
        var RootView = function(_super) {
          __extends(RootView2, _super);
          function RootView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.onFolderChange_ = _this.onFolderChange_.bind(_this);
            _this.folder_ = config.folder;
            if (_this.folder_) {
              _this.folder_.emitter.on("change", _this.onFolderChange_);
            }
            _this.element.classList.add(className());
            var folder = _this.folder_;
            if (folder) {
              var titleElem = document2.createElement("button");
              titleElem.classList.add(className("t"));
              titleElem.textContent = folder.title;
              _this.element.appendChild(titleElem);
              var markElem = document2.createElement("div");
              markElem.classList.add(className("m"));
              titleElem.appendChild(markElem);
              _this.titleElem_ = titleElem;
            }
            var containerElem = document2.createElement("div");
            containerElem.classList.add(className("c"));
            _this.element.appendChild(containerElem);
            _this.containerElem_ = containerElem;
            _this.applyModel_();
            config.model.emitter.on("dispose", function() {
              _this.containerElem_ = DisposingUtil.disposeElement(_this.containerElem_);
              _this.folder_ = null;
              _this.titleElem_ = DisposingUtil.disposeElement(_this.titleElem_);
            });
            return _this;
          }
          Object.defineProperty(RootView2.prototype, "titleElement", {
            get: function() {
              return this.titleElem_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(RootView2.prototype, "containerElement", {
            get: function() {
              if (!this.containerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.containerElem_;
            },
            enumerable: false,
            configurable: true
          });
          RootView2.prototype.applyModel_ = function() {
            var containerElem = this.containerElem_;
            if (!containerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            var expanded = this.folder_ ? this.folder_.styleExpanded : true;
            var expandedClass = className(void 0, "expanded");
            if (expanded) {
              this.element.classList.add(expandedClass);
            } else {
              this.element.classList.remove(expandedClass);
            }
            containerElem.style.height = this.folder_ ? this.folder_.styleHeight : "auto";
          };
          RootView2.prototype.onFolderChange_ = function() {
            this.applyModel_();
          };
          return RootView2;
        }(view_1.View);
        exports3.RootView = RootView;
      },
      "./src/main/js/view/separator.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
          var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
              d2.__proto__ = b2;
            } || function(d2, b2) {
              for (var p in b2)
                if (b2.hasOwnProperty(p))
                  d2[p] = b2[p];
            };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.SeparatorView = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var view_1 = __webpack_require__("./src/main/js/view/view.ts");
        var className = class_name_1.ClassName("spt");
        var SeparatorView = function(_super) {
          __extends(SeparatorView2, _super);
          function SeparatorView2(document2, config) {
            var _this = _super.call(this, document2, config) || this;
            _this.element.classList.add(className());
            var hrElem = document2.createElement("hr");
            hrElem.classList.add(className("r"));
            _this.element.appendChild(hrElem);
            return _this;
          }
          return SeparatorView2;
        }(view_1.View);
        exports3.SeparatorView = SeparatorView;
      },
      "./src/main/js/view/view.ts": function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {value: true});
        exports3.View = void 0;
        var class_name_1 = __webpack_require__("./src/main/js/misc/class-name.ts");
        var DisposingUtil = __webpack_require__("./src/main/js/misc/disposing-util.ts");
        var pane_error_1 = __webpack_require__("./src/main/js/misc/pane-error.ts");
        var ViewPositions = __webpack_require__("./src/main/js/model/view-positions.ts");
        var className = class_name_1.ClassName("");
        var View = function() {
          function View2(document2, config) {
            this.onChange_ = this.onChange_.bind(this);
            this.onDispose_ = this.onDispose_.bind(this);
            this.model_ = config.model;
            this.model_.emitter.on("change", this.onChange_);
            this.model_.emitter.on("dispose", this.onDispose_);
            this.doc_ = document2;
            this.elem_ = this.doc_.createElement("div");
            this.elem_.classList.add(className());
          }
          Object.defineProperty(View2.prototype, "document", {
            get: function() {
              if (!this.doc_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.doc_;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(View2.prototype, "element", {
            get: function() {
              if (!this.elem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.elem_;
            },
            enumerable: false,
            configurable: true
          });
          View2.prototype.onDispose_ = function() {
            this.doc_ = null;
            this.elem_ = DisposingUtil.disposeElement(this.elem_);
          };
          View2.prototype.onChange_ = function(ev) {
            var elem = this.elem_;
            if (!elem) {
              throw pane_error_1.PaneError.alreadyDisposed();
            }
            if (ev.propertyName === "hidden") {
              var hiddenClass = className(void 0, "hidden");
              if (this.model_.hidden) {
                elem.classList.add(hiddenClass);
              } else {
                elem.classList.remove(hiddenClass);
              }
            } else if (ev.propertyName === "positions") {
              ViewPositions.getAll().forEach(function(pos) {
                elem.classList.remove(className(void 0, pos));
              });
              this.model_.positions.forEach(function(pos) {
                elem.classList.add(className(void 0, pos));
              });
            }
          };
          return View2;
        }();
        exports3.View = View;
      },
      "./src/main/sass/bundle.scss": function(module3, exports3, __webpack_require__) {
        exports3 = module3.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
        exports3.push([module3.i, ".tp-fldv_t,.tp-rotv_t{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--folder-background-color);color:var(--folder-foreground-color);cursor:pointer;display:block;height:24px;line-height:24px;overflow:hidden;padding-left:30px;position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-fldv_t:hover,.tp-rotv_t:hover{background-color:var(--folder-background-color-hover)}.tp-fldv_t:focus,.tp-rotv_t:focus{background-color:var(--folder-background-color-focus)}.tp-fldv_t:active,.tp-rotv_t:active{background-color:var(--folder-background-color-active)}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, var(--folder-foreground-color), var(--folder-foreground-color) 2px, transparent 2px, transparent 4px, var(--folder-foreground-color) 4px);border-radius:2px;bottom:0;content:'';display:block;height:6px;left:12px;margin:auto;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded>.tp-fldv_t>.tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{transform:none}.tp-fldv_c,.tp-rotv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-fldv_c>.tp-fldv.tp-v-first,.tp-rotv_c>.tp-fldv.tp-v-first{margin-top:-4px}.tp-fldv_c>.tp-fldv.tp-v-last,.tp-rotv_c>.tp-fldv.tp-v-last{margin-bottom:-4px}.tp-fldv_c>*:not(.tp-v-first),.tp-rotv_c>*:not(.tp-v-first){margin-top:4px}.tp-fldv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv,.tp-rotv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv{margin-top:0}.tp-fldv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv,.tp-rotv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv{margin-top:0}.tp-fldv.tp-fldv-expanded>.tp-fldv_c,.tp-rotv.tp-rotv-expanded .tp-rotv_c{opacity:1;padding-bottom:4px;padding-top:4px;transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-btnv{padding:0 4px}.tp-btnv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.tp-btnv_b:hover{background-color:var(--button-background-color-hover)}.tp-btnv_b:focus{background-color:var(--button-background-color-focus)}.tp-btnv_b:active{background-color:var(--button-background-color-active)}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-expanded .tp-fldv_t{transition:border-radius 0s}.tp-fldv_c{border-left:var(--folder-background-color) solid 4px}.tp-fldv_t:hover+.tp-fldv_c{border-left-color:var(--folder-background-color-hover)}.tp-fldv_t:focus+.tp-fldv_c{border-left-color:var(--folder-background-color-focus)}.tp-fldv_t:active+.tp-fldv_c{border-left-color:var(--folder-background-color-active)}.tp-fldv_c>.tp-fldv{margin-left:4px}.tp-fldv_c>.tp-fldv>.tp-fldv_t{border-top-left-radius:2px;border-bottom-left-radius:2px}.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_t{border-bottom-left-radius:0}.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:2px}.tp-ckbiv_l{display:block;position:relative}.tp-ckbiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background:red;left:0;opacity:0;position:absolute;top:0}.tp-ckbiv_m{background-color:var(--input-background-color);border-radius:2px;cursor:pointer;display:block;height:20px;position:relative;width:20px}.tp-ckbiv_m::before{background-color:var(--input-foreground-color);border-radius:2px;bottom:4px;content:'';display:block;left:4px;opacity:0;position:absolute;right:4px;top:4px}.tp-ckbiv_i:hover+.tp-ckbiv_m{background-color:var(--input-background-color-hover)}.tp-ckbiv_i:focus+.tp-ckbiv_m{background-color:var(--input-background-color-focus)}.tp-ckbiv_i:active+.tp-ckbiv_m{background-color:var(--input-background-color-active)}.tp-ckbiv_i:checked+.tp-ckbiv_m::before{opacity:1}.tp-cctxtsiv{display:flex;width:100%}.tp-cctxtsiv_m{margin-right:4px;position:relative}.tp-cctxtsiv_ms{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;border-radius:2px;color:var(--label-foreground-color);cursor:pointer;height:20px;line-height:20px;padding:0 18px 0 4px}.tp-cctxtsiv_ms:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsiv_ms:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsiv_ms:active{background-color:var(--input-background-color-active)}.tp-cctxtsiv_mm{border-color:var(--label-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-cctxtsiv_w{display:flex;flex:1}.tp-cctxtsiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;border-radius:0;flex:1;padding:0 4px}.tp-cctxtsiv_i:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsiv_i:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsiv_i:active{background-color:var(--input-background-color-active)}.tp-cctxtsiv_i:first-child{border-bottom-left-radius:2px;border-top-left-radius:2px}.tp-cctxtsiv_i:last-child{border-bottom-right-radius:2px;border-top-right-radius:2px}.tp-cctxtsiv_i+.tp-cctxtsiv_i{margin-left:2px}.tp-clpiv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px;position:relative;visibility:hidden;z-index:1000}.tp-clpiv.tp-clpiv-expanded{display:block;visibility:visible}.tp-clpiv_h,.tp-clpiv_ap{margin-left:6px;margin-right:6px}.tp-clpiv_h{margin-top:4px}.tp-clpiv_rgb{display:flex;margin-top:4px;width:100%}.tp-clpiv_a{display:flex;margin-top:4px;padding-top:8px;position:relative}.tp-clpiv_a:before{background-color:var(--separator-color);content:'';height:4px;left:-4px;position:absolute;right:-4px;top:0}.tp-clpiv_ap{flex:3}.tp-clpiv_at{flex:1;margin-left:4px}.tp-svpiv{border-radius:2px;outline:none;overflow:hidden;position:relative}.tp-svpiv_c{cursor:crosshair;display:block;height:80px;width:100%}.tp-svpiv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;-webkit-filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpiv:focus .tp-svpiv_m{border-color:#fff}.tp-hpliv{cursor:pointer;height:20px;outline:none;position:relative}.tp-hpliv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hpliv_m{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,0.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hpliv:focus .tp-hpliv_m{border-color:#fff}.tp-apliv{cursor:pointer;height:20px;outline:none;position:relative}.tp-apliv_b{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;background-color:#fff;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-apliv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-apliv_m{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,0.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-apliv_p{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-apliv:focus .tp-apliv_p{border-color:#fff}.tp-lstiv{display:block;padding:0;position:relative}.tp-lstiv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;height:20px;line-height:20px;padding:0 4px;width:100%}.tp-lstiv_s:hover{background-color:var(--button-background-color-hover)}.tp-lstiv_s:focus{background-color:var(--button-background-color-focus)}.tp-lstiv_s:active{background-color:var(--button-background-color-active)}.tp-lstiv_m{border-color:var(--button-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-p2dpadiv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px 4px 4px 28px;position:relative;visibility:hidden;z-index:1000}.tp-p2dpadiv.tp-p2dpadiv-expanded{display:block;visibility:visible}.tp-p2dpadiv_p{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpadiv_p:hover{background-color:var(--input-background-color-hover)}.tp-p2dpadiv_p:focus{background-color:var(--input-background-color-focus)}.tp-p2dpadiv_p:active{background-color:var(--input-background-color-active)}.tp-p2dpadiv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpadiv_ax{stroke:var(--input-guide-color)}.tp-p2dpadiv_l{stroke:var(--input-foreground-color);stroke-linecap:round;stroke-dasharray:1px 3px}.tp-p2dpadiv_m{fill:var(--input-foreground-color)}.tp-p2dpadtxtiv{display:flex;position:relative}.tp-p2dpadtxtiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:20px;position:relative;width:20px}.tp-p2dpadtxtiv_b:hover{background-color:var(--button-background-color-hover)}.tp-p2dpadtxtiv_b:focus{background-color:var(--button-background-color-focus)}.tp-p2dpadtxtiv_b:active{background-color:var(--button-background-color-active)}.tp-p2dpadtxtiv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dpadtxtiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-p2dpadtxtiv_t{margin-left:4px}.tp-p2dtxtiv{display:flex}.tp-p2dtxtiv_w{align-items:center;display:flex}.tp-p2dtxtiv_w+.tp-p2dtxtiv_w{margin-left:2px}.tp-p2dtxtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;padding:0 4px;width:100%}.tp-p2dtxtiv_i:hover{background-color:var(--input-background-color-hover)}.tp-p2dtxtiv_i:focus{background-color:var(--input-background-color-focus)}.tp-p2dtxtiv_i:active{background-color:var(--input-background-color-active)}.tp-p2dtxtiv_w:nth-child(1) .tp-p2dtxtiv_i{border-top-right-radius:0;border-bottom-right-radius:0}.tp-p2dtxtiv_w:nth-child(2) .tp-p2dtxtiv_i{border-top-left-radius:0;border-bottom-left-radius:0}.tp-sldiv{display:block;padding:0}.tp-sldiv_o{box-sizing:border-box;cursor:pointer;height:20px;margin:0 6px;outline:none;position:relative}.tp-sldiv_o::before{background-color:var(--input-background-color);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldiv_i{height:100%;left:0;position:absolute;top:0}.tp-sldiv_i::before{background-color:var(--button-background-color);border-radius:2px;bottom:0;content:'';display:block;height:12px;margin:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldiv_o:hover .tp-sldiv_i::before{background-color:var(--button-background-color-hover)}.tp-sldiv_o:focus .tp-sldiv_i::before{background-color:var(--button-background-color-focus)}.tp-sldiv_o:active .tp-sldiv_i::before{background-color:var(--button-background-color-active)}.tp-txtiv{display:block;padding:0}.tp-txtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;padding:0 4px}.tp-txtiv_i:hover{background-color:var(--input-background-color-hover)}.tp-txtiv_i:focus{background-color:var(--input-background-color-focus)}.tp-txtiv_i:active{background-color:var(--input-background-color-active)}.tp-cswiv{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;background-color:#fff;border-radius:2px}.tp-cswiv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%}.tp-cswiv_sw:hover{background-color:var(--input-background-color-hover)}.tp-cswiv_sw:focus{background-color:var(--input-background-color-focus)}.tp-cswiv_sw:active{background-color:var(--input-background-color-active)}.tp-cswiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:20px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:20px}.tp-cswiv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:2px;bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0}.tp-cswiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-cswtxtiv{display:flex;position:relative}.tp-cswtxtiv_s{flex-grow:0;flex-shrink:0;width:20px}.tp-cswtxtiv_t{flex:1;margin-left:4px}.tp-sldtxtiv{display:flex}.tp-sldtxtiv_s{flex:2}.tp-sldtxtiv_t{flex:1;margin-left:4px}.tp-lblv{align-items:center;display:flex;padding-left:4px;padding-right:4px}.tp-lblv_l{color:var(--label-foreground-color);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-grpmv{display:block;padding:0;position:relative}.tp-grpmv_g{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;display:block;height:60px}.tp-grpmv_g polyline{fill:none;stroke:var(--monitor-foreground-color);stroke-linejoin:round}.tp-grpmv_t{color:var(--monitor-foreground-color);font-size:0.9em;left:0;pointer-events:none;position:absolute;text-indent:4px;top:0;visibility:hidden}.tp-grpmv_t.tp-grpmv_t-valid{visibility:visible}.tp-grpmv_t::before{background-color:var(--monitor-foreground-color);border-radius:100%;content:'';display:block;height:4px;left:-2px;position:absolute;top:-2px;width:4px}.tp-sglmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;padding:0 4px}.tp-mllmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;display:block;height:60px;line-height:20px;padding:0 4px;resize:none;white-space:pre}.tp-cswmv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono,Source Code Pro,Menlo,Courier,monospace);--base-background-color: var(--tp-base-background-color, #2f3137);--base-shadow-color: var(--tp-base-shadow-color, rgba(0,0,0,0.2));--button-background-color: var(--tp-button-background-color, #adafb8);--button-background-color-active: var(--tp-button-background-color-active, #d6d7db);--button-background-color-focus: var(--tp-button-background-color-focus, #c8cad0);--button-background-color-hover: var(--tp-button-background-color-hover, #bbbcc4);--button-foreground-color: var(--tp-button-foreground-color, #2f3137);--folder-background-color: var(--tp-folder-background-color, rgba(200,202,208,0.1));--folder-background-color-active: var(--tp-folder-background-color-active, rgba(200,202,208,0.25));--folder-background-color-focus: var(--tp-folder-background-color-focus, rgba(200,202,208,0.2));--folder-background-color-hover: var(--tp-folder-background-color-hover, rgba(200,202,208,0.15));--folder-foreground-color: var(--tp-folder-foreground-color, #c8cad0);--input-background-color: var(--tp-input-background-color, rgba(200,202,208,0.15));--input-background-color-active: var(--tp-input-background-color-active, rgba(200,202,208,0.35));--input-background-color-focus: var(--tp-input-background-color-focus, rgba(200,202,208,0.25));--input-background-color-hover: var(--tp-input-background-color-hover, rgba(200,202,208,0.15));--input-foreground-color: var(--tp-input-foreground-color, #c8cad0);--input-guide-color: var(--tp-input-guide-color, rgba(47,49,55,0.5));--label-foreground-color: var(--tp-label-foreground-color, rgba(200,202,208,0.8));--monitor-background-color: var(--tp-monitor-background-color, rgba(24,24,27,0.5));--monitor-foreground-color: var(--tp-monitor-foreground-color, rgba(200,202,208,0.7));--separator-color: var(--tp-separator-color, rgba(24,24,27,0.3));background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);font-family:var(--font-family);font-size:11px;font-weight:500;text-align:left}.tp-rotv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top-left-radius:6px;border-top-right-radius:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_t{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv_m{transition:none}.tp-rotv_c>.tp-fldv:last-child>.tp-fldv_c{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:last-child:not(.tp-fldv-expanded)>.tp-fldv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:first-child>.tp-fldv_t{border-top-left-radius:6px;border-top-right-radius:6px}.tp-sptv_r{background-color:var(--separator-color);border-width:0;display:block;height:4px;margin:0;width:100%}.tp-v.tp-v-hidden{display:none}\n", ""]);
      }
    })["default"];
  });
});

// node_modules/chroma-js/chroma.js
var require_chroma = __commonJS((exports2, module2) => {
  /**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   */
  (function(global, factory) {
    typeof exports2 === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.chroma = factory();
  })(exports2, function() {
    "use strict";
    var limit = function(x, min5, max5) {
      if (min5 === void 0)
        min5 = 0;
      if (max5 === void 0)
        max5 = 1;
      return x < min5 ? min5 : x > max5 ? max5 : x;
    };
    var clip_rgb = function(rgb) {
      rgb._clipped = false;
      rgb._unclipped = rgb.slice(0);
      for (var i2 = 0; i2 <= 3; i2++) {
        if (i2 < 3) {
          if (rgb[i2] < 0 || rgb[i2] > 255) {
            rgb._clipped = true;
          }
          rgb[i2] = limit(rgb[i2], 0, 255);
        } else if (i2 === 3) {
          rgb[i2] = limit(rgb[i2], 0, 1);
        }
      }
      return rgb;
    };
    var classToType = {};
    for (var i = 0, list = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i < list.length; i += 1) {
      var name = list[i];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    var type = function(obj) {
      return classToType[Object.prototype.toString.call(obj)] || "object";
    };
    var unpack = function(args, keyOrder) {
      if (keyOrder === void 0)
        keyOrder = null;
      if (args.length >= 3) {
        return Array.prototype.slice.call(args);
      }
      if (type(args[0]) == "object" && keyOrder) {
        return keyOrder.split("").filter(function(k) {
          return args[0][k] !== void 0;
        }).map(function(k) {
          return args[0][k];
        });
      }
      return args[0];
    };
    var last = function(args) {
      if (args.length < 2) {
        return null;
      }
      var l = args.length - 1;
      if (type(args[l]) == "string") {
        return args[l].toLowerCase();
      }
      return null;
    };
    var PI = Math.PI;
    var utils2 = {
      clip_rgb,
      limit,
      type,
      unpack,
      last,
      PI,
      TWOPI: PI * 2,
      PITHIRD: PI / 3,
      DEG2RAD: PI / 180,
      RAD2DEG: 180 / PI
    };
    var input = {
      format: {},
      autodetect: []
    };
    var last$1 = utils2.last;
    var clip_rgb$1 = utils2.clip_rgb;
    var type$1 = utils2.type;
    var Color = function Color2() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var me = this;
      if (type$1(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
        return args[0];
      }
      var mode = last$1(args);
      var autodetect = false;
      if (!mode) {
        autodetect = true;
        if (!input.sorted) {
          input.autodetect = input.autodetect.sort(function(a, b) {
            return b.p - a.p;
          });
          input.sorted = true;
        }
        for (var i2 = 0, list2 = input.autodetect; i2 < list2.length; i2 += 1) {
          var chk = list2[i2];
          mode = chk.test.apply(chk, args);
          if (mode) {
            break;
          }
        }
      }
      if (input.format[mode]) {
        var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
        me._rgb = clip_rgb$1(rgb);
      } else {
        throw new Error("unknown format: " + args);
      }
      if (me._rgb.length === 3) {
        me._rgb.push(1);
      }
    };
    Color.prototype.toString = function toString() {
      if (type$1(this.hex) == "function") {
        return this.hex();
      }
      return "[" + this._rgb.join(",") + "]";
    };
    var Color_1 = Color;
    var chroma2 = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(chroma2.Color, [null].concat(args)))();
    };
    chroma2.Color = Color_1;
    chroma2.version = "2.1.1";
    var chroma_1 = chroma2;
    var unpack$1 = utils2.unpack;
    var max4 = Math.max;
    var rgb2cmyk = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$1(args, "rgb");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      r = r / 255;
      g = g / 255;
      b = b / 255;
      var k = 1 - max4(r, max4(g, b));
      var f = k < 1 ? 1 / (1 - k) : 0;
      var c = (1 - r - k) * f;
      var m = (1 - g - k) * f;
      var y = (1 - b - k) * f;
      return [c, m, y, k];
    };
    var rgb2cmyk_1 = rgb2cmyk;
    var unpack$2 = utils2.unpack;
    var cmyk2rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$2(args, "cmyk");
      var c = args[0];
      var m = args[1];
      var y = args[2];
      var k = args[3];
      var alpha = args.length > 4 ? args[4] : 1;
      if (k === 1) {
        return [0, 0, 0, alpha];
      }
      return [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
        m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
        y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
        alpha
      ];
    };
    var cmyk2rgb_1 = cmyk2rgb;
    var unpack$3 = utils2.unpack;
    var type$2 = utils2.type;
    Color_1.prototype.cmyk = function() {
      return rgb2cmyk_1(this._rgb);
    };
    chroma_1.cmyk = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["cmyk"])))();
    };
    input.format.cmyk = cmyk2rgb_1;
    input.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$3(args, "cmyk");
        if (type$2(args) === "array" && args.length === 4) {
          return "cmyk";
        }
      }
    });
    var unpack$4 = utils2.unpack;
    var last$2 = utils2.last;
    var rnd = function(a) {
      return Math.round(a * 100) / 100;
    };
    var hsl2css = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var hsla = unpack$4(args, "hsla");
      var mode = last$2(args) || "lsa";
      hsla[0] = rnd(hsla[0] || 0);
      hsla[1] = rnd(hsla[1] * 100) + "%";
      hsla[2] = rnd(hsla[2] * 100) + "%";
      if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
        hsla[3] = hsla.length > 3 ? hsla[3] : 1;
        mode = "hsla";
      } else {
        hsla.length = 3;
      }
      return mode + "(" + hsla.join(",") + ")";
    };
    var hsl2css_1 = hsl2css;
    var unpack$5 = utils2.unpack;
    var rgb2hsl = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$5(args, "rgba");
      var r = args[0];
      var g = args[1];
      var b = args[2];
      r /= 255;
      g /= 255;
      b /= 255;
      var min5 = Math.min(r, g, b);
      var max5 = Math.max(r, g, b);
      var l = (max5 + min5) / 2;
      var s, h;
      if (max5 === min5) {
        s = 0;
        h = Number.NaN;
      } else {
        s = l < 0.5 ? (max5 - min5) / (max5 + min5) : (max5 - min5) / (2 - max5 - min5);
      }
      if (r == max5) {
        h = (g - b) / (max5 - min5);
      } else if (g == max5) {
        h = 2 + (b - r) / (max5 - min5);
      } else if (b == max5) {
        h = 4 + (r - g) / (max5 - min5);
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
      if (args.length > 3 && args[3] !== void 0) {
        return [h, s, l, args[3]];
      }
      return [h, s, l];
    };
    var rgb2hsl_1 = rgb2hsl;
    var unpack$6 = utils2.unpack;
    var last$3 = utils2.last;
    var round4 = Math.round;
    var rgb2css = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var rgba = unpack$6(args, "rgba");
      var mode = last$3(args) || "rgb";
      if (mode.substr(0, 3) == "hsl") {
        return hsl2css_1(rgb2hsl_1(rgba), mode);
      }
      rgba[0] = round4(rgba[0]);
      rgba[1] = round4(rgba[1]);
      rgba[2] = round4(rgba[2]);
      if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
        rgba[3] = rgba.length > 3 ? rgba[3] : 1;
        mode = "rgba";
      }
      return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
    };
    var rgb2css_1 = rgb2css;
    var unpack$7 = utils2.unpack;
    var round$1 = Math.round;
    var hsl2rgb = function() {
      var assign;
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$7(args, "hsl");
      var h = args[0];
      var s = args[1];
      var l = args[2];
      var r, g, b;
      if (s === 0) {
        r = g = b = l * 255;
      } else {
        var t3 = [0, 0, 0];
        var c = [0, 0, 0];
        var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var t1 = 2 * l - t2;
        var h_ = h / 360;
        t3[0] = h_ + 1 / 3;
        t3[1] = h_;
        t3[2] = h_ - 1 / 3;
        for (var i2 = 0; i2 < 3; i2++) {
          if (t3[i2] < 0) {
            t3[i2] += 1;
          }
          if (t3[i2] > 1) {
            t3[i2] -= 1;
          }
          if (6 * t3[i2] < 1) {
            c[i2] = t1 + (t2 - t1) * 6 * t3[i2];
          } else if (2 * t3[i2] < 1) {
            c[i2] = t2;
          } else if (3 * t3[i2] < 2) {
            c[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
          } else {
            c[i2] = t1;
          }
        }
        assign = [round$1(c[0] * 255), round$1(c[1] * 255), round$1(c[2] * 255)], r = assign[0], g = assign[1], b = assign[2];
      }
      if (args.length > 3) {
        return [r, g, b, args[3]];
      }
      return [r, g, b, 1];
    };
    var hsl2rgb_1 = hsl2rgb;
    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var round$2 = Math.round;
    var css2rgb = function(css2) {
      css2 = css2.toLowerCase().trim();
      var m;
      if (input.format.named) {
        try {
          return input.format.named(css2);
        } catch (e) {
        }
      }
      if (m = css2.match(RE_RGB)) {
        var rgb = m.slice(1, 4);
        for (var i2 = 0; i2 < 3; i2++) {
          rgb[i2] = +rgb[i2];
        }
        rgb[3] = 1;
        return rgb;
      }
      if (m = css2.match(RE_RGBA)) {
        var rgb$12 = m.slice(1, 5);
        for (var i$12 = 0; i$12 < 4; i$12++) {
          rgb$12[i$12] = +rgb$12[i$12];
        }
        return rgb$12;
      }
      if (m = css2.match(RE_RGB_PCT)) {
        var rgb$2 = m.slice(1, 4);
        for (var i$2 = 0; i$2 < 3; i$2++) {
          rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
        }
        rgb$2[3] = 1;
        return rgb$2;
      }
      if (m = css2.match(RE_RGBA_PCT)) {
        var rgb$3 = m.slice(1, 5);
        for (var i$3 = 0; i$3 < 3; i$3++) {
          rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
        }
        rgb$3[3] = +rgb$3[3];
        return rgb$3;
      }
      if (m = css2.match(RE_HSL)) {
        var hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        var rgb$4 = hsl2rgb_1(hsl);
        rgb$4[3] = 1;
        return rgb$4;
      }
      if (m = css2.match(RE_HSLA)) {
        var hsl$12 = m.slice(1, 4);
        hsl$12[1] *= 0.01;
        hsl$12[2] *= 0.01;
        var rgb$5 = hsl2rgb_1(hsl$12);
        rgb$5[3] = +m[4];
        return rgb$5;
      }
    };
    css2rgb.test = function(s) {
      return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
    };
    var css2rgb_1 = css2rgb;
    var type$3 = utils2.type;
    Color_1.prototype.css = function(mode) {
      return rgb2css_1(this._rgb, mode);
    };
    chroma_1.css = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["css"])))();
    };
    input.format.css = css2rgb_1;
    input.autodetect.push({
      p: 5,
      test: function(h) {
        var rest = [], len5 = arguments.length - 1;
        while (len5-- > 0)
          rest[len5] = arguments[len5 + 1];
        if (!rest.length && type$3(h) === "string" && css2rgb_1.test(h)) {
          return "css";
        }
      }
    });
    var unpack$8 = utils2.unpack;
    input.format.gl = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var rgb = unpack$8(args, "rgba");
      rgb[0] *= 255;
      rgb[1] *= 255;
      rgb[2] *= 255;
      return rgb;
    };
    chroma_1.gl = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["gl"])))();
    };
    Color_1.prototype.gl = function() {
      var rgb = this._rgb;
      return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
    };
    var unpack$9 = utils2.unpack;
    var rgb2hcg = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$9(args, "rgb");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      var min5 = Math.min(r, g, b);
      var max5 = Math.max(r, g, b);
      var delta = max5 - min5;
      var c = delta * 100 / 255;
      var _g = min5 / (255 - delta) * 100;
      var h;
      if (delta === 0) {
        h = Number.NaN;
      } else {
        if (r === max5) {
          h = (g - b) / delta;
        }
        if (g === max5) {
          h = 2 + (b - r) / delta;
        }
        if (b === max5) {
          h = 4 + (r - g) / delta;
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
      }
      return [h, c, _g];
    };
    var rgb2hcg_1 = rgb2hcg;
    var unpack$a = utils2.unpack;
    var floor4 = Math.floor;
    var hcg2rgb = function() {
      var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$a(args, "hcg");
      var h = args[0];
      var c = args[1];
      var _g = args[2];
      var r, g, b;
      _g = _g * 255;
      var _c = c * 255;
      if (c === 0) {
        r = g = b = _g;
      } else {
        if (h === 360) {
          h = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 60;
        var i2 = floor4(h);
        var f = h - i2;
        var p = _g * (1 - c);
        var q = p + _c * (1 - f);
        var t = p + _c * f;
        var v = p + _c;
        switch (i2) {
          case 0:
            assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
            break;
          case 1:
            assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
            break;
          case 2:
            assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
            break;
          case 3:
            assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
            break;
          case 4:
            assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
            break;
          case 5:
            assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
            break;
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var hcg2rgb_1 = hcg2rgb;
    var unpack$b = utils2.unpack;
    var type$4 = utils2.type;
    Color_1.prototype.hcg = function() {
      return rgb2hcg_1(this._rgb);
    };
    chroma_1.hcg = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["hcg"])))();
    };
    input.format.hcg = hcg2rgb_1;
    input.autodetect.push({
      p: 1,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$b(args, "hcg");
        if (type$4(args) === "array" && args.length === 3) {
          return "hcg";
        }
      }
    });
    var unpack$c = utils2.unpack;
    var last$4 = utils2.last;
    var round$3 = Math.round;
    var rgb2hex = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$c(args, "rgba");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      var a = ref[3];
      var mode = last$4(args) || "auto";
      if (a === void 0) {
        a = 1;
      }
      if (mode === "auto") {
        mode = a < 1 ? "rgba" : "rgb";
      }
      r = round$3(r);
      g = round$3(g);
      b = round$3(b);
      var u = r << 16 | g << 8 | b;
      var str6 = "000000" + u.toString(16);
      str6 = str6.substr(str6.length - 6);
      var hxa = "0" + round$3(a * 255).toString(16);
      hxa = hxa.substr(hxa.length - 2);
      switch (mode.toLowerCase()) {
        case "rgba":
          return "#" + str6 + hxa;
        case "argb":
          return "#" + hxa + str6;
        default:
          return "#" + str6;
      }
    };
    var rgb2hex_1 = rgb2hex;
    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
    var hex2rgb = function(hex) {
      if (hex.match(RE_HEX)) {
        if (hex.length === 4 || hex.length === 7) {
          hex = hex.substr(1);
        }
        if (hex.length === 3) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var u = parseInt(hex, 16);
        var r = u >> 16;
        var g = u >> 8 & 255;
        var b = u & 255;
        return [r, g, b, 1];
      }
      if (hex.match(RE_HEXA)) {
        if (hex.length === 5 || hex.length === 9) {
          hex = hex.substr(1);
        }
        if (hex.length === 4) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        var u$1 = parseInt(hex, 16);
        var r$1 = u$1 >> 24 & 255;
        var g$1 = u$1 >> 16 & 255;
        var b$1 = u$1 >> 8 & 255;
        var a = Math.round((u$1 & 255) / 255 * 100) / 100;
        return [r$1, g$1, b$1, a];
      }
      throw new Error("unknown hex color: " + hex);
    };
    var hex2rgb_1 = hex2rgb;
    var type$5 = utils2.type;
    Color_1.prototype.hex = function(mode) {
      return rgb2hex_1(this._rgb, mode);
    };
    chroma_1.hex = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["hex"])))();
    };
    input.format.hex = hex2rgb_1;
    input.autodetect.push({
      p: 4,
      test: function(h) {
        var rest = [], len5 = arguments.length - 1;
        while (len5-- > 0)
          rest[len5] = arguments[len5 + 1];
        if (!rest.length && type$5(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
          return "hex";
        }
      }
    });
    var unpack$d = utils2.unpack;
    var TWOPI = utils2.TWOPI;
    var min4 = Math.min;
    var sqrt = Math.sqrt;
    var acos = Math.acos;
    var rgb2hsi = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$d(args, "rgb");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      r /= 255;
      g /= 255;
      b /= 255;
      var h;
      var min_ = min4(r, g, b);
      var i2 = (r + g + b) / 3;
      var s = i2 > 0 ? 1 - min_ / i2 : 0;
      if (s === 0) {
        h = NaN;
      } else {
        h = (r - g + (r - b)) / 2;
        h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
        h = acos(h);
        if (b > g) {
          h = TWOPI - h;
        }
        h /= TWOPI;
      }
      return [h * 360, s, i2];
    };
    var rgb2hsi_1 = rgb2hsi;
    var unpack$e = utils2.unpack;
    var limit$1 = utils2.limit;
    var TWOPI$1 = utils2.TWOPI;
    var PITHIRD = utils2.PITHIRD;
    var cos = Math.cos;
    var hsi2rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$e(args, "hsi");
      var h = args[0];
      var s = args[1];
      var i2 = args[2];
      var r, g, b;
      if (isNaN(h)) {
        h = 0;
      }
      if (isNaN(s)) {
        s = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 360;
      if (h < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
        g = 1 - (b + r);
      } else if (h < 2 / 3) {
        h -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
        b = 1 - (r + g);
      } else {
        h -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
        r = 1 - (g + b);
      }
      r = limit$1(i2 * r * 3);
      g = limit$1(i2 * g * 3);
      b = limit$1(i2 * b * 3);
      return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
    };
    var hsi2rgb_1 = hsi2rgb;
    var unpack$f = utils2.unpack;
    var type$6 = utils2.type;
    Color_1.prototype.hsi = function() {
      return rgb2hsi_1(this._rgb);
    };
    chroma_1.hsi = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["hsi"])))();
    };
    input.format.hsi = hsi2rgb_1;
    input.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$f(args, "hsi");
        if (type$6(args) === "array" && args.length === 3) {
          return "hsi";
        }
      }
    });
    var unpack$g = utils2.unpack;
    var type$7 = utils2.type;
    Color_1.prototype.hsl = function() {
      return rgb2hsl_1(this._rgb);
    };
    chroma_1.hsl = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["hsl"])))();
    };
    input.format.hsl = hsl2rgb_1;
    input.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$g(args, "hsl");
        if (type$7(args) === "array" && args.length === 3) {
          return "hsl";
        }
      }
    });
    var unpack$h = utils2.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;
    var rgb2hsl$1 = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$h(args, "rgb");
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var min_ = min$1(r, g, b);
      var max_ = max$1(r, g, b);
      var delta = max_ - min_;
      var h, s, v;
      v = max_ / 255;
      if (max_ === 0) {
        h = Number.NaN;
        s = 0;
      } else {
        s = delta / max_;
        if (r === max_) {
          h = (g - b) / delta;
        }
        if (g === max_) {
          h = 2 + (b - r) / delta;
        }
        if (b === max_) {
          h = 4 + (r - g) / delta;
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
      }
      return [h, s, v];
    };
    var rgb2hsv = rgb2hsl$1;
    var unpack$i = utils2.unpack;
    var floor$1 = Math.floor;
    var hsv2rgb = function() {
      var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$i(args, "hsv");
      var h = args[0];
      var s = args[1];
      var v = args[2];
      var r, g, b;
      v *= 255;
      if (s === 0) {
        r = g = b = v;
      } else {
        if (h === 360) {
          h = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 60;
        var i2 = floor$1(h);
        var f = h - i2;
        var p = v * (1 - s);
        var q = v * (1 - s * f);
        var t = v * (1 - s * (1 - f));
        switch (i2) {
          case 0:
            assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
            break;
          case 1:
            assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
            break;
          case 2:
            assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
            break;
          case 3:
            assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
            break;
          case 4:
            assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
            break;
          case 5:
            assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
            break;
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var hsv2rgb_1 = hsv2rgb;
    var unpack$j = utils2.unpack;
    var type$8 = utils2.type;
    Color_1.prototype.hsv = function() {
      return rgb2hsv(this._rgb);
    };
    chroma_1.hsv = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["hsv"])))();
    };
    input.format.hsv = hsv2rgb_1;
    input.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$j(args, "hsv");
        if (type$8(args) === "array" && args.length === 3) {
          return "hsv";
        }
      }
    });
    var labConstants = {
      Kn: 18,
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      t1: 0.206896552,
      t2: 0.12841855,
      t3: 8856452e-9
    };
    var unpack$k = utils2.unpack;
    var pow2 = Math.pow;
    var rgb2lab = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$k(args, "rgb");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      var ref$1 = rgb2xyz(r, g, b);
      var x = ref$1[0];
      var y = ref$1[1];
      var z = ref$1[2];
      var l = 116 * y - 16;
      return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };
    var rgb_xyz = function(r) {
      if ((r /= 255) <= 0.04045) {
        return r / 12.92;
      }
      return pow2((r + 0.055) / 1.055, 2.4);
    };
    var xyz_lab = function(t) {
      if (t > labConstants.t3) {
        return pow2(t, 1 / 3);
      }
      return t / labConstants.t2 + labConstants.t0;
    };
    var rgb2xyz = function(r, g, b) {
      r = rgb_xyz(r);
      g = rgb_xyz(g);
      b = rgb_xyz(b);
      var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
      var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / labConstants.Yn);
      var z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / labConstants.Zn);
      return [x, y, z];
    };
    var rgb2lab_1 = rgb2lab;
    var unpack$l = utils2.unpack;
    var pow$1 = Math.pow;
    var lab2rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$l(args, "lab");
      var l = args[0];
      var a = args[1];
      var b = args[2];
      var x, y, z, r, g, b_;
      y = (l + 16) / 116;
      x = isNaN(a) ? y : y + a / 500;
      z = isNaN(b) ? y : y - b / 200;
      y = labConstants.Yn * lab_xyz(y);
      x = labConstants.Xn * lab_xyz(x);
      z = labConstants.Zn * lab_xyz(z);
      r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
      g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
      b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
      return [r, g, b_, args.length > 3 ? args[3] : 1];
    };
    var xyz_rgb = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055);
    };
    var lab_xyz = function(t) {
      return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0);
    };
    var lab2rgb_1 = lab2rgb;
    var unpack$m = utils2.unpack;
    var type$9 = utils2.type;
    Color_1.prototype.lab = function() {
      return rgb2lab_1(this._rgb);
    };
    chroma_1.lab = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["lab"])))();
    };
    input.format.lab = lab2rgb_1;
    input.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$m(args, "lab");
        if (type$9(args) === "array" && args.length === 3) {
          return "lab";
        }
      }
    });
    var unpack$n = utils2.unpack;
    var RAD2DEG = utils2.RAD2DEG;
    var sqrt$1 = Math.sqrt;
    var atan2 = Math.atan2;
    var round$4 = Math.round;
    var lab2lch = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$n(args, "lab");
      var l = ref[0];
      var a = ref[1];
      var b = ref[2];
      var c = sqrt$1(a * a + b * b);
      var h = (atan2(b, a) * RAD2DEG + 360) % 360;
      if (round$4(c * 1e4) === 0) {
        h = Number.NaN;
      }
      return [l, c, h];
    };
    var lab2lch_1 = lab2lch;
    var unpack$o = utils2.unpack;
    var rgb2lch = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$o(args, "rgb");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      var ref$1 = rgb2lab_1(r, g, b);
      var l = ref$1[0];
      var a = ref$1[1];
      var b_ = ref$1[2];
      return lab2lch_1(l, a, b_);
    };
    var rgb2lch_1 = rgb2lch;
    var unpack$p = utils2.unpack;
    var DEG2RAD = utils2.DEG2RAD;
    var sin = Math.sin;
    var cos$1 = Math.cos;
    var lch2lab = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$p(args, "lch");
      var l = ref[0];
      var c = ref[1];
      var h = ref[2];
      if (isNaN(h)) {
        h = 0;
      }
      h = h * DEG2RAD;
      return [l, cos$1(h) * c, sin(h) * c];
    };
    var lch2lab_1 = lch2lab;
    var unpack$q = utils2.unpack;
    var lch2rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      args = unpack$q(args, "lch");
      var l = args[0];
      var c = args[1];
      var h = args[2];
      var ref = lch2lab_1(l, c, h);
      var L = ref[0];
      var a = ref[1];
      var b_ = ref[2];
      var ref$1 = lab2rgb_1(L, a, b_);
      var r = ref$1[0];
      var g = ref$1[1];
      var b = ref$1[2];
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var lch2rgb_1 = lch2rgb;
    var unpack$r = utils2.unpack;
    var hcl2rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var hcl = unpack$r(args, "hcl").reverse();
      return lch2rgb_1.apply(void 0, hcl);
    };
    var hcl2rgb_1 = hcl2rgb;
    var unpack$s = utils2.unpack;
    var type$a = utils2.type;
    Color_1.prototype.lch = function() {
      return rgb2lch_1(this._rgb);
    };
    Color_1.prototype.hcl = function() {
      return rgb2lch_1(this._rgb).reverse();
    };
    chroma_1.lch = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["lch"])))();
    };
    chroma_1.hcl = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["hcl"])))();
    };
    input.format.lch = lch2rgb_1;
    input.format.hcl = hcl2rgb_1;
    ["lch", "hcl"].forEach(function(m) {
      return input.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len5 = arguments.length;
          while (len5--)
            args[len5] = arguments[len5];
          args = unpack$s(args, m);
          if (type$a(args) === "array" && args.length === 3) {
            return m;
          }
        }
      });
    });
    var w3cx11 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
    var w3cx11_1 = w3cx11;
    var type$b = utils2.type;
    Color_1.prototype.name = function() {
      var hex = rgb2hex_1(this._rgb, "rgb");
      for (var i2 = 0, list2 = Object.keys(w3cx11_1); i2 < list2.length; i2 += 1) {
        var n = list2[i2];
        if (w3cx11_1[n] === hex) {
          return n.toLowerCase();
        }
      }
      return hex;
    };
    input.format.named = function(name2) {
      name2 = name2.toLowerCase();
      if (w3cx11_1[name2]) {
        return hex2rgb_1(w3cx11_1[name2]);
      }
      throw new Error("unknown color name: " + name2);
    };
    input.autodetect.push({
      p: 5,
      test: function(h) {
        var rest = [], len5 = arguments.length - 1;
        while (len5-- > 0)
          rest[len5] = arguments[len5 + 1];
        if (!rest.length && type$b(h) === "string" && w3cx11_1[h.toLowerCase()]) {
          return "named";
        }
      }
    });
    var unpack$t = utils2.unpack;
    var rgb2num = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var ref = unpack$t(args, "rgb");
      var r = ref[0];
      var g = ref[1];
      var b = ref[2];
      return (r << 16) + (g << 8) + b;
    };
    var rgb2num_1 = rgb2num;
    var type$c = utils2.type;
    var num2rgb = function(num) {
      if (type$c(num) == "number" && num >= 0 && num <= 16777215) {
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return [r, g, b, 1];
      }
      throw new Error("unknown num color: " + num);
    };
    var num2rgb_1 = num2rgb;
    var type$d = utils2.type;
    Color_1.prototype.num = function() {
      return rgb2num_1(this._rgb);
    };
    chroma_1.num = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["num"])))();
    };
    input.format.num = num2rgb_1;
    input.autodetect.push({
      p: 5,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        if (args.length === 1 && type$d(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
          return "num";
        }
      }
    });
    var unpack$u = utils2.unpack;
    var type$e = utils2.type;
    var round$5 = Math.round;
    Color_1.prototype.rgb = function(rnd2) {
      if (rnd2 === void 0)
        rnd2 = true;
      if (rnd2 === false) {
        return this._rgb.slice(0, 3);
      }
      return this._rgb.slice(0, 3).map(round$5);
    };
    Color_1.prototype.rgba = function(rnd2) {
      if (rnd2 === void 0)
        rnd2 = true;
      return this._rgb.slice(0, 4).map(function(v, i2) {
        return i2 < 3 ? rnd2 === false ? v : round$5(v) : v;
      });
    };
    chroma_1.rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["rgb"])))();
    };
    input.format.rgb = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var rgba = unpack$u(args, "rgba");
      if (rgba[3] === void 0) {
        rgba[3] = 1;
      }
      return rgba;
    };
    input.autodetect.push({
      p: 3,
      test: function() {
        var args = [], len5 = arguments.length;
        while (len5--)
          args[len5] = arguments[len5];
        args = unpack$u(args, "rgba");
        if (type$e(args) === "array" && (args.length === 3 || args.length === 4 && type$e(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
          return "rgb";
        }
      }
    });
    var log = Math.log;
    var temperature2rgb = function(kelvin) {
      var temp = kelvin / 100;
      var r, g, b;
      if (temp < 66) {
        r = 255;
        g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
      } else {
        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
        b = 255;
      }
      return [r, g, b, 1];
    };
    var temperature2rgb_1 = temperature2rgb;
    var unpack$v = utils2.unpack;
    var round$6 = Math.round;
    var rgb2temperature = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      var rgb = unpack$v(args, "rgb");
      var r = rgb[0], b = rgb[2];
      var minTemp = 1e3;
      var maxTemp = 4e4;
      var eps = 0.4;
      var temp;
      while (maxTemp - minTemp > eps) {
        temp = (maxTemp + minTemp) * 0.5;
        var rgb$12 = temperature2rgb_1(temp);
        if (rgb$12[2] / rgb$12[0] >= b / r) {
          maxTemp = temp;
        } else {
          minTemp = temp;
        }
      }
      return round$6(temp);
    };
    var rgb2temperature_1 = rgb2temperature;
    Color_1.prototype.temp = Color_1.prototype.kelvin = Color_1.prototype.temperature = function() {
      return rgb2temperature_1(this._rgb);
    };
    chroma_1.temp = chroma_1.kelvin = chroma_1.temperature = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ["temp"])))();
    };
    input.format.temp = input.format.kelvin = input.format.temperature = temperature2rgb_1;
    var type$f = utils2.type;
    Color_1.prototype.alpha = function(a, mutate) {
      if (mutate === void 0)
        mutate = false;
      if (a !== void 0 && type$f(a) === "number") {
        if (mutate) {
          this._rgb[3] = a;
          return this;
        }
        return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
      }
      return this._rgb[3];
    };
    Color_1.prototype.clipped = function() {
      return this._rgb._clipped || false;
    };
    Color_1.prototype.darken = function(amount) {
      if (amount === void 0)
        amount = 1;
      var me = this;
      var lab = me.lab();
      lab[0] -= labConstants.Kn * amount;
      return new Color_1(lab, "lab").alpha(me.alpha(), true);
    };
    Color_1.prototype.brighten = function(amount) {
      if (amount === void 0)
        amount = 1;
      return this.darken(-amount);
    };
    Color_1.prototype.darker = Color_1.prototype.darken;
    Color_1.prototype.brighter = Color_1.prototype.brighten;
    Color_1.prototype.get = function(mc) {
      var ref = mc.split(".");
      var mode = ref[0];
      var channel = ref[1];
      var src = this[mode]();
      if (channel) {
        var i2 = mode.indexOf(channel);
        if (i2 > -1) {
          return src[i2];
        }
        throw new Error("unknown channel " + channel + " in mode " + mode);
      } else {
        return src;
      }
    };
    var type$g = utils2.type;
    var pow$2 = Math.pow;
    var EPS = 1e-7;
    var MAX_ITER = 20;
    Color_1.prototype.luminance = function(lum) {
      if (lum !== void 0 && type$g(lum) === "number") {
        if (lum === 0) {
          return new Color_1([0, 0, 0, this._rgb[3]], "rgb");
        }
        if (lum === 1) {
          return new Color_1([255, 255, 255, this._rgb[3]], "rgb");
        }
        var cur_lum = this.luminance();
        var mode = "rgb";
        var max_iter = MAX_ITER;
        var test = function(low, high) {
          var mid = low.interpolate(high, 0.5, mode);
          var lm = mid.luminance();
          if (Math.abs(lum - lm) < EPS || !max_iter--) {
            return mid;
          }
          return lm > lum ? test(low, mid) : test(mid, high);
        };
        var rgb = (cur_lum > lum ? test(new Color_1([0, 0, 0]), this) : test(this, new Color_1([255, 255, 255]))).rgb();
        return new Color_1(rgb.concat([this._rgb[3]]));
      }
      return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
    };
    var rgb2luminance = function(r, g, b) {
      r = luminance_x(r);
      g = luminance_x(g);
      b = luminance_x(b);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    var luminance_x = function(x) {
      x /= 255;
      return x <= 0.03928 ? x / 12.92 : pow$2((x + 0.055) / 1.055, 2.4);
    };
    var interpolator = {};
    var type$h = utils2.type;
    var mix = function(col1, col2, f) {
      if (f === void 0)
        f = 0.5;
      var rest = [], len5 = arguments.length - 3;
      while (len5-- > 0)
        rest[len5] = arguments[len5 + 3];
      var mode = rest[0] || "lrgb";
      if (!interpolator[mode] && !rest.length) {
        mode = Object.keys(interpolator)[0];
      }
      if (!interpolator[mode]) {
        throw new Error("interpolation mode " + mode + " is not defined");
      }
      if (type$h(col1) !== "object") {
        col1 = new Color_1(col1);
      }
      if (type$h(col2) !== "object") {
        col2 = new Color_1(col2);
      }
      return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };
    Color_1.prototype.mix = Color_1.prototype.interpolate = function(col2, f) {
      if (f === void 0)
        f = 0.5;
      var rest = [], len5 = arguments.length - 2;
      while (len5-- > 0)
        rest[len5] = arguments[len5 + 2];
      return mix.apply(void 0, [this, col2, f].concat(rest));
    };
    Color_1.prototype.premultiply = function(mutate) {
      if (mutate === void 0)
        mutate = false;
      var rgb = this._rgb;
      var a = rgb[3];
      if (mutate) {
        this._rgb = [rgb[0] * a, rgb[1] * a, rgb[2] * a, a];
        return this;
      } else {
        return new Color_1([rgb[0] * a, rgb[1] * a, rgb[2] * a, a], "rgb");
      }
    };
    Color_1.prototype.saturate = function(amount) {
      if (amount === void 0)
        amount = 1;
      var me = this;
      var lch = me.lch();
      lch[1] += labConstants.Kn * amount;
      if (lch[1] < 0) {
        lch[1] = 0;
      }
      return new Color_1(lch, "lch").alpha(me.alpha(), true);
    };
    Color_1.prototype.desaturate = function(amount) {
      if (amount === void 0)
        amount = 1;
      return this.saturate(-amount);
    };
    var type$i = utils2.type;
    Color_1.prototype.set = function(mc, value, mutate) {
      if (mutate === void 0)
        mutate = false;
      var ref = mc.split(".");
      var mode = ref[0];
      var channel = ref[1];
      var src = this[mode]();
      if (channel) {
        var i2 = mode.indexOf(channel);
        if (i2 > -1) {
          if (type$i(value) == "string") {
            switch (value.charAt(0)) {
              case "+":
                src[i2] += +value;
                break;
              case "-":
                src[i2] += +value;
                break;
              case "*":
                src[i2] *= +value.substr(1);
                break;
              case "/":
                src[i2] /= +value.substr(1);
                break;
              default:
                src[i2] = +value;
            }
          } else if (type$i(value) === "number") {
            src[i2] = value;
          } else {
            throw new Error("unsupported value for Color.set");
          }
          var out = new Color_1(src, mode);
          if (mutate) {
            this._rgb = out._rgb;
            return this;
          }
          return out;
        }
        throw new Error("unknown channel " + channel + " in mode " + mode);
      } else {
        return src;
      }
    };
    var rgb$1 = function(col1, col2, f) {
      var xyz0 = col1._rgb;
      var xyz1 = col2._rgb;
      return new Color_1(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "rgb");
    };
    interpolator.rgb = rgb$1;
    var sqrt$2 = Math.sqrt;
    var pow$3 = Math.pow;
    var lrgb = function(col1, col2, f) {
      var ref = col1._rgb;
      var x1 = ref[0];
      var y1 = ref[1];
      var z1 = ref[2];
      var ref$1 = col2._rgb;
      var x2 = ref$1[0];
      var y2 = ref$1[1];
      var z2 = ref$1[2];
      return new Color_1(sqrt$2(pow$3(x1, 2) * (1 - f) + pow$3(x2, 2) * f), sqrt$2(pow$3(y1, 2) * (1 - f) + pow$3(y2, 2) * f), sqrt$2(pow$3(z1, 2) * (1 - f) + pow$3(z2, 2) * f), "rgb");
    };
    interpolator.lrgb = lrgb;
    var lab$1 = function(col1, col2, f) {
      var xyz0 = col1.lab();
      var xyz1 = col2.lab();
      return new Color_1(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "lab");
    };
    interpolator.lab = lab$1;
    var _hsx = function(col1, col2, f, m) {
      var assign, assign$1;
      var xyz0, xyz1;
      if (m === "hsl") {
        xyz0 = col1.hsl();
        xyz1 = col2.hsl();
      } else if (m === "hsv") {
        xyz0 = col1.hsv();
        xyz1 = col2.hsv();
      } else if (m === "hcg") {
        xyz0 = col1.hcg();
        xyz1 = col2.hcg();
      } else if (m === "hsi") {
        xyz0 = col1.hsi();
        xyz1 = col2.hsi();
      } else if (m === "lch" || m === "hcl") {
        m = "hcl";
        xyz0 = col1.hcl();
        xyz1 = col2.hcl();
      }
      var hue0, hue1, sat0, sat1, lbv0, lbv1;
      if (m.substr(0, 1) === "h") {
        assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
        assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
      }
      var sat, hue, lbv, dh;
      if (!isNaN(hue0) && !isNaN(hue1)) {
        if (hue1 > hue0 && hue1 - hue0 > 180) {
          dh = hue1 - (hue0 + 360);
        } else if (hue1 < hue0 && hue0 - hue1 > 180) {
          dh = hue1 + 360 - hue0;
        } else {
          dh = hue1 - hue0;
        }
        hue = hue0 + f * dh;
      } else if (!isNaN(hue0)) {
        hue = hue0;
        if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") {
          sat = sat0;
        }
      } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") {
          sat = sat1;
        }
      } else {
        hue = Number.NaN;
      }
      if (sat === void 0) {
        sat = sat0 + f * (sat1 - sat0);
      }
      lbv = lbv0 + f * (lbv1 - lbv0);
      return new Color_1([hue, sat, lbv], m);
    };
    var lch$1 = function(col1, col2, f) {
      return _hsx(col1, col2, f, "lch");
    };
    interpolator.lch = lch$1;
    interpolator.hcl = lch$1;
    var num$1 = function(col1, col2, f) {
      var c1 = col1.num();
      var c2 = col2.num();
      return new Color_1(c1 + f * (c2 - c1), "num");
    };
    interpolator.num = num$1;
    var hcg$1 = function(col1, col2, f) {
      return _hsx(col1, col2, f, "hcg");
    };
    interpolator.hcg = hcg$1;
    var hsi$1 = function(col1, col2, f) {
      return _hsx(col1, col2, f, "hsi");
    };
    interpolator.hsi = hsi$1;
    var hsl$1 = function(col1, col2, f) {
      return _hsx(col1, col2, f, "hsl");
    };
    interpolator.hsl = hsl$1;
    var hsv$1 = function(col1, col2, f) {
      return _hsx(col1, col2, f, "hsv");
    };
    interpolator.hsv = hsv$1;
    var clip_rgb$2 = utils2.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$3 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$1 = Math.sin;
    var atan2$1 = Math.atan2;
    var average = function(colors, mode, weights) {
      if (mode === void 0)
        mode = "lrgb";
      if (weights === void 0)
        weights = null;
      var l = colors.length;
      if (!weights) {
        weights = Array.from(new Array(l)).map(function() {
          return 1;
        });
      }
      var k = l / weights.reduce(function(a, b) {
        return a + b;
      });
      weights.forEach(function(w, i3) {
        weights[i3] *= k;
      });
      colors = colors.map(function(c) {
        return new Color_1(c);
      });
      if (mode === "lrgb") {
        return _average_lrgb(colors, weights);
      }
      var first = colors.shift();
      var xyz = first.get(mode);
      var cnt = [];
      var dx = 0;
      var dy = 0;
      for (var i2 = 0; i2 < xyz.length; i2++) {
        xyz[i2] = (xyz[i2] || 0) * weights[0];
        cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
        if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
          var A = xyz[i2] / 180 * PI$1;
          dx += cos$2(A) * weights[0];
          dy += sin$1(A) * weights[0];
        }
      }
      var alpha = first.alpha() * weights[0];
      colors.forEach(function(c, ci) {
        var xyz2 = c.get(mode);
        alpha += c.alpha() * weights[ci + 1];
        for (var i3 = 0; i3 < xyz.length; i3++) {
          if (!isNaN(xyz2[i3])) {
            cnt[i3] += weights[ci + 1];
            if (mode.charAt(i3) === "h") {
              var A2 = xyz2[i3] / 180 * PI$1;
              dx += cos$2(A2) * weights[ci + 1];
              dy += sin$1(A2) * weights[ci + 1];
            } else {
              xyz[i3] += xyz2[i3] * weights[ci + 1];
            }
          }
        }
      });
      for (var i$12 = 0; i$12 < xyz.length; i$12++) {
        if (mode.charAt(i$12) === "h") {
          var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
          while (A$1 < 0) {
            A$1 += 360;
          }
          while (A$1 >= 360) {
            A$1 -= 360;
          }
          xyz[i$12] = A$1;
        } else {
          xyz[i$12] = xyz[i$12] / cnt[i$12];
        }
      }
      alpha /= l;
      return new Color_1(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };
    var _average_lrgb = function(colors, weights) {
      var l = colors.length;
      var xyz = [0, 0, 0, 0];
      for (var i2 = 0; i2 < colors.length; i2++) {
        var col = colors[i2];
        var f = weights[i2] / l;
        var rgb = col._rgb;
        xyz[0] += pow$4(rgb[0], 2) * f;
        xyz[1] += pow$4(rgb[1], 2) * f;
        xyz[2] += pow$4(rgb[2], 2) * f;
        xyz[3] += rgb[3] * f;
      }
      xyz[0] = sqrt$3(xyz[0]);
      xyz[1] = sqrt$3(xyz[1]);
      xyz[2] = sqrt$3(xyz[2]);
      if (xyz[3] > 0.9999999) {
        xyz[3] = 1;
      }
      return new Color_1(clip_rgb$2(xyz));
    };
    var type$j = utils2.type;
    var pow$5 = Math.pow;
    var scale6 = function(colors) {
      var _mode = "rgb";
      var _nacol = chroma_1("#ccc");
      var _spread = 0;
      var _domain = [0, 1];
      var _pos = [];
      var _padding = [0, 0];
      var _classes = false;
      var _colors = [];
      var _out = false;
      var _min = 0;
      var _max = 1;
      var _correctLightness = false;
      var _colorCache = {};
      var _useCache = true;
      var _gamma = 1;
      var setColors = function(colors2) {
        colors2 = colors2 || ["#fff", "#000"];
        if (colors2 && type$j(colors2) === "string" && chroma_1.brewer && chroma_1.brewer[colors2.toLowerCase()]) {
          colors2 = chroma_1.brewer[colors2.toLowerCase()];
        }
        if (type$j(colors2) === "array") {
          if (colors2.length === 1) {
            colors2 = [colors2[0], colors2[0]];
          }
          colors2 = colors2.slice(0);
          for (var c = 0; c < colors2.length; c++) {
            colors2[c] = chroma_1(colors2[c]);
          }
          _pos.length = 0;
          for (var c$1 = 0; c$1 < colors2.length; c$1++) {
            _pos.push(c$1 / (colors2.length - 1));
          }
        }
        resetCache();
        return _colors = colors2;
      };
      var getClass = function(value) {
        if (_classes != null) {
          var n = _classes.length - 1;
          var i2 = 0;
          while (i2 < n && value >= _classes[i2]) {
            i2++;
          }
          return i2 - 1;
        }
        return 0;
      };
      var tMapLightness = function(t) {
        return t;
      };
      var tMapDomain = function(t) {
        return t;
      };
      var getColor = function(val, bypassMap) {
        var col, t;
        if (bypassMap == null) {
          bypassMap = false;
        }
        if (isNaN(val) || val === null) {
          return _nacol;
        }
        if (!bypassMap) {
          if (_classes && _classes.length > 2) {
            var c = getClass(val);
            t = c / (_classes.length - 2);
          } else if (_max !== _min) {
            t = (val - _min) / (_max - _min);
          } else {
            t = 1;
          }
        } else {
          t = val;
        }
        t = tMapDomain(t);
        if (!bypassMap) {
          t = tMapLightness(t);
        }
        if (_gamma !== 1) {
          t = pow$5(t, _gamma);
        }
        t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
        t = Math.min(1, Math.max(0, t));
        var k = Math.floor(t * 1e4);
        if (_useCache && _colorCache[k]) {
          col = _colorCache[k];
        } else {
          if (type$j(_colors) === "array") {
            for (var i2 = 0; i2 < _pos.length; i2++) {
              var p = _pos[i2];
              if (t <= p) {
                col = _colors[i2];
                break;
              }
              if (t >= p && i2 === _pos.length - 1) {
                col = _colors[i2];
                break;
              }
              if (t > p && t < _pos[i2 + 1]) {
                t = (t - p) / (_pos[i2 + 1] - p);
                col = chroma_1.interpolate(_colors[i2], _colors[i2 + 1], t, _mode);
                break;
              }
            }
          } else if (type$j(_colors) === "function") {
            col = _colors(t);
          }
          if (_useCache) {
            _colorCache[k] = col;
          }
        }
        return col;
      };
      var resetCache = function() {
        return _colorCache = {};
      };
      setColors(colors);
      var f = function(v) {
        var c = chroma_1(getColor(v));
        if (_out && c[_out]) {
          return c[_out]();
        } else {
          return c;
        }
      };
      f.classes = function(classes) {
        if (classes != null) {
          if (type$j(classes) === "array") {
            _classes = classes;
            _domain = [classes[0], classes[classes.length - 1]];
          } else {
            var d = chroma_1.analyze(_domain);
            if (classes === 0) {
              _classes = [d.min, d.max];
            } else {
              _classes = chroma_1.limits(d, "e", classes);
            }
          }
          return f;
        }
        return _classes;
      };
      f.domain = function(domain) {
        if (!arguments.length) {
          return _domain;
        }
        _min = domain[0];
        _max = domain[domain.length - 1];
        _pos = [];
        var k = _colors.length;
        if (domain.length === k && _min !== _max) {
          for (var i2 = 0, list2 = Array.from(domain); i2 < list2.length; i2 += 1) {
            var d = list2[i2];
            _pos.push((d - _min) / (_max - _min));
          }
        } else {
          for (var c = 0; c < k; c++) {
            _pos.push(c / (k - 1));
          }
          if (domain.length > 2) {
            var tOut = domain.map(function(d2, i3) {
              return i3 / (domain.length - 1);
            });
            var tBreaks = domain.map(function(d2) {
              return (d2 - _min) / (_max - _min);
            });
            if (!tBreaks.every(function(val, i3) {
              return tOut[i3] === val;
            })) {
              tMapDomain = function(t) {
                if (t <= 0 || t >= 1) {
                  return t;
                }
                var i3 = 0;
                while (t >= tBreaks[i3 + 1]) {
                  i3++;
                }
                var f2 = (t - tBreaks[i3]) / (tBreaks[i3 + 1] - tBreaks[i3]);
                var out = tOut[i3] + f2 * (tOut[i3 + 1] - tOut[i3]);
                return out;
              };
            }
          }
        }
        _domain = [_min, _max];
        return f;
      };
      f.mode = function(_m) {
        if (!arguments.length) {
          return _mode;
        }
        _mode = _m;
        resetCache();
        return f;
      };
      f.range = function(colors2, _pos2) {
        setColors(colors2, _pos2);
        return f;
      };
      f.out = function(_o) {
        _out = _o;
        return f;
      };
      f.spread = function(val) {
        if (!arguments.length) {
          return _spread;
        }
        _spread = val;
        return f;
      };
      f.correctLightness = function(v) {
        if (v == null) {
          v = true;
        }
        _correctLightness = v;
        resetCache();
        if (_correctLightness) {
          tMapLightness = function(t) {
            var L0 = getColor(0, true).lab()[0];
            var L1 = getColor(1, true).lab()[0];
            var pol = L0 > L1;
            var L_actual = getColor(t, true).lab()[0];
            var L_ideal = L0 + (L1 - L0) * t;
            var L_diff = L_actual - L_ideal;
            var t0 = 0;
            var t1 = 1;
            var max_iter = 20;
            while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
              (function() {
                if (pol) {
                  L_diff *= -1;
                }
                if (L_diff < 0) {
                  t0 = t;
                  t += (t1 - t) * 0.5;
                } else {
                  t1 = t;
                  t += (t0 - t) * 0.5;
                }
                L_actual = getColor(t, true).lab()[0];
                return L_diff = L_actual - L_ideal;
              })();
            }
            return t;
          };
        } else {
          tMapLightness = function(t) {
            return t;
          };
        }
        return f;
      };
      f.padding = function(p) {
        if (p != null) {
          if (type$j(p) === "number") {
            p = [p, p];
          }
          _padding = p;
          return f;
        } else {
          return _padding;
        }
      };
      f.colors = function(numColors, out) {
        if (arguments.length < 2) {
          out = "hex";
        }
        var result = [];
        if (arguments.length === 0) {
          result = _colors.slice(0);
        } else if (numColors === 1) {
          result = [f(0.5)];
        } else if (numColors > 1) {
          var dm = _domain[0];
          var dd = _domain[1] - dm;
          result = __range__(0, numColors, false).map(function(i3) {
            return f(dm + i3 / (numColors - 1) * dd);
          });
        } else {
          colors = [];
          var samples = [];
          if (_classes && _classes.length > 2) {
            for (var i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
              samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
            }
          } else {
            samples = _domain;
          }
          result = samples.map(function(v) {
            return f(v);
          });
        }
        if (chroma_1[out]) {
          result = result.map(function(c) {
            return c[out]();
          });
        }
        return result;
      };
      f.cache = function(c) {
        if (c != null) {
          _useCache = c;
          return f;
        } else {
          return _useCache;
        }
      };
      f.gamma = function(g) {
        if (g != null) {
          _gamma = g;
          return f;
        } else {
          return _gamma;
        }
      };
      f.nodata = function(d) {
        if (d != null) {
          _nacol = chroma_1(d);
          return f;
        } else {
          return _nacol;
        }
      };
      return f;
    };
    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
        range.push(i2);
      }
      return range;
    }
    var bezier2 = function(colors) {
      var assign, assign$1, assign$2;
      var I, lab0, lab1, lab2;
      colors = colors.map(function(c) {
        return new Color_1(c);
      });
      if (colors.length === 2) {
        assign = colors.map(function(c) {
          return c.lab();
        }), lab0 = assign[0], lab1 = assign[1];
        I = function(t) {
          var lab = [0, 1, 2].map(function(i2) {
            return lab0[i2] + t * (lab1[i2] - lab0[i2]);
          });
          return new Color_1(lab, "lab");
        };
      } else if (colors.length === 3) {
        assign$1 = colors.map(function(c) {
          return c.lab();
        }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
        I = function(t) {
          var lab = [0, 1, 2].map(function(i2) {
            return (1 - t) * (1 - t) * lab0[i2] + 2 * (1 - t) * t * lab1[i2] + t * t * lab2[i2];
          });
          return new Color_1(lab, "lab");
        };
      } else if (colors.length === 4) {
        var lab3;
        assign$2 = colors.map(function(c) {
          return c.lab();
        }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
        I = function(t) {
          var lab = [0, 1, 2].map(function(i2) {
            return (1 - t) * (1 - t) * (1 - t) * lab0[i2] + 3 * (1 - t) * (1 - t) * t * lab1[i2] + 3 * (1 - t) * t * t * lab2[i2] + t * t * t * lab3[i2];
          });
          return new Color_1(lab, "lab");
        };
      } else if (colors.length === 5) {
        var I0 = bezier2(colors.slice(0, 3));
        var I1 = bezier2(colors.slice(2, 5));
        I = function(t) {
          if (t < 0.5) {
            return I0(t * 2);
          } else {
            return I1((t - 0.5) * 2);
          }
        };
      }
      return I;
    };
    var bezier_1 = function(colors) {
      var f = bezier2(colors);
      f.scale = function() {
        return scale6(f);
      };
      return f;
    };
    var blend = function(bottom, top, mode) {
      if (!blend[mode]) {
        throw new Error("unknown blend mode " + mode);
      }
      return blend[mode](bottom, top);
    };
    var blend_f = function(f) {
      return function(bottom, top) {
        var c0 = chroma_1(top).rgb();
        var c1 = chroma_1(bottom).rgb();
        return chroma_1.rgb(f(c0, c1));
      };
    };
    var each = function(f) {
      return function(c0, c1) {
        var out = [];
        out[0] = f(c0[0], c1[0]);
        out[1] = f(c0[1], c1[1]);
        out[2] = f(c0[2], c1[2]);
        return out;
      };
    };
    var normal = function(a) {
      return a;
    };
    var multiply6 = function(a, b) {
      return a * b / 255;
    };
    var darken$1 = function(a, b) {
      return a > b ? b : a;
    };
    var lighten = function(a, b) {
      return a > b ? a : b;
    };
    var screen = function(a, b) {
      return 255 * (1 - (1 - a / 255) * (1 - b / 255));
    };
    var overlay = function(a, b) {
      return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    };
    var burn = function(a, b) {
      return 255 * (1 - (1 - b / 255) / (a / 255));
    };
    var dodge = function(a, b) {
      if (a === 255) {
        return 255;
      }
      a = 255 * (b / 255) / (1 - a / 255);
      return a > 255 ? 255 : a;
    };
    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply6));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken$1));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    var blend_1 = blend;
    var type$k = utils2.type;
    var clip_rgb$3 = utils2.clip_rgb;
    var TWOPI$2 = utils2.TWOPI;
    var pow$6 = Math.pow;
    var sin$2 = Math.sin;
    var cos$3 = Math.cos;
    var cubehelix = function(start, rotations, hue, gamma, lightness) {
      if (start === void 0)
        start = 300;
      if (rotations === void 0)
        rotations = -1.5;
      if (hue === void 0)
        hue = 1;
      if (gamma === void 0)
        gamma = 1;
      if (lightness === void 0)
        lightness = [0, 1];
      var dh = 0, dl;
      if (type$k(lightness) === "array") {
        dl = lightness[1] - lightness[0];
      } else {
        dl = 0;
        lightness = [lightness, lightness];
      }
      var f = function(fract) {
        var a = TWOPI$2 * ((start + 120) / 360 + rotations * fract);
        var l = pow$6(lightness[0] + dl * fract, gamma);
        var h = dh !== 0 ? hue[0] + fract * dh : hue;
        var amp = h * l * (1 - l) / 2;
        var cos_a = cos$3(a);
        var sin_a = sin$2(a);
        var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
        var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
        var b = l + amp * (1.97294 * cos_a);
        return chroma_1(clip_rgb$3([r * 255, g * 255, b * 255, 1]));
      };
      f.start = function(s) {
        if (s == null) {
          return start;
        }
        start = s;
        return f;
      };
      f.rotations = function(r) {
        if (r == null) {
          return rotations;
        }
        rotations = r;
        return f;
      };
      f.gamma = function(g) {
        if (g == null) {
          return gamma;
        }
        gamma = g;
        return f;
      };
      f.hue = function(h) {
        if (h == null) {
          return hue;
        }
        hue = h;
        if (type$k(hue) === "array") {
          dh = hue[1] - hue[0];
          if (dh === 0) {
            hue = hue[1];
          }
        } else {
          dh = 0;
        }
        return f;
      };
      f.lightness = function(h) {
        if (h == null) {
          return lightness;
        }
        if (type$k(h) === "array") {
          lightness = h;
          dl = h[1] - h[0];
        } else {
          lightness = [h, h];
          dl = 0;
        }
        return f;
      };
      f.scale = function() {
        return chroma_1.scale(f);
      };
      f.hue(hue);
      return f;
    };
    var digits = "0123456789abcdef";
    var floor$2 = Math.floor;
    var random5 = Math.random;
    var random_1 = function() {
      var code = "#";
      for (var i2 = 0; i2 < 6; i2++) {
        code += digits.charAt(floor$2(random5() * 16));
      }
      return new Color_1(code, "hex");
    };
    var log$1 = Math.log;
    var pow$7 = Math.pow;
    var floor$3 = Math.floor;
    var abs = Math.abs;
    var analyze = function(data, key2) {
      if (key2 === void 0)
        key2 = null;
      var r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      if (type(data) === "object") {
        data = Object.values(data);
      }
      data.forEach(function(val) {
        if (key2 && type(val) === "object") {
          val = val[key2];
        }
        if (val !== void 0 && val !== null && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min) {
            r.min = val;
          }
          if (val > r.max) {
            r.max = val;
          }
          r.count += 1;
        }
      });
      r.domain = [r.min, r.max];
      r.limits = function(mode, num) {
        return limits(r, mode, num);
      };
      return r;
    };
    var limits = function(data, mode, num) {
      if (mode === void 0)
        mode = "equal";
      if (num === void 0)
        num = 7;
      if (type(data) == "array") {
        data = analyze(data);
      }
      var min5 = data.min;
      var max5 = data.max;
      var values = data.values.sort(function(a, b) {
        return a - b;
      });
      if (num === 1) {
        return [min5, max5];
      }
      var limits2 = [];
      if (mode.substr(0, 1) === "c") {
        limits2.push(min5);
        limits2.push(max5);
      }
      if (mode.substr(0, 1) === "e") {
        limits2.push(min5);
        for (var i2 = 1; i2 < num; i2++) {
          limits2.push(min5 + i2 / num * (max5 - min5));
        }
        limits2.push(max5);
      } else if (mode.substr(0, 1) === "l") {
        if (min5 <= 0) {
          throw new Error("Logarithmic scales are only possible for values > 0");
        }
        var min_log = Math.LOG10E * log$1(min5);
        var max_log = Math.LOG10E * log$1(max5);
        limits2.push(min5);
        for (var i$12 = 1; i$12 < num; i$12++) {
          limits2.push(pow$7(10, min_log + i$12 / num * (max_log - min_log)));
        }
        limits2.push(max5);
      } else if (mode.substr(0, 1) === "q") {
        limits2.push(min5);
        for (var i$2 = 1; i$2 < num; i$2++) {
          var p = (values.length - 1) * i$2 / num;
          var pb = floor$3(p);
          if (pb === p) {
            limits2.push(values[pb]);
          } else {
            var pr = p - pb;
            limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
          }
        }
        limits2.push(max5);
      } else if (mode.substr(0, 1) === "k") {
        var cluster;
        var n = values.length;
        var assignments = new Array(n);
        var clusterSizes = new Array(num);
        var repeat = true;
        var nb_iters = 0;
        var centroids = null;
        centroids = [];
        centroids.push(min5);
        for (var i$3 = 1; i$3 < num; i$3++) {
          centroids.push(min5 + i$3 / num * (max5 - min5));
        }
        centroids.push(max5);
        while (repeat) {
          for (var j = 0; j < num; j++) {
            clusterSizes[j] = 0;
          }
          for (var i$4 = 0; i$4 < n; i$4++) {
            var value = values[i$4];
            var mindist = Number.MAX_VALUE;
            var best = void 0;
            for (var j$1 = 0; j$1 < num; j$1++) {
              var dist4 = abs(centroids[j$1] - value);
              if (dist4 < mindist) {
                mindist = dist4;
                best = j$1;
              }
              clusterSizes[best]++;
              assignments[i$4] = best;
            }
          }
          var newCentroids = new Array(num);
          for (var j$2 = 0; j$2 < num; j$2++) {
            newCentroids[j$2] = null;
          }
          for (var i$5 = 0; i$5 < n; i$5++) {
            cluster = assignments[i$5];
            if (newCentroids[cluster] === null) {
              newCentroids[cluster] = values[i$5];
            } else {
              newCentroids[cluster] += values[i$5];
            }
          }
          for (var j$3 = 0; j$3 < num; j$3++) {
            newCentroids[j$3] *= 1 / clusterSizes[j$3];
          }
          repeat = false;
          for (var j$4 = 0; j$4 < num; j$4++) {
            if (newCentroids[j$4] !== centroids[j$4]) {
              repeat = true;
              break;
            }
          }
          centroids = newCentroids;
          nb_iters++;
          if (nb_iters > 200) {
            repeat = false;
          }
        }
        var kClusters = {};
        for (var j$5 = 0; j$5 < num; j$5++) {
          kClusters[j$5] = [];
        }
        for (var i$6 = 0; i$6 < n; i$6++) {
          cluster = assignments[i$6];
          kClusters[cluster].push(values[i$6]);
        }
        var tmpKMeansBreaks = [];
        for (var j$6 = 0; j$6 < num; j$6++) {
          tmpKMeansBreaks.push(kClusters[j$6][0]);
          tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
          return a - b;
        });
        limits2.push(tmpKMeansBreaks[0]);
        for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
          var v = tmpKMeansBreaks[i$7];
          if (!isNaN(v) && limits2.indexOf(v) === -1) {
            limits2.push(v);
          }
        }
      }
      return limits2;
    };
    var analyze_1 = {analyze, limits};
    var contrast = function(a, b) {
      a = new Color_1(a);
      b = new Color_1(b);
      var l1 = a.luminance();
      var l2 = b.luminance();
      return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };
    var sqrt$4 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var abs$1 = Math.abs;
    var cos$4 = Math.cos;
    var PI$2 = Math.PI;
    var deltaE = function(a, b, L, C) {
      if (L === void 0)
        L = 1;
      if (C === void 0)
        C = 1;
      a = new Color_1(a);
      b = new Color_1(b);
      var ref = Array.from(a.lab());
      var L1 = ref[0];
      var a1 = ref[1];
      var b1 = ref[2];
      var ref$1 = Array.from(b.lab());
      var L2 = ref$1[0];
      var a2 = ref$1[1];
      var b2 = ref$1[2];
      var c1 = sqrt$4(a1 * a1 + b1 * b1);
      var c2 = sqrt$4(a2 * a2 + b2 * b2);
      var sl = L1 < 16 ? 0.511 : 0.040975 * L1 / (1 + 0.01765 * L1);
      var sc = 0.0638 * c1 / (1 + 0.0131 * c1) + 0.638;
      var h1 = c1 < 1e-6 ? 0 : atan2$2(b1, a1) * 180 / PI$2;
      while (h1 < 0) {
        h1 += 360;
      }
      while (h1 >= 360) {
        h1 -= 360;
      }
      var t = h1 >= 164 && h1 <= 345 ? 0.56 + abs$1(0.2 * cos$4(PI$2 * (h1 + 168) / 180)) : 0.36 + abs$1(0.4 * cos$4(PI$2 * (h1 + 35) / 180));
      var c4 = c1 * c1 * c1 * c1;
      var f = sqrt$4(c4 / (c4 + 1900));
      var sh = sc * (f * t + 1 - f);
      var delL = L1 - L2;
      var delC = c1 - c2;
      var delA = a1 - a2;
      var delB = b1 - b2;
      var dH2 = delA * delA + delB * delB - delC * delC;
      var v1 = delL / (L * sl);
      var v2 = delC / (C * sc);
      var v3 = sh;
      return sqrt$4(v1 * v1 + v2 * v2 + dH2 / (v3 * v3));
    };
    var distance4 = function(a, b, mode) {
      if (mode === void 0)
        mode = "lab";
      a = new Color_1(a);
      b = new Color_1(b);
      var l1 = a.get(mode);
      var l2 = b.get(mode);
      var sum_sq = 0;
      for (var i2 in l1) {
        var d = (l1[i2] || 0) - (l2[i2] || 0);
        sum_sq += d * d;
      }
      return Math.sqrt(sum_sq);
    };
    var valid = function() {
      var args = [], len5 = arguments.length;
      while (len5--)
        args[len5] = arguments[len5];
      try {
        new (Function.prototype.bind.apply(Color_1, [null].concat(args)))();
        return true;
      } catch (e) {
        return false;
      }
    };
    var scales = {
      cool: function cool() {
        return scale6([chroma_1.hsl(180, 1, 0.9), chroma_1.hsl(250, 0.7, 0.4)]);
      },
      hot: function hot() {
        return scale6(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode("rgb");
      }
    };
    var colorbrewer = {
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    };
    for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
      var key = list$1[i$1];
      colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }
    var colorbrewer_1 = colorbrewer;
    chroma_1.average = average;
    chroma_1.bezier = bezier_1;
    chroma_1.blend = blend_1;
    chroma_1.cubehelix = cubehelix;
    chroma_1.mix = chroma_1.interpolate = mix;
    chroma_1.random = random_1;
    chroma_1.scale = scale6;
    chroma_1.analyze = analyze_1.analyze;
    chroma_1.contrast = contrast;
    chroma_1.deltaE = deltaE;
    chroma_1.distance = distance4;
    chroma_1.limits = analyze_1.limits;
    chroma_1.valid = valid;
    chroma_1.scales = scales;
    chroma_1.colors = w3cx11_1;
    chroma_1.brewer = colorbrewer_1;
    var chroma_js = chroma_1;
    return chroma_js;
  });
});

// node_modules/@dekkai/env/build/lib/moduleLoader.js
var require_moduleLoader = __commonJS((exports2, module2) => {
  __markAsModule(exports2);
  __export(exports2, {
    loadModule: () => loadModule3,
    supportsDynamicImport: () => supportsDynamicImport
  });
  function checkDynamicImport() {
    try {
      import(`${null}`).catch(() => false);
      return true;
    } catch {
      return false;
    }
  }
  var kSupportsDynamicImport = checkDynamicImport();
  function supportsDynamicImport() {
    return kSupportsDynamicImport;
  }
  async function loadModule3(mod) {
    if (kSupportsDynamicImport) {
      return await import(mod.toString());
    } else if (isNodeJS()) {
      return typeof module2 !== "undefined" && typeof module2.require === "function" && require(mod.toString()) || typeof __non_webpack_require__ === "function" && __non_webpack_require__(mod.toString()) || require(mod.toString());
    }
    throw "ERROR: Can't load modules dynamically on this platform";
  }
});

// examples/src/core/search.ts
var require_search = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    onSearchBuilder: () => onSearchBuilder,
    renderSearchPane: () => renderSearchPane
  });
  var import_tweakpane3 = __toModule(require_tweakpane());
  function rgbToHex(r, g, b) {
    const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex.slice(0, 7);
  }
  function renderSearchPane(searchContainer, onSearch, controller) {
    let selectedColor = COLORS.PALE_GOLD;
    let label = "Query Label";
    const pane = new import_tweakpane3.default({
      title: "Query",
      container: searchContainer,
      expanded: true
    });
    const paneParams = {
      label,
      search: 'G.v().out({sourceCluster: "arenecarboxamide"}).run()',
      color: {r: 235, g: 203, b: 139}
    };
    pane.addInput(paneParams, "label");
    pane.addInput(paneParams, "search");
    pane.addInput(paneParams, "color");
    const removeLayerButton = pane.addButton({title: "Remove Layer"});
    removeLayerButton.on("click", () => {
      if (controller.viewport.graph.layers.length > 2) {
        controller.removeLayerByIndex(0);
        renderDebugMenuPane(controller.viewport);
      }
    });
    pane.on("change", (value) => {
      if (typeof value === "object" && value !== null && value["r"] && value["g"] && value["b"]) {
        selectedColor = rgbToHex(value["r"], value["g"], value["b"]);
      } else if (typeof value === "string" && value.length > 1 && value[0] === "G" && value[1] === ".") {
        onSearch(value, label, selectedColor);
      } else if (typeof value === "string") {
        label = value;
      }
    });
  }
  function onSearchBuilder(G, controller, type, options) {
    return function(query, label, color) {
      const result = eval(query);
      const bnodes = deepCopy(result, ["_in", "_out"]);
      console.log("Query results: ");
      console.log(bnodes);
      addLayer(controller, bnodes, label, color, type, options);
      return bnodes;
    };
  }
});

// examples/src/bundledEdges/mod.ts
var require_mod = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    bundledEdges: () => bundledEdges,
    onSearchBuilder: () => onSearchBuilder
  });
  var import_search2 = require_search();
  function onSearchBuilder(G, controller, grafIntraEdges, grafInterEdges, grafNodes, options) {
    return function(query, label, color) {
      const queryResults = eval(query);
      const nodeQueryLayer = {
        name: `Node: ${label}`,
        nodes: {
          type: "Circle",
          data: []
        }
      };
      const intraEdgeQueryLayer = {
        name: `Intra Edge: ${label}`,
        edges: {
          type: "Straight",
          data: [],
          options
        }
      };
      const interEdgeQueryLayer = {
        name: `Inter Edge: ${label}`,
        edges: {
          type: "ClusterBundle",
          data: [],
          options
        }
      };
      for (let i = 0; i < queryResults.length; i++) {
        const result = queryResults[i];
        if (result._type === "node" && result.grafer_id != null) {
          grafNodes[result.grafer_id].color = color;
          nodeQueryLayer.nodes.data.push(grafNodes[result.grafer_id]);
        } else if (result._type === "edge" && result.inter_edge_id != null) {
          grafInterEdges[result.inter_edge_id].sourceColor = color;
          grafInterEdges[result.inter_edge_id].targetColor = color;
          interEdgeQueryLayer.edges.data.push(grafInterEdges[result.inter_edge_id]);
        } else if (result._type === "edge" && result.intra_edge_id != null) {
          grafIntraEdges[result.intra_edge_id].sourceColor = color;
          grafIntraEdges[result.intra_edge_id].targetColor = color;
          intraEdgeQueryLayer.edges.data.push(grafIntraEdges[result.intra_edge_id]);
        }
      }
      console.log(`Query results: ${queryResults.length}`);
      if (nodeQueryLayer.nodes.data.length > 0) {
        console.log("Node Query:");
        console.log(nodeQueryLayer);
        controller.addLayer(nodeQueryLayer, `Node: ${label}`, void 0);
      }
      if (intraEdgeQueryLayer.edges.data.length > 0) {
        console.log("Intra Edge Query:");
        console.log(intraEdgeQueryLayer);
        controller.addLayer(intraEdgeQueryLayer, `Intra Edge: ${label}`, void 0);
      }
      if (interEdgeQueryLayer.edges.data.length > 0) {
        console.log("Inter Edge Query:");
        console.log(interEdgeQueryLayer);
        controller.addLayer(interEdgeQueryLayer, `Inter Edge: ${label}`, void 0);
      }
      controller.render();
      renderDebugMenuPane(controller.viewport);
    };
  }
  async function bundledEdges(container) {
    renderMenu2(container, async (result) => {
      const G = bgraph.graph();
      const {points, layers} = await loadGraph(result, G);
      renderLayout(container);
      const graphContainer = document.getElementById("graph-container");
      const controller = renderGraph(graphContainer, points, layers);
      const searchPaneContainer = document.getElementById("search-pane-container");
      (0, import_search2.renderSearchPane)(searchPaneContainer, onSearchBuilder(G, controller, layers[1].edges.data, layers[0].edges.data, layers[1].nodes.data, {
        alpha: 0.99,
        fade: 0,
        desaturate: 0,
        nearDepth: 0.1,
        farDepth: 0.2
      }), controller);
    });
  }
});

// examples/src/renderMenu.ts
function getExamplePaths(examples2, currentPath, entries = [], path = "") {
  const keys = Object.keys(examples2);
  for (let i = 0, n = keys.length; i < n; ++i) {
    if (typeof examples2[keys[i]] === "function") {
      if (path === currentPath) {
        entries.push(`${path}/${keys[i]}`);
      }
    } else {
      if (path === currentPath) {
        entries.push(`${path}/${keys[i]}`);
      } else {
        getExamplePaths(examples2[keys[i]], currentPath, entries, `${path}/${keys[i]}`);
      }
    }
  }
  return entries;
}
function renderMenu(element, examples2, pathComponents, basePath) {
  const currentPath = pathComponents.length ? `/${pathComponents.join("/")}` : "";
  const entries = getExamplePaths(examples2, currentPath);
  const container = document.createElement("div");
  container.className = "menu-container";
  const header = document.createElement("div");
  header.className = "menu-header";
  container.appendChild(header);
  if (pathComponents.length) {
    const backPath = `${basePath}/${pathComponents.slice(0, -1).join("/")}`;
    const div4 = document.createElement("div");
    div4.className = "menu-back";
    const a = document.createElement("a");
    a.href = backPath;
    a.appendChild(div4);
    header.appendChild(a);
  }
  const title = document.createElement("div");
  title.innerText = "Examples";
  title.className = "menu-title";
  header.appendChild(title);
  const items = document.createElement("div");
  items.className = "menu-items-container";
  container.appendChild(items);
  for (let i = 0, n = entries.length; i < n; ++i) {
    const div4 = document.createElement("div");
    div4.className = "menu-item";
    div4.innerText = entries[i];
    const a = document.createElement("a");
    a.href = `${basePath}${entries[i]}`;
    a.appendChild(div4);
    items.appendChild(a);
  }
  element.appendChild(container);
}

// src/query/query.ts
function prototype(bgraph2) {
  const Q = {};
  Q.run = function() {
    this.program = bgraph2.transform(this.program);
    const max4 = this.program.length - 1;
    let maybe_gremlin = false;
    const results = [];
    let done = -1;
    let pc = max4;
    let step;
    let state;
    let pipetype;
    while (done < max4) {
      step = this.program[pc];
      state = this.state[pc] = this.state[pc] || {};
      pipetype = bgraph2.getPipetype(step[0]);
      maybe_gremlin = pipetype(this.graph, step[1], maybe_gremlin, state);
      if (maybe_gremlin == "pull") {
        maybe_gremlin = false;
        if (pc - 1 > done) {
          pc--;
          continue;
        } else {
          done = pc;
        }
      }
      if (maybe_gremlin == "done") {
        maybe_gremlin = false;
        done = pc;
      }
      pc++;
      if (pc > max4) {
        if (maybe_gremlin) {
          results.push(maybe_gremlin);
        }
        maybe_gremlin = false;
        pc--;
        continue;
      }
      if (maybe_gremlin != false && maybe_gremlin.state.isResult) {
        results.push(maybe_gremlin);
        maybe_gremlin.state.isResult = false;
        continue;
      }
    }
    return results;
  };
  Q.add = function(pipetype, args) {
    const step = [pipetype, args];
    this.program.push(step);
    return this;
  };
  return Q;
}

// src/graph/graph.ts
function prototype2(bgraph2) {
  const G = {};
  G.v = function() {
    const query3 = bgraph2.query(this);
    query3.add("vertex", [].slice.call(arguments));
    return query3;
  };
  G.addVertex = function(vertexProto) {
    if (typeof vertexProto._id === "number" && vertexProto._id >= this.autoid) {
      this.autoid = vertexProto._id + 1;
    }
    if (!vertexProto._id && vertexProto._id != 0) {
      vertexProto._id = this.autoid++;
    } else if (this.findVertexById(vertexProto._id)) {
      return bgraph2.error("A vertex with id " + vertexProto._id + " already exists");
    }
    const vertex = vertexProto;
    this.vertices.push(vertex);
    this.vertexIndex.set(vertex._id, vertex);
    vertex._out = [];
    vertex._in = [];
    return vertex._id;
  };
  G.addEdge = function(edgeProto) {
    const edge = edgeProto;
    edge._in = this.findVertexById(edgeProto._in);
    edge._out = this.findVertexById(edgeProto._out);
    edge._label = edgeProto._label;
    if (!(edge._in && edge._out)) {
      return bgraph2.error("That edge's " + (edge._in ? "out" : "in") + " vertex wasn't found");
    }
    edge._out._out.push(edge);
    edge._in._in.push(edge);
    this.edges.push(edge);
  };
  G.addVertices = function(vertexProtos) {
    vertexProtos.forEach(this.addVertex.bind(this));
  };
  G.addEdges = function(edgeProtos) {
    edgeProtos.forEach(this.addEdge.bind(this));
  };
  G.removeVertex = function(vertex) {
    vertex._in.slice().forEach(G.removeEdge.bind(this));
    vertex._out.slice().forEach(G.removeEdge.bind(this));
    bgraph2.remove(this.vertices, vertex);
    this.vertexIndex.delete(vertex._id);
  };
  G.removeEdge = function(edge) {
    bgraph2.remove(edge._in._in, edge);
    bgraph2.remove(edge._out._out, edge);
    bgraph2.remove(this.edges, edge);
  };
  G.findVertices = function(args) {
    if (typeof args[0] == "object" || typeof args[0] == "function") {
      return this.searchVertices(args[0]);
    } else if (args.length == 0) {
      return this.vertices.slice();
    } else {
      return this.findVerticesByIds(args);
    }
  };
  G.findVerticesByIds = function(ids) {
    if (ids.length == 1) {
      const vertex = this.findVertexById(ids[0]);
      return vertex ? [vertex] : [];
    }
    return ids.map(this.findVertexById.bind(this)).filter(Boolean);
  };
  G.findVertexById = function(vertex_id) {
    return this.vertexIndex.get(vertex_id);
  };
  G.searchVertices = function(filter) {
    if (typeof filter === "object") {
      return this.vertices.filter(function(vertex) {
        return bgraph2.objectFilter(vertex, filter);
      });
    } else if (typeof filter === "function") {
      return this.vertices.filter(filter);
    } else {
      bgraph2.error("Filter must be function or object: " + filter);
    }
  };
  G.findOutEdges = function(vertex) {
    return vertex._out;
  };
  G.findInEdges = function(vertex) {
    return vertex._in;
  };
  return G;
}

// src/transformers/transform.ts
function hydrate(bgraph2) {
  bgraph2.addTransformer = function(fun, priority) {
    if (typeof fun != "function") {
      return bgraph2.error("Invalid transformer function");
    }
    let i;
    for (i = 0; i < bgraph2.T.length; i++) {
      if (priority > bgraph2.T[i].priority) {
        break;
      }
    }
    bgraph2.T.splice(i, 0, {priority, fun});
  };
  bgraph2.transform = function(program) {
    return bgraph2.T.reduce(function(acc, transformer) {
      return transformer.fun(acc);
    }, program);
  };
}

// src/pipes/pipetypes.ts
function hydrate2(bgraph2) {
  bgraph2.addPipetype = function(name, fun) {
    bgraph2.Pipetypes[name] = fun;
    bgraph2.Q[name] = function() {
      return this.add(name, [].slice.apply(arguments));
    };
  };
  bgraph2.getPipetype = function(name) {
    const pipetype = bgraph2.Pipetypes[name];
    if (!pipetype) {
      bgraph2.error("Unrecognized pipe type: " + name);
    }
    return pipetype || bgraph2.fauxPipetype;
  };
  bgraph2.fauxPipetype = function(graph2, args, maybe_gremlin) {
    return maybe_gremlin || "pull";
  };
  bgraph2.addPipetype("vertex", function(graph2, args, gremlin, state) {
    if (!state.vertices) {
      state.vertices = graph2.findVertices(args);
    }
    if (!state.vertices.length) {
      return "done";
    }
    const vertex = state.vertices.pop();
    return bgraph2.makeGremlin(vertex, gremlin.state);
  });
  bgraph2.simpleTraversal = function(dir) {
    const find_method = dir == "out" ? "findOutEdges" : "findInEdges";
    const edge_list = dir == "out" ? "_in" : "_out";
    return function(graph2, args, gremlin, state) {
      if (!gremlin && (!state.edges || !state.edges.length)) {
        return "pull";
      }
      if (!state.edges || !state.edges.length) {
        state.gremlin = gremlin;
        if (typeof args[0] === "function") {
          state.edges = graph2[find_method](gremlin.vertex).filter(args[0]);
        } else {
          state.edges = graph2[find_method](gremlin.vertex).filter(bgraph2.filterEdges(args[0]));
        }
      }
      if (!state.edges.length) {
        return "pull";
      }
      const vertex = state.edges.pop()[edge_list];
      return bgraph2.gotoVertex(state.gremlin, vertex);
    };
  };
  bgraph2.addPipetype("in", bgraph2.simpleTraversal("in"));
  bgraph2.addPipetype("out", bgraph2.simpleTraversal("out"));
  bgraph2.addPipetype("both", bgraph2.simpleTraversal("both"));
  bgraph2.addPipetype("property", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    gremlin.result = gremlin.vertex[args[0]];
    return gremlin.result == null ? false : gremlin;
  });
  bgraph2.addPipetype("unique", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    if (state[gremlin.vertex._id])
      return "pull";
    state[gremlin.vertex._id] = true;
    return gremlin;
  });
  bgraph2.addPipetype("filter", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    if (typeof args[0] == "object") {
      return bgraph2.objectFilter(gremlin.vertex, args[0]) ? gremlin : "pull";
    }
    if (typeof args[0] != "function") {
      bgraph2.error("Filter arg must be function or object: " + args[0]);
      return gremlin;
    }
    if (!args[0](gremlin.vertex, gremlin)) {
      return "pull";
    }
    return gremlin;
  });
  bgraph2.addPipetype("target", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    if (typeof args[0] == "object") {
      if (bgraph2.objectFilter(gremlin.vertex, args[0])) {
        gremlin.state.isResult = true;
      }
      return gremlin;
    }
    if (typeof args[0] != "function") {
      bgraph2.error("Filter arg must be function or object: " + args[0]);
      return gremlin;
    }
    if (args[0](gremlin.vertex, gremlin)) {
      gremlin.state.isResult = true;
      return gremlin;
    }
    return gremlin;
  });
  bgraph2.addPipetype("take", function(graph2, args, gremlin, state) {
    state.taken = state.taken || 0;
    if (state.taken == args[0]) {
      state.taken = 0;
      return "done";
    }
    if (!gremlin)
      return "pull";
    state.taken++;
    return gremlin;
  });
  bgraph2.addPipetype("as", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    gremlin.state.as = gremlin.state.as || {};
    gremlin.state.as[args[0]] = gremlin.vertex;
    return gremlin;
  });
  bgraph2.addPipetype("back", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    return bgraph2.gotoVertex(gremlin, gremlin.state.as[args[0]]);
  });
  bgraph2.addPipetype("except", function(graph2, args, gremlin, state) {
    if (!gremlin)
      return "pull";
    if (gremlin.vertex == gremlin.state.as[args[0]])
      return "pull";
    return gremlin;
  });
  bgraph2.addPipetype("merge", function(graph2, args, gremlin, state) {
    if (!state.vertices && !gremlin)
      return "pull";
    if (!state.vertices || !state.vertices.length) {
      const obj = (gremlin.state || {}).as || {};
      state.vertices = args.map(function(id) {
        return obj[id];
      }).filter(Boolean);
    }
    if (!state.vertices.length)
      return "pull";
    const vertex = state.vertices.pop();
    return bgraph2.makeGremlin(vertex, gremlin.state);
  });
}

// src/alias/alias.ts
function hydrate3(bgraph2) {
  bgraph2.addAlias = function(newname, oldname, defaultArgs) {
    defaultArgs = defaultArgs || [];
    bgraph2.addTransformer(function(program) {
      return program.map(function(step) {
        if (step[0] != newname)
          return step;
        return [oldname, bgraph2.extend(step[1], defaultArgs)];
      });
    }, 100);
    bgraph2.addPipetype(newname, function() {
    });
  };
}

// src/utils/utils.ts
function hydrate4(bgraph2) {
  bgraph2.cloneGremlinState = function(state) {
    const newState = {};
    if (state?.as) {
      newState.as = state.as;
    }
    if (state?.path) {
      newState.path = state.path.slice();
    }
    return newState;
  };
  bgraph2.makeGremlin = function(vertex, state) {
    return {vertex, state: state || {}};
  };
  bgraph2.gotoVertex = function(gremlin, vertex) {
    const state = bgraph2.cloneGremlinState(gremlin.state);
    if (state.path) {
      state.path.push(gremlin.vertex);
    } else {
      state.path = [gremlin.vertex];
    }
    return bgraph2.makeGremlin(vertex, state);
  };
  bgraph2.filterEdges = function(filter) {
    return function(edge) {
      if (!filter) {
        return true;
      }
      if (typeof filter === "string") {
        return edge._label === filter;
      }
      if (Array.isArray(filter)) {
        return !!~filter.indexOf(edge._label);
      }
      return bgraph2.objectFilter(edge, filter);
    };
  };
  bgraph2.objectFilter = function(thing, filter) {
    for (const key in filter) {
      if (thing[key] !== filter[key]) {
        return false;
      }
    }
    return true;
  };
  bgraph2.error = function(msg, err) {
    if (err) {
      console.log(msg, err);
    } else {
      console.log(msg);
    }
    return false;
  };
  bgraph2.extend = function(list, defaults) {
    return Object.keys(defaults).reduce(function(acc, key) {
      if (typeof list[key] !== "undefined")
        return acc;
      acc[key] = defaults[key];
      return acc;
    }, list);
  };
  bgraph2.remove = function(list, item) {
    return list.splice(list.indexOf(item), 1);
  };
}

// src/index.ts
var _bgraph = {};
_bgraph.G = prototype2(_bgraph);
_bgraph.graph = function(V, E) {
  const graph2 = Object.create(_bgraph.G);
  graph2.edges = [];
  graph2.vertices = [];
  graph2.vertexIndex = new Map();
  graph2.autoid = 0;
  if (Array.isArray(V))
    graph2.addVertices(V);
  if (Array.isArray(E))
    graph2.addEdges(E);
  return graph2;
};
_bgraph.Q = prototype(_bgraph);
_bgraph.query = function(graph2) {
  const query3 = Object.create(_bgraph.Q);
  query3.graph = graph2;
  query3.state = [];
  query3.program = [];
  query3.gremlins = [];
  return query3;
};
_bgraph.T = [];
hydrate(_bgraph);
_bgraph.Pipetypes = new Map();
hydrate2(_bgraph);
hydrate3(_bgraph);
hydrate4(_bgraph);
var bgraph = _bgraph;

// node_modules/lit-html/lib/directive.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
var isDirective = (o) => {
  return typeof o === "function" && directives.has(o);
};

// node_modules/lit-html/lib/dom.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
var removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

// node_modules/lit-html/lib/part.js
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var noChange = {};
var nothing = {};

// node_modules/lit-html/lib/template.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var marker = `{{lit-${String(Math.random()).slice(2)}}}`;
var nodeMarker = `<!--${marker}-->`;
var markerRegex = new RegExp(`${marker}|${nodeMarker}`);
var boundAttributeSuffix = "$lit$";
var Template = class {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = [];
    const walker = document.createTreeWalker(element.content, 133, null, false);
    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {strings, values: {length: length5}} = result;
    while (partIndex < length5) {
      const node = walker.nextNode();
      if (node === null) {
        walker.currentNode = stack.pop();
        continue;
      }
      index++;
      if (node.nodeType === 1) {
        if (node.hasAttributes()) {
          const attributes = node.attributes;
          const {length: length6} = attributes;
          let count = 0;
          for (let i = 0; i < length6; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }
          while (count-- > 0) {
            const stringForPart = strings[partIndex];
            const name = lastAttributeNameRegex.exec(stringForPart)[2];
            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            const attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            const statics = attributeValue.split(markerRegex);
            this.parts.push({type: "attribute", index, name, strings: statics});
            partIndex += statics.length - 1;
          }
        }
        if (node.tagName === "TEMPLATE") {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3) {
        const data = node.data;
        if (data.indexOf(marker) >= 0) {
          const parent = node.parentNode;
          const strings2 = data.split(markerRegex);
          const lastIndex = strings2.length - 1;
          for (let i = 0; i < lastIndex; i++) {
            let insert;
            let s = strings2[i];
            if (s === "") {
              insert = createMarker();
            } else {
              const match = lastAttributeNameRegex.exec(s);
              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }
              insert = document.createTextNode(s);
            }
            parent.insertBefore(insert, node);
            this.parts.push({type: "node", index: ++index});
          }
          if (strings2[lastIndex] === "") {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = strings2[lastIndex];
          }
          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8) {
        if (node.data === marker) {
          const parent = node.parentNode;
          if (node.previousSibling === null || index === lastPartIndex) {
            index++;
            parent.insertBefore(createMarker(), node);
          }
          lastPartIndex = index;
          this.parts.push({type: "node", index});
          if (node.nextSibling === null) {
            node.data = "";
          } else {
            nodesToRemove.push(node);
            index--;
          }
          partIndex++;
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            this.parts.push({type: "node", index: -1});
            partIndex++;
          }
        }
      }
    }
    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }
};
var endsWith = (str6, suffix) => {
  const index = str6.length - suffix.length;
  return index >= 0 && str6.slice(index) === suffix;
};
var isTemplatePartActive = (part) => part.index !== -1;
var createMarker = () => document.createComment("");
var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

// node_modules/lit-html/lib/template-instance.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var TemplateInstance = class {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }
  update(values) {
    let i = 0;
    for (const part of this.__parts) {
      if (part !== void 0) {
        part.setValue(values[i]);
      }
      i++;
    }
    for (const part of this.__parts) {
      if (part !== void 0) {
        part.commit();
      }
    }
  }
  _clone() {
    const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts2 = this.template.parts;
    const walker = document.createTreeWalker(fragment, 133, null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode();
    while (partIndex < parts2.length) {
      part = parts2[partIndex];
      if (!isTemplatePartActive(part)) {
        this.__parts.push(void 0);
        partIndex++;
        continue;
      }
      while (nodeIndex < part.index) {
        nodeIndex++;
        if (node.nodeName === "TEMPLATE") {
          stack.push(node);
          walker.currentNode = node.content;
        }
        if ((node = walker.nextNode()) === null) {
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      }
      if (part.type === "node") {
        const part2 = this.processor.handleTextExpression(this.options);
        part2.insertAfterNode(node.previousSibling);
        this.__parts.push(part2);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }
      partIndex++;
    }
    if (isCEPolyfill) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }
    return fragment;
  }
};

// node_modules/lit-html/lib/template-result.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", {createHTML: (s) => s});
var commentMarker = ` ${marker} `;
var TemplateResult = class {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  getHTML() {
    const l = this.strings.length - 1;
    let html2 = "";
    let isCommentBinding = false;
    for (let i = 0; i < l; i++) {
      const s = this.strings[i];
      const commentOpen = s.lastIndexOf("<!--");
      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf("-->", commentOpen + 1) === -1;
      const attributeMatch = lastAttributeNameRegex.exec(s);
      if (attributeMatch === null) {
        html2 += s + (isCommentBinding ? commentMarker : nodeMarker);
      } else {
        html2 += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
      }
    }
    html2 += this.strings[l];
    return html2;
  }
  getTemplateElement() {
    const template = document.createElement("template");
    let value = this.getHTML();
    if (policy !== void 0) {
      value = policy.createHTML(value);
    }
    template.innerHTML = value;
    return template;
  }
};

// node_modules/lit-html/lib/parts.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var isPrimitive = (value) => {
  return value === null || !(typeof value === "object" || typeof value === "function");
};
var isIterable = (value) => {
  return Array.isArray(value) || !!(value && value[Symbol.iterator]);
};
var AttributeCommitter = class {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];
    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  _createPart() {
    return new AttributePart(this);
  }
  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    const parts2 = this.parts;
    if (l === 1 && strings[0] === "" && strings[1] === "") {
      const v = parts2[0].value;
      if (typeof v === "symbol") {
        return String(v);
      }
      if (typeof v === "string" || !isIterable(v)) {
        return v;
      }
    }
    let text = "";
    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = parts2[i];
      if (part !== void 0) {
        const v = part.value;
        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === "string" ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === "string" ? t : String(t);
          }
        }
      }
    }
    text += strings[l];
    return text;
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }
};
var AttributePart = class {
  constructor(committer) {
    this.value = void 0;
    this.committer = committer;
  }
  setValue(value) {
    if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
      this.value = value;
      if (!isDirective(value)) {
        this.committer.dirty = true;
      }
    }
  }
  commit() {
    while (isDirective(this.value)) {
      const directive2 = this.value;
      this.value = noChange;
      directive2(this);
    }
    if (this.value === noChange) {
      return;
    }
    this.committer.commit();
  }
};
var NodePart = class {
  constructor(options) {
    this.value = void 0;
    this.__pendingValue = void 0;
    this.options = options;
  }
  appendInto(container) {
    this.startNode = container.appendChild(createMarker());
    this.endNode = container.appendChild(createMarker());
  }
  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  appendIntoPart(part) {
    part.__insert(this.startNode = createMarker());
    part.__insert(this.endNode = createMarker());
  }
  insertAfterPart(ref) {
    ref.__insert(this.startNode = createMarker());
    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }
    while (isDirective(this.__pendingValue)) {
      const directive2 = this.__pendingValue;
      this.__pendingValue = noChange;
      directive2(this);
    }
    const value = this.__pendingValue;
    if (value === noChange) {
      return;
    }
    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof TemplateResult) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === nothing) {
      this.value = nothing;
      this.clear();
    } else {
      this.__commitText(value);
    }
  }
  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }
  __commitNode(value) {
    if (this.value === value) {
      return;
    }
    this.clear();
    this.__insert(value);
    this.value = value;
  }
  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? "" : value;
    const valueAsString = typeof value === "string" ? value : String(value);
    if (node === this.endNode.previousSibling && node.nodeType === 3) {
      node.data = valueAsString;
    } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }
    this.value = value;
  }
  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);
    if (this.value instanceof TemplateInstance && this.value.template === template) {
      this.value.update(value.values);
    } else {
      const instance = new TemplateInstance(template, value.processor, this.options);
      const fragment = instance._clone();
      instance.update(value.values);
      this.__commitNode(fragment);
      this.value = instance;
    }
  }
  __commitIterable(value) {
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    }
    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      itemPart = itemParts[partIndex];
      if (itemPart === void 0) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);
        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }
      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }
  clear(startNode = this.startNode) {
    removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }
};
var BooleanAttributePart = class {
  constructor(element, name, strings) {
    this.value = void 0;
    this.__pendingValue = void 0;
    if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
      throw new Error("Boolean attributes can only contain a single expression");
    }
    this.element = element;
    this.name = name;
    this.strings = strings;
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    while (isDirective(this.__pendingValue)) {
      const directive2 = this.__pendingValue;
      this.__pendingValue = noChange;
      directive2(this);
    }
    if (this.__pendingValue === noChange) {
      return;
    }
    const value = !!this.__pendingValue;
    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, "");
      } else {
        this.element.removeAttribute(this.name);
      }
      this.value = value;
    }
    this.__pendingValue = noChange;
  }
};
var PropertyCommitter = class extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
  }
  _createPart() {
    return new PropertyPart(this);
  }
  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }
    return super._getValue();
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element[this.name] = this._getValue();
    }
  }
};
var PropertyPart = class extends AttributePart {
};
var eventOptionsSupported = false;
(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }
    };
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (_e) {
  }
})();
var EventPart = class {
  constructor(element, eventName, eventContext) {
    this.value = void 0;
    this.__pendingValue = void 0;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;
    this.__boundHandleEvent = (e) => this.handleEvent(e);
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    while (isDirective(this.__pendingValue)) {
      const directive2 = this.__pendingValue;
      this.__pendingValue = noChange;
      directive2(this);
    }
    if (this.__pendingValue === noChange) {
      return;
    }
    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    this.value = newListener;
    this.__pendingValue = noChange;
  }
  handleEvent(event) {
    if (typeof this.value === "function") {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }
};
var getOptions = (o) => o && (eventOptionsSupported ? {capture: o.capture, passive: o.passive, once: o.once} : o.capture);

// node_modules/lit-html/lib/default-template-processor.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var DefaultTemplateProcessor = class {
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];
    if (prefix === ".") {
      const committer2 = new PropertyCommitter(element, name.slice(1), strings);
      return committer2.parts;
    }
    if (prefix === "@") {
      return [new EventPart(element, name.slice(1), options.eventContext)];
    }
    if (prefix === "?") {
      return [new BooleanAttributePart(element, name.slice(1), strings)];
    }
    const committer = new AttributeCommitter(element, name, strings);
    return committer.parts;
  }
  handleTextExpression(options) {
    return new NodePart(options);
  }
};
var defaultTemplateProcessor = new DefaultTemplateProcessor();

// node_modules/lit-html/lib/template-factory.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);
  if (templateCache === void 0) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== void 0) {
    return template;
  }
  const key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === void 0) {
    template = new Template(result, result.getTemplateElement());
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

// node_modules/lit-html/lib/render.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var parts = new WeakMap();
var render = (result, container, options) => {
  let part = parts.get(container);
  if (part === void 0) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({templateFactory}, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};

// node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
if (typeof window !== "undefined") {
  (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.3.0");
}
var html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);

// examples/src/bundledEdges/loader.ts
var import_tweakpane2 = __toModule(require_tweakpane());

// node_modules/picogl/build/module/constants.js
var GL = {
  DEPTH_BUFFER_BIT: 256,
  STENCIL_BUFFER_BIT: 1024,
  COLOR_BUFFER_BIT: 16384,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  ZERO: 0,
  ONE: 1,
  SRC_COLOR: 768,
  ONE_MINUS_SRC_COLOR: 769,
  SRC_ALPHA: 770,
  ONE_MINUS_SRC_ALPHA: 771,
  DST_ALPHA: 772,
  ONE_MINUS_DST_ALPHA: 773,
  DST_COLOR: 774,
  ONE_MINUS_DST_COLOR: 775,
  SRC_ALPHA_SATURATE: 776,
  FUNC_ADD: 32774,
  BLEND_EQUATION: 32777,
  BLEND_EQUATION_RGB: 32777,
  BLEND_EQUATION_ALPHA: 34877,
  FUNC_SUBTRACT: 32778,
  FUNC_REVERSE_SUBTRACT: 32779,
  BLEND_DST_RGB: 32968,
  BLEND_SRC_RGB: 32969,
  BLEND_DST_ALPHA: 32970,
  BLEND_SRC_ALPHA: 32971,
  CONSTANT_COLOR: 32769,
  ONE_MINUS_CONSTANT_COLOR: 32770,
  CONSTANT_ALPHA: 32771,
  ONE_MINUS_CONSTANT_ALPHA: 32772,
  BLEND_COLOR: 32773,
  ARRAY_BUFFER: 34962,
  ELEMENT_ARRAY_BUFFER: 34963,
  ARRAY_BUFFER_BINDING: 34964,
  ELEMENT_ARRAY_BUFFER_BINDING: 34965,
  STREAM_DRAW: 35040,
  STATIC_DRAW: 35044,
  DYNAMIC_DRAW: 35048,
  BUFFER_SIZE: 34660,
  BUFFER_USAGE: 34661,
  CURRENT_VERTEX_ATTRIB: 34342,
  FRONT: 1028,
  BACK: 1029,
  FRONT_AND_BACK: 1032,
  CULL_FACE: 2884,
  BLEND: 3042,
  DITHER: 3024,
  STENCIL_TEST: 2960,
  DEPTH_TEST: 2929,
  SCISSOR_TEST: 3089,
  POLYGON_OFFSET_FILL: 32823,
  SAMPLE_ALPHA_TO_COVERAGE: 32926,
  SAMPLE_COVERAGE: 32928,
  NO_ERROR: 0,
  INVALID_ENUM: 1280,
  INVALID_VALUE: 1281,
  INVALID_OPERATION: 1282,
  OUT_OF_MEMORY: 1285,
  CW: 2304,
  CCW: 2305,
  LINE_WIDTH: 2849,
  ALIASED_POINT_SIZE_RANGE: 33901,
  ALIASED_LINE_WIDTH_RANGE: 33902,
  CULL_FACE_MODE: 2885,
  FRONT_FACE: 2886,
  DEPTH_RANGE: 2928,
  DEPTH_WRITEMASK: 2930,
  DEPTH_CLEAR_VALUE: 2931,
  DEPTH_FUNC: 2932,
  STENCIL_CLEAR_VALUE: 2961,
  STENCIL_FUNC: 2962,
  STENCIL_FAIL: 2964,
  STENCIL_PASS_DEPTH_FAIL: 2965,
  STENCIL_PASS_DEPTH_PASS: 2966,
  STENCIL_REF: 2967,
  STENCIL_VALUE_MASK: 2963,
  STENCIL_WRITEMASK: 2968,
  STENCIL_BACK_FUNC: 34816,
  STENCIL_BACK_FAIL: 34817,
  STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
  STENCIL_BACK_PASS_DEPTH_PASS: 34819,
  STENCIL_BACK_REF: 36003,
  STENCIL_BACK_VALUE_MASK: 36004,
  STENCIL_BACK_WRITEMASK: 36005,
  VIEWPORT: 2978,
  SCISSOR_BOX: 3088,
  COLOR_CLEAR_VALUE: 3106,
  COLOR_WRITEMASK: 3107,
  UNPACK_ALIGNMENT: 3317,
  PACK_ALIGNMENT: 3333,
  MAX_TEXTURE_SIZE: 3379,
  MAX_VIEWPORT_DIMS: 3386,
  SUBPIXEL_BITS: 3408,
  RED_BITS: 3410,
  GREEN_BITS: 3411,
  BLUE_BITS: 3412,
  ALPHA_BITS: 3413,
  DEPTH_BITS: 3414,
  STENCIL_BITS: 3415,
  POLYGON_OFFSET_UNITS: 10752,
  POLYGON_OFFSET_FACTOR: 32824,
  TEXTURE_BINDING_2D: 32873,
  SAMPLE_BUFFERS: 32936,
  SAMPLES: 32937,
  SAMPLE_COVERAGE_VALUE: 32938,
  SAMPLE_COVERAGE_INVERT: 32939,
  COMPRESSED_TEXTURE_FORMATS: 34467,
  DONT_CARE: 4352,
  FASTEST: 4353,
  NICEST: 4354,
  GENERATE_MIPMAP_HINT: 33170,
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  DEPTH_COMPONENT: 6402,
  ALPHA: 6406,
  RGB: 6407,
  RGBA: 6408,
  LUMINANCE: 6409,
  LUMINANCE_ALPHA: 6410,
  UNSIGNED_SHORT_4_4_4_4: 32819,
  UNSIGNED_SHORT_5_5_5_1: 32820,
  UNSIGNED_SHORT_5_6_5: 33635,
  FRAGMENT_SHADER: 35632,
  VERTEX_SHADER: 35633,
  MAX_VERTEX_ATTRIBS: 34921,
  MAX_VERTEX_UNIFORM_VECTORS: 36347,
  MAX_VARYING_VECTORS: 36348,
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
  MAX_TEXTURE_IMAGE_UNITS: 34930,
  MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
  SHADER_TYPE: 35663,
  DELETE_STATUS: 35712,
  LINK_STATUS: 35714,
  VALIDATE_STATUS: 35715,
  ATTACHED_SHADERS: 35717,
  ACTIVE_UNIFORMS: 35718,
  ACTIVE_ATTRIBUTES: 35721,
  SHADING_LANGUAGE_VERSION: 35724,
  CURRENT_PROGRAM: 35725,
  NEVER: 512,
  LESS: 513,
  EQUAL: 514,
  LEQUAL: 515,
  GREATER: 516,
  NOTEQUAL: 517,
  GEQUAL: 518,
  ALWAYS: 519,
  KEEP: 7680,
  REPLACE: 7681,
  INCR: 7682,
  DECR: 7683,
  INVERT: 5386,
  INCR_WRAP: 34055,
  DECR_WRAP: 34056,
  VENDOR: 7936,
  RENDERER: 7937,
  VERSION: 7938,
  NEAREST: 9728,
  LINEAR: 9729,
  NEAREST_MIPMAP_NEAREST: 9984,
  LINEAR_MIPMAP_NEAREST: 9985,
  NEAREST_MIPMAP_LINEAR: 9986,
  LINEAR_MIPMAP_LINEAR: 9987,
  TEXTURE_MAG_FILTER: 10240,
  TEXTURE_MIN_FILTER: 10241,
  TEXTURE_WRAP_S: 10242,
  TEXTURE_WRAP_T: 10243,
  TEXTURE_2D: 3553,
  TEXTURE: 5890,
  TEXTURE_CUBE_MAP: 34067,
  TEXTURE_BINDING_CUBE_MAP: 34068,
  TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
  TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
  TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
  TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
  TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
  TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
  MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
  TEXTURE0: 33984,
  TEXTURE1: 33985,
  TEXTURE2: 33986,
  TEXTURE3: 33987,
  TEXTURE4: 33988,
  TEXTURE5: 33989,
  TEXTURE6: 33990,
  TEXTURE7: 33991,
  TEXTURE8: 33992,
  TEXTURE9: 33993,
  TEXTURE10: 33994,
  TEXTURE11: 33995,
  TEXTURE12: 33996,
  TEXTURE13: 33997,
  TEXTURE14: 33998,
  TEXTURE15: 33999,
  TEXTURE16: 34e3,
  TEXTURE17: 34001,
  TEXTURE18: 34002,
  TEXTURE19: 34003,
  TEXTURE20: 34004,
  TEXTURE21: 34005,
  TEXTURE22: 34006,
  TEXTURE23: 34007,
  TEXTURE24: 34008,
  TEXTURE25: 34009,
  TEXTURE26: 34010,
  TEXTURE27: 34011,
  TEXTURE28: 34012,
  TEXTURE29: 34013,
  TEXTURE30: 34014,
  TEXTURE31: 34015,
  ACTIVE_TEXTURE: 34016,
  REPEAT: 10497,
  CLAMP_TO_EDGE: 33071,
  MIRRORED_REPEAT: 33648,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  INT_VEC2: 35667,
  INT_VEC3: 35668,
  INT_VEC4: 35669,
  BOOL: 35670,
  BOOL_VEC2: 35671,
  BOOL_VEC3: 35672,
  BOOL_VEC4: 35673,
  FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  SAMPLER_2D: 35678,
  SAMPLER_CUBE: 35680,
  VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
  VERTEX_ATTRIB_ARRAY_SIZE: 34339,
  VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
  VERTEX_ATTRIB_ARRAY_TYPE: 34341,
  VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
  VERTEX_ATTRIB_ARRAY_POINTER: 34373,
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
  IMPLEMENTATION_COLOR_READ_TYPE: 35738,
  IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
  COMPILE_STATUS: 35713,
  LOW_FLOAT: 36336,
  MEDIUM_FLOAT: 36337,
  HIGH_FLOAT: 36338,
  LOW_INT: 36339,
  MEDIUM_INT: 36340,
  HIGH_INT: 36341,
  FRAMEBUFFER: 36160,
  RENDERBUFFER: 36161,
  RGBA4: 32854,
  RGB5_A1: 32855,
  RGB565: 36194,
  DEPTH_COMPONENT16: 33189,
  STENCIL_INDEX: 6401,
  STENCIL_INDEX8: 36168,
  DEPTH_STENCIL: 34041,
  RENDERBUFFER_WIDTH: 36162,
  RENDERBUFFER_HEIGHT: 36163,
  RENDERBUFFER_INTERNAL_FORMAT: 36164,
  RENDERBUFFER_RED_SIZE: 36176,
  RENDERBUFFER_GREEN_SIZE: 36177,
  RENDERBUFFER_BLUE_SIZE: 36178,
  RENDERBUFFER_ALPHA_SIZE: 36179,
  RENDERBUFFER_DEPTH_SIZE: 36180,
  RENDERBUFFER_STENCIL_SIZE: 36181,
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
  COLOR_ATTACHMENT0: 36064,
  DEPTH_ATTACHMENT: 36096,
  STENCIL_ATTACHMENT: 36128,
  DEPTH_STENCIL_ATTACHMENT: 33306,
  NONE: 0,
  FRAMEBUFFER_COMPLETE: 36053,
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
  FRAMEBUFFER_UNSUPPORTED: 36061,
  FRAMEBUFFER_BINDING: 36006,
  RENDERBUFFER_BINDING: 36007,
  MAX_RENDERBUFFER_SIZE: 34024,
  INVALID_FRAMEBUFFER_OPERATION: 1286,
  UNPACK_FLIP_Y_WEBGL: 37440,
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
  CONTEXT_LOST_WEBGL: 37442,
  UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
  BROWSER_DEFAULT_WEBGL: 37444,
  READ_BUFFER: 3074,
  UNPACK_ROW_LENGTH: 3314,
  UNPACK_SKIP_ROWS: 3315,
  UNPACK_SKIP_PIXELS: 3316,
  PACK_ROW_LENGTH: 3330,
  PACK_SKIP_ROWS: 3331,
  PACK_SKIP_PIXELS: 3332,
  COLOR: 6144,
  DEPTH: 6145,
  STENCIL: 6146,
  RED: 6403,
  RGB8: 32849,
  RGBA8: 32856,
  RGB10_A2: 32857,
  TEXTURE_BINDING_3D: 32874,
  UNPACK_SKIP_IMAGES: 32877,
  UNPACK_IMAGE_HEIGHT: 32878,
  TEXTURE_3D: 32879,
  TEXTURE_WRAP_R: 32882,
  MAX_3D_TEXTURE_SIZE: 32883,
  UNSIGNED_INT_2_10_10_10_REV: 33640,
  MAX_ELEMENTS_VERTICES: 33e3,
  MAX_ELEMENTS_INDICES: 33001,
  TEXTURE_MIN_LOD: 33082,
  TEXTURE_MAX_LOD: 33083,
  TEXTURE_BASE_LEVEL: 33084,
  TEXTURE_MAX_LEVEL: 33085,
  MIN: 32775,
  MAX: 32776,
  DEPTH_COMPONENT24: 33190,
  MAX_TEXTURE_LOD_BIAS: 34045,
  TEXTURE_COMPARE_MODE: 34892,
  TEXTURE_COMPARE_FUNC: 34893,
  CURRENT_QUERY: 34917,
  QUERY_RESULT: 34918,
  QUERY_RESULT_AVAILABLE: 34919,
  STREAM_READ: 35041,
  STREAM_COPY: 35042,
  STATIC_READ: 35045,
  STATIC_COPY: 35046,
  DYNAMIC_READ: 35049,
  DYNAMIC_COPY: 35050,
  MAX_DRAW_BUFFERS: 34852,
  DRAW_BUFFER0: 34853,
  DRAW_BUFFER1: 34854,
  DRAW_BUFFER2: 34855,
  DRAW_BUFFER3: 34856,
  DRAW_BUFFER4: 34857,
  DRAW_BUFFER5: 34858,
  DRAW_BUFFER6: 34859,
  DRAW_BUFFER7: 34860,
  DRAW_BUFFER8: 34861,
  DRAW_BUFFER9: 34862,
  DRAW_BUFFER10: 34863,
  DRAW_BUFFER11: 34864,
  DRAW_BUFFER12: 34865,
  DRAW_BUFFER13: 34866,
  DRAW_BUFFER14: 34867,
  DRAW_BUFFER15: 34868,
  MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,
  MAX_VERTEX_UNIFORM_COMPONENTS: 35658,
  SAMPLER_3D: 35679,
  SAMPLER_2D_SHADOW: 35682,
  FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,
  PIXEL_PACK_BUFFER: 35051,
  PIXEL_UNPACK_BUFFER: 35052,
  PIXEL_PACK_BUFFER_BINDING: 35053,
  PIXEL_UNPACK_BUFFER_BINDING: 35055,
  FLOAT_MAT2x3: 35685,
  FLOAT_MAT2x4: 35686,
  FLOAT_MAT3x2: 35687,
  FLOAT_MAT3x4: 35688,
  FLOAT_MAT4x2: 35689,
  FLOAT_MAT4x3: 35690,
  SRGB: 35904,
  SRGB8: 35905,
  SRGB8_ALPHA8: 35907,
  COMPARE_REF_TO_TEXTURE: 34894,
  RGBA32F: 34836,
  RGB32F: 34837,
  RGBA16F: 34842,
  RGB16F: 34843,
  VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
  MAX_ARRAY_TEXTURE_LAYERS: 35071,
  MIN_PROGRAM_TEXEL_OFFSET: 35076,
  MAX_PROGRAM_TEXEL_OFFSET: 35077,
  MAX_VARYING_COMPONENTS: 35659,
  TEXTURE_2D_ARRAY: 35866,
  TEXTURE_BINDING_2D_ARRAY: 35869,
  R11F_G11F_B10F: 35898,
  UNSIGNED_INT_10F_11F_11F_REV: 35899,
  RGB9_E5: 35901,
  UNSIGNED_INT_5_9_9_9_REV: 35902,
  TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,
  MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,
  TRANSFORM_FEEDBACK_VARYINGS: 35971,
  TRANSFORM_FEEDBACK_BUFFER_START: 35972,
  TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,
  TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,
  RASTERIZER_DISCARD: 35977,
  MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,
  MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,
  INTERLEAVED_ATTRIBS: 35980,
  SEPARATE_ATTRIBS: 35981,
  TRANSFORM_FEEDBACK_BUFFER: 35982,
  TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
  RGBA32UI: 36208,
  RGB32UI: 36209,
  RGBA16UI: 36214,
  RGB16UI: 36215,
  RGBA8UI: 36220,
  RGB8UI: 36221,
  RGBA32I: 36226,
  RGB32I: 36227,
  RGBA16I: 36232,
  RGB16I: 36233,
  RGBA8I: 36238,
  RGB8I: 36239,
  RED_INTEGER: 36244,
  RGB_INTEGER: 36248,
  RGBA_INTEGER: 36249,
  SAMPLER_2D_ARRAY: 36289,
  SAMPLER_2D_ARRAY_SHADOW: 36292,
  SAMPLER_CUBE_SHADOW: 36293,
  UNSIGNED_INT_VEC2: 36294,
  UNSIGNED_INT_VEC3: 36295,
  UNSIGNED_INT_VEC4: 36296,
  INT_SAMPLER_2D: 36298,
  INT_SAMPLER_3D: 36299,
  INT_SAMPLER_CUBE: 36300,
  INT_SAMPLER_2D_ARRAY: 36303,
  UNSIGNED_INT_SAMPLER_2D: 36306,
  UNSIGNED_INT_SAMPLER_3D: 36307,
  UNSIGNED_INT_SAMPLER_CUBE: 36308,
  UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
  DEPTH_COMPONENT32F: 36012,
  DEPTH32F_STENCIL8: 36013,
  FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
  FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,
  FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,
  FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,
  FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,
  FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
  FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,
  FRAMEBUFFER_DEFAULT: 33304,
  UNSIGNED_INT_24_8: 34042,
  DEPTH24_STENCIL8: 35056,
  UNSIGNED_NORMALIZED: 35863,
  DRAW_FRAMEBUFFER_BINDING: 36006,
  READ_FRAMEBUFFER: 36008,
  DRAW_FRAMEBUFFER: 36009,
  READ_FRAMEBUFFER_BINDING: 36010,
  RENDERBUFFER_SAMPLES: 36011,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,
  MAX_COLOR_ATTACHMENTS: 36063,
  COLOR_ATTACHMENT1: 36065,
  COLOR_ATTACHMENT2: 36066,
  COLOR_ATTACHMENT3: 36067,
  COLOR_ATTACHMENT4: 36068,
  COLOR_ATTACHMENT5: 36069,
  COLOR_ATTACHMENT6: 36070,
  COLOR_ATTACHMENT7: 36071,
  COLOR_ATTACHMENT8: 36072,
  COLOR_ATTACHMENT9: 36073,
  COLOR_ATTACHMENT10: 36074,
  COLOR_ATTACHMENT11: 36075,
  COLOR_ATTACHMENT12: 36076,
  COLOR_ATTACHMENT13: 36077,
  COLOR_ATTACHMENT14: 36078,
  COLOR_ATTACHMENT15: 36079,
  FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,
  MAX_SAMPLES: 36183,
  HALF_FLOAT: 5131,
  RG: 33319,
  RG_INTEGER: 33320,
  R8: 33321,
  RG8: 33323,
  R16F: 33325,
  R32F: 33326,
  RG16F: 33327,
  RG32F: 33328,
  R8I: 33329,
  R8UI: 33330,
  R16I: 33331,
  R16UI: 33332,
  R32I: 33333,
  R32UI: 33334,
  RG8I: 33335,
  RG8UI: 33336,
  RG16I: 33337,
  RG16UI: 33338,
  RG32I: 33339,
  RG32UI: 33340,
  VERTEX_ARRAY_BINDING: 34229,
  R8_SNORM: 36756,
  RG8_SNORM: 36757,
  RGB8_SNORM: 36758,
  RGBA8_SNORM: 36759,
  SIGNED_NORMALIZED: 36764,
  COPY_READ_BUFFER: 36662,
  COPY_WRITE_BUFFER: 36663,
  COPY_READ_BUFFER_BINDING: 36662,
  COPY_WRITE_BUFFER_BINDING: 36663,
  UNIFORM_BUFFER: 35345,
  UNIFORM_BUFFER_BINDING: 35368,
  UNIFORM_BUFFER_START: 35369,
  UNIFORM_BUFFER_SIZE: 35370,
  MAX_VERTEX_UNIFORM_BLOCKS: 35371,
  MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,
  MAX_COMBINED_UNIFORM_BLOCKS: 35374,
  MAX_UNIFORM_BUFFER_BINDINGS: 35375,
  MAX_UNIFORM_BLOCK_SIZE: 35376,
  MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,
  MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,
  UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,
  ACTIVE_UNIFORM_BLOCKS: 35382,
  UNIFORM_TYPE: 35383,
  UNIFORM_SIZE: 35384,
  UNIFORM_BLOCK_INDEX: 35386,
  UNIFORM_OFFSET: 35387,
  UNIFORM_ARRAY_STRIDE: 35388,
  UNIFORM_MATRIX_STRIDE: 35389,
  UNIFORM_IS_ROW_MAJOR: 35390,
  UNIFORM_BLOCK_BINDING: 35391,
  UNIFORM_BLOCK_DATA_SIZE: 35392,
  UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,
  UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,
  UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,
  UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,
  INVALID_INDEX: 4294967295,
  MAX_VERTEX_OUTPUT_COMPONENTS: 37154,
  MAX_FRAGMENT_INPUT_COMPONENTS: 37157,
  MAX_SERVER_WAIT_TIMEOUT: 37137,
  OBJECT_TYPE: 37138,
  SYNC_CONDITION: 37139,
  SYNC_STATUS: 37140,
  SYNC_FLAGS: 37141,
  SYNC_FENCE: 37142,
  SYNC_GPU_COMMANDS_COMPLETE: 37143,
  UNSIGNALED: 37144,
  SIGNALED: 37145,
  ALREADY_SIGNALED: 37146,
  TIMEOUT_EXPIRED: 37147,
  CONDITION_SATISFIED: 37148,
  WAIT_FAILED: 37149,
  SYNC_FLUSH_COMMANDS_BIT: 1,
  VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
  ANY_SAMPLES_PASSED: 35887,
  ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,
  SAMPLER_BINDING: 35097,
  RGB10_A2UI: 36975,
  INT_2_10_10_10_REV: 36255,
  TRANSFORM_FEEDBACK: 36386,
  TRANSFORM_FEEDBACK_PAUSED: 36387,
  TRANSFORM_FEEDBACK_ACTIVE: 36388,
  TRANSFORM_FEEDBACK_BINDING: 36389,
  TEXTURE_IMMUTABLE_FORMAT: 37167,
  MAX_ELEMENT_INDEX: 36203,
  TEXTURE_IMMUTABLE_LEVELS: 33503,
  TIMEOUT_IGNORED: -1,
  MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 37447,
  QUERY_COUNTER_BITS_EXT: 34916,
  TIME_ELAPSED_EXT: 35007,
  TIMESTAMP_EXT: 36392,
  GPU_DISJOINT_EXT: 36795,
  TEXTURE_MAX_ANISOTROPY_EXT: 34046,
  MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047,
  UNMASKED_VENDOR_WEBGL: 37445,
  UNMASKED_RENDERER_WEBGL: 37446,
  COMPLETION_STATUS_KHR: 37297,
  COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
  COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
  COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
  COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
  COMPRESSED_SRGB_S3TC_DXT1_EXT: 35916,
  COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 35917,
  COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 35918,
  COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 35919,
  COMPRESSED_R11_EAC: 37488,
  COMPRESSED_SIGNED_R11_EAC: 37489,
  COMPRESSED_RG11_EAC: 37490,
  COMPRESSED_SIGNED_RG11_EAC: 37491,
  COMPRESSED_RGB8_ETC2: 37492,
  COMPRESSED_SRGB8_ETC2: 37493,
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37494,
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37495,
  COMPRESSED_RGBA8_ETC2_EAC: 37496,
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37497,
  COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
  COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
  COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
  COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
  COMPRESSED_RGBA_ASTC_4x4_KHR: 37808,
  COMPRESSED_RGBA_ASTC_5x4_KHR: 37809,
  COMPRESSED_RGBA_ASTC_5x5_KHR: 37810,
  COMPRESSED_RGBA_ASTC_6x5_KHR: 37811,
  COMPRESSED_RGBA_ASTC_6x6_KHR: 37812,
  COMPRESSED_RGBA_ASTC_8x5_KHR: 37813,
  COMPRESSED_RGBA_ASTC_8x6_KHR: 37814,
  COMPRESSED_RGBA_ASTC_8x8_KHR: 37815,
  COMPRESSED_RGBA_ASTC_10x5_KHR: 37816,
  COMPRESSED_RGBA_ASTC_10x6_KHR: 37817,
  COMPRESSED_RGBA_ASTC_10x8_KHR: 37818,
  COMPRESSED_RGBA_ASTC_10x10_KHR: 37819,
  COMPRESSED_RGBA_ASTC_12x10_KHR: 37820,
  COMPRESSED_RGBA_ASTC_12x12_KHR: 37821,
  COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 37840,
  COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 37841,
  COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 37842,
  COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 37843,
  COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 37844,
  COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 37845,
  COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 37846,
  COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 37847,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 37848,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 37849,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 37850,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 37851,
  COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 37852,
  COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 37853
};
var TYPE_SIZE = {
  [GL.BYTE]: 1,
  [GL.UNSIGNED_BYTE]: 1,
  [GL.SHORT]: 2,
  [GL.UNSIGNED_SHORT]: 2,
  [GL.INT]: 4,
  [GL.UNSIGNED_INT]: 4,
  [GL.FLOAT]: 4
};
var TEXTURE_FORMATS = {
  [GL.R8]: [GL.RED, GL.UNSIGNED_BYTE],
  [GL.R8_SNORM]: [GL.RED, GL.BYTE],
  [GL.R16F]: [GL.RED, GL.FLOAT],
  [GL.R32F]: [GL.RED, GL.FLOAT],
  [GL.R8UI]: [GL.RED_INTEGER, GL.UNSIGNED_BYTE],
  [GL.R8I]: [GL.RED_INTEGER, GL.BYTE],
  [GL.R16UI]: [GL.RED_INTEGER, GL.UNSIGNED_SHORT],
  [GL.R16I]: [GL.RED_INTEGER, GL.SHORT],
  [GL.R32UI]: [GL.RED_INTEGER, GL.UNSIGNED_INT],
  [GL.R32I]: [GL.RED_INTEGER, GL.INT],
  [GL.RG8]: [GL.RG, GL.UNSIGNED_BYTE],
  [GL.RG8_SNORM]: [GL.RG, GL.BYTE],
  [GL.RG16F]: [GL.RG, GL.FLOAT],
  [GL.RG32F]: [GL.RG, GL.FLOAT],
  [GL.RG8UI]: [GL.RG_INTEGER, GL.UNSIGNED_BYTE],
  [GL.RG8I]: [GL.RG_INTEGER, GL.BYTE],
  [GL.RG16UI]: [GL.RG_INTEGER, GL.UNSIGNED_SHORT],
  [GL.RG16I]: [GL.RG_INTEGER, GL.SHORT],
  [GL.RG32UI]: [GL.RG_INTEGER, GL.UNSIGNED_INT],
  [GL.RG32I]: [GL.RG_INTEGER, GL.INT],
  [GL.RGB8]: [GL.RGB, GL.UNSIGNED_BYTE],
  [GL.SRGB8]: [GL.RGB, GL.UNSIGNED_BYTE],
  [GL.RGB565]: [GL.RGB, GL.UNSIGNED_SHORT_5_6_5],
  [GL.RGB8_SNORM]: [GL.RGB, GL.BYTE],
  [GL.R11F_G11F_B10F]: [GL.RGB, GL.UNSIGNED_INT_10F_11F_11F_REV],
  [GL.RGB9_E5]: [GL.RGB, GL.UNSIGNED_INT_5_9_9_9_REV],
  [GL.RGB16F]: [GL.RGB, GL.FLOAT],
  [GL.RGB32F]: [GL.RGB, GL.FLOAT],
  [GL.RGB8UI]: [GL.RGB_INTEGER, GL.UNSIGNED_BYTE],
  [GL.RGB8I]: [GL.RGB_INTEGER, GL.BYTE],
  [GL.RGB16UI]: [GL.RGB_INTEGER, GL.UNSIGNED_SHORT],
  [GL.RGB16I]: [GL.RGB_INTEGER, GL.SHORT],
  [GL.RGB32UI]: [GL.RGB_INTEGER, GL.UNSIGNED_INT],
  [GL.RGB32I]: [GL.RGB_INTEGER, GL.INT],
  [GL.RGBA8]: [GL.RGBA, GL.UNSIGNED_BYTE],
  [GL.SRGB8_ALPHA8]: [GL.RGBA, GL.UNSIGNED_BYTE],
  [GL.RGBA8_SNORM]: [GL.RGBA, GL.BYTE],
  [GL.RGB5_A1]: [GL.RGBA, GL.UNSIGNED_SHORT_5_5_5_1],
  [GL.RGBA4]: [GL.RGBA, GL.UNSIGNED_SHORT_4_4_4_4],
  [GL.RGB10_A2]: [GL.RGBA, GL.UNSIGNED_INT_2_10_10_10_REV],
  [GL.RGBA16F]: [GL.RGBA, GL.FLOAT],
  [GL.RGBA32F]: [GL.RGBA, GL.FLOAT],
  [GL.RGBA8UI]: [GL.RGBA_INTEGER, GL.UNSIGNED_BYTE],
  [GL.RGBA8I]: [GL.RGBA_INTEGER, GL.BYTE],
  [GL.RGB10_A2UI]: [GL.RGBA_INTEGER, GL.UNSIGNED_INT_2_10_10_10_REV],
  [GL.RGBA16UI]: [GL.RGBA_INTEGER, GL.UNSIGNED_SHORT],
  [GL.RGBA16I]: [GL.RGBA_INTEGER, GL.SHORT],
  [GL.RGBA32I]: [GL.RGBA_INTEGER, GL.INT],
  [GL.RGBA32UI]: [GL.RGBA_INTEGER, GL.UNSIGNED_INT],
  [GL.DEPTH_COMPONENT16]: [GL.DEPTH_COMPONENT, GL.UNSIGNED_SHORT],
  [GL.DEPTH_COMPONENT24]: [GL.DEPTH_COMPONENT, GL.UNSIGNED_INT],
  [GL.DEPTH_COMPONENT32F]: [GL.DEPTH_COMPONENT, GL.FLOAT],
  [GL.DEPTH24_STENCIL8]: [GL.DEPTH_STENCIL, GL.UNSIGNED_INT_24_8],
  [GL.DEPTH32F_STENCIL8]: [GL.DEPTH_STENCIL, GL.FLOAT_32_UNSIGNED_INT_24_8_REV]
};
var COMPRESSED_TEXTURE_TYPES = {
  [GL.COMPRESSED_RGB_S3TC_DXT1_EXT]: true,
  [GL.COMPRESSED_RGBA_S3TC_DXT1_EXT]: true,
  [GL.COMPRESSED_RGBA_S3TC_DXT3_EXT]: true,
  [GL.COMPRESSED_RGBA_S3TC_DXT5_EXT]: true,
  [GL.COMPRESSED_SRGB_S3TC_DXT1_EXT]: true,
  [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]: true,
  [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]: true,
  [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]: true,
  [GL.COMPRESSED_R11_EAC]: true,
  [GL.COMPRESSED_SIGNED_R11_EAC]: true,
  [GL.COMPRESSED_RG11_EAC]: true,
  [GL.COMPRESSED_SIGNED_RG11_EAC]: true,
  [GL.COMPRESSED_RGB8_ETC2]: true,
  [GL.COMPRESSED_SRGB8_ETC2]: true,
  [GL.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]: true,
  [GL.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]: true,
  [GL.COMPRESSED_RGBA8_ETC2_EAC]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]: true,
  [GL.COMPRESSED_RGBA_ASTC_4x4_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_5x4_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_5x5_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_6x5_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_6x6_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_8x5_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_8x6_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_8x8_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_10x5_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_10x6_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_10x8_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_10x10_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_12x10_KHR]: true,
  [GL.COMPRESSED_RGBA_ASTC_12x12_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR]: true,
  [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR]: true,
  [GL.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]: true,
  [GL.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]: true,
  [GL.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]: true,
  [GL.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]: true
};
var WEBGL_INFO = {};
var DUMMY_UNIT_ARRAY = new Array(1);
var DUMMY_OBJECT = {};
var TEXTURE_FORMAT_DEFAULTS = {
  [GL.UNSIGNED_BYTE]: {
    [GL.RED]: GL.R8,
    [GL.RG]: GL.RG8,
    [GL.RGB]: GL.RGB8,
    [GL.RGBA]: GL.RGBA8
  },
  [GL.UNSIGNED_SHORT]: {
    [GL.DEPTH_COMPONENT]: GL.DEPTH_COMPONENT16
  },
  [GL.FLOAT]: {
    [GL.RED]: GL.R16F,
    [GL.RG]: GL.RG16F,
    [GL.RGB]: GL.RGB16F,
    [GL.RGBA]: GL.RGBA16F,
    [GL.DEPTH_COMPONENT]: GL.DEPTH_COMPONENT32F
  }
};

// node_modules/picogl/build/module/cubemap.js
var Cubemap = class {
  constructor(gl, appState, options) {
    this.gl = gl;
    this.texture = null;
    this.appState = appState;
    this.compressed = COMPRESSED_TEXTURE_TYPES[options.internalFormat];
    if (options.format !== void 0) {
      console.warn("Cubemap option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead.");
      this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.format]);
      if (options.type === void 0) {
        options.type = options.format === GL.DEPTH_COMPONENT ? GL.UNSIGNED_SHORT : GL.UNSIGNED_BYTE;
      }
      if (options.internalFormat === void 0) {
        if (this.compressed) {
          options.internalFormat = options.format;
        } else {
          options.internalFormat = TEXTURE_FORMAT_DEFAULTS[options.type][options.format];
        }
      }
    }
    if (this.compressed) {
      this.internalFormat = options.internalFormat;
      this.format = options.internalFormat;
      this.type = GL.UNSIGNED_BYTE;
    } else {
      this.internalFormat = options.internalFormat !== void 0 ? options.internalFormat : GL.RGBA8;
      let formatInfo = TEXTURE_FORMATS[this.internalFormat];
      this.format = formatInfo[0];
      this.type = options.type !== void 0 ? options.type : formatInfo[1];
    }
    this.currentUnit = -1;
    let arrayData = Array.isArray(options.negX);
    let negX = arrayData ? options.negX[0] : options.negX;
    let {
      width = negX.width,
      height = negX.height,
      flipY = false,
      premultiplyAlpha = false,
      minFilter = negX ? GL.LINEAR_MIPMAP_NEAREST : GL.NEAREST,
      magFilter = negX ? GL.LINEAR : GL.NEAREST,
      wrapS = GL.REPEAT,
      wrapT = GL.REPEAT,
      compareMode = GL.NONE,
      compareFunc = GL.LEQUAL,
      minLOD = null,
      maxLOD = null,
      baseLevel = null,
      maxLevel = null,
      maxAnisotropy = 1
    } = options;
    this.width = width;
    this.height = height;
    this.flipY = flipY;
    this.premultiplyAlpha = premultiplyAlpha;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.compareMode = compareMode;
    this.compareFunc = compareFunc;
    this.minLOD = minLOD;
    this.maxLOD = maxLOD;
    this.baseLevel = baseLevel;
    this.maxLevel = maxLevel;
    this.maxAnisotropy = Math.min(maxAnisotropy, WEBGL_INFO.MAX_TEXTURE_ANISOTROPY);
    this.mipmaps = minFilter === GL.LINEAR_MIPMAP_NEAREST || minFilter === GL.LINEAR_MIPMAP_LINEAR;
    this.miplevelsProvided = arrayData && options.negX.length > 1;
    this.levels = this.mipmaps ? Math.floor(Math.log2(Math.min(this.width, this.height))) + 1 : 1;
    this.restore(options);
  }
  restore(options = DUMMY_OBJECT) {
    this.texture = this.gl.createTexture();
    if (this.currentUnit !== -1) {
      this.appState.textures[this.currentUnit] = null;
    }
    this.bind(0);
    this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAG_FILTER, this.magFilter);
    this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MIN_FILTER, this.minFilter);
    this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_WRAP_S, this.wrapS);
    this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_WRAP_T, this.wrapT);
    this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_COMPARE_FUNC, this.compareFunc);
    this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_COMPARE_MODE, this.compareMode);
    if (this.baseLevel !== null) {
      this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_BASE_LEVEL, this.baseLevel);
    }
    if (this.maxLevel !== null) {
      this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_LEVEL, this.maxLevel);
    }
    if (this.minLOD !== null) {
      this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MIN_LOD, this.minLOD);
    }
    if (this.maxLOD !== null) {
      this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_LOD, this.maxLOD);
    }
    if (this.maxAnisotropy > 1) {
      this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
    }
    this.gl.texStorage2D(GL.TEXTURE_CUBE_MAP, this.levels, this.internalFormat, this.width, this.height);
    let {negX, posX, negY, posY, negZ, posZ} = options;
    if (negX) {
      this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_X, negX);
      this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_X, posX);
      this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_Y, negY);
      this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_Y, posY);
      this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_Z, negZ);
      this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_Z, posZ);
    }
    if (this.mipmaps && !this.miplevelsProvided) {
      this.gl.generateMipmap(GL.TEXTURE_CUBE_MAP);
    }
    return this;
  }
  delete() {
    if (this.texture) {
      this.gl.deleteTexture(this.texture);
      this.texture = null;
      this.appState.textures[this.currentUnit] = null;
      this.currentUnit = -1;
    }
    return this;
  }
  faceData(face, data) {
    if (!Array.isArray(data)) {
      DUMMY_UNIT_ARRAY[0] = data;
      data = DUMMY_UNIT_ARRAY;
    }
    let numLevels = this.mipmaps ? data.length : 1;
    let width = this.width;
    let height = this.height;
    let i;
    this.gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, this.flipY);
    this.gl.pixelStorei(GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
    if (this.compressed) {
      for (i = 0; i < numLevels; ++i) {
        this.gl.compressedTexSubImage2D(face, i, 0, 0, width, height, this.format, data[i]);
        width = Math.max(width >> 1, 1);
        height = Math.max(height >> 1, 1);
      }
    } else {
      for (i = 0; i < numLevels; ++i) {
        this.gl.texSubImage2D(face, i, 0, 0, width, height, this.format, this.type, data[i]);
        width = Math.max(width >> 1, 1);
        height = Math.max(height >> 1, 1);
      }
    }
    return this;
  }
  bind(unit) {
    let currentTexture = this.appState.textures[unit];
    if (this.appState.activeTexture !== unit) {
      this.gl.activeTexture(GL.TEXTURE0 + unit);
      this.appState.activeTexture = unit;
    }
    if (currentTexture !== this) {
      if (currentTexture) {
        currentTexture.currentUnit = -1;
      }
      if (this.currentUnit !== -1) {
        this.appState.textures[this.currentUnit] = null;
      }
      this.gl.bindTexture(GL.TEXTURE_CUBE_MAP, this.texture);
      this.appState.textures[unit] = this;
      this.currentUnit = unit;
    }
    return this;
  }
};

// node_modules/picogl/build/module/draw-call.js
var DrawCall = class {
  constructor(gl, appState, program, vertexArray = null, primitive) {
    this.gl = gl;
    this.currentProgram = program;
    this.drawPrimitive = GL.TRIANGLES;
    this.currentVertexArray = vertexArray;
    this.currentTransformFeedback = null;
    this.appState = appState;
    this.uniformIndices = {};
    this.uniformNames = new Array(WEBGL_INFO.MAX_UNIFORMS);
    this.uniformValues = new Array(WEBGL_INFO.MAX_UNIFORMS);
    this.uniformCount = 0;
    this.uniformBuffers = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);
    this.uniformBlockNames = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);
    this.uniformBlockCount = 0;
    this.textures = new Array(WEBGL_INFO.MAX_TEXTURE_UNITS);
    this.textureCount = 0;
    this.offsets = new Int32Array(1);
    this.numElements = new Int32Array(1);
    this.numInstances = new Int32Array(1);
    this.numDraws = 1;
    this.drawCountsFromVertexArray = true;
    if (primitive !== void 0) {
      console.warn("Primitive argument to 'App.createDrawCall' is deprecated and will be removed. Use 'DrawCall.primitive' instead.");
      this.primitive(primitive);
    }
  }
  primitive(primitive) {
    this.drawPrimitive = primitive;
    return this;
  }
  transformFeedback(transformFeedback) {
    this.currentTransformFeedback = transformFeedback;
    return this;
  }
  uniform(name, value) {
    let index = this.uniformIndices[name];
    if (index === void 0) {
      index = this.uniformCount++;
      this.uniformIndices[name] = index;
      this.uniformNames[index] = name;
    }
    this.uniformValues[index] = value;
    return this;
  }
  texture(name, texture) {
    let unit = this.currentProgram.samplers[name];
    this.textures[unit] = texture;
    return this;
  }
  uniformBlock(name, buffer) {
    let base = this.currentProgram.uniformBlocks[name];
    this.uniformBuffers[base] = buffer;
    return this;
  }
  drawRanges(...counts) {
    this.numDraws = counts.length;
    if (this.offsets.length < this.numDraws) {
      this.offsets = new Int32Array(this.numDraws);
    }
    if (this.numElements.length < this.numDraws) {
      this.numElements = new Int32Array(this.numDraws);
    }
    if (this.numInstances.length < this.numDraws) {
      this.numInstances = new Int32Array(this.numDraws);
    }
    for (let i = 0; i < this.numDraws; ++i) {
      let count = counts[i];
      this.offsets[i] = count[0];
      this.numElements[i] = count[1];
      this.numInstances[i] = count[2] || 1;
    }
    this.drawCountsFromVertexArray = false;
    return this;
  }
  draw() {
    let uniformNames = this.uniformNames;
    let uniformValues = this.uniformValues;
    let uniformBuffers = this.uniformBuffers;
    let uniformBlockCount = this.currentProgram.uniformBlockCount;
    let textures = this.textures;
    let textureCount = this.currentProgram.samplerCount;
    let indexed = false;
    this.currentProgram.bind();
    if (this.currentVertexArray) {
      this.currentVertexArray.bind();
      indexed = this.currentVertexArray.indexed;
      if (this.drawCountsFromVertexArray) {
        this.numElements[0] = this.currentVertexArray.numElements;
        this.numInstances[0] = this.currentVertexArray.numInstances;
      }
    }
    for (let uIndex = 0; uIndex < this.uniformCount; ++uIndex) {
      this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
    }
    for (let base = 0; base < uniformBlockCount; ++base) {
      uniformBuffers[base].bind(base);
    }
    for (let tIndex = 0; tIndex < textureCount; ++tIndex) {
      textures[tIndex].bind(tIndex);
    }
    if (this.currentTransformFeedback) {
      this.currentTransformFeedback.bind();
      this.gl.beginTransformFeedback(this.drawPrimitive);
    } else if (this.appState.transformFeedback) {
      this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
      this.appState.transformFeedback = null;
    }
    if (WEBGL_INFO.MULTI_DRAW_INSTANCED) {
      let ext = this.appState.extensions.multiDrawInstanced;
      if (indexed) {
        ext.multiDrawElementsInstancedWEBGL(this.drawPrimitive, this.numElements, 0, this.currentVertexArray.indexType, this.offsets, 0, this.numInstances, 0, this.numDraws);
      } else {
        ext.multiDrawArraysInstancedWEBGL(this.drawPrimitive, this.offsets, 0, this.numElements, 0, this.numInstances, 0, this.numDraws);
      }
    } else if (indexed) {
      for (let i = 0; i < this.numDraws; ++i) {
        this.gl.drawElementsInstanced(this.drawPrimitive, this.numElements[i], this.currentVertexArray.indexType, this.offsets[i], this.numInstances[i]);
      }
    } else {
      for (let i = 0; i < this.numDraws; ++i) {
        this.gl.drawArraysInstanced(this.drawPrimitive, this.offsets[i], this.numElements[i], this.numInstances[i]);
      }
    }
    if (this.currentTransformFeedback) {
      this.gl.endTransformFeedback();
    }
    return this;
  }
};

// node_modules/picogl/build/module/texture.js
var Texture = class {
  constructor(gl, appState, binding, image, width = image.width, height = image.height, depth, is3D, options = DUMMY_OBJECT) {
    this.gl = gl;
    this.binding = binding;
    this.texture = null;
    this.width = width || 0;
    this.height = height || 0;
    this.depth = depth || 0;
    this.is3D = is3D;
    this.appState = appState;
    this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.internalFormat]);
    if (options.format !== void 0) {
      console.warn("Texture option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead.");
      this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.format]);
      if (options.type === void 0) {
        options.type = options.format === GL.DEPTH_COMPONENT ? GL.UNSIGNED_SHORT : GL.UNSIGNED_BYTE;
      }
      if (options.internalFormat === void 0) {
        if (this.compressed) {
          options.internalFormat = options.format;
        } else {
          options.internalFormat = TEXTURE_FORMAT_DEFAULTS[options.type][options.format];
        }
      }
    }
    if (this.compressed) {
      this.internalFormat = options.internalFormat;
      this.format = this.internalFormat;
      this.type = GL.UNSIGNED_BYTE;
    } else {
      this.internalFormat = options.internalFormat !== void 0 ? options.internalFormat : GL.RGBA8;
      let formatInfo = TEXTURE_FORMATS[this.internalFormat];
      this.format = formatInfo[0];
      this.type = options.type !== void 0 ? options.type : formatInfo[1];
    }
    this.currentUnit = -1;
    let {
      minFilter = image ? GL.LINEAR_MIPMAP_NEAREST : GL.NEAREST,
      magFilter = image ? GL.LINEAR : GL.NEAREST,
      wrapS = GL.REPEAT,
      wrapT = GL.REPEAT,
      wrapR = GL.REPEAT,
      compareMode = GL.NONE,
      compareFunc = GL.LEQUAL,
      minLOD = null,
      maxLOD = null,
      baseLevel = null,
      maxLevel = null,
      maxAnisotropy = 1,
      flipY = false,
      premultiplyAlpha = false
    } = options;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.wrapR = wrapR;
    this.compareMode = compareMode;
    this.compareFunc = compareFunc;
    this.minLOD = minLOD;
    this.maxLOD = maxLOD;
    this.baseLevel = baseLevel;
    this.maxLevel = maxLevel;
    this.maxAnisotropy = Math.min(maxAnisotropy, WEBGL_INFO.MAX_TEXTURE_ANISOTROPY);
    this.flipY = flipY;
    this.premultiplyAlpha = premultiplyAlpha;
    this.mipmaps = minFilter === GL.LINEAR_MIPMAP_NEAREST || minFilter === GL.LINEAR_MIPMAP_LINEAR;
    this.restore(image);
  }
  restore(image) {
    this.texture = null;
    this.resize(this.width, this.height, this.depth);
    if (image) {
      this.data(image);
    }
    return this;
  }
  resize(width, height, depth) {
    depth = depth || 0;
    if (this.texture && width === this.width && height === this.height && depth === this.depth) {
      return this;
    }
    this.gl.deleteTexture(this.texture);
    if (this.currentUnit !== -1) {
      this.appState.textures[this.currentUnit] = null;
    }
    this.texture = this.gl.createTexture();
    this.bind(Math.max(this.currentUnit, 0));
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.gl.texParameteri(this.binding, GL.TEXTURE_MIN_FILTER, this.minFilter);
    this.gl.texParameteri(this.binding, GL.TEXTURE_MAG_FILTER, this.magFilter);
    this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_S, this.wrapS);
    this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_T, this.wrapT);
    this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_R, this.wrapR);
    this.gl.texParameteri(this.binding, GL.TEXTURE_COMPARE_FUNC, this.compareFunc);
    this.gl.texParameteri(this.binding, GL.TEXTURE_COMPARE_MODE, this.compareMode);
    if (this.minLOD !== null) {
      this.gl.texParameterf(this.binding, GL.TEXTURE_MIN_LOD, this.minLOD);
    }
    if (this.maxLOD !== null) {
      this.gl.texParameterf(this.binding, GL.TEXTURE_MAX_LOD, this.maxLOD);
    }
    if (this.baseLevel !== null) {
      this.gl.texParameteri(this.binding, GL.TEXTURE_BASE_LEVEL, this.baseLevel);
    }
    if (this.maxLevel !== null) {
      this.gl.texParameteri(this.binding, GL.TEXTURE_MAX_LEVEL, this.maxLevel);
    }
    if (this.maxAnisotropy > 1) {
      this.gl.texParameteri(this.binding, GL.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
    }
    let levels;
    if (this.is3D) {
      if (this.mipmaps) {
        levels = Math.floor(Math.log2(Math.max(Math.max(this.width, this.height), this.depth))) + 1;
      } else {
        levels = 1;
      }
      this.gl.texStorage3D(this.binding, levels, this.internalFormat, this.width, this.height, this.depth);
    } else {
      if (this.mipmaps) {
        levels = Math.floor(Math.log2(Math.max(this.width, this.height))) + 1;
      } else {
        levels = 1;
      }
      this.gl.texStorage2D(this.binding, levels, this.internalFormat, this.width, this.height);
    }
    return this;
  }
  data(data) {
    if (!Array.isArray(data)) {
      DUMMY_UNIT_ARRAY[0] = data;
      data = DUMMY_UNIT_ARRAY;
    }
    let numLevels = this.mipmaps ? data.length : 1;
    let width = this.width;
    let height = this.height;
    let depth = this.depth;
    let generateMipmaps = this.mipmaps && data.length === 1;
    let i;
    this.bind(Math.max(this.currentUnit, 0));
    this.gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, this.flipY);
    this.gl.pixelStorei(GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
    if (this.compressed) {
      if (this.is3D) {
        for (i = 0; i < numLevels; ++i) {
          this.gl.compressedTexSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, data[i]);
          width = Math.max(width >> 1, 1);
          height = Math.max(height >> 1, 1);
          depth = Math.max(depth >> 1, 1);
        }
      } else {
        for (i = 0; i < numLevels; ++i) {
          this.gl.compressedTexSubImage2D(this.binding, i, 0, 0, width, height, this.format, data[i]);
          width = Math.max(width >> 1, 1);
          height = Math.max(height >> 1, 1);
        }
      }
    } else if (this.is3D) {
      for (i = 0; i < numLevels; ++i) {
        this.gl.texSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, this.type, data[i]);
        width = Math.max(width >> 1, 1);
        height = Math.max(height >> 1, 1);
        depth = Math.max(depth >> 1, 1);
      }
    } else {
      for (i = 0; i < numLevels; ++i) {
        this.gl.texSubImage2D(this.binding, i, 0, 0, width, height, this.format, this.type, data[i]);
        width = Math.max(width >> 1, 1);
        height = Math.max(height >> 1, 1);
      }
    }
    if (generateMipmaps) {
      this.gl.generateMipmap(this.binding);
    }
    return this;
  }
  delete() {
    if (this.texture) {
      this.gl.deleteTexture(this.texture);
      this.texture = null;
      if (this.currentUnit !== -1 && this.appState.textures[this.currentUnit] === this) {
        this.appState.textures[this.currentUnit] = null;
        this.currentUnit = -1;
      }
    }
    return this;
  }
  bind(unit) {
    let currentTexture = this.appState.textures[unit];
    if (this.appState.activeTexture !== unit) {
      this.gl.activeTexture(GL.TEXTURE0 + unit);
      this.appState.activeTexture = unit;
    }
    if (currentTexture !== this) {
      if (currentTexture) {
        currentTexture.currentUnit = -1;
      }
      if (this.currentUnit !== -1) {
        this.appState.textures[this.currentUnit] = null;
      }
      this.gl.bindTexture(this.binding, this.texture);
      this.appState.textures[unit] = this;
      this.currentUnit = unit;
    }
    return this;
  }
};

// node_modules/picogl/build/module/renderbuffer.js
var Renderbuffer = class {
  constructor(gl, width, height, internalFormat, samples = 0) {
    this.gl = gl;
    this.renderbuffer = null;
    this.width = width;
    this.height = height;
    this.internalFormat = internalFormat;
    this.samples = samples;
    this.restore();
  }
  restore() {
    this.renderbuffer = this.gl.createRenderbuffer();
    this.resize(this.width, this.height);
    return this;
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
    this.gl.bindRenderbuffer(GL.RENDERBUFFER, this.renderbuffer);
    this.gl.renderbufferStorageMultisample(GL.RENDERBUFFER, this.samples, this.internalFormat, this.width, this.height);
    this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);
    return this;
  }
  delete() {
    this.gl.deleteRenderbuffer(this.renderbuffer);
    this.renderbuffer = null;
    return this;
  }
};

// node_modules/picogl/build/module/framebuffer.js
var Framebuffer = class {
  constructor(gl, appState) {
    this.gl = gl;
    this.framebuffer = null;
    this.appState = appState;
    this.numColorTargets = 0;
    this.colorAttachments = [];
    this.colorAttachmentEnums = [];
    this.colorAttachmentTargets = [];
    this.depthAttachment = null;
    this.depthAttachmentTarget = null;
    this.width = 0;
    this.height = 0;
    this.restore();
  }
  restore() {
    let currentFramebuffers = this.appState.framebuffers;
    for (let binding in currentFramebuffers) {
      if (currentFramebuffers[binding] === this) {
        currentFramebuffers[binding] = null;
      }
    }
    this.framebuffer = this.gl.createFramebuffer();
    return this;
  }
  colorTarget(index, attachment, target = attachment.is3D ? 0 : GL.TEXTURE_2D) {
    if (index >= this.numColorTargets) {
      let numColorTargets = index + 1;
      this.colorAttachmentEnums.length = numColorTargets;
      this.colorAttachments.length = numColorTargets;
      this.colorAttachmentTargets.length = numColorTargets;
      for (let i = this.numColorTargets; i < numColorTargets - 1; ++i) {
        this.colorAttachmentEnums[i] = GL.NONE;
        this.colorAttachments[i] = null;
        this.colorAttachmentTargets[i] = 0;
      }
      this.numColorTargets = numColorTargets;
    }
    this.colorAttachmentEnums[index] = GL.COLOR_ATTACHMENT0 + index;
    this.colorAttachments[index] = attachment;
    this.colorAttachmentTargets[index] = target;
    let currentFramebuffer = this.bindAndCaptureState();
    let binding = this.appState.drawFramebufferBinding;
    if (attachment instanceof Renderbuffer) {
      this.gl.framebufferRenderbuffer(binding, this.colorAttachmentEnums[index], GL.RENDERBUFFER, attachment.renderbuffer);
    } else if (attachment.is3D) {
      this.gl.framebufferTextureLayer(binding, this.colorAttachmentEnums[index], attachment.texture, 0, target);
    } else {
      this.gl.framebufferTexture2D(binding, this.colorAttachmentEnums[index], target, attachment.texture, 0);
    }
    this.gl.drawBuffers(this.colorAttachmentEnums);
    this.width = attachment.width;
    this.height = attachment.height;
    this.restoreState(currentFramebuffer);
    return this;
  }
  depthTarget(attachment, target = attachment.is3D ? 0 : GL.TEXTURE_2D) {
    let currentFramebuffer = this.bindAndCaptureState();
    let binding = this.appState.drawFramebufferBinding;
    this.depthAttachment = attachment;
    this.depthAttachmentTarget = target;
    if (attachment instanceof Renderbuffer) {
      this.gl.framebufferRenderbuffer(binding, GL.DEPTH_ATTACHMENT, GL.RENDERBUFFER, attachment.renderbuffer);
    } else if (attachment.is3D) {
      this.gl.framebufferTextureLayer(binding, GL.DEPTH_ATTACHMENT, attachment.texture, 0, target);
    } else {
      this.gl.framebufferTexture2D(binding, GL.DEPTH_ATTACHMENT, target, attachment.texture, 0);
    }
    this.width = attachment.width;
    this.height = attachment.height;
    this.restoreState(currentFramebuffer);
    return this;
  }
  resize(width = this.gl.drawingBufferWidth, height = this.gl.drawingBufferHeight) {
    let currentFramebuffer = this.bindAndCaptureState();
    let binding = this.appState.drawFramebufferBinding;
    for (let i = 0; i < this.numColorTargets; ++i) {
      let attachment = this.colorAttachments[i];
      if (!attachment) {
        continue;
      }
      attachment.resize(width, height);
      if (attachment instanceof Texture) {
        if (attachment.is3D) {
          this.gl.framebufferTextureLayer(binding, this.colorAttachmentEnums[i], attachment.texture, 0, this.colorAttachmentTargets[i]);
        } else {
          this.gl.framebufferTexture2D(binding, this.colorAttachmentEnums[i], this.colorAttachmentTargets[i], attachment.texture, 0);
        }
      }
    }
    if (this.depthAttachment) {
      this.depthAttachment.resize(width, height);
      if (this.depthAttachment instanceof Texture) {
        if (this.depthAttachment.is3D) {
          this.gl.framebufferTextureLayer(binding, GL.DEPTH_ATTACHMENT, this.depthAttachment.texture, 0, this.depthAttachmentTarget);
        } else {
          this.gl.framebufferTexture2D(binding, GL.DEPTH_ATTACHMENT, this.depthAttachmentTarget, this.depthAttachment.texture, 0);
        }
      }
    }
    this.width = width;
    this.height = height;
    this.restoreState(currentFramebuffer);
    return this;
  }
  delete() {
    if (this.framebuffer) {
      this.gl.deleteFramebuffer(this.framebuffer);
      this.framebuffer = null;
      let currentFramebuffers = this.appState.framebuffers;
      for (let binding in currentFramebuffers) {
        if (currentFramebuffers[binding] === this) {
          this.gl.bindFramebuffer(binding, null);
          currentFramebuffers[binding] = null;
        }
      }
    }
    return this;
  }
  getStatus() {
    let currentFramebuffer = this.bindAndCaptureState();
    let binding = this.appState.drawFramebufferBinding;
    let status = this.gl.checkFramebufferStatus(binding);
    this.restoreState(currentFramebuffer);
    return status;
  }
  bindForDraw() {
    let binding = this.appState.drawFramebufferBinding;
    let currentFramebuffers = this.appState.framebuffers;
    if (currentFramebuffers[binding] !== this) {
      this.gl.bindFramebuffer(binding, this.framebuffer);
      currentFramebuffers[binding] = this;
    }
    return this;
  }
  bindForRead() {
    let binding = this.appState.readFramebufferBinding;
    let currentFramebuffers = this.appState.framebuffers;
    if (currentFramebuffers[binding] !== this) {
      this.gl.bindFramebuffer(binding, this.framebuffer);
      currentFramebuffers[binding] = this;
    }
    return this;
  }
  bindAndCaptureState() {
    let binding = this.appState.drawFramebufferBinding;
    let currentFramebuffer = this.appState.framebuffers[binding];
    if (currentFramebuffer !== this) {
      this.gl.bindFramebuffer(binding, this.framebuffer);
    }
    return currentFramebuffer;
  }
  restoreState(framebuffer) {
    if (framebuffer !== this) {
      let binding = this.appState.drawFramebufferBinding;
      this.gl.bindFramebuffer(binding, framebuffer ? framebuffer.framebuffer : null);
    }
    return this;
  }
  get colorTextures() {
    console.error("Framebuffer.colorTextures is deprecated and will be removed. Please use Framebuffer.colorAttachments.");
    return this.colorAttachments;
  }
  get depthTexture() {
    console.error("Framebuffer.depthTexture is deprecated and will be removed. Please use Framebuffer.depthAttachment.");
    return this.depthAttachment;
  }
};

// node_modules/picogl/build/module/shader.js
var Shader = class {
  constructor(gl, appState, type, source) {
    this.gl = gl;
    this.appState = appState;
    this.shader = null;
    this.type = type;
    this.source = source.trim();
    this.restore();
  }
  restore() {
    this.shader = this.gl.createShader(this.type);
    this.gl.shaderSource(this.shader, this.source);
    this.gl.compileShader(this.shader);
    return this;
  }
  translatedSource() {
    if (WEBGL_INFO.DEBUG_SHADERS) {
      return this.appState.extensions.debugShaders.getTranslatedShaderSource(this.shader);
    } else {
      return "(Unavailable)";
    }
  }
  delete() {
    if (this.shader) {
      this.gl.deleteShader(this.shader);
      this.shader = null;
    }
    return this;
  }
  checkCompilation() {
    if (!this.gl.getShaderParameter(this.shader, GL.COMPILE_STATUS)) {
      let i, lines;
      console.error(this.gl.getShaderInfoLog(this.shader));
      lines = this.source.split("\n");
      for (i = 0; i < lines.length; ++i) {
        console.error(`${i + 1}: ${lines[i]}`);
      }
    }
    return this;
  }
};

// node_modules/picogl/build/module/uniforms.js
var UNIFORM_FUNC_NAME = {};
UNIFORM_FUNC_NAME[GL.BOOL] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_2D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_2D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D_SHADOW] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D_ARRAY] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_2D_ARRAY] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D_ARRAY_SHADOW] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_CUBE] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_CUBE] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_CUBE] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_CUBE_SHADOW] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_3D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_3D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_3D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT] = "uniform1ui";
UNIFORM_FUNC_NAME[GL.FLOAT] = "uniform1f";
UNIFORM_FUNC_NAME[GL.FLOAT_VEC2] = "uniform2f";
UNIFORM_FUNC_NAME[GL.FLOAT_VEC3] = "uniform3f";
UNIFORM_FUNC_NAME[GL.FLOAT_VEC4] = "uniform4f";
UNIFORM_FUNC_NAME[GL.INT_VEC2] = "uniform2i";
UNIFORM_FUNC_NAME[GL.INT_VEC3] = "uniform3i";
UNIFORM_FUNC_NAME[GL.INT_VEC4] = "uniform4i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC2] = "uniform2ui";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC3] = "uniform3ui";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC4] = "uniform4ui";
UNIFORM_FUNC_NAME[GL.BOOL_VEC2] = "uniform2i";
UNIFORM_FUNC_NAME[GL.BOOL_VEC3] = "uniform3i";
UNIFORM_FUNC_NAME[GL.BOOL_VEC4] = "uniform4i";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT2] = "uniformMatrix2fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT3] = "uniformMatrix3fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT4] = "uniformMatrix4fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT2x3] = "uniformMatrix2x3fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT2x4] = "uniformMatrix2x4fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT3x2] = "uniformMatrix3x2fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT3x4] = "uniformMatrix3x4fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT4x2] = "uniformMatrix4x2fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT4x3] = "uniformMatrix4x3fv";
var UNIFORM_COMPONENT_COUNT = {};
UNIFORM_COMPONENT_COUNT[GL.BOOL] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_2D] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_2D] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_SHADOW] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_ARRAY] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_2D_ARRAY] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_ARRAY_SHADOW] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_CUBE] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_CUBE] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_CUBE] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_CUBE_SHADOW] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_3D] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_3D] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_3D] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT] = 1;
UNIFORM_COMPONENT_COUNT[GL.FLOAT] = 1;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.INT_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.INT_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.INT_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2] = 4;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3] = 9;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4] = 16;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2x3] = 6;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2x4] = 8;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3x2] = 6;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3x4] = 12;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4x2] = 8;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4x3] = 12;
var UNIFORM_CACHE_CLASS = {};
UNIFORM_CACHE_CLASS[GL.INT] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_2D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_2D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_SHADOW] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_ARRAY] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_2D_ARRAY] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_ARRAY_SHADOW] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_CUBE] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_CUBE] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_CUBE] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_CUBE_SHADOW] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_3D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_3D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_3D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT] = Uint32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT] = Float32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT_VEC2] = Float32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT_VEC3] = Float32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT_VEC4] = Float32Array;
UNIFORM_CACHE_CLASS[GL.INT_VEC2] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_VEC3] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_VEC4] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC2] = Uint32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC3] = Uint32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC4] = Uint32Array;
var SingleComponentUniform = class {
  constructor(gl, handle, type) {
    this.gl = gl;
    this.handle = handle;
    this.glFuncName = UNIFORM_FUNC_NAME[type];
    this.cache = type === GL.BOOL ? false : 0;
  }
  set(value) {
    if (this.cache !== value) {
      this.gl[this.glFuncName](this.handle, value);
      this.cache = value;
    }
  }
};
var MultiNumericUniform = class {
  constructor(gl, handle, type, count) {
    this.gl = gl;
    this.handle = handle;
    this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
    this.count = count;
    this.cache = new UNIFORM_CACHE_CLASS[type](UNIFORM_COMPONENT_COUNT[type] * count);
  }
  set(value) {
    for (let i = 0, len5 = value.length; i < len5; ++i) {
      if (this.cache[i] !== value[i]) {
        this.gl[this.glFuncName](this.handle, value);
        this.cache.set(value);
        return;
      }
    }
  }
};
var MultiBoolUniform = class {
  constructor(gl, handle, type, count) {
    this.gl = gl;
    this.handle = handle;
    this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
    this.count = count;
    this.cache = new Array(UNIFORM_COMPONENT_COUNT[type] * count).fill(false);
  }
  set(value) {
    for (let i = 0, len5 = value.length; i < len5; ++i) {
      if (this.cache[i] !== value[i]) {
        this.gl[this.glFuncName](this.handle, value);
        for (let j = i; j < len5; j++) {
          this.cache[j] = value[j];
        }
        return;
      }
    }
  }
};
var MatrixUniform = class {
  constructor(gl, handle, type, count) {
    this.gl = gl;
    this.handle = handle;
    this.glFuncName = UNIFORM_FUNC_NAME[type];
    this.count = count;
    this.cache = new Float32Array(UNIFORM_COMPONENT_COUNT[type] * count);
  }
  set(value) {
    for (let i = 0, len5 = value.length; i < len5; ++i) {
      if (this.cache[i] !== value[i]) {
        this.gl[this.glFuncName](this.handle, false, value);
        this.cache.set(value);
        return;
      }
    }
  }
};

// node_modules/picogl/build/module/program.js
var Program = class {
  constructor(gl, appState, vsSource, fsSource, xformFeebackVars, attributeLocations, transformFeedbackMode) {
    this.gl = gl;
    this.appState = appState;
    this.program = null;
    this.transformFeedbackVaryings = xformFeebackVars || null;
    this.transformFeedbackMode = transformFeedbackMode || GL.SEPARATE_ATTRIBS;
    this.attributeLocations = attributeLocations || null;
    this.uniforms = {};
    this.uniformBlocks = {};
    this.uniformBlockCount = 0;
    this.samplers = {};
    this.samplerCount = 0;
    this.vertexSource = null;
    this.vertexShader = null;
    this.fragmentSource = null;
    this.fragmentShader = null;
    this.linked = false;
    if (typeof vsSource === "string") {
      this.vertexSource = vsSource;
    } else {
      this.vertexShader = vsSource;
    }
    if (typeof fsSource === "string") {
      this.fragmentSource = fsSource;
    } else {
      this.fragmentShader = fsSource;
    }
    this.initialize();
  }
  restore() {
    this.initialize();
    this.link();
    this.checkLinkage();
    return this;
  }
  translatedVertexSource() {
    if (this.vertexShader) {
      return this.vertexShader.translatedSource();
    } else {
      let vertexShader = new Shader(this.gl, this.appState, GL.VERTEX_SHADER, this.vertexSource);
      let translatedSource = vertexShader.translatedSource();
      vertexShader.delete();
      return translatedSource;
    }
  }
  translatedFragmentSource() {
    if (this.fragmentShader) {
      return this.fragmentShader.translatedSource();
    } else {
      let fragmentShader = new Shader(this.gl, this.appState, GL.FRAGMENT_SHADER, this.fragmentSource);
      let translatedSource = fragmentShader.translatedSource();
      fragmentShader.delete();
      return translatedSource;
    }
  }
  delete() {
    if (this.program) {
      this.gl.deleteProgram(this.program);
      this.program = null;
      if (this.appState.program === this) {
        this.gl.useProgram(null);
        this.appState.program = null;
      }
    }
    return this;
  }
  initialize() {
    if (this.appState.program === this) {
      this.gl.useProgram(null);
      this.appState.program = null;
    }
    this.linked = false;
    this.uniformBlockCount = 0;
    this.samplerCount = 0;
    if (this.vertexSource) {
      this.vertexShader = new Shader(this.gl, this.appState, GL.VERTEX_SHADER, this.vertexSource);
    }
    if (this.fragmentSource) {
      this.fragmentShader = new Shader(this.gl, this.appState, GL.FRAGMENT_SHADER, this.fragmentSource);
    }
    this.program = this.gl.createProgram();
    return this;
  }
  link() {
    this.gl.attachShader(this.program, this.vertexShader.shader);
    this.gl.attachShader(this.program, this.fragmentShader.shader);
    if (this.transformFeedbackVaryings) {
      this.gl.transformFeedbackVaryings(this.program, this.transformFeedbackVaryings, this.transformFeedbackMode);
    }
    if (this.attributeLocations) {
      for (let name in this.attributeLocations) {
        this.gl.bindAttribLocation(this.program, this.attributeLocations[name], name);
      }
    }
    this.gl.linkProgram(this.program);
    return this;
  }
  checkCompletion() {
    if (WEBGL_INFO.PARALLEL_SHADER_COMPILE) {
      return this.gl.getProgramParameter(this.program, GL.COMPLETION_STATUS_KHR);
    }
    return true;
  }
  checkLinkage() {
    if (this.linked) {
      return this;
    }
    if (this.gl.getProgramParameter(this.program, GL.LINK_STATUS)) {
      this.linked = true;
      this.initVariables();
    } else {
      console.error(this.gl.getProgramInfoLog(this.program));
      this.vertexShader.checkCompilation();
      this.fragmentShader.checkCompilation();
    }
    if (this.vertexSource) {
      this.vertexShader.delete();
      this.vertexShader = null;
    }
    if (this.fragmentSource) {
      this.fragmentShader.delete();
      this.fragmentShader = null;
    }
    return this;
  }
  initVariables() {
    this.bind();
    let numUniforms = this.gl.getProgramParameter(this.program, GL.ACTIVE_UNIFORMS);
    let textureUnit;
    for (let i = 0; i < numUniforms; ++i) {
      let uniformInfo = this.gl.getActiveUniform(this.program, i);
      let uniformHandle = this.gl.getUniformLocation(this.program, uniformInfo.name);
      let UniformClass = null;
      let type = uniformInfo.type;
      let numElements = uniformInfo.size;
      switch (type) {
        case GL.SAMPLER_2D:
        case GL.INT_SAMPLER_2D:
        case GL.UNSIGNED_INT_SAMPLER_2D:
        case GL.SAMPLER_2D_SHADOW:
        case GL.SAMPLER_2D_ARRAY:
        case GL.INT_SAMPLER_2D_ARRAY:
        case GL.UNSIGNED_INT_SAMPLER_2D_ARRAY:
        case GL.SAMPLER_2D_ARRAY_SHADOW:
        case GL.SAMPLER_CUBE:
        case GL.INT_SAMPLER_CUBE:
        case GL.UNSIGNED_INT_SAMPLER_CUBE:
        case GL.SAMPLER_CUBE_SHADOW:
        case GL.SAMPLER_3D:
        case GL.INT_SAMPLER_3D:
        case GL.UNSIGNED_INT_SAMPLER_3D:
          textureUnit = this.samplerCount++;
          this.samplers[uniformInfo.name] = textureUnit;
          this.gl.uniform1i(uniformHandle, textureUnit);
          break;
        case GL.INT:
        case GL.UNSIGNED_INT:
        case GL.FLOAT:
          UniformClass = numElements > 1 ? MultiNumericUniform : SingleComponentUniform;
          break;
        case GL.BOOL:
          UniformClass = numElements > 1 ? MultiBoolUniform : SingleComponentUniform;
          break;
        case GL.FLOAT_VEC2:
        case GL.INT_VEC2:
        case GL.UNSIGNED_INT_VEC2:
        case GL.FLOAT_VEC3:
        case GL.INT_VEC3:
        case GL.UNSIGNED_INT_VEC3:
        case GL.FLOAT_VEC4:
        case GL.INT_VEC4:
        case GL.UNSIGNED_INT_VEC4:
          UniformClass = MultiNumericUniform;
          break;
        case GL.BOOL_VEC2:
        case GL.BOOL_VEC3:
        case GL.BOOL_VEC4:
          UniformClass = MultiBoolUniform;
          break;
        case GL.FLOAT_MAT2:
        case GL.FLOAT_MAT3:
        case GL.FLOAT_MAT4:
        case GL.FLOAT_MAT2x3:
        case GL.FLOAT_MAT2x4:
        case GL.FLOAT_MAT3x2:
        case GL.FLOAT_MAT3x4:
        case GL.FLOAT_MAT4x2:
        case GL.FLOAT_MAT4x3:
          UniformClass = MatrixUniform;
          break;
        default:
          console.error("Unrecognized type for uniform ", uniformInfo.name);
          break;
      }
      if (UniformClass) {
        this.uniforms[uniformInfo.name] = new UniformClass(this.gl, uniformHandle, type, numElements);
      }
    }
    let numUniformBlocks = this.gl.getProgramParameter(this.program, GL.ACTIVE_UNIFORM_BLOCKS);
    for (let i = 0; i < numUniformBlocks; ++i) {
      let blockName = this.gl.getActiveUniformBlockName(this.program, i);
      let blockIndex = this.gl.getUniformBlockIndex(this.program, blockName);
      let uniformBlockBase = this.uniformBlockCount++;
      this.gl.uniformBlockBinding(this.program, blockIndex, uniformBlockBase);
      this.uniformBlocks[blockName] = uniformBlockBase;
    }
  }
  uniform(name, value) {
    if (this.uniforms[name]) {
      this.uniforms[name].set(value);
    }
    return this;
  }
  bind() {
    if (this.appState.program !== this) {
      this.gl.useProgram(this.program);
      this.appState.program = this;
    }
    return this;
  }
};

// node_modules/picogl/build/module/query.js
var Query = class {
  constructor(gl, target) {
    this.gl = gl;
    this.query = null;
    this.target = target;
    this.active = false;
    this.result = null;
    this.restore();
  }
  restore() {
    this.query = this.gl.createQuery();
    this.active = false;
    this.result = null;
    return this;
  }
  begin() {
    if (!this.active) {
      this.gl.beginQuery(this.target, this.query);
      this.result = null;
    }
    return this;
  }
  end() {
    if (!this.active) {
      this.gl.endQuery(this.target);
      this.active = true;
    }
    return this;
  }
  ready() {
    if (this.active && this.gl.getQueryParameter(this.query, GL.QUERY_RESULT_AVAILABLE)) {
      this.active = false;
      this.result = Number(this.gl.getQueryParameter(this.query, GL.QUERY_RESULT));
      return true;
    }
    return false;
  }
  delete() {
    if (this.query) {
      this.gl.deleteQuery(this.query);
      this.query = null;
    }
    return this;
  }
};

// node_modules/picogl/build/module/timer.js
var Timer = class {
  constructor(gl) {
    this.gl = gl;
    this.cpuTimer = window.performance || window.Date;
    this.gpuTimerQuery = null;
    this.cpuStartTime = 0;
    this.cpuTime = 0;
    this.gpuTime = 0;
    this.restore();
  }
  restore() {
    if (WEBGL_INFO.GPU_TIMER) {
      if (this.gpuTimerQuery) {
        this.gpuTimerQuery.restore();
      } else {
        this.gpuTimerQuery = new Query(this.gl, GL.TIME_ELAPSED_EXT);
      }
    }
    this.cpuStartTime = 0;
    this.cpuTime = 0;
    this.gpuTime = 0;
    return this;
  }
  start() {
    if (WEBGL_INFO.GPU_TIMER) {
      if (!this.gpuTimerQuery.active) {
        this.gpuTimerQuery.begin();
        this.cpuStartTime = this.cpuTimer.now();
      }
    } else {
      this.cpuStartTime = this.cpuTimer.now();
    }
    return this;
  }
  end() {
    if (WEBGL_INFO.GPU_TIMER) {
      if (!this.gpuTimerQuery.active) {
        this.gpuTimerQuery.end();
        this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
      }
    } else {
      this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
    }
    return this;
  }
  ready() {
    if (WEBGL_INFO.GPU_TIMER) {
      if (!this.gpuTimerQuery.active) {
        return false;
      }
      var gpuTimerAvailable = this.gpuTimerQuery.ready();
      var gpuTimerDisjoint = this.gl.getParameter(GL.GPU_DISJOINT_EXT);
      if (gpuTimerAvailable && !gpuTimerDisjoint) {
        this.gpuTime = this.gpuTimerQuery.result / 1e6;
        return true;
      } else {
        return false;
      }
    } else {
      return Boolean(this.cpuStartTime);
    }
  }
  delete() {
    if (this.gpuTimerQuery) {
      this.gpuTimerQuery.delete();
      this.gpuTimerQuery = null;
    }
    return this;
  }
};

// node_modules/picogl/build/module/transform-feedback.js
var TransformFeedback = class {
  constructor(gl, appState) {
    this.gl = gl;
    this.appState = appState;
    this.transformFeedback = null;
    this.restore();
  }
  restore() {
    if (this.appState.transformFeedback === this) {
      this.appState.transformFeedback = null;
    }
    this.transformFeedback = this.gl.createTransformFeedback();
    return this;
  }
  feedbackBuffer(index, buffer) {
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.transformFeedback);
    this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, buffer.buffer);
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
    this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, null);
    return this;
  }
  delete() {
    if (this.transformFeedback) {
      this.gl.deleteTransformFeedback(this.transformFeedback);
      this.transformFeedback = null;
      if (this.appState.transformFeedback === this) {
        this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
        this.appState.transformFeedback = null;
      }
    }
    return this;
  }
  bind() {
    if (this.appState.transformFeedback !== this) {
      this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.transformFeedback);
      this.appState.transformFeedback = this;
    }
    return this;
  }
};

// node_modules/picogl/build/module/uniform-buffer.js
var UniformBuffer = class {
  constructor(gl, appState, layout, usage = gl.DYNAMIC_DRAW) {
    this.gl = gl;
    this.buffer = null;
    this.dataViews = {};
    this.offsets = new Array(layout.length);
    this.sizes = new Array(layout.length);
    this.types = new Array(layout.length);
    this.size = 0;
    this.usage = usage;
    this.appState = appState;
    this.currentBase = -1;
    for (let i = 0, len5 = layout.length; i < len5; ++i) {
      let type = layout[i];
      switch (type) {
        case GL.FLOAT:
        case GL.INT:
        case GL.UNSIGNED_INT:
        case GL.BOOL:
          this.offsets[i] = this.size;
          this.sizes[i] = 1;
          if (type === GL.INT) {
            this.types[i] = GL.INT;
          } else if (type === GL.UNSIGNED_INT) {
            this.types[i] = GL.UNSIGNED_INT;
          } else {
            this.types[i] = GL.FLOAT;
          }
          this.size++;
          break;
        case GL.FLOAT_VEC2:
        case GL.INT_VEC2:
        case GL.UNSIGNED_INT_VEC2:
        case GL.BOOL_VEC2:
          this.size += this.size % 2;
          this.offsets[i] = this.size;
          this.sizes[i] = 2;
          if (type === GL.INT_VEC2) {
            this.types[i] = GL.INT;
          } else if (type === GL.UNSIGNED_INT_VEC2) {
            this.types[i] = GL.UNSIGNED_INT;
          } else {
            this.types[i] = GL.FLOAT;
          }
          this.size += 2;
          break;
        case GL.FLOAT_VEC3:
        case GL.INT_VEC3:
        case GL.UNSIGNED_INT_VEC3:
        case GL.BOOL_VEC3:
        case GL.FLOAT_VEC4:
        case GL.INT_VEC4:
        case GL.UNSIGNED_INT_VEC4:
        case GL.BOOL_VEC4:
          this.size += (4 - this.size % 4) % 4;
          this.offsets[i] = this.size;
          this.sizes[i] = 4;
          if (type === GL.INT_VEC4 || type === GL.INT_VEC3) {
            this.types[i] = GL.INT;
          } else if (type === GL.UNSIGNED_INT_VEC4 || type === GL.UNSIGNED_INT_VEC3) {
            this.types[i] = GL.UNSIGNED_INT;
          } else {
            this.types[i] = GL.FLOAT;
          }
          this.size += 4;
          break;
        case GL.FLOAT_MAT2:
        case GL.FLOAT_MAT2x3:
        case GL.FLOAT_MAT2x4:
          this.size += (4 - this.size % 4) % 4;
          this.offsets[i] = this.size;
          this.sizes[i] = 8;
          this.types[i] = GL.FLOAT;
          this.size += 8;
          break;
        case GL.FLOAT_MAT3:
        case GL.FLOAT_MAT3x2:
        case GL.FLOAT_MAT3x4:
          this.size += (4 - this.size % 4) % 4;
          this.offsets[i] = this.size;
          this.sizes[i] = 12;
          this.types[i] = GL.FLOAT;
          this.size += 12;
          break;
        case GL.FLOAT_MAT4:
        case GL.FLOAT_MAT4x2:
        case GL.FLOAT_MAT4x3:
          this.size += (4 - this.size % 4) % 4;
          this.offsets[i] = this.size;
          this.sizes[i] = 16;
          this.types[i] = GL.FLOAT;
          this.size += 16;
          break;
        default:
          console.error("Unsupported type for uniform buffer.");
      }
    }
    this.size += (4 - this.size % 4) % 4;
    this.data = new Float32Array(this.size);
    this.dataViews[GL.FLOAT] = this.data;
    this.dataViews[GL.INT] = new Int32Array(this.data.buffer);
    this.dataViews[GL.UNSIGNED_INT] = new Uint32Array(this.data.buffer);
    this.dirtyStart = this.size;
    this.dirtyEnd = 0;
    this.restore();
  }
  restore() {
    if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
      this.appState.uniformBuffers[this.currentBase] = null;
    }
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(GL.UNIFORM_BUFFER, this.buffer);
    this.gl.bufferData(GL.UNIFORM_BUFFER, this.size * 4, this.usage);
    this.gl.bindBuffer(GL.UNIFORM_BUFFER, null);
    return this;
  }
  set(index, value) {
    let view = this.dataViews[this.types[index]];
    let offset = this.offsets[index];
    let size = this.sizes[index];
    if (this.sizes[index] === 1) {
      view[offset] = value;
    } else {
      view.set(value, offset);
    }
    if (offset < this.dirtyStart) {
      this.dirtyStart = offset;
    }
    if (this.dirtyEnd < offset + size) {
      this.dirtyEnd = offset + size;
    }
    return this;
  }
  update() {
    if (this.dirtyStart >= this.dirtyEnd) {
      return this;
    }
    let data = this.data.subarray(this.dirtyStart, this.dirtyEnd);
    let offset = this.dirtyStart * 4;
    this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, this.buffer);
    this.gl.bufferSubData(this.gl.UNIFORM_BUFFER, offset, data);
    this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, null);
    this.dirtyStart = this.size;
    this.dirtyEnd = 0;
    return this;
  }
  delete() {
    if (this.buffer) {
      this.gl.deleteBuffer(this.buffer);
      this.buffer = null;
      if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
        this.appState.uniformBuffers[this.currentBase] = null;
      }
      this.currentBase = -1;
    }
    return this;
  }
  bind(base) {
    let currentBuffer = this.appState.uniformBuffers[base];
    if (currentBuffer !== this) {
      if (currentBuffer) {
        currentBuffer.currentBase = -1;
      }
      if (this.currentBase !== -1) {
        this.appState.uniformBuffers[this.currentBase] = null;
      }
      this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, base, this.buffer);
      this.appState.uniformBuffers[base] = this;
      this.currentBase = base;
    }
    return this;
  }
};

// node_modules/picogl/build/module/vertex-array.js
var VertexArray = class {
  constructor(gl, appState) {
    this.gl = gl;
    this.appState = appState;
    this.vertexArray = null;
    this.indexType = null;
    this.indexed = false;
    this.numElements = 0;
    this.numInstances = 1;
    this.offsets = 0;
    this.numDraws = 1;
  }
  restore() {
    if (this.appState.vertexArray === this) {
      this.appState.vertexArray = null;
    }
    if (this.vertexArray !== null) {
      this.vertexArray = this.gl.createVertexArray();
    }
    return this;
  }
  vertexAttributeBuffer(attributeIndex, vertexBuffer, options = DUMMY_OBJECT) {
    this.attributeBuffer(attributeIndex, vertexBuffer, options, false);
    return this;
  }
  instanceAttributeBuffer(attributeIndex, vertexBuffer, options = DUMMY_OBJECT) {
    this.attributeBuffer(attributeIndex, vertexBuffer, options, true);
    return this;
  }
  indexBuffer(vertexBuffer) {
    if (this.vertexArray === null) {
      this.vertexArray = this.gl.createVertexArray();
    }
    this.bind();
    this.gl.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, vertexBuffer.buffer);
    this.numElements = vertexBuffer.numItems * 3;
    this.indexType = vertexBuffer.type;
    this.indexed = true;
    return this;
  }
  delete() {
    if (this.vertexArray) {
      this.gl.deleteVertexArray(this.vertexArray);
      this.vertexArray = null;
      if (this.appState.vertexArray === this) {
        this.gl.bindVertexArray(null);
        this.appState.vertexArray = null;
      }
    }
    return this;
  }
  bind() {
    if (this.appState.vertexArray !== this) {
      this.gl.bindVertexArray(this.vertexArray);
      this.appState.vertexArray = this;
    }
    return this;
  }
  attributeBuffer(attributeIndex, vertexBuffer, options = {}, instanced) {
    if (this.vertexArray === null) {
      this.vertexArray = this.gl.createVertexArray();
    }
    this.bind();
    this.gl.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer.buffer);
    let {
      type = vertexBuffer.type,
      size = vertexBuffer.itemSize,
      stride = 0,
      offset = 0,
      normalized = false,
      integer = Boolean(vertexBuffer.integer && !normalized)
    } = options;
    let numColumns = vertexBuffer.numColumns;
    if (stride === 0) {
      stride = numColumns * size * TYPE_SIZE[type];
    }
    let numItems = Math.ceil((vertexBuffer.byteLength - offset) / stride);
    for (let i = 0; i < numColumns; ++i) {
      if (integer) {
        this.gl.vertexAttribIPointer(attributeIndex + i, size, type, stride, offset + i * size * TYPE_SIZE[type]);
      } else {
        this.gl.vertexAttribPointer(attributeIndex + i, size, type, normalized, stride, offset + i * size * TYPE_SIZE[type]);
      }
      if (instanced) {
        this.gl.vertexAttribDivisor(attributeIndex + i, 1);
      }
      this.gl.enableVertexAttribArray(attributeIndex + i);
    }
    if (this.numDraws === 1) {
      if (instanced) {
        this.numInstances = numItems;
      } else if (!this.indexed) {
        this.numElements = numItems;
      }
    }
    this.gl.bindBuffer(GL.ARRAY_BUFFER, null);
    return this;
  }
};

// node_modules/picogl/build/module/vertex-buffer.js
var INTEGER_TYPES = {
  [GL.BYTE]: true,
  [GL.UNSIGNED_BYTE]: true,
  [GL.SHORT]: true,
  [GL.UNSIGNED_SHORT]: true,
  [GL.INT]: true,
  [GL.UNSIGNED_INT]: true
};
var VertexBuffer = class {
  constructor(gl, appState, type, itemSize, data, usage = gl.STATIC_DRAW, indexArray) {
    let numColumns;
    switch (type) {
      case GL.FLOAT_MAT4:
      case GL.FLOAT_MAT4x2:
      case GL.FLOAT_MAT4x3:
        numColumns = 4;
        break;
      case GL.FLOAT_MAT3:
      case GL.FLOAT_MAT3x2:
      case GL.FLOAT_MAT3x4:
        numColumns = 3;
        break;
      case GL.FLOAT_MAT2:
      case GL.FLOAT_MAT2x3:
      case GL.FLOAT_MAT2x4:
        numColumns = 2;
        break;
      default:
        numColumns = 1;
    }
    switch (type) {
      case GL.FLOAT_MAT4:
      case GL.FLOAT_MAT3x4:
      case GL.FLOAT_MAT2x4:
        itemSize = 4;
        type = GL.FLOAT;
        break;
      case GL.FLOAT_MAT3:
      case GL.FLOAT_MAT4x3:
      case GL.FLOAT_MAT2x3:
        itemSize = 3;
        type = GL.FLOAT;
        break;
      case GL.FLOAT_MAT2:
      case GL.FLOAT_MAT3x2:
      case GL.FLOAT_MAT4x2:
        itemSize = 2;
        type = GL.FLOAT;
        break;
    }
    let dataLength;
    let byteLength;
    if (typeof data === "number") {
      dataLength = data;
      if (type) {
        data *= TYPE_SIZE[type];
      }
      byteLength = data;
    } else {
      dataLength = data.length;
      byteLength = data.byteLength;
    }
    this.gl = gl;
    this.buffer = null;
    this.appState = appState;
    this.type = type;
    this.itemSize = itemSize;
    this.numItems = type ? dataLength / (itemSize * numColumns) : byteLength / itemSize;
    this.numColumns = numColumns;
    this.byteLength = byteLength;
    this.usage = usage;
    this.indexArray = Boolean(indexArray);
    this.integer = Boolean(INTEGER_TYPES[this.type]);
    this.binding = this.indexArray ? GL.ELEMENT_ARRAY_BUFFER : GL.ARRAY_BUFFER;
    this.restore(data);
  }
  restore(data) {
    if (!data) {
      data = this.byteLength;
    }
    if (this.appState.vertexArray) {
      this.gl.bindVertexArray(null);
      this.appState.vertexArray = null;
    }
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.binding, this.buffer);
    this.gl.bufferData(this.binding, data, this.usage);
    this.gl.bindBuffer(this.binding, null);
    return this;
  }
  data(data, offset = 0) {
    if (this.appState.vertexArray) {
      this.gl.bindVertexArray(null);
      this.appState.vertexArray = null;
    }
    this.gl.bindBuffer(this.binding, this.buffer);
    this.gl.bufferSubData(this.binding, offset, data);
    this.gl.bindBuffer(this.binding, null);
    return this;
  }
  delete() {
    if (this.buffer) {
      this.gl.deleteBuffer(this.buffer);
      this.buffer = null;
    }
    return this;
  }
};

// node_modules/picogl/build/module/app.js
var App = class {
  constructor(gl) {
    this.gl = gl;
    this.canvas = gl.canvas;
    this.width = this.gl.drawingBufferWidth;
    this.height = this.gl.drawingBufferHeight;
    this.viewportX = 0;
    this.viewportY = 0;
    this.viewportWidth = 0;
    this.viewportHeight = 0;
    this.currentDrawCalls = null;
    this.emptyFragmentShader = null;
    this.state = {
      program: null,
      vertexArray: null,
      transformFeedback: null,
      activeTexture: -1,
      textures: new Array(WEBGL_INFO.MAX_TEXTURE_UNITS),
      uniformBuffers: new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS),
      freeUniformBufferBases: [],
      framebuffers: {},
      drawFramebufferBinding: GL.DRAW_FRAMEBUFFER,
      readFramebufferBinding: GL.READ_FRAMEBUFFER,
      extensions: {}
    };
    this.clearBits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT;
    this.cpuTime = 0;
    this.gpuTime = 0;
    this.viewport(0, 0, this.width, this.height);
    this.contextLostExt = null;
    this.contextLostListener = null;
    this.contextRestoredListener = null;
    this.contextRestoredHandler = null;
    this.initExtensions();
  }
  loseContext() {
    if (this.contextLostExt) {
      this.contextLostExt.loseContext();
    }
    return this;
  }
  restoreContext() {
    if (this.contextLostExt) {
      this.contextLostExt.restoreContext();
    }
    return this;
  }
  onContextRestored(fn) {
    this.contextRestoredHandler = fn;
    this.initContextListeners();
    return this;
  }
  enable(cap) {
    this.gl.enable(cap);
    return this;
  }
  disable(cap) {
    this.gl.disable(cap);
    return this;
  }
  colorMask(r, g, b, a) {
    this.gl.colorMask(r, g, b, a);
    return this;
  }
  clearColor(r, g, b, a) {
    this.gl.clearColor(r, g, b, a);
    return this;
  }
  clearMask(mask) {
    this.clearBits = mask;
    return this;
  }
  clear() {
    this.gl.clear(this.clearBits);
    return this;
  }
  drawFramebuffer(framebuffer) {
    framebuffer.bindForDraw();
    return this;
  }
  readFramebuffer(framebuffer) {
    framebuffer.bindForRead();
    return this;
  }
  defaultDrawFramebuffer() {
    let binding = this.state.drawFramebufferBinding;
    if (this.state.framebuffers[binding] !== null) {
      this.gl.bindFramebuffer(binding, null);
      this.state.framebuffers[binding] = null;
    }
    return this;
  }
  defaultReadFramebuffer() {
    let binding = this.state.readFramebufferBinding;
    if (this.state.framebuffers[binding] !== null) {
      this.gl.bindFramebuffer(binding, null);
      this.state.framebuffers[binding] = null;
    }
    return this;
  }
  blitFramebuffer(mask, options = DUMMY_OBJECT) {
    let readBinding = this.state.readFramebufferBinding;
    let drawBinding = this.state.drawFramebufferBinding;
    let readFramebuffer = this.state.framebuffers[readBinding];
    let drawFramebuffer = this.state.framebuffers[drawBinding];
    let defaultReadWidth = readFramebuffer ? readFramebuffer.width : this.width;
    let defaultReadHeight = readFramebuffer ? readFramebuffer.height : this.height;
    let defaultDrawWidth = drawFramebuffer ? drawFramebuffer.width : this.width;
    let defaultDrawHeight = drawFramebuffer ? drawFramebuffer.height : this.height;
    let {
      srcStartX = 0,
      srcStartY = 0,
      srcEndX = defaultReadWidth,
      srcEndY = defaultReadHeight,
      dstStartX = 0,
      dstStartY = 0,
      dstEndX = defaultDrawWidth,
      dstEndY = defaultDrawHeight,
      filter = GL.NEAREST
    } = options;
    this.gl.blitFramebuffer(srcStartX, srcStartY, srcEndX, srcEndY, dstStartX, dstStartY, dstEndX, dstEndY, mask, filter);
    return this;
  }
  depthRange(near, far) {
    this.gl.depthRange(near, far);
    return this;
  }
  depthMask(mask) {
    this.gl.depthMask(mask);
    return this;
  }
  depthFunc(func) {
    this.gl.depthFunc(func);
    return this;
  }
  blendFunc(src, dest) {
    this.gl.blendFunc(src, dest);
    return this;
  }
  blendFuncSeparate(csrc, cdest, asrc, adest) {
    this.gl.blendFuncSeparate(csrc, cdest, asrc, adest);
    return this;
  }
  blendEquation(mode) {
    this.gl.blendEquation(mode);
    return this;
  }
  stencilMask(mask) {
    this.gl.stencilMask(mask);
    return this;
  }
  stencilMaskSeparate(face, mask) {
    this.gl.stencilMaskSeparate(face, mask);
    return this;
  }
  stencilFunc(func, ref, mask) {
    this.gl.stencilFunc(func, ref, mask);
    return this;
  }
  stencilFuncSeparate(face, func, ref, mask) {
    this.gl.stencilFuncSeparate(face, func, ref, mask);
    return this;
  }
  stencilOp(stencilFail, depthFail, pass) {
    this.gl.stencilOp(stencilFail, depthFail, pass);
    return this;
  }
  stencilOpSeparate(face, stencilFail, depthFail, pass) {
    this.gl.stencilOpSeparate(face, stencilFail, depthFail, pass);
    return this;
  }
  scissor(x, y, width, height) {
    this.gl.scissor(x, y, width, height);
    return this;
  }
  polygonOffset(factor, units) {
    this.gl.polygonOffset(factor, units);
    return this;
  }
  readPixel(x, y, outColor, options = DUMMY_OBJECT) {
    let {
      format = GL.RGBA,
      type = GL.UNSIGNED_BYTE
    } = options;
    this.gl.readPixels(x, y, 1, 1, format, type, outColor);
    return this;
  }
  viewport(x, y, width, height) {
    if (this.viewportWidth !== width || this.viewportHeight !== height || this.viewportX !== x || this.viewportY !== y) {
      this.viewportX = x;
      this.viewportY = y;
      this.viewportWidth = width;
      this.viewportHeight = height;
      this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
    }
    return this;
  }
  defaultViewport() {
    this.viewport(0, 0, this.width, this.height);
    return this;
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.gl.drawingBufferWidth;
    this.height = this.gl.drawingBufferHeight;
    this.viewport(0, 0, this.width, this.height);
    return this;
  }
  createProgram(vsSource, fsSource, opts = {}) {
    let {transformFeedbackVaryings, attributeLocations, transformFeedbackMode} = opts;
    return new Program(this.gl, this.state, vsSource, fsSource, transformFeedbackVaryings, attributeLocations, transformFeedbackMode).link().checkLinkage();
  }
  createPrograms(...sources) {
    return new Promise((resolve, reject) => {
      let numPrograms = sources.length;
      let programs = new Array(numPrograms);
      let pendingPrograms = new Array(numPrograms);
      let numPending = numPrograms;
      for (let i = 0; i < numPrograms; ++i) {
        let source = sources[i];
        let vsSource = source[0];
        let fsSource = source[1];
        let opts = source[2] || {};
        let {transformFeedbackVaryings, attributeLocations, transformFeedbackMode} = opts;
        programs[i] = new Program(this.gl, this.state, vsSource, fsSource, transformFeedbackVaryings, attributeLocations, transformFeedbackMode);
        pendingPrograms[i] = programs[i];
      }
      for (let i = 0; i < numPrograms; ++i) {
        programs[i].link();
      }
      let poll = () => {
        let linked = 0;
        for (let i = 0; i < numPending; ++i) {
          if (pendingPrograms[i].checkCompletion()) {
            pendingPrograms[i].checkLinkage();
            if (pendingPrograms[i].linked) {
              ++linked;
            } else {
              reject(new Error("Program linkage failed"));
              return;
            }
          } else {
            pendingPrograms[i - linked] = pendingPrograms[i];
          }
        }
        numPending -= linked;
        if (numPending === 0) {
          resolve(programs);
        } else {
          requestAnimationFrame(poll);
        }
      };
      poll();
    });
  }
  restorePrograms(...programs) {
    return new Promise((resolve, reject) => {
      let numPrograms = programs.length;
      let pendingPrograms = programs.slice();
      let numPending = numPrograms;
      for (let i = 0; i < numPrograms; ++i) {
        programs[i].initialize();
      }
      for (let i = 0; i < numPrograms; ++i) {
        programs[i].link();
      }
      for (let i = 0; i < numPrograms; ++i) {
        programs[i].checkCompletion();
      }
      let poll = () => {
        let linked = 0;
        for (let i = 0; i < numPending; ++i) {
          if (pendingPrograms[i].checkCompletion()) {
            pendingPrograms[i].checkLinkage();
            if (pendingPrograms[i].linked) {
              ++linked;
            } else {
              reject(new Error("Program linkage failed"));
              return;
            }
          } else {
            pendingPrograms[i - linked] = pendingPrograms[i];
          }
        }
        numPending -= linked;
        if (numPending === 0) {
          resolve();
        } else {
          requestAnimationFrame(poll);
        }
      };
      poll();
    });
  }
  createShader(type, source) {
    return new Shader(this.gl, this.state, type, source);
  }
  createVertexArray() {
    return new VertexArray(this.gl, this.state);
  }
  createTransformFeedback() {
    return new TransformFeedback(this.gl, this.state);
  }
  createVertexBuffer(type, itemSize, data, usage) {
    return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage);
  }
  createMatrixBuffer(type, data, usage) {
    return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
  }
  createInterleavedBuffer(bytesPerVertex, data, usage) {
    return new VertexBuffer(this.gl, this.state, null, bytesPerVertex, data, usage);
  }
  createIndexBuffer(type, itemSize, data, usage) {
    if (ArrayBuffer.isView(itemSize)) {
      usage = data;
      data = itemSize;
      itemSize = 3;
    }
    return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
  }
  createUniformBuffer(layout, usage) {
    return new UniformBuffer(this.gl, this.state, layout, usage);
  }
  createTexture2D(image, width, height, options) {
    if (typeof image === "number") {
      options = height;
      height = width;
      width = image;
      image = null;
    } else if (height === void 0) {
      options = width;
      width = image.width;
      height = image.height;
    }
    return new Texture(this.gl, this.state, this.gl.TEXTURE_2D, image, width, height, void 0, false, options);
  }
  createTextureArray(image, width, height, depth, options) {
    if (typeof image === "number") {
      options = depth;
      depth = height;
      height = width;
      width = image;
      image = null;
    }
    return new Texture(this.gl, this.state, this.gl.TEXTURE_2D_ARRAY, image, width, height, depth, true, options);
  }
  createTexture3D(image, width, height, depth, options) {
    if (typeof image === "number") {
      options = depth;
      depth = height;
      height = width;
      width = image;
      image = null;
    }
    return new Texture(this.gl, this.state, this.gl.TEXTURE_3D, image, width, height, depth, true, options);
  }
  createCubemap(options) {
    return new Cubemap(this.gl, this.state, options);
  }
  createRenderbuffer(width, height, internalFormat, samples = 0) {
    return new Renderbuffer(this.gl, width, height, internalFormat, samples);
  }
  createFramebuffer() {
    return new Framebuffer(this.gl, this.state);
  }
  createQuery(target) {
    return new Query(this.gl, target);
  }
  createTimer() {
    return new Timer(this.gl);
  }
  createDrawCall(program, vertexArray, primitive) {
    return new DrawCall(this.gl, this.state, program, vertexArray, primitive);
  }
  initExtensions() {
    this.gl.getExtension("EXT_color_buffer_float");
    this.gl.getExtension("OES_texture_float_linear");
    this.gl.getExtension("WEBGL_compressed_texture_s3tc");
    this.gl.getExtension("WEBGL_compressed_texture_s3tc_srgb");
    this.gl.getExtension("WEBGL_compressed_texture_etc");
    this.gl.getExtension("WEBGL_compressed_texture_astc");
    this.gl.getExtension("WEBGL_compressed_texture_pvrtc");
    this.gl.getExtension("EXT_disjoint_timer_query_webgl2");
    this.gl.getExtension("EXT_disjoint_timer_query");
    this.gl.getExtension("EXT_texture_filter_anisotropic");
    this.state.extensions.debugShaders = this.gl.getExtension("WEBGL_debug_shaders");
    this.contextLostExt = this.gl.getExtension("WEBGL_lose_context");
    this.gl.getExtension("KHR_parallel_shader_compile");
    this.state.extensions.multiDrawInstanced = this.gl.getExtension("WEBGL_multi_draw_instanced");
  }
  initContextListeners() {
    if (this.contextRestoredHandler) {
      this.contextLostListener = (e) => {
        e.preventDefault();
      };
      this.contextRestoredListener = () => {
        this.initExtensions();
        this.contextRestoredHandler();
      };
      this.canvas.addEventListener("webglcontextlost", this.contextLostListener);
      this.canvas.addEventListener("webglcontextrestored", this.contextRestoredListener);
    } else {
      this.canvas.removeEventListener("webglcontextlost", this.contextLostListener);
      this.canvas.removeEventListener("webglcontextrestored", this.contextRestoredListener);
      this.contextLostListener = null;
      this.contextRestoredListener = null;
    }
  }
  depthTest() {
    console.warn("App.depthTest is deprecated. Use App.enable(PicoGL.DEPTH_TEST) instead.");
    this.enable(GL.DEPTH_TEST);
    return this;
  }
  noDepthTest() {
    console.warn("App.noDepthTest is deprecated. Use App.disable(PicoGL.DEPTH_TEST) instead.");
    this.disable(GL.DEPTH_TEST);
    return this;
  }
  blend() {
    console.warn("App.blend is deprecated. Use App.enable(PicoGL.BLEND) instead.");
    this.enable(GL.BLEND);
    return this;
  }
  noBlend() {
    console.warn("App.noBlend is deprecated. Use App.disable(PicoGL.BLEND) instead.");
    this.disable(GL.BLEND);
    return this;
  }
  stencilTest() {
    console.warn("App.stencilTest is deprecated. Use App.enable(PicoGL.STENCIL_TEST) instead.");
    this.enable(GL.STENCIL_TEST);
    return this;
  }
  noStencilTest() {
    console.warn("App.noStencilTest is deprecated. Use App.disable(PicoGL.STENCIL_TEST) instead.");
    this.disable(GL.STENCIL_TEST);
    return this;
  }
  scissorTest() {
    console.warn("App.scissorTest is deprecated. Use App.enable(PicoGL.SCISSOR_TEST) instead.");
    this.enable(GL.SCISSOR_TEST);
    return this;
  }
  noScissorTest() {
    console.warn("App.noScissorTest is deprecated. Use App.disable(PicoGL.SCISSOR_TEST) instead.");
    this.disable(GL.SCISSOR_TEST);
    return this;
  }
  rasterize() {
    console.warn("App.noRasterize is deprecated. Use App.disable(PicoGL.RASTERIZER_DISCARD) instead.");
    this.disable(GL.RASTERIZER_DISCARD);
    return this;
  }
  noRasterize() {
    console.warn("App.rasterize is deprecated. Use App.enable(PicoGL.RASTERIZER_DISCARD) instead.");
    this.enable(GL.RASTERIZER_DISCARD);
    return this;
  }
  cullBackfaces() {
    console.warn("App.cullBackfaces is deprecated. Use App.enable(PicoGL.CULL_FACE) instead.");
    this.enable(GL.CULL_FACE);
    return this;
  }
  drawBackfaces() {
    console.warn("App.drawBackfaces is deprecated. Use App.disable(PicoGL.CULL_FACE) instead.");
    this.disable(GL.CULL_FACE);
    return this;
  }
};

// node_modules/picogl/build/module/picogl.js
var webglInfoInitialized = false;
var PicoGL = Object.assign({
  version: "0.17.6",
  WEBGL_INFO,
  createApp(gl, contextAttributes) {
    if (gl.tagName === "CANVAS") {
      gl = gl.getContext("webgl2", contextAttributes);
    }
    if (!webglInfoInitialized) {
      WEBGL_INFO.MAX_TEXTURE_UNITS = gl.getParameter(GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
      WEBGL_INFO.MAX_UNIFORM_BUFFERS = gl.getParameter(GL.MAX_UNIFORM_BUFFER_BINDINGS);
      WEBGL_INFO.MAX_UNIFORMS = Math.min(gl.getParameter(GL.MAX_VERTEX_UNIFORM_VECTORS), gl.getParameter(GL.MAX_FRAGMENT_UNIFORM_VECTORS));
      WEBGL_INFO.SAMPLES = gl.getParameter(GL.SAMPLES);
      WEBGL_INFO.VENDOR = "(Unknown)";
      WEBGL_INFO.RENDERER = "(Unknown)";
      WEBGL_INFO.FLOAT_RENDER_TARGETS = Boolean(gl.getExtension("EXT_color_buffer_float"));
      WEBGL_INFO.LINEAR_FLOAT_TEXTURES = Boolean(gl.getExtension("OES_texture_float_linear"));
      WEBGL_INFO.S3TC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_s3tc"));
      WEBGL_INFO.S3TC_SRGB_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"));
      WEBGL_INFO.ETC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_etc"));
      WEBGL_INFO.ASTC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_astc"));
      WEBGL_INFO.PVRTC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_pvrtc"));
      WEBGL_INFO.LOSE_CONTEXT = Boolean(gl.getExtension("WEBGL_lose_context"));
      WEBGL_INFO.DEBUG_SHADERS = Boolean(gl.getExtension("WEBGL_debug_shaders"));
      WEBGL_INFO.GPU_TIMER = Boolean(gl.getExtension("EXT_disjoint_timer_query_webgl2") || gl.getExtension("EXT_disjoint_timer_query"));
      WEBGL_INFO.TEXTURE_ANISOTROPY = Boolean(gl.getExtension("EXT_texture_filter_anisotropic"));
      WEBGL_INFO.MAX_TEXTURE_ANISOTROPY = WEBGL_INFO.TEXTURE_ANISOTROPY ? gl.getParameter(GL.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;
      WEBGL_INFO.DEBUG_RENDERER_INFO = Boolean(gl.getExtension("WEBGL_debug_renderer_info"));
      if (WEBGL_INFO.DEBUG_RENDERER_INFO) {
        WEBGL_INFO.VENDOR = gl.getParameter(GL.UNMASKED_VENDOR_WEBGL);
        WEBGL_INFO.RENDERER = gl.getParameter(GL.UNMASKED_RENDERER_WEBGL);
      }
      WEBGL_INFO.PARALLEL_SHADER_COMPILE = Boolean(gl.getExtension("KHR_parallel_shader_compile"));
      WEBGL_INFO.MULTI_DRAW_INSTANCED = Boolean(gl.getExtension("WEBGL_multi_draw_instanced"));
      webglInfoInitialized = true;
    }
    return new App(gl);
  }
}, GL);
var picogl_default = PicoGL;

// node_modules/gl-matrix/esm/common.js
var EPSILON = 1e-6;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var degree = Math.PI / 180;
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0, i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };

// node_modules/gl-matrix/esm/mat3.js
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

// node_modules/gl-matrix/esm/mat4.js
var mat4_exports = {};
__export(mat4_exports, {
  add: () => add,
  adjoint: () => adjoint,
  clone: () => clone,
  copy: () => copy,
  create: () => create2,
  determinant: () => determinant,
  equals: () => equals,
  exactEquals: () => exactEquals,
  frob: () => frob,
  fromQuat: () => fromQuat,
  fromQuat2: () => fromQuat2,
  fromRotation: () => fromRotation,
  fromRotationTranslation: () => fromRotationTranslation,
  fromRotationTranslationScale: () => fromRotationTranslationScale,
  fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
  fromScaling: () => fromScaling,
  fromTranslation: () => fromTranslation,
  fromValues: () => fromValues,
  fromXRotation: () => fromXRotation,
  fromYRotation: () => fromYRotation,
  fromZRotation: () => fromZRotation,
  frustum: () => frustum,
  getRotation: () => getRotation,
  getScaling: () => getScaling,
  getTranslation: () => getTranslation,
  identity: () => identity,
  invert: () => invert,
  lookAt: () => lookAt,
  mul: () => mul,
  multiply: () => multiply,
  multiplyScalar: () => multiplyScalar,
  multiplyScalarAndAdd: () => multiplyScalarAndAdd,
  ortho: () => ortho,
  perspective: () => perspective,
  perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
  rotate: () => rotate,
  rotateX: () => rotateX,
  rotateY: () => rotateY,
  rotateZ: () => rotateZ,
  scale: () => scale,
  set: () => set,
  str: () => str,
  sub: () => sub,
  subtract: () => subtract,
  targetTo: () => targetTo,
  translate: () => translate,
  transpose: () => transpose
});
function create2() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function transpose(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a03 = a[3];
    var a12 = a[6], a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate(out, a, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len5 = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len5 < EPSILON) {
    return null;
  }
  len5 = 1 / len5;
  x *= len5;
  y *= len5;
  z *= len5;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotation(out, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len5 = Math.hypot(x, y, z);
  var s, c, t;
  if (len5 < EPSILON) {
    return null;
  }
  len5 = 1 / len5;
  x *= len5;
  y *= len5;
  z *= len5;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotationTranslation(out, q, v) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
function fromRotationTranslationScale(out, q, v, s) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
function fromQuat(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
function perspective(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
  var xScale = 2 / (leftTan + rightTan);
  var yScale = 2 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = yScale;
  out[6] = 0;
  out[7] = 0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near / (near - far);
  out[15] = 0;
  return out;
}
function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len5;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len5 = 1 / Math.hypot(z0, z1, z2);
  z0 *= len5;
  z1 *= len5;
  z2 *= len5;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len5 = Math.hypot(x0, x1, x2);
  if (!len5) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len5 = 1 / len5;
    x0 *= len5;
    x1 *= len5;
    x2 *= len5;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len5 = Math.hypot(y0, y1, y2);
  if (!len5) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len5 = 1 / len5;
    y0 *= len5;
    y1 *= len5;
    y2 *= len5;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  var len5 = z0 * z0 + z1 * z1 + z2 * z2;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
    z0 *= len5;
    z1 *= len5;
    z2 *= len5;
  }
  var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len5 = x0 * x0 + x1 * x1 + x2 * x2;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
    x0 *= len5;
    x1 *= len5;
    x2 *= len5;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
function multiplyScalarAndAdd(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  out[3] = a[3] + b[3] * scale6;
  out[4] = a[4] + b[4] * scale6;
  out[5] = a[5] + b[5] * scale6;
  out[6] = a[6] + b[6] * scale6;
  out[7] = a[7] + b[7] * scale6;
  out[8] = a[8] + b[8] * scale6;
  out[9] = a[9] + b[9] * scale6;
  out[10] = a[10] + b[10] * scale6;
  out[11] = a[11] + b[11] * scale6;
  out[12] = a[12] + b[12] * scale6;
  out[13] = a[13] + b[13] * scale6;
  out[14] = a[14] + b[14] * scale6;
  out[15] = a[15] + b[15] * scale6;
  return out;
}
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
  var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
  var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
  var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
  var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var mul = multiply;
var sub = subtract;

// node_modules/gl-matrix/esm/quat.js
var quat_exports = {};
__export(quat_exports, {
  add: () => add4,
  calculateW: () => calculateW,
  clone: () => clone4,
  conjugate: () => conjugate,
  copy: () => copy4,
  create: () => create5,
  dot: () => dot3,
  equals: () => equals4,
  exactEquals: () => exactEquals4,
  exp: () => exp,
  fromEuler: () => fromEuler,
  fromMat3: () => fromMat3,
  fromValues: () => fromValues4,
  getAngle: () => getAngle,
  getAxisAngle: () => getAxisAngle,
  identity: () => identity2,
  invert: () => invert2,
  len: () => len3,
  length: () => length3,
  lerp: () => lerp3,
  ln: () => ln,
  mul: () => mul4,
  multiply: () => multiply4,
  normalize: () => normalize3,
  pow: () => pow,
  random: () => random3,
  rotateX: () => rotateX3,
  rotateY: () => rotateY3,
  rotateZ: () => rotateZ3,
  rotationTo: () => rotationTo,
  scale: () => scale4,
  set: () => set4,
  setAxes: () => setAxes,
  setAxisAngle: () => setAxisAngle,
  slerp: () => slerp,
  sqlerp: () => sqlerp,
  sqrLen: () => sqrLen3,
  squaredLength: () => squaredLength3,
  str: () => str4
});

// node_modules/gl-matrix/esm/vec3.js
var vec3_exports = {};
__export(vec3_exports, {
  add: () => add2,
  angle: () => angle,
  bezier: () => bezier,
  ceil: () => ceil,
  clone: () => clone2,
  copy: () => copy2,
  create: () => create3,
  cross: () => cross,
  dist: () => dist,
  distance: () => distance,
  div: () => div,
  divide: () => divide,
  dot: () => dot,
  equals: () => equals2,
  exactEquals: () => exactEquals2,
  floor: () => floor,
  forEach: () => forEach,
  fromValues: () => fromValues2,
  hermite: () => hermite,
  inverse: () => inverse,
  len: () => len,
  length: () => length,
  lerp: () => lerp,
  max: () => max,
  min: () => min,
  mul: () => mul2,
  multiply: () => multiply2,
  negate: () => negate,
  normalize: () => normalize,
  random: () => random,
  rotateX: () => rotateX2,
  rotateY: () => rotateY2,
  rotateZ: () => rotateZ2,
  round: () => round,
  scale: () => scale2,
  scaleAndAdd: () => scaleAndAdd,
  set: () => set2,
  sqrDist: () => sqrDist,
  sqrLen: () => sqrLen,
  squaredDistance: () => squaredDistance,
  squaredLength: () => squaredLength,
  str: () => str2,
  sub: () => sub2,
  subtract: () => subtract2,
  transformMat3: () => transformMat3,
  transformMat4: () => transformMat4,
  transformQuat: () => transformQuat,
  zero: () => zero
});
function create3() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone2(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
function fromValues2(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set2(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add2(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply2(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
function scale2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function scaleAndAdd(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len5 = x * x + y * y + z * z;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = a[0] * len5;
  out[1] = a[1] * len5;
  out[2] = a[2] * len5;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2];
  var bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function random(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  var z = RANDOM() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * scale6;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale6;
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function transformMat3(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var x = a[0], y = a[1], z = a[2];
  var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
function rotateX2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateY2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateZ2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2];
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function angle(a, b) {
  var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}
function str2(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals2(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2];
  var b0 = b[0], b1 = b[1], b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub2 = subtract2;
var mul2 = multiply2;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
  var vec = create3();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/vec4.js
var vec4_exports = {};
__export(vec4_exports, {
  add: () => add3,
  ceil: () => ceil2,
  clone: () => clone3,
  copy: () => copy3,
  create: () => create4,
  cross: () => cross2,
  dist: () => dist2,
  distance: () => distance2,
  div: () => div2,
  divide: () => divide2,
  dot: () => dot2,
  equals: () => equals3,
  exactEquals: () => exactEquals3,
  floor: () => floor2,
  forEach: () => forEach2,
  fromValues: () => fromValues3,
  inverse: () => inverse2,
  len: () => len2,
  length: () => length2,
  lerp: () => lerp2,
  max: () => max2,
  min: () => min2,
  mul: () => mul3,
  multiply: () => multiply3,
  negate: () => negate2,
  normalize: () => normalize2,
  random: () => random2,
  round: () => round2,
  scale: () => scale3,
  scaleAndAdd: () => scaleAndAdd2,
  set: () => set3,
  sqrDist: () => sqrDist2,
  sqrLen: () => sqrLen2,
  squaredDistance: () => squaredDistance2,
  squaredLength: () => squaredLength2,
  str: () => str3,
  sub: () => sub3,
  subtract: () => subtract3,
  transformMat4: () => transformMat42,
  transformQuat: () => transformQuat2,
  zero: () => zero2
});
function create4() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function clone3(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function fromValues3(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function copy3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set3(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function add3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
function subtract3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
function multiply3(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
function divide2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
function ceil2(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
function floor2(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
function min2(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
function max2(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
function round2(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
function scale3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function scaleAndAdd2(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  out[3] = a[3] + b[3] * scale6;
  return out;
}
function distance2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
function squaredDistance2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
function length2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
function squaredLength2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
function negate2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
function inverse2(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  out[3] = 1 / a[3];
  return out;
}
function normalize2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len5 = x * x + y * y + z * z + w * w;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = x * len5;
  out[1] = y * len5;
  out[2] = z * len5;
  out[3] = w * len5;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function cross2(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
function lerp2(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
function random2(out, scale6) {
  scale6 = scale6 || 1;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = RANDOM() * 2 - 1;
    v2 = RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = RANDOM() * 2 - 1;
    v4 = RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);
  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale6 * v1;
  out[1] = scale6 * v2;
  out[2] = scale6 * v3 * d;
  out[3] = scale6 * v4 * d;
  return out;
}
function transformMat42(out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
function transformQuat2(out, a, q) {
  var x = a[0], y = a[1], z = a[2];
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
function zero2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}
function str3(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function exactEquals3(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals3(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
}
var sub3 = subtract3;
var mul3 = multiply3;
var div2 = divide2;
var dist2 = distance2;
var sqrDist2 = squaredDistance2;
var len2 = length2;
var sqrLen2 = squaredLength2;
var forEach2 = function() {
  var vec = create4();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/quat.js
function create5() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
function identity2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2;
  var s = Math.sin(rad / 2);
  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
function getAngle(a, b) {
  var dotproduct = dot3(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply4(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function calculateW(out, a) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
  return out;
}
function exp(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
function ln(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
function pow(out, a, b) {
  ln(out, a);
  scale4(out, out, b);
  exp(out, out);
  return out;
}
function slerp(out, a, b, t) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  var omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function random3(out) {
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
  return out;
}
function invert2(out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var dot5 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot5 ? 1 / dot5 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    var i = 0;
    if (m[4] > m[0])
      i = 1;
    if (m[8] > m[i * 3 + i])
      i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
function str4(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone4 = clone3;
var fromValues4 = fromValues3;
var copy4 = copy3;
var set4 = set3;
var add4 = add3;
var mul4 = multiply4;
var scale4 = scale3;
var dot3 = dot2;
var lerp3 = lerp2;
var length3 = length2;
var len3 = length3;
var squaredLength3 = squaredLength2;
var sqrLen3 = squaredLength3;
var normalize3 = normalize2;
var exactEquals4 = exactEquals3;
var equals4 = equals3;
var rotationTo = function() {
  var tmpvec3 = create3();
  var xUnitVec3 = fromValues2(1, 0, 0);
  var yUnitVec3 = fromValues2(0, 1, 0);
  return function(out, a, b) {
    var dot5 = dot(a, b);
    if (dot5 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 1e-6)
        cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot5 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot5;
      return normalize3(out, out);
    }
  };
}();
var sqlerp = function() {
  var temp1 = create5();
  var temp2 = create5();
  return function(out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
var setAxes = function() {
  var matr = create();
  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize3(out, fromMat3(out, matr));
  };
}();

// node_modules/gl-matrix/esm/vec2.js
var vec2_exports = {};
__export(vec2_exports, {
  add: () => add5,
  angle: () => angle2,
  ceil: () => ceil3,
  clone: () => clone5,
  copy: () => copy5,
  create: () => create6,
  cross: () => cross3,
  dist: () => dist3,
  distance: () => distance3,
  div: () => div3,
  divide: () => divide3,
  dot: () => dot4,
  equals: () => equals5,
  exactEquals: () => exactEquals5,
  floor: () => floor3,
  forEach: () => forEach3,
  fromValues: () => fromValues5,
  inverse: () => inverse3,
  len: () => len4,
  length: () => length4,
  lerp: () => lerp4,
  max: () => max3,
  min: () => min3,
  mul: () => mul5,
  multiply: () => multiply5,
  negate: () => negate3,
  normalize: () => normalize4,
  random: () => random4,
  rotate: () => rotate2,
  round: () => round3,
  scale: () => scale5,
  scaleAndAdd: () => scaleAndAdd3,
  set: () => set5,
  sqrDist: () => sqrDist3,
  sqrLen: () => sqrLen4,
  squaredDistance: () => squaredDistance3,
  squaredLength: () => squaredLength4,
  str: () => str5,
  sub: () => sub4,
  subtract: () => subtract4,
  transformMat2: () => transformMat2,
  transformMat2d: () => transformMat2d,
  transformMat3: () => transformMat32,
  transformMat4: () => transformMat43,
  zero: () => zero3
});
function create6() {
  var out = new ARRAY_TYPE(2);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
function clone5(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function fromValues5(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
function copy5(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function set5(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function add5(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
function subtract4(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
function multiply5(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
function divide3(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
function ceil3(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
function floor3(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
function min3(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
function max3(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
function round3(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
function scale5(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
function scaleAndAdd3(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  return out;
}
function distance3(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.hypot(x, y);
}
function squaredDistance3(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return x * x + y * y;
}
function length4(a) {
  var x = a[0], y = a[1];
  return Math.hypot(x, y);
}
function squaredLength4(a) {
  var x = a[0], y = a[1];
  return x * x + y * y;
}
function negate3(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
function inverse3(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  return out;
}
function normalize4(out, a) {
  var x = a[0], y = a[1];
  var len5 = x * x + y * y;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = a[0] * len5;
  out[1] = a[1] * len5;
  return out;
}
function dot4(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross3(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
function lerp4(out, a, b, t) {
  var ax = a[0], ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
function random4(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  out[0] = Math.cos(r) * scale6;
  out[1] = Math.sin(r) * scale6;
  return out;
}
function transformMat2(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
function transformMat2d(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
function transformMat32(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function transformMat43(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
function rotate2(out, a, b, rad) {
  var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
function angle2(a, b) {
  var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero3(out) {
  out[0] = 0;
  out[1] = 0;
  return out;
}
function str5(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals5(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function equals5(a, b) {
  var a0 = a[0], a1 = a[1];
  var b0 = b[0], b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
}
var len4 = length4;
var sub4 = subtract4;
var mul5 = multiply5;
var div3 = divide3;
var dist3 = distance3;
var sqrDist3 = squaredDistance3;
var sqrLen4 = squaredLength4;
var forEach3 = function() {
  var vec = create6();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 2;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }
    return a;
  };
}();

// node_modules/@uncharted.software/grafer/build/lib/renderer/Renderable.js
var RenderMode;
(function(RenderMode2) {
  RenderMode2[RenderMode2["DRAFT"] = 0] = "DRAFT";
  RenderMode2[RenderMode2["MEDIUM"] = 1] = "MEDIUM";
  RenderMode2[RenderMode2["HIGH_PASS_1"] = 2] = "HIGH_PASS_1";
  RenderMode2[RenderMode2["HIGH_PASS_2"] = 3] = "HIGH_PASS_2";
  RenderMode2[RenderMode2["PICKING"] = 4] = "PICKING";
})(RenderMode || (RenderMode = {}));
var GL_TYPE_SIZE = {
  [picogl_default.BYTE]: 1,
  [picogl_default.UNSIGNED_BYTE]: 1,
  [picogl_default.SHORT]: 2,
  [picogl_default.UNSIGNED_SHORT]: 2,
  [picogl_default.INT]: 4,
  [picogl_default.UNSIGNED_INT]: 4,
  [picogl_default.FLOAT]: 4
};
var GL_TYPE_GETTER = {
  [picogl_default.BYTE]: (view, offset) => view.getInt8(offset),
  [picogl_default.UNSIGNED_BYTE]: (view, offset) => view.getUint8(offset),
  [picogl_default.SHORT]: (view, offset) => view.getInt16(offset, true),
  [picogl_default.UNSIGNED_SHORT]: (view, offset) => view.getUint16(offset, true),
  [picogl_default.INT]: (view, offset) => view.getInt32(offset, true),
  [picogl_default.UNSIGNED_INT]: (view, offset) => view.getUint32(offset, true),
  [picogl_default.FLOAT]: (view, offset) => view.getFloat32(offset, true)
};
var GL_TYPE_SETTER = {
  [picogl_default.BYTE]: (view, offset, value) => view.setInt8(offset, value),
  [picogl_default.UNSIGNED_BYTE]: (view, offset, value) => view.setUint8(offset, value),
  [picogl_default.SHORT]: (view, offset, value) => view.setInt16(offset, value, true),
  [picogl_default.UNSIGNED_SHORT]: (view, offset, value) => view.setUint16(offset, value, true),
  [picogl_default.INT]: (view, offset, value) => view.setInt32(offset, value, true),
  [picogl_default.UNSIGNED_INT]: (view, offset, value) => view.setUint32(offset, value, true),
  [picogl_default.FLOAT]: (view, offset, value) => view.setFloat32(offset, value, true)
};
function glDataTypeSize(type) {
  return Array.isArray(type) ? GL_TYPE_SIZE[type[0]] * type.length : GL_TYPE_SIZE[type];
}
function glIntegerType(type) {
  return type === picogl_default.FLOAT ? 0 : 1;
}
function glDataTypesInfo(types4) {
  const mappingsKeys = Object.keys(types4);
  const keys = [];
  let stride = 0;
  for (let i = 0, n = mappingsKeys.length; i < n; ++i) {
    if (types4[mappingsKeys[i]]) {
      stride += glDataTypeSize(types4[mappingsKeys[i]]);
      keys.push(mappingsKeys[i]);
    }
  }
  return {
    keys,
    stride
  };
}
function setDrawCallUniforms(drawCall, uniforms) {
  for (const [key, value] of Object.entries(uniforms)) {
    if (value.texture) {
      drawCall.texture(key, value);
    } else {
      drawCall.uniform(key, value);
    }
  }
}
function configureVAO(vao, vbo, types4, typesInfo, attrIndex = 0, instanced = false) {
  const functionKey = instanced ? "instanceAttributeBuffer" : "vertexAttributeBuffer";
  const stride = typesInfo.stride;
  let offset = 0;
  for (let i = 0, n = typesInfo.keys.length; i < n; ++i) {
    const type = types4[typesInfo.keys[i]];
    const glType = Array.isArray(type) ? type[0] : type;
    const size = Array.isArray(type) ? type.length : 1;
    vao[functionKey](attrIndex + i, vbo, {
      type: glType,
      integer: glIntegerType(glType),
      size,
      stride,
      offset
    });
    offset += glDataTypeSize(type);
  }
}

// node_modules/@uncharted.software/grafer/build/lib/renderer/Camera.js
var Camera = class {
  constructor(viewportSize, position = vec3_exports.fromValues(0, 0, -1)) {
    this._aovRad = 0;
    this._aov = 0;
    this._nearPlane = 1;
    this._farPlane = 1e3;
    this._position = vec3_exports.create();
    vec3_exports.copy(this._position, position);
    this._rotation = quat_exports.fromEuler(quat_exports.create(), 0, 0, 0);
    this._viewMatrix = mat4_exports.create();
    this._projectionMatrix = mat4_exports.create();
    this._viewportSize = vec2_exports.copy(vec2_exports.create(), viewportSize);
    this._aspect = this._viewportSize[0] / this._viewportSize[1];
    this.aov = 45;
    this.calculateProjectionMatrix();
  }
  get aovRad() {
    return this._aovRad;
  }
  set aovRad(value) {
    this._aovRad = value;
    this._aov = value * 57.29577951308232;
    this.calculateProjectionMatrix();
  }
  get aov() {
    return this._aov;
  }
  set aov(value) {
    this._aov = value;
    this._aovRad = value * 0.017453292519943295;
    this.calculateProjectionMatrix();
  }
  get nearPlane() {
    return this._nearPlane;
  }
  set nearPlane(value) {
    this._nearPlane = value;
    this.calculateProjectionMatrix();
  }
  get farPlane() {
    return this._farPlane;
  }
  set farPlane(value) {
    this._farPlane = value;
    this.calculateProjectionMatrix();
  }
  get viewportSize() {
    return this._viewportSize;
  }
  set viewportSize(value) {
    vec2_exports.copy(this._viewportSize, value);
    this._aspect = this._viewportSize[0] / this._viewportSize[1];
    this.calculateProjectionMatrix();
  }
  get position() {
    return this._position;
  }
  set position(value) {
    vec3_exports.copy(this._position, value);
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(value) {
    quat_exports.copy(this._rotation, value);
  }
  get target() {
    return this._target;
  }
  set target(value) {
    vec3_exports.copy(this._target, value);
  }
  get aspect() {
    return this._aspect;
  }
  get viewMatrix() {
    mat4_exports.fromQuat(this._viewMatrix, this._rotation);
    mat4_exports.translate(this._viewMatrix, this._viewMatrix, this._position);
    return this._viewMatrix;
  }
  get projectionMatrix() {
    return this._projectionMatrix;
  }
  rotate(rotation) {
    quat_exports.mul(this._rotation, rotation, this._rotation);
  }
  calculateProjectionMatrix() {
    mat4_exports.perspective(this._projectionMatrix, this._aovRad, this._aspect, this._nearPlane, this._farPlane);
  }
};

// node_modules/@dekkai/event-emitter/build/lib/EventEmitter.js
var kOmniEvent = Symbol("EventEmitter::omni::event");
var EventEmitterMixin = class {
  static mixin(Parent) {
    const ParentConstructor = Parent;
    class EventEmitter2 extends ParentConstructor {
      constructor() {
        super(...arguments);
        this.listeners = new Map();
      }
      static get omniEvent() {
        return kOmniEvent;
      }
      on(type, callback) {
        const queue = this.listeners.get(type);
        if (queue) {
          queue.add(callback);
        } else {
          this.listeners.set(type, new Set([callback]));
        }
      }
      off(type, callback) {
        const queue = this.listeners.get(type);
        if (queue) {
          queue.delete(callback);
        }
      }
      emit(type, ...args) {
        if (type === kOmniEvent) {
          return;
        }
        if (this.listeners.has(type)) {
          const stack = new Set(this.listeners.get(type));
          for (const callback of stack) {
            callback.call(this, type, ...args);
          }
        }
        if (this.listeners.has(kOmniEvent)) {
          const omni = new Set(this.listeners.get(kOmniEvent));
          for (const callback of omni) {
            callback.call(this, type, ...args);
          }
        }
      }
    }
    return EventEmitter2;
  }
};
var EventEmitter = class extends EventEmitterMixin.mixin(EventEmitterMixin) {
};

// node_modules/@uncharted.software/grafer/build/lib/UX/UXModule.js
var UXModule = class {
  constructor() {
    this._enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (value !== this._enabled) {
      this._enabled = value;
      if (this._enabled) {
        this.hookEvents();
      } else {
        this.unhookEvents();
      }
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/MouseHandler.js
var kEvents = {
  move: Symbol("Grafer::UX::MouseHandler::move"),
  down: Symbol("Grafer::UX::MouseHandler::down"),
  up: Symbol("Grafer::UX::MouseHandler::up"),
  click: Symbol("Grafer::UX::MouseHandler::click"),
  wheel: Symbol("Grafer::UX::MouseHandler::wheel")
};
Object.freeze(kEvents);
var kButton2Index = {
  primary: 1,
  secondary: 2,
  auxiliary: 4,
  fourth: 8,
  fifth: 16
};
Object.freeze(kButton2Index);
var kIndex2Button = {
  1: "primary",
  2: "secondary",
  4: "auxiliary",
  8: "fourth",
  16: "fifth"
};
Object.freeze(kIndex2Button);
var MouseHandler = class extends EventEmitter.mixin(UXModule) {
  constructor(canvas, rect, pixelRatio, enabled = true) {
    super();
    this.boundHandler = this.handleMouseEvent.bind(this);
    this.disableContextMenu = (e) => e.preventDefault();
    this.canvas = canvas;
    this.rect = rect;
    this.pixelRatio = pixelRatio;
    this.state = {
      valid: false,
      clientCoords: vec2_exports.create(),
      canvasCoords: vec2_exports.create(),
      glCoords: vec2_exports.create(),
      deltaCoords: vec2_exports.create(),
      wheel: 0,
      buttons: {
        primary: false,
        secondary: false,
        auxiliary: false,
        fourth: false,
        fifth: false
      }
    };
    this.newState = {
      valid: false,
      clientCoords: vec2_exports.create(),
      canvasCoords: vec2_exports.create(),
      glCoords: vec2_exports.create(),
      deltaCoords: vec2_exports.create(),
      wheel: 0,
      buttons: {
        primary: false,
        secondary: false,
        auxiliary: false,
        fourth: false,
        fifth: false
      }
    };
    this.enabled = enabled;
  }
  static get events() {
    return kEvents;
  }
  on(type, callback) {
    super.on(type, callback);
  }
  off(type, callback) {
    super.off(type, callback);
  }
  resize(rect, pixelRatio) {
    this.rect = rect;
    this.pixelRatio = pixelRatio;
    this.syntheticUpdate(kEvents.move);
  }
  hookEvents() {
    this.canvas.addEventListener("mouseenter", this.boundHandler);
    this.canvas.addEventListener("mouseleave", this.boundHandler);
    this.canvas.addEventListener("mousemove", this.boundHandler);
    this.canvas.addEventListener("mousedown", this.boundHandler);
    this.canvas.addEventListener("mouseup", this.boundHandler);
    this.canvas.addEventListener("click", this.boundHandler);
    this.canvas.addEventListener("wheel", this.boundHandler);
    this.canvas.addEventListener("contextmenu", this.disableContextMenu);
  }
  unhookEvents() {
    this.canvas.removeEventListener("mouseenter", this.boundHandler);
    this.canvas.removeEventListener("mouseleave", this.boundHandler);
    this.canvas.removeEventListener("mousemove", this.boundHandler);
    this.canvas.removeEventListener("mousedown", this.boundHandler);
    this.canvas.removeEventListener("mouseup", this.boundHandler);
    this.canvas.removeEventListener("click", this.boundHandler);
    this.canvas.removeEventListener("wheel", this.boundHandler);
    this.canvas.removeEventListener("contextmenu", this.disableContextMenu);
  }
  syntheticUpdate(event, buttonIndex) {
    switch (event) {
      case kEvents.up:
      case kEvents.down:
      case kEvents.click:
        this.emitEvents([{
          event,
          args: [buttonIndex, kIndex2Button[buttonIndex]]
        }]);
        break;
      case kEvents.move:
        this.emitEvents([{
          event,
          args: [vec2_exports.fromValues(0, 0), this.state.canvasCoords]
        }]);
        break;
      default:
        break;
    }
  }
  update(state) {
    const events = [];
    if (state.deltaCoords[0] !== 0 || state.deltaCoords[1] !== 0) {
      if (state.valid) {
        events.push({
          event: kEvents.move,
          args: [state.deltaCoords, state.canvasCoords]
        });
      }
    }
    const buttonKeys = Object.keys(state.buttons);
    for (let i = 0, n = buttonKeys.length; i < n; ++i) {
      const key = buttonKeys[i];
      const pressed = state.valid && state.buttons[key];
      if (this.state.buttons[key] !== pressed) {
        this.state.buttons[key] = pressed;
        events.push({
          event: pressed ? kEvents.down : kEvents.up,
          args: [kButton2Index[key], key, pressed]
        });
      }
    }
    this.setMouseState(state);
    this.emitEvents(events);
  }
  emitEvents(entries) {
    for (let i = 0, n = entries.length; i < n; ++i) {
      this.emit(entries[i].event, this.state, ...entries[i].args);
    }
  }
  setMouseState(state) {
    this.state.valid = state.valid;
    vec2_exports.copy(this.state.clientCoords, state.clientCoords);
    vec2_exports.copy(this.state.canvasCoords, state.canvasCoords);
    vec2_exports.copy(this.state.glCoords, state.glCoords);
    vec2_exports.copy(this.state.deltaCoords, state.deltaCoords);
    this.state.wheel = state.wheel;
    Object.assign(this.state.buttons, state.buttons);
  }
  handleClickEvent(e, state) {
    this.setMouseState(state);
    this.emitEvents([{
      event: kEvents.click,
      args: [e.button, kIndex2Button[e.button]]
    }]);
  }
  handleWheelEvent(e, state) {
    this.setMouseState(state);
    let delta;
    if ("wheelDeltaY" in e) {
      delta = -e.wheelDeltaY / 120;
    } else {
      delta = e.deltaY < 1 ? -1 : 1;
    }
    this.emitEvents([{
      event: kEvents.wheel,
      args: [delta]
    }]);
  }
  handleMouseEvent(e) {
    const client = this.newState.clientCoords;
    const canvas = this.newState.canvasCoords;
    const gl = this.newState.glCoords;
    const delta = this.newState.deltaCoords;
    const rect = this.rect;
    vec2_exports.set(client, e.clientX, e.clientY);
    vec2_exports.set(canvas, e.clientX - rect.left, e.clientY - rect.top);
    vec2_exports.set(gl, (e.clientX - rect.left) * this.pixelRatio, (rect.bottom - e.clientY) * this.pixelRatio);
    if (e.type === "mousemove") {
      vec2_exports.set(delta, e.movementX, e.movementY);
    } else {
      vec2_exports.set(delta, 0, 0);
    }
    this.newState.valid = Boolean(canvas[0] >= rect.left && canvas[0] <= rect.right && canvas[1] >= 0 && canvas[1] <= rect.height);
    this.newState.buttons.primary = Boolean(e.buttons & 1);
    this.newState.buttons.secondary = Boolean(e.buttons & 2);
    this.newState.buttons.auxiliary = Boolean(e.buttons & 4);
    this.newState.buttons.fourth = Boolean(e.buttons & 8);
    this.newState.buttons.fifth = Boolean(e.buttons & 16);
    switch (e.type) {
      case "click":
        this.handleClickEvent(e, this.newState);
        break;
      case "wheel":
        this.handleWheelEvent(e, this.newState);
        break;
      case "mouseleave":
        this.newState.valid = false;
      default:
        this.update(this.newState);
        break;
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/renderer/ColorRegistry.js
var import_chroma_js = __toModule(require_chroma());
var ColorRegistry = class {
  constructor(context, initialCapacity = 1024) {
    this.dirty = false;
    this.context = context;
    this.colorMap = new Map();
    this.textureSize = vec2_exports.create();
    this.resizeTexture(initialCapacity);
  }
  get texture() {
    this.update();
    return this._texture;
  }
  get capacity() {
    return this.textureSize[0] * this.textureSize[1];
  }
  get length() {
    return this.colorMap.size;
  }
  update() {
    if (this.dirty) {
      if (this.colorMap.size > this.capacity) {
        this.resizeTexture(this.colorMap.size);
      }
      const buffer = new Uint8Array(this.capacity * 4);
      let offset = 0;
      for (const color of this.colorMap.keys()) {
        const rgba = import_chroma_js.default.hex(color).rgba();
        buffer[offset] = rgba[0];
        ++offset;
        buffer[offset] = rgba[1];
        ++offset;
        buffer[offset] = rgba[2];
        ++offset;
        buffer[offset] = Math.round(rgba[3] * 255);
        ++offset;
      }
      this._texture.data(buffer);
    }
    this.dirty = false;
  }
  registerColor(color) {
    const hex = (0, import_chroma_js.default)(color).hex();
    if (!this.colorMap.has(hex)) {
      this.colorMap.set(hex, this.colorMap.size);
      this.dirty = true;
    }
    return this.colorMap.get(hex);
  }
  resizeTexture(capacity) {
    if (this.capacity < capacity) {
      const textureWidth = Math.pow(2, Math.ceil(Math.log2(Math.ceil(Math.sqrt(capacity)))));
      const textureHeight = Math.pow(2, Math.ceil(Math.log2(Math.ceil(capacity / textureWidth))));
      this.textureSize = vec2_exports.fromValues(textureWidth, textureHeight);
      if (this._texture) {
        this._texture.resize(textureWidth, textureHeight);
      } else {
        this._texture = this.context.createTexture2D(textureWidth, textureHeight);
      }
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/renderer/RectObserver.js
var POLLING_RATE = 400;
var RectObserver = class {
  constructor(callback) {
    this.callback = callback;
  }
  observe(element) {
    this.elementTarget = element;
    this.elementTarget.addEventListener("mouseenter", this.handleMouseEnter.bind(this), false);
    this.elementTarget.addEventListener("mouseleave", this.handleMouseLeave.bind(this), false);
    this.rect = this.elementTarget.getBoundingClientRect();
  }
  disconnect() {
    clearInterval(this.poll);
    this.elementTarget.removeEventListener("mouseenter", this.handleMouseEnter.bind(this), false);
    this.elementTarget.removeEventListener("mouseleave", this.handleMouseLeave.bind(this), false);
  }
  handleMouseEnter() {
    this.pollElement();
    this.poll = setInterval(this.pollElement.bind(this), POLLING_RATE);
  }
  pollElement() {
    const rect = this.elementTarget.getBoundingClientRect();
    if (!this.rectEqual(this.rect, rect)) {
      this.rect = rect;
      this.callback(this.rect);
    }
  }
  handleMouseLeave() {
    this.pollElement();
    clearInterval(this.poll);
  }
  rectEqual(prev, curr) {
    return prev.width === curr.width && prev.height === curr.height && prev.top === curr.top && prev.left === curr.left;
  }
};
var RectObserver_default = RectObserver;

// node_modules/@uncharted.software/grafer/build/lib/renderer/Viewport.js
var Viewport = class {
  constructor(element) {
    this._clearColor = vec4_exports.create();
    this.animationFrameID = 0;
    this.timeoutID = 0;
    this.boundDelayedRender = this.delayedRender.bind(this);
    const pixelRatio = window.devicePixelRatio;
    this.element = element;
    if (this.element instanceof HTMLCanvasElement) {
      this.canvas = this.element;
    } else {
      this.canvas = document.createElement("canvas");
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.element.appendChild(this.canvas);
    }
    this.rect = this.canvas.getBoundingClientRect();
    this.canvas.width = this.rect.width * pixelRatio;
    this.canvas.height = this.rect.height * pixelRatio;
    this.context = PicoGL.createApp(this.canvas, {
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true
    });
    this.clearColor = [0.141176471, 0.160784314, 0.2, 1];
    this.context.clearMask(PicoGL.COLOR_BUFFER_BIT | PicoGL.DEPTH_BUFFER_BIT);
    this.context.enable(PicoGL.DEPTH_TEST);
    this.context.depthFunc(PicoGL.LESS);
    this.context.pixelRatio = pixelRatio;
    this.mouseHandler = new MouseHandler(this.canvas, this.rect, this.pixelRatio);
    this.size = vec2_exports.fromValues(this.canvas.width, this.canvas.height);
    this.camera = new Camera(this.size);
    const resizeObserver = new RectObserver_default((rect) => {
      this.rect = rect;
      this.context.resize(this.rect.width * this.pixelRatio, this.rect.height * this.pixelRatio);
      vec2_exports.set(this.size, this.canvas.width, this.canvas.height);
      this.camera.viewportSize = this.size;
      this.mouseHandler.resize(this.rect, this.pixelRatio);
      this.graph.resize(this.context);
      this.render();
    });
    resizeObserver.observe(this.canvas);
    this.colorRegisrty = new ColorRegistry(this.context);
  }
  get clearColor() {
    return this._clearColor;
  }
  set clearColor(value) {
    vec4_exports.copy(this._clearColor, value);
    this.context.clearColor(...this._clearColor);
  }
  get pixelRatio() {
    return this.context.pixelRatio;
  }
  resetContextFlags() {
    this.context.blendFuncSeparate(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA, PicoGL.ONE, PicoGL.ONE);
    this.context.defaultDrawFramebuffer();
    this.context.defaultReadFramebuffer();
    this.context.disable(PicoGL.BLEND);
    this.context.enable(PicoGL.DEPTH_TEST);
    this.context.depthFunc(PicoGL.LESS);
    this.context.depthMask(true);
    this.context.depthRange(0, 1);
    this.context.clearColor(...this._clearColor);
  }
  render() {
    if (!this.animationFrameID) {
      this.renderMode = RenderMode.DRAFT;
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
        this.timeoutID = 0;
      }
      this.animationFrameID = requestAnimationFrame(() => this._render());
    }
  }
  scheduleRender(delay) {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
    this.timeoutID = window.setTimeout(this.boundDelayedRender, delay);
  }
  delayedRender() {
    this.timeoutID = 0;
    this._render();
  }
  _render() {
    const uniforms = {
      uViewMatrix: this.camera.viewMatrix,
      uSceneMatrix: this.graph.matrix,
      uProjectionMatrix: this.camera.projectionMatrix,
      uViewportSize: this.size,
      uPixelRatio: this.pixelRatio,
      uClearColor: this._clearColor,
      uColorPalette: this.colorRegisrty.texture,
      uRenderMode: this.renderMode
    };
    this.resetContextFlags();
    this.context.clear();
    if (this.graph && this.graph.enabled) {
      this.graph.render(this.context, this.renderMode, uniforms);
      switch (this.renderMode) {
        case RenderMode.DRAFT:
          uniforms.uRenderMode = RenderMode.PICKING;
          this.graph.render(this.context, RenderMode.PICKING, uniforms);
          this.renderMode = RenderMode.MEDIUM;
          this.scheduleRender(85);
          break;
        case RenderMode.MEDIUM:
          this.renderMode = RenderMode.HIGH_PASS_1;
          this.scheduleRender(120);
          break;
        case RenderMode.HIGH_PASS_1:
          uniforms.uRenderMode = RenderMode.HIGH_PASS_2;
          this.graph.render(this.context, RenderMode.HIGH_PASS_2, uniforms);
          break;
      }
    }
    this.animationFrameID = 0;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/renderer/OffscreenBuffer.js
var OffscreenBuffer = class {
  constructor(context) {
    this._clearColor = vec4_exports.create();
    this.context = context;
    this.resize(context);
  }
  get clearColor() {
    return this._clearColor;
  }
  set clearColor(value) {
    vec4_exports.copy(this._clearColor, value);
  }
  resize(context) {
    if (this.frameBuffer) {
      this.frameBuffer.delete();
    }
    if (this.colorTarget) {
      this.colorTarget.delete();
    }
    if (this.depthTarget) {
      this.depthTarget.delete();
    }
    this.colorTarget = context.createTexture2D(context.width, context.height);
    this.depthTarget = context.createRenderbuffer(context.width, context.height, PicoGL.DEPTH_COMPONENT16);
    this.frameBuffer = context.createFramebuffer().colorTarget(0, this.colorTarget).depthTarget(this.depthTarget);
  }
  prepareContext(context) {
    context.depthMask(true);
    context.readFramebuffer(this.frameBuffer);
    context.drawFramebuffer(this.frameBuffer).clearMask(PicoGL.COLOR_BUFFER_BIT | PicoGL.DEPTH_BUFFER_BIT).clearColor(...this._clearColor).clear().depthMask(true);
  }
  blitToBuffer(context, target, mask = PicoGL.COLOR_BUFFER_BIT) {
    context.drawFramebuffer(target.frameBuffer);
    context.readFramebuffer(this.frameBuffer);
    context.blitFramebuffer(mask);
  }
  blitToScreen(context, mask = PicoGL.COLOR_BUFFER_BIT) {
    context.defaultDrawFramebuffer();
    context.readFramebuffer(this.frameBuffer);
    context.blitFramebuffer(mask);
  }
  readPixel(x, y, buffer) {
    this.context.defaultDrawFramebuffer().readFramebuffer(this.frameBuffer).readPixel(x, y, buffer);
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/mod.js
var mod_exports4 = {};
__export(mod_exports4, {
  Graph: () => Graph,
  edges: () => mod_exports2,
  labels: () => mod_exports3,
  nodes: () => mod_exports
});

// node_modules/@uncharted.software/grafer/build/lib/data/DataTools.js
var kDataMappingFlatten = Symbol("graffer:data::mapping::flatten::key");
var kDataEntryNeedsFlatten = Symbol("graffer:data::tools::needs::flatten");
function* dataIterator(data, mappings) {
  const keys = Reflect.ownKeys(mappings);
  for (let i = 0, n = data.length; i < n; ++i) {
    const entry = {};
    for (const key of keys) {
      if (mappings[key] !== null) {
        entry[key] = mappings[key](data[i], i);
      }
    }
    yield [i, entry];
  }
}
function concatenateData(data, mappings) {
  const result = [];
  for (let i = 0, n = data.length; i < n; ++i) {
    for (const [, entry] of dataIterator(data[i], mappings)) {
      result.push(entry);
    }
  }
  return result;
}
function computeDataTypes(types4, mappings) {
  const keys = Object.keys(types4);
  const result = {};
  for (let i = 0, n = keys.length; i < n; ++i) {
    if (keys[i] in mappings && mappings[keys[i]] !== null) {
      result[keys[i]] = types4[keys[i]];
    }
  }
  return result;
}
function writeValueToDataView(view, value, type, offset) {
  if (Array.isArray(value)) {
    let writeOffset = 0;
    for (let i = 0, n = value.length; i < n; ++i) {
      GL_TYPE_SETTER[type[i]](view, offset + writeOffset, value[i]);
      writeOffset += GL_TYPE_SIZE[type[i]];
    }
    return writeOffset;
  }
  GL_TYPE_SETTER[type](view, offset, value);
  return GL_TYPE_SIZE[type];
}
function flattenEntry(entry, types4, typesInfo, mappings, view, offset) {
  const flatMappings = {};
  let flattenLength = 0;
  for (let i = 0, n = typesInfo.keys.length; i < n; ++i) {
    const key = typesInfo.keys[i];
    if (entry[kDataEntryNeedsFlatten].has(key)) {
      flatMappings[key] = mappings[key][kDataMappingFlatten] ?? ((entry2, i2) => entry2[key][i2]);
      flattenLength = entry[key].length;
    } else {
      flatMappings[key] = mappings[key][kDataMappingFlatten] ?? ((entry2) => entry2[key]);
    }
  }
  let flatOffset = 0;
  for (let i = 0; i < flattenLength; ++i) {
    for (let ii = 0, n = typesInfo.keys.length; ii < n; ++ii) {
      const key = typesInfo.keys[ii];
      flatOffset += writeValueToDataView(view, flatMappings[key](entry, i, flattenLength), types4[key], offset + flatOffset);
    }
  }
  return flatOffset;
}
function packData(data, mappings, types4, potLength, cb) {
  const typesInfo = glDataTypesInfo(computeDataTypes(types4, mappings));
  const entries = [];
  let dataLength = 0;
  const cb1 = Array.isArray(cb) ? cb[0] : cb;
  const cb2 = Array.isArray(cb) ? cb[1] : null;
  for (const [index, entry] of dataIterator(data, mappings)) {
    let entryLength = 1;
    for (let i = 0, n = typesInfo.keys.length; i < n; ++i) {
      const value = entry[typesInfo.keys[i]];
      if (Array.isArray(value) && (!Array.isArray(types4[typesInfo.keys[i]]) || mappings[typesInfo.keys[i]][kDataMappingFlatten])) {
        if (!entry[kDataEntryNeedsFlatten]) {
          entry[kDataEntryNeedsFlatten] = new Set();
        }
        entry[kDataEntryNeedsFlatten].add(typesInfo.keys[i]);
        entryLength = Math.max(entryLength, value.length);
      }
    }
    entries.push(entry);
    dataLength += entryLength;
    if (cb1) {
      cb1(index, entry);
    }
  }
  dataLength = potLength ? Math.pow(2, Math.ceil(Math.log2(dataLength))) : dataLength;
  const buffer = new ArrayBuffer(typesInfo.stride * dataLength);
  const view = new DataView(buffer);
  let offset = 0;
  for (let i = 0, n = entries.length; i < n; ++i) {
    const entry = entries[i];
    if (cb2) {
      cb2(i, entry);
    }
    if (entry[kDataEntryNeedsFlatten]) {
      offset += flattenEntry(entry, types4, typesInfo, mappings, view, offset);
    } else {
      for (let i2 = 0, n2 = typesInfo.keys.length; i2 < n2; ++i2) {
        offset += writeValueToDataView(view, entry[typesInfo.keys[i2]], types4[typesInfo.keys[i2]], offset);
      }
    }
  }
  return buffer;
}
function printDataGL(context, vbo, count, types4) {
  const gl = context.gl;
  const typesInfo = glDataTypesInfo(types4);
  const result = new ArrayBuffer(typesInfo.stride * count);
  const view = new DataView(result);
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo.buffer);
  gl.getBufferSubData(gl.ARRAY_BUFFER, 0, view);
  let off = 0;
  for (let i = 0; i < count; ++i) {
    for (let ii = 0, nn = typesInfo.keys.length; ii < nn; ++ii) {
      const type = Array.isArray(types4[typesInfo.keys[ii]]) ? types4[typesInfo.keys[ii]] : [types4[typesInfo.keys[ii]]];
      const values = [];
      for (let iii = 0, nnn = type.length; iii < nnn; ++iii) {
        values.push(GL_TYPE_GETTER[type[iii]](view, off));
        off += GL_TYPE_SIZE[type[iii]];
      }
      console.log(`ELEMENT[${i}] ATTR[${ii}]: ${values}`);
    }
  }
}

// node_modules/@uncharted.software/grafer/build/lib/data/GraphPoints.js
var GraphPoints_test_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aIndex;\n\nuniform sampler2D uDataTexture;\n\nflat out vec3 vPosition;\nflat out float vRadius;\nflat out float vYolo;\n\nvec4 getValueByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvoid main() {\n    vec4 value = getValueByIndexFromTexture(uDataTexture, int(aIndex));\n    vPosition = value.xyz;\n    vRadius = value.w;\n    vYolo = value.w / 10.0;\n}\n";
var noop_fs_default = "#version 300 es\n#define GLSLIFY 1\nvoid main() {}\n";
var kDefaultMappings = {
  id: (entry, i) => "id" in entry ? entry.id : i,
  x: (entry) => entry.x,
  y: (entry) => entry.y,
  z: (entry) => "z" in entry ? entry.z : 0,
  radius: (entry) => "radius" in entry ? entry.radius : 0
};
var kGLTypes = {
  x: picogl_default.FLOAT,
  y: picogl_default.FLOAT,
  z: picogl_default.FLOAT,
  radius: picogl_default.FLOAT
};
var GraphPoints = class {
  static createGraphFromNodes(context, nodes, mappings = {}) {
    let pointIndex = 0;
    const dataMappings = Object.assign({}, kDefaultMappings, {
      id: () => pointIndex++
    }, mappings);
    const points = concatenateData(nodes, dataMappings);
    return new this(context, points);
  }
  get dataTexture() {
    return this._dataTexture;
  }
  get dataBuffer() {
    return this._dataBuffer;
  }
  get dataView() {
    return this._dataView;
  }
  constructor(context, data, mappings = {}) {
    this.map = new Map();
    this.bb = {
      min: vec3_exports.fromValues(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
      max: vec3_exports.fromValues(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
    };
    this.bbCorner = vec3_exports.fromValues(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    const dataMappings = Object.assign({}, kDefaultMappings, mappings);
    this._dataBuffer = packData(data, dataMappings, kGLTypes, true, (i, entry) => {
      this.map.set(entry.id, i);
      this.bb.min[0] = Math.min(this.bb.min[0], entry.x);
      this.bb.min[1] = Math.min(this.bb.min[1], entry.y);
      this.bb.min[2] = Math.min(this.bb.min[2], entry.z);
      this.bb.max[0] = Math.max(this.bb.max[0], entry.x);
      this.bb.max[1] = Math.max(this.bb.max[1], entry.y);
      this.bb.max[2] = Math.max(this.bb.max[2], entry.z);
      this.bbCorner[0] = Math.max(this.bbCorner[0], Math.abs(entry.x));
      this.bbCorner[1] = Math.max(this.bbCorner[1], Math.abs(entry.y));
      this.bbCorner[2] = Math.max(this.bbCorner[2], Math.abs(entry.z));
    });
    this._dataView = new DataView(this._dataBuffer);
    this.bbCornerLength = vec3_exports.length(this.bbCorner);
    const textureWidth = Math.pow(2, Math.ceil(Math.log2(Math.ceil(Math.sqrt(data.length)))));
    const textureHeight = Math.pow(2, Math.ceil(Math.log2(Math.ceil(data.length / textureWidth))));
    this._dataTexture = context.createTexture2D(textureWidth, textureHeight, {
      internalFormat: picogl_default.RGBA32F
    });
    const float32 = new Float32Array(this._dataBuffer);
    this._dataTexture.data(float32);
  }
  destroy() {
    this._dataTexture.delete();
    this.map.clear();
    this._dataTexture = null;
    this._dataBuffer = null;
    this.map = null;
  }
  getPointIndex(id) {
    return this.map.get(id);
  }
  testFeedback(context) {
    const program = context.createProgram(GraphPoints_test_vs_default, noop_fs_default, {transformFeedbackVaryings: ["vPosition", "vRadius", "vYolo"], transformFeedbackMode: picogl_default.INTERLEAVED_ATTRIBS});
    const pointsTarget = context.createVertexBuffer(picogl_default.FLOAT, 4, 40);
    const pointsIndices = context.createVertexBuffer(picogl_default.UNSIGNED_BYTE, 1, new Uint8Array([
      0,
      1,
      2,
      3,
      4,
      5
    ]));
    const transformFeedback = context.createTransformFeedback().feedbackBuffer(0, pointsTarget);
    const vertexArray = context.createVertexArray().vertexAttributeBuffer(0, pointsIndices);
    const drawCall = context.createDrawCall(program, vertexArray).transformFeedback(transformFeedback);
    drawCall.primitive(picogl_default.POINTS);
    drawCall.texture("uDataTexture", this._dataTexture);
    context.enable(picogl_default.RASTERIZER_DISCARD);
    drawCall.draw();
    context.disable(picogl_default.RASTERIZER_DISCARD);
    printDataGL(context, pointsTarget, 6, {
      position: [picogl_default.FLOAT, picogl_default.FLOAT, picogl_default.FLOAT],
      radius: picogl_default.FLOAT,
      yolo: picogl_default.FLOAT
    });
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/Graph.js
var Graph = class extends GraphPoints {
  constructor(context, data, mappings = {}) {
    super(context, data, mappings);
    this.enabled = true;
    this._layers = [];
    this._rotation = quat_exports.create();
    this._translation = vec3_exports.create();
    this._matrix = mat4_exports.create();
  }
  get matrix() {
    mat4_exports.fromRotationTranslation(this._matrix, this._rotation, this._translation);
    return this._matrix;
  }
  get layers() {
    return this._layers;
  }
  get rotation() {
    return this._rotation;
  }
  get translation() {
    return this._translation;
  }
  render(context, mode, uniforms) {
    if (mode === RenderMode.PICKING && this.picking && this.picking.enabled) {
      this.picking.offscreenBuffer.prepareContext(context);
    }
    for (let i = 0, n = this._layers.length; i < n; ++i) {
      if (this._layers[i].enabled) {
        this._layers[i].render(context, mode, uniforms);
      }
    }
  }
  resize(context) {
    if (this.picking) {
      this.picking.offscreenBuffer.resize(context);
    }
  }
  rotate(rotation) {
    quat_exports.mul(this._rotation, rotation, this._rotation);
  }
  addLayer(layer) {
    this._layers.push(layer);
  }
  addLayerAt(layer, index) {
    if (index >= 0 && index <= this._layers.length) {
      this._layers.splice(index, 0, layer);
    }
  }
  removeLayer(layer) {
    const i = this._layers.indexOf(layer);
    if (i !== -1) {
      this._layers.splice(i, 1);
    }
  }
  removeLayerAt(index) {
    if (index >= 0 && index < this._layers.length) {
      this._layers.splice(index, 1);
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/mod.js
var mod_exports = {};
__export(mod_exports, {
  Circle: () => Circle,
  Cross: () => Cross,
  Nodes: () => Nodes,
  Octagon: () => Octagon,
  Pentagon: () => Pentagon,
  Plus: () => Plus,
  Ring: () => Ring,
  Star: () => Star,
  Triangle: () => Triangle,
  kBasicNodeDataTypes: () => kBasicNodeDataTypes,
  kBasicNodeMappings: () => kBasicNodeMappings,
  kGLCircleNodeTypes: () => kGLCircleNodeTypes,
  types: () => types
});

// node_modules/@uncharted.software/grafer/build/lib/data/PointsReader.js
var noop_fs_default2 = "#version 300 es\n#define GLSLIFY 1\nvoid main() {}\n";
var PointsReader = class {
  get dataTexture() {
    return this.points.dataTexture;
  }
  constructor(...args) {
    this.initialize(...args);
  }
  initialize(context, points, data, mappings) {
    this.points = points;
    this.ingestData(context, data, mappings);
    this.initializeTargetBuffers(context, this.dataBuffer.byteLength / this.dataStride);
    this.initializeDataDrawCall(context);
  }
  ingestData(context, data, mappings) {
    const dataMappings = this.computeMappings(mappings);
    const types4 = computeDataTypes(this.getGLSourceTypes(), dataMappings);
    this.dataBuffer = packData(data, dataMappings, types4, false, this.packDataCB());
    this.dataView = new DataView(this.dataBuffer);
    const typesInfo = glDataTypesInfo(types4);
    this.dataStride = typesInfo.stride;
    this.sourceVBO = context.createInterleavedBuffer(this.dataStride, this.dataView);
    this.sourceVAO = context.createVertexArray();
    configureVAO(this.sourceVAO, this.sourceVBO, types4, typesInfo);
  }
  initializeTargetBuffers(context, dataLength) {
    const targetTypes = this.getGLTargetTypes();
    const stride = glDataTypesInfo(targetTypes).stride;
    this.targetVBO = context.createInterleavedBuffer(stride, dataLength * stride);
    this.targetTFO = context.createTransformFeedback().feedbackBuffer(0, this.targetVBO);
  }
  initializeDataDrawCall(context) {
    const dataShader = this.getDataShader();
    this.dataProgram = context.createProgram(dataShader.vs, noop_fs_default2, {
      transformFeedbackVaryings: dataShader.varyings,
      transformFeedbackMode: PicoGL.INTERLEAVED_ATTRIBS
    });
    this.dataDrawCall = context.createDrawCall(this.dataProgram, this.sourceVAO).transformFeedback(this.targetTFO);
    this.dataDrawCall.primitive(PicoGL.POINTS);
  }
  compute(context, uniforms) {
    setDrawCallUniforms(this.dataDrawCall, uniforms);
    context.enable(PicoGL.RASTERIZER_DISCARD);
    this.dataDrawCall.draw();
    context.disable(PicoGL.RASTERIZER_DISCARD);
  }
  configureTargetVAO(vao, attrIndex = 1) {
    const types4 = this.getGLTargetTypes();
    const typesInfo = glDataTypesInfo(types4);
    configureVAO(vao, this.targetVBO, types4, typesInfo, attrIndex, true);
  }
  packDataCB() {
    return () => null;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/LayerRenderable.js
var LayerRenderableBlendMode;
(function(LayerRenderableBlendMode2) {
  LayerRenderableBlendMode2[LayerRenderableBlendMode2["NONE"] = 0] = "NONE";
  LayerRenderableBlendMode2[LayerRenderableBlendMode2["NORMAL"] = 1] = "NORMAL";
  LayerRenderableBlendMode2[LayerRenderableBlendMode2["ADDITIVE"] = 2] = "ADDITIVE";
})(LayerRenderableBlendMode || (LayerRenderableBlendMode = {}));
var PointsReaderEmitter = EventEmitter.mixin(PointsReader);
var LayerRenderable = class extends PointsReaderEmitter {
  constructor(...args) {
    super(...args);
    this.enabled = true;
    this.nearDepth = 0;
    this.farDepth = 1;
    this.blendMode = 1;
  }
  static get defaultMappings() {
    return void 0;
  }
  get alpha() {
    return this.localUniforms.uAlpha;
  }
  set alpha(value) {
    this.localUniforms.uAlpha = value;
  }
  get fade() {
    return this.localUniforms.uFade;
  }
  set fade(value) {
    this.localUniforms.uFade = value;
  }
  get desaturate() {
    return this.localUniforms.uDesaturate;
  }
  set desaturate(value) {
    this.localUniforms.uDesaturate = value;
  }
  initialize(context, points, data, mappings, pickingManager) {
    this.pickingManager = pickingManager;
    this.picking = true;
    this.localUniforms = Object.assign({}, this.localUniforms, {
      uAlpha: 1,
      uFade: 0,
      uDesaturate: 0
    });
    super.initialize(context, points, data, mappings);
  }
  configureRenderContext(context, renderMode) {
    context.depthRange(this.nearDepth, this.farDepth);
    switch (renderMode) {
      case RenderMode.PICKING:
        context.depthMask(true);
        context.disable(PicoGL.BLEND);
        break;
      case RenderMode.HIGH_PASS_2:
        context.depthMask(false);
        context.enable(PicoGL.BLEND);
        if (this.blendMode === 2) {
          context.blendFuncSeparate(PicoGL.SRC_ALPHA, PicoGL.ONE, PicoGL.ONE, PicoGL.ONE);
        } else {
          context.blendFuncSeparate(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA, PicoGL.ONE, PicoGL.ONE);
        }
        break;
      default:
        if (this.localUniforms.uAlpha >= 1 || this.blendMode === 0) {
          context.disable(PicoGL.BLEND);
          context.depthMask(true);
        } else {
          context.enable(PicoGL.BLEND);
          context.depthMask(false);
          if (this.blendMode === 2) {
            context.blendFuncSeparate(PicoGL.SRC_ALPHA, PicoGL.ONE, PicoGL.ONE, PicoGL.ONE);
          } else {
            context.blendFuncSeparate(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA, PicoGL.ONE, PicoGL.ONE);
          }
        }
        break;
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/Nodes.js
var kBasicNodeMappings = {
  id: (entry, i) => "id" in entry ? entry.id : i,
  point: (entry, i) => "point" in entry ? entry.point : i,
  color: (entry) => "color" in entry ? entry.color : 0,
  radius: null
};
var kBasicNodeDataTypes = {
  point: picogl_default.UNSIGNED_INT,
  color: picogl_default.UNSIGNED_INT,
  radius: picogl_default.FLOAT
};
var Nodes = class extends LayerRenderable {
  static get defaultMappings() {
    return kBasicNodeMappings;
  }
  get constraintSize() {
    return this.localUniforms.uConstraintSize;
  }
  set constraintSize(value) {
    this.localUniforms.uConstraintSize = value;
  }
  get minSize() {
    return this.localUniforms.uMinSize;
  }
  set minSize(value) {
    this.localUniforms.uMinSize = value;
  }
  get maxSize() {
    return this.localUniforms.uMaxSize;
  }
  set maxSize(value) {
    this.localUniforms.uMaxSize = value;
  }
  get pixelSizing() {
    return this.localUniforms.uPixelSizing;
  }
  set pixelSizing(value) {
    this.localUniforms.uPixelSizing = value;
  }
  get billboard() {
    return this.localUniforms.uBillboard;
  }
  set billboard(value) {
    this.localUniforms.uBillboard = value;
  }
  initialize(...args) {
    this.localUniforms = Object.assign({}, this.localUniforms, {
      uConstraintSize: true,
      uMinSize: 1,
      uMaxSize: 4,
      uPixelSizing: false,
      uBillboard: true
    });
    super.initialize(...args);
  }
  computeMappings(mappings) {
    const nodesMappings = Object.assign({}, kBasicNodeMappings, mappings);
    const pointMapping = nodesMappings.point;
    nodesMappings.point = (entry, i) => {
      return this.points.getPointIndex(pointMapping(entry, i));
    };
    return nodesMappings;
  }
  ingestData(context, data, mappings) {
    this.map = new Map();
    this.idArray = [];
    super.ingestData(context, data, mappings);
  }
  packDataCB() {
    return (i, entry) => {
      this.map.set(entry.id, entry.point);
      this.idArray.push(entry.id);
    };
  }
  getEntryPointID(id) {
    return this.map.get(id);
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/picking/PickingManager.js
var kEvents2 = {
  hoverOn: Symbol("grafer_hover_on"),
  hoverOff: Symbol("grafer_hover_off"),
  click: Symbol("grafer_click")
};
Object.freeze(kEvents2);
var PickingManager = class extends EventEmitter.mixin(UXModule) {
  constructor(context, mouseHandler, enabled = true) {
    super();
    this.boundMouseHandler = this.handleMouse.bind(this);
    this.colorBuffer = new ArrayBuffer(4);
    this.colorBufferUint8 = new Uint8Array(this.colorBuffer);
    this.colorBufferView = new DataView(this.colorBuffer);
    this.colorHoverID = 0;
    this._offscreenBuffer = new OffscreenBuffer(context);
    this.mouseHandler = mouseHandler;
    this.availableIndices = [{
      start: 0,
      end: 4026531839
    }];
    this.enabled = enabled;
  }
  static get events() {
    return kEvents2;
  }
  get offscreenBuffer() {
    return this._offscreenBuffer;
  }
  on(type, callback) {
    super.on(type, callback);
  }
  off(type, callback) {
    super.off(type, callback);
  }
  allocatePickingColors(count) {
    const colors = new Uint8Array(count * 4);
    const ranges = [];
    const map = new Map();
    let offset = 0;
    let left = count;
    for (let i = 0, n = this.availableIndices.length; i < n && left > 0; ++i) {
      const availableRange = this.availableIndices[i];
      const rangeLength = availableRange.end - availableRange.start;
      if (rangeLength > left) {
        const range = {start: availableRange.start, end: availableRange.start + left};
        offset = this.pickingColorsForIndices(colors, offset, range);
        this.mapPickingColorIDs(map, count - left, range);
        ranges.push(range);
        availableRange.start += left;
        left = 0;
      } else {
        offset = this.pickingColorsForIndices(colors, offset, availableRange);
        this.mapPickingColorIDs(map, count - left, availableRange);
        ranges.push(availableRange);
        left -= rangeLength;
        this.availableIndices.splice(i--, 1);
      }
    }
    return {
      colors,
      ranges,
      map
    };
  }
  deallocatePickingColors(colors) {
    for (let i = 0, n = colors.ranges.length; i < n; ++i) {
      this.deallocatePickingRange(colors.ranges[i]);
    }
    colors.colors = new Uint8Array([]);
    colors.ranges.length = 0;
    colors.map.clear();
  }
  hookEvents() {
    this.mouseHandler.on(MouseHandler.events.move, this.boundMouseHandler);
    this.mouseHandler.on(MouseHandler.events.click, this.boundMouseHandler);
  }
  unhookEvents() {
    this.mouseHandler.off(MouseHandler.events.move, this.boundMouseHandler);
    this.mouseHandler.off(MouseHandler.events.click, this.boundMouseHandler);
  }
  handleMouse(event, state) {
    const glCoords = state.glCoords;
    this._offscreenBuffer.readPixel(glCoords[0], glCoords[1], this.colorBufferUint8);
    const colorID = this.colorBufferView.getUint32(0);
    switch (event) {
      case MouseHandler.events.move:
        if (colorID !== this.colorHoverID) {
          if (this.colorHoverID !== 0) {
            this.emit(kEvents2.hoverOff, this.colorHoverID >> 1);
          }
          this.colorHoverID = colorID;
          if (this.colorHoverID !== 0) {
            this.emit(kEvents2.hoverOn, this.colorHoverID >> 1);
          }
        }
        break;
      case MouseHandler.events.click:
        if (colorID !== 0) {
          this.emit(kEvents2.click, colorID >> 1);
        }
        break;
    }
  }
  deallocatePickingRange(range) {
    for (let i = 0, n = this.availableIndices.length; i < n; ++i) {
      const availableRange = this.availableIndices[i];
      if (availableRange.start > range.start) {
        if (availableRange.start === range.end) {
          availableRange.start = range.start;
        } else {
          this.availableIndices.splice(i, 0, {
            start: range.start,
            end: range.end
          });
        }
        break;
      }
    }
  }
  mapPickingColorIDs(out, idStart, range) {
    for (let i = 0, n = range.end - range.start; i < n; ++i) {
      out.set(range.start + i, idStart + i);
    }
  }
  pickingColorsForIndices(out, offset, range) {
    for (let i = range.start; i < range.end; ++i) {
      const color = this.pickingColorForNumber(i);
      out[offset++] = color[0];
      out[offset++] = color[1];
      out[offset++] = color[2];
      out[offset++] = color[3];
    }
    return offset;
  }
  pickingColorForNumber(num) {
    const pickingNumber = num << 1 | 1;
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setUint32(0, pickingNumber);
    return new Uint8Array(buffer);
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/circle/Circle.js
var Circle_vs_default = '#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iPosition;\nlayout(location=2) in float iRadius;\nlayout(location=3) in uint iColor;\nlayout(location=4) in uvec4 iPickingColor;\n\n//layout(std140) uniform RenderUniforms {\n    uniform mat4 uViewMatrix;\n    uniform mat4 uSceneMatrix;\n    uniform mat4 uProjectionMatrix;\n    uniform vec2 uViewportSize;\n    uniform float uPixelRatio;\n    uniform sampler2D uColorPalette;\n//};\n\nuniform float uMinSize;\nuniform float uMaxSize;\nuniform bool uPixelSizing;\nuniform bool uBillboard;\n\nuniform bool uPicking;\n\nflat out vec4 fColor;\nflat out float fPixelLength;\nout vec2 vFromCenter;\n\nvec4 getColorByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvoid main() {\n    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader\n    mat4 offsetMatrix = mat4(1.0);\n    offsetMatrix[3] = vec4(iPosition, 1.0);\n\n    // reset the rotation of the model-view matrix\n    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;\n    mat4 lookAtMatrix = mat4(modelMatrix);\n    lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);\n    lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);\n    lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);\n\n    // the on-screen center of this node\n    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);\n    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;\n\n    // the on-screen position of a side of this quad\n    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(iRadius, 0.0, 0.0, 1.0);\n    vec2 screenQuadSide = quadSide.xy / quadSide.w;\n\n    // compute the pixel radius of this node for a size of 1 in world coordinates\n    float pixelRadius = max(1.0, length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5));\n\n    // calculate the desired pixel radius for the size mode\n    float desiredPixelRadius = (uPixelSizing ? iRadius : pixelRadius);\n\n    // calculate the pixel radius multiplier needed to acomplish the desired pixel radius\n    float pixelRadiusMult = desiredPixelRadius / pixelRadius;\n\n    // calculate the render matrix\n    mat4 renderMatrix = uBillboard ? uProjectionMatrix * lookAtMatrix : uProjectionMatrix * modelMatrix;\n\n    // compute the vertex position and its screen position\n    vec4 worldVertex = renderMatrix * vec4(aVertex * iRadius * pixelRadiusMult, 1.0);\n\n    // send the render color to the fragment shader\n    fColor = uPicking ? vec4(iPickingColor) / 255.0 : getColorByIndexFromTexture(uColorPalette, int(iColor));\n    // send the normalized length of a single pixel to the fragment shader\n    fPixelLength = 1.0 / desiredPixelRadius;\n    // send the normalized distance from the center to the fragment shader\n    vFromCenter = aVertex.xy;\n\n    // set the render vertex location\n    gl_Position = worldVertex;\n}\n';
var Circle_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdCircle(vFromCenter, 1.0);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Circle_data_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aPositionIndex;\nlayout(location=1) in uint aColor;\nlayout(location=2) in float aRadius; // optional atthe end\n\nuniform sampler2D uGraphPoints;\nuniform bool uUsePointRadius;\n\nout vec3 vPosition;\nout float vRadius;\nflat out uint vColor;\n\nvec4 getValueByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvoid main() {\n    vec4 value = getValueByIndexFromTexture(uGraphPoints, int(aPositionIndex));\n    vPosition = value.xyz;\n\n    if (uUsePointRadius) {\n        vRadius = value.w;\n    } else {\n        vRadius = aRadius;\n    }\n\n    vColor = aColor;\n}\n";
var Circle_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float fromCenter = length(vFromCenter);\n    if (fromCenter > 1.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var kGLCircleNodeTypes = {
  position: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  radius: PicoGL.FLOAT,
  color: PicoGL.UNSIGNED_INT
};
var Circle = class extends Nodes {
  constructor(...args) {
    super(...args);
  }
  initialize(context, points, data, mappings, pickingManager) {
    super.initialize(context, points, data, mappings, pickingManager);
    this.verticesVBO = context.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array([
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1
    ]));
    this.pickingHandler = this.handlePickingEvent.bind(this);
    this.pickingColors = this.pickingManager.allocatePickingColors(data.length);
    this.pickingVBO = context.createVertexBuffer(PicoGL.UNSIGNED_BYTE, 4, this.pickingColors.colors);
    this.nodesVAO = context.createVertexArray().vertexAttributeBuffer(0, this.verticesVBO);
    this.configureTargetVAO(this.nodesVAO);
    this.nodesVAO.instanceAttributeBuffer(4, this.pickingVBO);
    const shaders = this.getDrawShaders();
    this.program = context.createProgram(shaders.vs, shaders.fs);
    this.drawCall = context.createDrawCall(this.program, this.nodesVAO).primitive(PicoGL.TRIANGLE_STRIP);
    const pickingShaders = this.getPickingShaders();
    this.pickingProgram = context.createProgram(pickingShaders.vs, pickingShaders.fs);
    this.pickingDrawCall = context.createDrawCall(this.pickingProgram, this.nodesVAO).primitive(PicoGL.TRIANGLE_STRIP);
    const computedMappings = this.computeMappings(mappings);
    this.usePointRadius = computedMappings.radius === null;
    this.compute(context, {
      uGraphPoints: this.dataTexture,
      uUsePointRadius: this.usePointRadius
    });
    this.pickingManager.on(PickingManager.events.hoverOn, this.pickingHandler);
    this.pickingManager.on(PickingManager.events.hoverOff, this.pickingHandler);
    this.pickingManager.on(PickingManager.events.click, this.pickingHandler);
  }
  destroy() {
  }
  render(context, mode, uniforms) {
    this.configureRenderContext(context, mode);
    switch (mode) {
      case RenderMode.PICKING:
        if (this.picking) {
          setDrawCallUniforms(this.pickingDrawCall, uniforms);
          setDrawCallUniforms(this.pickingDrawCall, this.localUniforms);
          this.pickingDrawCall.uniform("uPicking", true);
          this.pickingDrawCall.draw();
        }
        break;
      case RenderMode.HIGH_PASS_2:
        context.depthMask(false);
      default:
        setDrawCallUniforms(this.drawCall, uniforms);
        setDrawCallUniforms(this.drawCall, this.localUniforms);
        this.drawCall.uniform("uPicking", false);
        this.drawCall.draw();
        break;
    }
  }
  getDrawShaders() {
    return {
      vs: Circle_vs_default,
      fs: Circle_fs_default
    };
  }
  getPickingShaders() {
    return {
      vs: Circle_vs_default,
      fs: Circle_picking_fs_default
    };
  }
  getGLSourceTypes() {
    return kBasicNodeDataTypes;
  }
  getGLTargetTypes() {
    return kGLCircleNodeTypes;
  }
  getDataShader() {
    return {
      vs: Circle_data_vs_default,
      varyings: ["vPosition", "vRadius", "vColor"]
    };
  }
  handlePickingEvent(event, colorID) {
    if (this.picking && this.pickingColors.map.has(colorID)) {
      const id = this.idArray[this.pickingColors.map.get(colorID)];
      this.emit(event, id);
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/ring/Ring.js
var Ring_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float thickness = max(fPixelLength, min(0.05, fPixelLength * 1.5 * uPixelRatio));\n    float antialias = min(thickness, fPixelLength * 1.5);\n    float radius = 1.0 - thickness;\n    float ring = opOnion(sdCircle(vFromCenter, radius), thickness);\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (ring > distance) {\n        discard;\n    }\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (ring < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(fColor.rgb, smoothstep(0.0, antialias, abs(ring))));\n    } else {\n        fragColor = outputColor(vec4(fColor.rgb, 1.0));\n    }\n}\n";
var Ring = class extends Circle {
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Ring_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/triangle/Triangle.js
var Triangle_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdEquilateralTriangle(vFromCenter, 0.85);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Triangle_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float sd = sdEquilateralTriangle(vFromCenter, 1.0);\n    if (sd > 0.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var Triangle = class extends Circle {
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Triangle_fs_default;
    return shaders;
  }
  getPickingShaders() {
    const shaders = super.getPickingShaders();
    shaders.fs = Triangle_picking_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/pentagon/Pentagon.js
var Pentagon_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdPentagon(vFromCenter, 1.0);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Pentagon_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float sd = sdPentagon(vFromCenter, 1.0);\n    if (sd > 0.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var Pentagon = class extends Circle {
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Pentagon_fs_default;
    return shaders;
  }
  getPickingShaders() {
    const shaders = super.getPickingShaders();
    shaders.fs = Pentagon_picking_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/octagon/Octagon.js
var Octagon_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdOctagon(vFromCenter, 1.0);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Octagon_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float sd = sdOctagon(vFromCenter, 1.0);\n    if (sd > 0.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var Octagon = class extends Circle {
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Octagon_fs_default;
    return shaders;
  }
  getPickingShaders() {
    const shaders = super.getPickingShaders();
    shaders.fs = Octagon_picking_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/star/Star.js
var Star_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\nuniform uint uSides;\nuniform float uAngleDivisor;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdStar(vFromCenter, 1.0, uSides, uAngleDivisor);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Star_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform uint uSides;\nuniform float uAngleDivisor;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float sd = sdStar(vFromCenter, 1.0, uSides, uAngleDivisor);\n    if (sd > 0.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var Star = class extends Circle {
  get sides() {
    return this.localUniforms.uSides;
  }
  set sides(value) {
    this.localUniforms.uSides = value;
  }
  get angleDivisor() {
    return this.localUniforms.uAngleDivisor;
  }
  set angleDivisor(value) {
    this.localUniforms.uAngleDivisor = value;
  }
  constructor(context, points, data, mappings, pickingManager, sides = 5, angleDivisor = 3) {
    super(context, points, data, mappings, pickingManager, sides, angleDivisor);
  }
  initialize(context, points, data, mappings, pickingManager, sides, angleDivisor) {
    super.initialize(context, points, data, mappings, pickingManager);
    this.localUniforms.uSides = sides;
    this.localUniforms.uAngleDivisor = angleDivisor;
  }
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Star_fs_default;
    return shaders;
  }
  getPickingShaders() {
    const shaders = super.getPickingShaders();
    shaders.fs = Star_picking_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/cross/Cross.js
var Cross_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdCross(vFromCenter, 1.0, 0.3);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Cross_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float sd = sdCross(vFromCenter, 1.0, 0.3);\n    if (sd > 0.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var Cross = class extends Circle {
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Cross_fs_default;
    return shaders;
  }
  getPickingShaders() {
    const shaders = super.getPickingShaders();
    shaders.fs = Cross_picking_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/plus/Plus.js
var Plus_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform float uPixelRatio;\nuniform uint uRenderMode;\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float antialias = fPixelLength * 1.5;\n    float sd = sdPlus(vFromCenter, vec2(0.9, 0.3), 0.0);\n    float outline = opOnion(sd, min(0.15, fPixelLength * 6.0 * uPixelRatio));\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (sd > distance) {\n        discard;\n    }\n\n    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (sd < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));\n    } else {\n        fragColor = outputColor(vec4(color, 1.0));\n    }\n}\n";
var Plus_picking_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nflat in vec4 fColor;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nvoid main() {\n    float sd = sdPlus(vFromCenter, vec2(1.0, 0.3), 0.0);\n    if (sd > 0.0) {\n        discard;\n    }\n    fragColor = fColor;\n}\n";
var Plus = class extends Circle {
  getDrawShaders() {
    const shaders = super.getDrawShaders();
    shaders.fs = Plus_fs_default;
    return shaders;
  }
  getPickingShaders() {
    const shaders = super.getPickingShaders();
    shaders.fs = Plus_picking_fs_default;
    return shaders;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/nodes/mod.js
var types = {
  Circle,
  Ring,
  Triangle,
  Pentagon,
  Octagon,
  Star,
  Cross,
  Plus
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/mod.js
var mod_exports2 = {};
__export(mod_exports2, {
  ClusterBundle: () => ClusterBundle,
  CurvedPath: () => CurvedPath,
  Dashed: () => Dashed,
  Edges: () => Edges,
  Gravity: () => Gravity,
  Straight: () => Straight,
  kBasicEdgeDataTypes: () => kBasicEdgeDataTypes,
  kBasicEdgeMappings: () => kBasicEdgeMappings,
  kClusterBundleEdgeDataTypes: () => kClusterBundleEdgeDataTypes,
  kClusterBundleEdgeMappings: () => kClusterBundleEdgeMappings,
  kGLClusterBundleEdgeTypes: () => kGLClusterBundleEdgeTypes,
  kGLGravityEdgeTypes: () => kGLGravityEdgeTypes,
  kGLPathEdgeTypes: () => kGLPathEdgeTypes,
  kGLStraightEdgeTypes: () => kGLStraightEdgeTypes,
  kPathEdgeDataTypes: () => kPathEdgeDataTypes,
  kPathEdgeMappings: () => kPathEdgeMappings,
  types: () => types2
});

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/Edges.js
var kBasicEdgeMappings = {
  id: (entry, i) => "id" in entry ? entry.id : i,
  source: (entry) => entry.source,
  target: (entry) => entry.target,
  sourceColor: (entry) => "sourceColor" in entry ? entry.sourceColor : 0,
  targetColor: (entry) => "targetColor" in entry ? entry.targetColor : 0
};
var kBasicEdgeDataTypes = {
  source: picogl_default.UNSIGNED_INT,
  target: picogl_default.UNSIGNED_INT,
  sourceColor: picogl_default.UNSIGNED_INT,
  targetColor: picogl_default.UNSIGNED_INT
};
var Edges = class extends LayerRenderable {
  static get defaultMappings() {
    return kBasicEdgeMappings;
  }
  get lineWidth() {
    return this.localUniforms.uLineWidth;
  }
  set lineWidth(value) {
    this.localUniforms.uLineWidth = value;
  }
  initialize(...args) {
    this.localUniforms = Object.assign({}, this.localUniforms, {
      uLineWidth: 1.5
    });
    super.initialize(...args);
  }
  constructor(...args) {
    super(...args);
  }
  computeMappings(mappings) {
    const edgesMappings = Object.assign({}, kBasicEdgeMappings, mappings);
    const sourceMapping = edgesMappings.source;
    edgesMappings.source = (entry, i) => {
      return this.points.getPointIndex(sourceMapping(entry, i));
    };
    const targetMapping = edgesMappings.target;
    edgesMappings.target = (entry, i) => {
      return this.points.getPointIndex(targetMapping(entry, i));
    };
    return edgesMappings;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/straight/Straight.js
var Straight_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iOffsetA;\nlayout(location=2) in vec3 iOffsetB;\nlayout(location=3) in uint iColorA;\nlayout(location=4) in uint iColorB;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uSceneMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewportSize;\nuniform float uPixelRatio;\nuniform sampler2D uColorPalette;\n\nuniform float uLineWidth;\n\nflat out float fLineWidth;\nout vec3 vColor;\nout vec2 vProjectedPosition;\nout float vProjectedW;\n\nvec4 getColorByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvoid main() {\n    float multA = aVertex.y;\n    float multB = 1.0 - aVertex.y;\n\n    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));\n    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));\n\n    vColor = colorA.rgb * multA + colorB.rgb * multB;\n\n    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;\n\n    vec4 aProjected = renderMatrix * vec4(iOffsetA, 1.0);\n    vec2 aScreen = aProjected.xy / aProjected.w * uViewportSize * 0.5;\n\n    vec4 bProjected = renderMatrix * vec4(iOffsetB, 1.0);\n    vec2 bScreen = bProjected.xy / bProjected.w * uViewportSize * 0.5;\n\n    vec2 direction = normalize(bScreen - aScreen);\n    vec2 perp = vec2(-direction.y, direction.x);\n\n    fLineWidth = uLineWidth * uPixelRatio;\n    float offsetWidth = fLineWidth + 0.5;\n    vec4 position = aProjected * multA + bProjected * multB;\n    vec4 offset = vec4(((aVertex.x * perp * offsetWidth) / uViewportSize) * position.w, 0.0, 0.0);\n    gl_Position = position + offset;\n\n    vProjectedPosition = position.xy;\n    vProjectedW = position.w;\n}\n";
var Straight_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x_1540259130(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l_1540259130(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x_1540259130(color.r);\n    float g = luminance_x_1540259130(color.g);\n    float b = luminance_x_1540259130(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x_1540259130(color.r) * 0.2126;\n    float g = luminance_x_1540259130(color.g) * 0.7152;\n    float b = luminance_x_1540259130(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l_1540259130(tr / 0.2126);\n    float rg = color_l_1540259130(tg / 0.7152);\n    float rb = color_l_1540259130(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0\n\nfloat lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {\n    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;\n    float distOffset = (lineWidth - 1.0) * 0.5;\n    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));\n    return (1.0 - dist);\n}\n\nvec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {\n    if (mode < MODE_HIGH_PASS_1) {\n        return outputColor(vec4(color, 1.0));\n    }\n\n    float a = lineAlpha(position, w, viewportSize, lineWidth);\n\n    if (mode == MODE_HIGH_PASS_1) {\n        if (a == 1.0) {\n            return outputColor(vec4(color, a));\n        } else {\n            discard;\n        }\n    }\n\n    // Possible optimization.\n    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha\n    // threshold might help speed things up a bit.\n    if (a < ONE_ALPHA) {\n        discard;\n    }\n\n    return outputColor(vec4(color, a));\n}\n\nuniform vec2 uViewportSize;\nuniform uint uRenderMode;\n\nflat in float fLineWidth;\nin vec3 vColor;\nin vec2 vProjectedPosition;\nin float vProjectedW;\n\nout vec4 fragColor;\n\nvoid main() {\n    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);\n}\n";
var Straight_data_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aSourceIndex;\nlayout(location=1) in uint aTargetIndex;\nlayout(location=2) in uint aSourceColor;\nlayout(location=3) in uint aTargetColor;\n\nuniform sampler2D uGraphPoints;\n\nout vec3 vSource;\nout vec3 vTarget;\nflat out uint vSourceColor;\nflat out uint vTargetColor;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\nvoid main() {\n    vec4 source = valueForIndex(uGraphPoints, int(aSourceIndex));\n    vec4 target = valueForIndex(uGraphPoints, int(aTargetIndex));\n\n    vec3 direction = normalize(target.xyz - source.xyz);\n\n    vSource = source.xyz + direction * source[3];\n    vTarget = target.xyz - direction * target[3];\n\n    vSourceColor = aSourceColor;\n    vTargetColor = aTargetColor;\n}\n";
var kGLStraightEdgeTypes = {
  source: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  target: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  sourceColor: PicoGL.UNSIGNED_INT,
  targetColor: PicoGL.UNSIGNED_INT
};
var Straight = class extends Edges {
  initialize(context, points, data, mappings, pickingManager) {
    super.initialize(context, points, data, mappings, pickingManager);
    this.verticesVBO = context.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array([
      -1,
      0,
      1,
      0,
      -1,
      1,
      1,
      1
    ]));
    this.edgesVAO = context.createVertexArray().vertexAttributeBuffer(0, this.verticesVBO);
    this.configureTargetVAO(this.edgesVAO);
    const shaders = this.getDrawShaders();
    this.program = context.createProgram(shaders.vs, shaders.fs);
    this.drawCall = context.createDrawCall(this.program, this.edgesVAO).primitive(PicoGL.TRIANGLE_STRIP);
    this.compute(context, {
      uGraphPoints: this.dataTexture
    });
  }
  destroy() {
  }
  render(context, mode, uniforms) {
    this.configureRenderContext(context, mode);
    setDrawCallUniforms(this.drawCall, uniforms);
    setDrawCallUniforms(this.drawCall, this.localUniforms);
    switch (mode) {
      case RenderMode.PICKING:
        break;
      default:
        this.drawCall.draw();
        break;
    }
  }
  getDrawShaders() {
    return {
      vs: Straight_vs_default,
      fs: Straight_fs_default
    };
  }
  getPickingShaders() {
    return {
      vs: Straight_vs_default,
      fs: null
    };
  }
  getGLSourceTypes() {
    return kBasicEdgeDataTypes;
  }
  getGLTargetTypes() {
    return kGLStraightEdgeTypes;
  }
  getDataShader() {
    return {
      vs: Straight_data_vs_default,
      varyings: ["vSource", "vTarget", "vSourceColor", "vTargetColor"]
    };
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/dashed/Dashed.js
var Dashed_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iOffsetA;\nlayout(location=2) in vec3 iOffsetB;\nlayout(location=3) in uint iColorA;\nlayout(location=4) in uint iColorB;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uSceneMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewportSize;\nuniform float uPixelRatio;\nuniform sampler2D uColorPalette;\nuniform uint uDashLength;\n\nuniform float uLineWidth;\n\nflat out float fLineWidth;\nout vec3 vColor;\nout float vDashLength;\nout vec2 vProjectedPosition;\nout float vProjectedW;\n\nvec4 getColorByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvoid main() {\n    float multA = aVertex.y;\n    float multB = 1.0 - aVertex.y;\n\n    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));\n    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));\n\n    vColor = colorA.rgb * multA + colorB.rgb * multB;\n\n    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;\n\n    vec4 aProjected = renderMatrix * vec4(iOffsetA, 1.0);\n    vec2 aScreen = (aProjected.xy / aProjected.w) * (uViewportSize / 2.0);\n\n    vec4 bProjected = renderMatrix * vec4(iOffsetB, 1.0);\n    vec2 bScreen = (bProjected.xy / bProjected.w) * (uViewportSize / 2.0);\n\n    vec2 direction = normalize(bScreen - aScreen);\n    vec2 perp = vec2(-direction.y, direction.x);\n\n    fLineWidth = uLineWidth * uPixelRatio;\n    float offsetWidth = fLineWidth + 0.5;\n    vec4 position = aProjected * multA + bProjected * multB;\n    vec4 offset = vec4(((aVertex.x * perp * offsetWidth) / uViewportSize) * position.w, 0.0, 0.0);\n    gl_Position = position + offset;\n\n    vProjectedPosition = position.xy;\n    vProjectedW = position.w;\n\n    float screenDistance = distance(aScreen, bScreen);\n    vDashLength = (screenDistance / float(uDashLength)) * aVertex.y;\n}\n";
var Dashed_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x_1540259130(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l_1540259130(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x_1540259130(color.r);\n    float g = luminance_x_1540259130(color.g);\n    float b = luminance_x_1540259130(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x_1540259130(color.r) * 0.2126;\n    float g = luminance_x_1540259130(color.g) * 0.7152;\n    float b = luminance_x_1540259130(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l_1540259130(tr / 0.2126);\n    float rg = color_l_1540259130(tg / 0.7152);\n    float rb = color_l_1540259130(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0\n\nfloat lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {\n    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;\n    float distOffset = (lineWidth - 1.0) * 0.5;\n    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));\n    return (1.0 - dist);\n}\n\nvec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {\n    if (mode < MODE_HIGH_PASS_1) {\n        return outputColor(vec4(color, 1.0));\n    }\n\n    float a = lineAlpha(position, w, viewportSize, lineWidth);\n\n    if (mode == MODE_HIGH_PASS_1) {\n        if (a == 1.0) {\n            return outputColor(vec4(color, a));\n        } else {\n            discard;\n        }\n    }\n\n    // Possible optimization.\n    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha\n    // threshold might help speed things up a bit.\n    if (a < ONE_ALPHA) {\n        discard;\n    }\n\n    return outputColor(vec4(color, a));\n}\n\nuniform vec2 uViewportSize;\nuniform uint uRenderMode;\n\nflat in float fLineWidth;\nin vec3 vColor;\nin float vDashLength;\nin vec2 vProjectedPosition;\nin float vProjectedW;\n\nout vec4 fragColor;\n\nvoid main() {\n    if (int(vDashLength) % 2 == 1) {\n        discard;\n    }\n    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);\n}\n";
var Dashed = class extends Straight {
  get dashLength() {
    return this.localUniforms.uDashLength;
  }
  set dashLength(value) {
    this.localUniforms.uDashLength = value;
  }
  initialize(context, points, data, mappings, pickingManager) {
    super.initialize(context, points, data, mappings, pickingManager);
    this.localUniforms.uDashLength = 10;
  }
  getDrawShaders() {
    return {
      vs: Dashed_vs_default,
      fs: Dashed_fs_default
    };
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/gravity/Gravity.js
var Gravity_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iOffsetA;\nlayout(location=2) in vec3 iOffsetB;\nlayout(location=3) in uint iColorA;\nlayout(location=4) in uint iColorB;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uSceneMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewportSize;\nuniform float uPixelRatio;\nuniform float uGravity;\nuniform sampler2D uColorPalette;\n\nout vec3 vColor;\nout vec2 vProjectedPosition;\nout float vProjectedW;\n\nvec4 getColorByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvoid main() {\n    float multA = aVertex.x;\n    float multB = 1.0 - aVertex.x;\n\n    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));\n    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));\n\n    vColor = colorA.rgb * multA + colorB.rgb * multB;\n\n    vec3 direction = iOffsetB - iOffsetA;\n    vec3 middle = iOffsetA + direction * 0.5;\n    float distance = length(direction);\n\n    float toCenter = length(middle);\n    vec3 towardsCenter = (middle * -1.0) / toCenter;\n\n    vec3 gravity = middle + towardsCenter * min(toCenter, distance * uGravity);\n    vec3 position = gravity + pow(multB, 2.0) * (iOffsetB - gravity) + pow(multA, 2.0) * (iOffsetA - gravity);\n\n    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;\n    gl_Position = renderMatrix * vec4(position, 1.0);\n\n    vProjectedPosition = gl_Position.xy;\n    vProjectedW = gl_Position.w;\n}\n";
var Gravity_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x_1540259130(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l_1540259130(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x_1540259130(color.r);\n    float g = luminance_x_1540259130(color.g);\n    float b = luminance_x_1540259130(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x_1540259130(color.r) * 0.2126;\n    float g = luminance_x_1540259130(color.g) * 0.7152;\n    float b = luminance_x_1540259130(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l_1540259130(tr / 0.2126);\n    float rg = color_l_1540259130(tg / 0.7152);\n    float rb = color_l_1540259130(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0\n\nfloat lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {\n    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;\n    float distOffset = (lineWidth - 1.0) * 0.5;\n    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));\n    return (1.0 - dist);\n}\n\nvec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {\n    if (mode < MODE_HIGH_PASS_1) {\n        return outputColor(vec4(color, 1.0));\n    }\n\n    float a = lineAlpha(position, w, viewportSize, lineWidth);\n\n    if (mode == MODE_HIGH_PASS_1) {\n        if (a == 1.0) {\n            return outputColor(vec4(color, a));\n        } else {\n            discard;\n        }\n    }\n\n    // Possible optimization.\n    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha\n    // threshold might help speed things up a bit.\n    if (a < ONE_ALPHA) {\n        discard;\n    }\n\n    return outputColor(vec4(color, a));\n}\n\nuniform vec2 uViewportSize;\nuniform uint uRenderMode;\n\nin vec3 vColor;\nin vec2 vProjectedPosition;\nin float vProjectedW;\n\nout vec4 fragColor;\n\nvoid main() {\n    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode);\n}\n";
var Gravity_data_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aSourceIndex;\nlayout(location=1) in uint aTargetIndex;\nlayout(location=2) in uint aSourceColor;\nlayout(location=3) in uint aTargetColor;\n\nuniform sampler2D uGraphPoints;\n\nout vec3 vSource;\nout vec3 vTarget;\nflat out uint vSourceColor;\nflat out uint vTargetColor;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\nvoid main() {\n    vec4 source = valueForIndex(uGraphPoints, int(aSourceIndex));\n    vSource = source.xyz;\n\n    vec4 target = valueForIndex(uGraphPoints, int(aTargetIndex));\n    vTarget = target.xyz;\n\n    vSourceColor = aSourceColor;\n    vTargetColor = aTargetColor;\n}\n";
var kGLGravityEdgeTypes = {
  source: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  target: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  sourceColor: PicoGL.UNSIGNED_INT,
  targetColor: PicoGL.UNSIGNED_INT
};
var Gravity = class extends Edges {
  get gravity() {
    return this.localUniforms.uGravity;
  }
  set gravity(value) {
    this.localUniforms.uGravity = value;
  }
  constructor(context, points, data, mappings, pickingManager, segments = 16) {
    super(context, points, data, mappings, pickingManager, segments);
  }
  initialize(context, points, data, mappings, pickingManager, segments) {
    super.initialize(context, points, data, mappings, pickingManager);
    this.localUniforms.uGravity = -0.2;
    const segmentVertices = [];
    for (let i = 0; i <= segments; ++i) {
      segmentVertices.push(i / segments, 0);
    }
    this.verticesVBO = context.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(segmentVertices));
    this.edgesVAO = context.createVertexArray().vertexAttributeBuffer(0, this.verticesVBO);
    this.configureTargetVAO(this.edgesVAO);
    const shaders = this.getDrawShaders();
    this.program = context.createProgram(shaders.vs, shaders.fs);
    this.drawCall = context.createDrawCall(this.program, this.edgesVAO).primitive(PicoGL.LINE_STRIP);
    this.compute(context, {
      uGraphPoints: this.dataTexture
    });
  }
  destroy() {
  }
  render(context, mode, uniforms) {
    setDrawCallUniforms(this.drawCall, uniforms);
    setDrawCallUniforms(this.drawCall, this.localUniforms);
    this.configureRenderContext(context, mode);
    switch (mode) {
      case RenderMode.PICKING:
        break;
      default:
        this.drawCall.draw();
        break;
    }
  }
  getDrawShaders() {
    return {
      vs: Gravity_vs_default,
      fs: Gravity_fs_default
    };
  }
  getPickingShaders() {
    return {
      vs: Gravity_vs_default,
      fs: null
    };
  }
  getGLSourceTypes() {
    return kBasicEdgeDataTypes;
  }
  getGLTargetTypes() {
    return kGLStraightEdgeTypes;
  }
  getDataShader() {
    return {
      vs: Gravity_data_vs_default,
      varyings: ["vSource", "vTarget", "vSourceColor", "vTargetColor"]
    };
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/path/CurvedPath.js
var CurvedPath_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iOffsetA;\nlayout(location=2) in vec3 iOffsetB;\nlayout(location=3) in vec3 iControl;\nlayout(location=4) in uint iColorA;\nlayout(location=5) in uint iColorB;\nlayout(location=6) in vec2 iColorMix;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uSceneMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewportSize;\nuniform float uPixelRatio;\nuniform sampler2D uColorPalette;\n\nuniform float uLineWidth;\nuniform float uSegments;\n\nflat out float fLineWidth;\nout vec3 vColor;\nout vec2 vProjectedPosition;\nout float vProjectedW;\n\nvec4 getColorByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvec3 bezier(vec3 p0, vec3 p1, vec3 p2, float t) {\n    return p1 + pow(1.0 - t, 2.0) * (p2 - p1) + pow(t, 2.0) * (p0 - p1);\n}\n\nvoid main() {\n    // bezier works fine with 0 > t > 1\n    float t0 = aVertex.y / uSegments;\n    float t1 = (aVertex.y + 1.0) / uSegments;\n\n    // calculate both bezier points\n    vec3 b0 = bezier(iOffsetA, iControl, iOffsetB, t0);\n    vec3 b1 = bezier(iOffsetA, iControl, iOffsetB, t1);\n\n    // project the points to the screen\n    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;\n    vec4 b0Projected = renderMatrix * vec4(b0, 1.0);\n    vec4 b1Projected = renderMatrix * vec4(b1, 1.0);\n\n    // get their screen coords\n    vec2 b0Screen = (b0Projected.xy / b0Projected.w) * uViewportSize * 0.5;\n    vec2 b1Screen = (b1Projected.xy / b1Projected.w) * uViewportSize * 0.5;\n\n    // get the direction and normal of the segment\n    vec2 direction = normalize(b1Screen - b0Screen);\n    vec2 normal = vec2(-direction.y, direction.x);\n\n    // calculate the pixel offset\n    fLineWidth = uLineWidth * uPixelRatio;\n    float offsetWidth = fLineWidth + 0.5;\n    vec4 offset = vec4(((aVertex.x * normal * offsetWidth) / uViewportSize) * b0Projected.w, 0.0, 0.0);\n\n    // set the final vertex position\n    gl_Position = b0Projected + offset;\n    vProjectedPosition = b0Projected.xy;\n    vProjectedW = b0Projected.w;\n\n    // calculate the color\n    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));\n    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));\n    vec3 mixColorA = mix(colorA.rgb, colorB.rgb, iColorMix[1]);\n    vec3 mixColorB = mix(colorA.rgb, colorB.rgb, iColorMix[0]);\n    vColor = mix(mixColorA.rgb, mixColorB.rgb, t0);\n}\n";
var CurvedPath_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x_1540259130(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l_1540259130(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x_1540259130(color.r);\n    float g = luminance_x_1540259130(color.g);\n    float b = luminance_x_1540259130(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x_1540259130(color.r) * 0.2126;\n    float g = luminance_x_1540259130(color.g) * 0.7152;\n    float b = luminance_x_1540259130(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l_1540259130(tr / 0.2126);\n    float rg = color_l_1540259130(tg / 0.7152);\n    float rb = color_l_1540259130(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0\n\nfloat lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {\n    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;\n    float distOffset = (lineWidth - 1.0) * 0.5;\n    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));\n    return (1.0 - dist);\n}\n\nvec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {\n    if (mode < MODE_HIGH_PASS_1) {\n        return outputColor(vec4(color, 1.0));\n    }\n\n    float a = lineAlpha(position, w, viewportSize, lineWidth);\n\n    if (mode == MODE_HIGH_PASS_1) {\n        if (a == 1.0) {\n            return outputColor(vec4(color, a));\n        } else {\n            discard;\n        }\n    }\n\n    // Possible optimization.\n    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha\n    // threshold might help speed things up a bit.\n    if (a < ONE_ALPHA) {\n        discard;\n    }\n\n    return outputColor(vec4(color, a));\n}\n\nuniform vec2 uViewportSize;\nuniform uint uRenderMode;\n\nflat in float fLineWidth;\nin vec3 vColor;\nin vec2 vProjectedPosition;\nin float vProjectedW;\n\nout vec4 fragColor;\n\nvoid main() {\n    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);\n}\n";
var CurvedPath_data_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aSourceIndex;\nlayout(location=1) in uint aTargetIndex;\nlayout(location=2) in uvec3 aControl;\nlayout(location=3) in uint aSourceColor;\nlayout(location=4) in uint aTargetColor;\n\nuniform sampler2D uGraphPoints;\n\nout vec3 vSource;\nout vec3 vTarget;\nout vec3 vControl;\nflat out uint vSourceColor;\nflat out uint vTargetColor;\nout vec2 vColorMix;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\nvoid main() {\n    vec4 source = valueForIndex(uGraphPoints, int(aSourceIndex));\n    vec4 target = valueForIndex(uGraphPoints, int(aTargetIndex));\n    vec4 control = valueForIndex(uGraphPoints, int(aControl[0]));\n\n    // TODO: Optimize this to avoid branches. (If performance becomes a problem)\n    if (aControl[1] == 0u) {\n        vSource = source.xyz;\n    } else {\n        vSource = (source.xyz + control.xyz) / 2.0;\n    }\n\n    if (aControl[1] == aControl[2] - 1u) {\n        vTarget = target.xyz;\n    } else {\n        vTarget = (target.xyz + control.xyz) / 2.0;\n    }\n\n    vControl = control.xyz;\n\n    vSourceColor = aSourceColor;\n    vTargetColor = aTargetColor;\n\n    vColorMix = vec2(float(aControl[1]) / float(aControl[2]), float(aControl[1] + 1u) / float(aControl[2]));\n}\n";
var kPathEdgeMappings = {
  id: (entry, i) => "id" in entry ? entry.id : i,
  source: (entry) => entry.source,
  target: (entry) => entry.target,
  control: (entry) => entry.control,
  sourceColor: (entry) => "sourceColor" in entry ? entry.sourceColor : 0,
  targetColor: (entry) => "targetColor" in entry ? entry.targetColor : 0
};
var kPathEdgeDataTypes = {
  source: PicoGL.UNSIGNED_INT,
  target: PicoGL.UNSIGNED_INT,
  control: [PicoGL.UNSIGNED_INT, PicoGL.UNSIGNED_INT, PicoGL.UNSIGNED_INT],
  sourceColor: PicoGL.UNSIGNED_INT,
  targetColor: PicoGL.UNSIGNED_INT
};
var kGLPathEdgeTypes = {
  source: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  target: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  control: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  sourceColor: PicoGL.UNSIGNED_INT,
  targetColor: PicoGL.UNSIGNED_INT,
  colorMix: [PicoGL.FLOAT, PicoGL.FLOAT]
};
var CurvedPath = class extends Edges {
  constructor(context, points, data, mappings, pickingManager, segments = 16) {
    super(context, points, data, mappings, pickingManager, segments);
  }
  initialize(context, points, data, mappings, pickingManager, segments) {
    super.initialize(context, points, data, mappings, pickingManager);
    const segmentVertices = [];
    for (let i = 0; i <= segments; ++i) {
      segmentVertices.push(-1, i, 1, i);
    }
    this.verticesVBO = context.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(segmentVertices));
    this.edgesVAO = context.createVertexArray().vertexAttributeBuffer(0, this.verticesVBO);
    this.configureTargetVAO(this.edgesVAO);
    const shaders = this.getDrawShaders();
    this.program = context.createProgram(shaders.vs, shaders.fs);
    this.drawCall = context.createDrawCall(this.program, this.edgesVAO).primitive(PicoGL.TRIANGLE_STRIP);
    this.compute(context, {
      uGraphPoints: this.dataTexture
    });
    this.localUniforms.uSegments = segments;
  }
  destroy() {
  }
  render(context, mode, uniforms) {
    setDrawCallUniforms(this.drawCall, uniforms);
    setDrawCallUniforms(this.drawCall, this.localUniforms);
    this.configureRenderContext(context, mode);
    switch (mode) {
      case RenderMode.PICKING:
        break;
      default:
        this.drawCall.draw();
        break;
    }
  }
  getDrawShaders() {
    return {
      vs: CurvedPath_vs_default,
      fs: CurvedPath_fs_default
    };
  }
  getPickingShaders() {
    return {
      vs: CurvedPath_vs_default,
      fs: null
    };
  }
  getGLSourceTypes() {
    return kPathEdgeDataTypes;
  }
  getGLTargetTypes() {
    return kGLPathEdgeTypes;
  }
  getDataShader() {
    return {
      vs: CurvedPath_data_vs_default,
      varyings: ["vSource", "vTarget", "vControl", "vSourceColor", "vTargetColor", "vColorMix"]
    };
  }
  computeMappings(mappings) {
    const edgesMappings = Object.assign({}, kPathEdgeMappings, super.computeMappings(mappings));
    edgesMappings.control[kDataMappingFlatten] = (entry, i, l) => {
      return [this.points.getPointIndex(entry.control[i]), i, l];
    };
    edgesMappings.source[kDataMappingFlatten] = (entry, i, l) => {
      if (i === 0) {
        return entry.source;
      }
      return edgesMappings.control[kDataMappingFlatten](entry, i - 1, l)[0];
    };
    edgesMappings.target[kDataMappingFlatten] = (entry, i, l) => {
      if (i === l - 1) {
        return entry.target;
      }
      return edgesMappings.control[kDataMappingFlatten](entry, i + 1, l)[0];
    };
    return edgesMappings;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/bundle/ClusterBundle.js
var ClusterBundle_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iOffsetA;\nlayout(location=2) in vec3 iOffsetB;\nlayout(location=3) in vec3 iControl;\nlayout(location=4) in uint iColorA;\nlayout(location=5) in uint iColorB;\nlayout(location=6) in vec2 iColorMix;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uSceneMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uViewportSize;\nuniform float uPixelRatio;\nuniform sampler2D uColorPalette;\n\nuniform float uLineWidth;\nuniform float uSegments;\n\nflat out float fLineWidth;\nout vec3 vColor;\nout vec2 vProjectedPosition;\nout float vProjectedW;\n\nvec4 getColorByIndexFromTexture(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nvec3 bezier(vec3 p0, vec3 p1, vec3 p2, float t) {\n    return p1 + pow(1.0 - t, 2.0) * (p2 - p1) + pow(t, 2.0) * (p0 - p1);\n}\n\nvoid main() {\n    // bezier works fine with 0 > t > 1\n    float t0 = aVertex.y / uSegments;\n    float t1 = (aVertex.y + 1.0) / uSegments;\n\n    // calculate both bezier points\n    vec3 b0 = bezier(iOffsetA, iControl, iOffsetB, t0);\n    vec3 b1 = bezier(iOffsetA, iControl, iOffsetB, t1);\n\n    // project the points to the screen\n    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;\n    vec4 b0Projected = renderMatrix * vec4(b0, 1.0);\n    vec4 b1Projected = renderMatrix * vec4(b1, 1.0);\n\n    // get their screen coords\n    vec2 b0Screen = (b0Projected.xy / b0Projected.w) * uViewportSize * 0.5;\n    vec2 b1Screen = (b1Projected.xy / b1Projected.w) * uViewportSize * 0.5;\n\n    // get the direction and normal of the segment\n    vec2 direction = normalize(b1Screen - b0Screen);\n    vec2 normal = vec2(-direction.y, direction.x);\n\n    // calculate the pixel offset\n    fLineWidth = uLineWidth * uPixelRatio;\n    float offsetWidth = fLineWidth + 0.5;\n    vec4 offset = vec4(((aVertex.x * normal * offsetWidth) / uViewportSize) * b0Projected.w, 0.0, 0.0);\n\n    // set the final vertex position\n    gl_Position = b0Projected + offset;\n    vProjectedPosition = b0Projected.xy;\n    vProjectedW = b0Projected.w;\n\n    // calculate the color\n    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));\n    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));\n    vec3 mixColorA = mix(colorA.rgb, colorB.rgb, iColorMix[1]);\n    vec3 mixColorB = mix(colorA.rgb, colorB.rgb, iColorMix[0]);\n    vColor = mix(mixColorA.rgb, mixColorB.rgb, t0);\n}\n\n";
var ClusterBundle_fs_default = "#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x_1540259130(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l_1540259130(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x_1540259130(color.r);\n    float g = luminance_x_1540259130(color.g);\n    float b = luminance_x_1540259130(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x_1540259130(color.r) * 0.2126;\n    float g = luminance_x_1540259130(color.g) * 0.7152;\n    float b = luminance_x_1540259130(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l_1540259130(tr / 0.2126);\n    float rg = color_l_1540259130(tg / 0.7152);\n    float rb = color_l_1540259130(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0\n\nfloat lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {\n    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;\n    float distOffset = (lineWidth - 1.0) * 0.5;\n    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));\n    return (1.0 - dist);\n}\n\nvec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {\n    if (mode < MODE_HIGH_PASS_1) {\n        return outputColor(vec4(color, 1.0));\n    }\n\n    float a = lineAlpha(position, w, viewportSize, lineWidth);\n\n    if (mode == MODE_HIGH_PASS_1) {\n        if (a == 1.0) {\n            return outputColor(vec4(color, a));\n        } else {\n            discard;\n        }\n    }\n\n    // Possible optimization.\n    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha\n    // threshold might help speed things up a bit.\n    if (a < ONE_ALPHA) {\n        discard;\n    }\n\n    return outputColor(vec4(color, a));\n}\n\nuniform vec2 uViewportSize;\nuniform uint uRenderMode;\n\nflat in float fLineWidth;\nin vec3 vColor;\nin vec2 vProjectedPosition;\nin float vProjectedW;\n\nout vec4 fragColor;\n\nvoid main() {\n    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);\n}\n\n";
var ClusterBundle_data_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aSourceIndex;\nlayout(location=1) in uint aTargetIndex;\nlayout(location=2) in uint aSourceClusterIndex;\nlayout(location=3) in uint aTargetClusterIndex;\nlayout(location=4) in uint aSourceColor;\nlayout(location=5) in uint aTargetColor;\nlayout(location=6) in uint aIndex;\n\nuniform sampler2D uGraphPoints;\n\nout vec3 vSource;\nout vec3 vTarget;\nout vec3 vControl;\nflat out uint vSourceColor;\nflat out uint vTargetColor;\nout vec2 vColorMix;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\nvoid main() {\n    vec4 source = valueForIndex(uGraphPoints, int(aSourceIndex));\n    vec4 target = valueForIndex(uGraphPoints, int(aTargetIndex));\n    vec4 sourceCluster = valueForIndex(uGraphPoints, int(aSourceClusterIndex));\n    vec4 targetCluster = valueForIndex(uGraphPoints, int(aTargetClusterIndex));\n\n    vec3 direction = normalize(vec3(targetCluster.xy, 0.0) - vec3(sourceCluster.xy, 0.0));\n    vec3 sourceClusterEdge = sourceCluster.xyz + direction * sourceCluster[3];\n    vec3 targetClusterEdge = targetCluster.xyz - direction * targetCluster[3];\n\n    float edgeToEdge = length(targetClusterEdge - sourceClusterEdge);\n    vec3 bundlePoint = sourceClusterEdge + direction * (edgeToEdge * 0.5);\n\n    vec3 sourceEdgeToNode = sourceClusterEdge - source.xyz - direction * source[3];\n    float sourceNodeAdjacent = dot(normalize(sourceEdgeToNode), direction) * length(sourceEdgeToNode);\n    vec3 sourceClusterControl = sourceClusterEdge - direction * min(sourceNodeAdjacent * 0.75, sourceCluster[3]);\n    vec3 sourceControlDirection = normalize(sourceClusterControl - source.xyz);\n    vec3 sourcePoint = source.xyz + sourceControlDirection * source[3];\n\n    vec3 targetEdgeToNode = target.xyz - targetClusterEdge - direction * target[3];\n    float targetNodeAdjacent = dot(normalize(targetEdgeToNode), direction) * length(targetEdgeToNode);\n    vec3 targetClusterControl = targetClusterEdge + direction * min(targetNodeAdjacent * 0.75, targetCluster[3]);\n    vec3 targetControlDirection = normalize(targetClusterControl - target.xyz);\n    vec3 targetPoint = target.xyz + targetControlDirection * target[3];\n\n    // TODO: Optimize this to avoid branches. (If performance becomes a problem)\n    if (aIndex == 0u) {\n        if (aSourceIndex == aSourceClusterIndex) {\n            vSource = sourcePoint;\n            vControl = sourcePoint;\n            vTarget = sourcePoint;\n        } else {\n            vSource = sourcePoint;\n            vControl = sourceClusterControl;\n            vTarget = (sourceClusterControl + bundlePoint) / 2.0;\n        }\n    } else if (aIndex == 1u) {\n        if (aSourceIndex == aSourceClusterIndex) {\n            vSource = sourcePoint;\n        } else {\n            vSource = (sourceClusterControl + bundlePoint) / 2.0;\n        }\n\n        vControl = bundlePoint;\n\n        if (aTargetIndex == aTargetClusterIndex) {\n            vTarget = targetPoint;\n        } else {\n            vTarget = (bundlePoint + targetClusterControl) / 2.0;\n        }\n    } else {\n        if (aTargetIndex == aTargetClusterIndex) {\n            vSource = targetPoint;\n            vControl = targetPoint;\n            vTarget = targetPoint;\n        } else {\n            vSource = (bundlePoint + targetClusterControl) / 2.0;\n            vControl = targetClusterControl;\n            vTarget = targetPoint;\n        }\n    }\n\n    vSourceColor = aSourceColor;\n    vTargetColor = aTargetColor;\n\n    vColorMix = vec2(float(aIndex) * 0.25, float(aIndex + 1u) * 0.25);\n}\n";
var kClusterBundleEdgeMappings = {
  id: (entry, i) => "id" in entry ? entry.id : i,
  source: (entry) => entry.source,
  target: (entry) => entry.target,
  sourceCluster: (entry) => entry.sourceCluster,
  targetCluster: (entry) => entry.targetCluster,
  sourceColor: (entry) => "sourceColor" in entry ? entry.sourceColor : 0,
  targetColor: (entry) => "targetColor" in entry ? entry.targetColor : 0,
  index: () => [0, 1, 2]
};
var kClusterBundleEdgeDataTypes = {
  source: PicoGL.UNSIGNED_INT,
  target: PicoGL.UNSIGNED_INT,
  sourceCluster: PicoGL.UNSIGNED_INT,
  targetCluster: PicoGL.UNSIGNED_INT,
  sourceColor: PicoGL.UNSIGNED_INT,
  targetColor: PicoGL.UNSIGNED_INT,
  index: PicoGL.UNSIGNED_INT
};
var kGLClusterBundleEdgeTypes = {
  source: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  target: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  control: [PicoGL.FLOAT, PicoGL.FLOAT, PicoGL.FLOAT],
  sourceColor: PicoGL.UNSIGNED_INT,
  targetColor: PicoGL.UNSIGNED_INT,
  colorMix: [PicoGL.FLOAT, PicoGL.FLOAT]
};
var ClusterBundle = class extends Edges {
  constructor(context, points, data, mappings, pickingManager, segments = 16) {
    super(context, points, data, mappings, pickingManager, segments);
  }
  initialize(context, points, data, mappings, pickingManager, segments) {
    super.initialize(context, points, data, mappings, pickingManager);
    const segmentVertices = [];
    for (let i = 0; i <= segments; ++i) {
      segmentVertices.push(-1, i, 1, i);
    }
    this.verticesVBO = context.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(segmentVertices));
    this.edgesVAO = context.createVertexArray().vertexAttributeBuffer(0, this.verticesVBO);
    this.configureTargetVAO(this.edgesVAO);
    const shaders = this.getDrawShaders();
    this.program = context.createProgram(shaders.vs, shaders.fs);
    this.drawCall = context.createDrawCall(this.program, this.edgesVAO).primitive(PicoGL.TRIANGLE_STRIP);
    this.compute(context, {
      uGraphPoints: this.dataTexture
    });
    this.localUniforms.uSegments = segments;
  }
  destroy() {
  }
  render(context, mode, uniforms) {
    setDrawCallUniforms(this.drawCall, uniforms);
    setDrawCallUniforms(this.drawCall, this.localUniforms);
    this.configureRenderContext(context, mode);
    switch (mode) {
      case RenderMode.PICKING:
        break;
      default:
        this.drawCall.draw();
        break;
    }
  }
  getDrawShaders() {
    return {
      vs: ClusterBundle_vs_default,
      fs: ClusterBundle_fs_default
    };
  }
  getPickingShaders() {
    return {
      vs: ClusterBundle_vs_default,
      fs: null
    };
  }
  getGLSourceTypes() {
    return kClusterBundleEdgeDataTypes;
  }
  getGLTargetTypes() {
    return kGLClusterBundleEdgeTypes;
  }
  getDataShader() {
    return {
      vs: ClusterBundle_data_vs_default,
      varyings: ["vSource", "vTarget", "vControl", "vSourceColor", "vTargetColor", "vColorMix"]
    };
  }
  computeMappings(mappings) {
    const edgesMappings = Object.assign({}, kClusterBundleEdgeMappings, super.computeMappings(mappings));
    const sourceClusterMapping = edgesMappings.sourceCluster;
    edgesMappings.sourceCluster = (entry, i) => {
      return this.points.getPointIndex(sourceClusterMapping(entry, i));
    };
    const targetClusterMapping = edgesMappings.targetCluster;
    edgesMappings.targetCluster = (entry, i) => {
      return this.points.getPointIndex(targetClusterMapping(entry, i));
    };
    return edgesMappings;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/edges/mod.js
var types2 = {
  Straight,
  Dashed,
  Gravity,
  CurvedPath,
  ClusterBundle
};

// node_modules/@uncharted.software/grafer/build/lib/graph/labels/mod.js
var mod_exports3 = {};
__export(mod_exports3, {
  CircularLabel: () => CircularLabel,
  CircularLabelPlacement: () => CircularLabelPlacement,
  LabelAtlas: () => LabelAtlas,
  PointLabel: () => PointLabel,
  PointLabelPlacement: () => PointLabelPlacement,
  RingLabel: () => RingLabel,
  kCharBoxDataMappings: () => kCharBoxDataMappings,
  kCharBoxDataTypes: () => kCharBoxDataTypes,
  kGLLabelNodeTypes: () => kGLLabelNodeTypes,
  kLabelDataTypes: () => kLabelDataTypes,
  kLabelMappings: () => kLabelMappings,
  kLabelNodeDataTypes: () => kLabelNodeDataTypes,
  kLabelNodeMappings: () => kLabelNodeMappings,
  types: () => types3
});

// node_modules/potpack/index.mjs
function potpack(boxes) {
  let area = 0;
  let maxWidth = 0;
  for (const box of boxes) {
    area += box.w * box.h;
    maxWidth = Math.max(maxWidth, box.w);
  }
  boxes.sort((a, b) => b.h - a.h);
  const startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.95)), maxWidth);
  const spaces = [{x: 0, y: 0, w: startWidth, h: Infinity}];
  let width = 0;
  let height = 0;
  for (const box of boxes) {
    for (let i = spaces.length - 1; i >= 0; i--) {
      const space = spaces[i];
      if (box.w > space.w || box.h > space.h)
        continue;
      box.x = space.x;
      box.y = space.y;
      height = Math.max(height, box.y + box.h);
      width = Math.max(width, box.x + box.w);
      if (box.w === space.w && box.h === space.h) {
        const last = spaces.pop();
        if (i < spaces.length)
          spaces[i] = last;
      } else if (box.h === space.h) {
        space.x += box.w;
        space.w -= box.w;
      } else if (box.w === space.w) {
        space.y += box.h;
        space.h -= box.h;
      } else {
        spaces.push({
          x: space.x + box.w,
          y: space.y,
          w: space.w - box.w,
          h: box.h
        });
        space.y += box.h;
        space.h -= box.h;
      }
      break;
    }
  }
  return {
    w: width,
    h: height,
    fill: area / (width * height) || 0
  };
}

// node_modules/@uncharted.software/grafer/build/lib/graph/labels/LabelAtlas.js
var LabelAtlas_test_vs_default = "#version 300 es\n\nprecision lowp usampler2D;\n#define GLSLIFY 1\n\nlayout(location=0) in uint aIndex;\n\nuniform usampler2D uDataTexture;\n\nflat out vec4 vBox;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\nvoid main() {\n    vec2 texSize = vec2(textureSize(uDataTexture, 0));\n    vec4 box = vec4(uvalueForIndex(uDataTexture, int(aIndex)));\n    vBox = vec4(\n        box[0] / texSize.x,\n        box[1] / texSize.y,\n        box[2] / texSize.x,\n        box[3] / texSize.y\n    );\n}\n";
var noop_fs_default3 = "#version 300 es\n#define GLSLIFY 1\nvoid main() {}\n";
var kImageMargin = 12;
var INF = 1e20;
var kLabelMappings = {
  id: (entry, i) => "id" in entry ? entry.id : i,
  label: (entry, i) => "label" in entry ? entry.label : `${i}`,
  fontSize: (entry) => "fontSize" in entry ? entry.fontSize : 18,
  padding: (entry) => "padding" in entry ? entry.padding : [8, 5]
};
var kCharBoxDataMappings = {
  box: (entry) => [entry.x + kImageMargin, entry.y + kImageMargin, entry.w - kImageMargin * 2, entry.h - kImageMargin * 2]
};
var kCharBoxDataTypes = {
  box: [picogl_default.UNSIGNED_SHORT, picogl_default.UNSIGNED_SHORT, picogl_default.UNSIGNED_SHORT, picogl_default.UNSIGNED_SHORT]
};
var kLabelDataTypes = {
  char: picogl_default.UNSIGNED_SHORT
};
var LabelAtlas = class {
  constructor(context, data, mappings) {
    this.fontSizeStep = 25;
    this.spaceSizeMap = new Map();
    this.labelPixelRatio = window.devicePixelRatio;
    this.characterMap = new Map();
    this.labelMap = new Map();
    if (data.length) {
      this.processData(context, data, Object.assign({}, kLabelMappings, mappings));
    } else {
      this._boxesTexture = context.createTexture2D(1, 1);
      this._labelsTexture = context.createTexture2D(1, 1);
      this._charactersTexture = context.createTexture2D(1, 1);
    }
  }
  get boxesTexture() {
    return this._boxesTexture;
  }
  get labelsTexture() {
    return this._labelsTexture;
  }
  get charactersTexture() {
    return this._charactersTexture;
  }
  processData(context, data, mappings) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("style", "font-smooth: never;-webkit-font-smoothing : none;");
    const ctx = canvas.getContext("2d");
    const boxMap = new Map();
    const boxes = [];
    const labels = [];
    for (const [, entry] of dataIterator(data, mappings)) {
      if (typeof entry.label === "string") {
        const renderSize = Math.max(entry.fontSize, Math.floor(entry.fontSize / this.fontSizeStep) * this.fontSizeStep);
        const renderScale = entry.fontSize / renderSize;
        const labelInfo = {
          index: labels.length,
          length: entry.label.length,
          width: 0,
          height: 0
        };
        this.labelMap.set(entry.id, labelInfo);
        for (let i = 0, n = entry.label.length; i < n; ++i) {
          const char = entry.label.charAt(i);
          const charKey = `${char}-${renderSize}`;
          if (!this.characterMap.has(charKey)) {
            const image = this.computeDistanceField(this.renderCharTexture(char, renderSize, ctx, canvas), renderSize);
            const box2 = {id: charKey, w: image.width, h: image.height, image};
            boxMap.set(charKey, box2);
            boxes.push(box2);
            this.characterMap.set(charKey, 0);
          }
          const box = boxMap.get(charKey);
          labelInfo.width += (box.image.width - kImageMargin * 2) * renderScale;
          labelInfo.height = Math.max(labelInfo.height, (box.image.height - kImageMargin * 2) * renderScale);
          labels.push(charKey);
        }
      }
    }
    const pack = potpack(boxes);
    const finalImage = ctx.createImageData(pack.w, pack.h);
    const boxesBuffer = packData(boxes, kCharBoxDataMappings, kCharBoxDataTypes, true, (i) => {
      const box = boxes[i];
      this.characterMap.set(box.id, i);
      this.blitImageData(box.image, finalImage, box.x, finalImage.height - box.y - box.h);
    });
    this._charactersTexture = context.createTexture2D(finalImage, {
      flipY: true
    });
    this._boxesTexture = this.createTextureForBuffer(context, new Uint16Array(boxesBuffer), boxes.length, picogl_default.RGBA16UI);
    const labelDataMappings = {
      char: (entry) => this.characterMap.get(entry)
    };
    const labelBuffer = packData(labels, labelDataMappings, kLabelDataTypes, true);
    this._labelsTexture = this.createTextureForBuffer(context, new Uint16Array(labelBuffer), labels.length, picogl_default.R16UI);
  }
  createTextureForBuffer(context, data, dataLength, format) {
    const textureWidth = Math.pow(2, Math.ceil(Math.log2(Math.ceil(Math.sqrt(dataLength)))));
    const textureHeight = Math.pow(2, Math.ceil(Math.log2(Math.ceil(dataLength / textureWidth))));
    const texture = context.createTexture2D(textureWidth, textureHeight, {
      internalFormat: format
    });
    texture.data(data);
    return texture;
  }
  renderCharTexture(char, size, context, canvas) {
    const pixelRatio = this.labelPixelRatio;
    if (!this.spaceSizeMap.has(size)) {
      context.font = `${size * pixelRatio}px monospace`;
      context.imageSmoothingEnabled = false;
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = "middle";
      const spaceMetrics = context.measureText(" ");
      this.spaceSizeMap.set(size, Math.abs(spaceMetrics.actualBoundingBoxLeft) + Math.abs(spaceMetrics.actualBoundingBoxRight));
    }
    const textWidth = this.spaceSizeMap.get(size);
    const textHeight = size * pixelRatio;
    const textPadding = Math.min(textWidth, textHeight) * 0.15;
    canvas.width = textWidth + textPadding + kImageMargin * 2;
    canvas.height = size * pixelRatio + textPadding + kImageMargin * 2;
    context.font = `${size * pixelRatio}px monospace`;
    context.imageSmoothingEnabled = false;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(char, canvas.width * 0.5, canvas.height * 0.5);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }
  blitImageData(src, dst, x, y) {
    for (let yy = 0; yy < src.height; ++yy) {
      const srcStart = src.width * yy * 4;
      const srcEnd = srcStart + src.width * 4;
      const dstOff = dst.width * (yy + y) * 4 + x * 4;
      dst.data.set(src.data.subarray(srcStart, srcEnd), dstOff);
    }
  }
  computeDistanceField(imageData, fontSize) {
    const dataLength = imageData.width * imageData.height;
    const maxDimension = Math.max(imageData.width, imageData.height);
    const gridOuter = new Float64Array(dataLength);
    const gridInner = new Float64Array(dataLength);
    const f = new Float64Array(maxDimension);
    const z = new Float64Array(maxDimension + 1);
    const v = new Uint16Array(maxDimension);
    gridOuter.fill(INF, 0, dataLength);
    gridInner.fill(0, 0, dataLength);
    for (let i = 0; i < dataLength; ++i) {
      const a = imageData.data[i * 4 + 3] / 255;
      gridOuter[i] = a === 1 ? 0 : a === 0 ? INF : Math.pow(Math.max(0, 0.5 - a), 2);
      gridInner[i] = a === 1 ? INF : a === 0 ? 0 : Math.pow(Math.max(0, a - 0.5), 2);
    }
    this.edt(gridOuter, imageData.width, imageData.height, f, v, z);
    this.edt(gridInner, imageData.width, imageData.height, f, v, z);
    const radius = fontSize / 8;
    const data = imageData.data;
    for (let i = 0; i < dataLength; ++i) {
      const d = Math.sqrt(gridOuter[i]) - Math.sqrt(gridInner[i]);
      const p = i * 4;
      const a = Math.round(255 - 255 * (d / radius + 0.5));
      data[p] = 255;
      data[p + 1] = 255;
      data[p + 2] = 255;
      data[p + 3] = a;
    }
    return imageData;
  }
  edt(data, width, height, f, v, z) {
    for (let x = 0; x < width; ++x) {
      this.edt1d(data, x, width, height, f, v, z);
    }
    for (let y = 0; y < height; ++y) {
      this.edt1d(data, y * width, 1, width, f, v, z);
    }
  }
  edt1d(grid2, offset, stride, length5, f, v, z) {
    let q, k, s, r;
    v[0] = 0;
    z[0] = -INF;
    z[1] = INF;
    for (q = 0; q < length5; ++q) {
      f[q] = grid2[offset + q * stride];
    }
    for (q = 1, k = 0, s = 0; q < length5; ++q) {
      do {
        r = v[k];
        s = (f[q] - f[r] + q * q - r * r) / (q - r) / 2;
      } while (s <= z[k] && --k > -1);
      ++k;
      v[k] = q;
      z[k] = s;
      z[k + 1] = INF;
    }
    for (q = 0, k = 0; q < length5; ++q) {
      while (z[k + 1] < q) {
        ++k;
      }
      r = v[k];
      grid2[offset + q * stride] = f[r] + (q - r) * (q - r);
    }
  }
  testFeedback(context) {
    const program = context.createProgram(LabelAtlas_test_vs_default, noop_fs_default3, {transformFeedbackVaryings: ["vBox"], transformFeedbackMode: picogl_default.INTERLEAVED_ATTRIBS});
    const pointsTarget = context.createVertexBuffer(picogl_default.FLOAT, 4, 40);
    const pointsIndices = context.createVertexBuffer(picogl_default.UNSIGNED_BYTE, 1, new Uint8Array([
      0,
      1,
      2,
      3,
      4,
      5
    ]));
    const transformFeedback = context.createTransformFeedback().feedbackBuffer(0, pointsTarget);
    const vertexArray = context.createVertexArray().vertexAttributeBuffer(0, pointsIndices);
    const drawCall = context.createDrawCall(program, vertexArray).transformFeedback(transformFeedback);
    drawCall.primitive(picogl_default.POINTS);
    drawCall.texture("uDataTexture", this._boxesTexture);
    context.enable(picogl_default.RASTERIZER_DISCARD);
    drawCall.draw();
    context.disable(picogl_default.RASTERIZER_DISCARD);
    printDataGL(context, pointsTarget, 6, {
      box: [picogl_default.FLOAT, picogl_default.FLOAT, picogl_default.FLOAT, picogl_default.FLOAT]
    });
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/labels/point/PointLabel.js
var PointLabel_fs_default = "#version 300 es\nprecision highp float;\nprecision lowp usampler2D;\n#define GLSLIFY 1\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\nuniform usampler2D uLabelIndices;\nuniform usampler2D uCharBoxes;\nuniform sampler2D uCharTexture;\nuniform float uPixelRatio;\nuniform uint uRenderMode;\nuniform float uPadding;\n\nflat in vec4 fBackgroundColor;\nflat in vec4 fTextColor;\nflat in vec4 fLabelInfo;\nflat in float fPixelLength;\nflat in vec2 fCharTextureSize;\nin vec2 vFromCenter;\nin vec2 vStringCoords;\nin vec2 vPixelCoords;\n\nout vec4 fragColor;\n\nvoid main() {\n    float padding = uPadding * uPixelRatio;\n    vec4 finalColor;\n\n    if (vPixelCoords.x < padding || vPixelCoords.y < padding || vPixelCoords.x > fLabelInfo[2] + padding || vPixelCoords.y > fLabelInfo[3] + padding) {\n        finalColor = fBackgroundColor;\n    } else {\n        vec2 uvMultiplier = (vPixelCoords - padding) / fLabelInfo.ba;\n        float u = fLabelInfo[0] + fLabelInfo[1] * uvMultiplier.x;\n        float v = uvMultiplier.y;\n\n        float stringIndex = floor(u);\n        int charIndex = int(uivalueForIndex(uLabelIndices, int(stringIndex)));\n        vec4 charBox = vec4(uvalueForIndex(uCharBoxes, charIndex));\n        float charMult = u - stringIndex;\n\n        vec4 charBoxUV = charBox / vec4(fCharTextureSize, fCharTextureSize);\n\n        vec2 uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * v);\n        vec4 texPixel = texture(uCharTexture, uv);\n\n        float smoothing = 7.0 / fLabelInfo[3];\n        float distance = texPixel.a;\n        float textEdge = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);\n        finalColor = mix(fBackgroundColor, fTextColor, textEdge);\n    }\n\n    float threshold = uRenderMode == MODE_HIGH_PASS_1 ? 0.75 : 0.5;\n\n    if (uRenderMode != MODE_HIGH_PASS_2) {\n        if (finalColor.a < threshold) {\n            discard;\n        }\n        fragColor = outputColor(vec4(finalColor.rgb, 1.0));\n    } else {\n        if (finalColor.a == 1.0) {\n            discard;\n        }\n        fragColor = outputColor(finalColor);\n    }\n\n//    if ((uRenderMode != MODE_HIGH_PASS_2 && texPixel.a < threshold) || (uRenderMode == MODE_HIGH_PASS_2 && texPixel.a == 1.0)) {\n//        discard;\n//    }\n//    float alpha = uRenderMode == MODE_HIGH_PASS_2 ? texPixel.a : 1.0;\n//    fragColor = vec4(texPixel.rgb * fColor.rgb, alpha);\n}\n";
var PointLabel_vs_default = `#version 300 es

precision lowp usampler2D;
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in vec3 iPosition;
layout(location=2) in float iRadius;
layout(location=3) in uint iColor;
layout(location=4) in uvec4 iLabel;

//layout(std140) uniform RenderUniforms {
    uniform mat4 uViewMatrix;
    uniform mat4 uSceneMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec2 uViewportSize;
    uniform float uPixelRatio;
    uniform sampler2D uColorPalette;
//};
uniform usampler2D uLabelIndices;
uniform usampler2D uCharBoxes;
uniform sampler2D uCharTexture;
uniform float uVisibilityThreshold;
uniform vec2 uLabelPlacement;
uniform bool uBackground;
uniform float uPadding;

flat out vec4 fBackgroundColor;
flat out vec4 fTextColor;
flat out vec4 fLabelInfo;
flat out float fPixelLength;
flat out vec2 fCharTextureSize;
out vec2 vFromCenter;
out vec2 vStringCoords;
out vec2 vPixelCoords;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

void main() {
    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader
    mat4 offsetMatrix = mat4(1.0);
    offsetMatrix[3] = vec4(iPosition, 1.0);

    // reset the rotation of the model-view matrix
    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;
    mat4 lookAtMatrix = mat4(modelMatrix);
    lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);
    lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);
    lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);

    // the on-screen center of this point
    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;

    // the on-screen position of a side of this quad
    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(iRadius, 0.0, 0.0, 1.0);
    vec2 screenQuadSide = quadSide.xy / quadSide.w;

    // compute the pixel radius of this point for a size of 1 in world coordinates
    float pixelRadius = length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5);

    // send the size of the char texture to the fragment shader
    fCharTextureSize = vec2(textureSize(uCharTexture, 0));

    // send the render color to the fragment shader
    vec4 color = valueForIndex(uColorPalette, int(iColor));
    if (uBackground) {
        fBackgroundColor = vec4(color.rgb, 1.0);
        fTextColor = vec4(contrastingColor(color.rgb, 7.0), 1.0);
    } else {
        fBackgroundColor = vec4(color.rgb, 0.0);
        fTextColor = vec4(color.rgb, 1.0);
    }

    // send the normalized length of a single pixel to the fragment shader
    fPixelLength = 1.0 / max(1.0, pixelRadius);

    // send the normalized distance from the center to the fragment shader
    vFromCenter = aVertex.xy;

    // send the label size to the fragment shader
    fLabelInfo = vec4(iLabel);

    // compute the visibility multiplier
    float visibilityThreshold = uVisibilityThreshold * uPixelRatio;
    vec3 visibilityMultiplier = vec3(
        smoothstep(visibilityThreshold * 0.5, visibilityThreshold * 0.6, pixelRadius),
        smoothstep(visibilityThreshold * 0.5, visibilityThreshold * 0.525, pixelRadius),
        1.0
    );
//    float visibilityMultiplier = pixelRadius >= uVisibilityThreshold * 0.5 * uPixelRatio ? 1.0 : 0.0;

    // calculate the size of a pixel in worls coordinates with repsect to the point's position
    float pixelToWorld = iRadius / pixelRadius;

    // calculate the with and height of the label
    float padding = uPadding * uPixelRatio;
    vec3 labelSize = vec3((fLabelInfo[2] + padding * 2.0) * pixelToWorld, (fLabelInfo[3] + padding * 2.0) * pixelToWorld, 0.0);

    // compute the UV multiplier based on the vertices of the quad
    vec2 pixelMultiplier = vec2((aVertex.xy + 1.0) / 2.0);
    // send the pixel coords to the fragment shader
    vPixelCoords = vec2(fLabelInfo[2] + padding * 2.0, fLabelInfo[3] + padding * 2.0) * pixelMultiplier;

    // calculate the render matrix
    mat4 renderMatrix = uProjectionMatrix * lookAtMatrix;

    // claculate the label offset
    float labelMargin = 5.0 * pixelToWorld; // pixels
    vec3 labelOffset = vec3(
        (iRadius + labelSize.x * 0.5 + labelMargin) * uLabelPlacement.x,
        (iRadius + labelSize.y * 0.5 + labelMargin) * uLabelPlacement.y,
        0.01
    );

    // compute the vertex position and its screen position
    vec4 worldVertex = renderMatrix * vec4(aVertex * labelSize * 0.5 * visibilityMultiplier + labelOffset, 1.0);

    // set the render vertex location
    gl_Position = worldVertex;
}
`;
var PointLabel_data_vs_default = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location=0) in uint aPositionIndex;\nlayout(location=1) in uint aColor;\nlayout(location=2) in uvec4 aLabel;\n\nuniform sampler2D uGraphPoints;\n\nout vec3 vPosition;\nout float vRadius;\nflat out uint vColor;\nflat out uvec4 vLabel;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\nvoid main() {\n    vec4 value = valueForIndex(uGraphPoints, int(aPositionIndex));\n    vPosition = value.xyz;\n    vRadius = value.w;\n    vColor = aColor;\n    vLabel = aLabel;\n}\n";
var kLabelNodeMappings = Object.assign({}, kLabelMappings, {
  point: (entry, i) => "point" in entry ? entry.point : i,
  color: (entry) => "color" in entry ? entry.color : 0
});
var kLabelNodeDataTypes = {
  point: picogl_default.UNSIGNED_INT,
  color: picogl_default.UNSIGNED_INT,
  label: [picogl_default.UNSIGNED_INT, picogl_default.UNSIGNED_INT, picogl_default.UNSIGNED_INT, picogl_default.UNSIGNED_INT]
};
var kGLLabelNodeTypes = {
  position: [picogl_default.FLOAT, picogl_default.FLOAT, picogl_default.FLOAT],
  radius: picogl_default.FLOAT,
  color: picogl_default.UNSIGNED_INT,
  label: [picogl_default.UNSIGNED_INT, picogl_default.UNSIGNED_INT, picogl_default.UNSIGNED_INT, picogl_default.UNSIGNED_INT]
};
var PointLabelPlacement;
(function(PointLabelPlacement2) {
  PointLabelPlacement2[PointLabelPlacement2["CENTER"] = 0] = "CENTER";
  PointLabelPlacement2[PointLabelPlacement2["TOP"] = 1] = "TOP";
  PointLabelPlacement2[PointLabelPlacement2["BOTTOM"] = 2] = "BOTTOM";
  PointLabelPlacement2[PointLabelPlacement2["LEFT"] = 3] = "LEFT";
  PointLabelPlacement2[PointLabelPlacement2["RIGHT"] = 4] = "RIGHT";
})(PointLabelPlacement || (PointLabelPlacement = {}));
var PointLabel = class extends Nodes {
  constructor(...args) {
    super(...args);
    this._labelPlacement = 0;
  }
  get labelPlacement() {
    return this._labelPlacement;
  }
  set labelPlacement(value) {
    this._labelPlacement = value;
    switch (this._labelPlacement) {
      case 0:
        this.localUniforms.uLabelPlacement = [0, 0];
        break;
      case 2:
        this.localUniforms.uLabelPlacement = [0, -1];
        break;
      case 1:
        this.localUniforms.uLabelPlacement = [0, 1];
        break;
      case 3:
        this.localUniforms.uLabelPlacement = [-1, 0];
        break;
      case 4:
        this.localUniforms.uLabelPlacement = [1, 0];
        break;
    }
  }
  get renderBackground() {
    return this.localUniforms.uBackground;
  }
  set renderBackground(value) {
    this.localUniforms.uBackground = value;
  }
  get visibilityThreshold() {
    return this.localUniforms.uVisibilityThreshold;
  }
  set visibilityThreshold(value) {
    this.localUniforms.uVisibilityThreshold = value;
  }
  get padding() {
    return this.localUniforms.uPadding;
  }
  set padding(value) {
    this.localUniforms.uPadding = value;
  }
  initialize(context, points, data, mappings, pickingManager, labelAtlas) {
    if (labelAtlas) {
      this.labelAtlas = labelAtlas;
    } else {
      this.labelAtlas = new LabelAtlas(context, data, mappings);
    }
    super.initialize(context, points, data, mappings, pickingManager);
    this.verticesVBO = context.createVertexBuffer(picogl_default.FLOAT, 2, new Float32Array([
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1
    ]));
    this.nodesVAO = context.createVertexArray().vertexAttributeBuffer(0, this.verticesVBO);
    this.configureTargetVAO(this.nodesVAO);
    const shaders = this.getDrawShaders();
    this.program = context.createProgram(shaders.vs, shaders.fs);
    this.drawCall = context.createDrawCall(this.program, this.nodesVAO).primitive(picogl_default.TRIANGLE_STRIP);
    this.compute(context, {
      uGraphPoints: this.dataTexture
    });
    this.localUniforms.uBackground = false;
    this.localUniforms.uLabelIndices = this.labelAtlas.labelsTexture;
    this.localUniforms.uCharBoxes = this.labelAtlas.boxesTexture;
    this.localUniforms.uCharTexture = this.labelAtlas.charactersTexture;
    this.localUniforms.uVisibilityThreshold = 15;
    this.localUniforms.uLabelPlacement = [0, 0];
    this.localUniforms.uPadding = 4;
  }
  destroy() {
  }
  render(context, mode, uniforms) {
    this.configureRenderContext(context, mode);
    switch (mode) {
      case RenderMode.DRAFT:
      case RenderMode.MEDIUM:
      case RenderMode.HIGH_PASS_1:
        setDrawCallUniforms(this.drawCall, uniforms);
        setDrawCallUniforms(this.drawCall, this.localUniforms);
        this.drawCall.draw();
        break;
      case RenderMode.HIGH_PASS_2:
        setDrawCallUniforms(this.drawCall, uniforms);
        setDrawCallUniforms(this.drawCall, this.localUniforms);
        this.drawCall.draw();
        break;
      default:
        break;
    }
  }
  getDrawShaders() {
    return {
      vs: PointLabel_vs_default,
      fs: PointLabel_fs_default
    };
  }
  getGLSourceTypes() {
    return kLabelNodeDataTypes;
  }
  getGLTargetTypes() {
    return kGLLabelNodeTypes;
  }
  getDataShader() {
    return {
      vs: PointLabel_data_vs_default,
      varyings: ["vPosition", "vRadius", "vColor", "vLabel"]
    };
  }
  computeMappings(mappings) {
    const dataMappings = Object.assign({}, kLabelNodeMappings, super.computeMappings(mappings));
    const idMapping = dataMappings.id;
    dataMappings.label = (entry, i) => {
      const labelInfo = this.labelAtlas.labelMap.get(idMapping(entry, i));
      return [
        labelInfo.index,
        labelInfo.length,
        labelInfo.width,
        labelInfo.height
      ];
    };
    return dataMappings;
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/labels/circular/CircularLabel.js
var CircularLabel_vs_default = `#version 300 es

precision lowp usampler2D;
#define GLSLIFY 1

#define M_PI 3.14159265359
#define M_2PI 6.28318530718

layout(location=0) in vec3 aVertex;
layout(location=1) in vec3 iPosition;
layout(location=2) in float iRadius;
layout(location=3) in uint iColor;
layout(location=4) in uvec4 iLabel;

//layout(std140) uniform RenderUniforms {
    uniform mat4 uViewMatrix;
    uniform mat4 uSceneMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec2 uViewportSize;
    uniform float uPixelRatio;
    uniform sampler2D uColorPalette;
//};
uniform sampler2D uCharTexture;
uniform float uVisibilityThreshold;
uniform vec2 uLabelPositioning;
uniform int uRepeatLabel;
uniform float uRepeatGap;
uniform float uPlacementMargin;
uniform float uLabelPlacement;
uniform vec2 uLabelDirection;
uniform bool uBackground;
uniform float uPadding;

flat out vec4 fBackgroundColor;
flat out vec4 fTextColor;
flat out float fPixelRadius;
flat out float fLabelStep;
flat out vec2 fCharTextureSize;
flat out vec4 fLabelInfo;
flat out float fPixelLength;
out vec2 vFromCenter;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

void main() {
    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader
    mat4 offsetMatrix = mat4(1.0);
    offsetMatrix[3] = vec4(iPosition, 1.0);

    // reset the rotation of the model-view matrix
    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;
    mat4 lookAtMatrix = mat4(modelMatrix);
    lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);
    lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);
    lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);

    // the on-screen center of this point
    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;

    // the on-screen position of a side of this quad
    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(iRadius, 0.0, 0.0, 1.0);
    vec2 screenQuadSide = quadSide.xy / quadSide.w;

    // compute the pixel radius of this point for a size of 1 in world coordinates
    float pixelRadius = length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5);

    // send the size of the char texture to the fragment shader
    fCharTextureSize = vec2(textureSize(uCharTexture, 0));

    // send the render color to the fragment shader
    vec4 color = valueForIndex(uColorPalette, int(iColor));
    if (uBackground) {
        fBackgroundColor = vec4(color.rgb, 1.0);
        fTextColor = vec4(contrastingColor(color.rgb, 7.0), 1.0);
    } else {
        fBackgroundColor = vec4(color.rgb, 0.0);
        fTextColor = vec4(color.rgb, 1.0);
    }

    // send thelabel info to the fragment shader
    fLabelInfo = vec4(iLabel);

    // send the pixel radius of this label to the fragment shader
    float padding = uPadding * uPixelRatio;
    float placementOffset = (fLabelInfo[3] + padding * 2.0) * uLabelPlacement + uPlacementMargin * (-1.0 + 2.0 * uLabelPlacement) * uPixelRatio;
    fPixelRadius = pixelRadius + placementOffset;

    // calculate the render matrix
    mat4 renderMatrix = uProjectionMatrix * lookAtMatrix;

    // compute the visibility multiplier
    float visibilityMultiplier = pixelRadius >= uVisibilityThreshold * 0.5 * uPixelRatio ? 1.0 : 0.0;

    // send the normalized length of a single pixel
    fPixelLength = 1.0 / fPixelRadius;

    // send the normalized distance from the center to the fragment shader
    vFromCenter = aVertex.xy;

    // compute the vertex position and its screen position
    float pixelLength = iRadius / pixelRadius;
    float textRadius = iRadius + pixelLength * placementOffset;
    vec3 labelOffset = vec3(0.0, 0.0, 0.01); // offset the label forward a tiny bit so it's always in front
    vec4 worldVertex = renderMatrix * vec4(aVertex * textRadius * visibilityMultiplier + labelOffset, 1.0);

    // find the number of label repetitions
    float repeatLabels = float(uint(uRepeatLabel));
    float repeatGap = uRepeatGap * uPixelRatio;
    float diameter = fPixelRadius * M_2PI;
    float maxLabels = min(repeatLabels, floor(diameter / (fLabelInfo[2] + repeatGap + padding * 2.0)));
    float maxLabelsLength = (fLabelInfo[2] + padding * 2.0) * maxLabels;
    float labelGap = (diameter - maxLabelsLength) / maxLabels;
    fLabelStep = fLabelInfo[2] + labelGap + padding * 2.0;

    // set the render vertex location
    gl_Position = worldVertex;
}
`;
var CircularLabel_fs_default = "#version 300 es\nprecision highp float;\nprecision lowp usampler2D;\n#define GLSLIFY 1\n\n#define M_PI 3.14159265359\n#define M_2PI 6.28318530718\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform usampler2D uLabelIndices;\nuniform usampler2D uCharBoxes;\nuniform sampler2D uCharTexture;\nuniform float uPixelRatio;\nuniform uint uRenderMode;\nuniform vec2 uLabelDirection;\nuniform bool uMirror;\nuniform float uPadding;\n\nflat in vec4 fBackgroundColor;\nflat in vec4 fTextColor;\nflat in float fPixelRadius;\nflat in float fLabelStep;\nflat in vec2 fCharTextureSize;\nflat in vec4 fLabelInfo;\nflat in float fPixelLength;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nfloat cross_ish(vec2 a, vec2 b)\n{\n    return a.x * b.y - a.y * b.x;\n}\n\nvoid main() {\n    float padding = uPadding * uPixelRatio;\n    float fromCenter = length(vFromCenter);\n    float halfLabelWidth = fLabelInfo[2] * 0.5;\n    float halfLabelHeight = fLabelInfo[3] * 0.5;\n    float normalizedHeight = (halfLabelHeight + padding) / fPixelRadius;\n    float circle = fromCenter - (1.0 - normalizedHeight);\n    float ring = opOnion(circle, normalizedHeight);\n\n    vec2 positionVector = uLabelDirection;\n    float angle = atan(cross_ish(vFromCenter, positionVector), dot(vFromCenter, positionVector));\n    float angleDistance = angle * fPixelRadius;\n    float paddedLabelWidth = fLabelInfo[2] + padding * 2.0;\n    float offsetAngleDistance = angleDistance + halfLabelWidth + padding;\n\n    if (ring > 0.0 || fract(offsetAngleDistance / fLabelStep) >= paddedLabelWidth / fLabelStep) {\n        discard;\n    }\n\n    float width = fract(offsetAngleDistance / fLabelStep) * fLabelStep;\n    float height = (1.0 - fromCenter) * fPixelRadius - padding;\n    vec4 finalColor;\n\n    if (height < 0.0 || height > fLabelInfo[3] || width < padding || width > fLabelInfo[2] + padding) {\n        finalColor = fBackgroundColor;\n    } else {\n        float uProgress = (width - padding) / fLabelInfo[2];\n        if (uMirror) {\n            uProgress = 1.0 - uProgress;\n        }\n        float stringProgress = fLabelInfo[0] + fLabelInfo[1] * uProgress;\n        float stringIndex = floor(stringProgress);\n        int charIndex = int(uivalueForIndex(uLabelIndices, int(stringIndex)));\n        vec4 charBox = vec4(uvalueForIndex(uCharBoxes, charIndex));\n        float charMult = stringProgress - stringIndex;\n\n        vec4 charBoxUV = charBox / vec4(fCharTextureSize, fCharTextureSize);\n\n        vec2 uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * fLabelInfo[1]);\n        if (uMirror) {\n            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (height / fLabelInfo[3]));\n        } else {\n            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (1.0 - height / fLabelInfo[3]));\n        }\n\n        vec4 texPixel = texture(uCharTexture, uv);\n\n        float smoothing = 7.0 / fLabelInfo[3];\n        float distance = texPixel.a;\n        float textEdge = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);\n        finalColor = mix(fBackgroundColor, fTextColor, textEdge);\n    }\n\n    finalColor.a *= smoothstep(0.0, fPixelLength * 1.5, abs(ring));\n\n    float threshold = uRenderMode == MODE_HIGH_PASS_1 ? 0.75 : 0.5;\n\n    if (uRenderMode != MODE_HIGH_PASS_2) {\n        if (finalColor.a < threshold) {\n            discard;\n        }\n        fragColor = outputColor(vec4(finalColor.rgb, 1.0));\n    } else {\n        if (finalColor.a == 1.0) {\n            discard;\n        }\n        fragColor = outputColor(finalColor);\n    }\n}\n";
var CircularLabelPlacement;
(function(CircularLabelPlacement2) {
  CircularLabelPlacement2[CircularLabelPlacement2["INSIDE"] = 0] = "INSIDE";
  CircularLabelPlacement2[CircularLabelPlacement2["OUTSIDE"] = 1] = "OUTSIDE";
})(CircularLabelPlacement || (CircularLabelPlacement = {}));
var CircularLabel = class extends PointLabel {
  get repeatLabel() {
    return this.localUniforms.uRepeatLabel;
  }
  set repeatLabel(value) {
    this.localUniforms.uRepeatLabel = value;
  }
  get repeatGap() {
    return this.localUniforms.uRepeatGap;
  }
  set repeatGap(value) {
    this.localUniforms.uRepeatGap = value;
  }
  get placementMargin() {
    return this.localUniforms.uPlacementMargin;
  }
  set placementMargin(value) {
    this.localUniforms.uPlacementMargin = value;
  }
  get mirror() {
    return this.localUniforms.uMirror;
  }
  set mirror(value) {
    this.localUniforms.uMirror = value;
  }
  get labelPlacement() {
    return this.localUniforms.uLabelPlacement;
  }
  set labelPlacement(value) {
    this.localUniforms.uLabelPlacement = value;
  }
  get labelDirection() {
    return this._labelDirection;
  }
  set labelDirection(value) {
    const rad = value * 0.0174533;
    this.localUniforms.uLabelDirection = [Math.cos(rad), Math.sin(rad)];
  }
  initialize(context, points, data, mappings, pickingManager, labelAtlas) {
    super.initialize(context, points, data, mappings, pickingManager, labelAtlas);
    this.localUniforms.uRepeatLabel = -1;
    this.localUniforms.uRepeatGap = 5;
    this.localUniforms.uPlacementMargin = 0;
    this.localUniforms.uMirror = false;
    this.localUniforms.uLabelPlacement = 1;
    this.labelDirection = 90;
  }
  getDrawShaders() {
    return {
      vs: CircularLabel_vs_default,
      fs: CircularLabel_fs_default
    };
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/labels/ring/RingLabel.js
var RingLabel_vs_default = '#version 300 es\n\nprecision lowp usampler2D;\n#define GLSLIFY 1\n\n#define M_PI 3.14159265359\n#define M_2PI 6.28318530718\n\nlayout(location=0) in vec3 aVertex;\nlayout(location=1) in vec3 iPosition;\nlayout(location=2) in float iRadius;\nlayout(location=3) in uint iColor;\nlayout(location=4) in uvec4 iLabel;\n\n//layout(std140) uniform RenderUniforms {\n    uniform mat4 uViewMatrix;\n    uniform mat4 uSceneMatrix;\n    uniform mat4 uProjectionMatrix;\n    uniform vec2 uViewportSize;\n    uniform float uPixelRatio;\n    uniform sampler2D uColorPalette;\n//};\nuniform sampler2D uCharTexture;\nuniform float uVisibilityThreshold;\nuniform vec2 uLabelPositioning;\nuniform int uRepeatLabel;\nuniform float uRepeatGap;\nuniform float uPlacementMargin;\nuniform float uLabelPlacement;\nuniform vec2 uLabelDirection;\nuniform bool uBackground;\nuniform float uPadding;\n\nflat out vec4 fBackgroundColor;\nflat out vec4 fTextColor;\nflat out vec4 fLabelInfo;\nflat out float fPixelRadius;\nflat out float fPixelLength;\nflat out float fThickness;\nflat out float fLabelStep;\nflat out vec2 fCharTextureSize;\n\nout vec2 vFromCenter;\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nvoid main() {\n    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader\n    mat4 offsetMatrix = mat4(1.0);\n    offsetMatrix[3] = vec4(iPosition, 1.0);\n\n    // reset the rotation of the model-view matrix\n    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;\n    mat4 lookAtMatrix = mat4(modelMatrix);\n    lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);\n    lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);\n    lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);\n\n    // the on-screen center of this point\n    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);\n    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;\n\n    // the on-screen position of a side of this quad\n    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(iRadius, 0.0, 0.0, 1.0);\n    vec2 screenQuadSide = quadSide.xy / quadSide.w;\n\n    // compute the pixel radius of this point for a size of 1 in world coordinates\n    float pixelRadius = length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5);\n\n    // send the size of the char texture to the fragment shader\n    fCharTextureSize = vec2(textureSize(uCharTexture, 0));\n\n    // send the render color to the fragment shader\n    vec4 color = valueForIndex(uColorPalette, int(iColor));\n    fBackgroundColor = vec4(color.rgb, 1.0);\n    fTextColor = vec4(contrastingColor(color.rgb, 7.0), 1.0);\n\n    // send thelabel info to the fragment shader\n    fLabelInfo = vec4(iLabel);\n\n    // calculate the label visibility\n    float visibilityThreshold = uVisibilityThreshold * uPixelRatio;\n    float visibilityMultiplier = smoothstep(visibilityThreshold * 0.5 - fLabelInfo[3], visibilityThreshold * 0.5, pixelRadius * 0.5);\n\n    // send the pixel radius of this label to the fragment shader\n    float padding = uPadding * uPixelRatio;\n    float minThickness = max(2.0, min(pixelRadius * 0.1, 3.0 * uPixelRatio));\n    fThickness = (minThickness + (fLabelInfo[3] + padding * 2.0 - minThickness) * visibilityMultiplier) * 0.5;\n    fPixelRadius = pixelRadius + fThickness;\n\n    // send the normalized length of a single pixel\n    fPixelLength = 1.0 / fPixelRadius;\n\n    // calculate the render matrix\n    mat4 renderMatrix = uProjectionMatrix * lookAtMatrix;\n\n    // send the normalized distance from the center to the fragment shader\n    vFromCenter = aVertex.xy;\n\n    // compute the vertex position and its screen position\n    float pixelLength = iRadius / pixelRadius;\n    float textRadius = iRadius + pixelLength * fThickness;\n    vec4 worldVertex = renderMatrix * vec4(aVertex * textRadius, 1.0);\n\n    // find the number of label repetitions\n    float repeatLabels = float(uint(uRepeatLabel));\n    float repeatGap = uRepeatGap * uPixelRatio;\n    float circumference = fPixelRadius * M_2PI;\n    float maxLabels = min(repeatLabels, floor(circumference / (fLabelInfo[2] + repeatGap + padding * 2.0)));\n    float maxLabelsLength = (fLabelInfo[2] + padding * 2.0) * maxLabels;\n    float labelGap = (circumference - maxLabelsLength) / maxLabels;\n    fLabelStep = fLabelInfo[2] + labelGap + padding * 2.0;\n\n    // set the render vertex location\n    gl_Position = worldVertex;\n}\n';
var RingLabel_fs_default = "#version 300 es\nprecision highp float;\nprecision lowp usampler2D;\n#define GLSLIFY 1\n\n#define M_PI 3.14159265359\n#define M_2PI 6.28318530718\n\nvec4 valueForIndex(sampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuvec4 uvalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0);\n}\n\nuint uivalueForIndex(usampler2D tex, int index) {\n    int texWidth = textureSize(tex, 0).x;\n    int col = index % texWidth;\n    int row = index / texWidth;\n    return texelFetch(tex, ivec2(col, row), 0)[0];\n}\n\n// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation\nfloat luminance_x(float x) {\n    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);\n}\nfloat color_l(float l) {\n    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));\n}\n\n// from https://en.wikipedia.org/wiki/Relative_luminance\nfloat rgb2luminance(vec3 color) {\n    // relative luminance\n    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n    float r = luminance_x(color.r);\n    float g = luminance_x(color.g);\n    float b = luminance_x(color.b);\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\nvec3 setLuminance(vec3 color, float luminance) {\n    float r = luminance_x(color.r) * 0.2126;\n    float g = luminance_x(color.g) * 0.7152;\n    float b = luminance_x(color.b) * 0.0722;\n    float colorLuminance = r + g + b;\n\n    float tr = luminance * (r / colorLuminance);\n    float tg = luminance * (g / colorLuminance);\n    float tb = luminance * (b / colorLuminance);\n\n    float rr = color_l(tr / 0.2126);\n    float rg = color_l(tg / 0.7152);\n    float rb = color_l(tb / 0.0722);\n\n    return vec3(rr, rg, rb );\n}\n\n// https://www.w3.org/TR/WCAG20/#contrast-ratiodef\n// (L1 + 0.05) / (L2 + 0.05), where\n// - L1 is the relative luminance of the lighter of the colors, and\n// - L2 is the relative luminance of the darker of the colors.\nfloat findDarker(float luminance, float contrast) {\n    return (contrast * luminance) + (0.05 * contrast) - 0.05;\n}\nfloat findLighter(float luminance, float contrast) {\n    return (luminance + 0.05 - (0.05 * contrast)) / contrast;\n}\n\nvec3 contrastingColor(vec3 color, float contrast) {\n    float luminance = rgb2luminance(color);\n    float darker = findDarker(luminance, contrast);\n    float lighter = findLighter(luminance, contrast);\n\n    float targetLuminance;\n    if (darker < 0.0 || darker > 1.0) {\n        targetLuminance = lighter;\n    } else if (lighter < 0.0 || lighter > 1.0) {\n        targetLuminance = darker;\n    } else {\n        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;\n    }\n\n    return setLuminance(color, targetLuminance);\n}\n\nvec3 desaturateColor(vec3 color, float amount) {\n    float l = rgb2luminance(color);\n    vec3 gray = vec3(l, l, l);\n    return mix(color, gray, amount);\n}\n\nuniform vec4 uClearColor;\nuniform float uDesaturate;\nuniform float uFade;\nuniform float uAlpha;\n\nvec4 outputColor(vec4 color) {\n    // desaturate => fade => alpha\n    vec3 ret = vec3(desaturateColor(color.rgb, uDesaturate));\n    ret = mix(ret, uClearColor.rgb, uFade);\n    return vec4(ret, color.a * uAlpha);\n}\n\n#define MODE_DRAFT 0u\n#define MODE_MEDIUM 1u\n#define MODE_HIGH_PASS_1 2u\n#define MODE_HIGH_PASS_2 3u\n#define MODE_PICKING 4u\n\n// most of these come from this excellent post:\n// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n\nfloat opRound(in float d, in float r) {\n    return d - r;\n}\n\nfloat opOnion(in float d, in float r) {\n    return abs(d) - r;\n}\n\nfloat sdCircle(in vec2 p, in float r ) {\n    return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(in vec2 p, in float r) {\n    const float k = sqrt(3.0);\n    p.x = abs(p.x) - r;\n    p.y = p.y + (r) / k;\n    if (p.x + k * p.y > 0.0) {\n        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;\n    }\n    p.x -= clamp(p.x, -2.0 * r, 0.0);\n    return -length(p) * sign(p.y);\n}\n\nfloat sdPentagon(in vec2 p, in float r) {\n    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);\n    p.y = -(p.y) * 1.25;\n    p.x = abs(p.x) * 1.25;\n    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);\n    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);\n    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdOctagon(in vec2 p, in float r) {\n    // pi/8: cos, sin, tan.\n    const vec3 k = vec3(\n        -0.9238795325,   // sqrt(2+sqrt(2))/2\n        0.3826834323,   // sqrt(2-sqrt(2))/2\n        0.4142135623\n    ); // sqrt(2)-1\n    // reflections\n    p = abs(p) * 1.1;\n    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);\n    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);\n    // Polygon side.\n    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n    return length(p) * sign(p.y);\n}\n\nfloat sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]\n    // these 4 lines can be precomputed for a given shape\n    float an = 3.141593 / float(n);\n    float en = 3.141593 / m;\n    vec2  acs = vec2(cos(an), sin(an));\n    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,\n\n    // reduce to first sector\n    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;\n    p = length(p) * vec2(cos(bn), abs(sin(bn)));\n\n    // line sdf\n    p -= r * acs;\n    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);\n    return length(p) * sign(p.x);\n}\n\nfloat sdCross(in vec2 p, in float w, in float r) {\n    p = abs(p);\n    return length(p - min(p.x + p.y, w) * 0.5) - r;\n}\n\n// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)\nfloat sdPlus( in vec2 p, in vec2 b, float r ) {\n    p = abs(p);\n    p = (p.y > p.x) ? p.yx : p.xy;\n\n    vec2  q = p - b;\n    float k = max(q.y, q.x);\n    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n\n    return sign(k)*length(max(w, 0.0)) + r;\n}\n\nuniform usampler2D uLabelIndices;\nuniform usampler2D uCharBoxes;\nuniform sampler2D uCharTexture;\nuniform float uPixelRatio;\nuniform uint uRenderMode;\nuniform vec2 uLabelDirection;\nuniform bool uMirror;\nuniform float uPadding;\n\nflat in vec4 fBackgroundColor;\nflat in vec4 fTextColor;\nflat in float fPixelRadius;\nflat in float fLabelStep;\nflat in vec2 fCharTextureSize;\nflat in vec4 fLabelInfo;\nflat in float fPixelLength;\nflat in float fThickness;\nin vec2 vFromCenter;\n\nout vec4 fragColor;\n\nfloat cross_ish(vec2 a, vec2 b)\n{\n    return a.x * b.y - a.y * b.x;\n}\n\nvoid main() {\n    float padding = uPadding * uPixelRatio;\n    float fromCenter = length(vFromCenter);\n    float thickness = fThickness * fPixelLength;\n    float antialias = min(thickness, fPixelLength * 1.5);\n    float radius = 1.0 - thickness;\n    float circle = fromCenter - (1.0 - thickness);\n    float ring = opOnion(circle, thickness);\n    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;\n    float ringThreshold = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;\n\n    if (ring > ringThreshold) {\n        discard;\n    }\n\n    float halfLabelWidth = fLabelInfo[2] * 0.5;\n    float halfLabelHeight = fLabelInfo[3] * 0.5;\n    float normalizedHeight = (halfLabelHeight + padding) / fPixelRadius;\n\n    vec2 positionVector = uLabelDirection;\n    float angle = atan(cross_ish(vFromCenter, positionVector), dot(vFromCenter, positionVector));\n    float angleDistance = angle * fPixelRadius;\n    float paddedLabelWidth = fLabelInfo[2] + padding * 2.0;\n    float offsetAngleDistance = angleDistance + halfLabelWidth + padding;\n\n    float width = fract(offsetAngleDistance / fLabelStep) * fLabelStep;\n    float height = (1.0 - fromCenter) * fPixelRadius - padding;\n    vec4 finalColor;\n\n    if (height < 0.0 || height > fLabelInfo[3] || width < padding || width > fLabelInfo[2] + padding) {\n        finalColor = fBackgroundColor;\n    } else {\n        float uProgress = (width - padding) / fLabelInfo[2];\n        if (uMirror) {\n            uProgress = 1.0 - uProgress;\n        }\n        float stringProgress = fLabelInfo[0] + fLabelInfo[1] * uProgress;\n        float stringIndex = floor(stringProgress);\n        int charIndex = int(uivalueForIndex(uLabelIndices, int(stringIndex)));\n        vec4 charBox = vec4(uvalueForIndex(uCharBoxes, charIndex));\n        float charMult = stringProgress - stringIndex;\n\n        vec4 charBoxUV = charBox / vec4(fCharTextureSize, fCharTextureSize);\n\n        vec2 uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * fLabelInfo[1]);\n        if (uMirror) {\n            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (height / fLabelInfo[3]));\n        } else {\n            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (1.0 - height / fLabelInfo[3]));\n        }\n\n        vec4 texPixel = texture(uCharTexture, uv);\n\n        float smoothing = 7.0 / fLabelInfo[3];\n        float distance = texPixel.a;\n        float textEdge = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);\n        finalColor = mix(fBackgroundColor, fTextColor, textEdge);\n    }\n\n    if (uRenderMode == MODE_HIGH_PASS_2) {\n        if (ring < -antialias) {\n            discard;\n        }\n        fragColor = outputColor(vec4(finalColor.rgb, smoothstep(0.0, antialias, abs(ring))));\n    } else {\n        fragColor = outputColor(vec4(finalColor.rgb, 1.0));\n    }\n\n//    fragColor = vec4(1.0,0.0,1.0,1.0);\n}\n";
var RingLabel = class extends CircularLabel {
  initialize(context, points, data, mappings, pickingManager, labelAtlas) {
    super.initialize(context, points, data, mappings, pickingManager, labelAtlas);
    this.localUniforms.uPadding = 2;
  }
  getDrawShaders() {
    return {
      vs: RingLabel_vs_default,
      fs: RingLabel_fs_default
    };
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/labels/mod.js
var types3 = {
  PointLabel,
  CircularLabel,
  RingLabel
};

// node_modules/@dekkai/env/build/lib/node.js
var kIsNodeJS = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
function isNodeJS() {
  return kIsNodeJS;
}

// node_modules/@dekkai/env/build/lib/deno.js
var kIsDeno = Boolean(typeof Deno !== "undefined");
function isDeno() {
  return kIsDeno;
}

// node_modules/@dekkai/data-source/build/lib/chunk/DataChunk.js
var DataChunk = class {
  constructor(source, start, end) {
    this._buffer = null;
    this.source = source;
    this.start = start;
    this.end = end;
  }
  get buffer() {
    return this._buffer;
  }
  get byteLength() {
    return Promise.resolve(this.end - this.start);
  }
  get loaded() {
    return Boolean(this._buffer);
  }
  async load() {
    if (!this._buffer) {
      this._buffer = await this.loadData();
      if (this._buffer === null) {
        this.start = 0;
        this.end = 0;
      } else if (this.end - this.start > this._buffer.byteLength) {
        this.end -= this.end - this.start - this._buffer.byteLength;
      }
    }
  }
  unload() {
    this._buffer = null;
  }
  slice(start, end) {
    return new DataChunk(this, start, end);
  }
  loadData(start = 0, end = this.end - this.start) {
    return this.source.loadData(this.start + start, this.start + end);
  }
};

// node_modules/@dekkai/data-source/build/lib/file/local/LocalDataFile.js
var LocalDataFile = class {
  slice(start, end) {
    return new DataChunk(this, start, end);
  }
};

// node_modules/@dekkai/data-source/build/lib/file/local/LocalDataFileNode.js
var import_moduleLoader = __toModule(require_moduleLoader());
var gFS = null;
var kFsPromise = (isNodeJS() ? (0, import_moduleLoader.loadModule)("fs") : Promise.resolve(null)).then((fs) => gFS = fs);
var LocalDataFileNode = class extends LocalDataFile {
  constructor(handle, stats) {
    super();
    this.handle = handle;
    this.stats = stats;
  }
  static async fromSource(source) {
    await kFsPromise;
    let handle;
    if (source instanceof URL || typeof source === "string") {
      handle = gFS.openSync(source);
    } else if (typeof source === "number") {
      handle = source;
    } else {
      throw `A LocalDataFileNode cannot be created from a ${typeof source} instance`;
    }
    const stats = gFS.fstatSync(handle);
    return new LocalDataFileNode(handle, stats);
  }
  get byteLength() {
    return Promise.resolve(this.stats.size);
  }
  close() {
    const handle = this.handle;
    kFsPromise.then(() => gFS.closeSync(handle));
    this.handle = null;
    this.stats = null;
  }
  async loadData(start = 0, end = this.stats.size) {
    await kFsPromise;
    const normalizedEnd = Math.min(end, this.stats.size);
    const length5 = normalizedEnd - start;
    const result = new Uint8Array(length5);
    let loaded = 0;
    while (loaded < length5) {
      loaded += await this.loadDataIntoBuffer(result, loaded, start + loaded, normalizedEnd);
    }
    return result.buffer;
  }
  loadDataIntoBuffer(buffer, offset, start, end) {
    return new Promise((resolve, reject) => {
      const length5 = end - start;
      gFS.read(this.handle, buffer, offset, length5, start, (err, bytesRead) => {
        if (err) {
          reject(err);
        } else {
          resolve(bytesRead);
        }
      });
    });
  }
};

// node_modules/@dekkai/data-source/build/lib/file/local/LocalDataFileDeno.js
var LocalDataFileDeno = class extends LocalDataFile {
  constructor(file, info) {
    super();
    this.file = file;
    this.info = info;
  }
  static async fromSource(source) {
    if (!(source instanceof URL) && typeof source !== "string") {
      throw `A LocalDataFileDeno cannot be created from a ${typeof source} instance`;
    }
    const stats = await Deno.stat(source);
    if (!stats.isFile) {
      throw `The path "${source} does not point to a file"`;
    }
    const file = await Deno.open(source, {read: true, write: false});
    return new LocalDataFileDeno(file, stats);
  }
  get byteLength() {
    return Promise.resolve(this.info.size);
  }
  close() {
    Deno.close(this.file.rid);
    this.file = null;
    this.info = null;
  }
  async loadData(start = 0, end = this.info.size) {
    const normalizedEnd = Math.min(end, this.info.size);
    const length5 = normalizedEnd - start;
    const result = new Uint8Array(length5);
    let loaded = 0;
    while (loaded < length5) {
      loaded += await this.loadDataIntoBuffer(result, loaded, start + loaded, normalizedEnd);
    }
    return result.buffer;
  }
  async loadDataIntoBuffer(buffer, offset, start, end) {
    const cursorPosition = await this.file.seek(start, Deno.SeekMode.Start);
    if (cursorPosition !== start) {
      throw "ERROR: Cannot seek to the desired position";
    }
    const result = new Uint8Array(end - start);
    const bytesRead = await this.file.read(result);
    buffer.set(result, offset);
    return bytesRead;
  }
};

// node_modules/@dekkai/data-source/build/lib/file/local/LocalDataFileBrowser.js
var LocalDataFileBrowser = class extends LocalDataFile {
  constructor(blob) {
    super();
    this.blob = blob;
  }
  static async fromSource(source) {
    return new LocalDataFileBrowser(source);
  }
  get byteLength() {
    return Promise.resolve(this.blob.size);
  }
  close() {
    this.blob = null;
  }
  async loadData(start = 0, end = this.blob.size) {
    const slice = this.blob.slice(start, Math.min(end, this.blob.size));
    return await this.loadBlob(slice);
  }
  loadBlob(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
};

// node_modules/@dekkai/data-source/build/lib/file/remote/RemoteDataFile.js
var RemoteDataFile = class extends EventEmitter {
  slice(start, end) {
    return new DataChunk(this, start, end);
  }
};
RemoteDataFile.LOADING_START = Symbol("DataFileEvents::LoadingStart");
RemoteDataFile.LOADING_PROGRESS = Symbol("DataFileEvents::LoadingProgress");
RemoteDataFile.LOADING_COMPLETE = Symbol("DataFileEvents::LoadingComplete");

// node_modules/@dekkai/data-source/build/lib/file/remote/RemoteDataFileBrowser.js
var kSizeOf4MB = 1024 * 1024 * 4;
var RemoteDataFileBrowser = class extends RemoteDataFile {
  constructor(source) {
    super();
    this._byteLength = null;
    this._bytesLoaded = 0;
    this._onLoadingComplete = null;
    this._isLoadingComplete = false;
    this.buffer = null;
    this.source = source;
    this._onLoadingComplete = {
      promise: null,
      resolve: null,
      reject: null,
      started: false
    };
    this._onLoadingComplete.promise = new Promise((resolve, reject) => {
      this._onLoadingComplete.resolve = resolve;
      this._onLoadingComplete.reject = reject;
    });
  }
  static async fromSource(source) {
    const result = new RemoteDataFileBrowser(source);
    await result.startDownloading();
    return result;
  }
  get byteLength() {
    if (this._byteLength === null) {
      return new Promise((resolve) => {
        const handleEvent = (e, byteLength) => {
          this.off(RemoteDataFile.LOADING_START, handleEvent);
          this._byteLength = byteLength;
          resolve(byteLength);
        };
        this.on(RemoteDataFile.LOADING_START, handleEvent);
      });
    }
    return Promise.resolve(this._byteLength);
  }
  get bytesLoaded() {
    return this._bytesLoaded;
  }
  get onLoadingComplete() {
    return this._onLoadingComplete.promise;
  }
  get isLoadingComplete() {
    return this._isLoadingComplete;
  }
  async startDownloading() {
    if (!this._onLoadingComplete.started) {
      this._onLoadingComplete.started = true;
      let response;
      try {
        response = await fetch(this.source);
      } catch (e) {
        this._onLoadingComplete.reject(e);
        throw e;
      }
      if (!response.ok) {
        const notOK = new Error("Network response was not ok");
        this._onLoadingComplete.reject(notOK);
        throw notOK;
      }
      setTimeout(() => this.readFileStream(response));
    }
  }
  async loadData(start = 0, end = this._byteLength) {
    if (this._isLoadingComplete && start >= this._byteLength) {
      return new ArrayBuffer(0);
    }
    if (this._bytesLoaded >= end || this._isLoadingComplete) {
      return this.buffer.slice(start, Math.min(end, this._bytesLoaded));
    }
    return new Promise((resolve) => {
      const handleEvent = (e, loaded) => {
        if (loaded >= end || e === RemoteDataFile.LOADING_COMPLETE) {
          this.off(RemoteDataFile.LOADING_PROGRESS, handleEvent);
          this.off(RemoteDataFile.LOADING_COMPLETE, handleEvent);
          resolve(this.buffer.slice(start, Math.min(end, loaded)));
        }
      };
      this.on(RemoteDataFile.LOADING_PROGRESS, handleEvent);
      this.on(RemoteDataFile.LOADING_COMPLETE, handleEvent);
    });
  }
  async readFileStream(response) {
    const contentLength = response.headers.get("content-length");
    if (contentLength !== null) {
      this._byteLength = parseInt(contentLength, 10);
      this.buffer = new ArrayBuffer(this._byteLength);
    } else {
      this._byteLength = -1;
      this.buffer = new ArrayBuffer(kSizeOf4MB);
    }
    this._bytesLoaded = 0;
    this.emit(RemoteDataFile.LOADING_START, this._byteLength);
    if (this._byteLength === 0) {
      this.emit(RemoteDataFile.LOADING_PROGRESS, this._bytesLoaded, this._byteLength);
      this._isLoadingComplete = true;
      this.emit(RemoteDataFile.LOADING_COMPLETE, this._byteLength);
      this._onLoadingComplete.resolve(this._byteLength);
    } else {
      const reader = response.body.getReader();
      let view = new Uint8Array(this.buffer);
      while (true) {
        try {
          const result = await reader.read();
          if (result.done) {
            this._byteLength = this._bytesLoaded;
            this._isLoadingComplete = true;
            this.emit(RemoteDataFile.LOADING_COMPLETE, this._byteLength);
            this._onLoadingComplete.resolve(this._byteLength);
            break;
          }
          if (this.buffer.byteLength < this._bytesLoaded + result.value.byteLength) {
            const oldView = view;
            this.buffer = new ArrayBuffer(this._bytesLoaded + Math.max(result.value.byteLength, kSizeOf4MB));
            view = new Uint8Array(this.buffer);
            view.set(oldView, 0);
          }
          view.set(result.value, this._bytesLoaded);
          this.emit(RemoteDataFile.LOADING_PROGRESS, this._bytesLoaded, this._byteLength);
          this._bytesLoaded += result.value.length;
        } catch (e) {
          this._onLoadingComplete.reject(e);
          throw e;
        }
      }
    }
  }
};

// node_modules/@dekkai/data-source/build/lib/file/remote/RemoteDataFileNode.js
var import_moduleLoader2 = __toModule(require_moduleLoader());
var gHTTP = null;
var gHTTPS = null;
var gURL = null;
var kLibPromise = (isNodeJS() ? Promise.all([(0, import_moduleLoader2.loadModule)("http"), (0, import_moduleLoader2.loadModule)("https"), (0, import_moduleLoader2.loadModule)("url")]) : Promise.resolve([null, null])).then((libs) => {
  gHTTP = libs[0];
  gHTTPS = libs[1];
  gURL = libs[2];
});
var kSizeOf4MB2 = 1024 * 1024 * 4;
var RemoteDataFileNode = class extends RemoteDataFile {
  constructor(source) {
    super();
    this._byteLength = null;
    this._bytesLoaded = null;
    this._onLoadingComplete = null;
    this._isLoadingComplete = false;
    this.buffer = null;
    this.source = source;
    this._onLoadingComplete = {
      promise: null,
      resolve: null,
      reject: null,
      started: false
    };
    this._onLoadingComplete.promise = new Promise((resolve, reject) => {
      this._onLoadingComplete.resolve = resolve;
      this._onLoadingComplete.reject = reject;
    });
  }
  static async fromSource(source) {
    const result = new RemoteDataFileNode(source);
    await result.startDownloading();
    return result;
  }
  get byteLength() {
    if (this._byteLength === null) {
      return new Promise((resolve) => {
        const handleEvent = (e, byteLength) => {
          this.off(RemoteDataFile.LOADING_START, handleEvent);
          this._byteLength = byteLength;
          resolve(byteLength);
        };
        this.on(RemoteDataFile.LOADING_START, handleEvent);
      });
    }
    return Promise.resolve(this._byteLength);
  }
  get bytesLoaded() {
    return this._bytesLoaded;
  }
  get onLoadingComplete() {
    return this._onLoadingComplete.promise;
  }
  get isLoadingComplete() {
    return this._isLoadingComplete;
  }
  startDownloading() {
    return new Promise((resolve, reject) => {
      kLibPromise.then(() => {
        const url = this.source instanceof gURL.URL ? this.source : gURL.parse(this.source);
        const protocol = url.protocol === "https" ? gHTTPS : gHTTP;
        protocol.get(this.source, (response) => {
          if (response.statusCode < 200 || response.statusCode >= 300) {
            response.resume();
            const notOK = new Error("Network response was not ok");
            this._onLoadingComplete.reject(notOK);
            reject(notOK);
            return;
          }
          resolve();
          setTimeout(() => this.readFileStream(response));
        });
      });
    });
  }
  async loadData(start = 0, end = this._byteLength) {
    if (this._isLoadingComplete && start >= this._byteLength) {
      return new ArrayBuffer(0);
    }
    if (this._bytesLoaded >= end || this._isLoadingComplete) {
      return this.buffer.slice(start, Math.min(end, this._bytesLoaded));
    }
    return new Promise((resolve) => {
      const handleEvent = (e, loaded) => {
        if (loaded >= end || e === RemoteDataFile.LOADING_COMPLETE) {
          this.off(RemoteDataFile.LOADING_PROGRESS, handleEvent);
          this.off(RemoteDataFile.LOADING_COMPLETE, handleEvent);
          resolve(this.buffer.slice(start, Math.min(end, loaded)));
        }
      };
      this.on(RemoteDataFile.LOADING_PROGRESS, handleEvent);
      this.on(RemoteDataFile.LOADING_COMPLETE, handleEvent);
    });
  }
  async readFileStream(response) {
    const contentLength = response.headers["content-length"];
    if (contentLength !== null && contentLength !== void 0) {
      this._byteLength = parseInt(contentLength, 10);
      this.buffer = new ArrayBuffer(this._byteLength);
    } else {
      this._byteLength = -1;
      this.buffer = new ArrayBuffer(kSizeOf4MB2);
    }
    this._bytesLoaded = 0;
    this.emit(RemoteDataFile.LOADING_START, this._byteLength);
    if (this._byteLength === 0) {
      this.emit(RemoteDataFile.LOADING_PROGRESS, this._bytesLoaded, this._byteLength);
      this._isLoadingComplete = true;
      this.emit(RemoteDataFile.LOADING_COMPLETE, this._byteLength);
      this._onLoadingComplete.resolve(this._byteLength);
      response.resume();
    } else {
      let view = new Uint8Array(this.buffer);
      response.on("error", (error) => {
        this._onLoadingComplete.reject(error);
        throw error;
      });
      response.on("data", (chunk) => {
        if (this.buffer.byteLength < this._bytesLoaded + chunk.byteLength) {
          const oldView = view;
          this.buffer = new ArrayBuffer(this._bytesLoaded + Math.max(chunk.byteLength, kSizeOf4MB2));
          view = new Uint8Array(this.buffer);
          view.set(oldView, 0);
        }
        view.set(chunk, this._bytesLoaded);
        this.emit(RemoteDataFile.LOADING_PROGRESS, this._bytesLoaded, this._byteLength);
        this._bytesLoaded += chunk.byteLength;
      });
      response.on("end", () => {
        this._byteLength = this._bytesLoaded;
        this._isLoadingComplete = true;
        this.emit(RemoteDataFile.LOADING_COMPLETE, this._byteLength);
        this._onLoadingComplete.resolve(this._byteLength);
      });
    }
  }
};

// node_modules/@dekkai/data-source/build/lib/file/DataFile.js
var import_moduleLoader3 = __toModule(require_moduleLoader());
var DataFile = class {
  static async fromLocalSource(source) {
    if (isNodeJS()) {
      return LocalDataFileNode.fromSource(source);
    } else if (isDeno()) {
      return LocalDataFileDeno.fromSource(source);
    }
    return LocalDataFileBrowser.fromSource(source);
  }
  static async fromRemoteSource(source) {
    if (isNodeJS()) {
      return RemoteDataFileNode.fromSource(source);
    } else if (isDeno()) {
      return RemoteDataFileBrowser.fromSource(source);
    }
    return RemoteDataFileBrowser.fromSource(source);
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mod.js
var mod_exports7 = {};
__export(mod_exports7, {
  DebugMenu: () => DebugMenu,
  mouse: () => mod_exports5,
  picking: () => mod_exports6
});

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/mod.js
var mod_exports5 = {};
__export(mod_exports5, {
  DragModule: () => DragModule,
  DragPan: () => DragPan,
  DragRotation: () => DragRotation,
  DragTruck: () => DragTruck,
  MouseHandler: () => MouseHandler,
  ScrollDolly: () => ScrollDolly,
  kButton2Index: () => kButton2Index,
  kIndex2Button: () => kIndex2Button
});

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/drag/DragModule.js
var DragModule = class extends UXModule {
  constructor(viewport, enabled = false) {
    super();
    this.button = "primary";
    this.boundHandler = this.handleMouse.bind(this);
    this.viewport = viewport;
    this.enabled = enabled;
  }
  hookEvents() {
    this.viewport.mouseHandler.on(MouseHandler.events.move, this.boundHandler);
  }
  unhookEvents() {
    this.viewport.mouseHandler.off(MouseHandler.events.move, this.boundHandler);
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/drag/DragPan.js
var DragPan = class extends DragModule {
  handleMouse(event, state, delta) {
    if (state.buttons[this.button]) {
      const aspect = this.viewport.size[0] / this.viewport.size[1];
      const aov = this.viewport.camera.aov;
      const rotationX = -aov * (delta[1] / this.viewport.rect.height);
      const rotationY = -aov * (delta[0] / this.viewport.rect.width) * aspect;
      const r = quat_exports.fromEuler(quat_exports.create(), rotationX, rotationY, 0);
      this.viewport.camera.rotate(r);
      this.viewport.render();
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/drag/DragRotation.js
var DragRotation = class extends DragModule {
  constructor() {
    super(...arguments);
    this.button = "secondary";
  }
  handleMouse(event, state, delta) {
    if (state.buttons[this.button]) {
      const side = Math.min(this.viewport.size[0], this.viewport.size[1]);
      const rawRotation = quat_exports.fromEuler(quat_exports.create(), delta[1] / side * 90, delta[0] / side * 90, 0);
      const camInverse = quat_exports.invert(quat_exports.create(), this.viewport.camera.rotation);
      const rotation = quat_exports.mul(quat_exports.create(), camInverse, rawRotation);
      quat_exports.mul(rotation, rotation, this.viewport.camera.rotation);
      this.viewport.graph.rotate(rotation);
      this.viewport.render();
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/drag/DragTruck.js
var DragTruck = class extends DragModule {
  handleMouse(event, state, delta) {
    if (state.buttons[this.button]) {
      const position = this.viewport.camera.position;
      const rotated = vec3_exports.transformQuat(vec3_exports.create(), position, this.viewport.camera.rotation);
      const distance4 = Math.abs(rotated[2]);
      const vertical = this.viewport.camera.aovRad * distance4;
      const pixelToWorld = vertical / this.viewport.rect.height;
      const delta3 = vec3_exports.fromValues(delta[0] * pixelToWorld, delta[1] * -pixelToWorld, 0);
      const inverse4 = quat_exports.invert(quat_exports.create(), this.viewport.camera.rotation);
      vec3_exports.transformQuat(delta3, delta3, inverse4);
      vec3_exports.add(position, position, delta3);
      this.viewport.camera.position = position;
      this.viewport.render();
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/scroll/ScrollModule.js
var ScrollModule = class extends UXModule {
  constructor(viewport, enabled = false) {
    super();
    this.speed = 4.5;
    this.boundHandler = this.handleMouse.bind(this);
    this.viewport = viewport;
    this.enabled = enabled;
  }
  hookEvents() {
    this.viewport.mouseHandler.on(MouseHandler.events.wheel, this.boundHandler);
  }
  unhookEvents() {
    this.viewport.mouseHandler.off(MouseHandler.events.wheel, this.boundHandler);
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/mouse/scroll/ScrollDolly.js
var ScrollDolly = class extends ScrollModule {
  handleMouse(event, state, delta) {
    const invProjection = mat4_exports.invert(mat4_exports.create(), this.viewport.camera.projectionMatrix);
    const invView = mat4_exports.invert(mat4_exports.create(), this.viewport.camera.viewMatrix);
    const viewportCoords = vec2_exports.fromValues(state.canvasCoords[0] * this.viewport.pixelRatio, state.canvasCoords[1] * this.viewport.pixelRatio);
    const worldCoords = vec2_exports.fromValues(2 * viewportCoords[0] / this.viewport.size[0] - 1, 1 - 2 * viewportCoords[1] / this.viewport.size[1]);
    const rayClip = vec4_exports.fromValues(worldCoords[0], worldCoords[1], -1, 1);
    const rayEye = vec4_exports.transformMat4(vec4_exports.create(), rayClip, invProjection);
    rayEye[2] = -1;
    rayEye[3] = 0;
    const rayWorld4 = vec4_exports.transformMat4(vec4_exports.create(), rayEye, invView);
    const rayWorld = vec3_exports.fromValues(rayWorld4[0], rayWorld4[1], rayWorld4[2]);
    vec3_exports.normalize(rayWorld, rayWorld);
    const position = this.viewport.camera.position;
    const zMult = position[2] / rayWorld[2];
    const rayZeroZ = vec3_exports.fromValues(position[0] + rayWorld[0] * zMult, position[1] + rayWorld[1] * zMult, 0);
    const distance4 = Math.max(100, vec3_exports.distance(position, rayZeroZ));
    const speed = this.speed * (distance4 / 100);
    vec3_exports.scaleAndAdd(position, position, rayWorld, delta * speed);
    this.viewport.camera.position = position;
    this.viewport.render();
  }
};

// node_modules/@uncharted.software/grafer/build/lib/UX/picking/mod.js
var mod_exports6 = {};
__export(mod_exports6, {
  PickingManager: () => PickingManager
});

// node_modules/@uncharted.software/grafer/build/lib/UX/debug/DebugMenu.js
var import_tweakpane = __toModule(require_tweakpane());
var DebugMenu = class {
  constructor(viewport) {
    this.viewport = viewport;
    const layers = viewport.graph.layers;
    this.pane = new import_tweakpane.default({title: "Debug Menu", expanded: false});
    for (let i = 0, n = layers.length; i < n; ++i) {
      const layer = layers[i];
      const layerFolder = this.pane.addFolder({title: layer.name, expanded: false});
      this.addLayerOptions(layerFolder, layer);
    }
    this.uxFolder = null;
    this.pane.on("change", () => {
      this.viewport.render();
    });
  }
  registerUX(ux) {
    if (!this.uxFolder) {
      this.uxFolder = this.pane.addFolder({title: "UX", expanded: false});
    }
    const folder = this.uxFolder.addFolder({title: ux.constructor.name, expanded: false});
    folder.addInput(ux, "enabled");
    if ("button" in ux) {
      const keys = Object.keys(kButton2Index);
      const options = {};
      for (let i = 0, n = keys.length; i < n; ++i) {
        options[keys[i]] = keys[i];
      }
      folder.addInput(ux, "button", {options});
    }
    if ("speed" in ux) {
      folder.addInput(ux, "speed", {min: -100, max: 100});
    }
  }
  addLayerOptions(folder, layer) {
    folder.addInput(layer, "enabled");
    folder.addInput(layer, "nearDepth", {min: 0, max: 1, label: "near"});
    folder.addInput(layer, "farDepth", {min: 0, max: 1, label: "far"});
    if (layer.nodes) {
      const nodesFolder = folder.addFolder({title: "Nodes", expanded: false});
      this.addLayerElementOptions(nodesFolder, layer, "nodes");
    }
    if (layer.labels) {
      const labelsFolder = folder.addFolder({title: "Labels", expanded: false});
      this.addLayerElementOptions(labelsFolder, layer, "labels");
    }
    if (layer.edges) {
      const edgesFolder = folder.addFolder({title: "Edges", expanded: false});
      this.addLayerElementOptions(edgesFolder, layer, "edges");
    }
  }
  addLayerElementOptions(folder, layer, key) {
    const element = layer[key];
    const options = {
      enabled: [element, {}],
      blendMode: [element, {
        options: {
          normal: LayerRenderableBlendMode.NORMAL,
          additive: LayerRenderableBlendMode.ADDITIVE,
          none: LayerRenderableBlendMode.NONE
        }
      }],
      pixelSizing: [element, {label: "pixel sizing "}],
      billboard: [element, {label: "billboarding"}],
      minSize: [element, {label: "min size"}],
      maxSize: [element, {label: "max size"}],
      gravity: [element, {min: -2, max: 2}],
      alpha: [element, {min: 0, max: 1}],
      fade: [element, {min: 0, max: 1}],
      desaturate: [element, {min: 0, max: 1}],
      [`${key}NearDepth`]: [layer, {min: 0, max: 1, label: "near"}],
      [`${key}FarDepth`]: [layer, {min: 0, max: 1, label: "far"}]
    };
    const keys = Object.keys(options);
    for (let i = 0, n = keys.length; i < n; ++i) {
      if (keys[i] in options[keys[i]][0]) {
        folder.addInput(options[keys[i]][0], keys[i], options[keys[i]][1]);
      }
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/graph/Layer.js
var Layer = class extends EventEmitter {
  constructor(nodes, edges, labels, name = "Layer") {
    super();
    this._nearDepth = 0;
    this._farDepth = 1;
    this._nodesNearDepth = 0;
    this._nodesFarDepth = 1;
    this._edgesNearDepth = 0;
    this._edgesFarDepth = 1;
    this._labelsNearDepth = 0;
    this._labelsFarDepth = 1;
    this.enabled = true;
    this._nodes = nodes;
    this._edges = edges;
    this._labels = labels;
    this.name = name;
    if (this._nodes) {
      this._nodes.on(EventEmitter.omniEvent, (event, id) => {
        this.emit(event, {
          layer: this.name,
          type: "node",
          id
        });
      });
    }
    if (this._edges) {
      this._edges.on(EventEmitter.omniEvent, (event, id) => {
        this.emit(event, {
          layer: this.name,
          type: "edge",
          id
        });
      });
    }
  }
  get nodes() {
    return this._nodes;
  }
  get edges() {
    return this._edges;
  }
  get labels() {
    return this._labels;
  }
  get nearDepth() {
    return this._nearDepth;
  }
  set nearDepth(value) {
    this._nearDepth = value;
    this.updateLabelsDepths();
    this.updateNodesDepths();
    this.updateEdgesDepths();
  }
  get farDepth() {
    return this._farDepth;
  }
  set farDepth(value) {
    this._farDepth = value;
    this.updateLabelsDepths();
    this.updateNodesDepths();
    this.updateEdgesDepths();
  }
  get nodesNearDepth() {
    return this._nodesNearDepth;
  }
  set nodesNearDepth(value) {
    this._nodesNearDepth = value;
    this.updateNodesDepths();
  }
  get nodesFarDepth() {
    return this._nodesFarDepth;
  }
  set nodesFarDepth(value) {
    this._nodesFarDepth = value;
    this.updateNodesDepths();
  }
  get edgesNearDepth() {
    return this._edgesNearDepth;
  }
  set edgesNearDepth(value) {
    this._edgesNearDepth = value;
    this.updateEdgesDepths();
  }
  get edgesFarDepth() {
    return this._edgesFarDepth;
  }
  set edgesFarDepth(value) {
    this._edgesFarDepth = value;
    this.updateEdgesDepths();
  }
  get labelsNearDepth() {
    return this._labelsNearDepth;
  }
  set labelsNearDepth(value) {
    this._labelsNearDepth = value;
    this.updateLabelsDepths();
  }
  get labelsFarDepth() {
    return this._labelsFarDepth;
  }
  set labelsFarDepth(value) {
    this._labelsFarDepth = value;
    this.updateLabelsDepths();
  }
  render(context, mode, uniforms) {
    this.renderEdges(context, mode, uniforms);
    this.renderNodes(context, mode, uniforms);
    this.renderLabels(context, mode, uniforms);
  }
  renderNodes(context, mode, uniforms) {
    if (this._nodes && this._nodes.enabled) {
      this._nodes.render(context, mode, uniforms);
    }
  }
  renderEdges(context, mode, uniforms) {
    if (this._edges && this._edges.enabled) {
      this._edges.render(context, mode, uniforms);
    }
  }
  renderLabels(context, mode, uniforms) {
    if (this._labels && this.labels.enabled) {
      this._labels.render(context, mode, uniforms);
    }
  }
  updateLabelsDepths() {
    if (this._labels) {
      const depthRange = this._farDepth - this._nearDepth;
      this._labels.nearDepth = this._nearDepth + depthRange * this._labelsNearDepth;
      this._labels.farDepth = this._nearDepth + depthRange * this._labelsFarDepth;
    }
  }
  updateNodesDepths() {
    if (this._nodes) {
      const depthRange = this._farDepth - this._nearDepth;
      this._nodes.nearDepth = this._nearDepth + depthRange * this._nodesNearDepth;
      this._nodes.farDepth = this._nearDepth + depthRange * this._nodesFarDepth;
    }
  }
  updateEdgesDepths() {
    if (this._edges) {
      const depthRange = this._farDepth - this._nearDepth;
      this._edges.nearDepth = this._nearDepth + depthRange * this._edgesNearDepth;
      this._edges.farDepth = this._nearDepth + depthRange * this._edgesFarDepth;
    }
  }
};

// node_modules/@uncharted.software/grafer/build/lib/grafer/GraferController.js
var GraferController = class extends EventEmitter {
  get viewport() {
    return this._viewport;
  }
  get context() {
    return this.viewport.context;
  }
  get hasColors() {
    return this._hasColors;
  }
  constructor(canvas, data) {
    super();
    this._viewport = new Viewport(canvas);
    this._generateIdPrev = 0;
    const dolly = new ScrollDolly(this._viewport);
    dolly.enabled = true;
    const truck = new DragTruck(this._viewport);
    truck.button = "primary";
    truck.enabled = true;
    const rotation = new DragRotation(this._viewport);
    rotation.button = "secondary";
    rotation.enabled = true;
    const pan = new DragPan(this._viewport);
    pan.button = "auxiliary";
    pan.enabled = true;
    if (data) {
      this.loadData(data);
    }
  }
  generateId() {
    return this._generateIdPrev++;
  }
  loadData(data) {
    const pointsRadiusMapping = {radius: (entry) => "radius" in entry ? entry.radius : 1};
    this.loadColors(data);
    this.loadPoints(data, pointsRadiusMapping);
    this.loadLayers(data, pointsRadiusMapping);
    if (this._viewport.graph) {
      this._viewport.camera.position = [0, 0, -this._viewport.graph.bbCornerLength * 2];
      this._viewport.camera.farPlane = Math.max(this._viewport.graph.bbCornerLength * 4, 1e3);
      this._viewport.render();
    }
  }
  render() {
    if (this._viewport.graph) {
      this._viewport.render();
    } else {
      throw new Error("No graph found.");
    }
  }
  concatenateNodesFromLayers(data) {
    const nodes = [];
    const layers = data.layers;
    for (let i = 0, n = layers.length; i < n; ++i) {
      const data2 = layers[i].nodes?.data ?? layers[i].labels?.data;
      for (let ii = 0, nn = data2.length; ii < nn; ++ii) {
        data2[ii].point = this.generateId();
      }
      nodes.push(data2);
    }
    return nodes;
  }
  loadLayers(data, pointsRadiusMapping) {
    if (data.layers && data.layers.length) {
      const layers = data.layers;
      this._hasColors = Boolean(data.colors);
      if (!Boolean(this._viewport.graph)) {
        const nodes = this.concatenateNodesFromLayers(data);
        this._viewport.graph = Graph.createGraphFromNodes(this.context, nodes, pointsRadiusMapping);
        this._viewport.graph.picking = new PickingManager(this._viewport.context, this._viewport.mouseHandler);
      }
      for (let i = 0, n = layers.length; i < n; ++i) {
        const name = layers[i].name || `Layer_${i}`;
        this.addLayer(layers[i], name, this.hasColors);
      }
    }
  }
  addLayer(layer, name, useColors) {
    if (useColors && !this.hasColors) {
      throw new Error("No colors found.");
    }
    useColors = useColors ?? this.hasColors;
    const hasPoints = Boolean(this._viewport.graph);
    const graph2 = this._viewport.graph;
    const nodesData = layer.nodes;
    const nodes = this.addNodes(nodesData, useColors);
    const edgesData = layer.edges;
    if (edgesData && !nodes && !hasPoints) {
      throw new Error("Cannot load an edge-only layer in a graph without points!");
    }
    const edges = this.addEdges(edgesData, nodes, useColors);
    const layersData = layer.labels;
    const labels = this.addLabels(layersData, useColors);
    if (nodes || edges || labels) {
      const layer2 = new Layer(nodes, edges, labels, name);
      graph2.layers.unshift(layer2);
      layer2.on(EventEmitter.omniEvent, (...args) => this.emit(...args));
    }
  }
  removeLayerByName(name) {
    const {layers} = this._viewport.graph;
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      if (layer.name === name) {
        this.removeLayerByIndex(i);
        i--;
      }
    }
  }
  removeLayerByIndex(index) {
    const {layers} = this._viewport.graph;
    if (index >= 0 && index < layers.length) {
      layers.splice(index, 1);
    }
  }
  addLabels(labelsData, hasColors) {
    const pickingManager = this._viewport.graph.picking;
    const context = this.context;
    const graph2 = this._viewport.graph;
    let labels = null;
    if (labelsData) {
      const labelsType = labelsData.type ? labelsData.type : "PointLabel";
      const LabelsClass = mod_exports3.types[labelsType] || mod_exports3.PointLabel;
      const labelsMappings = Object.assign({}, LabelsClass.defaultMappings, labelsData.mappings);
      if (!hasColors) {
        const colorMapping = labelsMappings.color;
        labelsMappings.color = (entry, i) => {
          const value = colorMapping(entry, i);
          if (typeof value !== "number") {
            return this._viewport.colorRegisrty.registerColor(value);
          }
          return value;
        };
      }
      labels = new LabelsClass(context, graph2, labelsData.data, labelsMappings, pickingManager);
      if ("options" in labelsData) {
        const options = labelsData.options;
        const keys = Object.keys(options);
        for (const key of keys) {
          if (key in labels) {
            labels[key] = options[key];
          }
        }
      }
    }
    return labels;
  }
  addEdges(edgesData, nodes, hasColors) {
    const pickingManager = this._viewport.graph.picking;
    const context = this.context;
    const graph2 = this._viewport.graph;
    const hasPoints = Boolean(this._viewport.graph);
    let edges = null;
    if (edgesData) {
      const edgesType = edgesData.type ? edgesData.type : "Straight";
      const EdgesClass = mod_exports2.types[edgesType] || mod_exports2.Straight;
      const edgesMappings = Object.assign({}, EdgesClass.defaultMappings, edgesData.mappings);
      if (!hasPoints) {
        const sourceMapping = edgesMappings.source;
        edgesMappings.source = (entry, i) => {
          return nodes.getEntryPointID(sourceMapping(entry, i));
        };
        const targetMapping = edgesMappings.target;
        edgesMappings.target = (entry, i) => {
          return nodes.getEntryPointID(targetMapping(entry, i));
        };
      }
      if (!hasColors) {
        const sourceColorMapping = edgesMappings.sourceColor;
        edgesMappings.sourceColor = (entry, i) => {
          const value = sourceColorMapping(entry, i);
          if (typeof value !== "number") {
            return this._viewport.colorRegisrty.registerColor(value);
          }
          return value;
        };
        const targetColorMapping = edgesMappings.targetColor;
        edgesMappings.targetColor = (entry, i) => {
          const value = targetColorMapping(entry, i);
          if (typeof value !== "number") {
            return this._viewport.colorRegisrty.registerColor(value);
          }
          return value;
        };
      }
      edges = new EdgesClass(context, graph2, edgesData.data, edgesMappings, pickingManager);
      if ("options" in edgesData) {
        const options = edgesData.options;
        const keys = Object.keys(options);
        for (const key of keys) {
          if (key in edges) {
            edges[key] = options[key];
          }
        }
      }
    }
    return edges;
  }
  addNodes(nodesData, hasColors) {
    const pickingManager = this._viewport.graph.picking;
    const context = this.context;
    const graph2 = this._viewport.graph;
    let nodes = null;
    if (nodesData) {
      const nodesType = nodesData.type ? nodesData.type : "Circle";
      const NodesClass = mod_exports.types[nodesType] || mod_exports.Circle;
      const nodesMappings = Object.assign({}, NodesClass.defaultMappings, nodesData.mappings);
      if (!hasColors) {
        const colorMapping = nodesMappings.color;
        nodesMappings.color = (entry, i) => {
          const value = colorMapping(entry, i);
          if (typeof value !== "number") {
            return this._viewport.colorRegisrty.registerColor(value);
          }
          return value;
        };
      }
      nodes = new NodesClass(context, graph2, nodesData.data, nodesMappings, pickingManager);
      if ("options" in nodesData) {
        const options = nodesData.options;
        const keys = Object.keys(options);
        for (const key of keys) {
          if (key in nodes) {
            nodes[key] = options[key];
          }
        }
      }
    }
    return nodes;
  }
  loadPoints(data, pointsRadiusMapping) {
    if (data.points) {
      const mappings = Object.assign({}, pointsRadiusMapping, data.points.mappings);
      this._viewport.graph = new Graph(this._viewport.context, data.points.data, mappings);
      this._viewport.graph.picking = new PickingManager(this._viewport.context, this._viewport.mouseHandler);
    }
  }
  loadColors(data) {
    if (data.colors) {
      const colors = data.colors;
      const colorRegisrty = this._viewport.colorRegisrty;
      for (let i = 0, n = colors.length; i < n; ++i) {
        colorRegisrty.registerColor(colors[i]);
      }
    } else {
      this._viewport.colorRegisrty.registerColor("#d8dee9");
    }
  }
};

// node_modules/lit-html/lib/modify-template.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var walkerNodeFilter = 133;
function removeNodesFromTemplate(template, nodesToRemove) {
  const {element: {content}, parts: parts2} = template;
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts2);
  let part = parts2[partIndex];
  let nodeIndex = -1;
  let removeCount = 0;
  const nodesToRemoveInTemplate = [];
  let currentRemovingNode = null;
  while (walker.nextNode()) {
    nodeIndex++;
    const node = walker.currentNode;
    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    }
    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node);
      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    }
    if (currentRemovingNode !== null) {
      removeCount++;
    }
    while (part !== void 0 && part.index === nodeIndex) {
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
      partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
      part = parts2[partIndex];
    }
  }
  nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
var countNodes = (node) => {
  let count = node.nodeType === 11 ? 0 : 1;
  const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
  while (walker.nextNode()) {
    count++;
  }
  return count;
};
var nextActiveIndexInTemplateParts = (parts2, startIndex = -1) => {
  for (let i = startIndex + 1; i < parts2.length; i++) {
    const part = parts2[i];
    if (isTemplatePartActive(part)) {
      return i;
    }
  }
  return -1;
};
function insertNodeIntoTemplate(template, node, refNode = null) {
  const {element: {content}, parts: parts2} = template;
  if (refNode === null || refNode === void 0) {
    content.appendChild(node);
    return;
  }
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts2);
  let insertCount = 0;
  let walkerIndex = -1;
  while (walker.nextNode()) {
    walkerIndex++;
    const walkerNode = walker.currentNode;
    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }
    while (partIndex !== -1 && parts2[partIndex].index === walkerIndex) {
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts2[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
        }
        return;
      }
      partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
    }
  }
}

// node_modules/lit-html/lib/shady-render.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
var compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === "undefined") {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === "undefined") {
  console.warn(`Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.`);
  compatibleShadyCSSVersion = false;
}
var shadyTemplateFactory = (scopeName) => (result) => {
  const cacheKey = getTemplateCacheKey(result.type, scopeName);
  let templateCache = templateCaches.get(cacheKey);
  if (templateCache === void 0) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(cacheKey, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== void 0) {
    return template;
  }
  const key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === void 0) {
    const element = result.getTemplateElement();
    if (compatibleShadyCSSVersion) {
      window.ShadyCSS.prepareTemplateDom(element, scopeName);
    }
    template = new Template(result, element);
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
};
var TEMPLATE_TYPES = ["html", "svg"];
var removeStylesFromLitTemplates = (scopeName) => {
  TEMPLATE_TYPES.forEach((type) => {
    const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
    if (templates !== void 0) {
      templates.keyString.forEach((template) => {
        const {element: {content}} = template;
        const styles = new Set();
        Array.from(content.querySelectorAll("style")).forEach((s) => {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};
var shadyRenderSet = new Set();
var prepareTemplateStyles = (scopeName, renderedDOM, template) => {
  shadyRenderSet.add(scopeName);
  const templateElement = !!template ? template.element : document.createElement("template");
  const styles = renderedDOM.querySelectorAll("style");
  const {length: length5} = styles;
  if (length5 === 0) {
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }
  const condensedStyle = document.createElement("style");
  for (let i = 0; i < length5; i++) {
    const style2 = styles[i];
    style2.parentNode.removeChild(style2);
    condensedStyle.textContent += style2.textContent;
  }
  removeStylesFromLitTemplates(scopeName);
  const content = templateElement.content;
  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  }
  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  const style = content.querySelector("style");
  if (window.ShadyCSS.nativeShadow && style !== null) {
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    content.insertBefore(condensedStyle, content.firstChild);
    const removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
var render2 = (result, container, options) => {
  if (!options || typeof options !== "object" || !options.scopeName) {
    throw new Error("The `scopeName` option is required.");
  }
  const scopeName = options.scopeName;
  const hasRendered = parts.has(container);
  const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11 && !!container.host;
  const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
  const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render(result, renderContainer, Object.assign({templateFactory: shadyTemplateFactory(scopeName)}, options));
  if (firstScopeRender) {
    const part = parts.get(renderContainer);
    parts.delete(renderContainer);
    const template = part.value instanceof TemplateInstance ? part.value.template : void 0;
    prepareTemplateStyles(scopeName, renderContainer, template);
    removeNodes(container, container.firstChild);
    container.appendChild(renderContainer);
    parts.set(container, part);
  }
  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

// node_modules/lit-element/lib/updating-element.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
window.JSCompiler_renameProperty = (prop, _obj) => prop;
var defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? "" : null;
      case Object:
      case Array:
        return value == null ? value : JSON.stringify(value);
    }
    return value;
  },
  fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;
      case Number:
        return value === null ? null : Number(value);
      case Object:
      case Array:
        return JSON.parse(value);
    }
    return value;
  }
};
var notEqual = (value, old) => {
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var finalized = "finalized";
var UpdatingElement = class extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const attributes = [];
    this._classProperties.forEach((v, p) => {
      const attr = this._attributeNameForProperty(p, v);
      if (attr !== void 0) {
        this._attributeToPropertyMap.set(attr, p);
        attributes.push(attr);
      }
    });
    return attributes;
  }
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = new Map();
      const superProperties = Object.getPrototypeOf(this)._classProperties;
      if (superProperties !== void 0) {
        superProperties.forEach((v, k) => this._classProperties.set(k, v));
      }
    }
  }
  static createProperty(name, options = defaultPropertyDeclaration) {
    this._ensureClassProperties();
    this._classProperties.set(name, options);
    if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
      return;
    }
    const key = typeof name === "symbol" ? Symbol() : `__${name}`;
    const descriptor = this.getPropertyDescriptor(name, key, options);
    if (descriptor !== void 0) {
      Object.defineProperty(this.prototype, name, descriptor);
    }
  }
  static getPropertyDescriptor(name, key, options) {
    return {
      get() {
        return this[key];
      },
      set(value) {
        const oldValue = this[name];
        this[key] = value;
        this.requestUpdateInternal(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(name) {
    return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
  }
  static finalize() {
    const superCtor = Object.getPrototypeOf(this);
    if (!superCtor.hasOwnProperty(finalized)) {
      superCtor.finalize();
    }
    this[finalized] = true;
    this._ensureClassProperties();
    this._attributeToPropertyMap = new Map();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...Object.getOwnPropertyNames(props),
        ...typeof Object.getOwnPropertySymbols === "function" ? Object.getOwnPropertySymbols(props) : []
      ];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
  }
  static _attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
  }
  static _valueHasChanged(value, old, hasChanged = notEqual) {
    return hasChanged(value, old);
  }
  static _propertyValueFromAttribute(value, options) {
    const type = options.type;
    const converter = options.converter || defaultConverter;
    const fromAttribute = typeof converter === "function" ? converter : converter.fromAttribute;
    return fromAttribute ? fromAttribute(value, type) : value;
  }
  static _propertyValueToAttribute(value, options) {
    if (options.reflect === void 0) {
      return;
    }
    const type = options.type;
    const converter = options.converter;
    const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
    return toAttribute(value, type);
  }
  initialize() {
    this._updateState = 0;
    this._updatePromise = new Promise((res) => this._enableUpdatingResolver = res);
    this._changedProperties = new Map();
    this._saveInstanceProperties();
    this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        const value = this[p];
        delete this[p];
        if (!this._instanceProperties) {
          this._instanceProperties = new Map();
        }
        this._instanceProperties.set(p, value);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((v, p) => this[p] = v);
    this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    if (this._enableUpdatingResolver !== void 0) {
      this._enableUpdatingResolver();
      this._enableUpdatingResolver = void 0;
    }
  }
  disconnectedCallback() {
  }
  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      this._attributeToProperty(name, value);
    }
  }
  _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    const ctor = this.constructor;
    const attr = ctor._attributeNameForProperty(name, options);
    if (attr !== void 0) {
      const attrValue = ctor._propertyValueToAttribute(value, options);
      if (attrValue === void 0) {
        return;
      }
      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
    }
  }
  _attributeToProperty(name, value) {
    if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
      return;
    }
    const ctor = this.constructor;
    const propName = ctor._attributeToPropertyMap.get(name);
    if (propName !== void 0) {
      const options = ctor.getPropertyOptions(propName);
      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
      this[propName] = ctor._propertyValueFromAttribute(value, options);
      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
    }
  }
  requestUpdateInternal(name, oldValue, options) {
    let shouldRequestUpdate = true;
    if (name !== void 0) {
      const ctor = this.constructor;
      options = options || ctor.getPropertyOptions(name);
      if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
        if (!this._changedProperties.has(name)) {
          this._changedProperties.set(name, oldValue);
        }
        if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
          if (this._reflectingProperties === void 0) {
            this._reflectingProperties = new Map();
          }
          this._reflectingProperties.set(name, options);
        }
      } else {
        shouldRequestUpdate = false;
      }
    }
    if (!this._hasRequestedUpdate && shouldRequestUpdate) {
      this._updatePromise = this._enqueueUpdate();
    }
  }
  requestUpdate(name, oldValue) {
    this.requestUpdateInternal(name, oldValue);
    return this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
    try {
      await this._updatePromise;
    } catch (e) {
    }
    const result = this.performUpdate();
    if (result != null) {
      await result;
    }
    return !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & STATE_UPDATE_REQUESTED;
  }
  get hasUpdated() {
    return this._updateState & STATE_HAS_UPDATED;
  }
  performUpdate() {
    if (!this._hasRequestedUpdate) {
      return;
    }
    if (this._instanceProperties) {
      this._applyInstanceProperties();
    }
    let shouldUpdate = false;
    const changedProperties = this._changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.update(changedProperties);
      } else {
        this._markUpdated();
      }
    } catch (e) {
      shouldUpdate = false;
      this._markUpdated();
      throw e;
    }
    if (shouldUpdate) {
      if (!(this._updateState & STATE_HAS_UPDATED)) {
        this._updateState = this._updateState | STATE_HAS_UPDATED;
        this.firstUpdated(changedProperties);
      }
      this.updated(changedProperties);
    }
  }
  _markUpdated() {
    this._changedProperties = new Map();
    this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(_changedProperties) {
    return true;
  }
  update(_changedProperties) {
    if (this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0) {
      this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
      this._reflectingProperties = void 0;
    }
    this._markUpdated();
  }
  updated(_changedProperties) {
  }
  firstUpdated(_changedProperties) {
  }
};
_a = finalized;
UpdatingElement[_a] = true;

// node_modules/lit-element/lib/decorators.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var legacyCustomElement = (tagName, clazz) => {
  window.customElements.define(tagName, clazz);
  return clazz;
};
var standardCustomElement = (tagName, descriptor) => {
  const {kind, elements} = descriptor;
  return {
    kind,
    elements,
    finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
var customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
function query2(selector, cache) {
  return (protoOrDescriptor, name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };
    if (cache) {
      const key = typeof name === "symbol" ? Symbol() : `__${name}`;
      descriptor.get = function() {
        if (this[key] === void 0) {
          this[key] = this.renderRoot.querySelector(selector);
        }
        return this[key];
      };
    }
    return name !== void 0 ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
var legacyQuery = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};
var standardQuery = (descriptor, element) => ({
  kind: "method",
  placement: "prototype",
  key: element.key,
  descriptor
});
var ElementProto = Element.prototype;
var legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;

// node_modules/lit-element/lib/css-tag.js
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult = class {
  constructor(cssText, safeToken) {
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
  }
  get styleSheet() {
    if (this._styleSheet === void 0) {
      if (supportsAdoptingStyleSheets) {
        this._styleSheet = new CSSStyleSheet();
        this._styleSheet.replaceSync(this.cssText);
      } else {
        this._styleSheet = null;
      }
    }
    return this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
};
var unsafeCSS = (value) => {
  return new CSSResult(String(value), constructionToken);
};
var textFromCSSResult = (value) => {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
var css = (strings, ...values) => {
  const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, constructionToken);
};

// node_modules/lit-element/lit-element.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window["litElementVersions"] || (window["litElementVersions"] = [])).push("2.4.0");
var renderNotImplemented = {};
var LitElement = class extends UpdatingElement {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
      return;
    }
    const userStyles = this.getStyles();
    if (Array.isArray(userStyles)) {
      const addStyles = (styles2, set7) => styles2.reduceRight((set8, s) => Array.isArray(s) ? addStyles(s, set8) : (set8.add(s), set8), set7);
      const set6 = addStyles(userStyles, new Set());
      const styles = [];
      set6.forEach((v) => styles.unshift(v));
      this._styles = styles;
    } else {
      this._styles = userStyles === void 0 ? [] : [userStyles];
    }
    this._styles = this._styles.map((s) => {
      if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
        const cssText = Array.prototype.slice.call(s.cssRules).reduce((css2, rule) => css2 + rule.cssText, "");
        return unsafeCSS(cssText);
      }
      return s;
    });
  }
  initialize() {
    super.initialize();
    this.constructor._getUniqueStyles();
    this.renderRoot = this.createRenderRoot();
    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
      this.adoptStyles();
    }
  }
  createRenderRoot() {
    return this.attachShadow({mode: "open"});
  }
  adoptStyles() {
    const styles = this.constructor._styles;
    if (styles.length === 0) {
      return;
    }
    if (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow) {
      window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
    } else if (supportsAdoptingStyleSheets) {
      this.renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    } else {
      this._needsShimAdoptedStyleSheets = true;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated && window.ShadyCSS !== void 0) {
      window.ShadyCSS.styleElement(this);
    }
  }
  update(changedProperties) {
    const templateResult = this.render();
    super.update(changedProperties);
    if (templateResult !== renderNotImplemented) {
      this.constructor.render(templateResult, this.renderRoot, {scopeName: this.localName, eventContext: this});
    }
    if (this._needsShimAdoptedStyleSheets) {
      this._needsShimAdoptedStyleSheets = false;
      this.constructor._styles.forEach((s) => {
        const style = document.createElement("style");
        style.textContent = s.cssText;
        this.renderRoot.appendChild(style);
      });
    }
  }
  render() {
    return renderNotImplemented;
  }
};
LitElement["finalized"] = true;
LitElement.render = render2;

// node_modules/@uncharted.software/grafer/build/lib/grafer/GraferView.js
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __decorate2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
var GraferView = class extends LitElement {
  constructor() {
    super(...arguments);
    this._controller = null;
  }
  static get styles() {
    return css`
            :host {
                display: flex;
                align-items: stretch;
            }
            #grafer_canvas {
                flex-grow: 1;
                max-width: 100%;
                max-height: 100%;
            }
        `;
  }
  static get properties() {
    return {
      points: {type: Object},
      colors: {type: Object},
      layers: {type: Object}
    };
  }
  get controller() {
    return this._controller;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this._controller = new GraferController(this.canvas, {
      points: this.points,
      colors: this.colors,
      layers: this.layers
    });
    this._controller.on(EventEmitter.omniEvent, (event, ...args) => {
      const eventName = typeof event === "symbol" ? event.description : event;
      this.dispatchEvent(new CustomEvent(eventName, {detail: args}));
    });
  }
  render() {
    return html`<canvas id="grafer_canvas"></canvas>`;
  }
};
__decorate2([
  query2("#grafer_canvas", true)
], GraferView.prototype, "canvas", 2);
GraferView = __decorate2([
  customElement("grafer-view")
], GraferView);

// examples/src/core/helpers.ts
var COLORS;
(function(COLORS2) {
  COLORS2["HORIZON_BLUE"] = "#5e81ac";
  COLORS2["BRASS_RED"] = "#d08770";
  COLORS2["PALE_GOLD"] = "#ebcb8b";
  COLORS2["GLACIER_BLUE"] = "#81a1c1";
})(COLORS || (COLORS = {}));
async function parseJSONL(input, cb) {
  const file = await DataFile.fromLocalSource(input);
  const sizeOf16MB = 16 * 1024 * 1024;
  const byteLength = await file.byteLength;
  const decoder = new TextDecoder();
  const lineBreak = "\n".charCodeAt(0);
  for (let offset = 0; offset <= byteLength; offset += sizeOf16MB) {
    const chunkEnd = Math.min(offset + sizeOf16MB, byteLength);
    const chunk = await file.loadData(offset, chunkEnd);
    const view = new DataView(chunk);
    let start = 0;
    for (let i = 0, n = chunk.byteLength; i < n; ++i) {
      if (view.getUint8(i) === lineBreak || offset + i === byteLength) {
        const statementBuffer = new Uint8Array(chunk, start, i - start);
        start = i + 1;
        const str6 = decoder.decode(statementBuffer);
        const json = JSON.parse(str6);
        cb(json);
      }
    }
    if (start < chunk.byteLength) {
      offset -= chunk.byteLength - start;
    }
  }
}
var deepCopy = (inObject, keyBlackList) => {
  let value, key;
  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }
  const isArray = Array.isArray(inObject);
  const outObject = isArray ? [] : {};
  for (key in inObject) {
    if (!isArray && keyBlackList?.includes(key)) {
      continue;
    }
    value = inObject[key];
    outObject[key] = deepCopy(value, keyBlackList);
  }
  return outObject;
};

// examples/src/bundledEdges/loader.ts
function createFileInput(cb) {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = false;
  input.addEventListener("change", cb);
  return input;
}
function renderMenu2(container, cb) {
  render(html`<div id="menu" class="start_menu"></div>`, container);
  const result = {
    points: "No file selected.",
    pointsFile: null,
    clusters: "No file selected.",
    clustersFile: null,
    clusterEdgesMode: "curved",
    clusterEdges: "No file selected.",
    clusterEdgesFile: null,
    nodes: "No file selected.",
    nodesFile: null,
    nodeEdges: "No file selected.",
    nodeEdgesFile: null,
    bnodes: "No file selected.",
    bnodesFile: null,
    bnodeEdges: "No file selected.",
    bnodeEdgesFile: null
  };
  const menu = new import_tweakpane2.default({
    title: "Grafer Loader",
    container: document.querySelector("#menu")
  });
  const pointsInput = createFileInput(() => {
    if (pointsInput.files.length) {
      result.pointsFile = pointsInput.files[0];
      result.points = result.pointsFile.name;
    } else {
      result.points = "No file selected.";
      result.pointsFile = null;
    }
  });
  menu.addMonitor(result, "points");
  menu.addButton({title: "browse..."}).on("click", () => pointsInput.click());
  menu.addSeparator();
  const clustersInput = createFileInput(() => {
    if (clustersInput.files.length) {
      result.clustersFile = clustersInput.files[0];
      result.clusters = result.clustersFile.name;
    } else {
      result.clusters = "No file selected.";
      result.clustersFile = null;
    }
  });
  menu.addMonitor(result, "clusters");
  menu.addButton({title: "browse..."}).on("click", () => clustersInput.click());
  menu.addInput(result, "clusterEdgesMode", {
    options: {
      bundle: "bundle",
      straight: "straight",
      curved: "curved"
    }
  });
  const clusterEdgesInput = createFileInput(() => {
    if (clusterEdgesInput.files.length) {
      result.clusterEdgesFile = clusterEdgesInput.files[0];
      result.clusterEdges = result.clusterEdgesFile.name;
    } else {
      result.clusterEdges = "No file selected.";
      result.clusterEdgesFile = null;
    }
  });
  menu.addMonitor(result, "clusterEdges");
  menu.addButton({title: "browse..."}).on("click", () => clusterEdgesInput.click());
  menu.addSeparator();
  const nodesInput = createFileInput(() => {
    if (nodesInput.files.length) {
      result.nodesFile = nodesInput.files[0];
      result.nodes = result.nodesFile.name;
    } else {
      result.nodes = "No file selected.";
      result.nodesFile = null;
    }
  });
  menu.addMonitor(result, "nodes");
  menu.addButton({title: "browse..."}).on("click", () => nodesInput.click());
  const nodeEdgesInput = createFileInput(() => {
    if (nodeEdgesInput.files.length) {
      result.nodeEdgesFile = nodeEdgesInput.files[0];
      result.nodeEdges = result.nodeEdgesFile.name;
    } else {
      result.nodeEdges = "No file selected.";
      result.nodeEdgesFile = null;
    }
  });
  menu.addMonitor(result, "nodeEdges");
  menu.addButton({title: "browse..."}).on("click", () => nodeEdgesInput.click());
  menu.addSeparator();
  const bnodesInput = createFileInput(() => {
    if (bnodesInput.files.length) {
      result.bnodesFile = bnodesInput.files[0];
      result.bnodes = result.bnodesFile.name;
    } else {
      result.bnodes = "No file selected.";
      result.bnodesFile = null;
    }
  });
  menu.addMonitor(result, "bnodes");
  menu.addButton({title: "browse..."}).on("click", () => bnodesInput.click());
  const bnodeEdgesInput = createFileInput(() => {
    if (bnodeEdgesInput.files.length) {
      result.bnodeEdgesFile = bnodeEdgesInput.files[0];
      result.bnodeEdges = result.bnodeEdgesFile.name;
    } else {
      result.bnodeEdges = "No file selected.";
      result.bnodeEdgesFile = null;
    }
  });
  menu.addMonitor(result, "bnodeEdges");
  menu.addButton({title: "browse..."}).on("click", () => bnodeEdgesInput.click());
  const loadBtn = menu.addButton({title: "load"});
  loadBtn.on("click", () => {
    cb(result);
  });
}
async function loadGraph(info, G) {
  if (info.pointsFile) {
    const layers = [];
    const points = {
      data: []
    };
    await parseJSONL(info.pointsFile, (json) => {
      points.data.push(Object.assign({}, json, {
        _id: json.id
      }));
    });
    const clusterBundleEdges = {
      type: "ClusterBundle",
      data: [],
      options: {
        fade: 0.9,
        desaturate: 0.5,
        nearDepth: 0.95,
        farDeth: 1
      }
    };
    const clusterStraightEdges = {
      type: "Straight",
      data: [],
      options: {
        alpha: 1,
        fade: 0.5,
        desaturate: 0.8
      },
      mappings: {
        source: (entry) => "sourceCluster" in entry ? entry.sourceCluster : entry.source,
        target: (entry) => "targetCluster" in entry ? entry.targetCluster : entry.target
      }
    };
    const clusterCurvedEdges = {
      type: "CurvedPath",
      data: [],
      options: {
        alpha: 1,
        fade: 0.5,
        desaturate: 0.8
      }
    };
    let edges;
    if (info.clusterEdgesMode === "bundle") {
      edges = clusterBundleEdges;
    } else if (info.clusterEdgesMode === "curved") {
      edges = clusterCurvedEdges;
    } else {
      edges = clusterStraightEdges;
    }
    const clusterLayer = {
      name: "Clusters",
      labels: {
        type: "RingLabel",
        data: [],
        mappings: {
          background: () => false,
          fontSize: () => 14,
          padding: () => 0
        },
        options: {
          visibilityThreshold: 128,
          repeatLabel: -1,
          repeatGap: 64,
          fade: 0.65,
          desat: 0.5,
          nearDepth: 0.9,
          farDepth: 1
        }
      },
      edges
    };
    layers.push(clusterLayer);
    if (info.clustersFile) {
      const nodes = clusterLayer.labels;
      await parseJSONL(info.clustersFile, (json) => {
        nodes.data.push(Object.assign({}, json, {
          color: COLORS.GLACIER_BLUE
        }));
      });
    }
    if (info.clusterEdgesFile) {
      const edges2 = clusterLayer.edges;
      await parseJSONL(info.clusterEdgesFile, (json) => {
        edges2.data.push(Object.assign({}, json, {
          sourceColor: COLORS.HORIZON_BLUE,
          targetColor: COLORS.HORIZON_BLUE,
          _id: json.id,
          _out: json.source,
          _in: json.target
        }));
      });
    }
    const nodeLayer = {
      name: "Nodes",
      nodes: {
        type: "Circle",
        data: [],
        options: {
          farDepth: 0.1
        }
      },
      edges: {
        data: [],
        options: {
          fade: 0.85,
          desaturate: 0.5,
          nearDepth: 0.8,
          farDepth: 0.9
        }
      },
      labels: {
        type: "PointLabel",
        data: [],
        mappings: {
          background: () => true,
          fontSize: () => 12,
          padding: () => [8, 5]
        },
        options: {
          visibilityThreshold: 8,
          labelPlacement: mod_exports4.labels.PointLabelPlacement.TOP,
          farDepth: 0.1
        }
      }
    };
    layers.push(nodeLayer);
    if (info.nodesFile) {
      const nodes = nodeLayer.nodes;
      await parseJSONL(info.nodesFile, (json) => {
        nodes.data.push(Object.assign({}, json, {
          color: COLORS.BRASS_RED
        }));
      });
      nodeLayer.labels.data = nodes.data;
    }
    if (info.nodeEdgesFile) {
      const edges2 = nodeLayer.edges;
      await parseJSONL(info.nodeEdgesFile, (json) => {
        edges2.data.push(Object.assign({}, json, {
          sourceColor: COLORS.PALE_GOLD,
          targetColor: COLORS.PALE_GOLD
        }));
      });
    }
    const bnodes = [];
    if (info.bnodesFile) {
      await parseJSONL(info.bnodesFile, (json) => {
        bnodes.push(json);
      });
    }
    const bedges = [];
    if (info.bnodeEdgesFile) {
      await parseJSONL(info.bnodeEdgesFile, (json) => {
        bedges.push(json);
      });
    }
    bnodes.forEach(G.addVertex.bind(G));
    bedges.forEach(G.addEdge.bind(G));
    return {points, layers};
  }
}

// examples/src/core/graph.ts
function createGrafCanvas(container) {
  container.innerHTML = `<canvas class="grafer_container"></canvas>`;
  const canvas = document.querySelector(".grafer_container");
  return canvas;
}
function renderDebugMenuPane(viewport) {
  const debugMenuPane = document.querySelector(".tp-dfwv");
  if (debugMenuPane) {
    debugMenuPane.remove();
  }
  const debugMenu = new mod_exports7.DebugMenu(viewport);
  return debugMenu;
}
function renderGraph(container, points, layers) {
  const canvas = createGrafCanvas(container);
  const controller = new GraferController(canvas, {points, layers});
  renderDebugMenuPane(controller.viewport);
  return controller;
}
function addLayer(controller, queryResults, label, color, type, options) {
  const queryLayer = {
    name: label,
    nodes: {
      type: "Circle",
      data: []
    },
    edges: {
      type,
      data: [],
      options
    }
  };
  for (let i = 0; i < queryResults.length; i++) {
    const result = queryResults[i];
    if (result._type === "node") {
      result.color = color;
      queryLayer.nodes.data.push(result);
    } else if (result._type === "edge") {
      result.sourceColor = color;
      result.targetColor = color;
      queryLayer.edges.data.push(result);
    }
  }
  controller.addLayer(queryLayer, label, void 0);
  controller.render();
  renderDebugMenuPane(controller.viewport);
}

// examples/src/core/layout.ts
function renderLayout(container) {
  const layoutHTML = html`
    <div class="root-container">
      <div id="graph-container" class="graph-container"></div>
      <div id="search-pane-container" class="search-pane-container"></div>
    </div>
  `;
  render(layoutHTML, container);
}

// examples/src/mod.ts
var import_mod2 = require_mod();

// examples/src/basic/mod.ts
var mod_exports11 = {};
__export(mod_exports11, {
  js: () => mod_exports10
});

// examples/src/basic/js/mod.ts
var mod_exports10 = {};
__export(mod_exports10, {
  grid: () => grid
});

// examples/src/basic/js/grid.ts
var import_search = require_search();
function transformToBGraph(nodes, edges) {
  const nodeMap = {};
  const newNodes = nodes.map((node) => {
    const newNode = Object.assign({}, node, {_type: "node"});
    nodeMap[newNode._id] = newNode;
    return newNode;
  });
  const newEdges = [];
  for (let i = 0; i < edges.length; i++) {
    const edge = Object.assign({}, edges[i], {_type: "edge"});
    const source = {_id: `source_${edge._id}`, _out: edge._out, _in: edge._id};
    const target = {_id: `target_${edge._id}`, _out: edge._id, _in: edge._in};
    newNodes.push(edge);
    newEdges.push(source);
    newEdges.push(target);
  }
  return [newNodes, newEdges];
}
async function grid(container) {
  const edges = [
    {_id: "AE", id: "AE", source: "A", target: "E", _out: "A", _in: "E", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "GR", x: 10, y: -10},
    {_id: "AD", id: "AD", source: "A", target: "D", _out: "A", _in: "D", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "GR", x: 0, y: -10},
    {_id: "BA", id: "BA", source: "B", target: "A", _out: "B", _in: "A", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RR", x: -10, y: 0},
    {_id: "BE", id: "BE", source: "B", target: "E", _out: "B", _in: "E", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "GR", x: 0, y: -10},
    {_id: "CB", id: "CB", source: "C", target: "B", _out: "C", _in: "B", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "GG", x: -10, y: 0},
    {_id: "CE", id: "CE", source: "C", target: "E", _out: "C", _in: "E", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "GR", x: -10, y: -10},
    {_id: "DE", id: "DE", source: "D", target: "E", _out: "D", _in: "E", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RR", x: 10, y: 0},
    {_id: "DG", id: "DG", source: "D", target: "G", _out: "D", _in: "G", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RB", x: 0, y: -10},
    {_id: "EF", id: "EF", source: "E", target: "F", _out: "E", _in: "F", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RR", x: 10, y: 0},
    {_id: "EG", id: "EG", source: "E", target: "G", _out: "E", _in: "G", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RB", x: -10, y: -10},
    {_id: "EH", id: "EH", source: "E", target: "H", _out: "E", _in: "H", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RB", x: 0, y: -10},
    {_id: "EI", id: "EI", source: "E", target: "I", _out: "E", _in: "I", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RB", x: 10, y: -10},
    {_id: "FC", id: "FC", source: "F", target: "C", _out: "F", _in: "C", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "RG", x: 0, y: 10},
    {_id: "GH", id: "GH", source: "G", target: "H", _out: "G", _in: "H", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "BB", x: 10, y: 0},
    {_id: "HI", id: "HI", source: "H", target: "I", _out: "H", _in: "I", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "BB", x: 10, y: 0},
    {_id: "IF", id: "IF", source: "I", target: "F", _out: "I", _in: "F", sourceColor: "#5e81ac", targetColor: "#b48ead", colors: "BR", x: 0, y: 10}
  ];
  const nodes = [
    {_id: "A", id: "A", point: "A", x: -10, y: 10, label: "A", color: "green"},
    {_id: "B", id: "B", point: "B", x: 0, y: 10, label: "B", color: "green"},
    {_id: "C", id: "C", point: "C", x: 10, y: 10, label: "C", color: "green"},
    {_id: "D", id: "D", point: "D", x: -10, y: 0, label: "D", color: "red"},
    {_id: "E", id: "E", point: "E", x: 0, y: 0, label: "E", color: "red"},
    {_id: "F", id: "F", point: "F", x: 10, y: 0, label: "F", color: "red"},
    {_id: "G", id: "G", point: "G", x: -10, y: -10, label: "G", color: "blue"},
    {_id: "H", id: "H", point: "H", x: 0, y: -10, label: "H", color: "blue"},
    {_id: "I", id: "I", point: "I", x: 10, y: -10, label: "I", color: "blue"}
  ];
  const nodesLayer = {
    data: nodes
  };
  const edgesLayer = {
    data: edges,
    options: {
      desaturate: 0.5,
      fade: 0.8
    }
  };
  const labelsLayer = {
    type: "PointLabel",
    data: nodes,
    mappings: {
      background: () => true,
      fontSize: () => 12,
      padding: () => [8, 5]
    },
    options: {
      visibilityThreshold: 8,
      labelPlacement: mod_exports4.labels.PointLabelPlacement.TOP
    }
  };
  const layers = [
    {
      name: "Grid",
      nodes: nodesLayer,
      edges: edgesLayer,
      labels: labelsLayer
    }
  ];
  const [bNodes, bEdges] = transformToBGraph(nodes, edges);
  const G = bgraph.graph(bNodes, bEdges);
  renderLayout(container);
  const graphContainer = document.getElementById("graph-container");
  const searchPaneContainer = document.getElementById("search-pane-container");
  const controller = renderGraph(graphContainer, nodesLayer, layers);
  (0, import_search.renderSearchPane)(searchPaneContainer, (0, import_search.onSearchBuilder)(G, controller, "Straight", {
    alpha: 1,
    fade: 0,
    desaturate: 0
  }), controller);
}

// examples/src/HelpElements.ts
var MouseInteractions = class extends LitElement {
  static get styles() {
    return css`
            :host {
                position: absolute;
                top: 0;
                right: 0;
            }

            .container {
                padding: 15px;
                color: #d8dee9;
                font-family: helvetica;
                font-size: 10px;
            }
        `;
  }
  render() {
    return html`<div class="container">
            <div><strong>LEFT DRAG:</strong> TRUCK</div>
            <div><strong>RIGHT DRAG:</strong> ROTATE</div>
            <div><strong>MIDDLE DRAG:</strong> PAN</div>
            <div><strong>SCROLL UP/DOWN:</strong> DOLLY</div>
        </div>`;
  }
};
MouseInteractions = __decorate([
  customElement("mouse-interactions")
], MouseInteractions);

// examples/src/mod.ts
var examples = {
  basic: mod_exports11,
  bundledEdges: import_mod2.bundledEdges
};
function getExample(examples2, path) {
  let obj = examples2;
  for (let i = 0, n = path.length; i < n; ++i) {
    if (Object.prototype.hasOwnProperty.call(obj, path[i])) {
      obj = obj[path[i]];
    } else {
      return null;
    }
  }
  if (typeof obj === "function") {
    return obj;
  }
  return null;
}
function main() {
  const pathName = window.location.pathname;
  const pathComponents = pathName.split("/").filter((v) => Boolean(v));
  let basePath = "";
  if (window.location.hostname.indexOf("github.io") !== -1) {
    basePath = `/${pathComponents.shift()}`;
  }
  const example = getExample(examples, pathComponents);
  console.log(example);
  if (example) {
    example(document.body);
  } else {
    renderMenu(document.body, examples, pathComponents, basePath);
  }
}
main();
//# sourceMappingURL=mod.js.map
