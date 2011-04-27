mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root28374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13221 = $("<span>");
  root28374.append(node13221);
  var condSubs2459 = new mobl.CompSubscription();
  subs__.addSub(condSubs2459);
  var oldValue2459;
  var renderCond2459 = function() {
    var value5549 = value.get();
    if(oldValue2459 === value5549) return;
    oldValue2459 = value5549;
    var subs__ = condSubs2459;
    subs__.unsubscribe();
    node13221.empty();
    if(value5549) {
      var nodes19163 = $("<span>");
      node13221.append(nodes19163);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl5950();
      }));
      
      function renderControl5950() {
        subs__.addSub((elements)(function(elements, callback) {
          var root28375 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root28375); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19163;
          nodes19163 = node.contents();
          oldNodes.replaceWith(nodes19163);
        }));
      }
      renderControl5950();
      
      
    } else {
      
      var tmp33765 = mobl.ref(null);
      
      
      var tmp33764 = mobl.ref(null);
      
      
      var tmp33763 = mobl.ref(null);
      
      var nodes19164 = $("<span>");
      node13221.append(nodes19164);
      subs__.addSub((mobl.block)(style, tmp33763, tmp33764, tmp33765, function(_, callback) {
        var root28376 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp33755 = mobl.ref(null);
        
        
        var tmp33754 = mobl.ref(null);
        
        var nodes19165 = $("<span>");
        root28376.append(nodes19165);
        subs__.addSub((mobl.label)(loadingMessage, tmp33754, tmp33755, function(_, callback) {
          var root28377 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root28377); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19165;
          nodes19165 = node.contents();
          oldNodes.replaceWith(nodes19165);
        }));
        
        var tmp33757 = mobl.ref("middle");
        
        
        var tmp33756 = mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw==");
        
        
        var tmp33762 = mobl.ref(null);
        
        
        var tmp33761 = mobl.ref(null);
        
        
        var tmp33760 = mobl.ref(null);
        
        
        var tmp33759 = mobl.ref(null);
        
        
        var tmp33758 = mobl.ref(null);
        
        var nodes19166 = $("<span>");
        root28376.append(nodes19166);
        subs__.addSub((ui.image)(tmp33756, tmp33758, tmp33759, tmp33760, tmp33761, tmp33757, tmp33762, function(_, callback) {
          var root28378 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root28378); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19166;
          nodes19166 = node.contents();
          oldNodes.replaceWith(nodes19166);
        }));
        callback(root28376); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes19164;
        nodes19164 = node.contents();
        oldNodes.replaceWith(nodes19164);
      }));
      
      
    }
  };
  renderCond2459();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond2459();
  }));
  
  callback(root28374); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root28379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13222 = $("<div>");
  
  var ref14154 = mobl.ref(ui.headerStyle);
  if(ref14154.get() !== null) {
    node13222.attr('class', ref14154.get());
    subs__.addSub(ref14154.addEventListener('change', function(_, ref, val) {
      node13222.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14154.rebind());
  
  var val7826 = onclick.get();
  if(val7826 !== null) {
    subs__.addSub(mobl.domBind(node13222, 'tap', val7826));
  }
  
  
  var node13223 = $("<div>");
  
  var ref14153 = mobl.ref(ui.headerContainerStyle);
  if(ref14153.get() !== null) {
    node13223.attr('class', ref14153.get());
    subs__.addSub(ref14153.addEventListener('change', function(_, ref, val) {
      node13223.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14153.rebind());
  
  
  var node13224 = $("<div>");
  
  var ref14151 = text;
  node13224.text(""+ref14151.get());
  var ignore2841 = false;
  subs__.addSub(ref14151.addEventListener('change', function(_, ref, val) {
    if(ignore2841) return;
    node13224.text(""+val);
  }));
  subs__.addSub(ref14151.rebind());
  
  
  var ref14152 = mobl.ref(ui.headerTextStyle);
  if(ref14152.get() !== null) {
    node13224.attr('class', ref14152.get());
    subs__.addSub(ref14152.addEventListener('change', function(_, ref, val) {
      node13224.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14152.rebind());
  
  node13223.append(node13224);
  node13222.append(node13223);
  var nodes19167 = $("<span>");
  node13222.append(nodes19167);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5951();
  }));
  
  function renderControl5951() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28380); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19167;
      nodes19167 = node.contents();
      oldNodes.replaceWith(nodes19167);
    }));
  }
  renderControl5951();
  root28379.append(node13222);
  callback(root28379); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root28381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref14155 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref14155.get() !== null) {
    sp.attr('class', ref14155.get());
    subs__.addSub(ref14155.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref14155.rebind());
  
  var val7827 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val7827 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val7827));
  }
  
  var val7828 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7828 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7828));
  }
  
  var val7829 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after2564(result__) {
                    var tmp33855 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after2564);if(result__ !== undefined) after2564(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7829 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val7829));
  }
  
  var val7830 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7830 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val7830));
  }
  
  var ref14156 = text;
  sp.text(""+ref14156.get());
  var ignore2842 = false;
  subs__.addSub(ref14156.addEventListener('change', function(_, ref, val) {
    if(ignore2842) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref14156.rebind());
  
  
  root28381.append(sp);
  callback(root28381); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root28382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19168 = $("<span>");
  root28382.append(nodes19168);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root28383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28383); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19168;
    nodes19168 = node.contents();
    oldNodes.replaceWith(nodes19168);
  }));
  callback(root28382); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root28384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19169 = $("<span>");
  root28384.append(nodes19169);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root28385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19169;
    nodes19169 = node.contents();
    oldNodes.replaceWith(nodes19169);
  }));
  callback(root28384); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root28386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13225 = $("<ul>");
  
  var ref14157 = mobl.ref(ui.groupStyle);
  if(ref14157.get() !== null) {
    node13225.attr('class', ref14157.get());
    subs__.addSub(ref14157.addEventListener('change', function(_, ref, val) {
      node13225.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14157.rebind());
  
  var nodes19170 = $("<span>");
  node13225.append(nodes19170);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5952();
  }));
  
  function renderControl5952() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28387 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28387); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19170;
      nodes19170 = node.contents();
      oldNodes.replaceWith(nodes19170);
    }));
  }
  renderControl5952();
  root28386.append(node13225);
  callback(root28386); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root28388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13226 = $("<img>");
  
  var ref14158 = url;
  if(ref14158.get() !== null) {
    node13226.attr('src', ref14158.get());
    subs__.addSub(ref14158.addEventListener('change', function(_, ref, val) {
      node13226.attr('src', val);
    }));
    
  }
  subs__.addSub(ref14158.rebind());
  
  var ref14159 = width;
  if(ref14159.get() !== null) {
    node13226.attr('width', ref14159.get());
    subs__.addSub(ref14159.addEventListener('change', function(_, ref, val) {
      node13226.attr('width', val);
    }));
    
  }
  subs__.addSub(ref14159.rebind());
  
  var ref14160 = height;
  if(ref14160.get() !== null) {
    node13226.attr('height', ref14160.get());
    subs__.addSub(ref14160.addEventListener('change', function(_, ref, val) {
      node13226.attr('height', val);
    }));
    
  }
  subs__.addSub(ref14160.rebind());
  
  var ref14161 = style;
  if(ref14161.get() !== null) {
    node13226.attr('class', ref14161.get());
    subs__.addSub(ref14161.addEventListener('change', function(_, ref, val) {
      node13226.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14161.rebind());
  
  var val7831 = onclick.get();
  if(val7831 !== null) {
    subs__.addSub(mobl.domBind(node13226, 'tap', val7831));
  }
  
  var ref14162 = valign;
  if(ref14162.get() !== null) {
    node13226.attr('valign', ref14162.get());
    subs__.addSub(ref14162.addEventListener('change', function(_, ref, val) {
      node13226.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref14162.rebind());
  
  var ref14163 = align;
  if(ref14163.get() !== null) {
    node13226.attr('align', ref14163.get());
    subs__.addSub(ref14163.addEventListener('change', function(_, ref, val) {
      node13226.attr('align', val);
    }));
    
  }
  subs__.addSub(ref14163.rebind());
  
  root28388.append(node13226);
  callback(root28388); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root28389 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref14164 = mobl.ref(ui.itemStyle);
  if(ref14164.get() !== null) {
    el.attr('class', ref14164.get());
    subs__.addSub(ref14164.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14164.rebind());
  
  var ref14165 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref14165.get() !== null) {
    el.attr('class', ref14165.get());
    subs__.addSub(ref14165.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref14165.rebind());
  
  var val7832 = onswipe.get();
  if(val7832 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val7832));
  }
  
  var val7833 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp33856 = result__;
                                           function after2565(result__) {
                                             var tmp33857 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after2565);if(result__ !== undefined) after2565(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp33858 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7833 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7833));
  }
  
  var nodes19171 = $("<span>");
  el.append(nodes19171);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5953();
  }));
  
  function renderControl5953() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28390); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19171;
      nodes19171 = node.contents();
      oldNodes.replaceWith(nodes19171);
    }));
  }
  renderControl5953();
  root28389.append(el);
  callback(root28389); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root28391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13227 = $("<input>");
  node13227.attr('type', "checkbox");
  
  var ref14167 = b;
  node13227.attr('checked', !!ref14167.get());
  subs__.addSub(ref14167.addEventListener('change', function(_, ref, val) {
    if(ref === ref14167) node13227.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node13227, 'change', function() {
    b.set(!!node13227.attr('checked'));
  }));
  
  var val7835 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val7835 !== null) {
    subs__.addSub(mobl.domBind(node13227, 'tap', val7835));
  }
  
  var val7836 = onchange.get();
  if(val7836 !== null) {
    subs__.addSub(mobl.domBind(node13227, 'change', val7836));
  }
  
  root28391.append(node13227);
  
  root28391.append(" ");
  
  var node13228 = $("<span>");
  
  var ref14166 = label;
  node13228.text(""+ref14166.get());
  var ignore2843 = false;
  subs__.addSub(ref14166.addEventListener('change', function(_, ref, val) {
    if(ignore2843) return;
    node13228.text(""+val);
  }));
  subs__.addSub(ref14166.rebind());
  
  
  var val7834 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2566(result__) {
                    var tmp33859 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2566);if(result__ !== undefined) after2566(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7834 !== null) {
    subs__.addSub(mobl.domBind(node13228, 'tap', val7834));
  }
  
  root28391.append(node13228);
  callback(root28391); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root28392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13229 = $("<span>");
  root28392.append(node13229);
  var condSubs2460 = new mobl.CompSubscription();
  subs__.addSub(condSubs2460);
  var oldValue2460;
  var renderCond2460 = function() {
    var value5550 = label.get();
    if(oldValue2460 === value5550) return;
    oldValue2460 = value5550;
    var subs__ = condSubs2460;
    subs__.unsubscribe();
    node13229.empty();
    if(value5550) {
      
      var tmp33766 = mobl.ref(null);
      
      var nodes19172 = $("<span>");
      node13229.append(nodes19172);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp33766, function(_, callback) {
        var root28393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19172;
        nodes19172 = node.contents();
        oldNodes.replaceWith(nodes19172);
      }));
      
      
    } else {
      
    }
  };
  renderCond2460();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2460();
  }));
  
  
  var node13230 = $("<span>");
  root28392.append(node13230);
  var condSubs2461 = new mobl.CompSubscription();
  subs__.addSub(condSubs2461);
  var oldValue2461;
  var renderCond2461 = function() {
    var value5551 = validator.get();
    if(oldValue2461 === value5551) return;
    oldValue2461 = value5551;
    var subs__ = condSubs2461;
    subs__.unsubscribe();
    node13230.empty();
    if(value5551) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after2570(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp33860 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node13231 = $("<input>");
        node13231.attr('type', "text");
        
        var ref14168 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref14168.get() !== null) {
          node13231.attr('class', ref14168.get());
          subs__.addSub(ref14168.addEventListener('change', function(_, ref, val) {
            node13231.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node13231.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node13231.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node13231.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref14168.rebind());
        
        var ref14169 = placeholder;
        if(ref14169.get() !== null) {
          node13231.attr('placeholder', ref14169.get());
          subs__.addSub(ref14169.addEventListener('change', function(_, ref, val) {
            node13231.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref14169.rebind());
        
        var ref14170 = temp;
        node13231.val(""+ref14170.get());
        var ignore2844 = false;
        subs__.addSub(ref14170.addEventListener('change', function(_, ref, val) {
          if(ignore2844) return;
          node13231.val(""+val);
        }));
        subs__.addSub(ref14170.rebind());
        
        subs__.addSub(mobl.domBind(node13231, 'keyup change', function() {
          ignore2844 = true;
          temp.set(mobl.stringTomobl__String(node13231.val()));
          ignore2844 = false;
        }));
        
        
        var val7837 = onchange.get();
        if(val7837 !== null) {
          subs__.addSub(mobl.domBind(node13231, 'change', val7837));
        }
        
        var val7838 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after2567(result__) {
                          var tmp33861 = result__;
                          function after2568(result__) {
                            var tmp33862 = result__;
                            var result__ = tmp33862;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after2568);if(result__ !== undefined) after2568(result__);
                        }
                        var result__ = onkeyup.get()(event, after2567);if(result__ !== undefined) after2567(result__);
                      } else {
                        {
                          function after2569(result__) {
                            var tmp33862 = result__;
                            var result__ = tmp33862;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after2569);if(result__ !== undefined) after2569(result__);
                        }
                      }
                    };
        if(val7838 !== null) {
          subs__.addSub(mobl.domBind(node13231, 'keyup', val7838));
        }
        
        var val7839 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val7839 !== null) {
          subs__.addSub(mobl.domBind(node13231, 'blur', val7839));
        }
        
        node13230.append(node13231);
        
        var tmp33767 = mobl.ref(null);
        
        var nodes19173 = $("<span>");
        node13230.append(nodes19173);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp33767, function(_, callback) {
          var root28394 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root28394); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19173;
          nodes19173 = node.contents();
          oldNodes.replaceWith(nodes19173);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after2570);if(result__ !== undefined) after2570(result__);
    } else {
      
      var node13232 = $("<input>");
      node13232.attr('type', "text");
      
      var ref14171 = style;
      if(ref14171.get() !== null) {
        node13232.attr('class', ref14171.get());
        subs__.addSub(ref14171.addEventListener('change', function(_, ref, val) {
          node13232.attr('class', val);
        }));
        
      }
      subs__.addSub(ref14171.rebind());
      
      var ref14172 = placeholder;
      if(ref14172.get() !== null) {
        node13232.attr('placeholder', ref14172.get());
        subs__.addSub(ref14172.addEventListener('change', function(_, ref, val) {
          node13232.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref14172.rebind());
      
      var ref14173 = s;
      node13232.val(""+ref14173.get());
      var ignore2845 = false;
      subs__.addSub(ref14173.addEventListener('change', function(_, ref, val) {
        if(ignore2845) return;
        node13232.val(""+val);
      }));
      subs__.addSub(ref14173.rebind());
      
      subs__.addSub(mobl.domBind(node13232, 'keyup change', function() {
        ignore2845 = true;
        s.set(mobl.stringTomobl__String(node13232.val()));
        ignore2845 = false;
      }));
      
      
      var val7840 = onchange.get();
      if(val7840 !== null) {
        subs__.addSub(mobl.domBind(node13232, 'change', val7840));
      }
      
      var val7841 = onkeyup.get();
      if(val7841 !== null) {
        subs__.addSub(mobl.domBind(node13232, 'keyup', val7841));
      }
      
      var val7842 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7842 !== null) {
        subs__.addSub(mobl.domBind(node13232, 'blur', val7842));
      }
      
      node13230.append(node13232);
      
      
    }
  };
  renderCond2461();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond2461();
  }));
  
  callback(root28392); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root28395 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19174 = $("<span>");
  root28395.append(nodes19174);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root28396 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28396); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19174;
    nodes19174 = node.contents();
    oldNodes.replaceWith(nodes19174);
  }));
  callback(root28395); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root28397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after2571(result__) {
      var tmp33863 = result__;
      var result__ = tmp33863;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after2571);if(result__ !== undefined) after2571(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes19175 = $("<span>");
  root28397.append(nodes19175);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root28398 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28398); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19175;
    nodes19175 = node.contents();
    oldNodes.replaceWith(nodes19175);
  }));
  callback(root28397); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root28399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13233 = $("<span>");
  root28399.append(node13233);
  var condSubs2462 = new mobl.CompSubscription();
  subs__.addSub(condSubs2462);
  var oldValue2462;
  var renderCond2462 = function() {
    var value5552 = label.get();
    if(oldValue2462 === value5552) return;
    oldValue2462 = value5552;
    var subs__ = condSubs2462;
    subs__.unsubscribe();
    node13233.empty();
    if(value5552) {
      
      var node13234 = $("<span>");
      node13234.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref14177 = label;
      node13234.text(""+ref14177.get());
      var ignore2847 = false;
      subs__.addSub(ref14177.addEventListener('change', function(_, ref, val) {
        if(ignore2847) return;
        node13234.text(""+val);
      }));
      subs__.addSub(ref14177.rebind());
      
      
      node13233.append(node13234);
      
      var node13235 = $("<span>");
      node13235.attr('style', "float: left");
      
      
      var node13236 = $("<input>");
      node13236.attr('type', "password");
      
      var ref14174 = style;
      if(ref14174.get() !== null) {
        node13236.attr('class', ref14174.get());
        subs__.addSub(ref14174.addEventListener('change', function(_, ref, val) {
          node13236.attr('class', val);
        }));
        
      }
      subs__.addSub(ref14174.rebind());
      
      var ref14175 = placeholder;
      if(ref14175.get() !== null) {
        node13236.attr('placeholder', ref14175.get());
        subs__.addSub(ref14175.addEventListener('change', function(_, ref, val) {
          node13236.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref14175.rebind());
      
      var ref14176 = s;
      node13236.val(""+ref14176.get());
      var ignore2846 = false;
      subs__.addSub(ref14176.addEventListener('change', function(_, ref, val) {
        if(ignore2846) return;
        node13236.val(""+val);
      }));
      subs__.addSub(ref14176.rebind());
      
      subs__.addSub(mobl.domBind(node13236, 'keyup change', function() {
        ignore2846 = true;
        s.set(mobl.stringTomobl__String(node13236.val()));
        ignore2846 = false;
      }));
      
      
      var val7843 = onchange.get();
      if(val7843 !== null) {
        subs__.addSub(mobl.domBind(node13236, 'change', val7843));
      }
      
      var val7844 = onkeyup.get();
      if(val7844 !== null) {
        subs__.addSub(mobl.domBind(node13236, 'keyup', val7844));
      }
      
      var val7845 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7845 !== null) {
        subs__.addSub(mobl.domBind(node13236, 'blur', val7845));
      }
      
      node13235.append(node13236);
      node13233.append(node13235);
      
      
      
      
    } else {
      
      var node13237 = $("<input>");
      node13237.attr('type', "password");
      
      var ref14178 = style;
      if(ref14178.get() !== null) {
        node13237.attr('class', ref14178.get());
        subs__.addSub(ref14178.addEventListener('change', function(_, ref, val) {
          node13237.attr('class', val);
        }));
        
      }
      subs__.addSub(ref14178.rebind());
      
      var ref14179 = placeholder;
      if(ref14179.get() !== null) {
        node13237.attr('placeholder', ref14179.get());
        subs__.addSub(ref14179.addEventListener('change', function(_, ref, val) {
          node13237.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref14179.rebind());
      
      var ref14180 = s;
      node13237.val(""+ref14180.get());
      var ignore2848 = false;
      subs__.addSub(ref14180.addEventListener('change', function(_, ref, val) {
        if(ignore2848) return;
        node13237.val(""+val);
      }));
      subs__.addSub(ref14180.rebind());
      
      subs__.addSub(mobl.domBind(node13237, 'keyup change', function() {
        ignore2848 = true;
        s.set(mobl.stringTomobl__String(node13237.val()));
        ignore2848 = false;
      }));
      
      
      var val7846 = onchange.get();
      if(val7846 !== null) {
        subs__.addSub(mobl.domBind(node13237, 'change', val7846));
      }
      
      var val7847 = onkeyup.get();
      if(val7847 !== null) {
        subs__.addSub(mobl.domBind(node13237, 'keyup', val7847));
      }
      
      var val7848 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7848 !== null) {
        subs__.addSub(mobl.domBind(node13237, 'blur', val7848));
      }
      
      node13233.append(node13237);
      
      
    }
  };
  renderCond2462();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2462();
  }));
  
  callback(root28399); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root28400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref14185 = style;
  if(ref14185.get() !== null) {
    sel.attr('class', ref14185.get());
    subs__.addSub(ref14185.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14185.rebind());
  
  var val7849 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2572(result__) {
                    var tmp33865 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after2572);if(result__ !== undefined) after2572(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7849 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val7849));
  }
  
  
  var node13238 = mobl.loadingSpan();
  sel.append(node13238);
  var list2987;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2987 = function() {
    var subs__ = listSubs__;
    list2987 = options.get();
    list2987.list(function(results3192) {
      node13238.empty();
      for(var i2987 = 0; i2987 < results3192.length; i2987++) {
        (function() {
          var iternode2987 = $("<span>");
          node13238.append(iternode2987);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results3192), i2987), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results3192), i2987), "_2");
          
          var node13239 = $("<option>");
          
          var ref14181 = optionDescription;
          node13239.text(""+ref14181.get());
          var ignore2849 = false;
          subs__.addSub(ref14181.addEventListener('change', function(_, ref, val) {
            if(ignore2849) return;
            node13239.text(""+val);
          }));
          subs__.addSub(ref14181.rebind());
          
          
          var ref14182 = optionStyle;
          if(ref14182.get() !== null) {
            node13239.attr('class', ref14182.get());
            subs__.addSub(ref14182.addEventListener('change', function(_, ref, val) {
              node13239.attr('class', val);
            }));
            
          }
          subs__.addSub(ref14182.rebind());
          
          var ref14183 = optionValue;
          if(ref14183.get() !== null) {
            node13239.attr('value', ref14183.get());
            subs__.addSub(ref14183.addEventListener('change', function(_, ref, val) {
              node13239.attr('value', val);
            }));
            
          }
          subs__.addSub(ref14183.rebind());
          
          var ref14184 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref14184.get() !== null) {
            node13239.attr('selected', ref14184.get());
            subs__.addSub(ref14184.addEventListener('change', function(_, ref, val) {
              node13239.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node13239.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node13239.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref14184.rebind());
          
          iternode2987.append(node13239);
          
          var oldNodes = iternode2987;
          iternode2987 = iternode2987.contents();
          oldNodes.replaceWith(iternode2987);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2987.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2987(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2987(true); }));
    });
  };
  renderList2987();
  
  root28400.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root28400); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root28401 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp33776 = mobl.ref(null);
  
  
  var tmp33775 = mobl.ref(null);
  
  
  var tmp33774 = mobl.ref(null);
  
  var nodes19176 = $("<span>");
  root28401.append(nodes19176);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp33774, tmp33775, tmp33776, function(_, callback) {
    var root28402 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node13240 = mobl.loadingSpan();
    root28402.append(node13240);
    var list2988;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2988 = function() {
      var subs__ = listSubs__;
      list2988 = tabs.get();
      list2988.list(function(results3193) {
        node13240.empty();
        for(var i2988 = 0; i2988 < results3193.length; i2988++) {
          (function() {
            var iternode2988 = $("<span>");
            node13240.append(iternode2988);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3193), i2988), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3193), i2988), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3193), i2988), "_3");
            
            var tmp33771 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp33771.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp33771.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp33771.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp33771.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp33770 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp33773 = mobl.ref(null);
            
            
            var tmp33772 = mobl.ref(null);
            
            var nodes19177 = $("<span>");
            iternode2988.append(nodes19177);
            subs__.addSub((mobl.span)(tmp33771, tmp33772, tmp33770, tmp33773, function(_, callback) {
              var root28403 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp33769 = mobl.ref(null);
              
              
              var tmp33768 = mobl.ref(null);
              
              var nodes19178 = $("<span>");
              root28403.append(nodes19178);
              subs__.addSub((mobl.label)(tabName, tmp33768, tmp33769, function(_, callback) {
                var root28404 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root28404); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes19178;
                nodes19178 = node.contents();
                oldNodes.replaceWith(nodes19178);
              }));
              callback(root28403); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19177;
              nodes19177 = node.contents();
              oldNodes.replaceWith(nodes19177);
            }));
            
            var oldNodes = iternode2988;
            iternode2988 = iternode2988.contents();
            oldNodes.replaceWith(iternode2988);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2988.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2988(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2988(true); }));
      });
    };
    renderList2988();
    
    callback(root28402); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19176;
    nodes19176 = node.contents();
    oldNodes.replaceWith(nodes19176);
  }));
  
  var node13241 = mobl.loadingSpan();
  root28401.append(node13241);
  var list2989;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2989 = function() {
    var subs__ = listSubs__;
    list2989 = tabs.get();
    list2989.list(function(results3194) {
      node13241.empty();
      for(var i2989 = 0; i2989 < results3194.length; i2989++) {
        (function() {
          var iternode2989 = $("<span>");
          node13241.append(iternode2989);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3194), i2989), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3194), i2989), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3194), i2989), "_3");
          
          var tmp33777 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp33777.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp33777.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp33777.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp33777.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp33780 = mobl.ref(null);
          
          
          var tmp33779 = mobl.ref(null);
          
          
          var tmp33778 = mobl.ref(null);
          
          var nodes19179 = $("<span>");
          iternode2989.append(nodes19179);
          subs__.addSub((mobl.block)(tmp33777, tmp33778, tmp33779, tmp33780, function(_, callback) {
            var root28405 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes19180 = $("<span>");
            root28405.append(nodes19180);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root28406 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes19181 = $("<span>");
              root28406.append(nodes19181);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl5954();
              }));
              
              function renderControl5954() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root28407 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root28407); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19181;
                  nodes19181 = node.contents();
                  oldNodes.replaceWith(nodes19181);
                }));
              }
              renderControl5954();
              callback(root28406); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19180;
              nodes19180 = node.contents();
              oldNodes.replaceWith(nodes19180);
            }));
            callback(root28405); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes19179;
            nodes19179 = node.contents();
            oldNodes.replaceWith(nodes19179);
          }));
          
          var oldNodes = iternode2989;
          iternode2989 = iternode2989.contents();
          oldNodes.replaceWith(iternode2989);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2989.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2989(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2989(true); }));
    });
  };
  renderList2989();
  
  callback(root28401); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root28408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13242 = $("<div>");
  
  var ref14189 = mobl.ref(ui.searchboxStyle);
  if(ref14189.get() !== null) {
    node13242.attr('class', ref14189.get());
    subs__.addSub(ref14189.addEventListener('change', function(_, ref, val) {
      node13242.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14189.rebind());
  
  
  var node13243 = $("<input>");
  node13243.attr('type', "search");
  
  var ref14186 = mobl.ref(ui.searchBoxInputStyle);
  if(ref14186.get() !== null) {
    node13243.attr('class', ref14186.get());
    subs__.addSub(ref14186.addEventListener('change', function(_, ref, val) {
      node13243.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14186.rebind());
  
  var ref14187 = placeholder;
  if(ref14187.get() !== null) {
    node13243.attr('placeholder', ref14187.get());
    subs__.addSub(ref14187.addEventListener('change', function(_, ref, val) {
      node13243.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref14187.rebind());
  
  var ref14188 = s;
  node13243.val(""+ref14188.get());
  var ignore2850 = false;
  subs__.addSub(ref14188.addEventListener('change', function(_, ref, val) {
    if(ignore2850) return;
    node13243.val(""+val);
  }));
  subs__.addSub(ref14188.rebind());
  
  subs__.addSub(mobl.domBind(node13243, 'keyup change', function() {
    ignore2850 = true;
    s.set(mobl.stringTomobl__String(node13243.val()));
    ignore2850 = false;
  }));
  
  
  var val7850 = onsearch.get();
  if(val7850 !== null) {
    subs__.addSub(mobl.domBind(node13243, 'change', val7850));
  }
  
  var val7851 = onkeyup.get();
  if(val7851 !== null) {
    subs__.addSub(mobl.domBind(node13243, 'keyup', val7851));
  }
  node13243.attr('autocorrect', false);
  node13243.attr('autocapitalize', false);
  node13243.attr('autocomplete', false);
  
  node13242.append(node13243);
  root28408.append(node13242);
  callback(root28408); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root28409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref14190 = mobl.ref(ui.contextMenuStyle);
  if(ref14190.get() !== null) {
    menu.attr('class', ref14190.get());
    subs__.addSub(ref14190.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14190.rebind());
  
  var nodes19182 = $("<span>");
  menu.append(nodes19182);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5955();
  }));
  
  function renderControl5955() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28410); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19182;
      nodes19182 = node.contents();
      oldNodes.replaceWith(nodes19182);
    }));
  }
  renderControl5955();
  root28409.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val7852 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp33868 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val7852 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val7852));
  }
  
  root28409.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root28409); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root28411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp33854 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp33854.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node13244 = $("<span>");
  root28411.append(node13244);
  var condSubs2463 = new mobl.CompSubscription();
  subs__.addSub(condSubs2463);
  var oldValue2463;
  var renderCond2463 = function() {
    var value5553 = tmp33854.get();
    if(oldValue2463 === value5553) return;
    oldValue2463 = value5553;
    var subs__ = condSubs2463;
    subs__.unsubscribe();
    node13244.empty();
    if(value5553) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node13245 = $("<div>");
        node13245.attr('width', "100%");
        
        
        var node13246 = $("<div>");
        node13246.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes19185 = $("<span>");
        node13246.append(nodes19185);
        subs__.addSub((ui.group)(function(_, callback) {
          var root28414 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node13249 = mobl.loadingSpan();
          root28414.append(node13249);
          var list2990;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList2990 = function() {
            var subs__ = listSubs__;
            list2990 = items.get();
            list2990.list(function(results3195) {
              node13249.empty();
              for(var i2990 = 0; i2990 < results3195.length; i2990++) {
                (function() {
                  var iternode2990 = $("<span>");
                  node13249.append(iternode2990);
                  var it;
                  it = mobl.ref(mobl.ref(results3195), i2990);
                  
                  var tmp33794 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp33794.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp33794.set(it.get() == current.get());
                  }));
                  
                  
                  var node13250 = $("<span>");
                  iternode2990.append(node13250);
                  var condSubs2465 = new mobl.CompSubscription();
                  subs__.addSub(condSubs2465);
                  var oldValue2465;
                  var renderCond2465 = function() {
                    var value5555 = tmp33794.get();
                    if(oldValue2465 === value5555) return;
                    oldValue2465 = value5555;
                    var subs__ = condSubs2465;
                    subs__.unsubscribe();
                    node13250.empty();
                    if(value5555) {
                      
                      var tmp33790 = mobl.ref(false);
                      
                      
                      var tmp33789 = mobl.ref(null);
                      
                      
                      var tmp33788 = mobl.ref(null);
                      
                      var nodes19186 = $("<span>");
                      node13250.append(nodes19186);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp33788, tmp33789, tmp33790, function(_, callback) {
                        var root28415 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes19187 = $("<span>");
                        root28415.append(nodes19187);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl5957();
                        }));
                        
                        function renderControl5957() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root28416 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root28416); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes19187;
                            nodes19187 = node.contents();
                            oldNodes.replaceWith(nodes19187);
                          }));
                        }
                        renderControl5957();
                        callback(root28415); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes19186;
                        nodes19186 = node.contents();
                        oldNodes.replaceWith(nodes19186);
                      }));
                      
                      
                    } else {
                      
                      var tmp33792 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp33791 = mobl.ref(true);
                      
                      
                      var tmp33793 = mobl.ref(null);
                      
                      var nodes19188 = $("<span>");
                      node13250.append(nodes19188);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp33792, tmp33793, tmp33791, function(_, callback) {
                        var root28417 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes19189 = $("<span>");
                        root28417.append(nodes19189);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl5958();
                        }));
                        
                        function renderControl5958() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root28418 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root28418); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes19189;
                            nodes19189 = node.contents();
                            oldNodes.replaceWith(nodes19189);
                          }));
                        }
                        renderControl5958();
                        callback(root28417); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes19188;
                        nodes19188 = node.contents();
                        oldNodes.replaceWith(nodes19188);
                      }));
                      
                      
                    }
                  };
                  renderCond2465();
                  subs__.addSub(tmp33794.addEventListener('change', function() {
                    renderCond2465();
                  }));
                  
                  
                  var oldNodes = iternode2990;
                  iternode2990 = iternode2990.contents();
                  oldNodes.replaceWith(iternode2990);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list2990.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2990(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2990(true); }));
            });
          };
          renderList2990();
          
          callback(root28414); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes19185;
          nodes19185 = node.contents();
          oldNodes.replaceWith(nodes19185);
        }));
        node13245.append(node13246);
        
        var node13247 = $("<div>");
        node13247.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node13248 = $("<span>");
        node13247.append(node13248);
        var condSubs2464 = new mobl.CompSubscription();
        subs__.addSub(condSubs2464);
        var oldValue2464;
        var renderCond2464 = function() {
          var value5554 = current.get();
          if(oldValue2464 === value5554) return;
          oldValue2464 = value5554;
          var subs__ = condSubs2464;
          subs__.unsubscribe();
          node13248.empty();
          if(value5554) {
            var nodes19183 = $("<span>");
            node13248.append(nodes19183);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl5956();
            }));
            
            function renderControl5956() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root28412 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root28412); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes19183;
                nodes19183 = node.contents();
                oldNodes.replaceWith(nodes19183);
              }));
            }
            renderControl5956();
            
            
          } else {
            
            var tmp33795 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp33797 = mobl.ref(null);
            
            
            var tmp33796 = mobl.ref(null);
            
            var nodes19184 = $("<span>");
            node13248.append(nodes19184);
            subs__.addSub((mobl.label)(tmp33795, tmp33796, tmp33797, function(_, callback) {
              var root28413 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root28413); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes19184;
              nodes19184 = node.contents();
              oldNodes.replaceWith(nodes19184);
            }));
            
            
          }
        };
        renderCond2464();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond2464();
        }));
        
        node13245.append(node13247);
        node13244.append(node13245);
        
        
        
        
        
        
      });
    } else {
      var nodes19190 = $("<span>");
      node13244.append(nodes19190);
      subs__.addSub((ui.group)(function(_, callback) {
        var root28419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node13251 = mobl.loadingSpan();
        root28419.append(node13251);
        var list2991;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList2991 = function() {
          var subs__ = listSubs__;
          list2991 = items.get();
          list2991.list(function(results3196) {
            node13251.empty();
            for(var i2991 = 0; i2991 < results3196.length; i2991++) {
              (function() {
                var iternode2991 = $("<span>");
                node13251.append(iternode2991);
                var it;
                it = mobl.ref(mobl.ref(results3196), i2991);
                
                var tmp33781 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp33869 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp33783 = mobl.ref(false);
                
                
                var tmp33782 = mobl.ref(null);
                
                var nodes19191 = $("<span>");
                iternode2991.append(nodes19191);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp33781, tmp33782, tmp33783, function(_, callback) {
                  var root28420 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes19192 = $("<span>");
                  root28420.append(nodes19192);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl5959();
                  }));
                  
                  function renderControl5959() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root28421 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root28421); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes19192;
                      nodes19192 = node.contents();
                      oldNodes.replaceWith(nodes19192);
                    }));
                  }
                  renderControl5959();
                  callback(root28420); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19191;
                  nodes19191 = node.contents();
                  oldNodes.replaceWith(nodes19191);
                }));
                
                var oldNodes = iternode2991;
                iternode2991 = iternode2991.contents();
                oldNodes.replaceWith(iternode2991);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list2991.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2991(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2991(true); }));
          });
        };
        renderList2991();
        
        callback(root28419); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes19190;
        nodes19190 = node.contents();
        oldNodes.replaceWith(nodes19190);
      }));
      
      
    }
  };
  renderCond2463();
  subs__.addSub(tmp33854.addEventListener('change', function() {
    renderCond2463();
  }));
  
  callback(root28411); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root28422 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp33786 = mobl.ref("Detail");
  
  
  var tmp33787 = mobl.ref(null);
  
  var nodes19193 = $("<span>");
  root28422.append(nodes19193);
  subs__.addSub((ui.header)(tmp33786, tmp33787, function(_, callback) {
    var root28423 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp33785 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp33784 = mobl.ref("Back");
    
    var nodes19194 = $("<span>");
    root28423.append(nodes19194);
    subs__.addSub((ui.backButton)(tmp33784, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp33785, function(_, callback) {
      var root28424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19194;
      nodes19194 = node.contents();
      oldNodes.replaceWith(nodes19194);
    }));
    callback(root28423); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19193;
    nodes19193 = node.contents();
    oldNodes.replaceWith(nodes19193);
  }));
  var nodes19195 = $("<span>");
  root28422.append(nodes19195);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl5960();
  }));
  
  function renderControl5960() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root28425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28425); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19195;
      nodes19195 = node.contents();
      oldNodes.replaceWith(nodes19195);
    }));
  }
  renderControl5960();
  callback(root28422); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root28426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes19196 = $("<span>");
  root28426.append(nodes19196);
  subs__.addSub((ui.group)(function(_, callback) {
    var root28427 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node13252 = mobl.loadingSpan();
    root28427.append(node13252);
    var list2992;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2992 = function() {
      var subs__ = listSubs__;
      list2992 = coll.get();
      list2992.list(function(results3197) {
        node13252.empty();
        for(var i2992 = 0; i2992 < results3197.length; i2992++) {
          (function() {
            var iternode2992 = $("<span>");
            node13252.append(iternode2992);
            var it;
            it = mobl.ref(mobl.ref(results3197), i2992);
            
            var tmp33804 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp33804.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp33804.set(it.get() == selected.get());
            }));
            
            
            var node13253 = $("<span>");
            iternode2992.append(node13253);
            var condSubs2466 = new mobl.CompSubscription();
            subs__.addSub(condSubs2466);
            var oldValue2466;
            var renderCond2466 = function() {
              var value5556 = tmp33804.get();
              if(oldValue2466 === value5556) return;
              oldValue2466 = value5556;
              var subs__ = condSubs2466;
              subs__.unsubscribe();
              node13253.empty();
              if(value5556) {
                
                var tmp33800 = mobl.ref(false);
                
                
                var tmp33799 = mobl.ref(null);
                
                
                var tmp33798 = mobl.ref(null);
                
                var nodes19197 = $("<span>");
                node13253.append(nodes19197);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp33798, tmp33799, tmp33800, function(_, callback) {
                  var root28428 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes19198 = $("<span>");
                  root28428.append(nodes19198);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl5961();
                  }));
                  
                  function renderControl5961() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root28429 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root28429); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes19198;
                      nodes19198 = node.contents();
                      oldNodes.replaceWith(nodes19198);
                    }));
                  }
                  renderControl5961();
                  callback(root28428); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19197;
                  nodes19197 = node.contents();
                  oldNodes.replaceWith(nodes19197);
                }));
                
                
              } else {
                
                var tmp33802 = mobl.ref(true);
                
                
                var tmp33801 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp33803 = mobl.ref(null);
                
                var nodes19199 = $("<span>");
                node13253.append(nodes19199);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp33801, tmp33803, tmp33802, function(_, callback) {
                  var root28430 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes19200 = $("<span>");
                  root28430.append(nodes19200);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl5962();
                  }));
                  
                  function renderControl5962() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root28431 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root28431); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes19200;
                      nodes19200 = node.contents();
                      oldNodes.replaceWith(nodes19200);
                    }));
                  }
                  renderControl5962();
                  callback(root28430); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19199;
                  nodes19199 = node.contents();
                  oldNodes.replaceWith(nodes19199);
                }));
                
                
              }
            };
            renderCond2466();
            subs__.addSub(tmp33804.addEventListener('change', function() {
              renderCond2466();
            }));
            
            
            var oldNodes = iternode2992;
            iternode2992 = iternode2992.contents();
            oldNodes.replaceWith(iternode2992);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2992.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2992(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2992(true); }));
      });
    };
    renderList2992();
    
    callback(root28427); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19196;
    nodes19196 = node.contents();
    oldNodes.replaceWith(nodes19196);
  }));
  callback(root28426); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root28432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes19201 = $("<span>");
    root28432.append(nodes19201);
    subs__.addSub((ui.group)(function(_, callback) {
      var root28433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp33808 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp33808.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp33808.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp33808.set(coll.get().limit(n.get()));
      }));
      
      
      var node13254 = mobl.loadingSpan();
      root28433.append(node13254);
      var list2993;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2993 = function() {
        var subs__ = listSubs__;
        list2993 = tmp33808.get();
        list2993.list(function(results3198) {
          node13254.empty();
          for(var i2993 = 0; i2993 < results3198.length; i2993++) {
            (function() {
              var iternode2993 = $("<span>");
              node13254.append(iternode2993);
              var it;
              it = mobl.ref(mobl.ref(results3198), i2993);
              
              var tmp33805 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp33807 = mobl.ref(false);
              
              
              var tmp33806 = mobl.ref(null);
              
              var nodes19202 = $("<span>");
              iternode2993.append(nodes19202);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp33805, tmp33806, tmp33807, function(_, callback) {
                var root28434 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes19203 = $("<span>");
                root28434.append(nodes19203);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl5963();
                }));
                
                function renderControl5963() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root28435 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root28435); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes19203;
                    nodes19203 = node.contents();
                    oldNodes.replaceWith(nodes19203);
                  }));
                }
                renderControl5963();
                callback(root28434); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes19202;
                nodes19202 = node.contents();
                oldNodes.replaceWith(nodes19202);
              }));
              
              var oldNodes = iternode2993;
              iternode2993 = iternode2993.contents();
              oldNodes.replaceWith(iternode2993);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2993.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2993(true); }));
          subs__.addSub(tmp33808.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2993(true); }));
        });
      };
      renderList2993();
      
      
      var tmp33811 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp33811.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp33811.set(n.get() < total.get());
      }));
      
      
      var node13255 = $("<span>");
      root28433.append(node13255);
      var condSubs2467 = new mobl.CompSubscription();
      subs__.addSub(condSubs2467);
      var oldValue2467;
      var renderCond2467 = function() {
        var value5557 = tmp33811.get();
        if(oldValue2467 === value5557) return;
        oldValue2467 = value5557;
        var subs__ = condSubs2467;
        subs__.unsubscribe();
        node13255.empty();
        if(value5557) {
          
          var node13256 = $("<li>");
          
          var ref14191 = mobl.ref(ui.loadMoreStyle);
          if(ref14191.get() !== null) {
            node13256.attr('class', ref14191.get());
            subs__.addSub(ref14191.addEventListener('change', function(_, ref, val) {
              node13256.attr('class', val);
            }));
            
          }
          subs__.addSub(ref14191.rebind());
          
          var val7853 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val7853 !== null) {
            subs__.addSub(mobl.domBind(node13256, 'tap', val7853));
          }
          
          
          var tmp33810 = mobl.ref(null);
          
          
          var tmp33809 = mobl.ref(null);
          
          var nodes19204 = $("<span>");
          node13256.append(nodes19204);
          subs__.addSub((mobl.label)(moreLabel, tmp33809, tmp33810, function(_, callback) {
            var root28436 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root28436); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes19204;
            nodes19204 = node.contents();
            oldNodes.replaceWith(nodes19204);
          }));
          node13255.append(node13256);
          
          
          
        } else {
          
        }
      };
      renderCond2467();
      subs__.addSub(tmp33811.addEventListener('change', function() {
        renderCond2467();
      }));
      
      callback(root28433); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19201;
      nodes19201 = node.contents();
      oldNodes.replaceWith(nodes19201);
    }));
    callback(root28432); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root28437 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19205 = $("<span>");
  root28437.append(nodes19205);
  subs__.addSub((ui.group)(function(_, callback) {
    var root28438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node13257 = mobl.loadingSpan();
    root28438.append(node13257);
    var list2994;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2994 = function() {
      var subs__ = listSubs__;
      list2994 = items.get();
      list2994.list(function(results3199) {
        node13257.empty();
        for(var i2994 = 0; i2994 < results3199.length; i2994++) {
          (function() {
            var iternode2994 = $("<span>");
            node13257.append(iternode2994);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results3199), i2994), "_1");it = mobl.ref(mobl.ref(mobl.ref(results3199), i2994), "_2");
            
            var tmp33815 = mobl.ref(false);
            
            
            var tmp33814 = mobl.ref(null);
            
            
            var tmp33813 = mobl.ref(null);
            
            var nodes19206 = $("<span>");
            iternode2994.append(nodes19206);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp33813, tmp33814, tmp33815, function(_, callback) {
              var root28439 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp33812 = mobl.ref(null);
              
              var nodes19207 = $("<span>");
              root28439.append(nodes19207);
              subs__.addSub((ui.checkBox)(checked, it, tmp33812, function(_, callback) {
                var root28440 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root28440); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes19207;
                nodes19207 = node.contents();
                oldNodes.replaceWith(nodes19207);
              }));
              callback(root28439); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19206;
              nodes19206 = node.contents();
              oldNodes.replaceWith(nodes19206);
            }));
            
            var oldNodes = iternode2994;
            iternode2994 = iternode2994.contents();
            oldNodes.replaceWith(iternode2994);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2994.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2994(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2994(true); }));
      });
    };
    renderList2994();
    
    callback(root28438); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19205;
    nodes19205 = node.contents();
    oldNodes.replaceWith(nodes19205);
  }));
  callback(root28437); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root28441 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll5282) {
    coll5282 = coll5282.reverse();
    function processOne662() {
      var it;
      it = coll5282.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll5282.length > 0) processOne662(); else rest662();
      
    }
    function rest662() {
      
      var tmp33819 = mobl.ref(null);
      
      var nodes19208 = $("<span>");
      root28441.append(nodes19208);
      subs__.addSub((ui.header)(title, tmp33819, function(_, callback) {
        var root28442 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp33816 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp33817 = mobl.ref(mobl._("Back", []));
        
        var nodes19209 = $("<span>");
        root28442.append(nodes19209);
        subs__.addSub((ui.backButton)(tmp33817, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp33816, function(_, callback) {
          var root28443 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root28443); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19209;
          nodes19209 = node.contents();
          oldNodes.replaceWith(nodes19209);
        }));
        
        var tmp33818 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll5281) {
                               coll5281 = coll5281.reverse();
                               function processOne661() {
                                 var checked;var it;
                                 var tmp33871 = coll5281.pop();
                                 checked = tmp33871._1;it = tmp33871._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll5281.length > 0) processOne661(); else rest661();
                                   
                                 } else {
                                   {
                                     
                                     if(coll5281.length > 0) processOne661(); else rest661();
                                     
                                   }
                                 }
                               }
                               function rest661() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll5281.length > 0) processOne661(); else rest661();
                             });
                             
                           });
        
        var nodes19210 = $("<span>");
        root28442.append(nodes19210);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp33818, function(_, callback) {
          var root28444 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root28444); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19210;
          nodes19210 = node.contents();
          oldNodes.replaceWith(nodes19210);
        }));
        callback(root28442); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes19208;
        nodes19208 = node.contents();
        oldNodes.replaceWith(nodes19208);
      }));
      var nodes19211 = $("<span>");
      root28441.append(nodes19211);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root28445 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28445); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19211;
        nodes19211 = node.contents();
        oldNodes.replaceWith(nodes19211);
      }));
      callback(root28441); return subs__;
      
      
    }
    if(coll5282.length > 0) processOne662(); else rest662();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root28446 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp33821 = mobl.ref(null);
  
  
  var tmp33820 = mobl.ref(null);
  
  var nodes19212 = $("<span>");
  root28446.append(nodes19212);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp33820, tmp33821, function(_, callback) {
    var root28447 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28447); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19212;
    nodes19212 = node.contents();
    oldNodes.replaceWith(nodes19212);
  }));
  
  var tmp33822 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp33822.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp33822.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp33822.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp33822.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp33822.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes19213 = $("<span>");
  root28446.append(nodes19213);
  subs__.addSub((ui.masterDetail)(tmp33822, masterItem, detailItem, function(_, callback) {
    var root28448 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28448); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19213;
    nodes19213 = node.contents();
    oldNodes.replaceWith(nodes19213);
  }));
  callback(root28446); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, elements, callback) {
  var root28449 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp33835 = mobl.ref(null);
  
  
  var tmp33834 = mobl.ref(null);
  
  
  var tmp33833 = mobl.ref(null);
  
  var nodes19214 = $("<span>");
  root28449.append(nodes19214);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp33833, tmp33834, tmp33835, function(_, callback) {
    var root28450 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node13258 = mobl.loadingSpan();
    root28450.append(node13258);
    var list2995;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2995 = function() {
      var subs__ = listSubs__;
      list2995 = sections.get();
      list2995.list(function(results3200) {
        node13258.empty();
        for(var i2995 = 0; i2995 < results3200.length; i2995++) {
          (function() {
            var iternode2995 = $("<span>");
            node13258.append(iternode2995);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results3200), i2995), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results3200), i2995), "_2");
            
            var tmp33826 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp33826.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp33826.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp33826.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp33826.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp33825 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp33828 = mobl.ref(null);
            
            
            var tmp33827 = mobl.ref(null);
            
            var nodes19215 = $("<span>");
            iternode2995.append(nodes19215);
            subs__.addSub((mobl.span)(tmp33826, tmp33827, tmp33825, tmp33828, function(_, callback) {
              var root28451 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp33824 = mobl.ref(null);
              
              
              var tmp33823 = mobl.ref(null);
              
              var nodes19216 = $("<span>");
              root28451.append(nodes19216);
              subs__.addSub((mobl.label)(sectionName, tmp33823, tmp33824, function(_, callback) {
                var root28452 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root28452); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes19216;
                nodes19216 = node.contents();
                oldNodes.replaceWith(nodes19216);
              }));
              callback(root28451); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19215;
              nodes19215 = node.contents();
              oldNodes.replaceWith(nodes19215);
            }));
            
            var tmp33829 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp33829.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp33829.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp33829.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp33829.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp33832 = mobl.ref(null);
            
            
            var tmp33831 = mobl.ref(null);
            
            
            var tmp33830 = mobl.ref(null);
            
            var nodes19217 = $("<span>");
            iternode2995.append(nodes19217);
            subs__.addSub((mobl.block)(tmp33829, tmp33830, tmp33831, tmp33832, function(_, callback) {
              var root28453 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes19218 = $("<span>");
              root28453.append(nodes19218);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl5964();
              }));
              
              function renderControl5964() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root28454 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root28454); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19218;
                  nodes19218 = node.contents();
                  oldNodes.replaceWith(nodes19218);
                }));
              }
              renderControl5964();
              callback(root28453); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19217;
              nodes19217 = node.contents();
              oldNodes.replaceWith(nodes19217);
            }));
            
            var oldNodes = iternode2995;
            iternode2995 = iternode2995.contents();
            oldNodes.replaceWith(iternode2995);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2995.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2995(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2995(true); }));
      });
    };
    renderList2995();
    
    callback(root28450); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19214;
    nodes19214 = node.contents();
    oldNodes.replaceWith(nodes19214);
  }));
  callback(root28449); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(elements, callback) {
  var root28455 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13259 = $("<table>");
  
  var ref14192 = mobl.ref(ui.tableStyle);
  if(ref14192.get() !== null) {
    node13259.attr('class', ref14192.get());
    subs__.addSub(ref14192.addEventListener('change', function(_, ref, val) {
      node13259.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14192.rebind());
  
  var nodes19219 = $("<span>");
  node13259.append(nodes19219);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5965();
  }));
  
  function renderControl5965() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28456); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19219;
      nodes19219 = node.contents();
      oldNodes.replaceWith(nodes19219);
    }));
  }
  renderControl5965();
  root28455.append(node13259);
  callback(root28455); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root28457 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13260 = $("<tr>");
  
  var ref14193 = mobl.ref(ui.trStyle);
  if(ref14193.get() !== null) {
    node13260.attr('class', ref14193.get());
    subs__.addSub(ref14193.addEventListener('change', function(_, ref, val) {
      node13260.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14193.rebind());
  
  var nodes19220 = $("<span>");
  node13260.append(nodes19220);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5966();
  }));
  
  function renderControl5966() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19220;
      nodes19220 = node.contents();
      oldNodes.replaceWith(nodes19220);
    }));
  }
  renderControl5966();
  root28457.append(node13260);
  callback(root28457); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root28459 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13261 = $("<td>");
  
  var ref14194 = width;
  if(ref14194.get() !== null) {
    node13261.attr('width', ref14194.get());
    subs__.addSub(ref14194.addEventListener('change', function(_, ref, val) {
      node13261.attr('width', val);
    }));
    
  }
  subs__.addSub(ref14194.rebind());
  
  var ref14195 = mobl.ref(ui.tdStyle);
  if(ref14195.get() !== null) {
    node13261.attr('class', ref14195.get());
    subs__.addSub(ref14195.addEventListener('change', function(_, ref, val) {
      node13261.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14195.rebind());
  
  var nodes19221 = $("<span>");
  node13261.append(nodes19221);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5967();
  }));
  
  function renderControl5967() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28460); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19221;
      nodes19221 = node.contents();
      oldNodes.replaceWith(nodes19221);
    }));
  }
  renderControl5967();
  root28459.append(node13261);
  callback(root28459); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root28461 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13262 = $("<td>");
  
  var ref14196 = width;
  if(ref14196.get() !== null) {
    node13262.attr('width', ref14196.get());
    subs__.addSub(ref14196.addEventListener('change', function(_, ref, val) {
      node13262.attr('width', val);
    }));
    
  }
  subs__.addSub(ref14196.rebind());
  
  var ref14197 = mobl.ref(ui.tdStyle);
  if(ref14197.get() !== null) {
    node13262.attr('class', ref14197.get());
    subs__.addSub(ref14197.addEventListener('change', function(_, ref, val) {
      node13262.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14197.rebind());
  
  var nodes19222 = $("<span>");
  node13262.append(nodes19222);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5968();
  }));
  
  function renderControl5968() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28462 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28462); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19222;
      nodes19222 = node.contents();
      oldNodes.replaceWith(nodes19222);
    }));
  }
  renderControl5968();
  root28461.append(node13262);
  callback(root28461); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root28463 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13263 = $("<td>");
  
  var ref14198 = width;
  if(ref14198.get() !== null) {
    node13263.attr('width', ref14198.get());
    subs__.addSub(ref14198.addEventListener('change', function(_, ref, val) {
      node13263.attr('width', val);
    }));
    
  }
  subs__.addSub(ref14198.rebind());
  
  var ref14199 = mobl.ref(ui.tdStyle);
  if(ref14199.get() !== null) {
    node13263.attr('class', ref14199.get());
    subs__.addSub(ref14199.addEventListener('change', function(_, ref, val) {
      node13263.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14199.rebind());
  
  
  var node13264 = $("<strong>");
  
  var nodes19223 = $("<span>");
  node13264.append(nodes19223);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5969();
  }));
  
  function renderControl5969() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28464 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28464); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19223;
      nodes19223 = node.contents();
      oldNodes.replaceWith(nodes19223);
    }));
  }
  renderControl5969();
  node13263.append(node13264);
  root28463.append(node13263);
  callback(root28463); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));
ui.customMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root28465 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19224 = $("<span>");
  root28465.append(nodes19224);
  subs__.addSub((ui.group)(function(_, callback) {
    var root28466 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node13265 = mobl.loadingSpan();
    root28466.append(node13265);
    var list2996;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2996 = function() {
      var subs__ = listSubs__;
      list2996 = items.get();
      list2996.list(function(results3201) {
        node13265.empty();
        for(var i2996 = 0; i2996 < results3201.length; i2996++) {
          (function() {
            var iternode2996 = $("<span>");
            node13265.append(iternode2996);
            var it;
            it = mobl.ref(mobl.ref(results3201), i2996);
            
            var tmp33836 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp33873 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp33838 = mobl.ref(false);
            
            
            var tmp33837 = mobl.ref(null);
            
            var nodes19225 = $("<span>");
            iternode2996.append(nodes19225);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp33836, tmp33837, tmp33838, function(_, callback) {
              var root28467 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes19226 = $("<span>");
              root28467.append(nodes19226);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl5970();
              }));
              
              function renderControl5970() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root28468 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root28468); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19226;
                  nodes19226 = node.contents();
                  oldNodes.replaceWith(nodes19226);
                }));
              }
              renderControl5970();
              callback(root28467); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19225;
              nodes19225 = node.contents();
              oldNodes.replaceWith(nodes19225);
            }));
            
            var oldNodes = iternode2996;
            iternode2996 = iternode2996.contents();
            oldNodes.replaceWith(iternode2996);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2996.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2996(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2996(true); }));
      });
    };
    renderList2996();
    
    callback(root28466); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19224;
    nodes19224 = node.contents();
    oldNodes.replaceWith(nodes19224);
  }));
  callback(root28465); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root28469 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp33840 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp33839 = mobl.ref("Back");
  
  var nodes19227 = $("<span>");
  root28469.append(nodes19227);
  subs__.addSub((ui.backButton)(tmp33839, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp33840, function(_, callback) {
    var root28470 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28470); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19227;
    nodes19227 = node.contents();
    oldNodes.replaceWith(nodes19227);
  }));
  var nodes19228 = $("<span>");
  root28469.append(nodes19228);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl5971();
  }));
  
  function renderControl5971() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root28471 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28471); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19228;
      nodes19228 = node.contents();
      oldNodes.replaceWith(nodes19228);
    }));
  }
  renderControl5971();
  callback(root28469); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root28472 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13266 = $("<div>");
  
  var ref14203 = mobl.ref(ui.customHeaderStyle);
  if(ref14203.get() !== null) {
    node13266.attr('class', ref14203.get());
    subs__.addSub(ref14203.addEventListener('change', function(_, ref, val) {
      node13266.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14203.rebind());
  
  var val7854 = onclick.get();
  if(val7854 !== null) {
    subs__.addSub(mobl.domBind(node13266, 'tap', val7854));
  }
  
  
  var node13267 = $("<div>");
  
  var ref14202 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref14202.get() !== null) {
    node13267.attr('class', ref14202.get());
    subs__.addSub(ref14202.addEventListener('change', function(_, ref, val) {
      node13267.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14202.rebind());
  
  
  var node13268 = $("<div>");
  
  var ref14200 = text;
  node13268.text(""+ref14200.get());
  var ignore2851 = false;
  subs__.addSub(ref14200.addEventListener('change', function(_, ref, val) {
    if(ignore2851) return;
    node13268.text(""+val);
  }));
  subs__.addSub(ref14200.rebind());
  
  
  var ref14201 = mobl.ref(ui.customHeaderTextStyle);
  if(ref14201.get() !== null) {
    node13268.attr('class', ref14201.get());
    subs__.addSub(ref14201.addEventListener('change', function(_, ref, val) {
      node13268.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14201.rebind());
  
  node13267.append(node13268);
  node13266.append(node13267);
  var nodes19229 = $("<span>");
  node13266.append(nodes19229);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5972();
  }));
  
  function renderControl5972() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28473 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28473); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19229;
      nodes19229 = node.contents();
      oldNodes.replaceWith(nodes19229);
    }));
  }
  renderControl5972();
  root28472.append(node13266);
  callback(root28472); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root28474 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref14204 = mobl.ref(ui.customItemStyle);
  if(ref14204.get() !== null) {
    el.attr('class', ref14204.get());
    subs__.addSub(ref14204.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14204.rebind());
  
  var ref14205 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref14205.get() !== null) {
    el.attr('class', ref14205.get());
    subs__.addSub(ref14205.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(mobl.ref(ui.customItemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(mobl.ref(ui.customItemPushedStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(mobl.ref(ui.customItemStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    
  }
  subs__.addSub(ref14205.rebind());
  
  var val7855 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp33874 = result__;
                                           function after2573(result__) {
                                             var tmp33875 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after2573);if(result__ !== undefined) after2573(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp33876 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7855 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7855));
  }
  
  var nodes19230 = $("<span>");
  el.append(nodes19230);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5973();
  }));
  
  function renderControl5973() {
    subs__.addSub((elements)(function(elements, callback) {
      var root28475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28475); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19230;
      nodes19230 = node.contents();
      oldNodes.replaceWith(nodes19230);
    }));
  }
  renderControl5973();
  root28474.append(el);
  callback(root28474); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root28476 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node13269 = $("<div>");
  node13269.attr('style', "height: 345px; margin-left: 25px; margin-top: 10px");
  
  
  var node13271 = mobl.loadingSpan();
  node13269.append(node13271);
  var list2998;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2998 = function() {
    var subs__ = listSubs__;
    list2998 = tabs.get();
    list2998.list(function(results3203) {
      node13271.empty();
      for(var i2998 = 0; i2998 < results3203.length; i2998++) {
        (function() {
          var iternode2998 = $("<span>");
          node13271.append(iternode2998);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3203), i2998), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3203), i2998), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3203), i2998), "_3");
          
          var tmp33841 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp33841.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp33841.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp33841.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp33841.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp33844 = mobl.ref(null);
          
          
          var tmp33843 = mobl.ref(null);
          
          
          var tmp33842 = mobl.ref(null);
          
          var nodes19234 = $("<span>");
          iternode2998.append(nodes19234);
          subs__.addSub((mobl.block)(tmp33841, tmp33842, tmp33843, tmp33844, function(_, callback) {
            var root28480 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes19235 = $("<span>");
            root28480.append(nodes19235);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root28481 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes19236 = $("<span>");
              root28481.append(nodes19236);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl5974();
              }));
              
              function renderControl5974() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root28482 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root28482); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19236;
                  nodes19236 = node.contents();
                  oldNodes.replaceWith(nodes19236);
                }));
              }
              renderControl5974();
              callback(root28481); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19235;
              nodes19235 = node.contents();
              oldNodes.replaceWith(nodes19235);
            }));
            callback(root28480); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes19234;
            nodes19234 = node.contents();
            oldNodes.replaceWith(nodes19234);
          }));
          
          var oldNodes = iternode2998;
          iternode2998 = iternode2998.contents();
          oldNodes.replaceWith(iternode2998);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2998.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2998(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2998(true); }));
    });
  };
  renderList2998();
  
  root28476.append(node13269);
  
  var tmp33853 = mobl.ref(null);
  
  
  var tmp33852 = mobl.ref(null);
  
  
  var tmp33851 = mobl.ref(null);
  
  var nodes19231 = $("<span>");
  root28476.append(nodes19231);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp33851, tmp33852, tmp33853, function(_, callback) {
    var root28477 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node13270 = mobl.loadingSpan();
    root28477.append(node13270);
    var list2997;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2997 = function() {
      var subs__ = listSubs__;
      list2997 = tabs.get();
      list2997.list(function(results3202) {
        node13270.empty();
        for(var i2997 = 0; i2997 < results3202.length; i2997++) {
          (function() {
            var iternode2997 = $("<span>");
            node13270.append(iternode2997);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3202), i2997), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3202), i2997), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3202), i2997), "_3");
            
            var tmp33848 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp33848.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp33848.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp33848.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp33848.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp33847 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp33850 = mobl.ref(null);
            
            
            var tmp33849 = mobl.ref(null);
            
            var nodes19232 = $("<span>");
            iternode2997.append(nodes19232);
            subs__.addSub((mobl.span)(tmp33848, tmp33849, tmp33847, tmp33850, function(_, callback) {
              var root28478 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp33846 = mobl.ref(null);
              
              
              var tmp33845 = mobl.ref(null);
              
              var nodes19233 = $("<span>");
              root28478.append(nodes19233);
              subs__.addSub((mobl.label)(tabName, tmp33845, tmp33846, function(_, callback) {
                var root28479 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root28479); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes19233;
                nodes19233 = node.contents();
                oldNodes.replaceWith(nodes19233);
              }));
              callback(root28478); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes19232;
              nodes19232 = node.contents();
              oldNodes.replaceWith(nodes19232);
            }));
            
            var oldNodes = iternode2997;
            iternode2997 = iternode2997.contents();
            oldNodes.replaceWith(iternode2997);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2997.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2997(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2997(true); }));
      });
    };
    renderList2997();
    
    callback(root28477); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19231;
    nodes19231 = node.contents();
    oldNodes.replaceWith(nodes19231);
  }));
  callback(root28476); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root28483 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13272 = $("<div>");
  node13272.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node13272.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root28483.append(node13272);
  callback(root28483); return subs__;
  
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
