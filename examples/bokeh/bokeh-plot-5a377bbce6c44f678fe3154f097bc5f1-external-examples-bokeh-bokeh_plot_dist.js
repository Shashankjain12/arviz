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
      };var element = document.getElementById("05dc58a1-4d1a-4557-b86f-7edb0cfb7dc6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '05dc58a1-4d1a-4557-b86f-7edb0cfb7dc6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"72532bf1-6959-4f2d-b4d0-ed8137fc2e10":{"roots":{"references":[{"attributes":{"callback":null},"id":"95507","type":"DataRange1d"},{"attributes":{"below":[{"id":"95481","type":"LinearAxis"}],"center":[{"id":"95485","type":"Grid"},{"id":"95490","type":"Grid"},{"id":"95548","type":"Legend"}],"left":[{"id":"95486","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95539","type":"GlyphRenderer"}],"title":{"id":"95542","type":"Title"},"toolbar":{"id":"95497","type":"Toolbar"},"x_range":{"id":"95473","type":"DataRange1d"},"x_scale":{"id":"95477","type":"LinearScale"},"y_range":{"id":"95475","type":"DataRange1d"},"y_scale":{"id":"95479","type":"LinearScale"}},"id":"95472","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"95473","type":"DataRange1d"},{"attributes":{},"id":"95577","type":"Selection"},{"attributes":{},"id":"95509","type":"LinearScale"},{"attributes":{},"id":"95511","type":"LinearScale"},{"attributes":{"overlay":{"id":"95547","type":"BoxAnnotation"}},"id":"95493","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"95487","type":"BasicTicker"}},"id":"95490","type":"Grid"},{"attributes":{},"id":"95559","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"95472","subtype":"Figure","type":"Plot"},{"id":"95504","subtype":"Figure","type":"Plot"}]},"id":"95564","type":"Row"},{"attributes":{},"id":"95526","type":"SaveTool"},{"attributes":{},"id":"95492","type":"WheelZoomTool"},{"attributes":{},"id":"95524","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95547","type":"BoxAnnotation"},{"attributes":{},"id":"95580","type":"Selection"},{"attributes":{},"id":"95491","type":"PanTool"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"95553","type":"GlyphRenderer"}]},"id":"95563","type":"LegendItem"},{"attributes":{"callback":null},"id":"95475","type":"DataRange1d"},{"attributes":{"callback":null},"id":"95505","type":"DataRange1d"},{"attributes":{},"id":"95557","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"95563","type":"LegendItem"}]},"id":"95562","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95552","type":"Line"},{"attributes":{},"id":"95523","type":"PanTool"},{"attributes":{},"id":"95482","type":"BasicTicker"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95537","type":"Quad"},{"attributes":{},"id":"95528","type":"HelpTool"},{"attributes":{},"id":"95578","type":"UnionRenderers"},{"attributes":{},"id":"95543","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"95550","type":"ColumnDataSource"},"glyph":{"id":"95551","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95552","type":"Line"},"selection_glyph":null,"view":{"id":"95554","type":"CDSView"}},"id":"95553","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"95519","type":"BasicTicker"}},"id":"95522","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95538","type":"Quad"},{"attributes":{},"id":"95495","type":"ResetTool"},{"attributes":{},"id":"95494","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95491","type":"PanTool"},{"id":"95492","type":"WheelZoomTool"},{"id":"95493","type":"BoxZoomTool"},{"id":"95494","type":"SaveTool"},{"id":"95495","type":"ResetTool"},{"id":"95496","type":"HelpTool"}]},"id":"95497","type":"Toolbar"},{"attributes":{"below":[{"id":"95513","type":"LinearAxis"}],"center":[{"id":"95517","type":"Grid"},{"id":"95522","type":"Grid"},{"id":"95562","type":"Legend"}],"left":[{"id":"95518","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95553","type":"GlyphRenderer"}],"title":{"id":"95556","type":"Title"},"toolbar":{"id":"95529","type":"Toolbar"},"x_range":{"id":"95505","type":"DataRange1d"},"x_scale":{"id":"95509","type":"LinearScale"},"y_range":{"id":"95507","type":"DataRange1d"},"y_scale":{"id":"95511","type":"LinearScale"}},"id":"95504","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"95551","type":"Line"},{"attributes":{"formatter":{"id":"95543","type":"BasicTickFormatter"},"ticker":{"id":"95487","type":"BasicTicker"}},"id":"95486","type":"LinearAxis"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"95539","type":"GlyphRenderer"}]},"id":"95549","type":"LegendItem"},{"attributes":{},"id":"95479","type":"LinearScale"},{"attributes":{"items":[{"id":"95549","type":"LegendItem"}]},"id":"95548","type":"Legend"},{"attributes":{},"id":"95477","type":"LinearScale"},{"attributes":{},"id":"95581","type":"UnionRenderers"},{"attributes":{"text":""},"id":"95556","type":"Title"},{"attributes":{},"id":"95514","type":"BasicTicker"},{"attributes":{},"id":"95519","type":"BasicTicker"},{"attributes":{"data_source":{"id":"95536","type":"ColumnDataSource"},"glyph":{"id":"95537","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95538","type":"Quad"},"selection_glyph":null,"view":{"id":"95540","type":"CDSView"}},"id":"95539","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"95580","type":"Selection"},"selection_policy":{"id":"95581","type":"UnionRenderers"}},"id":"95550","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"95559","type":"BasicTickFormatter"},"ticker":{"id":"95514","type":"BasicTicker"}},"id":"95513","type":"LinearAxis"},{"attributes":{"source":{"id":"95550","type":"ColumnDataSource"}},"id":"95554","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95561","type":"BoxAnnotation"},{"attributes":{},"id":"95545","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"95561","type":"BoxAnnotation"}},"id":"95525","type":"BoxZoomTool"},{"attributes":{"source":{"id":"95536","type":"ColumnDataSource"}},"id":"95540","type":"CDSView"},{"attributes":{"ticker":{"id":"95514","type":"BasicTicker"}},"id":"95517","type":"Grid"},{"attributes":{},"id":"95527","type":"ResetTool"},{"attributes":{},"id":"95496","type":"HelpTool"},{"attributes":{"formatter":{"id":"95545","type":"BasicTickFormatter"},"ticker":{"id":"95482","type":"BasicTicker"}},"id":"95481","type":"LinearAxis"},{"attributes":{"text":""},"id":"95542","type":"Title"},{"attributes":{},"id":"95487","type":"BasicTicker"},{"attributes":{"ticker":{"id":"95482","type":"BasicTicker"}},"id":"95485","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95523","type":"PanTool"},{"id":"95524","type":"WheelZoomTool"},{"id":"95525","type":"BoxZoomTool"},{"id":"95526","type":"SaveTool"},{"id":"95527","type":"ResetTool"},{"id":"95528","type":"HelpTool"}]},"id":"95529","type":"Toolbar"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"Gy/dJAaBlT97FK5H4Xq0P1TjpZvEIMA/NV66SQwCyz9SuB6F61HIP3sUrkfhesQ/okW28/3UuD8IrBxaZDuvPxkEVg4tsp0/eekmMQisjD8730+Nl26CP/yp8dJNYlA//Knx0k1iUD8=","dtype":"float64","shape":[13]}},"selected":{"id":"95577","type":"Selection"},"selection_policy":{"id":"95578","type":"UnionRenderers"}},"id":"95536","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"95557","type":"BasicTickFormatter"},"ticker":{"id":"95519","type":"BasicTicker"}},"id":"95518","type":"LinearAxis"}],"root_ids":["95564"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"72532bf1-6959-4f2d-b4d0-ed8137fc2e10","roots":{"95564":"05dc58a1-4d1a-4557-b86f-7edb0cfb7dc6"}}];
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