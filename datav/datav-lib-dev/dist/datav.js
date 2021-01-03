(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('crypto'), require('echarts')) :
  typeof define === 'function' && define.amd ? define(['vue', 'crypto', 'echarts'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Datav = factory(global.Vue, global.crypto, global.Echarts$1));
}(this, (function (vue, crypto, Echarts$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);
  var Echarts__default = /*#__PURE__*/_interopDefaultLegacy(Echarts$1);

  var script = {
    name: 'Loading',
    //父组件传参设置
    props: {
      //宽度
      width: {
        type: [Number, String],
        //允许传入的类型
        "default": 50 //默认值

      },
      //高度
      height: {
        type: [Number, String],
        //允许传入的类型
        "default": 50
      },
      //外圈颜色
      outsideColor: {
        type: String,
        "default": '#3be6cb'
      },
      //内圈颜色
      insideColor: {
        type: String,
        "default": '#02bcfe'
      },
      //旋转及变色速度
      duration: {
        type: [Number, String],
        "default": 2
      }
    },
    setup: function setup(ctx) {
      var outsideColorAnimation = vue.computed(function () {
        return "".concat(ctx.outsideColor, ";").concat(ctx.insideColor, ";").concat(ctx.outsideColor);
      }); //外圈颜色变换

      var insideColorAnimation = vue.computed(function () {
        return "".concat(ctx.insideColor, ";").concat(ctx.outsideColor, ";").concat(ctx.insideColor);
      }); //内圈颜色变换

      return {
        outsideColorAnimation: outsideColorAnimation,
        insideColorAnimation: insideColorAnimation
      };
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-416d18c9");

  vue.pushScopeId("data-v-416d18c9");

  var _hoisted_1 = {
    "class": "loading"
  };
  var _hoisted_2 = {
    "class": "loading-content"
  };

  vue.popScopeId();

  var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, [(vue.openBlock(), vue.createBlock("svg", {
      width: $props.width,
      height: $props.height,
      viewBox: "0 0 50 50",
      preserveAspectRatio: "xMidYMid meet"
    }, [vue.createCommentVNode(" \r\n                stroke-dasharray = 2pir/4 =2*3.1415926*22/4 = 34\r\n             "), vue.createVNode("circle", {
      cx: "25",
      cy: "25",
      r: "22",
      fill: "none",
      "stroke-width": "3",
      stroke: $props.outsideColor,
      "stroke-dasharray": "34",
      "stroke-linecap": "round"
    }, [vue.createCommentVNode(" 旋转动画 "), vue.createVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      values: "0 25 25;360 25 25",
      dur: "".concat(+$props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["dur"]), vue.createCommentVNode(" 变色动画 "), vue.createVNode("animate", {
      attributeName: "stroke",
      values: $setup.outsideColorAnimation,
      dur: "".concat(+$props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["values", "dur"])], 8
    /* PROPS */
    , ["stroke"]), vue.createVNode("circle", {
      cx: "25",
      cy: "25",
      r: "12",
      fill: "none",
      "stroke-width": "3",
      stroke: $props.insideColor,
      "stroke-dasharray": "19",
      "stroke-linecap": "round"
    }, [vue.createCommentVNode(" 旋转动画 "), vue.createVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      values: "0 25 25;-360 25 25",
      dur: "".concat(+$props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["dur"]), vue.createCommentVNode(" 变色动画 "), vue.createVNode("animate", {
      attributeName: "stroke",
      values: $setup.insideColorAnimation,
      dur: "".concat(+$props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["values", "dur"])], 8
    /* PROPS */
    , ["stroke"])], 8
    /* PROPS */
    , ["width", "height"])), vue.createVNode("div", _hoisted_2, [vue.renderSlot(_ctx.$slots, "default")])]);
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@charset \"UTF-8\";\n.loading[data-v-416d18c9] {\n  display: flex;\n  /*居中显示*/\n  flex-direction: column;\n  /*竖向排列 */\n  align-items: center;\n  justify-content: center;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-416d18c9";
  script.__file = "src/components/Loading/Loading.vue";

  function Loading (Vue) {
    Vue.component(script.name, script);
  }

  const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

  let poolPtr = rnds8Pool.length;
  function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
      crypto__default['default'].randomFillSync(rnds8Pool);
      poolPtr = 0;
    }

    return rnds8Pool.slice(poolPtr, poolPtr += 16);
  }

  var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */

  const byteToHex = [];

  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }

  function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields

    if (!validate(uuid)) {
      throw TypeError('Stringified UUID is invalid');
    }

    return uuid;
  }

  function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }

      return buf;
    }

    return stringify(rnds);
  }

  var script$1 = {
    name: 'flybox',
    props: {
      //外边框颜色
      lineColor: {
        type: String,
        "default": "#235fa7"
      },
      //流星颜色
      starColor: {
        type: String,
        "default": "#4fd2dd"
      },
      //流星长度
      starLength: {
        type: [String, Number],
        "default": 200
      },
      //流星运动速度
      starDuration: {
        type: [String, Number],
        "default": 3
      }
    },
    setup: function setup(ctx) {
      var uuid = v4();
      var width = vue.ref(0);
      var height = vue.ref(0);
      var refName = "flybox";
      var pathId = "".concat(refName, "-path-").concat(uuid);
      var radialGradientId = "".concat(refName, "-gradient-").concat(uuid);
      var maskId = "".concat(refName, "-mask-").concat(uuid);
      var path = vue.computed(function () {
        return "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, " L5 ").concat(height.value - 5, " Z");
      });

      var init = function init() {
        var instance = vue.getCurrentInstance();
        var dom = instance.ctx.$refs[refName];
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      };

      vue.onMounted(function () {
        init();
      });
      return {
        width: width,
        height: height,
        refName: refName,
        path: path,
        pathId: pathId,
        radialGradientId: radialGradientId,
        maskId: maskId
      };
    }
  };

  var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-513cc2e2");

  vue.pushScopeId("data-v-513cc2e2");

  var _hoisted_1$1 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_3 = {
    "class": "fly-box-content"
  };

  vue.popScopeId();

  var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", {
      "class": "flybox",
      ref: $setup.refName
    }, [(vue.openBlock(), vue.createBlock("svg", {
      width: $setup.width,
      height: $setup.height
    }, [vue.createVNode("defs", null, [vue.createVNode("path", {
      id: $setup.pathId,
      d: $setup.path,
      fill: "none"
    }, null, 8
    /* PROPS */
    , ["id", "d"]), vue.createVNode("radialGradient", {
      id: $setup.radialGradientId,
      cx: "50%",
      cy: "50%",
      fx: "100%",
      fy: "50%",
      r: "50%"
    }, [_hoisted_1$1, _hoisted_2$1], 8
    /* PROPS */
    , ["id"]), vue.createVNode("mask", {
      id: $setup.maskId
    }, [vue.createVNode("circle", {
      r: $props.starLength,
      cx: "0",
      cy: "0",
      fill: "url(#".concat($setup.radialGradientId, ")")
    }, [vue.createVNode("animateMotion", {
      dur: "".concat($props.starDuration, "s"),
      path: $setup.path,
      rotate: "auto",
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["dur", "path"])], 8
    /* PROPS */
    , ["r", "fill"])], 8
    /* PROPS */
    , ["id"])]), vue.createVNode("use", {
      href: "#".concat($setup.pathId),
      "stroke-width": "1",
      stroke: $props.lineColor
    }, null, 8
    /* PROPS */
    , ["href", "stroke"]), vue.createVNode("use", {
      href: "#".concat($setup.pathId),
      "stroke-width": "3",
      stroke: $props.starColor,
      mask: "url(#".concat($setup.maskId, ")")
    }, null, 8
    /* PROPS */
    , ["href", "stroke", "mask"])], 8
    /* PROPS */
    , ["width", "height"])), vue.createVNode("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "default")])], 512
    /* NEED_PATCH */
    );
  });

  var css_248z$1 = ".flybox[data-v-513cc2e2] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.flybox[data-v-513cc2e2] svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.fly-box-content[data-v-513cc2e2] {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  box-sizing: border-box;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-513cc2e2";
  script$1.__file = "src/components/FlyBox/FlyBox.vue";

  function flybox (Vue) {
    Vue.component(script$1.name, script$1);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var asyncToGenerator = _asyncToGenerator;

  function debounce(delay, callback) {
    var task;
    return function () {
      var _arguments = arguments,
          _this = this;

      clearTimeout(task);
      task = setTimeout(function () {
        callback.apply(_this, _arguments);
      }, delay);
    };
  }

  var script$2 = {
    name: 'container',
    props: {
      //用于接收数据大屏的宽高
      option: Object
    },
    setup: function setup(ctx) {
      var refName = 'Container';
      var width = vue.ref(0);
      var height = vue.ref(0); //组件视口宽

      var originalWidth = vue.ref(0); //组件视口高

      var originalHeight = vue.ref(0);
      var ready = vue.ref(false);
      var context, dom, observer;

      var initSize = function initSize() {
        return new Promise(function (resolve) {
          vue.nextTick(function () {
            dom = context.$refs[refName];

            if (ctx.option && ctx.option.width && ctx.option.height) {
              //获取大屏的真实尺寸
              //将传入的宽高记录下来
              width.value = ctx.option.width;
              height.value = ctx.option.height;
            } else {
              //如果用户没有传入宽高就从dom去拿
              width.value = dom.clientWidth;
              height.value = dom.clientHeight;
            } //判断是否拿到画布宽高，没有拿到则赋值


            if (!originalWidth.value || !originalHeight.value) {
              //传入真实视口的宽
              originalWidth.value = window.screen.width; //传入真实视口的高

              originalHeight.value = window.screen.height;
            }

            resolve();
          });
        });
      };

      var updateSize = function updateSize() {
        //判断当前有没有宽高
        if (width.value && height.value) {
          dom.style.width = "".concat(width.value, "px");
          dom.style.height = "".concat(height.value, "px");
        } else {
          dom.style.width = "".concat(originalWidth.value, "px");
          dom.style.height = "".concat(originalHeight.value, "px");
        }
      };

      var updateScale = function updateScale() {
        //拿到当前真实视口的宽高 
        var currentWidth = document.body.clientWidth;
        var currentHeight = document.body.clientHeight; //获取大屏最终的宽高

        var realWidth = width.value || originalWidth.value;
        var realHeight = height.value || originalHeight.value; //创建变量计算出宽度压缩比和高度压缩比

        var widthScale = currentWidth / realWidth;
        var heightScale = currentHeight / realHeight;
        dom && (dom.style.transform = "scale(".concat(widthScale, ",").concat(heightScale, ")"));
      };

      var onResize = /*#__PURE__*/function () {
        var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return initSize();

                case 2:
                  updateScale();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function onResize(_x) {
          return _ref.apply(this, arguments);
        };
      }(); //建立监听事件


      var initMutationObserver = function initMutationObserver() {
        var MutationObserver = window.MutationObserver;
        observer = new MutationObserver(onResize); //实例化传入initSize函数

        observer.observe(dom, {
          //开始监听传入dom元素指定监听规则
          attributes: true,
          //打开监听属性
          attributeFilter: ['style'],
          //具体监听属性:style
          attributeOldValue: true
        });
      }; //注销监听事件


      var removeMutationObserver = function removeMutationObserver() {
        if (observer) {
          observer.disconnect();
          observer.takeRecords();
          observer = null;
        }
      };

      vue.onMounted( /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ready.value = false; //不进行元素展示

                context = vue.getCurrentInstance().ctx; //第一步调用init方法拿到视口的尺寸

                _context2.next = 4;
                return initSize();

              case 4:
                //更新窗口大小
                updateSize(); //视口压缩算法

                updateScale(); //锁定浏览器放大缩小

                window.addEventListener('resize', debounce(100, onResize)); //启动监听事件

                initMutationObserver(); //初始化完毕后进行元素展示

                ready.value = true;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))); //销毁事件

      vue.onUnmounted(function () {
        window.removeEventListener('resize', onResize);
        removeMutationObserver();
      });
      return {
        refName: refName,
        ready: ready
      };
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", {
      id: "container",
      ref: $setup.refName,
      style: _ctx.style
    }, [$setup.ready ? vue.renderSlot(_ctx.$slots, "default", {
      key: 0
    }) : vue.createCommentVNode("v-if", true)], 4
    /* STYLE */
    );
  }

  var css_248z$2 = "#container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}";
  styleInject(css_248z$2);

  script$2.render = render$2;
  script$2.__file = "src/components/Container/Container.vue";

  function container (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$3 = {
    name: 'topHeader',
    props: {}
  };

  var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-1303fca8");

  vue.pushScopeId("data-v-1303fca8");

  var _hoisted_1$2 = {
    "class": "top_header"
  };
  var _hoisted_2$2 = {
    "class": "logo-wrapper"
  };

  var _hoisted_3$1 = /*#__PURE__*/vue.createVNode("div", {
    "class": "logo-text"
  }, [/*#__PURE__*/vue.createCommentVNode(" 中文标题 "), /*#__PURE__*/vue.createVNode("div", {
    "class": "cn-text"
  }, "物联网传感器数据大盘"), /*#__PURE__*/vue.createCommentVNode(" 英文标题 "), /*#__PURE__*/vue.createVNode("div", {
    "class": "en-text"
  }, "Internet of things sensor data market")], -1
  /* HOISTED */
  );

  vue.popScopeId();

  var render$3 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
    var _component_headerLogo = vue.resolveComponent("headerLogo");

    return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.createCommentVNode(" <img class=\"logo\" src=\"http://www.youbaobao.xyz/resource.imooc.png\"> "), vue.createCommentVNode(" 使用headerLogo 组件 SVG图标作为logo "), vue.createVNode("div", _hoisted_2$2, [vue.createVNode(_component_headerLogo, {
      stroke: "#f40be2",
      "stroke-width": "10"
    })]), vue.createCommentVNode(" 标题文字 "), _hoisted_3$1]);
  });

  var css_248z$3 = "@charset \"UTF-8\";\n/*top_header布局*/\n.top_header[data-v-1303fca8] {\n  display: flex;\n  /*左右布局*/\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #241f20;\n  padding: 0 64px;\n  box-sizing: border-box;\n  /*svg logo图标容器样式样式*/\n  /*logo样式*/\n  /*logo文字样式*/\n}\n.top_header[data-v-1303fca8] .logo-wrapper {\n  width: 160px;\n  height: 160px;\n}\n.top_header[data-v-1303fca8] .logo {\n  width: 120px;\n  height: 120px;\n}\n.top_header[data-v-1303fca8] .logo-text {\n  flex: 1;\n  /*充满余下整个空间*/\n  margin-left: 40px;\n  /*距离左边40px*/\n  /*中文标题样式*/\n  /*英文标题样式*/\n}\n.top_header[data-v-1303fca8] .logo-text .cn-text {\n  color: white;\n  /*文字颜色*/\n  font-weight: bold;\n  /*文字粗体*/\n  font-size: 60px;\n  /*文字大小*/\n  letter-spacing: 2px;\n  /*文字间距*/\n}\n.top_header[data-v-1303fca8] .logo-text .en-text {\n  color: white;\n  font-size: 35px;\n  letter-spacing: 2px;\n}";
  styleInject(css_248z$3);

  script$3.render = render$3;
  script$3.__scopeId = "data-v-1303fca8";
  script$3.__file = "src/components/top-header/TopHeader.vue";

  function topHeader (Vue) {
    Vue.component(script$3.name, script$3);
  }

  var script$4 = {
    name: 'headerLogo',
    props: {
      strokeWidth: {
        type: [String, Number],
        "default": 1
      },
      stroke: {
        type: String,
        "default": '#000'
      }
    },
    setup: function setup() {
      vue.onMounted(function () {
        //获取svg的长度必须以path标签内的元素 
        //如果有多条线段的不规则图形就以最长的线段为基准
        //得出最长线段为6617
        var logo = document.getElementsByClassName('headerLogo_path')[0];
        console.log(logo.getTotalLength());
      });
    }
  };

  var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-5e81d1e6");

  vue.pushScopeId("data-v-5e81d1e6");

  var _hoisted_1$3 = {
    t: "1609564740298",
    "class": "header_logo",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "26347",
    width: "200",
    height: "200"
  };

  vue.popScopeId();

  var render$4 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("svg", _hoisted_1$3, [vue.createVNode("path", {
      "class": "headerLogo_path",
      stroke: $props.stroke,
      "stroke-width": $props.strokeWidth,
      d: "M843.5 284.4c-24.4-94.6-110.1-164.5-212.2-164.5-45.4 0-87.5 13.8-122.5 37.4-35-23.6-77.1-37.4-122.5-37.4-102.2 0-187.8 69.9-212.2 164.5-87.2 29-150.2 111.2-150.2 208.1 0 99.4 66 183.2 156.6 210.2-4.8 13-8.3 27-10.6 41-22.1 79.7-42 184.9-54.8 280.2h715c1.2-77-3.9-187.3-22.7-314.4 105.5-16 186.5-106.9 186.5-216.9-0.2-97-63.1-179.2-150.4-208.2zM243.4 574.1c-45.1 0-81.7-36.6-81.7-81.7s36.6-81.7 81.7-81.7 81.7 36.6 81.7 81.7c-0.1 45.1-36.6 81.7-81.7 81.7zM406.7 278c45.1 0 81.7 36.6 81.7 81.7s-36.6 81.7-81.7 81.7-81.7-36.6-81.7-81.7 36.6-81.7 81.7-81.7z m173.6 475.3H427.1c-45.1 0-81.7-39.4-81.7-84.5s36.6-84.5 81.7-84.5c0.9 0 1.7 0.2 2.6 0.2 9-35.3 40.9-61.5 79-61.5 38.2 0 70.2 26.2 79.1 61.7 41.5 3.8 74 41.6 74 84.1 0.1 45.1-36.4 84.5-81.5 84.5z m30.6-311.9c-45.1 0-81.7-36.6-81.7-81.7s36.6-81.7 81.7-81.7 81.7 36.6 81.7 81.7c-0.1 45.1-36.6 81.7-81.7 81.7zM764 574.1c-45.1 0-81.7-36.6-81.7-81.7s36.6-81.7 81.7-81.7 81.7 36.6 81.7 81.7-36.6 81.7-81.7 81.7z m77.4-429.4c2.4 0.6 59.6 15.4 46.2 83.1-0.7 3.3 0.4 6.7 2.7 9 2.4 2.3 5.7 3.3 9 2.7 2.4-0.5 59-11.4 77.7 62.7 1.2 4.6 5.4 7.7 10 7.5 0.7 0 1.4-0.1 2-0.3 5.3-1.4 8.6-6.7 7.2-12.1-17.3-68.5-64-78-87.4-78.3 7.5-75.5-62.1-93.5-62.8-93.6-5.3-1.3-10.7 1.9-12 7.3-1.2 5.3 2.1 10.7 7.4 12z",
      fill: "#1296db",
      "p-id": "26348"
    }, null, 8
    /* PROPS */
    , ["stroke", "stroke-width"])]);
  });

  var css_248z$4 = "@charset \"UTF-8\";\n/*svg容器样式*/\n.header_logo[data-v-5e81d1e6] {\n  width: 100%;\n  height: 100%;\n}\n\n/*svg图形线段样式*/\n.headerLogo_path[data-v-5e81d1e6] {\n  fill: none;\n  animation: headerlogo_animation-5e81d1e6 5s linear infinite forwards;\n}\n\n/*svg图形描边动画*/\n@keyframes headerlogo_animation-5e81d1e6 {\n  /*整个图形不出现*/\n  0% {\n    stroke-dasharray: 6825;\n    stroke-dashoffset: 6825;\n  }\n  /*在50%的时间内绘制完整个logo*/\n  100% {\n    stroke-dasharray: 6825;\n    stroke-dashoffset: 0;\n  }\n  /*在剩余50%的时间内保持整个动画绘制完成状态*/\n  100% {\n    stroke-dasharray: 6825;\n    stroke-dashoffset: 0;\n    fill: #f40be2;\n  }\n}";
  styleInject(css_248z$4);

  script$4.render = render$4;
  script$4.__scopeId = "data-v-5e81d1e6";
  script$4.__file = "src/components/top-header/header-logo/headerLogo.vue";

  function headerLogo (Vue) {
    Vue.component(script$4.name, script$4);
  }

  var script$5 = {
    name: 'TotalUser',
    props: {
      //今日温度
      todaysTemperature: {
        type: Number,
        "default": 0
      },
      //昨日温度
      yesterdayTemperature: {
        type: Number,
        "default": 0
      },
      //增长率
      growthRate: {
        type: Number,
        "default": 0
      }
    },
    setup: function setup(props) {
      var startVal = vue.ref(0); //今日温度起始值

      var startPercent = vue.ref(0); //昨日此时温度起始值

      var startPercent2 = vue.ref(0); //同比增长起始值
      //watch方法在数据渲染之前起作用
      //监听今日温度起始值是否改变,将上一次今日温度值赋值给今日温度起始值

      vue.watch(function () {
        return props.todaysTemperature;
      }, function (nextValue, prevValue) {
        startVal.value = prevValue;
      }); //监听昨日此时温度起始值是否改变,将上一次昨日此时温度值赋值给昨日此时温度起始值

      vue.watch(function () {
        return props.growthRate;
      }, function (nextValue, prevValue) {
        startPercent2.value = prevValue;
      }); //监听增长率起始值是否改变,将上一次增长率值赋值给增长率起始值

      vue.watch(function () {
        return props.yesterdayTemperature;
      }, function (nextValue, prevValue) {
        startPercent.value = prevValue;
      });
      return {
        startVal: startVal,
        startPercent: startPercent,
        startPercent2: startPercent2
      };
    }
  };

  var _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-52530eaf");

  vue.pushScopeId("data-v-52530eaf");

  var _hoisted_1$4 = {
    "class": "TemperatureIncrease"
  };

  var _hoisted_2$3 = /*#__PURE__*/vue.createVNode("div", {
    "class": "title"
  }, "今日实时温度", -1
  /* HOISTED */
  );

  var _hoisted_3$2 = /*#__PURE__*/vue.createVNode("div", {
    "class": "sub-title"
  }, "Real time temperature today", -1
  /* HOISTED */
  );

  var _hoisted_4 = {
    "class": "total"
  };
  var _hoisted_5 = {
    "class": "percent-text"
  };
  var _hoisted_6 = {
    "class": "percent-text-1"
  };

  var _hoisted_7 = /*#__PURE__*/vue.createTextVNode(" 昨日此时温度: ");

  var _hoisted_8 = {
    "class": "percent-text-2"
  };

  var _hoisted_9 = /*#__PURE__*/vue.createTextVNode(" 同比增长: ");

  var _hoisted_10 = {
    "class": "percent"
  };
  var _hoisted_11 = {
    "class": "percent-inner-wrapper"
  };

  vue.popScopeId();

  var render$5 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
    var _component_CountTo = vue.resolveComponent("CountTo");

    return vue.openBlock(), vue.createBlock("div", _hoisted_1$4, [_hoisted_2$3, _hoisted_3$2, vue.createVNode("div", _hoisted_4, [vue.createVNode(_component_CountTo, {
      startVal: $setup.startVal,
      endVal: $props.todaysTemperature,
      duration: 1000,
      decimals: 1,
      suffix: "°"
    }, null, 8
    /* PROPS */
    , ["startVal", "endVal"])]), vue.createVNode("div", _hoisted_5, [vue.createVNode("span", _hoisted_6, [_hoisted_7, vue.createVNode(_component_CountTo, {
      startVal: $setup.startPercent,
      endVal: $props.yesterdayTemperature,
      duration: 1000,
      decimals: 1,
      suffix: "°"
    }, null, 8
    /* PROPS */
    , ["startVal", "endVal"])]), vue.createVNode("span", _hoisted_8, [_hoisted_9, vue.createVNode(_component_CountTo, {
      startVal: $setup.startPercent2,
      endVal: $props.growthRate,
      duration: 1000,
      decimals: 1,
      suffix: "%"
    }, null, 8
    /* PROPS */
    , ["startVal", "endVal"])])]), vue.createCommentVNode(" 进度条 "), vue.createVNode("div", _hoisted_10, [vue.createVNode("div", _hoisted_11, [vue.createVNode("div", {
      "class": "percent-inner",
      style: {
        width: "".concat($props.growthRate, "%")
      }
    }, null, 4
    /* STYLE */
    )])])]);
  });

  var css_248z$5 = "@charset \"UTF-8\";\n/*总体布局*/\n.TemperatureIncrease[data-v-52530eaf] {\n  width: 100%;\n  height: 100%;\n  background: #424446;\n  box-shadow: 1 10px 10px rgba(0, 0, 0, 0.3);\n  padding: 20px 40px;\n  box-sizing: border-box;\n  /*大标题*/\n  /*小标题*/\n  /*进度条容器*/\n}\n.TemperatureIncrease[data-v-52530eaf] .title {\n  font-size: 32px;\n}\n.TemperatureIncrease[data-v-52530eaf] .sub-title {\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n.TemperatureIncrease[data-v-52530eaf] .total {\n  font-family: DIN;\n  font-size: 68px;\n  font-weight: bolder;\n  letter-spacing: 2px;\n  padding: 10px 0;\n}\n.TemperatureIncrease[data-v-52530eaf] .percent-text {\n  font-size: 28px;\n  font-family: DIN;\n  letter-spacing: 2px;\n}\n.TemperatureIncrease[data-v-52530eaf] .percent {\n  widows: 100%;\n  height: 20px;\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  margin-top: 20px;\n}\n.TemperatureIncrease[data-v-52530eaf] .percent .percent-inner-wrapper {\n  height: 100%;\n  padding: 2px;\n  box-sizing: border-box;\n  overflow: hidden;\n  /*进度条*/\n}\n.TemperatureIncrease[data-v-52530eaf] .percent .percent-inner-wrapper .percent-inner {\n  width: 10%;\n  height: 100%;\n  background: #969696;\n  transition: width 1s linear;\n  /*增加一个过度动画 宽度线性变化*/\n}";
  styleInject(css_248z$5);

  script$5.render = render$5;
  script$5.__scopeId = "data-v-52530eaf";
  script$5.__file = "src/components/TotalUser/TotalUser.vue";

  function TotalUser (Vue) {
    Vue.component(script$5.name, script$5);
  }

  var lastTime = 0;
  var prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

  var requestAnimationFrame;
  var cancelAnimationFrame;
  var isServer = typeof window === 'undefined';

  if (isServer) {
    requestAnimationFrame = function requestAnimationFrame() {
      return;
    };

    cancelAnimationFrame = function cancelAnimationFrame() {
      return;
    };
  } else {
    requestAnimationFrame = window.requestAnimationFrame;
    cancelAnimationFrame = window.cancelAnimationFrame;
    var prefix; // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式

    for (var i = 0; i < prefixes.length; i++) {
      if (requestAnimationFrame && cancelAnimationFrame) {
        break;
      }

      prefix = prefixes[i];
      requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
      cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
    } // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout


    if (!requestAnimationFrame || !cancelAnimationFrame) {
      requestAnimationFrame = function requestAnimationFrame(callback) {
        var currTime = new Date().getTime(); // 为了使setTimteout的尽可能的接近每秒60帧的效果

        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

      cancelAnimationFrame = function cancelAnimationFrame(id) {
        window.clearTimeout(id);
      };
    }
  }

  var script$6 = {
    name: 'CountTo',
    props: {
      startVal: {
        type: Number,
        required: false,
        "default": 0
      },
      endVal: {
        type: Number,
        required: false,
        "default": 2017
      },
      duration: {
        type: Number,
        required: false,
        "default": 3000
      },
      autoplay: {
        type: Boolean,
        required: false,
        "default": true
      },
      decimals: {
        type: Number,
        required: false,
        "default": 0,
        validator: function validator(value) {
          return value >= 0;
        }
      },
      decimal: {
        type: String,
        required: false,
        "default": '.'
      },
      separator: {
        type: String,
        required: false,
        "default": ','
      },
      prefix: {
        type: String,
        required: false,
        "default": ''
      },
      suffix: {
        type: String,
        required: false,
        "default": ''
      },
      useEasing: {
        type: Boolean,
        required: false,
        "default": true
      },
      easingFn: {
        type: Function,
        "default": function _default(t, b, c, d) {
          return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        }
      }
    },
    data: function data() {
      return {
        localStartVal: this.startVal,
        displayValue: this.formatNumber(this.startVal),
        printVal: null,
        paused: false,
        localDuration: this.duration,
        startTime: null,
        timestamp: null,
        remaining: null,
        rAF: null
      };
    },
    computed: {
      countDown: function countDown() {
        return this.startVal > this.endVal;
      }
    },
    watch: {
      startVal: function startVal() {
        if (this.autoplay) {
          this.start();
        }
      },
      endVal: function endVal() {
        if (this.autoplay) {
          this.start();
        }
      }
    },
    mounted: function mounted() {
      if (this.autoplay) {
        this.start();
      }

      this.$emit('mountedCallback');
    },
    methods: {
      start: function start() {
        this.localStartVal = this.startVal;
        this.startTime = null;
        this.localDuration = this.duration;
        this.paused = false;
        this.rAF = requestAnimationFrame(this.count);
      },
      pauseResume: function pauseResume() {
        if (this.paused) {
          this.resume();
          this.paused = false;
        } else {
          this.pause();
          this.paused = true;
        }
      },
      pause: function pause() {
        cancelAnimationFrame(this.rAF);
      },
      resume: function resume() {
        this.startTime = null;
        this.localDuration = +this.remaining;
        this.localStartVal = +this.printVal;
        requestAnimationFrame(this.count);
      },
      reset: function reset() {
        this.startTime = null;
        cancelAnimationFrame(this.rAF);
        this.displayValue = this.formatNumber(this.startVal);
      },
      count: function count(timestamp) {
        if (!this.startTime) this.startTime = timestamp;
        this.timestamp = timestamp;
        var progress = timestamp - this.startTime;
        this.remaining = this.localDuration - progress;

        if (this.useEasing) {
          if (this.countDown) {
            this.printVal = this.localStartVal - this.easingFn(progress, 0, this.localStartVal - this.endVal, this.localDuration);
          } else {
            this.printVal = this.easingFn(progress, this.localStartVal, this.endVal - this.localStartVal, this.localDuration);
          }
        } else {
          if (this.countDown) {
            this.printVal = this.localStartVal - (this.localStartVal - this.endVal) * (progress / this.localDuration);
          } else {
            this.printVal = this.localStartVal + (this.endVal - this.localStartVal) * (progress / this.localDuration);
          }
        }

        if (this.countDown) {
          this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal;
        } else {
          this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal;
        }

        this.displayValue = this.formatNumber(this.printVal);

        if (progress < this.localDuration) {
          this.rAF = requestAnimationFrame(this.count);
        } else {
          this.$emit('callback');
        }
      },
      isNumber: function isNumber(val) {
        return !isNaN(parseFloat(val));
      },
      formatNumber: function formatNumber(num) {
        num = num.toFixed(this.decimals);
        num += '';
        var x = num.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? this.decimal + x[1] : '';
        var rgx = /(\d+)(\d{3})/;

        if (this.separator && !this.isNumber(this.separator)) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + this.separator + '$2');
          }
        }

        return this.prefix + x1 + x2 + this.suffix;
      }
    },
    destroyed: function destroyed() {
      cancelAnimationFrame(this.rAF);
    }
  };

  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("span", null, vue.toDisplayString($data.displayValue), 1
    /* TEXT */
    );
  }

  script$6.render = render$6;
  script$6.__file = "src/components/VueCountTo/vue-countTo.vue";

  function VueCountTo (Vue) {
    Vue.component(script$6.name, script$6);
  }

  var script$7 = {
    name: 'averageAge',
    props: {
      data: Array,
      avgAge: Number
    },
    setup: function setup(ctx) {
      var startAge = vue.ref(0);
      var options = vue.ref(null);

      var updateChart = function updateChart() {
        var newData = [];
        var color = [];
        var max = 0;
        var axis = ['指标'];
        console.log(ctx.data);
        ctx.data.forEach(function (item) {
          newData.push(item.value);
          max += +item.value;
          color.push(item.color);
          axis.push(item.axis);
        });
        options.value = {
          color: color,
          dataset: {
            source: [axis, newData]
          },
          xAxis: {
            type: 'value',
            max: max
          },
          yAxis: {
            type: 'category'
          }
        };
      };

      vue.watch(function () {
        return ctx.avgAge;
      }, function (nextValue, prevValue) {
        startAge.value = prevValue;
      });
      vue.watch(function () {
        return ctx.data;
      }, function () {
        updateChart();
      });
      vue.onMounted(function () {
      });
      return {
        startAge: startAge,
        options: options
      };
    }
  };

  var _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-53a210cf");

  vue.pushScopeId("data-v-53a210cf");

  var _hoisted_1$5 = {
    "class": "average-age"
  };
  var _hoisted_2$4 = {
    "class": "title-wrapper"
  };

  var _hoisted_3$3 = /*#__PURE__*/vue.createVNode("div", {
    "class": "average-age-left"
  }, [/*#__PURE__*/vue.createVNode("div", {
    "class": "title"
  }, "慕课外卖用户年龄分布&平均年龄"), /*#__PURE__*/vue.createVNode("div", {
    "class": "sub-title"
  }, "Distribution of Age")], -1
  /* HOISTED */
  );

  var _hoisted_4$1 = {
    "class": "average-age-right"
  };
  var _hoisted_5$1 = {
    "class": "age"
  };

  var _hoisted_6$1 = /*#__PURE__*/vue.createVNode("span", {
    "class": "age-unit"
  }, "岁", -1
  /* HOISTED */
  );

  var _hoisted_7$1 = {
    id: "average-age-chart"
  };
  var _hoisted_8$1 = {
    "class": "average-data-wrapper"
  };
  var _hoisted_9$1 = {
    "class": "average-data-value"
  };
  var _hoisted_10$1 = {
    "class": "average-data-axis"
  };
  var _hoisted_11$1 = {
    "class": "text"
  };

  vue.popScopeId();

  var render$7 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
    var _component_CountTo = vue.resolveComponent("CountTo");

    var _component_VueEcharts = vue.resolveComponent("VueEcharts");

    return vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [vue.createVNode("div", _hoisted_2$4, [_hoisted_3$3, vue.createVNode("div", _hoisted_4$1, [vue.createVNode("div", _hoisted_5$1, [vue.createVNode(_component_CountTo, {
      "start-val": $setup.startAge,
      "end-val": $props.avgAge,
      duration: 1000,
      decimals: 2
    }, null, 8
    /* PROPS */
    , ["start-val", "end-val"]), _hoisted_6$1])])]), vue.createVNode("div", _hoisted_7$1, [vue.createVNode(_component_VueEcharts, {
      options: $setup.options
    }, null, 8
    /* PROPS */
    , ["options"])]), vue.createVNode("div", _hoisted_8$1, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.data, function (item, index) {
      return vue.openBlock(), vue.createBlock("div", {
        "class": "average-data",
        key: index
      }, [vue.createVNode("div", _hoisted_9$1, [vue.createVNode(_component_CountTo, {
        "start-val": item.startValue,
        "end-val": item.value,
        duration: 1000
      }, null, 8
      /* PROPS */
      , ["start-val", "end-val"])]), vue.createVNode("div", _hoisted_10$1, [vue.createVNode("div", {
        "class": "point",
        style: {
          background: item.color
        }
      }, null, 4
      /* STYLE */
      ), vue.createVNode("div", _hoisted_11$1, vue.toDisplayString(item.axis), 1
      /* TEXT */
      )])]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]);
  });

  var css_248z$6 = ".average-age[data-v-53a210cf] {\n  width: 100%;\n  height: 100%;\n  background: #2b2c2e;\n  padding: 20px 40px;\n  box-sizing: border-box;\n}\n.average-age[data-v-53a210cf] .title-wrapper {\n  display: flex;\n  align-items: center;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-left .title {\n  font-size: 32px;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-left .sub-title {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-right {\n  flex: 1;\n  margin-left: 40px;\n  font-weight: bold;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-right .age {\n  font-size: 68px;\n  font-family: DIN;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-right .age .age-unit {\n  font-size: 20px;\n}\n.average-age[data-v-53a210cf] #average-age-chart {\n  height: 120px;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper {\n  display: flex;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: bolder;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-value {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-axis {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 5px;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-axis .point {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-axis .text {\n  margin-left: 10px;\n  font-size: 16px;\n}";
  styleInject(css_248z$6);

  script$7.render = render$7;
  script$7.__scopeId = "data-v-53a210cf";
  script$7.__file = "src/components/AverageAge/AverageAge.vue";

  function AverageAge (Vue) {
    Vue.component(script$7.name, script$7);
  }

  var script$8 = {
    name: 'VueEcharts',
    props: {
      options: Object,
      theme: [String, Object]
    },
    setup: function setup(ctx) {
      var dom;
      var chart;

      var initChart = function initChart() {
        if (!chart) {
          dom = document.getElementsByClassName('echarts')[0];
          chart = Echarts__default['default'].init(dom, ctx.theme);
        }

        if (ctx.options) {
          chart.setOption(ctx.options);
        }
      };

      vue.onMounted(function () {
        initChart();
      });
      vue.watch(function () {
        return ctx.options;
      }, function () {
        initChart();
      });
    }
  };

  var _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-1f52796f");

  vue.pushScopeId("data-v-1f52796f");

  var _hoisted_1$6 = {
    "class": "echarts"
  };

  vue.popScopeId();

  var render$8 = /*#__PURE__*/_withId$6(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$6);
  });

  var css_248z$7 = ".echarts[data-v-1f52796f] {\n  width: 100%;\n  height: 100%;\n}";
  styleInject(css_248z$7);

  script$8.render = render$8;
  script$8.__scopeId = "data-v-1f52796f";
  script$8.__file = "src/components/VueEcharts/vueEcharts.vue";

  function Echarts (Vue) {
    Vue.component(script$8.name, script$8);
  }

  function index (Vue) {
    Vue.use(Loading);
    Vue.use(flybox);
    Vue.use(container);
    Vue.use(topHeader);
    Vue.use(headerLogo);
    Vue.use(TotalUser);
    Vue.use(VueCountTo);
    Vue.use(AverageAge);
    Vue.use(Echarts);
  }

  return index;

})));
