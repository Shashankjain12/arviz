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
      };var element = document.getElementById("685ea201-bbdb-4f71-9c72-bbd87eb56e56");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '685ea201-bbdb-4f71-9c72-bbd87eb56e56' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"556a2d32-077a-457c-9b7e-844e3a22dd85":{"roots":{"references":[{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"113907","type":"DataRange1d"},{"attributes":{},"id":"113909","type":"LinearScale"},{"attributes":{"children":[[{"id":"113864","subtype":"Figure","type":"Plot"},0,0],[{"id":"113904","subtype":"Figure","type":"Plot"},0,1]]},"id":"113998","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"113879","type":"BasicTicker"}},"id":"113882","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"113952","type":"Dash"},{"attributes":{},"id":"113930","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"113995","type":"BoxAnnotation"}},"id":"113926","type":"BoxSelectTool"},{"attributes":{},"id":"113879","type":"BasicTicker"},{"attributes":{"callback":null},"id":"113932","type":"HoverTool"},{"attributes":{},"id":"113874","type":"BasicTicker"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"113973","type":"BasicTickFormatter"},"ticker":{"id":"113879","type":"BasicTicker"}},"id":"113878","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"113994","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"113874","type":"BasicTicker"}},"id":"113877","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"113996","type":"PolyAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"113975","type":"BasicTickFormatter"},"ticker":{"id":"113874","type":"BasicTicker"}},"id":"113873","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"113923","type":"PanTool"},{"id":"113924","type":"BoxZoomTool"},{"id":"113925","type":"WheelZoomTool"},{"id":"113926","type":"BoxSelectTool"},{"id":"113927","type":"LassoSelectTool"},{"id":"113928","type":"UndoTool"},{"id":"113929","type":"RedoTool"},{"id":"113930","type":"ResetTool"},{"id":"113931","type":"SaveTool"},{"id":"113932","type":"HoverTool"}]},"id":"113933","type":"Toolbar"},{"attributes":{"data_source":{"id":"113953","type":"ColumnDataSource"},"glyph":{"id":"113952","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"113955","type":"CDSView"}},"id":"113954","type":"GlyphRenderer"},{"attributes":{},"id":"113871","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"113995","type":"BoxAnnotation"},{"attributes":{},"id":"113883","type":"PanTool"},{"attributes":{"callback":null},"id":"113905","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"113979","type":"Selection"},"selection_policy":{"id":"113980","type":"UnionRenderers"}},"id":"113953","type":"ColumnDataSource"},{"attributes":{},"id":"113869","type":"LinearScale"},{"attributes":{"source":{"id":"113953","type":"ColumnDataSource"}},"id":"113955","type":"CDSView"},{"attributes":{"callback":null},"id":"113865","type":"DataRange1d"},{"attributes":{"text":"tau"},"id":"113956","type":"Title"},{"attributes":{},"id":"113993","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"113950","type":"Span"},{"attributes":{"source":{"id":"113944","type":"ColumnDataSource"}},"id":"113948","type":"CDSView"},{"attributes":{},"id":"113992","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"113990","type":"Selection"},"selection_policy":{"id":"113991","type":"UnionRenderers"}},"id":"113958","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"113959","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"113996","type":"PolyAnnotation"}},"id":"113927","type":"LassoSelectTool"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"113867","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"113960","type":"Circle"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"113951","type":"Span"},{"attributes":{},"id":"113925","type":"WheelZoomTool"},{"attributes":{},"id":"113890","type":"ResetTool"},{"attributes":{"data_source":{"id":"113958","type":"ColumnDataSource"},"glyph":{"id":"113959","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"113960","type":"Circle"},"selection_glyph":null,"view":{"id":"113962","type":"CDSView"}},"id":"113961","type":"GlyphRenderer"},{"attributes":{},"id":"113923","type":"PanTool"},{"attributes":{},"id":"113885","type":"WheelZoomTool"},{"attributes":{"source":{"id":"113958","type":"ColumnDataSource"}},"id":"113962","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"113982","type":"BoxAnnotation"}},"id":"113886","type":"BoxSelectTool"},{"attributes":{},"id":"113914","type":"BasicTicker"},{"attributes":{},"id":"113990","type":"Selection"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"113963","type":"Span"},{"attributes":{},"id":"113991","type":"UnionRenderers"},{"attributes":{},"id":"113931","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"113945","type":"Circle"},{"attributes":{"callback":null},"id":"113892","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"113964","type":"Span"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"113977","type":"Selection"},"selection_policy":{"id":"113978","type":"UnionRenderers"}},"id":"113944","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"113965","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"113983","type":"PolyAnnotation"},{"attributes":{},"id":"113891","type":"SaveTool"},{"attributes":{"tools":[{"id":"113883","type":"PanTool"},{"id":"113884","type":"BoxZoomTool"},{"id":"113885","type":"WheelZoomTool"},{"id":"113886","type":"BoxSelectTool"},{"id":"113887","type":"LassoSelectTool"},{"id":"113888","type":"UndoTool"},{"id":"113889","type":"RedoTool"},{"id":"113890","type":"ResetTool"},{"id":"113891","type":"SaveTool"},{"id":"113892","type":"HoverTool"},{"id":"113923","type":"PanTool"},{"id":"113924","type":"BoxZoomTool"},{"id":"113925","type":"WheelZoomTool"},{"id":"113926","type":"BoxSelectTool"},{"id":"113927","type":"LassoSelectTool"},{"id":"113928","type":"UndoTool"},{"id":"113929","type":"RedoTool"},{"id":"113930","type":"ResetTool"},{"id":"113931","type":"SaveTool"},{"id":"113932","type":"HoverTool"}]},"id":"113999","type":"ProxyToolbar"},{"attributes":{},"id":"113889","type":"RedoTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"113966","type":"Dash"},{"attributes":{"ticker":{"id":"113914","type":"BasicTicker"}},"id":"113917","type":"Grid"},{"attributes":{},"id":"113928","type":"UndoTool"},{"attributes":{},"id":"113988","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"113992","type":"Selection"},"selection_policy":{"id":"113993","type":"UnionRenderers"}},"id":"113967","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"113983","type":"PolyAnnotation"}},"id":"113887","type":"LassoSelectTool"},{"attributes":{},"id":"113986","type":"BasicTickFormatter"},{"attributes":{},"id":"113919","type":"BasicTicker"},{"attributes":{},"id":"113888","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"113946","type":"Circle"},{"attributes":{"data_source":{"id":"113967","type":"ColumnDataSource"},"glyph":{"id":"113966","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"113969","type":"CDSView"}},"id":"113968","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"113981","type":"BoxAnnotation"},{"attributes":{"source":{"id":"113967","type":"ColumnDataSource"}},"id":"113969","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"113986","type":"BasicTickFormatter"},"ticker":{"id":"113919","type":"BasicTicker"}},"id":"113918","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"113982","type":"BoxAnnotation"},{"attributes":{},"id":"113979","type":"Selection"},{"attributes":{"text":"mu"},"id":"113970","type":"Title"},{"attributes":{"data_source":{"id":"113944","type":"ColumnDataSource"},"glyph":{"id":"113945","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"113946","type":"Circle"},"selection_glyph":null,"view":{"id":"113948","type":"CDSView"}},"id":"113947","type":"GlyphRenderer"},{"attributes":{},"id":"113980","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"113883","type":"PanTool"},{"id":"113884","type":"BoxZoomTool"},{"id":"113885","type":"WheelZoomTool"},{"id":"113886","type":"BoxSelectTool"},{"id":"113887","type":"LassoSelectTool"},{"id":"113888","type":"UndoTool"},{"id":"113889","type":"RedoTool"},{"id":"113890","type":"ResetTool"},{"id":"113891","type":"SaveTool"},{"id":"113892","type":"HoverTool"}]},"id":"113893","type":"Toolbar"},{"attributes":{},"id":"113973","type":"BasicTickFormatter"},{"attributes":{},"id":"113977","type":"Selection"},{"attributes":{},"id":"113975","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"113999","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114000","type":"ToolbarBox"},{"attributes":{},"id":"113978","type":"UnionRenderers"},{"attributes":{},"id":"113911","type":"LinearScale"},{"attributes":{},"id":"113929","type":"RedoTool"},{"attributes":{"children":[{"id":"114000","type":"ToolbarBox"},{"id":"113998","type":"GridBox"}]},"id":"114001","type":"Column"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"113988","type":"BasicTickFormatter"},"ticker":{"id":"113914","type":"BasicTicker"}},"id":"113913","type":"LinearAxis"},{"attributes":{"below":[{"id":"113913","type":"LinearAxis"}],"center":[{"id":"113917","type":"Grid"},{"id":"113922","type":"Grid"}],"left":[{"id":"113918","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"113961","type":"GlyphRenderer"},{"id":"113963","type":"Span"},{"id":"113964","type":"Span"},{"id":"113965","type":"Span"},{"id":"113968","type":"GlyphRenderer"}],"title":{"id":"113970","type":"Title"},"toolbar":{"id":"113933","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"113905","type":"DataRange1d"},"x_scale":{"id":"113909","type":"LinearScale"},"y_range":{"id":"113907","type":"DataRange1d"},"y_scale":{"id":"113911","type":"LinearScale"}},"id":"113904","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"113919","type":"BasicTicker"}},"id":"113922","type":"Grid"},{"attributes":{"below":[{"id":"113873","type":"LinearAxis"}],"center":[{"id":"113877","type":"Grid"},{"id":"113882","type":"Grid"}],"left":[{"id":"113878","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"113947","type":"GlyphRenderer"},{"id":"113949","type":"Span"},{"id":"113950","type":"Span"},{"id":"113951","type":"Span"},{"id":"113954","type":"GlyphRenderer"}],"title":{"id":"113956","type":"Title"},"toolbar":{"id":"113893","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"113865","type":"DataRange1d"},"x_scale":{"id":"113869","type":"LinearScale"},"y_range":{"id":"113867","type":"DataRange1d"},"y_scale":{"id":"113871","type":"LinearScale"}},"id":"113864","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"113994","type":"BoxAnnotation"}},"id":"113924","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"113949","type":"Span"},{"attributes":{"overlay":{"id":"113981","type":"BoxAnnotation"}},"id":"113884","type":"BoxZoomTool"}],"root_ids":["114001"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"556a2d32-077a-457c-9b7e-844e3a22dd85","roots":{"114001":"685ea201-bbdb-4f71-9c72-bbd87eb56e56"}}];
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