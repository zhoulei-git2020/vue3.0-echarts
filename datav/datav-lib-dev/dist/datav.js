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

  function index (Vue) {
    Vue.use(Loading);
  }

  return index;

})));
