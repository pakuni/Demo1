/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['max.js']) {
  _$jscoverage['max.js'] = [];
  _$jscoverage['max.js'][1] = 0;
  _$jscoverage['max.js'][2] = 0;
  _$jscoverage['max.js'][3] = 0;
  _$jscoverage['max.js'][4] = 0;
  _$jscoverage['max.js'][6] = 0;
}
_$jscoverage['max.js'].source = ["module<span class=\"k\">.</span>exports <span class=\"k\">=</span> <span class=\"k\">function</span> max<span class=\"k\">(</span>array<span class=\"k\">)</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> max <span class=\"k\">=</span> array<span class=\"k\">[</span><span class=\"s\">0</span><span class=\"k\">];</span>","    <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span> <span class=\"k\">;</span> i<span class=\"k\">&lt;</span>array<span class=\"k\">.</span>length <span class=\"k\">;</span> i<span class=\"k\">++)</span><span class=\"k\">{</span>","        max <span class=\"k\">=</span> array<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">&gt;</span> max <span class=\"k\">?</span> array<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">:</span> max<span class=\"k\">;</span>","    <span class=\"k\">}</span>","    <span class=\"k\">return</span> max<span class=\"k\">;</span>","<span class=\"k\">}</span>"];
_$jscoverage['max.js'][1]++;
module.exports = (function max(array) {
  _$jscoverage['max.js'][2]++;
  var max = array[0];
  _$jscoverage['max.js'][3]++;
  for (var i = 0; (i < array.length); (i++)) {
    _$jscoverage['max.js'][4]++;
    max = ((array[i] > max)? array[i]: max);
}
  _$jscoverage['max.js'][6]++;
  return max;
});
