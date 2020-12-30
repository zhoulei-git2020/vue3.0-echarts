(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('crypto')) :
  typeof define === 'function' && define.amd ? define(['vue', 'crypto'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Datav = factory(global.Vue, global.crypto));
}(this, (function (vue, crypto) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

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

  var css_248z = "";
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

  var script$2 = {
    name: 'container',
    props: {},
    setup: function setup(ctx) {
      return {};
    }
  };

  var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-807af65a");

  vue.pushScopeId("data-v-807af65a");

  var _hoisted_1$2 = {
    id: "container"
  };

  vue.popScopeId();

  var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, " 11111 ");
  });

  var css_248z$2 = "";
  styleInject(css_248z$2);

  script$2.render = render$2;
  script$2.__scopeId = "data-v-807af65a";
  script$2.__file = "src/components/Container/Container.vue";

  function container (Vue) {
    Vue.component(script$2.name, script$2);
  }

  function index (Vue) {
    Vue.use(Loading);
    Vue.use(flybox);
    Vue.use(container);
  }

  return index;

})));
