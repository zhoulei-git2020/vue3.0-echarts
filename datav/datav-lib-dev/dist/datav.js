(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Datav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

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

  var script$1 = {
    name: 'flybox',
    props: {},
    setup: function setup(ctx) {
      var width = vue.ref(0);
      var height = vue.ref(0);
      var refName = "flybox";
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
        path: path
      };
    }
  };

  var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-513cc2e2");

  vue.pushScopeId("data-v-513cc2e2");

  var _hoisted_1$1 = /*#__PURE__*/vue.createVNode("radialGradient", {
    id: "radial-gradient",
    cx: "50%",
    cy: "50%",
    fx: "100%",
    fy: "50%",
    r: "50%"
  }, [/*#__PURE__*/vue.createVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }), /*#__PURE__*/vue.createVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  })], -1
  /* HOISTED */
  );

  var _hoisted_2$1 = {
    id: "fly-box-mask"
  };
  var _hoisted_3 = {
    r: "150",
    cx: "0",
    cy: "0",
    fill: "url(#radial-gradient)"
  };

  var _hoisted_4 = /*#__PURE__*/vue.createVNode("use", {
    href: "#fly-box-path",
    "stroke-width": "1",
    stroke: "#235fa7"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_5 = /*#__PURE__*/vue.createVNode("use", {
    href: "#fly-box-path",
    "stroke-width": "3",
    stroke: "#4fd2dd",
    mask: "url(#fly-box-mask)"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_6 = {
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
      id: "fly-box-path",
      d: $setup.path,
      fill: "none"
    }, null, 8
    /* PROPS */
    , ["d"]), _hoisted_1$1, vue.createVNode("mask", _hoisted_2$1, [vue.createVNode("circle", _hoisted_3, [vue.createVNode("animateMotion", {
      dur: "2s",
      path: $setup.path,
      rotate: "auto",
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["path"])])])]), _hoisted_4, _hoisted_5], 8
    /* PROPS */
    , ["width", "height"])), vue.createVNode("div", _hoisted_6, [vue.renderSlot(_ctx.$slots, "default")])], 512
    /* NEED_PATCH */
    );
  });

  var css_248z$1 = ".flybox[data-v-513cc2e2] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.flybox[data-v-513cc2e2] svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.fly-box-content[data-v-513cc2e2] {\n  width: 100%;\n  height: 100%;\n  background: #333;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-513cc2e2";
  script$1.__file = "src/components/FlyBox/FlyBox.vue";

  function flybox (Vue) {
    Vue.component(script$1.name, script$1);
  }

  function index (Vue) {
    Vue.use(Loading);
    Vue.use(flybox);
  }

  return index;

})));
