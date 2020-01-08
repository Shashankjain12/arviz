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
      };var element = document.getElementById("1e9c638f-a7a2-48ff-a3bb-4a864d84e6c0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1e9c638f-a7a2-48ff-a3bb-4a864d84e6c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f545340a-a4a7-4e40-a109-815af17a5d9b":{"roots":{"references":[{"attributes":{},"id":"119534","type":"BasicTicker"},{"attributes":{"ticker":{"id":"119534","type":"BasicTicker"}},"id":"119537","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"119543","type":"PanTool"},{"id":"119544","type":"BoxZoomTool"},{"id":"119545","type":"WheelZoomTool"},{"id":"119546","type":"BoxSelectTool"},{"id":"119547","type":"LassoSelectTool"},{"id":"119548","type":"UndoTool"},{"id":"119549","type":"RedoTool"},{"id":"119550","type":"ResetTool"},{"id":"119551","type":"SaveTool"},{"id":"119552","type":"HoverTool"}]},"id":"119553","type":"Toolbar"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"119572","type":"BasicTickFormatter"},"ticker":{"id":"119539","type":"BasicTicker"}},"id":"119538","type":"LinearAxis"},{"attributes":{"source":{"id":"119564","type":"ColumnDataSource"}},"id":"119568","type":"CDSView"},{"attributes":{"text":"centered model - non centered model"},"id":"119569","type":"Title"},{"attributes":{},"id":"119539","type":"BasicTicker"},{"attributes":{},"id":"119529","type":"LinearScale"},{"attributes":{"formatter":{"id":"119574","type":"BasicTickFormatter"},"ticker":{"id":"119534","type":"BasicTicker"}},"id":"119533","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"119539","type":"BasicTicker"}},"id":"119542","type":"Grid"},{"attributes":{},"id":"119572","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"119564","type":"ColumnDataSource"},"glyph":{"id":"119565","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"119566","type":"Cross"},"selection_glyph":null,"view":{"id":"119568","type":"CDSView"}},"id":"119567","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"119533","type":"LinearAxis"}],"center":[{"id":"119537","type":"Grid"},{"id":"119542","type":"Grid"}],"left":[{"id":"119538","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"119567","type":"GlyphRenderer"}],"title":{"id":"119569","type":"Title"},"toolbar":{"id":"119553","type":"Toolbar"},"x_range":{"id":"119525","type":"DataRange1d"},"x_scale":{"id":"119529","type":"LinearScale"},"y_range":{"id":"119527","type":"DataRange1d"},"y_scale":{"id":"119531","type":"LinearScale"}},"id":"119524","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"119525","type":"DataRange1d"},{"attributes":{},"id":"119574","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119566","type":"Cross"},{"attributes":{},"id":"119576","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119565","type":"Cross"},{"attributes":{},"id":"119577","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"119576","type":"Selection"},"selection_policy":{"id":"119577","type":"UnionRenderers"}},"id":"119564","type":"ColumnDataSource"},{"attributes":{},"id":"119543","type":"PanTool"},{"attributes":{},"id":"119531","type":"LinearScale"},{"attributes":{"overlay":{"id":"119578","type":"BoxAnnotation"}},"id":"119544","type":"BoxZoomTool"},{"attributes":{},"id":"119545","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"119579","type":"BoxAnnotation"}},"id":"119546","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"119580","type":"PolyAnnotation"}},"id":"119547","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119579","type":"BoxAnnotation"},{"attributes":{},"id":"119548","type":"UndoTool"},{"attributes":{},"id":"119549","type":"RedoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119578","type":"BoxAnnotation"},{"attributes":{},"id":"119550","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"119580","type":"PolyAnnotation"},{"attributes":{},"id":"119551","type":"SaveTool"},{"attributes":{"callback":null},"id":"119527","type":"DataRange1d"},{"attributes":{"callback":null},"id":"119552","type":"HoverTool"}],"root_ids":["119524"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"f545340a-a4a7-4e40-a109-815af17a5d9b","roots":{"119524":"1e9c638f-a7a2-48ff-a3bb-4a864d84e6c0"}}];
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