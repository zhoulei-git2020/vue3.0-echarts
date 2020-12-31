import { computed, pushScopeId, popScopeId, openBlock, createBlock, createCommentVNode, createVNode, renderSlot, withScopeId, ref, onMounted, getCurrentInstance } from 'vue';
import { v4 } from 'uuid';

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

var script$2 = {
  name: 'container',
  props: {
    //用于接收数据大屏的宽高
    options: Object
  },
  setup: function setup(ctx) {
    var refName = 'Container';
    var width = ref(0);
    var height = ref(0); //组件视口宽

    var originalWidth = ref(0); //组件视口高

    var originalHeight = ref(0);
    var context, dom;

    var init = function init() {
      dom = context.$refs[refName];

      if (ctx.options && ctx.options.width && ctx.options.height) {
        //判断是否传入宽高
        //将传入的宽高记录下来
        width.value = ctx.options.width;
        height.value = ctx.options.height;
      } else {
        //如果用户没有传入宽高就从dom去拿
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      } //判断是否拿到真实的视口宽高，没有拿到则赋值


      if (!originalWidth.value || !originalHeight.value) {
        //传入真实视口的宽
        originalWidth.value = screen.width; //传入真实视口的高

        originalHeight.value = screen.height;
      }
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
      //拿到当前实际视口的宽高 
      c; //创建变量计算出宽度压缩比和高度压缩比

      var widthScale = 1;
      var heightScale = 1;
      dom.style.transform = "scale(".concat(widthScale, ",").concat(heightScale, ")");
    };

    onMounted(function () {
      context = getCurrentInstance().ctx; //第一步调用init方法拿到视口的尺寸

      init(); //视口压缩算法

      updateScale(); //更新窗口大小

      updateSize();
    });
    return {
      refName: refName
    };
  }
};

var _withId$2 = /*#__PURE__*/withScopeId("data-v-807af65a");

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    id: "container",
    ref: $setup.refName
  }, [renderSlot(_ctx.$slots, "default")], 512
  /* NEED_PATCH */
  );
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

export default index;
