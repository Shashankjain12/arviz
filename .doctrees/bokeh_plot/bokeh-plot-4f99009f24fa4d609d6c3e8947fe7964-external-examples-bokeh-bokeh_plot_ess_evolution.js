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
      };var element = document.getElementById("03f1e08f-74a9-4050-9518-592b0753bcb7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '03f1e08f-74a9-4050-9518-592b0753bcb7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc7e8261-84a8-4604-a298-6416e2cd7746":{"roots":{"references":[{"attributes":{"data_source":{"id":"95996","type":"ColumnDataSource"},"glyph":{"id":"95997","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95998","type":"Line"},"selection_glyph":null,"view":{"id":"96000","type":"CDSView"}},"id":"95999","type":"GlyphRenderer"},{"attributes":{"source":{"id":"95996","type":"ColumnDataSource"}},"id":"96000","type":"CDSView"},{"attributes":{"below":[{"id":"95942","type":"LinearAxis"}],"center":[{"id":"95946","type":"Grid"},{"id":"95951","type":"Grid"},{"id":"95994","type":"Legend"}],"left":[{"id":"95947","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"95976","type":"GlyphRenderer"},{"id":"95981","type":"GlyphRenderer"},{"id":"95999","type":"GlyphRenderer"},{"id":"96018","type":"GlyphRenderer"},{"id":"96020","type":"Span"}],"title":{"id":"96021","type":"Title"},"toolbar":{"id":"95962","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"95934","type":"DataRange1d"},"x_scale":{"id":"95938","type":"LinearScale"},"y_range":{"id":"95936","type":"DataRange1d"},"y_scale":{"id":"95940","type":"LinearScale"}},"id":"95933","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95958","type":"RedoTool"},{"attributes":{"toolbar":{"id":"96041","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96042","type":"ToolbarBox"},{"attributes":{},"id":"95938","type":"LinearScale"},{"attributes":{},"id":"95957","type":"UndoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96032","type":"Selection"},"selection_policy":{"id":"96033","type":"UnionRenderers"}},"id":"95996","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"95989","type":"Selection"},"selection_policy":{"id":"95990","type":"UnionRenderers"}},"id":"95973","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96017","type":"Circle"},{"attributes":{"data_source":{"id":"96015","type":"ColumnDataSource"},"glyph":{"id":"96016","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96017","type":"Circle"},"selection_glyph":null,"view":{"id":"96019","type":"CDSView"}},"id":"96018","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"95995","type":"LegendItem"},{"id":"96014","type":"LegendItem"}]},"id":"95994","type":"Legend"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96009","type":"Selection"},"selection_policy":{"id":"96010","type":"UnionRenderers"}},"id":"95978","type":"ColumnDataSource"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"95981","type":"GlyphRenderer"}]},"id":"95995","type":"LegendItem"},{"attributes":{"axis_label":"ESS","formatter":{"id":"95985","type":"BasicTickFormatter"},"ticker":{"id":"95948","type":"BasicTicker"}},"id":"95947","type":"LinearAxis"},{"attributes":{},"id":"96035","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"95936","type":"DataRange1d"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"95999","type":"GlyphRenderer"}]},"id":"96014","type":"LegendItem"},{"attributes":{},"id":"95989","type":"Selection"},{"attributes":{},"id":"95940","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95952","type":"PanTool"},{"id":"95953","type":"BoxZoomTool"},{"id":"95954","type":"WheelZoomTool"},{"id":"95955","type":"BoxSelectTool"},{"id":"95956","type":"LassoSelectTool"},{"id":"95957","type":"UndoTool"},{"id":"95958","type":"RedoTool"},{"id":"95959","type":"ResetTool"},{"id":"95960","type":"SaveTool"},{"id":"95961","type":"HoverTool"}]},"id":"95962","type":"Toolbar"},{"attributes":{},"id":"95959","type":"ResetTool"},{"attributes":{},"id":"96009","type":"Selection"},{"attributes":{"source":{"id":"95973","type":"ColumnDataSource"}},"id":"95977","type":"CDSView"},{"attributes":{"children":[[{"id":"95933","subtype":"Figure","type":"Plot"},0,0]]},"id":"96040","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"95992","type":"BoxAnnotation"}},"id":"95955","type":"BoxSelectTool"},{"attributes":{},"id":"95952","type":"PanTool"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96020","type":"Span"},{"attributes":{},"id":"95987","type":"BasicTickFormatter"},{"attributes":{},"id":"95948","type":"BasicTicker"},{"attributes":{},"id":"96032","type":"Selection"},{"attributes":{},"id":"96033","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95980","type":"Line"},{"attributes":{},"id":"96034","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"95993","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"96042","type":"ToolbarBox"},{"id":"96040","type":"GridBox"}]},"id":"96043","type":"Column"},{"attributes":{"data_source":{"id":"95973","type":"ColumnDataSource"},"glyph":{"id":"95974","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95975","type":"Circle"},"selection_glyph":null,"view":{"id":"95977","type":"CDSView"}},"id":"95976","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"95952","type":"PanTool"},{"id":"95953","type":"BoxZoomTool"},{"id":"95954","type":"WheelZoomTool"},{"id":"95955","type":"BoxSelectTool"},{"id":"95956","type":"LassoSelectTool"},{"id":"95957","type":"UndoTool"},{"id":"95958","type":"RedoTool"},{"id":"95959","type":"ResetTool"},{"id":"95960","type":"SaveTool"},{"id":"95961","type":"HoverTool"}]},"id":"96041","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"95978","type":"ColumnDataSource"},"glyph":{"id":"95979","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95980","type":"Line"},"selection_glyph":null,"view":{"id":"95982","type":"CDSView"}},"id":"95981","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"95993","type":"PolyAnnotation"}},"id":"95956","type":"LassoSelectTool"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"95997","type":"Line"},{"attributes":{"callback":null},"id":"95934","type":"DataRange1d"},{"attributes":{"ticker":{"id":"95943","type":"BasicTicker"}},"id":"95946","type":"Grid"},{"attributes":{},"id":"95990","type":"UnionRenderers"},{"attributes":{},"id":"95960","type":"SaveTool"},{"attributes":{"overlay":{"id":"95991","type":"BoxAnnotation"}},"id":"95953","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95992","type":"BoxAnnotation"},{"attributes":{},"id":"95954","type":"WheelZoomTool"},{"attributes":{"source":{"id":"95978","type":"ColumnDataSource"}},"id":"95982","type":"CDSView"},{"attributes":{"source":{"id":"96015","type":"ColumnDataSource"}},"id":"96019","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96034","type":"Selection"},"selection_policy":{"id":"96035","type":"UnionRenderers"}},"id":"96015","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"95961","type":"HoverTool"},{"attributes":{"text":"b"},"id":"96021","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"95974","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95998","type":"Line"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96016","type":"Circle"},{"attributes":{},"id":"95985","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95979","type":"Line"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"95987","type":"BasicTickFormatter"},"ticker":{"id":"95943","type":"BasicTicker"}},"id":"95942","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95991","type":"BoxAnnotation"},{"attributes":{},"id":"96010","type":"UnionRenderers"},{"attributes":{},"id":"95943","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"95975","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"95948","type":"BasicTicker"}},"id":"95951","type":"Grid"}],"root_ids":["96043"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"cc7e8261-84a8-4604-a298-6416e2cd7746","roots":{"96043":"03f1e08f-74a9-4050-9518-592b0753bcb7"}}];
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