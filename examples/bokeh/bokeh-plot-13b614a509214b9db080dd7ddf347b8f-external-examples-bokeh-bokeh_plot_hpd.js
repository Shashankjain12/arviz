(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("bef8083f-d8c2-45db-bbe5-4a9b3dc21478");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bef8083f-d8c2-45db-bbe5-4a9b3dc21478' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"52fb7d3c-ba0c-4ec6-a93e-61eb800c9c6e":{"roots":{"references":[{"attributes":{},"id":"97122","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97110","type":"Patch"},{"attributes":{"source":{"id":"97108","type":"ColumnDataSource"}},"id":"97112","type":"CDSView"},{"attributes":{"callback":null},"id":"97069","type":"DataRange1d"},{"attributes":{},"id":"97126","type":"Selection"},{"attributes":{"formatter":{"id":"97122","type":"BasicTickFormatter"},"ticker":{"id":"97078","type":"BasicTicker"}},"id":"97077","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97115","type":"Line"},{"attributes":{},"id":"97124","type":"Selection"},{"attributes":{},"id":"97125","type":"UnionRenderers"},{"attributes":{"below":[{"id":"97077","type":"LinearAxis"}],"center":[{"id":"97081","type":"Grid"},{"id":"97086","type":"Grid"}],"left":[{"id":"97082","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97111","type":"GlyphRenderer"},{"id":"97116","type":"GlyphRenderer"}],"title":{"id":"97119","type":"Title"},"toolbar":{"id":"97097","type":"Toolbar"},"x_range":{"id":"97069","type":"DataRange1d"},"x_scale":{"id":"97073","type":"LinearScale"},"y_range":{"id":"97071","type":"DataRange1d"},"y_scale":{"id":"97075","type":"LinearScale"}},"id":"97068","subtype":"Figure","type":"Plot"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97114","type":"Line"},{"attributes":{"callback":null},"id":"97096","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97087","type":"PanTool"},{"id":"97088","type":"BoxZoomTool"},{"id":"97089","type":"WheelZoomTool"},{"id":"97090","type":"BoxSelectTool"},{"id":"97091","type":"LassoSelectTool"},{"id":"97092","type":"UndoTool"},{"id":"97093","type":"RedoTool"},{"id":"97094","type":"ResetTool"},{"id":"97095","type":"SaveTool"},{"id":"97096","type":"HoverTool"}]},"id":"97097","type":"Toolbar"},{"attributes":{"text":""},"id":"97119","type":"Title"},{"attributes":{},"id":"97094","type":"ResetTool"},{"attributes":{},"id":"97095","type":"SaveTool"},{"attributes":{},"id":"97075","type":"LinearScale"},{"attributes":{"data_source":{"id":"97113","type":"ColumnDataSource"},"glyph":{"id":"97114","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97115","type":"Line"},"selection_glyph":null,"view":{"id":"97117","type":"CDSView"}},"id":"97116","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97128","type":"BoxAnnotation"},{"attributes":{},"id":"97089","type":"WheelZoomTool"},{"attributes":{"source":{"id":"97113","type":"ColumnDataSource"}},"id":"97117","type":"CDSView"},{"attributes":{},"id":"97087","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97129","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"97120","type":"BasicTickFormatter"},"ticker":{"id":"97083","type":"BasicTicker"}},"id":"97082","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97130","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"97108","type":"ColumnDataSource"},"glyph":{"id":"97109","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97110","type":"Patch"},"selection_glyph":null,"view":{"id":"97112","type":"CDSView"}},"id":"97111","type":"GlyphRenderer"},{"attributes":{},"id":"97078","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"97130","type":"PolyAnnotation"}},"id":"97091","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"97071","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97124","type":"Selection"},"selection_policy":{"id":"97125","type":"UnionRenderers"}},"id":"97108","type":"ColumnDataSource"},{"attributes":{},"id":"97120","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97109","type":"Patch"},{"attributes":{},"id":"97073","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"/UuxI+w5AcC1gXvs/ggAwE6lp+xDJv2/vQ+NvgNF+7+0mKBQmwH5v/9Jj3JG5PW/gF6V6Yy19b8wOqLLx+/0v7XZ0Vf1uPO/AeTgc099879dIoP7nC3yv59/bDh9yfC/en4a6AWi8L/iRtepf1/wv6l6Q4dzmu6/HAA7TmLM7b+OdKsmOPDnv99GES9auOe/6+q2Kvqg5r8tHBDN/E3mvzbbM+w6Rea/BBkMBk0m5r+Y+It9dNXlv2TF9sOuiOS/AJeKGWMe5L9P1C9u4ZnivwutCkq5/+G/VyLYt92U4b8dA8wpAyThv+NcEWbHNt6/5Xjc1NDc3L/h1ve9Tlfcv2z2pIlhfNq/nrxseDx82r+ZymwB1HLWvxfK3WyW49W/mS/+OK2z1L/gDmQLTrPUvwCCR7itN9O/6OB6rYPX0r+eF7tDJcrSv4GsN7xz2NG/pgAvlK3TzL+Xcdlac5PIv+1l7B6k9ca/Mn9VCgAHxL/f2QZyoKDDv7ZiDjFAdsC/neRA+hnctb93dKWsvyWiv3qO0ouPTJq/NiK16I0ilT+eBoFaPfiXP2XAdA2u0rc/w1WUFbPguD+bs8OEg/e7P1+wqalBDsI/a3YHnDHfzj8bjjaZCbPPP3F7o4WPtNA/97g5L48W0j/X3g1soEPSPyL3CU62HNU/WA47QxdB2j8HDLsjKX3cPy9SOe5H99w/wb4KKVMi3j8X0PqQRebeP9BwKkzGFOE/MO/4TnXI4j/4gv36+7TkP+PJL/lcpeU/t0cj4YZC5j8Wl1ityMbnP60Hn+jogug/5ndy1TLX6j+m4I7fFJnrPwSRtHtUEO4/S8izhwRg7z8OMqussUfwP+5L0gfmpvA/vbMkrhhR8j9ysOXJqWLyP4KCTOsAqPI/7DQCfeOa9D+CitJPGK/0P/LaE2JJVPU/CX/yY5Tx9T9IsiGfNkD2P4vKO1hocvY/lF6G+JTm9j96lecbsCr4P/00gu6E+vg/1g8ZqDdr+T/NOifdKIf5P3BVYU/uF/o/lFZLZkWo+z/i7Ki6p/78P7KZzC5Fj/0/cY8gU7N+/z8=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"BmiduCeM7T+W/AgnAu7vP1ktrAnebPE/Ini5IH5d8j+ms69XMn/zPwBbuMbcDfU/wFA1izkl9T/o4i4aHIj1PyYTF1SFI/Y/AI4PRlhB9j/Sbj6CMen2PzDAyWNBm/c/w8DyC/2u9z+PXBQrQND3P1YhLx5jWfg/+T9xbOeM+D/cIlX28QP6P0iuO3TpEfo/RUVSdcFX+j/1+LvMgGz6PzIJ80Sxbvo/v/l8vmx2+j/aAZ3goor6P6dOAk/U3fo/QFqdOWf4+j/sCnSkh1n7P71Ufa0RgPs/avcJksia+z85/4w1/7b7P2TUPRMnOfw/43Bk5WVk/D8kBUEoFnX8PzJhy85zsPw/bGjycHiw/D+tZtJ/pTH9P71GZDKNQ/0/DTrgWIpp/T8kfpM+lmn9P8AP90gKmf0/46NQig+l/T8MnYhXu6b9P3AKeYjxxP0/9g+9JsUy/j/naFLKyHb+P6E5Eb6lkP4/Daha/4+//j9ikt/49cX+P9UZ7/yb+P4/2/gtMB9R/z8uak0Babf/P+Na6OBmy/8/IrXojSIVAEAHgVo9+BcAQALTNbhKXwBAV1FWzIJjAEDODhMO3m8AQINNTQ1ykABAszvgjPn2AEBxtMlMmP0AQLc3WvhICwFAj5vz8mghAUDt3cAGOiQBQHKf4GTLUQFA5rAzdBGkAUDAsDuS0scBQCOV4350zwFA7KuQMiXiAUABrQ9ZZO4BQBpOhcmYIgJA5h3fqQ5ZAkBfsF9/n5YCQDz5JZ+rtAJA92gk3FDIAkDjEqsV2fgCQPbgEx1dEANA/U6uWuZaA0AV3PGbInMDQCCSdo8KwgNACXn2kADsA0CEzCpr7BEEQPyS9IG5KQRA7yyJK0aUBEAcbHlyqpgEQKAg0zoAqgRAO41A37gmBUCgovQTxisFQLz2hFgSVQVAwp/8GGV8BUCSbMinDZAFQKPyDhaanAVApZchPqW5BUBe5fkGrAoGQD+NoDuhPgZA9kMG6s1aBkCzzkk3ymEGQFxV2JP7hQZApdWSWRHqBkA4O6ruqT8HQGwms0vRYwdA3CPI1KzfB0A=","dtype":"float64","shape":[100]}},"selected":{"id":"97126","type":"Selection"},"selection_policy":{"id":"97127","type":"UnionRenderers"}},"id":"97113","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"97129","type":"BoxAnnotation"}},"id":"97090","type":"BoxSelectTool"},{"attributes":{},"id":"97092","type":"UndoTool"},{"attributes":{},"id":"97083","type":"BasicTicker"},{"attributes":{},"id":"97093","type":"RedoTool"},{"attributes":{},"id":"97127","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"97128","type":"BoxAnnotation"}},"id":"97088","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"97083","type":"BasicTicker"}},"id":"97086","type":"Grid"},{"attributes":{"ticker":{"id":"97078","type":"BasicTicker"}},"id":"97081","type":"Grid"}],"root_ids":["97068"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"52fb7d3c-ba0c-4ec6-a93e-61eb800c9c6e","roots":{"97068":"bef8083f-d8c2-45db-bbe5-4a9b3dc21478"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();