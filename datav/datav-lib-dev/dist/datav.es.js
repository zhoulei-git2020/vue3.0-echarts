import { ref, computed, pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId } from 'vue';

/* eslint-disable */

var script = {
  name: 'Test',
  setup: function setup() {
    var message = 'hello world';
    var count = ref(1);
    var doubleCount = computed(function () {
      return count.value * 2;
    });

    var add = function add() {
      count.value++;
    };

    return {
      message: message,
      doubleCount: doubleCount,
      add: add
    };
  }
};

var _withId = /*#__PURE__*/withScopeId("data-v-07bdddea");

pushScopeId("data-v-07bdddea");

var _hoisted_1 = {
  "class": "test"
};

var _hoisted_2 = /*#__PURE__*/createVNode("svg", {
  width: "30",
  height: "30",
  style: {
    "color": "black"
  }
}, [/*#__PURE__*/createVNode("use", {
  href: "#more"
})], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/createVNode("svg", {
  width: "0",
  height: "0",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("defs", null, [/*#__PURE__*/createVNode("symbol", {
  id: "more",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "25",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "50",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "75",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "25",
  x2: "90",
  y2: "25",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "50",
  x2: "90",
  y2: "50",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "75",
  x2: "90",
  y2: "75",
  "stroke-width": "8",
  stroke: "currentColor"
})])])], -1
/* HOISTED */
);

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", null, toDisplayString($setup.message), 1
  /* TEXT */
  ), createVNode("div", null, " doubleCount:" + toDisplayString($setup.doubleCount), 1
  /* TEXT */
  ), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.add && $setup.add.apply($setup, arguments);
    })
  }, "AddCount"), _hoisted_2, _hoisted_3]);
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

var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-07bdddea";
script.__file = "src/Test.vue";

function index (Vue) {
  Vue.component(script.name, script);
}

export default index;
