import { computed, pushScopeId, popScopeId, openBlock, createBlock, createCommentVNode, createVNode, renderSlot, withScopeId } from 'vue';

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

var css_248z = "";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-416d18c9";
script.__file = "src/components/Loading/Loading.vue";

function Loading (Vue) {
  Vue.component(script.name, script);
}

var script$1 = {
  name: 'flybox'
};

var _withId$1 = /*#__PURE__*/withScopeId("data-v-513cc2e2");

pushScopeId("data-v-513cc2e2");

var _hoisted_1$1 = {
  "class": "flybox"
};

var _hoisted_2$1 = /*#__PURE__*/createVNode("svg", {
  width: "400",
  height: "400"
}, [/*#__PURE__*/createVNode("defs", null, [/*#__PURE__*/createVNode("path", {
  id: "fly-box-path",
  d: "M5 5 L395 5 L395 395 L5 395 Z",
  fill: "none"
}), /*#__PURE__*/createVNode("radialGradient", {
  id: "radial-gradient",
  cx: "50%",
  cy: "50%",
  fx: "100%",
  fy: "50%",
  r: "50%"
}, [/*#__PURE__*/createVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}), /*#__PURE__*/createVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
})]), /*#__PURE__*/createVNode("mask", {
  id: "fly-box-mask"
}, [/*#__PURE__*/createVNode("circle", {
  r: "150",
  cx: "0",
  cy: "0",
  fill: "url(#radial-gradient)"
}, [/*#__PURE__*/createVNode("animateMotion", {
  dur: "3s",
  path: "M5 5 L395 5 L395 395 L5 395 Z",
  rotate: "auto",
  repeatCount: "indefinite"
})])])]), /*#__PURE__*/createVNode("use", {
  href: "#fly-box-path",
  "stroke-width": "1",
  stroke: "#235fa7"
}), /*#__PURE__*/createVNode("use", {
  href: "#fly-box-path",
  "stroke-width": "3",
  stroke: "#4fd2dd",
  mask: "url(#fly-box-mask)"
})], -1
/* HOISTED */
);

popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [_hoisted_2$1]);
});

var css_248z$1 = ".flybox[data-v-513cc2e2] {\n  background: #333;\n}";
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

export default index;
