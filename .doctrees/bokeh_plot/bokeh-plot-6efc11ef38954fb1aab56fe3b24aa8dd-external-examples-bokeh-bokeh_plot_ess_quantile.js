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
      };var element = document.getElementById("943f8d58-6360-4fdc-b58b-f7ecf736749a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '943f8d58-6360-4fdc-b58b-f7ecf736749a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ce891c25-a3ad-4afa-a36a-e8e17e6745aa":{"roots":{"references":[{"attributes":{},"id":"96271","type":"BasicTicker"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96301","type":"Span"},{"attributes":{"dimension":1,"ticker":{"id":"96271","type":"BasicTicker"}},"id":"96274","type":"Grid"},{"attributes":{"text":"sigma_y"},"id":"96302","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96298","type":"Circle"},{"attributes":{},"id":"96305","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96297","type":"Circle"},{"attributes":{},"id":"96307","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96309","type":"Selection"},"selection_policy":{"id":"96310","type":"UnionRenderers"}},"id":"96296","type":"ColumnDataSource"},{"attributes":{},"id":"96309","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96275","type":"PanTool"},{"id":"96276","type":"BoxZoomTool"},{"id":"96277","type":"WheelZoomTool"},{"id":"96278","type":"BoxSelectTool"},{"id":"96279","type":"LassoSelectTool"},{"id":"96280","type":"UndoTool"},{"id":"96281","type":"RedoTool"},{"id":"96282","type":"ResetTool"},{"id":"96283","type":"SaveTool"},{"id":"96284","type":"HoverTool"}]},"id":"96285","type":"Toolbar"},{"attributes":{},"id":"96275","type":"PanTool"},{"attributes":{},"id":"96310","type":"UnionRenderers"},{"attributes":{"below":[{"id":"96265","type":"LinearAxis"}],"center":[{"id":"96269","type":"Grid"},{"id":"96274","type":"Grid"}],"left":[{"id":"96270","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96299","type":"GlyphRenderer"},{"id":"96301","type":"Span"}],"title":{"id":"96302","type":"Title"},"toolbar":{"id":"96285","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96257","type":"DataRange1d"},"x_scale":{"id":"96261","type":"LinearScale"},"y_range":{"id":"96259","type":"DataRange1d"},"y_scale":{"id":"96263","type":"LinearScale"}},"id":"96256","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"96311","type":"BoxAnnotation"}},"id":"96276","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96311","type":"BoxAnnotation"},{"attributes":{},"id":"96277","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96312","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"96256","subtype":"Figure","type":"Plot"},0,0]]},"id":"96315","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"96312","type":"BoxAnnotation"}},"id":"96278","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96313","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"96313","type":"PolyAnnotation"}},"id":"96279","type":"LassoSelectTool"},{"attributes":{"tools":[{"id":"96275","type":"PanTool"},{"id":"96276","type":"BoxZoomTool"},{"id":"96277","type":"WheelZoomTool"},{"id":"96278","type":"BoxSelectTool"},{"id":"96279","type":"LassoSelectTool"},{"id":"96280","type":"UndoTool"},{"id":"96281","type":"RedoTool"},{"id":"96282","type":"ResetTool"},{"id":"96283","type":"SaveTool"},{"id":"96284","type":"HoverTool"}]},"id":"96316","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"96257","type":"DataRange1d"},{"attributes":{},"id":"96280","type":"UndoTool"},{"attributes":{"toolbar":{"id":"96316","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96317","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"96259","type":"DataRange1d"},{"attributes":{},"id":"96281","type":"RedoTool"},{"attributes":{"children":[{"id":"96317","type":"ToolbarBox"},{"id":"96315","type":"GridBox"}]},"id":"96318","type":"Column"},{"attributes":{},"id":"96261","type":"LinearScale"},{"attributes":{},"id":"96282","type":"ResetTool"},{"attributes":{},"id":"96263","type":"LinearScale"},{"attributes":{},"id":"96283","type":"SaveTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"96307","type":"BasicTickFormatter"},"ticker":{"id":"96266","type":"BasicTicker"}},"id":"96265","type":"LinearAxis"},{"attributes":{"callback":null},"id":"96284","type":"HoverTool"},{"attributes":{},"id":"96266","type":"BasicTicker"},{"attributes":{"ticker":{"id":"96266","type":"BasicTicker"}},"id":"96269","type":"Grid"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"96305","type":"BasicTickFormatter"},"ticker":{"id":"96271","type":"BasicTicker"}},"id":"96270","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96296","type":"ColumnDataSource"},"glyph":{"id":"96297","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96298","type":"Circle"},"selection_glyph":null,"view":{"id":"96300","type":"CDSView"}},"id":"96299","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96296","type":"ColumnDataSource"}},"id":"96300","type":"CDSView"}],"root_ids":["96318"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"ce891c25-a3ad-4afa-a36a-e8e17e6745aa","roots":{"96318":"943f8d58-6360-4fdc-b58b-f7ecf736749a"}}];
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