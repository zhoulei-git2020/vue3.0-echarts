import { pushScopeId, popScopeId, openBlock, createBlock, withScopeId, createVNode, createCommentVNode } from 'vue';

pushScopeId("data-v-07bdddea");

popScopeId();

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

/* eslint-disable */

var script = {
  name: 'SvgAnimation'
};

var _withId = /*#__PURE__*/withScopeId("data-v-5a151e4f");

pushScopeId("data-v-5a151e4f");

var _hoisted_1 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "440",
  height: "440",
  viewBox: "0 0 440 440"
}, [/*#__PURE__*/createVNode("circle", {
  cx: "220",
  cy: "220",
  r: "200",
  "stroke-width": "20",
  stroke: "#d1d3d7",
  fill: "none"
}), /*#__PURE__*/createCommentVNode(" 2*3.1415926*180 = 1131 "), /*#__PURE__*/createVNode("circle", {
  "class": "circle",
  cx: "220",
  cy: "220",
  r: "200",
  "stroke-width": "20",
  stroke: "#00a5e0",
  fill: "none",
  transform: "matrix(0 -1 1 0 0 440)"
})])], -1
/* HOISTED */
);

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [_hoisted_1]);
});

var css_248z$1 = ".container[data-v-5a151e4f] svg {\n  border: 1px solid #000;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle-5a151e4f 3s linear infinite;\n}\n\n@keyframes circle-5a151e4f {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}";
styleInject(css_248z$1);

script.render = render;
script.__scopeId = "data-v-5a151e4f";
script.__file = "src/components/SvgAnimation/SvgAnimation.vue";

function SvgAnimation (Vue) {
  Vue.component(script.name, script);
}

function index (Vue) {
  Vue.use(SvgAnimation);
}

export default index;
