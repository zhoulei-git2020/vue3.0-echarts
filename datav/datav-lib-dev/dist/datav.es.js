import { computed, pushScopeId, popScopeId, openBlock, createBlock, createCommentVNode, createVNode, renderSlot, withScopeId, ref, onMounted, getCurrentInstance, onUnmounted, nextTick, resolveComponent, watch, createTextVNode, toDisplayString, Fragment, renderList } from 'vue';
import crypto from 'crypto';
import 'echarts/lib/chart/bar';
import Echarts$1 from 'echarts';

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
    var outsideColorAnimation = computed(function () {
      return "".concat(ctx.outsideColor, ";").concat(ctx.insideColor, ";").concat(ctx.outsideColor);
    }); //外圈颜色变换

    var insideColorAnimation = computed(function () {
      return "".concat(ctx.insideColor, ";").concat(ctx.outsideColor, ";").concat(ctx.insideColor);
    }); //内圈颜色变换

    return {
      outsideColorAnimation: outsideColorAnimation,
      insideColorAnimation: insideColorAnimation
    };
  }
};

var _withId = /*#__PURE__*/withScopeId("data-v-416d18c9");

pushScopeId("data-v-416d18c9");

var _hoisted_1 = {
  "class": "loading"
};
var _hoisted_2 = {
  "class": "loading-content"
};

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [(openBlock(), createBlock("svg", {
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 50 50",
    preserveAspectRatio: "xMidYMid meet"
  }, [createCommentVNode(" \r\n                stroke-dasharray = 2pir/4 =2*3.1415926*22/4 = 34\r\n             "), createVNode("circle", {
    cx: "25",
    cy: "25",
    r: "22",
    fill: "none",
    "stroke-width": "3",
    stroke: $props.outsideColor,
    "stroke-dasharray": "34",
    "stroke-linecap": "round"
  }, [createCommentVNode(" 旋转动画 "), createVNode("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "0 25 25;360 25 25",
    dur: "".concat(+$props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"]), createCommentVNode(" 变色动画 "), createVNode("animate", {
    attributeName: "stroke",
    values: $setup.outsideColorAnimation,
    dur: "".concat(+$props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["values", "dur"])], 8
  /* PROPS */
  , ["stroke"]), createVNode("circle", {
    cx: "25",
    cy: "25",
    r: "12",
    fill: "none",
    "stroke-width": "3",
    stroke: $props.insideColor,
    "stroke-dasharray": "19",
    "stroke-linecap": "round"
  }, [createCommentVNode(" 旋转动画 "), createVNode("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "0 25 25;-360 25 25",
    dur: "".concat(+$props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"]), createCommentVNode(" 变色动画 "), createVNode("animate", {
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
  , ["width", "height"])), createVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default")])]);
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
    crypto.randomFillSync(rnds8Pool);
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
    var width = ref(0);
    var height = ref(0);
    var refName = "flybox";
    var pathId = "".concat(refName, "-path-").concat(uuid);
    var radialGradientId = "".concat(refName, "-gradient-").concat(uuid);
    var maskId = "".concat(refName, "-mask-").concat(uuid);
    var path = computed(function () {
      return "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, " L5 ").concat(height.value - 5, " Z");
    });

    var init = function init() {
      var instance = getCurrentInstance();
      var dom = instance.ctx.$refs[refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    };

    onMounted(function () {
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

var _withId$1 = /*#__PURE__*/withScopeId("data-v-513cc2e2");

pushScopeId("data-v-513cc2e2");

var _hoisted_1$1 = /*#__PURE__*/createVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1
/* HOISTED */
);

var _hoisted_2$1 = /*#__PURE__*/createVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "fly-box-content"
};

popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    "class": "flybox",
    ref: $setup.refName
  }, [(openBlock(), createBlock("svg", {
    width: $setup.width,
    height: $setup.height
  }, [createVNode("defs", null, [createVNode("path", {
    id: $setup.pathId,
    d: $setup.path,
    fill: "none"
  }, null, 8
  /* PROPS */
  , ["id", "d"]), createVNode("radialGradient", {
    id: $setup.radialGradientId,
    cx: "50%",
    cy: "50%",
    fx: "100%",
    fy: "50%",
    r: "50%"
  }, [_hoisted_1$1, _hoisted_2$1], 8
  /* PROPS */
  , ["id"]), createVNode("mask", {
    id: $setup.maskId
  }, [createVNode("circle", {
    r: $props.starLength,
    cx: "0",
    cy: "0",
    fill: "url(#".concat($setup.radialGradientId, ")")
  }, [createVNode("animateMotion", {
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
  , ["id"])]), createVNode("use", {
    href: "#".concat($setup.pathId),
    "stroke-width": "1",
    stroke: $props.lineColor
  }, null, 8
  /* PROPS */
  , ["href", "stroke"]), createVNode("use", {
    href: "#".concat($setup.pathId),
    "stroke-width": "3",
    stroke: $props.starColor,
    mask: "url(#".concat($setup.maskId, ")")
  }, null, 8
  /* PROPS */
  , ["href", "stroke", "mask"])], 8
  /* PROPS */
  , ["width", "height"])), createVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default")])], 512
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
    var width = ref(0);
    var height = ref(0); //组件视口宽

    var originalWidth = ref(0); //组件视口高

    var originalHeight = ref(0);
    var ready = ref(false);
    var context, dom, observer;

    var initSize = function initSize() {
      return new Promise(function (resolve) {
        nextTick(function () {
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

    onMounted( /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ready.value = false; //不进行元素展示

              context = getCurrentInstance().ctx; //第一步调用init方法拿到视口的尺寸

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

    onUnmounted(function () {
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
  return openBlock(), createBlock("div", {
    id: "container",
    ref: $setup.refName,
    style: _ctx.style
  }, [$setup.ready ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("v-if", true)], 4
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

var _withId$2 = /*#__PURE__*/withScopeId("data-v-1303fca8");

pushScopeId("data-v-1303fca8");

var _hoisted_1$2 = {
  "class": "top_header"
};
var _hoisted_2$2 = {
  "class": "logo-wrapper"
};

var _hoisted_3$1 = /*#__PURE__*/createVNode("div", {
  "class": "logo-text"
}, [/*#__PURE__*/createCommentVNode(" 中文标题 "), /*#__PURE__*/createVNode("div", {
  "class": "cn-text"
}, "物联网传感器数据大盘"), /*#__PURE__*/createCommentVNode(" 英文标题 "), /*#__PURE__*/createVNode("div", {
  "class": "en-text"
}, "Internet of things sensor data market")], -1
/* HOISTED */
);

popScopeId();

var render$3 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_headerLogo = resolveComponent("headerLogo");

  return openBlock(), createBlock("div", _hoisted_1$2, [createCommentVNode(" <img class=\"logo\" src=\"http://www.youbaobao.xyz/resource.imooc.png\"> "), createCommentVNode(" 使用headerLogo 组件 SVG图标作为logo "), createVNode("div", _hoisted_2$2, [createVNode(_component_headerLogo, {
    stroke: "#f40be2",
    "stroke-width": "10"
  })]), createCommentVNode(" 标题文字 "), _hoisted_3$1]);
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
    onMounted(function () {
      //获取svg的长度必须以path标签内的元素 
      //如果有多条线段的不规则图形就以最长的线段为基准
      //得出最长线段为6617
      var logo = document.getElementsByClassName('headerLogo_path')[0];
      console.log(logo.getTotalLength());
    });
  }
};

var _withId$3 = /*#__PURE__*/withScopeId("data-v-5e81d1e6");

pushScopeId("data-v-5e81d1e6");

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

popScopeId();

var render$4 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3, [createVNode("path", {
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
    var startVal = ref(0); //今日温度起始值

    var startPercent = ref(0); //昨日此时温度起始值

    var startPercent2 = ref(0); //同比增长起始值
    //watch方法在数据渲染之前起作用
    //监听今日温度起始值是否改变,将上一次今日温度值赋值给今日温度起始值

    watch(function () {
      return props.todaysTemperature;
    }, function (nextValue, prevValue) {
      startVal.value = prevValue;
    }); //监听昨日此时温度起始值是否改变,将上一次昨日此时温度值赋值给昨日此时温度起始值

    watch(function () {
      return props.growthRate;
    }, function (nextValue, prevValue) {
      startPercent2.value = prevValue;
    }); //监听增长率起始值是否改变,将上一次增长率值赋值给增长率起始值

    watch(function () {
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

var _withId$4 = /*#__PURE__*/withScopeId("data-v-52530eaf");

pushScopeId("data-v-52530eaf");

var _hoisted_1$4 = {
  "class": "TemperatureIncrease"
};

var _hoisted_2$3 = /*#__PURE__*/createVNode("div", {
  "class": "title"
}, "今日实时温度", -1
/* HOISTED */
);

var _hoisted_3$2 = /*#__PURE__*/createVNode("div", {
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

var _hoisted_7 = /*#__PURE__*/createTextVNode(" 昨日此时温度: ");

var _hoisted_8 = {
  "class": "percent-text-2"
};

var _hoisted_9 = /*#__PURE__*/createTextVNode(" 同比增长: ");

var _hoisted_10 = {
  "class": "percent"
};
var _hoisted_11 = {
  "class": "percent-inner-wrapper"
};

popScopeId();

var render$5 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CountTo = resolveComponent("CountTo");

  return openBlock(), createBlock("div", _hoisted_1$4, [_hoisted_2$3, _hoisted_3$2, createVNode("div", _hoisted_4, [createVNode(_component_CountTo, {
    startVal: $setup.startVal,
    endVal: $props.todaysTemperature,
    duration: 1000,
    decimals: 1,
    suffix: "°"
  }, null, 8
  /* PROPS */
  , ["startVal", "endVal"])]), createVNode("div", _hoisted_5, [createVNode("span", _hoisted_6, [_hoisted_7, createVNode(_component_CountTo, {
    startVal: $setup.startPercent,
    endVal: $props.yesterdayTemperature,
    duration: 1000,
    decimals: 1,
    suffix: "°"
  }, null, 8
  /* PROPS */
  , ["startVal", "endVal"])]), createVNode("span", _hoisted_8, [_hoisted_9, createVNode(_component_CountTo, {
    startVal: $setup.startPercent2,
    endVal: $props.growthRate,
    duration: 1000,
    decimals: 1,
    suffix: "%"
  }, null, 8
  /* PROPS */
  , ["startVal", "endVal"])])]), createCommentVNode(" 进度条 "), createVNode("div", _hoisted_10, [createVNode("div", _hoisted_11, [createVNode("div", {
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
  return openBlock(), createBlock("span", null, toDisplayString($data.displayValue), 1
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
    var startAge = ref(0);
    var options = ref(null);

    var updateChart = function updateChart() {
      var newData = ['指标'];
      var color = [];
      var max = 0;
      var axis = ['指标'];
      ctx.data.forEach(function (item) {
        newData.push(item.value);
        max += +item.value;
        color.push(item.color);
        axis.push(item.axis);
      });
      options.value = {
        tooltip: {
          textStyle: {
            fontSize: 28
          }
        },
        color: color,
        grid: {
          left: 40,
          right: 40,
          top: 0
        },
        dataset: {
          source: [axis, newData]
        },
        xAxis: {
          type: 'value',
          max: max,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 18
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(50,51,53)',
              width: 3
            }
          }
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          stack: 'total',
          barWidth: 15
        }, {
          type: 'bar',
          stack: 'total'
        }, {
          type: 'bar',
          stack: 'total'
        }, {
          type: 'bar',
          stack: 'total'
        }]
      };
    };

    watch(function () {
      return ctx.avgAge;
    }, function (nextValue, prevValue) {
      startAge.value = prevValue;
    });
    watch(function () {
      return ctx.data;
    }, function () {
      updateChart();
    });
    onMounted(function () {
    });
    return {
      startAge: startAge,
      options: options
    };
  }
};

var _withId$5 = /*#__PURE__*/withScopeId("data-v-53a210cf");

pushScopeId("data-v-53a210cf");

var _hoisted_1$5 = {
  "class": "average-age"
};
var _hoisted_2$4 = {
  "class": "title-wrapper"
};

var _hoisted_3$3 = /*#__PURE__*/createVNode("div", {
  "class": "average-age-left"
}, [/*#__PURE__*/createVNode("div", {
  "class": "title"
}, "用户年龄分布&平均年龄"), /*#__PURE__*/createVNode("div", {
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

var _hoisted_6$1 = /*#__PURE__*/createVNode("span", {
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

popScopeId();

var render$7 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CountTo = resolveComponent("CountTo");

  var _component_VueEcharts = resolveComponent("VueEcharts");

  return openBlock(), createBlock("div", _hoisted_1$5, [createVNode("div", _hoisted_2$4, [_hoisted_3$3, createVNode("div", _hoisted_4$1, [createVNode("div", _hoisted_5$1, [createVNode(_component_CountTo, {
    "start-val": $setup.startAge,
    "end-val": $props.avgAge,
    duration: 1000,
    decimals: 2
  }, null, 8
  /* PROPS */
  , ["start-val", "end-val"]), _hoisted_6$1])])]), createVNode("div", _hoisted_7$1, [createVNode(_component_VueEcharts, {
    options: $setup.options
  }, null, 8
  /* PROPS */
  , ["options"])]), createVNode("div", _hoisted_8$1, [(openBlock(true), createBlock(Fragment, null, renderList($props.data, function (item, index) {
    return openBlock(), createBlock("div", {
      "class": "average-data",
      key: index
    }, [createVNode("div", _hoisted_9$1, [createVNode(_component_CountTo, {
      "start-val": item.startValue,
      "end-val": item.value,
      duration: 1000
    }, null, 8
    /* PROPS */
    , ["start-val", "end-val"])]), createVNode("div", _hoisted_10$1, [createVNode("div", {
      "class": "point",
      style: {
        background: item.color
      }
    }, null, 4
    /* STYLE */
    ), createVNode("div", _hoisted_11$1, toDisplayString(item.axis), 1
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
    var className = "echarts".concat(v4());

    var initChart = function initChart() {
      if (!chart) {
        dom = document.getElementsByClassName(className)[0];
        chart = Echarts$1.init(dom, ctx.theme);
      }

      if (ctx.options) {
        chart.setOption(ctx.options);
      }
    };

    onMounted(function () {
      initChart();
    });
    watch(function () {
      return ctx.options;
    }, function () {
      console.log(ctx.options);
      initChart();
    });
    return {
      className: className
    };
  }
};

var _withId$6 = /*#__PURE__*/withScopeId("data-v-1f52796f");

var render$8 = /*#__PURE__*/_withId$6(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    "class": [$setup.className, 'echarts']
  }, null, 2
  /* CLASS */
  );
});

var css_248z$7 = ".echarts[data-v-1f52796f] {\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$7);

script$8.render = render$8;
script$8.__scopeId = "data-v-1f52796f";
script$8.__file = "src/components/VueEcharts/vueEcharts.vue";

function Echarts (Vue) {
  Vue.component(script$8.name, script$8);
}

var color = ['rgb(176,207,120)', 'rgb(157,195,91)', 'rgb(131,167,72)'];
var script$9 = {
  name: 'TotalDevice',
  props: {
    data: Object
  },
  setup: function setup(props) {
    var refData = ref([]);
    var num = ref(0);
    var startNum = ref(0);
    var options = ref({});

    var updateChart = function updateChart() {
      options.value = {
        series: [{
          name: '设备总数',
          type: 'pie',
          data: refData.value,
          roseType: 'radius',
          //南丁格尔图
          label: {
            show: false
          },
          //外圆指示文字
          emphasis: {
            //鼠标移动上去的颜色变化
            itemStyle: {
              color: 'rgb(140,251,182)'
            }
          },
          radius: '70%',
          //半径大小
          clockwise: true,
          //true 数据从大到小顺时针排列 false 数据从大到小逆时针排列
          color: color,
          //颜色
          selectedMode: 'multiple',
          //可以一次点击多个区域
          selectedOffset: 15 //点击之后扇形图偏移的距离

        }]
      };
    };

    var update = function update(newData) {
      if (refData.value.length > 0) {
        refData.value = newData.devices.map(function (item, index) {
          return {
            startValue: refData.value[index].value,
            value: item.value,
            name: item.key,
            color: color[index]
          };
        });
      } else {
        refData.value = newData.devices.map(function (item, index) {
          return {
            startValue: 0,
            value: item.value,
            name: item.key,
            color: color[index]
          };
        });
      }

      startNum.value = num.value;
      num.value = +newData.totalDevices;
      updateChart();
    };

    watch(function () {
      return props.data;
    }, function (newData) {
      update(newData);
    });
    onMounted(function () {
      update(props.data);
    });
    return {
      refData: refData,
      num: num,
      startNum: startNum,
      options: options
    };
  }
};

var _withId$7 = /*#__PURE__*/withScopeId("data-v-6ca3fa45");

pushScopeId("data-v-6ca3fa45");

var _hoisted_1$6 = {
  "class": "total-device"
};
var _hoisted_2$5 = {
  "class": "total-device-left"
};
var _hoisted_3$4 = {
  id: "total-device-chart"
};
var _hoisted_4$2 = {
  "class": "total-device-right"
};
var _hoisted_5$2 = {
  "class": "title-wrapper"
};

var _hoisted_6$2 = /*#__PURE__*/createVNode("div", {
  "class": "total-device-right-left"
}, [/*#__PURE__*/createVNode("div", {
  "class": "title"
}, "登录设备"), /*#__PURE__*/createVNode("div", {
  "class": "sub-title"
}, "Distribution of Internet devices")], -1
/* HOISTED */
);

var _hoisted_7$2 = {
  "class": "total-device-right-right"
};
var _hoisted_8$2 = {
  "class": "age"
};

var _hoisted_9$2 = /*#__PURE__*/createVNode("span", {
  "class": "age-unit"
}, "台", -1
/* HOISTED */
);

var _hoisted_10$2 = {
  "class": "average-data-wrapper"
};
var _hoisted_11$2 = {
  "class": "average-data-value"
};
var _hoisted_12 = {
  "class": "average-data-axis"
};
var _hoisted_13 = {
  "class": "text"
};

popScopeId();

var render$9 = /*#__PURE__*/_withId$7(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueEcharts = resolveComponent("VueEcharts");

  var _component_count_to = resolveComponent("count-to");

  return openBlock(), createBlock("div", _hoisted_1$6, [createVNode("div", _hoisted_2$5, [createVNode("div", _hoisted_3$4, [createVNode(_component_VueEcharts, {
    options: $setup.options
  }, null, 8
  /* PROPS */
  , ["options"])])]), createVNode("div", _hoisted_4$2, [createVNode("div", _hoisted_5$2, [_hoisted_6$2, createVNode("div", _hoisted_7$2, [createVNode("div", _hoisted_8$2, [createVNode(_component_count_to, {
    startVal: $setup.startNum,
    endVal: $setup.num,
    duration: 1000
  }, null, 8
  /* PROPS */
  , ["startVal", "endVal"]), _hoisted_9$2])])]), createVNode("div", _hoisted_10$2, [(openBlock(true), createBlock(Fragment, null, renderList($setup.refData, function (item, index) {
    return openBlock(), createBlock("div", {
      "class": "average-data",
      key: index
    }, [createVNode("div", _hoisted_11$2, [createVNode(_component_count_to, {
      startVal: item.startValue,
      endVal: item.value,
      duration: 1000
    }, null, 8
    /* PROPS */
    , ["startVal", "endVal"])]), createVNode("div", _hoisted_12, [createVNode("div", {
      "class": "point",
      style: {
        background: item.color
      }
    }, null, 4
    /* STYLE */
    ), createVNode("div", _hoisted_13, toDisplayString(item.name), 1
    /* TEXT */
    )])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]);
});

var css_248z$8 = ".total-device[data-v-6ca3fa45] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: #2b2c2e;\n}\n.total-device[data-v-6ca3fa45] .total-device-left {\n  width: 30%;\n  height: 100%;\n}\n.total-device[data-v-6ca3fa45] .total-device-left #total-device-chart {\n  width: 100%;\n  height: 100%;\n}\n.total-device[data-v-6ca3fa45] .total-device-right {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px 10px 40px 0;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .title-wrapper {\n  display: flex;\n  align-items: center;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .title-wrapper .total-device-right-left .title {\n  font-size: 32px;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .title-wrapper .total-device-right-left .sub-title {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .title-wrapper .total-device-right-right {\n  flex: 1;\n  margin-left: 40px;\n  font-weight: bold;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .title-wrapper .total-device-right-right .age {\n  font-size: 56px;\n  font-family: DIN;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .title-wrapper .total-device-right-right .age .age-unit {\n  font-size: 20px;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .average-data-wrapper {\n  display: flex;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .average-data-wrapper .average-data {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: bolder;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .average-data-wrapper .average-data .average-data-value {\n  width: 100%;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .average-data-wrapper .average-data .average-data-axis {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 5px;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .average-data-wrapper .average-data .average-data-axis .point {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.total-device[data-v-6ca3fa45] .total-device-right .average-data-wrapper .average-data .average-data-axis .text {\n  margin-left: 10px;\n  font-size: 16px;\n}";
styleInject(css_248z$8);

script$9.render = render$9;
script$9.__scopeId = "data-v-6ca3fa45";
script$9.__file = "src/components/TotalDevice/TotalDevice.vue";

function TotalDevice (Vue) {
  Vue.component(script$9.name, script$9);
}

var script$a = {
  name: 'TotalGender',
  props: {
    data: Array
  },
  setup: function setup(props) {
    var startMale = ref(0);
    var endMale = ref(0);
    var startFemale = ref(0);
    var endFemale = ref(0);

    var update = function update(newData) {
      startMale.value = endMale.value;
      endMale.value = newData[0].value;
      startFemale.value = endFemale.value;
      endFemale.value = newData[1].value;
    };

    onMounted(function () {
      update(props.data);
    });
    watch(function () {
      return props.data;
    }, function (newData) {
      update(newData);
    });
    return {
      startFemale: startFemale,
      startMale: startMale,
      endFemale: endFemale,
      endMale: endMale
    };
  }
};

var _withId$8 = /*#__PURE__*/withScopeId("data-v-0be980ca");

pushScopeId("data-v-0be980ca");

var _hoisted_1$7 = {
  "class": "total-gender"
};
var _hoisted_2$6 = {
  "class": "total-gender-wrapper"
};

var _hoisted_3$5 = /*#__PURE__*/createVNode("div", {
  "class": "total-gender-left"
}, [/*#__PURE__*/createVNode("img", {
  src: "https://www.youbaobao.xyz/datav-res/datav/datav_circle.png"
})], -1
/* HOISTED */
);

var _hoisted_4$3 = {
  "class": "total-gender-right"
};

var _hoisted_5$3 = /*#__PURE__*/createVNode("div", {
  "class": "title"
}, "男性用户人数", -1
/* HOISTED */
);

var _hoisted_6$3 = /*#__PURE__*/createVNode("div", {
  "class": "sub-title"
}, "Number of male users", -1
/* HOISTED */
);

var _hoisted_7$3 = {
  "class": "age"
};

var _hoisted_8$3 = /*#__PURE__*/createVNode("span", {
  "class": "age-unit"
}, "万人", -1
/* HOISTED */
);

var _hoisted_9$3 = {
  "class": "total-gender-wrapper"
};

var _hoisted_10$3 = /*#__PURE__*/createVNode("div", {
  "class": "total-gender-left"
}, [/*#__PURE__*/createVNode("img", {
  src: "https://www.youbaobao.xyz/datav-res/datav/datav_circle.png"
})], -1
/* HOISTED */
);

var _hoisted_11$3 = {
  "class": "total-gender-right"
};

var _hoisted_12$1 = /*#__PURE__*/createVNode("div", {
  "class": "title"
}, "女性用户人数", -1
/* HOISTED */
);

var _hoisted_13$1 = /*#__PURE__*/createVNode("div", {
  "class": "sub-title"
}, "Number of female users", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "age"
};

var _hoisted_15 = /*#__PURE__*/createVNode("span", {
  "class": "age-unit"
}, "万人", -1
/* HOISTED */
);

popScopeId();

var render$a = /*#__PURE__*/_withId$8(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_count_to = resolveComponent("count-to");

  return openBlock(), createBlock("div", _hoisted_1$7, [createVNode("div", _hoisted_2$6, [_hoisted_3$5, createVNode("div", _hoisted_4$3, [_hoisted_5$3, _hoisted_6$3, createVNode("div", _hoisted_7$3, [createVNode(_component_count_to, {
    startVal: $setup.startMale,
    endVal: $setup.endMale,
    duration: 1000
  }, null, 8
  /* PROPS */
  , ["startVal", "endVal"]), _hoisted_8$3])])]), createVNode("div", _hoisted_9$3, [_hoisted_10$3, createVNode("div", _hoisted_11$3, [_hoisted_12$1, _hoisted_13$1, createVNode("div", _hoisted_14, [createVNode(_component_count_to, {
    startVal: $setup.startFemale,
    endVal: $setup.endFemale,
    duration: 1000
  }, null, 8
  /* PROPS */
  , ["startVal", "endVal"]), _hoisted_15])])])]);
});

var css_248z$9 = ".total-gender[data-v-0be980ca] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  background: #2b2c2e;\n  box-sizing: border-box;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper {\n  display: flex;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper .total-gender-left img {\n  width: 75px;\n  height: 75px;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper .total-gender-right {\n  margin-left: 40px;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper .total-gender-right .title {\n  font-size: 32px;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper .total-gender-right .sub-title {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper .total-gender-right .age {\n  font-size: 49px;\n  font-family: DIN;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.total-gender[data-v-0be980ca] .total-gender-wrapper .total-gender-right .age .age-unit {\n  font-size: 20px;\n}";
styleInject(css_248z$9);

script$a.render = render$a;
script$a.__scopeId = "data-v-0be980ca";
script$a.__file = "src/components/TotalGender/TotalGender.vue";

function TotalGender (Vue) {
  Vue.component(script$a.name, script$a);
}

var colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)'];
var script$b = {
  name: 'TotalRider',
  props: {
    data: Object
  },
  setup: function setup(props) {
    var task;
    var currentChart = 0;
    var options = ref({});

    var update = function update() {
      function createOption() {
        var _props$data = props.data,
            axisX = _props$data.axisX,
            orderData = _props$data.orderData,
            rateData = _props$data.rateData;
        var axisData = axisX;
        var legendData = [];
        var data1 = [];
        var data2 = [];

        if (currentChart === 0) {
          legendData = [orderData.legend1, orderData.legend2];
          data1 = orderData.data1;
          data2 = orderData.data2;
        } else {
          legendData = [rateData.legend1, rateData.legend2];
          data1 = rateData.data1;
          data2 = rateData.data2;
        }

        return {
          color: colors,
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            top: 20,
            right: 40,
            icon: 'rect',
            textStyle: {
              fontSize: 16,
              color: colors[2]
            },
            data: legendData
          },
          grid: {
            top: 60,
            bottom: 30,
            left: 80,
            right: 40
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              fontSize: 16
            },
            data: axisData.value
          }, {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: legendData[0],
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            lineStyle: {
              width: 2
            },
            symbol: 'none',
            // data: [5, 100, 70, 120, 80, 15, 200, 300, 195, 150, 80, 103]
            data: data1
          }, {
            name: legendData[1],
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 2
            },
            symbol: 'none',
            // data: [10, 50, 80, 4, 90, 50, 105, 160, 111, 54, 108, 50]
            data: data2
          }]
        };
      }

      options.value = createOption();

      if (currentChart === 0) {
        currentChart = 1;
      } else {
        currentChart = 0;
      }
    };

    var stop = watch(function () {
      return props.data;
    }, function () {
      update();
      task = setInterval(function () {
        update();
      }, 5000);
      stop();
    });
    onMounted(function () {
      update();
    });
    onUnmounted(function () {
      return task && clearInterval(task);
    });
    return {
      options: options
    };
  }
};

var _withId$9 = /*#__PURE__*/withScopeId("data-v-1920104f");

pushScopeId("data-v-1920104f");

var _hoisted_1$8 = {
  "class": "line-chart"
};

var _hoisted_2$7 = /*#__PURE__*/createVNode("div", {
  "class": "title-wrapper"
}, [/*#__PURE__*/createVNode("div", {
  "class": "title"
}, "数据流量使用概况概况"), /*#__PURE__*/createVNode("div", {
  "class": "sub-title"
}, "Data traffic usage")], -1
/* HOISTED */
);

var _hoisted_3$6 = {
  id: "total-rider-chart"
};

popScopeId();

var render$b = /*#__PURE__*/_withId$9(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueEcharts = resolveComponent("VueEcharts");

  return openBlock(), createBlock("div", _hoisted_1$8, [_hoisted_2$7, createVNode("div", _hoisted_3$6, [createVNode(_component_VueEcharts, {
    options: $setup.options
  }, null, 8
  /* PROPS */
  , ["options"])])]);
});

var css_248z$a = ".line-chart[data-v-1920104f] {\n  width: 100%;\n  height: 100%;\n  background: #2b2c2e;\n}\n.line-chart[data-v-1920104f] .title-wrapper {\n  padding: 20px 40px 0;\n  box-sizing: border-box;\n}\n.line-chart[data-v-1920104f] .title-wrapper .title {\n  font-size: 32px;\n}\n.line-chart[data-v-1920104f] .title-wrapper .sub-title {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.line-chart[data-v-1920104f] #total-rider-chart {\n  width: 100%;\n  height: 250px;\n}";
styleInject(css_248z$a);

script$b.render = render$b;
script$b.__scopeId = "data-v-1920104f";
script$b.__file = "src/components/TotalRider/TotalRider.vue";

function TotalRider (Vue) {
  Vue.component(script$b.name, script$b);
}

function dateFilter(v) {
  var m = fillZero(v.getMonth() + 1);
  var d = fillZero(v.getDate());
  return "".concat(v.getFullYear(), "-").concat(m, "-").concat(d);
}

function timeFilter(v) {
  var h = fillZero(v.getHours());
  var m = fillZero(v.getMinutes());
  var s = fillZero(v.getSeconds());
  return "".concat(h, ":").concat(m, ":").concat(s);
}

function fillZero(v) {
  v = v < 10 ? '0' + v : v;
  return v;
}

function clock() {
  var now = new Date();
  var date = ref(dateFilter(now));
  var time = ref(timeFilter(now));
  var task;

  var start = function start() {
    task = setInterval(function () {
      var now = new Date();
      date.value = dateFilter(now);
      time.value = timeFilter(now);
    }, 1000);
  };

  onMounted(start);
  onUnmounted(function () {
    task && clearInterval(task);
  });
  return {
    date: date,
    time: time
  };
}

var script$c = {
  name: 'HotCategory',
  props: {
    data: Object
  },
  setup: function setup(props) {
    var _useClock = clock(),
        time = _useClock.time,
        date = _useClock.date;

    var currentChart = 0;
    var options = ref({});

    var update = function update() {
      function createOption() {
        var sourceData = [];
        var _props$data = props.data,
            data1 = _props$data.data1,
            data2 = _props$data.data2;

        if (currentChart === 0) {
          data1.axisX.forEach(function (axis, index) {
            sourceData.push([axis, data1.data1[index], data1.data2[index]]);
          });
        } else {
          data2.axisX.forEach(function (axis, index) {
            sourceData.push([axis, data2.data1[index], data2.data2[index]]);
          });
        }

        var source = [['指标', '国内', '海外']].concat(sourceData);
        return {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          color: ['rgb(209,248,138)', 'rgba(65,65,65,.5)'],
          grid: {
            left: 20,
            right: 0,
            bottom: 30,
            top: 20
          },
          dataset: {
            source: source
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: 'rgb(124,136,146)'
              }
            },
            axisLabel: {
              color: 'rgb(98,105,113)',
              fontSize: 16
            },
            axisTick: {
              show: false
            }
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'rgb(98,105,113)',
              fontSize: 16
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: 'rgb(124,136,146)'
              }
            }
          },
          series: [{
            type: 'bar',
            stack: 'total',
            barWidth: 40
          }, {
            type: 'bar',
            stack: 'total'
          }]
        };
      }

      options.value = createOption();
      currentChart === 0 ? currentChart = 1 : currentChart = 0;
    };

    watch(function () {
      return props.data;
    }, function () {
      update();
    });
    onMounted(function () {
      update();
    });
    return {
      time: time,
      date: date,
      options: options
    };
  }
};

var _withId$a = /*#__PURE__*/withScopeId("data-v-48a8b9b2");

pushScopeId("data-v-48a8b9b2");

var _hoisted_1$9 = {
  "class": "hot-category"
};
var _hoisted_2$8 = {
  "class": "hot-category-wrapper"
};

var _hoisted_3$7 = /*#__PURE__*/createVNode("div", {
  "class": "hot-category-left"
}, [/*#__PURE__*/createVNode("div", {
  "class": "title"
}, "当前热卖品类"), /*#__PURE__*/createVNode("div", {
  "class": "sub-title"
}, "Hot Categories")], -1
/* HOISTED */
);

var _hoisted_4$4 = {
  "class": "hot-category-right"
};
var _hoisted_5$4 = {
  "class": "sub-title"
};
var _hoisted_6$4 = {
  id: "hot-category-chart"
};

popScopeId();

var render$c = /*#__PURE__*/_withId$a(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueEcharts = resolveComponent("VueEcharts");

  return openBlock(), createBlock("div", _hoisted_1$9, [createVNode("div", _hoisted_2$8, [_hoisted_3$7, createVNode("div", _hoisted_4$4, [createVNode("div", _hoisted_5$4, "最后更新时间：" + toDisplayString($setup.date) + " " + toDisplayString($setup.time), 1
  /* TEXT */
  )])]), createVNode("div", _hoisted_6$4, [createVNode(_component_VueEcharts, {
    options: $setup.options
  }, null, 8
  /* PROPS */
  , ["options"])])]);
});

var css_248z$b = ".hot-category[data-v-48a8b9b2] {\n  width: 100%;\n  height: 100%;\n  background: #2b2c2e;\n  padding: 20px 40px;\n  box-sizing: border-box;\n}\n.hot-category[data-v-48a8b9b2] .hot-category-wrapper {\n  display: flex;\n}\n.hot-category[data-v-48a8b9b2] .hot-category-wrapper .hot-category-right {\n  flex: 1;\n  text-align: right;\n}\n.hot-category[data-v-48a8b9b2] .hot-category-wrapper .title {\n  font-size: 32px;\n}\n.hot-category[data-v-48a8b9b2] .hot-category-wrapper .sub-title {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.hot-category[data-v-48a8b9b2] #hot-category-chart {\n  height: 220px;\n}";
styleInject(css_248z$b);

script$c.render = render$c;
script$c.__scopeId = "data-v-48a8b9b2";
script$c.__file = "src/components/HotCategory/HotCategory.vue";

function HotCategory (Vue) {
  Vue.component(script$c.name, script$c);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var script$d = {
  name: 'CenterHeader',
  props: {
    data: Object
  },
  setup: function setup(props) {
    var project = ref([]);
    var headerData = ref([]);
    var startPercent = ref(0);

    var update = function update(newdata) {
      project.value = toConsumableArray(props.data.project.value);
      headerData.value = toConsumableArray(props.data.headerData.value);
    };

    onMounted(function () {
      update();
    });
    watch(function () {
      return props.data;
    }, function (newdata) {
      update();
    });
    watch(function () {
      return props.data.project.value.value;
    }, function (nextValue, prevValue) {
      startPercent.value = prevValue;
    });
    return {
      project: project,
      headerData: headerData,
      startPercent: startPercent
    };
  }
};

var _withId$b = /*#__PURE__*/withScopeId("data-v-a66e2ce2");

pushScopeId("data-v-a66e2ce2");

var _hoisted_1$a = {
  "class": "center-header"
};
var _hoisted_2$9 = {
  "class": "center-header-wrapper"
};
var _hoisted_3$8 = {
  "class": "center-header-left"
};
var _hoisted_4$5 = {
  "class": "bg"
};
var _hoisted_5$5 = {
  "class": "center-header-right"
};
var _hoisted_6$5 = {
  "class": "title"
};
var _hoisted_7$4 = {
  "class": "sub-title"
};
var _hoisted_8$4 = {
  "class": "total"
};
var _hoisted_9$4 = {
  "class": "project-wrapper"
};
var _hoisted_10$4 = {
  "class": "project-img"
};
var _hoisted_11$4 = {
  "class": "project-text"
};
var _hoisted_12$2 = {
  "class": "project-value"
};

popScopeId();

var render$d = /*#__PURE__*/_withId$b(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_count_to = resolveComponent("count-to");

  return openBlock(), createBlock("div", _hoisted_1$a, [createVNode("div", _hoisted_2$9, [(openBlock(true), createBlock(Fragment, null, renderList($setup.headerData, function (item, index) {
    return openBlock(), createBlock("div", {
      "class": "center-header-item",
      key: index
    }, [createVNode("div", _hoisted_3$8, [createVNode("div", _hoisted_4$5, [createVNode("div", {
      "class": "img",
      style: {
        backgroundImage: "url('".concat(item.img, "')")
      }
    }, null, 4
    /* STYLE */
    )])]), createVNode("div", _hoisted_5$5, [createVNode("div", _hoisted_6$5, toDisplayString(item.title), 1
    /* TEXT */
    ), createVNode("div", _hoisted_7$4, toDisplayString(item.subTitle), 1
    /* TEXT */
    ), createVNode("div", _hoisted_8$4, [createVNode(_component_count_to, {
      "start-val": item.startVal,
      "end-val": item.endVal,
      duration: 1000,
      separator: ",",
      autoplay: ""
    }, null, 8
    /* PROPS */
    , ["start-val", "end-val"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), createVNode("div", _hoisted_9$4, [(openBlock(true), createBlock(Fragment, null, renderList($setup.project, function (item, index) {
    return openBlock(), createBlock("div", {
      "class": "project",
      key: index
    }, [createVNode("div", _hoisted_10$4, [createVNode("img", {
      src: item.img
    }, null, 8
    /* PROPS */
    , ["src"])]), createVNode("div", _hoisted_11$4, toDisplayString(item.title), 1
    /* TEXT */
    ), createVNode("div", _hoisted_12$2, [createVNode(_component_count_to, {
      "start-val": $setup.startPercent,
      "end-val": item.value,
      duration: 1000,
      separator: ",",
      autoplay: "",
      suffix: "%",
      decimals: 1
    }, null, 8
    /* PROPS */
    , ["start-val", "end-val"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
});

var css_248z$c = ".center-header[data-v-a66e2ce2] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #424446;\n  padding: 0 40px;\n  box-sizing: border-box;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper {\n  display: flex;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item {\n  flex: 1;\n  display: flex;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item .center-header-left .bg {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 185px;\n  height: 185px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-color: #83a748;\n  border-radius: 50%;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item .center-header-left .bg .img {\n  width: 60%;\n  height: 60%;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item .center-header-right {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 40px;\n  width: 410px;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item .center-header-right .title {\n  font-size: 32px;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item .center-header-right .sub-title {\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n.center-header[data-v-a66e2ce2] .center-header-wrapper .center-header-item .center-header-right .total {\n  font-family: DIN;\n  font-size: 56px;\n  font-weight: bolder;\n  letter-spacing: 2px;\n  margin-top: 10px;\n}\n.center-header[data-v-a66e2ce2] .project-wrapper {\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.center-header[data-v-a66e2ce2] .project-wrapper .project {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.center-header[data-v-a66e2ce2] .project-wrapper .project .project-img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90px;\n  height: 90px;\n}\n.center-header[data-v-a66e2ce2] .project-wrapper .project img {\n  width: 100%;\n  height: 100%;\n}\n.center-header[data-v-a66e2ce2] .project-wrapper .project .project-text {\n  font-size: 18px;\n  margin-top: 10px;\n}\n.center-header[data-v-a66e2ce2] .project-wrapper .project .project-value {\n  font-size: 28px;\n  font-weight: 700;\n  margin-top: 5px;\n}";
styleInject(css_248z$c);

script$d.render = render$d;
script$d.__scopeId = "data-v-a66e2ce2";
script$d.__file = "src/components/CenterHeader/CenterHeader.vue";

function CenterHeader (Vue) {
  Vue.component(script$d.name, script$d);
}

var script$e = {
  name: 'TransformCategory',
  props: {
    data: Array,
    color: {
      type: Array,
      "default": function _default() {
        return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)'];
      }
    }
  },
  setup: function setup(props) {
    var selected = ref(0); //当前被选中的元素的编号默认从第0号元素开始切换

    var hover = ref(-1); //创建hover元素

    var task; //点击事件

    var onClick = function onClick(index) {
      //将鼠标点击区域的索引传入，将selected的值修改成鼠标点击的索引值
      selected.value = index;
    };

    var onMouseIn = function onMouseIn(index) {
      hover.value = index;
    };

    var onMouseOut = function onMouseOut() {
      hover.value = -1;
    };

    var update = function update() {
      task && clearInterval(task); //线判断task是否存在，存在则清除定时器

      task = setInterval(function () {
        //首先判断selected的值是否大于传入数组的元素个数
        if (selected.value + 1 > props.data.length - 1) {
          //将selected的值置为0
          selected.value = 0;
        } else {
          selected.value += 1;
        }
      }, 2000);
    };

    onMounted(update);
    onUnmounted(function () {
      return task && clearInterval(task);
    });
    return {
      selected: selected,
      onClick: onClick,
      onMouseIn: onMouseIn,
      hover: hover,
      onMouseOut: onMouseOut
    };
  }
};

var _withId$c = /*#__PURE__*/withScopeId("data-v-0ce021a5");

pushScopeId("data-v-0ce021a5");

var _hoisted_1$b = {
  "class": "country-category"
};
var _hoisted_2$a = {
  key: 2
};

popScopeId();

var render$e = /*#__PURE__*/_withId$c(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$b, [(openBlock(true), createBlock(Fragment, null, renderList($props.data, function (item, index) {
    return openBlock(), createBlock("div", {
      "class": "category",
      key: item,
      onClick: function onClick($event) {
        return $setup.onClick(index);
      },
      onMouseenter: function onMouseenter($event) {
        return $setup.onMouseIn(index);
      },
      onMouseleave: function onMouseleave($event) {
        return $setup.onMouseOut(index);
      },
      onMousemove: function onMousemove($event) {
        return $setup.onMouseIn(index);
      }
    }, [index === $setup.selected ? (openBlock(), createBlock("div", {
      key: 0,
      "class": "selected",
      style: {
        background: $props.color[0]
      }
    }, toDisplayString(item), 5
    /* TEXT, STYLE */
    )) : index === $setup.hover ? (openBlock(), createBlock("div", {
      key: 1,
      "class": "hovered",
      style: {
        background: $props.color[1]
      }
    }, toDisplayString(item), 5
    /* TEXT, STYLE */
    )) : (openBlock(), createBlock("div", _hoisted_2$a, toDisplayString(item), 1
    /* TEXT */
    ))], 40
    /* PROPS, HYDRATE_EVENTS */
    , ["onClick", "onMouseenter", "onMouseleave", "onMousemove"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
});

var css_248z$d = ".country-category[data-v-0ce021a5] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.country-category[data-v-0ce021a5] .category {\n  flex: 1;\n  background: #353941;\n  font-size: 24px;\n  color: #90a0ae;\n}\n.country-category[data-v-0ce021a5] .category .hovered {\n  background: #505050;\n}\n.country-category[data-v-0ce021a5] .category .selected {\n  background: #8ca0ad;\n  color: #fff;\n}\n.country-category[data-v-0ce021a5] .category div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$d);

script$e.render = render$e;
script$e.__scopeId = "data-v-0ce021a5";
script$e.__file = "src/components/TransformCategory/TransformCategory.vue";

function TransformCategory (Vue) {
  Vue.component(script$e.name, script$e);
}

function useScreen(id) {
  var width = ref(0);
  var height = ref(0);
  var dom;
  onMounted(function () {
    dom = document.getElementById(id); //从dom去拿宽高

    width.value = dom.clientWidth;
    height.value = dom.clientHeight;
  });
  return {
    width: width,
    height: height
  };
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (_Map && getTag(new _Map) != mapTag$1) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$1) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/** Built-in value references. */
var Uint8Array$1 = _root.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return _cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return _cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return _cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

var isMap_1 = isMap;

/** `Object#toString` result references. */
var setTag$3 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$3;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap_1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}

var cloneDeep_1 = cloneDeep;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = _createAssigner(function(object, source) {
  if (_isPrototype(source) || isArrayLike_1(source)) {
    _copyObject(source, keys_1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$a.call(source, key)) {
      _assignValue(object, key, source[key]);
    }
  }
});

var assign_1 = assign;

var defaultConfig = {
  //标题数据,格式:['a','b','c']
  headerData: [],
  //标题文字样式,格式:[{},{},{}]
  headerStyle: [],
  //标题背景颜色
  headerBackground: 'rgb(90,90,90)',
  //标题高度
  headerHeight: 35,
  //标题是否展示序号
  headerIndex: false,
  //显示序号需要展示的内容
  headerIndexContent: '#',
  //显示序号列标题样式
  headerIndexStyle: {
    width: '50px',
    color: ''
  },
  //数据项，二维数组
  data: [],
  rowNum: 10,
  //行样式
  rowStyle: [],
  //序号列内容样式
  rowIndexStyle: {
    width: '50px'
  },
  //行背景颜色
  rowBg: [],
  //居中方式
  aligns: [],
  //批量更改标题的文字大小
  headerFontSize: 28,
  //批量修改每页内容的文字大小
  rowFontSize: 25,
  //标题文字颜色
  headerColor: '',
  //内容文字颜色
  rowColor: '',
  //移动的位置
  moveNum: 1,
  //动画播放延时时间
  duration: 2000,
  //序号列的数据内容    
  headerIndexData: []
};
var script$f = {
  name: 'BaseScrollList',
  props: {
    config: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props) {
    var id = "base-scroll-list".concat(v4());

    var _useScreen = useScreen(id),
        width = _useScreen.width,
        height = _useScreen.height;

    var headerData = ref([]);
    var headerStyle = ref([]); //合并后的对象

    var actualConfig = ref([]); //用于存放每一列的宽度

    var columnWidth = ref([]); //每页的数据

    var rowsData = ref([]); //真正需要渲染的数据

    var currentRowsData = ref([]); //渲染动画指针指向当前展示的动画元素

    var currentIndex = ref(0); //每行的高度

    var rowHeight = ref([]); //展示数据的行数

    var rowNum = ref(defaultConfig.rowNum); //行样式

    var rowStyle = ref([]); //行背景颜色

    var rowBg = ref([]); //居中方式

    var aligns = ref([]); //行高

    var avgHeight; //动画是否播放

    var isAnimationStart = ref(true);

    var handleHeader = function handleHeader(config) {
      var _headerData = cloneDeep_1(config.headerData);

      var _headerStyle = cloneDeep_1(config.headerStyle);

      var _rowsData = cloneDeep_1(config.data);

      var _rowStyle = cloneDeep_1(config.rowStyle);

      var _aligns = cloneDeep_1(config.aligns); //判断header元素大小是否为空


      if (_headerData.length === 0) {
        return;
      }

      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent);

        _headerStyle.unshift(config.headerIndexStyle);

        _rowStyle.unshift(config.rowIndexStyle);

        _rowsData.forEach(function (rows, index) {
          //处理序号列的数据
          if (config.headerIndexData && config.headerIndexData.length > 0 && config.headerIndexData[index]) {
            rows.unshift(config.headerIndexData[index]);
          } else {
            rows.unshift(index + 1);
          }
        });

        _aligns.unshift('center'); //默认序号列居中

      } //动态计算header中每一列的宽度 


      var usedWidth = 0; //获取定义过的宽度

      var usedColumnNum = 0; //获取定义过的宽度列数的个数
      //遍历_headerStyle的每个元素把定义过的宽度综合和列数个数记录下来

      _headerStyle.forEach(function (style) {
        if (style.width) {
          usedWidth += +style.width.replace('px', '');
          usedColumnNum++;
        }
      }); //(总宽度-定义过的宽度综合) / (列数总个数-定义过的列数) = 剩余的宽度除以剩余的列数


      var avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum); //动态定义一个数组，数组的长度和_headerData.length相同

      var _columnWidth = new Array(_headerData.length).fill(avgWidth);

      _headerStyle.forEach(function (style, index) {
        if (style.width) {
          var headerWidth = +style.width.replace('px', '');
          _columnWidth[index] = headerWidth;
        }
      });

      columnWidth.value = _columnWidth;
      headerData.value = _headerData;
      headerStyle.value = _headerStyle;
      var rowNum = config.rowNum;

      if (_rowsData.length >= rowNum && _rowsData.length < rowNum * 2) {
        var newRowData = [].concat(toConsumableArray(_rowsData), toConsumableArray(_rowsData));
        rowsData.value = newRowData.map(function (item, index) {
          return {
            data: item,
            rowIndex: index
          };
        });
      } else {
        rowsData.value = _rowsData.map(function (item, index) {
          return {
            data: item,
            rowIndex: index
          };
        });
      }

      rowStyle.value = _rowStyle;
      aligns.value = _aligns;
    }; //动态计算行数据高度


    var handleRows = function handleRows(config) {
      var headerHeight = config.headerHeight;
      rowNum.value = config.rowNum;
      var unusedHeight = height.value - headerHeight; //如果rowNum的值大于实际数据长度则以实际数据长度为准

      if (rowNum.value > rowsData.value.length) {
        rowNum.value = rowsData.value.length;
      }

      avgHeight = unusedHeight / rowNum.value;
      rowHeight.value = new Array(rowNum.value).fill(avgHeight);

      if (config.rowBg) {
        rowBg.value = config.rowBg;
      }
    }; //过度折叠动画


    var startAnimation = /*#__PURE__*/function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var _rowHeight$value;

        var config, rowNum, moveNum, duration, totalLength, index, _rowsData, rows, waitTime, isLast;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isAnimationStart) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                config = actualConfig.value; //拿到定制的数据

                rowNum = config.rowNum, moveNum = config.moveNum, duration = config.duration; //取出data和rowNum

                totalLength = rowsData.value.length; //判断data的长度

                if (!(totalLength < rowNum)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                index = currentIndex.value; //拿到当前动画指针

                _rowsData = cloneDeep_1(rowsData.value); //深拷贝每页数据
                //将数据头尾连接  

                rows = _rowsData.slice(index);
                rows.push.apply(rows, toConsumableArray(_rowsData.slice(0, index)));
                currentRowsData.value = rows; //先将所有行的高度还原

                rowHeight.value = new Array(totalLength).fill(avgHeight);
                waitTime = 500;

                if (isAnimationStart) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return");

              case 16:
                _context.next = 18;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, waitTime);
                });

              case 18:
                //将moveNum的行高度设为0
                (_rowHeight$value = rowHeight.value).splice.apply(_rowHeight$value, [0, moveNum].concat(toConsumableArray(new Array(moveNum).fill(0))));

                currentIndex.value += moveNum; //是否到达最后一组数据

                isLast = currentIndex.value - totalLength;

                if (isLast >= 0) {
                  currentIndex.value = isLast;
                }

                if (isAnimationStart) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("return");

              case 24:
                _context.next = 26;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, duration - waitTime);
                });

              case 26:
                _context.next = 28;
                return startAnimation();

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function startAnimation() {
        return _ref.apply(this, arguments);
      };
    }(); //停止动画


    var stopAnimation = function stopAnimation() {
      isAnimationStart.value = false;
    };

    var update = function update() {
      stopAnimation(); //将传入的值和默认值进行合并

      var _actualConfig = assign_1(defaultConfig, props.config); //赋值rowsData


      rowsData.value = _actualConfig.data || [];
      handleHeader(_actualConfig);
      handleRows(_actualConfig);
      actualConfig.value = _actualConfig; //展示动画效果

      isAnimationStart.value = true;
      startAnimation();
    };

    watch(function () {
      return props.config;
    }, function () {
      update();
    });
    return {
      id: id,
      headerData: headerData,
      headerStyle: headerStyle,
      actualConfig: actualConfig,
      columnWidth: columnWidth,
      rowsData: rowsData,
      rowHeight: rowHeight,
      rowStyle: rowStyle,
      rowBg: rowBg,
      aligns: aligns,
      currentRowsData: currentRowsData,
      height: height
    };
  }
};

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty$1 = _defineProperty$1;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _withId$d = /*#__PURE__*/withScopeId("data-v-69eed30f");

var render$f = /*#__PURE__*/_withId$d(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    "class": "base-scroll-list",
    id: $setup.id
  }, [createCommentVNode(" 标题容器 "), createVNode("div", {
    "class": "base-scroll-list-header",
    style: {
      backgroundColor: $setup.actualConfig.headerBackground,
      height: "".concat($setup.actualConfig.headerHeight, "px"),
      fontSize: "".concat($setup.actualConfig.headerFontSize, "px"),
      color: "".concat($setup.actualConfig.headerColor)
    }
  }, [createCommentVNode(" 标题每一列 "), (openBlock(true), createBlock(Fragment, null, renderList($setup.headerData, function (headerItem, i) {
    return openBlock(), createBlock("div", {
      "class": "header-item base-scroll-list-text",
      key: headerItem + i,
      style: _objectSpread({
        width: "".concat($setup.columnWidth[i], "px")
      }, $setup.headerStyle[i]),
      innerHTML: headerItem,
      align: $setup.aligns[i]
    }, null, 12
    /* STYLE, PROPS */
    , ["innerHTML", "align"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 4
  /* STYLE */
  ), createCommentVNode(" 内容展示容器 "), createVNode("div", {
    "class": "base-scroll-list-rows-wrapper",
    style: {
      height: "".concat($setup.height - $setup.actualConfig.headerHeight, "px")
    }
  }, [createCommentVNode(" 行内容 "), (openBlock(true), createBlock(Fragment, null, renderList($setup.currentRowsData, function (rowData, index) {
    return openBlock(), createBlock("div", {
      "class": "base-scroll-list-rows",
      key: rowData.rowIndex,
      style: {
        height: "".concat($setup.rowHeight[index], "px"),
        lineHeight: "".concat($setup.rowHeight[index], "px"),
        backgroundColor: rowData.rowIndex % 2 === 0 ? $setup.rowBg[1] : $setup.rowBg[0],
        fontSize: "".concat($setup.actualConfig.rowFontSize, "px"),
        color: "".concat($setup.actualConfig.rowColor)
      }
    }, [createCommentVNode(" 列内容 "), (openBlock(true), createBlock(Fragment, null, renderList(rowData.data, function (colData, colIndex) {
      return openBlock(), createBlock("div", {
        "class": "base-scroll-list-columns base-scroll-list-text",
        key: colData + colIndex,
        style: _objectSpread({
          width: "".concat($setup.columnWidth[colIndex], "px")
        }, $setup.rowStyle[colIndex]),
        innerHTML: colData,
        align: $setup.aligns[colIndex]
      }, null, 12
      /* STYLE, PROPS */
      , ["innerHTML", "align"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 4
    /* STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 4
  /* STYLE */
  )], 8
  /* PROPS */
  , ["id"]);
});

var css_248z$e = "@charset \"UTF-8\";\n.base-scroll-list[data-v-69eed30f] {\n  /*宽高设为100% 交给父给容器确定*/\n  width: 100%;\n  height: 100%;\n  /*默认文本样式*/\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-text {\n  /*padding: 0 10px;*/\n  white-space: nowrap;\n  /*文本不换行*/\n  overflow: hidden;\n  /*多出部分隐藏*/\n  text-overflow: ellipsis;\n  /*文本超出部分用省略号代替*/\n  box-sizing: border-box;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-header {\n  display: flex;\n  /*水平布局*/\n  font-size: 15px;\n  /*字体大小*/\n  align-items: center;\n  /*垂直居中*/\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper {\n  overflow: hidden;\n  /*超出部分隐藏*/\n  margin-top: 10px;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper .base-scroll-list-rows {\n  display: flex;\n  align-items: center;\n  transition: all 0.3s linear;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper .base-scroll-list-rows .base-scroll-list-columns {\n  height: 100%;\n}";
styleInject(css_248z$e);

script$f.render = render$f;
script$f.__scopeId = "data-v-69eed30f";
script$f.__file = "src/components/BaseScrollList/BaseScrollList.vue";

var script$g = {
  name: 'SalesList',
  props: {
    data: Array
  },
  setup: function setup(props) {
    var config = ref({});

    var update = function update() {
      var data = [];
      var aligns = [];
      var headerIndexData = [];

      for (var i = 0; i < props.data.length; i++) {
        data[i] = [];

        if (i % 2 === 0) {
          headerIndexData[i] = "<div\n                                          style=\"width:100%;\n                                          height:100%;\n                                          display:flex;\n                                          align-items:center;\n                                          background:rgb(40,40,40);\n                                          justify-content:center;\"\n                                          >\n                                            <div\n                                              style=\"width:15px;\n                                              height:15px;\n                                              background:rgb(72,122,72);\n                                              border-radius:50%;\n                                              border:1px solid #fff;\"\n                                            />\n                                        </div>";
        } else {
          headerIndexData[i] = "<div\n                                         style=\"width:100%;\n                                         height:100%;\n                                         display:flex;\n                                         align-items:center;\n                                         background:rgb(40,40,40);\n                                         justify-content:center;\"\n                                        >\n                                          <div \n                                            style=\"width:15px;\n                                            height:15px;\n                                            background:rgb(38,88,104);\n                                            border-radius:50%;\n                                            border:1px solid #fff;\"\n                                          />\n                                        </div>";
        }

        for (var j = 0; j < 5; j++) {
          aligns.push('center');
          var text = '';

          switch (j) {
            case 0:
              text = props.data[i].order;
              break;

            case 1:
              text = props.data[i].shop;
              break;

            case 2:
              text = props.data[i].rider;
              break;

            case 3:
              text = props.data[i].newShop;
              break;

            case 4:
              text = props.data[i].avgOrder;
              break;
          }

          if (j % 2 === 0) {
            data[i].push("<div style=\"color:rgb(178,209,126)\">".concat(text, "</div>"));
          } else {
            data[i].push("<div>".concat(text, "</div>"));
          }
        }
      }

      config.value = {
        data: data,
        //rowStyle,
        headerData: ['当前时间', '当前湿度', '当前亮度', '当前温度', '当前氧含量'],
        //表头内容
        headerFontSize: 20,
        //表头字大小
        headerBackground: 'rgb(80,80,80)',
        //表头背景色
        headerIndexContent: '',
        //表头序号列内容定制
        headerColor: '#fff',
        //表头序号列文本颜色
        //headerIndexStyle:{width:'80px',color:'red'},//表头序号列文字样式定制
        //headerStyle : [{color:'red',width:'150px'}] //表头文字样式
        headerHeight: 55,
        //表头高度
        headerIndex: true,
        rowNum: 11,
        //一次展示多少条数据
        rowBg: ['rgb(40,40,40)', 'rgb(55,55,55)'],
        //内容背景颜色
        rowColor: '#fff',
        //批量更改每页内容的文字颜色
        //rowStyle : [{},{color:'red'}] //列内容样式
        rowFontSize: 24,
        //批量修改每页内容的文字大小
        aligns: aligns,
        //居中方式
        headerIndexData: headerIndexData
      };
    };

    onMounted(function () {
      update();
    });
    watch(function () {
      return props.data;
    }, function () {
      update();
    });
    return {
      config: config
    };
  }
};

var _withId$e = /*#__PURE__*/withScopeId("data-v-15f22672");

pushScopeId("data-v-15f22672");

var _hoisted_1$c = {
  "class": "SalesList"
};

popScopeId();

var render$g = /*#__PURE__*/_withId$e(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BaseScrollList = resolveComponent("BaseScrollList");

  return openBlock(), createBlock("div", _hoisted_1$c, [createVNode(_component_BaseScrollList, {
    config: $setup.config
  }, null, 8
  /* PROPS */
  , ["config"])]);
});

var css_248z$f = ".SalesList[data-v-15f22672] {\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$f);

script$g.render = render$g;
script$g.__scopeId = "data-v-15f22672";
script$g.__file = "src/components/BaseScrollList/SalesList.vue";

function SalesList (Vue) {
  Vue.component(script$f.name, script$f);
  Vue.component(script$g.name, script$g);
}

var script$h = {
  name: 'TimeLine',
  setup: function setup() {
    var options = ref({});

    var update = function update() {
      // options.value = {
      //   baseOption:{
      //       timeline:{
      //         axisType:'category', //时间轴类型
      //         //播放按钮样式
      //         controlStyle:{
      //           position:'left',
      //         },
      //         //动画播放属性
      //         autoPlay:true, //自动播放
      //         playInterval:1000,//自动播放时间间隔
      //         loop:false, //是否循环播放
      //         inverse:false, //是否倒放 
      //         currentIndex:1, //从哪个位置开始播放
      //         realtime:true, //点击节点是否拖动视图
      //          //时间轴每个节点的数据
      //         data:[  
      //            {
      //              value:'2002-01-01', //节点数据
      //              symbol:'diamond',     //节点形状
      //              symbolSize:20        //节点形状大小
      //            },          
      //            {
      //              value:'2003-01-01',
      //              symbol:'diamond'
      //            }, 
      //            {
      //              value:'2004-01-01',
      //              symbol:'diamond'
      //            },     
      //            {
      //              value:'2005-01-01',
      //              symbol:'diamond'
      //            },     
      //            {
      //              value:'2006-01-01',
      //              symbol:'triangle',
      //              symbolSize:20
      //            },         
      //           ],
      //           label:{
      //             formatter(v){
      //               return new Date(v).getFullYear()
      //             }
      //           }  
      //       }
      //   },
      //   options:[]
      // }

      /**********************************************************************************************************/
      var dataMap = {};

      function dataFormatter(obj) {
        var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
        var temp;

        for (var year = 2002; year <= 2011; year++) {
          var max = 0;
          var sum = 0;
          temp = obj[year];

          for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
              name: pList[i],
              value: temp[i]
            };
          }

          obj[year + 'max'] = Math.floor(max / 100) * 100;
          obj[year + 'sum'] = sum;
        }

        return obj;
      }

      dataMap.dataGDP = dataFormatter({
        //max : 60000,
        2011: [16251.93, 11307.28, 24515.76, 11237.55, 14359.88, 22226.7, 10568.83, 12582, 19195.69, 49110.27, 32318.85, 15300.65, 17560.18, 11702.82, 45361.85, 26931.03, 19632.26, 19669.56, 53210.28, 11720.87, 2522.66, 10011.37, 21026.68, 5701.84, 8893.12, 605.83, 12512.3, 5020.37, 1670.44, 2102.21, 6610.05],
        2010: [14113.58, 9224.46, 20394.26, 9200.86, 11672, 18457.27, 8667.58, 10368.6, 17165.98, 41425.48, 27722.31, 12359.33, 14737.12, 9451.26, 39169.92, 23092.36, 15967.61, 16037.96, 46013.06, 9569.85, 2064.5, 7925.58, 17185.48, 4602.16, 7224.18, 507.46, 10123.48, 4120.75, 1350.43, 1689.65, 5437.47],
        2009: [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75, 8587, 15046.45, 34457.3, 22990.35, 10062.82, 12236.53, 7655.18, 33896.65, 19480.46, 12961.1, 13059.69, 39482.56, 7759.16, 1654.21, 6530.01, 14151.28, 3912.68, 6169.75, 441.36, 8169.8, 3387.56, 1081.27, 1353.31, 4277.05],
        2008: [11115, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1, 8314.37, 14069.87, 30981.98, 21462.69, 8851.66, 10823.01, 6971.05, 30933.28, 18018.53, 11328.92, 11555, 36796.71, 7021, 1503.06, 5793.66, 12601.23, 3561.56, 5692.12, 394.85, 7314.58, 3166.82, 1018.62, 1203.92, 4183.21],
        2007: [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69, 7104, 12494.01, 26018.48, 18753.73, 7360.92, 9248.53, 5800.25, 25776.91, 15012.46, 9333.4, 9439.6, 31777.01, 5823.41, 1254.17, 4676.13, 10562.39, 2884.11, 4772.52, 341.43, 5757.29, 2703.98, 797.35, 919.11, 3523.16],
        2006: [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12, 6211.8, 10572.24, 21742.05, 15718.47, 6112.5, 7583.85, 4820.53, 21900.19, 12362.79, 7617.47, 7688.67, 26587.76, 4746.16, 1065.67, 3907.23, 8690.24, 2338.98, 3988.14, 290.76, 4743.61, 2277.35, 648.5, 725.9, 3045.26],
        2005: [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27, 5513.7, 9247.66, 18598.69, 13417.68, 5350.17, 6554.69, 4056.76, 18366.87, 10587.42, 6590.19, 6596.1, 22557.37, 3984.1, 918.75, 3467.72, 7385.1, 2005.42, 3462.73, 248.8, 3933.72, 1933.98, 543.32, 612.61, 2604.19],
        2004: [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672, 3122.01, 4750.6, 8072.83, 15003.6, 11648.7, 4759.3, 5763.35, 3456.7, 15021.84, 8553.79, 5633.24, 5641.94, 18864.62, 3433.5, 819.66, 3034.58, 6379.63, 1677.8, 3081.91, 220.34, 3175.58, 1688.49, 466.1, 537.11, 2209.09],
        2003: [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08, 4057.4, 6694.23, 12442.87, 9705.02, 3923.11, 4983.67, 2807.41, 12078.15, 6867.7, 4757.45, 4659.99, 15844.64, 2821.11, 713.96, 2555.72, 5333.09, 1426.34, 2556.02, 185.09, 2587.72, 1399.83, 390.2, 445.36, 1886.35],
        2002: [4315, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54, 3637.2, 5741.03, 10606.85, 8003.67, 3519.72, 4467.55, 2450.48, 10275.5, 6035.48, 4212.82, 4151.54, 13502.42, 2523.73, 642.73, 2232.86, 4725.01, 1243.43, 2312.82, 162.04, 2253.39, 1232.03, 340.65, 377.16, 1612.6]
      });
      dataMap.dataPI = dataFormatter({
        //max : 4000,
        2011: [136.27, 159.72, 2905.73, 641.42, 1306.3, 1915.57, 1277.44, 1701.5, 124.94, 3064.78, 1583.04, 2015.31, 1612.24, 1391.07, 3973.85, 3512.24, 2569.3, 2768.03, 2665.2, 2047.23, 659.23, 844.52, 2983.51, 726.22, 1411.01, 74.47, 1220.9, 678.75, 155.08, 184.14, 1139.03],
        2010: [124.36, 145.58, 2562.81, 554.48, 1095.28, 1631.08, 1050.15, 1302.9, 114.15, 2540.1, 1360.56, 1729.02, 1363.67, 1206.98, 3588.28, 3258.09, 2147, 2325.5, 2286.98, 1675.06, 539.83, 685.38, 2482.89, 625.03, 1108.38, 68.72, 988.45, 599.28, 134.92, 159.29, 1078.63],
        2009: [118.29, 128.85, 2207.34, 477.59, 929.6, 1414.9, 980.57, 1154.33, 113.82, 2261.86, 1163.08, 1495.45, 1182.74, 1098.66, 3226.64, 2769.05, 1795.9, 1969.69, 2010.27, 1458.49, 462.19, 606.8, 2240.61, 550.27, 1067.6, 63.88, 789.64, 497.05, 107.4, 127.25, 759.74],
        2008: [112.83, 122.58, 2034.59, 313.58, 907.95, 1302.02, 916.72, 1088.94, 111.8, 2100.11, 1095.96, 1418.09, 1158.17, 1060.38, 3002.65, 2658.78, 1780, 1892.4, 1973.05, 1453.75, 436.04, 575.4, 2216.15, 539.19, 1020.56, 60.62, 753.72, 462.27, 105.57, 118.94, 691.07],
        2007: [101.26, 110.19, 1804.72, 311.97, 762.1, 1133.42, 783.8, 915.38, 101.84, 1816.31, 986.02, 1200.18, 1002.11, 905.77, 2509.14, 2217.66, 1378, 1626.48, 1695.57, 1241.35, 361.07, 482.39, 2032, 446.38, 837.35, 54.89, 592.63, 387.55, 83.41, 97.89, 628.72],
        2006: [88.8, 103.35, 1461.81, 276.77, 634.94, 939.43, 672.76, 750.14, 93.81, 1545.05, 925.1, 1011.03, 865.98, 786.14, 2138.9, 1916.74, 1140.41, 1272.2, 1532.17, 1032.47, 323.48, 386.38, 1595.48, 382.06, 724.4, 50.9, 484.81, 334, 67.55, 79.54, 527.8],
        2005: [88.68, 112.38, 1400, 262.42, 589.56, 882.41, 625.61, 684.6, 90.26, 1461.51, 892.83, 966.5, 827.36, 727.37, 1963.51, 1892.01, 1082.13, 1100.65, 1428.27, 912.5, 300.75, 463.4, 1481.14, 368.94, 661.69, 48.04, 435.77, 308.06, 65.34, 72.07, 509.99],
        2004: [87.36, 105.28, 1370.43, 276.3, 522.8, 798.43, 568.69, 605.79, 83.45, 1367.58, 814.1, 950.5, 786.84, 664.5, 1778.45, 1649.29, 1020.09, 1022.45, 1248.59, 817.88, 278.76, 428.05, 1379.93, 334.5, 607.75, 44.3, 387.88, 286.78, 60.7, 65.33, 461.26],
        2003: [84.11, 89.91, 1064.05, 215.19, 420.1, 615.8, 488.23, 504.8, 81.02, 1162.45, 717.85, 749.4, 692.94, 560, 1480.67, 1198.7, 798.35, 886.47, 1072.91, 658.78, 244.29, 339.06, 1128.61, 298.69, 494.6, 40.7, 302.66, 237.91, 48.47, 55.63, 412.9],
        2002: [82.44, 84.21, 956.84, 197.8, 374.69, 590.2, 446.17, 474.2, 79.68, 1110.44, 685.2, 783.66, 664.78, 535.98, 1390, 1288.36, 707, 847.25, 1015.08, 601.99, 222.89, 317.87, 1047.95, 281.1, 463.44, 39.75, 282.21, 215.51, 47.31, 52.95, 305]
      });
      dataMap.dataSI = dataFormatter({
        //max : 26600,
        2011: [3752.48, 5928.32, 13126.86, 6635.26, 8037.69, 12152.15, 5611.48, 5962.41, 7927.89, 25203.28, 16555.58, 8309.38, 9069.2, 6390.55, 24017.11, 15427.08, 9815.94, 9361.99, 26447.38, 5675.32, 714.5, 5543.04, 11029.13, 2194.33, 3780.32, 208.79, 6935.59, 2377.83, 975.18, 1056.15, 3225.9],
        2010: [3388.38, 4840.23, 10707.68, 5234, 6367.69, 9976.82, 4506.31, 5025.15, 7218.32, 21753.93, 14297.93, 6436.62, 7522.83, 5122.88, 21238.49, 13226.38, 7767.24, 7343.19, 23014.53, 4511.68, 571, 4359.12, 8672.18, 1800.06, 3223.49, 163.92, 5446.1, 1984.97, 744.63, 827.91, 2592.15],
        2009: [2855.55, 3987.84, 8959.83, 3993.8, 5114, 7906.34, 3541.92, 4060.72, 6001.78, 18566.37, 11908.49, 4905.22, 6005.3, 3919.45, 18901.83, 11010.5, 6038.08, 5687.19, 19419.7, 3381.54, 443.43, 3448.77, 6711.87, 1476.62, 2582.53, 136.63, 4236.42, 1527.24, 575.33, 662.32, 1929.59],
        2008: [2626.41, 3709.78, 8701.34, 4242.36, 4376.19, 7158.84, 3097.12, 4319.75, 6085.84, 16993.34, 11567.42, 4198.93, 5318.44, 3554.81, 17571.98, 10259.99, 5082.07, 5028.93, 18502.2, 3037.74, 423.55, 3057.78, 5823.39, 1370.03, 2452.75, 115.56, 3861.12, 1470.34, 557.12, 609.98, 2070.76],
        2007: [2509.4, 2892.53, 7201.88, 3454.49, 3193.67, 5544.14, 2475.45, 3695.58, 5571.06, 14471.26, 10154.25, 3370.96, 4476.42, 2975.53, 14647.53, 8282.83, 4143.06, 3977.72, 16004.61, 2425.29, 364.26, 2368.53, 4648.79, 1124.79, 2038.39, 98.48, 2986.46, 1279.32, 419.03, 455.04, 1647.55],
        2006: [2191.43, 2457.08, 6110.43, 2755.66, 2374.96, 4566.83, 1915.29, 3365.31, 4969.95, 12282.89, 8511.51, 2711.18, 3695.04, 2419.74, 12574.03, 6724.61, 3365.08, 3187.05, 13469.77, 1878.56, 308.62, 1871.65, 3775.14, 967.54, 1705.83, 80.1, 2452.44, 1043.19, 331.91, 351.58, 1459.3],
        2005: [2026.51, 2135.07, 5271.57, 2357.04, 1773.21, 3869.4, 1580.83, 2971.68, 4381.2, 10524.96, 7164.75, 2245.9, 3175.92, 1917.47, 10478.62, 5514.14, 2852.12, 2612.57, 11356.6, 1510.68, 240.83, 1564, 3067.23, 821.16, 1426.42, 63.52, 1951.36, 838.56, 264.61, 281.05, 1164.79],
        2004: [1853.58, 1685.93, 4301.73, 1919.4, 1248.27, 3061.62, 1329.68, 2487.04, 3892.12, 8437.99, 6250.38, 1844.9, 2770.49, 1566.4, 8478.69, 4182.1, 2320.6, 2190.54, 9280.73, 1253.7, 205.6, 1376.91, 2489.4, 681.5, 1281.63, 52.74, 1553.1, 713.3, 211.7, 244.05, 914.47],
        2003: [1487.15, 1337.31, 3417.56, 1463.38, 967.49, 2898.89, 1098.37, 2084.7, 3209.02, 6787.11, 5096.38, 1535.29, 2340.82, 1204.33, 6485.05, 3310.14, 1956.02, 1777.74, 7592.78, 984.08, 175.82, 1135.31, 2014.8, 569.37, 1047.66, 47.64, 1221.17, 572.02, 171.92, 194.27, 719.54],
        2002: [1249.99, 1069.08, 2911.69, 1134.31, 754.78, 2609.85, 943.49, 1843.6, 2622.45, 5604.49, 4090.48, 1337.04, 2036.97, 941.77, 5184.98, 2768.75, 1709.89, 1523.5, 6143.4, 846.89, 148.88, 958.87, 1733.38, 481.96, 934.88, 32.72, 1007.56, 501.69, 144.51, 153.06, 603.15]
      });
      dataMap.dataTI = dataFormatter({
        //max : 25000,
        2011: [12363.18, 5219.24, 8483.17, 3960.87, 5015.89, 8158.98, 3679.91, 4918.09, 11142.86, 20842.21, 14180.23, 4975.96, 6878.74, 3921.2, 17370.89, 7991.72, 7247.02, 7539.54, 24097.7, 3998.33, 1148.93, 3623.81, 7014.04, 2781.29, 3701.79, 322.57, 4355.81, 1963.79, 540.18, 861.92, 2245.12],
        2010: [10600.84, 4238.65, 7123.77, 3412.38, 4209.03, 6849.37, 3111.12, 4040.55, 9833.51, 17131.45, 12063.82, 4193.69, 5850.62, 3121.4, 14343.14, 6607.89, 6053.37, 6369.27, 20711.55, 3383.11, 953.67, 2881.08, 6030.41, 2177.07, 2892.31, 274.82, 3688.93, 1536.5, 470.88, 702.45, 1766.69],
        2009: [9179.19, 3405.16, 6068.31, 2886.92, 3696.65, 5891.25, 2756.26, 3371.95, 8930.85, 13629.07, 9918.78, 3662.15, 5048.49, 2637.07, 11768.18, 5700.91, 5127.12, 5402.81, 18052.59, 2919.13, 748.59, 2474.44, 5198.8, 1885.79, 2519.62, 240.85, 3143.74, 1363.27, 398.54, 563.74, 1587.72],
        2008: [8375.76, 2886.65, 5276.04, 2759.46, 3212.06, 5207.72, 2412.26, 2905.68, 7872.23, 11888.53, 8799.31, 3234.64, 4346.4, 2355.86, 10358.64, 5099.76, 4466.85, 4633.67, 16321.46, 2529.51, 643.47, 2160.48, 4561.69, 1652.34, 2218.81, 218.67, 2699.74, 1234.21, 355.93, 475, 1421.38],
        2007: [7236.15, 2250.04, 4600.72, 2257.99, 2467.41, 4486.74, 2025.44, 2493.04, 6821.11, 9730.91, 7613.46, 2789.78, 3770, 1918.95, 8620.24, 4511.97, 3812.34, 3835.4, 14076.83, 2156.76, 528.84, 1825.21, 3881.6, 1312.94, 1896.78, 188.06, 2178.2, 1037.11, 294.91, 366.18, 1246.89],
        2006: [5837.55, 1902.31, 3895.36, 1846.18, 1934.35, 3798.26, 1687.07, 2096.35, 5508.48, 7914.11, 6281.86, 2390.29, 3022.83, 1614.65, 7187.26, 3721.44, 3111.98, 3229.42, 11585.82, 1835.12, 433.57, 1649.2, 3319.62, 989.38, 1557.91, 159.76, 1806.36, 900.16, 249.04, 294.78, 1058.16],
        2005: [4854.33, 1658.19, 3340.54, 1611.07, 1542.26, 3295.45, 1413.83, 1857.42, 4776.2, 6612.22, 5360.1, 2137.77, 2551.41, 1411.92, 5924.74, 3181.27, 2655.94, 2882.88, 9772.5, 1560.92, 377.17, 1440.32, 2836.73, 815.32, 1374.62, 137.24, 1546.59, 787.36, 213.37, 259.49, 929.41],
        2004: [4092.27, 1319.76, 2805.47, 1375.67, 1270, 2811.95, 1223.64, 1657.77, 4097.26, 5198.03, 4584.22, 1963.9, 2206.02, 1225.8, 4764.7, 2722.4, 2292.55, 2428.95, 8335.3, 1361.92, 335.3, 1229.62, 2510.3, 661.8, 1192.53, 123.3, 1234.6, 688.41, 193.7, 227.73, 833.36],
        2003: [3435.95, 1150.81, 2439.68, 1176.65, 1000.79, 2487.85, 1075.48, 1467.9, 3404.19, 4493.31, 3890.79, 1638.42, 1949.91, 1043.08, 4112.43, 2358.86, 2003.08, 1995.78, 7178.94, 1178.25, 293.85, 1081.35, 2189.68, 558.28, 1013.76, 96.76, 1063.89, 589.91, 169.81, 195.46, 753.91],
        2002: [2982.57, 997.47, 2149.75, 992.69, 811.47, 2258.17, 958.88, 1319.4, 3038.9, 3891.92, 3227.99, 1399.02, 1765.8, 972.73, 3700.52, 1978.37, 1795.93, 1780.79, 6343.94, 1074.85, 270.96, 956.12, 1943.68, 480.37, 914.5, 89.56, 963.62, 514.83, 148.83, 171.14, 704.5]
      });
      dataMap.dataEstate = dataFormatter({
        //max : 3600,
        2011: [1074.93, 411.46, 918.02, 224.91, 384.76, 876.12, 238.61, 492.1, 1019.68, 2747.89, 1677.13, 634.92, 911.16, 402.51, 1838.14, 987, 634.67, 518.04, 3321.31, 465.68, 208.71, 396.28, 620.62, 160.3, 222.31, 17.44, 398.03, 134.25, 29.05, 79.01, 176.22],
        2010: [1006.52, 377.59, 697.79, 192, 309.25, 733.37, 212.32, 391.89, 1002.5, 2600.95, 1618.17, 532.17, 679.03, 340.56, 1622.15, 773.23, 564.41, 464.21, 2813.95, 405.79, 188.33, 266.38, 558.56, 139.64, 223.45, 14.54, 315.95, 110.02, 25.41, 60.53, 143.44],
        2009: [1062.47, 308.73, 612.4, 173.31, 286.65, 605.27, 200.14, 301.18, 1237.56, 2025.39, 1316.84, 497.94, 656.61, 305.9, 1329.59, 622.98, 546.11, 400.11, 2470.63, 348.98, 121.76, 229.09, 548.14, 136.15, 205.14, 13.28, 239.92, 101.37, 23.05, 47.56, 115.23],
        2008: [844.59, 227.88, 513.81, 166.04, 273.3, 500.81, 182.7, 244.47, 939.34, 1626.13, 1052.03, 431.27, 506.98, 281.96, 1104.95, 512.42, 526.88, 340.07, 2057.45, 282.96, 95.6, 191.21, 453.63, 104.81, 195.48, 15.08, 193.27, 93.8, 19.96, 38.85, 89.79],
        2007: [821.5, 183.44, 467.97, 134.12, 191.01, 410.43, 153.03, 225.81, 958.06, 1365.71, 981.42, 366.57, 511.5, 225.96, 953.69, 447.44, 409.65, 301.8, 2029.77, 239.45, 67.19, 196.06, 376.84, 93.19, 193.59, 13.24, 153.98, 83.52, 16.98, 29.49, 91.28],
        2006: [658.3, 156.64, 397.14, 117.01, 136.5, 318.54, 131.01, 194.7, 773.61, 1017.91, 794.41, 281.98, 435.22, 184.67, 786.51, 348.7, 294.73, 254.81, 1722.07, 192.2, 44.45, 158.2, 336.2, 80.24, 165.92, 11.92, 125.2, 73.21, 15.17, 25.53, 68.9],
        2005: [493.73, 122.67, 330.87, 106, 98.75, 256.77, 112.29, 163.34, 715.97, 799.73, 688.86, 231.66, 331.8, 171.88, 664.9, 298.19, 217.17, 215.63, 1430.37, 165.05, 38.2, 143.88, 286.23, 76.38, 148.69, 10.02, 108.62, 63.78, 14.1, 22.97, 55.79],
        2004: [436.11, 106.14, 231.08, 95.1, 73.81, 203.1, 97.93, 137.74, 666.3, 534.17, 587.83, 188.28, 248.44, 167.2, 473.27, 236.44, 204.8, 191.5, 1103.75, 122.52, 30.64, 129.12, 264.3, 68.3, 116.54, 5.8, 95.9, 56.84, 13, 20.78, 53.55],
        2003: [341.88, 92.31, 185.19, 78.73, 61.05, 188.49, 91.99, 127.2, 487.82, 447.47, 473.16, 162.63, 215.84, 138.02, 418.21, 217.58, 176.8, 186.49, 955.66, 100.93, 25.14, 113.69, 231.72, 59.86, 103.79, 4.35, 83.9, 48.09, 11.41, 16.85, 47.84],
        2002: [298.02, 73.04, 140.89, 65.83, 51.48, 130.94, 76.11, 118.7, 384.86, 371.09, 360.63, 139.18, 188.09, 125.27, 371.13, 199.31, 145.17, 165.29, 808.16, 82.83, 21.45, 90.48, 210.82, 53.49, 95.68, 3.42, 77.68, 41.52, 9.74, 13.46, 43.04]
      });
      dataMap.dataFinancial = dataFormatter({
        //max : 3200,
        2011: [2215.41, 756.5, 746.01, 519.32, 447.46, 755.57, 207.65, 370.78, 2277.4, 2600.11, 2730.29, 503.85, 862.41, 357.44, 1640.41, 868.2, 674.57, 501.09, 2916.13, 445.37, 105.24, 704.66, 868.15, 297.27, 456.23, 31.7, 432.11, 145.05, 62.56, 134.18, 288.77],
        2010: [1863.61, 572.99, 615.42, 448.3, 346.44, 639.27, 190.12, 304.59, 1950.96, 2105.92, 2326.58, 396.17, 767.58, 241.49, 1361.45, 697.68, 561.27, 463.16, 2658.76, 384.53, 78.12, 496.56, 654.7, 231.51, 375.08, 27.08, 384.75, 100.54, 54.53, 97.87, 225.2],
        2009: [1603.63, 461.2, 525.67, 361.64, 291.1, 560.2, 180.83, 227.54, 1804.28, 1596.98, 1899.33, 359.6, 612.2, 165.1, 1044.9, 499.92, 479.11, 402.57, 2283.29, 336.82, 65.73, 389.97, 524.63, 194.44, 351.74, 23.17, 336.21, 88.27, 45.63, 75.54, 198.87],
        2008: [1519.19, 368.1, 420.74, 290.91, 219.09, 455.07, 147.24, 177.43, 1414.21, 1298.48, 1653.45, 313.81, 497.65, 130.57, 880.28, 413.83, 393.05, 334.32, 1972.4, 249.01, 47.33, 303.01, 411.14, 151.55, 277.66, 22.42, 287.16, 72.49, 36.54, 64.8, 171.97],
        2007: [1302.77, 288.17, 347.65, 218.73, 148.3, 386.34, 126.03, 155.48, 1209.08, 1054.25, 1251.43, 223.85, 385.84, 101.34, 734.9, 302.31, 337.27, 260.14, 1705.08, 190.73, 34.43, 247.46, 359.11, 122.25, 168.55, 11.51, 231.03, 61.6, 27.67, 51.05, 149.22],
        2006: [982.37, 186.87, 284.04, 169.63, 108.21, 303.41, 100.75, 74.17, 825.2, 653.25, 906.37, 166.01, 243.9, 79.75, 524.94, 219.72, 174.99, 204.72, 899.91, 129.14, 16.37, 213.7, 299.5, 89.43, 143.62, 6.44, 152.25, 50.51, 23.69, 36.99, 99.25],
        2005: [840.2, 147.4, 213.47, 135.07, 72.52, 232.85, 83.63, 35.03, 675.12, 492.4, 686.32, 127.05, 186.12, 69.55, 448.36, 181.74, 127.32, 162.37, 661.81, 91.93, 13.16, 185.18, 262.26, 73.67, 130.5, 7.57, 127.58, 44.73, 20.36, 32.25, 80.34],
        2004: [713.79, 136.97, 209.1, 110.29, 55.89, 188.04, 77.17, 32.2, 612.45, 440.5, 523.49, 94.1, 171, 65.1, 343.37, 170.82, 118.85, 118.64, 602.68, 74, 11.56, 162.38, 236.5, 60.3, 118.4, 5.4, 90.1, 42.99, 19, 27.92, 70.3],
        2003: [635.56, 112.79, 199.87, 118.48, 55.89, 145.38, 73.15, 32.2, 517.97, 392.11, 451.54, 87.45, 150.09, 64.31, 329.71, 165.11, 107.31, 99.35, 534.28, 61.59, 10.68, 147.04, 206.24, 48.01, 105.48, 4.74, 77.87, 42.31, 17.98, 24.8, 64.92],
        2002: [561.91, 76.86, 179.6, 124.1, 48.39, 137.18, 75.45, 31.6, 485.25, 368.86, 347.53, 81.85, 138.28, 76.51, 310.07, 158.77, 96.95, 92.43, 454.65, 35.86, 10.08, 134.52, 183.13, 41.45, 102.39, 2.81, 67.3, 42.08, 16.75, 21.45, 52.18]
      });
      console.log(dataMap);
      options.value = {
        baseOption: {
          timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: ['2002-01-01', '2003-01-01', '2004-01-01', {
              value: '2005-01-01',
              tooltip: {
                formatter: '{b} GDP达到一个高度'
              },
              symbol: 'diamond',
              symbolSize: 16
            }, '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', {
              value: '2011-01-01',
              tooltip: {
                formatter: function formatter(params) {
                  return params.name + 'GDP达到又一个高度';
                }
              },
              symbol: 'diamond',
              symbolSize: 18
            }],
            label: {
              formatter: function formatter(s) {
                return new Date(s).getFullYear();
              }
            }
          },
          title: {
            subtext: '数据来自国家统计局'
          },
          tooltip: {},
          legend: {
            left: 'right',
            data: ['第一产业', '第二产业', '第三产业', '金融'],
            selected: {
              GDP: false,
              金融: false,
              房地产: false
            }
          },
          calculable: true,
          grid: {
            top: 80,
            bottom: 100
          },
          xAxis: [{
            type: 'category',
            axisLabel: {
              'interval': 'auto'
            },
            data: ['北京', '\n天津', '河北', '\n山西', '内蒙古', '\n辽宁', '吉林', '\n黑龙江', '上海', '\n江苏', '浙江', '\n安徽', '福建', '\n江西', '山东', '\n河南', '湖北', '\n湖南', '广东', '\n广西', '海南', '\n重庆', '四川', '\n贵州', '云南', '\n西藏', '陕西', '\n甘肃', '青海', '\n宁夏', '新疆'],
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'value',
            name: 'GDP（亿元）',
            // max: 53500
            max: 30000
          }],
          series: [{
            name: 'GDP',
            type: 'bar'
          }, {
            name: '金融',
            type: 'bar'
          }, {
            name: '房地产',
            type: 'bar'
          }, {
            name: '第一产业',
            type: 'bar'
          }, {
            name: '第二产业',
            type: 'bar'
          }, {
            name: '第三产业',
            type: 'bar'
          }, {
            name: 'GDP占比',
            type: 'pie',
            center: ['75%', '35%'],
            radius: '28%'
          }]
        },
        options: [{
          title: {
            text: '2002全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2002']
          }, {
            data: dataMap.dataFinancial['2002']
          }, {
            data: dataMap.dataEstate['2002']
          }, {
            data: dataMap.dataPI['2002']
          }, {
            data: dataMap.dataSI['2002']
          }, {
            data: dataMap.dataTI['2002']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2002sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2002sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2002sum']
            }]
          }]
        }, {
          title: {
            text: '2003全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2003']
          }, {
            data: dataMap.dataFinancial['2003']
          }, {
            data: dataMap.dataEstate['2003']
          }, {
            data: dataMap.dataPI['2003']
          }, {
            data: dataMap.dataSI['2003']
          }, {
            data: dataMap.dataTI['2003']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2003sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2003sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2003sum']
            }]
          }]
        }, {
          title: {
            text: '2004全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2004']
          }, {
            data: dataMap.dataFinancial['2004']
          }, {
            data: dataMap.dataEstate['2004']
          }, {
            data: dataMap.dataPI['2004']
          }, {
            data: dataMap.dataSI['2004']
          }, {
            data: dataMap.dataTI['2004']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2004sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2004sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2004sum']
            }]
          }]
        }, {
          title: {
            text: '2005全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2005']
          }, {
            data: dataMap.dataFinancial['2005']
          }, {
            data: dataMap.dataEstate['2005']
          }, {
            data: dataMap.dataPI['2005']
          }, {
            data: dataMap.dataSI['2005']
          }, {
            data: dataMap.dataTI['2005']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2005sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2005sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2005sum']
            }]
          }]
        }, {
          title: {
            text: '2006全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2006']
          }, {
            data: dataMap.dataFinancial['2006']
          }, {
            data: dataMap.dataEstate['2006']
          }, {
            data: dataMap.dataPI['2006']
          }, {
            data: dataMap.dataSI['2006']
          }, {
            data: dataMap.dataTI['2006']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2006sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2006sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2006sum']
            }]
          }]
        }, {
          title: {
            text: '2007全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2007']
          }, {
            data: dataMap.dataFinancial['2007']
          }, {
            data: dataMap.dataEstate['2007']
          }, {
            data: dataMap.dataPI['2007']
          }, {
            data: dataMap.dataSI['2007']
          }, {
            data: dataMap.dataTI['2007']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2007sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2007sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2007sum']
            }]
          }]
        }, {
          title: {
            text: '2008全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2008']
          }, {
            data: dataMap.dataFinancial['2008']
          }, {
            data: dataMap.dataEstate['2008']
          }, {
            data: dataMap.dataPI['2008']
          }, {
            data: dataMap.dataSI['2008']
          }, {
            data: dataMap.dataTI['2008']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2008sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2008sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2008sum']
            }]
          }]
        }, {
          title: {
            text: '2009全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2009']
          }, {
            data: dataMap.dataFinancial['2009']
          }, {
            data: dataMap.dataEstate['2009']
          }, {
            data: dataMap.dataPI['2009']
          }, {
            data: dataMap.dataSI['2009']
          }, {
            data: dataMap.dataTI['2009']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2009sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2009sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2009sum']
            }]
          }]
        }, {
          title: {
            text: '2010全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2010']
          }, {
            data: dataMap.dataFinancial['2010']
          }, {
            data: dataMap.dataEstate['2010']
          }, {
            data: dataMap.dataPI['2010']
          }, {
            data: dataMap.dataSI['2010']
          }, {
            data: dataMap.dataTI['2010']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2010sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2010sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2010sum']
            }]
          }]
        }, {
          title: {
            text: '2011全国宏观经济指标'
          },
          series: [{
            data: dataMap.dataGDP['2011']
          }, {
            data: dataMap.dataFinancial['2011']
          }, {
            data: dataMap.dataEstate['2011']
          }, {
            data: dataMap.dataPI['2011']
          }, {
            data: dataMap.dataSI['2011']
          }, {
            data: dataMap.dataTI['2011']
          }, {
            data: [{
              name: '第一产业',
              value: dataMap.dataPI['2011sum']
            }, {
              name: '第二产业',
              value: dataMap.dataSI['2011sum']
            }, {
              name: '第三产业',
              value: dataMap.dataTI['2011sum']
            }]
          }]
        }]
      };
    };

    onMounted(update);
    return {
      options: options
    };
  }
};

var _withId$f = /*#__PURE__*/withScopeId("data-v-aa343a22");

pushScopeId("data-v-aa343a22");

var _hoisted_1$d = {
  style: {
    "width": "100%",
    "height": "100%"
  }
};

popScopeId();

var render$h = /*#__PURE__*/_withId$f(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueEcharts = resolveComponent("VueEcharts");

  return openBlock(), createBlock("div", _hoisted_1$d, [createVNode(_component_VueEcharts, {
    options: $setup.options
  }, null, 8
  /* PROPS */
  , ["options"])]);
});

var css_248z$g = "";
styleInject(css_248z$g);

script$h.render = render$h;
script$h.__scopeId = "data-v-aa343a22";
script$h.__file = "src/components/TimeLine/TimeLine.vue";

function TimeLine (Vue) {
  Vue.component(script$h.name, script$h);
}

var script$i = {
  name: 'CustomMap',
  setup: function setup() {
    var options = ref({});

    var update = function update() {
      fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json').then(function (response) {
        return response.json();
      }).then(function (data) {
        Echarts$1.registerMap('js', data); //注册地图

        var center = [];
        data.features.forEach(function (item) {
          if (item.properties) {
            center.push({
              key: item.properties.name,
              value: item.properties.center
            });
          }
        });
        options.value = {
          visualMap: {
            show: true,
            //标识是否展示
            max: 100,
            //表示最大值100
            seriesIndex: [0],
            //使用第几组数据
            inRange: {
              color: ['#a5dcf4', '#006edd']
            }
          },
          geo: [{
            map: 'js',
            //使用自定义地图
            zoom: 1,
            //默认地图放大倍数
            roam: false,
            //启动鼠标滚轮地图缩放
            //zoom放大系数调节
            scaleLimit: {
              min: 0,
              //最小为0
              max: 3 //最大为3

            },
            itemStyle: {
              areaColor: '#013c62',
              //背景颜色
              shadowColor: '#013c62',
              //阴影色
              shadowBlur: 20,
              //阴影长度
              shadowOffsteX: -5,
              //阴影位移X轴
              shadowOffsetY: 15 //阴影Y轴向上偏移10像素

            }
          }],
          series: [{
            type: 'map',
            mapType: 'js',
            zoom: 1,
            roam: false,
            label: {
              show: true,
              color: '#fff',
              emphasis: {
                color: '#fff',
                show: false
              }
            },
            itemStyle: {
              //边框默认状态
              normal: {
                borderColor: '#2980b9',
                borderWidth: 1,
                areaColor: '12235c'
              },
              //边框高亮状态
              emphasis: {
                areaColor: '#fa8c16',
                borderWidth: 0
              }
            },
            //绑定数据
            data: center.map(function (centerItem) {
              var value = Math.random() * 100;
              return {
                name: centerItem.key,
                value: value
              };
            })
          }, //地图报警点绘制
          {
            type: 'effectScatter',
            data: [{
              value: center[0].value
            }],
            coordinateSystem: 'geo',
            symbolSize: 16,
            //散点大小
            itemStyle: {
              color: '#feae21'
            },
            label: {
              //默认的展示形式
              normal: {
                show: true,
                //是否展示
                position: 'top',
                //展示位置
                formatter: function formatter(params) {
                  console.log(params);
                  return '测试';
                },
                backgroungColor: 'rgba(254,174,33,.8)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#f7fafb',
                rich: {
                  title: {
                    padding: [0, 10, 10, 10],
                    color: '#fff'
                  }
                }
              },
              //鼠标选中高亮展示形式
              emphasis: {
                show: true
              }
            }
          }]
        };
      });
    };

    onMounted(update);
    return {
      options: options
    };
  }
};

var _withId$g = /*#__PURE__*/withScopeId("data-v-5e44d4b2");

pushScopeId("data-v-5e44d4b2");

var _hoisted_1$e = {
  style: {
    "width": "100%",
    "height": "100%"
  }
};

popScopeId();

var render$i = /*#__PURE__*/_withId$g(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueEcharts = resolveComponent("VueEcharts");

  return openBlock(), createBlock("div", _hoisted_1$e, [createVNode(_component_VueEcharts, {
    options: $setup.options
  }, null, 8
  /* PROPS */
  , ["options"])]);
});

var css_248z$h = "";
styleInject(css_248z$h);

script$i.render = render$i;
script$i.__scopeId = "data-v-5e44d4b2";
script$i.__file = "src/components/CustomMap/CustomMap.vue";

function CustomMap (Vue) {
  Vue.component(script$i.name, script$i);
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
  Vue.use(TotalDevice);
  Vue.use(TotalGender);
  Vue.use(TotalRider);
  Vue.use(HotCategory);
  Vue.use(CenterHeader);
  Vue.use(TransformCategory);
  Vue.use(SalesList);
  Vue.use(SalesList);
  Vue.use(TimeLine);
  Vue.use(CustomMap);
}

export default index;
