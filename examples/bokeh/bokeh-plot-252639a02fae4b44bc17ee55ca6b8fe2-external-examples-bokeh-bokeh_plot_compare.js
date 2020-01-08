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
      };var element = document.getElementById("c1f7b032-c067-4951-9ab5-33c835dc7f17");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c1f7b032-c067-4951-9ab5-33c835dc7f17' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"68c40cc2-1260-4096-bb80-b84a5d464c33":{"roots":{"references":[{"attributes":{},"id":"93170","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93227","type":"BoxAnnotation"},{"attributes":{},"id":"93158","type":"BasicTicker"},{"attributes":{"ticker":{"id":"93153","type":"BasicTicker"}},"id":"93156","type":"Grid"},{"attributes":{},"id":"93148","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93228","type":"PolyAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93192","type":"MultiLine"},{"attributes":{},"id":"93219","type":"UnionRenderers"},{"attributes":{},"id":"93153","type":"BasicTicker"},{"attributes":{},"id":"93169","type":"ResetTool"},{"attributes":{},"id":"93225","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"93213","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93183","type":"FixedTicker"}},"id":"93157","type":"LinearAxis"},{"attributes":{},"id":"93221","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93191","type":"MultiLine"},{"attributes":{"text":""},"id":"93212","type":"Title"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93201","type":"MultiLine"},{"attributes":{"callback":null},"id":"93171","type":"HoverTool"},{"attributes":{"data_source":{"id":"93205","type":"ColumnDataSource"},"glyph":{"id":"93206","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93207","type":"Circle"},"selection_glyph":null,"view":{"id":"93209","type":"CDSView"}},"id":"93208","type":"GlyphRenderer"},{"attributes":{},"id":"93168","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93187","type":"Triangle"},{"attributes":{},"id":"93167","type":"UndoTool"},{"attributes":{},"id":"93216","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"93228","type":"PolyAnnotation"}},"id":"93166","type":"LassoSelectTool"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93210","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93207","type":"Circle"},{"attributes":{},"id":"93164","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"93144","type":"DataRange1d"},{"attributes":{},"id":"93220","type":"Selection"},{"attributes":{"source":{"id":"93205","type":"ColumnDataSource"}},"id":"93209","type":"CDSView"},{"attributes":{},"id":"93222","type":"Selection"},{"attributes":{},"id":"93223","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"93226","type":"BoxAnnotation"}},"id":"93163","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"93195","type":"ColumnDataSource"},"glyph":{"id":"93196","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93197","type":"Circle"},"selection_glyph":null,"view":{"id":"93199","type":"CDSView"}},"id":"93198","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93162","type":"PanTool"},{"id":"93163","type":"BoxZoomTool"},{"id":"93164","type":"WheelZoomTool"},{"id":"93165","type":"BoxSelectTool"},{"id":"93166","type":"LassoSelectTool"},{"id":"93167","type":"UndoTool"},{"id":"93168","type":"RedoTool"},{"id":"93169","type":"ResetTool"},{"id":"93170","type":"SaveTool"},{"id":"93171","type":"HoverTool"}]},"id":"93172","type":"Toolbar"},{"attributes":{},"id":"93224","type":"Selection"},{"attributes":{},"id":"93217","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93185","type":"ColumnDataSource"},"glyph":{"id":"93186","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93187","type":"Triangle"},"selection_glyph":null,"view":{"id":"93189","type":"CDSView"}},"id":"93188","type":"GlyphRenderer"},{"attributes":{},"id":"93213","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93218","type":"Selection"},"selection_policy":{"id":"93219","type":"UnionRenderers"}},"id":"93190","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93226","type":"BoxAnnotation"},{"attributes":{},"id":"93214","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[[58.53982289798474,64.0442696921698],[58.87836743710372,64.15354051019008]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93222","type":"Selection"},"selection_policy":{"id":"93223","type":"UnionRenderers"}},"id":"93200","type":"ColumnDataSource"},{"attributes":{},"id":"93162","type":"PanTool"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93146","type":"DataRange1d"},{"attributes":{"source":{"id":"93200","type":"ColumnDataSource"}},"id":"93204","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93202","type":"MultiLine"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93214","type":"BasicTickFormatter"},"ticker":{"id":"93153","type":"BasicTicker"}},"id":"93152","type":"LinearAxis"},{"attributes":{"source":{"id":"93190","type":"ColumnDataSource"}},"id":"93194","type":"CDSView"},{"attributes":{},"id":"93150","type":"LinearScale"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93206","type":"Circle"},{"attributes":{"below":[{"id":"93152","type":"LinearAxis"}],"center":[{"id":"93156","type":"Grid"},{"id":"93161","type":"Grid"}],"left":[{"id":"93157","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93188","type":"GlyphRenderer"},{"id":"93193","type":"GlyphRenderer"},{"id":"93198","type":"GlyphRenderer"},{"id":"93203","type":"GlyphRenderer"},{"id":"93208","type":"GlyphRenderer"},{"id":"93210","type":"Span"}],"title":{"id":"93212","type":"Title"},"toolbar":{"id":"93172","type":"Toolbar"},"x_range":{"id":"93144","type":"DataRange1d"},"x_scale":{"id":"93148","type":"LinearScale"},"y_range":{"id":"93146","type":"DataRange1d"},"y_scale":{"id":"93150","type":"LinearScale"}},"id":"93143","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"93218","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93216","type":"Selection"},"selection_policy":{"id":"93217","type":"UnionRenderers"}},"id":"93185","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93197","type":"Circle"},{"attributes":{"source":{"id":"93195","type":"ColumnDataSource"}},"id":"93199","type":"CDSView"},{"attributes":{"data_source":{"id":"93190","type":"ColumnDataSource"},"glyph":{"id":"93191","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93192","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93194","type":"CDSView"}},"id":"93193","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93185","type":"ColumnDataSource"}},"id":"93189","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93196","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93224","type":"Selection"},"selection_policy":{"id":"93225","type":"UnionRenderers"}},"id":"93205","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"93200","type":"ColumnDataSource"},"glyph":{"id":"93201","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93202","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93204","type":"CDSView"}},"id":"93203","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"93158","type":"BasicTicker"}},"id":"93161","type":"Grid"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93186","type":"Triangle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93183","type":"FixedTicker"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93220","type":"Selection"},"selection_policy":{"id":"93221","type":"UnionRenderers"}},"id":"93195","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"93227","type":"BoxAnnotation"}},"id":"93165","type":"BoxSelectTool"}],"root_ids":["93143"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"68c40cc2-1260-4096-bb80-b84a5d464c33","roots":{"93143":"c1f7b032-c067-4951-9ab5-33c835dc7f17"}}];
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