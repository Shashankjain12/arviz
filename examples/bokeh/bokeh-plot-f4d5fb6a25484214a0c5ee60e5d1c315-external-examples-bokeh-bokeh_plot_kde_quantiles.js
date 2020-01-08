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
      };var element = document.getElementById("1432dd14-2bc5-4dc7-b362-777be1fb1170");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1432dd14-2bc5-4dc7-b362-777be1fb1170' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"74431d1a-674b-4f94-ad9d-c5269fb80c15":{"roots":{"references":[{"attributes":{},"id":"98168","type":"Selection"},{"attributes":{},"id":"98160","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"98151","type":"ColumnDataSource"},"glyph":{"id":"98152","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98153","type":"Patch"},"selection_glyph":null,"view":{"id":"98155","type":"CDSView"}},"id":"98154","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98115","type":"PanTool"},{"id":"98116","type":"BoxZoomTool"},{"id":"98117","type":"WheelZoomTool"},{"id":"98118","type":"BoxSelectTool"},{"id":"98119","type":"LassoSelectTool"},{"id":"98120","type":"UndoTool"},{"id":"98121","type":"RedoTool"},{"id":"98122","type":"ResetTool"},{"id":"98123","type":"SaveTool"},{"id":"98124","type":"HoverTool"}]},"id":"98125","type":"Toolbar"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98153","type":"Patch"},{"attributes":{},"id":"98162","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98171","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"NV0WKIdUuD/W5N9yNlS5P3dsqb3lU7o/GPRyCJVTuz+5ezxTRFO8P1oDBp7zUr0//IrP6KJSvj+dEpkzUlK/Px9NMb8AKcA/8BCWZNiowD/A1PoJsCjBP5CYX6+HqME/YVzEVF8owj8yICn6NqjCPwLkjZ8OKMM/06fyROanwz+ja1fqvSfEP3QvvI+Vp8Q/RPMgNW0nxT8Vt4XaRKfFP+Z66n8cJ8Y/tj5PJfSmxj+GArTKyybHP1fGGHCjpsc/KIp9FXsmyD/4TeK6UqbIP8gRR2AqJsk/mtWrBQKmyT9qmRCr2SXKPzpddVCxpco/CyHa9Yglyz/c5D6bYKXLP6yoo0A4Jcw/fGwI5g+lzD9OMG2L5yTNPx700TC/pM0/7rc21pYkzj++e5t7bqTOP5A/ACFGJM8/YANlxh2kzz+Y4+S1+hHQP4BFl4jmUdA/aadJW9KR0D9RCfwtvtHQPzlrrgCqEdE/Is1g05VR0T8KLxOmgZHRP/KQxXht0dE/2vJ3S1kR0j/DVCoeRVHSP6u23PAwkdI/kxiPwxzR0j97ekGWCBHTP2Tc82j0UNM/TD6mO+CQ0z80oFgOzNDTPx0CC+G3ENQ/BWS9s6NQ1D/txW+Gj5DUP9UnIll70NQ/vonUK2cQ1T+m64b+UlDVP6brhv5SUNU/puuG/lJQ1T++idQrZxDVP9UnIll70NQ/7cVvho+Q1D8FZL2zo1DUPx0CC+G3ENQ/NKBYDszQ0z9MPqY74JDTP2Tc82j0UNM/e3pBlggR0z+TGI/DHNHSP6u23PAwkdI/w1QqHkVR0j/a8ndLWRHSP/KQxXht0dE/Ci8TpoGR0T8izWDTlVHRPzlrrgCqEdE/UQn8Lb7R0D9pp0lb0pHQP4BFl4jmUdA/mOPktfoR0D9gA2XGHaTPP5A/ACFGJM8/vnube26kzj/utzbWliTOPx700TC/pM0/TjBti+ckzT98bAjmD6XMP6yoo0A4Jcw/3OQ+m2Clyz8LIdr1iCXLPzpddVCxpco/apkQq9klyj+a1asFAqbJP8gRR2AqJsk/+E3iulKmyD8oin0VeybIP1fGGHCjpsc/hgK0yssmxz+2Pk8l9KbGP+Z66n8cJ8Y/FbeF2kSnxT9E8yA1bSfFP3QvvI+Vp8Q/o2tX6r0nxD/Tp/JE5qfDPwLkjZ8OKMM/MiAp+jaowj9hXMRUXyjCP5CYX6+HqME/wNT6CbAowT/wEJZk2KjAPx9NMb8AKcA/nRKZM1JSvz/8is/oolK+P1oDBp7zUr0/uXs8U0RTvD8Y9HIIlVO7P3dsqb3lU7o/1uTfcjZUuT81XRYoh1S4PzVdFiiHVLg/","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHXV279cif8/ddXbv1yJ/z8VprHA6x7/P3mu0V36sP4/4LyxjkhC/j+nc8C0LMz9PysMhDdYUf0/sEwMkH3N/D8DBb+25UH8P9y8Xt25q/s/dDFUUP4O+z+0EuGI9Gr6P5j37VTmv/k/qlqIp1oQ+T8oB9WbqVv4P+smlQepqPc/Hex3lSv09j8Qa+aqxEb2P6ZLeeWdofU/oR9qrVMD9T8UPABckm70P5aT9SFb4vM/2omNbLVg8z+t87JJ3+vyPzSgjnwCf/I/vFBNifUZ8j/BKGdYr7zxPxjI8VTjZfE/eZLdie8O8T8ulhqxArfwP5qzRC0iX/A/qeDjylsE8D9mMKnh2kzvPyb5DA1Rge4/BJ5Kzmms7T9miCFTZsjsP+IpMbsE3us/KM/vVBro6j+ONu6krurpPwzrGiGS5ug/vnkInSni5z/ue7vAL+DmP3QfWXoH5OU/5lhnH1jr5D+wQ7AGTvzjP56LUNTUFuM/GSWQ+5o94j8r4SSaoG7hP7j4O70gq+A/2CpWCa3w3z+dKc+CS6bePx/Ldel0e90/oGIuc4ll3D9OdCPh/2nbP1J9R+YMjNo/mUbPrKnB2T9VZ3GeGhvZP+LbPtIXj9g/03OPkzsf2D/6ey1HgsvXP2qlMWd5h9c/RpxkO1Vj1z9e3Sb3PFTXPwAAAAAAAAAA","dtype":"float64","shape":[126]}},"selected":{"id":"98162","type":"Selection"},"selection_policy":{"id":"98163","type":"UnionRenderers"}},"id":"98136","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98152","type":"Patch"},{"attributes":{},"id":"98163","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"98171","type":"BoxAnnotation"}},"id":"98118","type":"BoxSelectTool"},{"attributes":{},"id":"98164","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98170","type":"BoxAnnotation"},{"attributes":{},"id":"98165","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"R/psof6F4T87K8aK9KXhPy9cH3TqxeE/I414XeDl4T8XvtFG1gXiPwvvKjDMJeI//x+EGcJF4j/0UN0CuGXiP+iBNuytheI/3LKP1aOl4j/Q4+i+mcXiP8QUQqiP5eI/uEWbkYUF4z+tdvR6eyXjP6GnTWRxReM/ldimTWdl4z+JCQA3XYXjP306WSBTpeM/cWuyCUnF4z9lnAvzPuXjP1rNZNw0BeQ/Tv69xSol5D9CLxevIEXkPzZgcJgWZeQ/KpHJgQyF5D8ewiJrAqXkPxLze1T4xOQ/ByTVPe7k5D/7VC4n5ATlP++FhxDaJOU/47bg+c9E5T/X5znjxWTlP8sYk8y7hOU/v0nstbGk5T+0ekWfp8TlP6irnoid5OU/nNz3cZME5j+QDVFbiSTmP4Q+qkR/ROY/eG8DLnVk5j9soFwXa4TmP2DRtQBhpOY/VQIP6lbE5j9JM2jTTOTmPz1kwbxCBOc/MZUapjgk5z8lxnOPLkTnPxn3zHgkZOc/DSgmYhqE5z8CWX9LEKTnP/aJ2DQGxOc/6roxHvzj5z/e64oH8gPoP9Ic5PDnI+g/xk092t1D6D+6fpbD02PoP6+v76zJg+g/o+BIlr+j6D+XEaJ/tcPoP4tC+2ir4+g/f3NUUqED6T9zpK07lyPpP2fVBiWNQ+k/WwZgDoNj6T9QN7n3eIPpP0RoEuFuo+k/OJlrymTD6T8sysSzWuPpPyD7HZ1QA+o/FCx3hkYj6j8IXdBvPEPqP/2NKVkyY+o/8b6CQiiD6j/l79srHqPqP9kgNRUUw+o/zVGO/gnj6j/Bgufn/wLrP7WzQNH1Ius/quSZuutC6z+eFfOj4WLrP5JGTI3Xgus/hnelds2i6z96qP5fw8LrP27ZV0m54us/btlXSbni6z9u2VdJueLrP3qo/l/Dwus/hnelds2i6z+SRkyN14LrP54V86PhYus/quSZuutC6z+1s0DR9SLrP8GC5+f/Aus/zVGO/gnj6j/ZIDUVFMPqP+Xv2yseo+o/8b6CQiiD6j/9jSlZMmPqPwhd0G88Q+o/FCx3hkYj6j8g+x2dUAPqPyzKxLNa4+k/OJlrymTD6T9EaBLhbqPpP1A3ufd4g+k/WwZgDoNj6T9n1QYljUPpP3OkrTuXI+k/f3NUUqED6T+LQvtoq+PoP5cRon+1w+g/o+BIlr+j6D+vr++syYPoP7p+lsPTY+g/xk092t1D6D/SHOTw5yPoP97rigfyA+g/6roxHvzj5z/2idg0BsTnPwJZf0sQpOc/DSgmYhqE5z8Z98x4JGTnPyXGc48uROc/MZUapjgk5z89ZMG8QgTnP0kzaNNM5OY/VQIP6lbE5j9g0bUAYaTmP2ygXBdrhOY/eG8DLnVk5j+EPqpEf0TmP5ANUVuJJOY/nNz3cZME5j+oq56IneTlP7R6RZ+nxOU/v0nstbGk5T/LGJPMu4TlP9fnOePFZOU/47bg+c9E5T/vhYcQ2iTlP/tULifkBOU/ByTVPe7k5D8S83tU+MTkPx7CImsCpeQ/KpHJgQyF5D82YHCYFmXkP0IvF68gReQ/Tv69xSol5D9azWTcNAXkP2WcC/M+5eM/cWuyCUnF4z99OlkgU6XjP4kJADddheM/ldimTWdl4z+hp01kcUXjP6129Hp7JeM/uEWbkYUF4z/EFEKoj+XiP9Dj6L6ZxeI/3LKP1aOl4j/ogTbsrYXiP/RQ3QK4ZeI//x+EGcJF4j8L7yowzCXiPxe+0UbWBeI/I414XeDl4T8vXB906sXhPzsrxor0peE/R/psof6F4T9H+myh/oXhPw==","dtype":"float64","shape":[170]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+OpsoTiGvj/46myhOIa+P7HWnxeRkr4//DqZFRTKvj/fJrMOeQi/P1LuaBaXar8/Vq1WjBXXvz9ArRFSvy7AP+sxSDVRkMA/fQeW8bwOwT+R4bnskJzBP8Pe+OYGPsI/So216jn2wj8tdveDd8fDP4i8YQXKtMQ//ECtGBqzxT8ozbppcdTGP89ALPYaB8g/r7LXCOtayT+hilCq6LXKPwMMUsMkIMw/33k/vzObzT97gnvJghzPP7b12SwuVNA/VJghX+If0T+SZv6F0+/RP61Hq3fPwtI/9ijiFTOl0z8XiA+Z1YXUP1PnV+UnbNU/wHeFA4Zd1j8g/tR7rV3XP+up02ktcNg/k+6dALqL2T9jl+4IgbbaP7BYxAYc8ds/EO5sJQE73T9CvOEhO4/eP0oeJ8vj8d8/sxPMJH+44D971lfh7n7hP+iU3B8wR+I/5HC4l9UV4z9HZnh67ujjP8PGRz4UweQ/Kq2gqF6d5T++Frvce33mP1LBLnd9ZOc/qIT48clM6D+B9EZvGzrpPy1m/mm9Keo/hUbCF/Mf6z/+8O4bORXsP9LSjnEaC+0/bcrWNVIF7j8uDMJdmvvuP1nsgr8+7O8/Xd+tXIZr8D9lLrgKGN/wP7PIJff4U/E/hm1j3eHG8T81kz7PzTfyP14CVHfyqvI/4kaYXjAg8z8WIkyzQprzP8e0jb+sGfQ/s99TbuOg9D82t7b5Cy71P0+wj8HMx/U/g0En1Vpu9j95M8duXB73P4k68sSm2Pc/ybK61mye+D/zFci/XWv5P6KIJ7E7Pvo/xgLTSOsX+z8yBMvM6fX7P+mSIfeo0vw/lGuiVJ2x/T/fuTlE84z+P39dwBZuYv8/69DeTJMZAEAf4kgb6H4AQHCa/6Zz4ABAcuf+ftc9AUAAAAAAAAAAAA==","dtype":"float64","shape":[170]}},"selected":{"id":"98168","type":"Selection"},"selection_policy":{"id":"98169","type":"UnionRenderers"}},"id":"98151","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"jk050T6Q1T92r+ujKtDVP18RnnYWENY/R3NQSQJQ1j8v1QIc7o/WPxc3te7Zz9Y/AJlnwcUP1z/o+hmUsU/XP9BczGadj9c/uL5+OYnP1z+hIDEMdQ/YP4mC495gT9g/ceSVsUyP2D9aRkiEOM/YP0Ko+lYkD9k/KgqtKRBP2T8SbF/8+47ZP/vNEc/nztk/4y/EodMO2j/LkXZ0v07aP7PzKEerjto/nFXbGZfO2j+Et43sgg7bP2wZQL9uTts/VXvykVqO2z893aRkRs7bPyU/VzcyDtw/DaEJCh5O3D8NoQkKHk7cPw2hCQoeTtw/JT9XNzIO3D893aRkRs7bP1V78pFajts/bBlAv25O2z+Et43sgg7bP5xV2xmXzto/s/MoR6uO2j/LkXZ0v07aP+MvxKHTDto/+80Rz+fO2T8SbF/8+47ZPyoKrSkQT9k/Qqj6ViQP2T9aRkiEOM/YP3HklbFMj9g/iYLj3mBP2D+hIDEMdQ/YP7i+fjmJz9c/0FzMZp2P1z/o+hmUsU/XPwCZZ8HFD9c/Fze17tnP1j8v1QIc7o/WP0dzUEkCUNY/XxGedhYQ1j92r+ujKtDVP45NOdE+kNU/jk050T6Q1T8=","dtype":"float64","shape":[58]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADamc3K8H8DQNqZzcrwfwNAXXzCvll2A0DF+W5rFnADQKqw5ccabQNAiw6oKkRsA0D45CFFvGsDQLOh7Up5awNAwhP6k7ppA0DHJ7+OUGYDQIcuulnwXgNApSidC0hRA0AK9gbzMT8DQFZTS2tyJgNAIuFjgvoGA0Dn/swabd8CQI8IvEyyswJAyse76wCBAkCAM1wuRUoCQPP3EI+yEAJAIkjdY47TAUBVqP8lWZUBQDaLJqbQVgFAPxXm588YAUAQIhtPgtsAQGQKQk7unwBAVR+LEHNlAEBMiFhxSS4AQDpkJZD28v8/AAAAAAAAAAA=","dtype":"float64","shape":[58]}},"selected":{"id":"98164","type":"Selection"},"selection_policy":{"id":"98165","type":"UnionRenderers"}},"id":"98141","type":"ColumnDataSource"},{"attributes":{"source":{"id":"98146","type":"ColumnDataSource"}},"id":"98150","type":"CDSView"},{"attributes":{},"id":"98166","type":"Selection"},{"attributes":{"below":[{"id":"98105","type":"LinearAxis"}],"center":[{"id":"98109","type":"Grid"},{"id":"98114","type":"Grid"}],"left":[{"id":"98110","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98139","type":"GlyphRenderer"},{"id":"98144","type":"GlyphRenderer"},{"id":"98149","type":"GlyphRenderer"},{"id":"98154","type":"GlyphRenderer"}],"title":{"id":"98157","type":"Title"},"toolbar":{"id":"98125","type":"Toolbar"},"x_range":{"id":"98097","type":"DataRange1d"},"x_scale":{"id":"98101","type":"LinearScale"},"y_range":{"id":"98099","type":"DataRange1d"},"y_scale":{"id":"98103","type":"LinearScale"}},"id":"98096","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"98172","type":"PolyAnnotation"}},"id":"98119","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"98146","type":"ColumnDataSource"},"glyph":{"id":"98147","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98148","type":"Patch"},"selection_glyph":null,"view":{"id":"98150","type":"CDSView"}},"id":"98149","type":"GlyphRenderer"},{"attributes":{"source":{"id":"98136","type":"ColumnDataSource"}},"id":"98140","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98148","type":"Patch"},{"attributes":{},"id":"98169","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"98097","type":"DataRange1d"},{"attributes":{},"id":"98117","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"98160","type":"BasicTickFormatter"},"ticker":{"id":"98106","type":"BasicTicker"}},"id":"98105","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98143","type":"Patch"},{"attributes":{"dimension":1,"ticker":{"id":"98111","type":"BasicTicker"}},"id":"98114","type":"Grid"},{"attributes":{"source":{"id":"98141","type":"ColumnDataSource"}},"id":"98145","type":"CDSView"},{"attributes":{},"id":"98122","type":"ResetTool"},{"attributes":{"callback":null},"id":"98099","type":"DataRange1d"},{"attributes":{"data_source":{"id":"98136","type":"ColumnDataSource"},"glyph":{"id":"98137","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98138","type":"Patch"},"selection_glyph":null,"view":{"id":"98140","type":"CDSView"}},"id":"98139","type":"GlyphRenderer"},{"attributes":{},"id":"98111","type":"BasicTicker"},{"attributes":{},"id":"98167","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"98170","type":"BoxAnnotation"}},"id":"98116","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"98141","type":"ColumnDataSource"},"glyph":{"id":"98142","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98143","type":"Patch"},"selection_glyph":null,"view":{"id":"98145","type":"CDSView"}},"id":"98144","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"9gK83AmO3D/eZG6v9c3cP8bGIILhDd0/rijTVM1N3T+XioUnuY3dP3/sN/qkzd0/Z07qzJAN3j9QsJyffE3ePzgST3Jojd4/IHQBRVTN3j8I1rMXQA3fP/E3ZuorTd8/2ZkYvReN3z/B+8qPA83fP9WuPrF3BuA/yd+Xmm0m4D+9EPGDY0bgP7FBSm1ZZuA/pnKjVk+G4D+ao/w/RabgP47UVSk7xuA/ggWvEjHm4D92Ngj8JgbhP2pnYeUcJuE/Xpi6zhJG4T9SyRO4CGbhP1LJE7gIZuE/UskTuAhm4T9emLrOEkbhP2pnYeUcJuE/djYI/CYG4T+CBa8SMebgP47UVSk7xuA/mqP8P0Wm4D+mcqNWT4bgP7FBSm1ZZuA/vRDxg2NG4D/J35eabSbgP9WuPrF3BuA/wfvKjwPN3z/ZmRi9F43fP/E3ZuorTd8/CNazF0AN3z8gdAFFVM3ePzgST3Jojd4/ULCcn3xN3j9nTurMkA3eP3/sN/qkzd0/l4qFJ7mN3T+uKNNUzU3dP8bGIILhDd0/3mRur/XN3D/2ArzcCY7cP/YCvNwJjtw/","dtype":"float64","shape":[54]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIxlRDHVlgFAjGVEMdWWAUCjDJ8ZA+wBQFh13Hq/PAJAPQnSJEWHAkCsHcU5TcsCQCZF6Wp+CwNAnxBfxoREA0B+Y6CZLHkDQMAFM1iIpgNAi9zDJxnOA0BR481dme8DQGSVQSBiCQRAQeD+YK4cBED/KXMa+SkEQFHgEBfeLwRAmR4g3ZgvBEBrVfQfuykEQO30gCbrHgRAIr85RJEPBECYTOy2mv0DQI9qE3En6wNAk371KyTXA0CDEjM93cEDQOF7+wtyrQNAyPAkcQybA0CWuC/MiIwDQAAAAAAAAAAA","dtype":"float64","shape":[54]}},"selected":{"id":"98166","type":"Selection"},"selection_policy":{"id":"98167","type":"UnionRenderers"}},"id":"98146","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98142","type":"Patch"},{"attributes":{},"id":"98123","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98172","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98137","type":"Patch"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98147","type":"Patch"},{"attributes":{},"id":"98121","type":"RedoTool"},{"attributes":{},"id":"98106","type":"BasicTicker"},{"attributes":{"source":{"id":"98151","type":"ColumnDataSource"}},"id":"98155","type":"CDSView"},{"attributes":{"callback":null},"id":"98124","type":"HoverTool"},{"attributes":{},"id":"98115","type":"PanTool"},{"attributes":{"text":""},"id":"98157","type":"Title"},{"attributes":{},"id":"98158","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98138","type":"Patch"},{"attributes":{},"id":"98120","type":"UndoTool"},{"attributes":{},"id":"98101","type":"LinearScale"},{"attributes":{"ticker":{"id":"98106","type":"BasicTicker"}},"id":"98109","type":"Grid"},{"attributes":{},"id":"98103","type":"LinearScale"},{"attributes":{"formatter":{"id":"98158","type":"BasicTickFormatter"},"ticker":{"id":"98111","type":"BasicTicker"}},"id":"98110","type":"LinearAxis"}],"root_ids":["98096"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"74431d1a-674b-4f94-ad9d-c5269fb80c15","roots":{"98096":"1432dd14-2bc5-4dc7-b362-777be1fb1170"}}];
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