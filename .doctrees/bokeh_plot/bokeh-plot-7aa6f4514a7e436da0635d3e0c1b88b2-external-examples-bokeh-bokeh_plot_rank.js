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
      };var element = document.getElementById("369f3209-efc2-4d1f-98e2-1e2d041e8108");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '369f3209-efc2-4d1f-98e2-1e2d041e8108' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"844937bb-934d-4cc7-a647-90ab835298ed":{"roots":{"references":[{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118232","type":"Span"},{"attributes":{"source":{"id":"118227","type":"ColumnDataSource"}},"id":"118231","type":"CDSView"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118248","type":"Span"},{"attributes":{"below":[{"id":"118146","type":"LinearAxis"}],"center":[{"id":"118150","type":"Grid"},{"id":"118155","type":"Grid"},{"id":"118220","type":"Span"},{"id":"118226","type":"Span"},{"id":"118232","type":"Span"},{"id":"118238","type":"Span"}],"left":[{"id":"118151","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118218","type":"GlyphRenderer"},{"id":"118224","type":"GlyphRenderer"},{"id":"118230","type":"GlyphRenderer"},{"id":"118236","type":"GlyphRenderer"}],"title":{"id":"118241","type":"Title"},"toolbar":{"id":"118166","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118138","type":"DataRange1d"},"x_scale":{"id":"118142","type":"LinearScale"},"y_range":{"id":"118140","type":"DataRange1d"},"y_scale":{"id":"118144","type":"LinearScale"}},"id":"118137","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118161","type":"UndoTool"},{"attributes":{},"id":"118142","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118301","type":"PolyAnnotation"},{"attributes":{},"id":"118280","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118250","type":"VBar"},{"attributes":{"callback":null,"overlay":{"id":"118300","type":"BoxAnnotation"}},"id":"118197","type":"BoxSelectTool"},{"attributes":{},"id":"118281","type":"Selection"},{"attributes":{},"id":"118162","type":"RedoTool"},{"attributes":{"tools":[{"id":"118156","type":"PanTool"},{"id":"118157","type":"BoxZoomTool"},{"id":"118158","type":"WheelZoomTool"},{"id":"118159","type":"BoxSelectTool"},{"id":"118160","type":"LassoSelectTool"},{"id":"118161","type":"UndoTool"},{"id":"118162","type":"RedoTool"},{"id":"118163","type":"ResetTool"},{"id":"118164","type":"SaveTool"},{"id":"118165","type":"HoverTool"},{"id":"118194","type":"PanTool"},{"id":"118195","type":"BoxZoomTool"},{"id":"118196","type":"WheelZoomTool"},{"id":"118197","type":"BoxSelectTool"},{"id":"118198","type":"LassoSelectTool"},{"id":"118199","type":"UndoTool"},{"id":"118200","type":"RedoTool"},{"id":"118201","type":"ResetTool"},{"id":"118202","type":"SaveTool"},{"id":"118203","type":"HoverTool"}]},"id":"118304","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"118227","type":"ColumnDataSource"},"glyph":{"id":"118228","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118229","type":"VBar"},"selection_glyph":null,"view":{"id":"118231","type":"CDSView"}},"id":"118230","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"118301","type":"PolyAnnotation"}},"id":"118198","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118283","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"118305","type":"ToolbarBox"},{"id":"118303","type":"GridBox"}]},"id":"118306","type":"Column"},{"attributes":{},"id":"118163","type":"ResetTool"},{"attributes":{"source":{"id":"118261","type":"ColumnDataSource"}},"id":"118265","type":"CDSView"},{"attributes":{"toolbar":{"id":"118304","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118305","type":"ToolbarBox"},{"attributes":{},"id":"118144","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118229","type":"VBar"},{"attributes":{},"id":"118199","type":"UndoTool"},{"attributes":{},"id":"118282","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118226","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118194","type":"PanTool"},{"id":"118195","type":"BoxZoomTool"},{"id":"118196","type":"WheelZoomTool"},{"id":"118197","type":"BoxSelectTool"},{"id":"118198","type":"LassoSelectTool"},{"id":"118199","type":"UndoTool"},{"id":"118200","type":"RedoTool"},{"id":"118201","type":"ResetTool"},{"id":"118202","type":"SaveTool"},{"id":"118203","type":"HoverTool"}]},"id":"118204","type":"Toolbar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118273","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118147","type":"BasicTicker"}},"id":"118146","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118228","type":"VBar"},{"attributes":{},"id":"118164","type":"SaveTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118293","type":"Selection"},"selection_policy":{"id":"118294","type":"UnionRenderers"}},"id":"118249","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118284","type":"BoxAnnotation"},{"attributes":{},"id":"118147","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118279","type":"Selection"},"selection_policy":{"id":"118280","type":"UnionRenderers"}},"id":"118227","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118257","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118266","type":"Span"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118291","type":"Selection"},"selection_policy":{"id":"118292","type":"UnionRenderers"}},"id":"118243","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"118165","type":"HoverTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118295","type":"Selection"},"selection_policy":{"id":"118296","type":"UnionRenderers"}},"id":"118255","type":"ColumnDataSource"},{"attributes":{},"id":"118288","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"118147","type":"BasicTicker"}},"id":"118150","type":"Grid"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118238","type":"Span"},{"attributes":{"data_source":{"id":"118249","type":"ColumnDataSource"},"glyph":{"id":"118250","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118251","type":"VBar"},"selection_glyph":null,"view":{"id":"118253","type":"CDSView"}},"id":"118252","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"118269","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118285","type":"PolyAnnotation"},{"attributes":{"source":{"id":"118221","type":"ColumnDataSource"}},"id":"118225","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118251","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118272","type":"BasicTickFormatter"},"ticker":{"id":"118239","type":"FixedTicker"}},"id":"118151","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118156","type":"PanTool"},{"id":"118157","type":"BoxZoomTool"},{"id":"118158","type":"WheelZoomTool"},{"id":"118159","type":"BoxSelectTool"},{"id":"118160","type":"LassoSelectTool"},{"id":"118161","type":"UndoTool"},{"id":"118162","type":"RedoTool"},{"id":"118163","type":"ResetTool"},{"id":"118164","type":"SaveTool"},{"id":"118165","type":"HoverTool"}]},"id":"118166","type":"Toolbar"},{"attributes":{"source":{"id":"118215","type":"ColumnDataSource"}},"id":"118219","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118256","type":"VBar"},{"attributes":{},"id":"118291","type":"Selection"},{"attributes":{},"id":"118185","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"118284","type":"BoxAnnotation"}},"id":"118159","type":"BoxSelectTool"},{"attributes":{"ticker":{"id":"118185","type":"BasicTicker"}},"id":"118188","type":"Grid"},{"attributes":{"data_source":{"id":"118221","type":"ColumnDataSource"},"glyph":{"id":"118222","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118223","type":"VBar"},"selection_glyph":null,"view":{"id":"118225","type":"CDSView"}},"id":"118224","type":"GlyphRenderer"},{"attributes":{},"id":"118152","type":"BasicTicker"},{"attributes":{},"id":"118289","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"118233","type":"ColumnDataSource"}},"id":"118237","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"118152","type":"BasicTicker"}},"id":"118155","type":"Grid"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118254","type":"Span"},{"attributes":{},"id":"118190","type":"BasicTicker"},{"attributes":{},"id":"118296","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118223","type":"VBar"},{"attributes":{"source":{"id":"118249","type":"ColumnDataSource"}},"id":"118253","type":"CDSView"},{"attributes":{},"id":"118272","type":"BasicTickFormatter"},{"attributes":{},"id":"118292","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118288","type":"BasicTickFormatter"},"ticker":{"id":"118267","type":"FixedTicker"}},"id":"118189","type":"LinearAxis"},{"attributes":{"source":{"id":"118243","type":"ColumnDataSource"}},"id":"118247","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"118267","type":"FixedTicker"},{"attributes":{},"id":"118182","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118222","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118297","type":"Selection"},"selection_policy":{"id":"118298","type":"UnionRenderers"}},"id":"118261","type":"ColumnDataSource"},{"attributes":{},"id":"118293","type":"Selection"},{"attributes":{"overlay":{"id":"118299","type":"BoxAnnotation"}},"id":"118195","type":"BoxZoomTool"},{"attributes":{},"id":"118201","type":"ResetTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118234","type":"VBar"},{"attributes":{"callback":null},"id":"118138","type":"DataRange1d"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118220","type":"Span"},{"attributes":{},"id":"118180","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118281","type":"Selection"},"selection_policy":{"id":"118282","type":"UnionRenderers"}},"id":"118233","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"118255","type":"ColumnDataSource"},"glyph":{"id":"118256","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118257","type":"VBar"},"selection_glyph":null,"view":{"id":"118259","type":"CDSView"}},"id":"118258","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118289","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118185","type":"BasicTicker"}},"id":"118184","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118277","type":"Selection"},"selection_policy":{"id":"118278","type":"UnionRenderers"}},"id":"118221","type":"ColumnDataSource"},{"attributes":{},"id":"118294","type":"UnionRenderers"},{"attributes":{},"id":"118156","type":"PanTool"},{"attributes":{"callback":null},"id":"118203","type":"HoverTool"},{"attributes":{"callback":null},"id":"118140","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"118190","type":"BasicTicker"}},"id":"118193","type":"Grid"},{"attributes":{"data_source":{"id":"118261","type":"ColumnDataSource"},"glyph":{"id":"118262","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118263","type":"VBar"},"selection_glyph":null,"view":{"id":"118265","type":"CDSView"}},"id":"118264","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118245","type":"VBar"},{"attributes":{},"id":"118275","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118217","type":"VBar"},{"attributes":{},"id":"118273","type":"BasicTickFormatter"},{"attributes":{},"id":"118295","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118235","type":"VBar"},{"attributes":{},"id":"118202","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118216","type":"VBar"},{"attributes":{},"id":"118276","type":"UnionRenderers"},{"attributes":{},"id":"118297","type":"Selection"},{"attributes":{},"id":"118200","type":"RedoTool"},{"attributes":{"data_source":{"id":"118243","type":"ColumnDataSource"},"glyph":{"id":"118244","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118245","type":"VBar"},"selection_glyph":null,"view":{"id":"118247","type":"CDSView"}},"id":"118246","type":"GlyphRenderer"},{"attributes":{},"id":"118278","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118300","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118263","type":"VBar"},{"attributes":{},"id":"118279","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"118285","type":"PolyAnnotation"}},"id":"118160","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"118215","type":"ColumnDataSource"},"glyph":{"id":"118216","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118217","type":"VBar"},"selection_glyph":null,"view":{"id":"118219","type":"CDSView"}},"id":"118218","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"118233","type":"ColumnDataSource"},"glyph":{"id":"118234","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118235","type":"VBar"},"selection_glyph":null,"view":{"id":"118237","type":"CDSView"}},"id":"118236","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118275","type":"Selection"},"selection_policy":{"id":"118276","type":"UnionRenderers"}},"id":"118215","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118299","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118262","type":"VBar"},{"attributes":{"overlay":{"id":"118283","type":"BoxAnnotation"}},"id":"118157","type":"BoxZoomTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"118239","type":"FixedTicker"},{"attributes":{"source":{"id":"118255","type":"ColumnDataSource"}},"id":"118259","type":"CDSView"},{"attributes":{},"id":"118277","type":"Selection"},{"attributes":{"children":[[{"id":"118137","subtype":"Figure","type":"Plot"},0,0],[{"id":"118177","subtype":"Figure","type":"Plot"},0,1]]},"id":"118303","type":"GridBox"},{"attributes":{},"id":"118298","type":"UnionRenderers"},{"attributes":{"below":[{"id":"118184","type":"LinearAxis"}],"center":[{"id":"118188","type":"Grid"},{"id":"118193","type":"Grid"},{"id":"118248","type":"Span"},{"id":"118254","type":"Span"},{"id":"118260","type":"Span"},{"id":"118266","type":"Span"}],"left":[{"id":"118189","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118246","type":"GlyphRenderer"},{"id":"118252","type":"GlyphRenderer"},{"id":"118258","type":"GlyphRenderer"},{"id":"118264","type":"GlyphRenderer"}],"title":{"id":"118269","type":"Title"},"toolbar":{"id":"118204","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118138","type":"DataRange1d"},"x_scale":{"id":"118180","type":"LinearScale"},"y_range":{"id":"118140","type":"DataRange1d"},"y_scale":{"id":"118182","type":"LinearScale"}},"id":"118177","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118158","type":"WheelZoomTool"},{"attributes":{},"id":"118196","type":"WheelZoomTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118260","type":"Span"},{"attributes":{},"id":"118194","type":"PanTool"},{"attributes":{"text":"tau"},"id":"118241","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118244","type":"VBar"}],"root_ids":["118306"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"844937bb-934d-4cc7-a647-90ab835298ed","roots":{"118306":"369f3209-efc2-4d1f-98e2-1e2d041e8108"}}];
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