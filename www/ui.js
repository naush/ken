mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root35968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16394 = $("<span>");
  root35968.append(node16394);
  var condSubs2990 = new mobl.CompSubscription();
  subs__.addSub(condSubs2990);
  var oldValue2990;
  var renderCond2990 = function() {
    var value6772 = value.get();
    if(oldValue2990 === value6772) return;
    oldValue2990 = value6772;
    var subs__ = condSubs2990;
    subs__.unsubscribe();
    node16394.empty();
    if(value6772) {
      var nodes24577 = $("<span>");
      node16394.append(nodes24577);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl7425();
      }));
      
      function renderControl7425() {
        subs__.addSub((elements)(function(elements, callback) {
          var root35969 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root35969); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24577;
          nodes24577 = node.contents();
          oldNodes.replaceWith(nodes24577);
        }));
      }
      renderControl7425();
      
      
    } else {
      
      var tmp43665 = mobl.ref(null);
      
      
      var tmp43664 = mobl.ref(null);
      
      
      var tmp43663 = mobl.ref(null);
      
      var nodes24578 = $("<span>");
      node16394.append(nodes24578);
      subs__.addSub((mobl.block)(style, tmp43663, tmp43664, tmp43665, function(_, callback) {
        var root35970 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp43655 = mobl.ref(null);
        
        
        var tmp43654 = mobl.ref(null);
        
        var nodes24579 = $("<span>");
        root35970.append(nodes24579);
        subs__.addSub((mobl.label)(loadingMessage, tmp43654, tmp43655, function(_, callback) {
          var root35971 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root35971); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24579;
          nodes24579 = node.contents();
          oldNodes.replaceWith(nodes24579);
        }));
        
        var tmp43657 = mobl.ref("middle");
        
        
        var tmp43656 = mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw==");
        
        
        var tmp43662 = mobl.ref(null);
        
        
        var tmp43661 = mobl.ref(null);
        
        
        var tmp43660 = mobl.ref(null);
        
        
        var tmp43659 = mobl.ref(null);
        
        
        var tmp43658 = mobl.ref(null);
        
        var nodes24580 = $("<span>");
        root35970.append(nodes24580);
        subs__.addSub((ui.image)(tmp43656, tmp43658, tmp43659, tmp43660, tmp43661, tmp43657, tmp43662, function(_, callback) {
          var root35972 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root35972); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24580;
          nodes24580 = node.contents();
          oldNodes.replaceWith(nodes24580);
        }));
        callback(root35970); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes24578;
        nodes24578 = node.contents();
        oldNodes.replaceWith(nodes24578);
      }));
      
      
    }
  };
  renderCond2990();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond2990();
  }));
  
  callback(root35968); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root35973 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16395 = $("<div>");
  
  var ref17399 = mobl.ref(ui.headerStyle);
  if(ref17399.get() !== null) {
    node16395.attr('class', ref17399.get());
    subs__.addSub(ref17399.addEventListener('change', function(_, ref, val) {
      node16395.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17399.rebind());
  
  var val9596 = onclick.get();
  if(val9596 !== null) {
    subs__.addSub(mobl.domBind(node16395, 'tap', val9596));
  }
  
  
  var node16396 = $("<div>");
  
  var ref17398 = mobl.ref(ui.headerContainerStyle);
  if(ref17398.get() !== null) {
    node16396.attr('class', ref17398.get());
    subs__.addSub(ref17398.addEventListener('change', function(_, ref, val) {
      node16396.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17398.rebind());
  
  
  var node16397 = $("<div>");
  
  var ref17396 = text;
  node16397.text(""+ref17396.get());
  var ignore3490 = false;
  subs__.addSub(ref17396.addEventListener('change', function(_, ref, val) {
    if(ignore3490) return;
    node16397.text(""+val);
  }));
  subs__.addSub(ref17396.rebind());
  
  
  var ref17397 = mobl.ref(ui.headerTextStyle);
  if(ref17397.get() !== null) {
    node16397.attr('class', ref17397.get());
    subs__.addSub(ref17397.addEventListener('change', function(_, ref, val) {
      node16397.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17397.rebind());
  
  node16396.append(node16397);
  node16395.append(node16396);
  var nodes24581 = $("<span>");
  node16395.append(nodes24581);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7426();
  }));
  
  function renderControl7426() {
    subs__.addSub((elements)(function(elements, callback) {
      var root35974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root35974); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24581;
      nodes24581 = node.contents();
      oldNodes.replaceWith(nodes24581);
    }));
  }
  renderControl7426();
  root35973.append(node16395);
  callback(root35973); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root35975 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref17400 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref17400.get() !== null) {
    sp.attr('class', ref17400.get());
    subs__.addSub(ref17400.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref17400.rebind());
  
  var val9597 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val9597 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val9597));
  }
  
  var val9598 = function(event, callback) {
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
  if(val9598 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val9598));
  }
  
  var val9599 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after3154(result__) {
                    var tmp43755 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after3154);if(result__ !== undefined) after3154(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val9599 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val9599));
  }
  
  var val9600 = function(event, callback) {
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
  if(val9600 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val9600));
  }
  
  var ref17401 = text;
  sp.text(""+ref17401.get());
  var ignore3491 = false;
  subs__.addSub(ref17401.addEventListener('change', function(_, ref, val) {
    if(ignore3491) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref17401.rebind());
  
  
  root35975.append(sp);
  callback(root35975); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root35976 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24582 = $("<span>");
  root35976.append(nodes24582);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root35977 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root35977); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24582;
    nodes24582 = node.contents();
    oldNodes.replaceWith(nodes24582);
  }));
  callback(root35976); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root35978 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24583 = $("<span>");
  root35978.append(nodes24583);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root35979 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root35979); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24583;
    nodes24583 = node.contents();
    oldNodes.replaceWith(nodes24583);
  }));
  callback(root35978); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root35980 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16398 = $("<ul>");
  
  var ref17402 = mobl.ref(ui.groupStyle);
  if(ref17402.get() !== null) {
    node16398.attr('class', ref17402.get());
    subs__.addSub(ref17402.addEventListener('change', function(_, ref, val) {
      node16398.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17402.rebind());
  
  var nodes24584 = $("<span>");
  node16398.append(nodes24584);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7427();
  }));
  
  function renderControl7427() {
    subs__.addSub((elements)(function(elements, callback) {
      var root35981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root35981); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24584;
      nodes24584 = node.contents();
      oldNodes.replaceWith(nodes24584);
    }));
  }
  renderControl7427();
  root35980.append(node16398);
  callback(root35980); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root35982 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16399 = $("<img>");
  
  var ref17403 = url;
  if(ref17403.get() !== null) {
    node16399.attr('src', ref17403.get());
    subs__.addSub(ref17403.addEventListener('change', function(_, ref, val) {
      node16399.attr('src', val);
    }));
    
  }
  subs__.addSub(ref17403.rebind());
  
  var ref17404 = width;
  if(ref17404.get() !== null) {
    node16399.attr('width', ref17404.get());
    subs__.addSub(ref17404.addEventListener('change', function(_, ref, val) {
      node16399.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17404.rebind());
  
  var ref17405 = height;
  if(ref17405.get() !== null) {
    node16399.attr('height', ref17405.get());
    subs__.addSub(ref17405.addEventListener('change', function(_, ref, val) {
      node16399.attr('height', val);
    }));
    
  }
  subs__.addSub(ref17405.rebind());
  
  var ref17406 = style;
  if(ref17406.get() !== null) {
    node16399.attr('class', ref17406.get());
    subs__.addSub(ref17406.addEventListener('change', function(_, ref, val) {
      node16399.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17406.rebind());
  
  var val9601 = onclick.get();
  if(val9601 !== null) {
    subs__.addSub(mobl.domBind(node16399, 'tap', val9601));
  }
  
  var ref17407 = valign;
  if(ref17407.get() !== null) {
    node16399.attr('valign', ref17407.get());
    subs__.addSub(ref17407.addEventListener('change', function(_, ref, val) {
      node16399.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref17407.rebind());
  
  var ref17408 = align;
  if(ref17408.get() !== null) {
    node16399.attr('align', ref17408.get());
    subs__.addSub(ref17408.addEventListener('change', function(_, ref, val) {
      node16399.attr('align', val);
    }));
    
  }
  subs__.addSub(ref17408.rebind());
  
  root35982.append(node16399);
  callback(root35982); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root35983 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref17409 = mobl.ref(ui.itemStyle);
  if(ref17409.get() !== null) {
    el.attr('class', ref17409.get());
    subs__.addSub(ref17409.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17409.rebind());
  
  var ref17410 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref17410.get() !== null) {
    el.attr('class', ref17410.get());
    subs__.addSub(ref17410.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref17410.rebind());
  
  var val9602 = onswipe.get();
  if(val9602 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val9602));
  }
  
  var val9603 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp43756 = result__;
                                           function after3155(result__) {
                                             var tmp43757 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after3155);if(result__ !== undefined) after3155(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp43758 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9603 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9603));
  }
  
  var nodes24585 = $("<span>");
  el.append(nodes24585);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7428();
  }));
  
  function renderControl7428() {
    subs__.addSub((elements)(function(elements, callback) {
      var root35984 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root35984); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24585;
      nodes24585 = node.contents();
      oldNodes.replaceWith(nodes24585);
    }));
  }
  renderControl7428();
  root35983.append(el);
  callback(root35983); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root35985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16400 = $("<input>");
  node16400.attr('type', "checkbox");
  
  var ref17412 = b;
  node16400.attr('checked', !!ref17412.get());
  subs__.addSub(ref17412.addEventListener('change', function(_, ref, val) {
    if(ref === ref17412) node16400.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node16400, 'change', function() {
    b.set(!!node16400.attr('checked'));
  }));
  
  var val9605 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val9605 !== null) {
    subs__.addSub(mobl.domBind(node16400, 'tap', val9605));
  }
  
  var val9606 = onchange.get();
  if(val9606 !== null) {
    subs__.addSub(mobl.domBind(node16400, 'change', val9606));
  }
  
  root35985.append(node16400);
  
  root35985.append(" ");
  
  var node16401 = $("<span>");
  
  var ref17411 = label;
  node16401.text(""+ref17411.get());
  var ignore3492 = false;
  subs__.addSub(ref17411.addEventListener('change', function(_, ref, val) {
    if(ignore3492) return;
    node16401.text(""+val);
  }));
  subs__.addSub(ref17411.rebind());
  
  
  var val9604 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after3156(result__) {
                    var tmp43759 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after3156);if(result__ !== undefined) after3156(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val9604 !== null) {
    subs__.addSub(mobl.domBind(node16401, 'tap', val9604));
  }
  
  root35985.append(node16401);
  callback(root35985); return subs__;
  
  
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
  var root35986 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16402 = $("<span>");
  root35986.append(node16402);
  var condSubs2991 = new mobl.CompSubscription();
  subs__.addSub(condSubs2991);
  var oldValue2991;
  var renderCond2991 = function() {
    var value6773 = label.get();
    if(oldValue2991 === value6773) return;
    oldValue2991 = value6773;
    var subs__ = condSubs2991;
    subs__.unsubscribe();
    node16402.empty();
    if(value6773) {
      
      var tmp43666 = mobl.ref(null);
      
      var nodes24586 = $("<span>");
      node16402.append(nodes24586);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp43666, function(_, callback) {
        var root35987 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35987); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24586;
        nodes24586 = node.contents();
        oldNodes.replaceWith(nodes24586);
      }));
      
      
    } else {
      
    }
  };
  renderCond2991();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2991();
  }));
  
  
  var node16403 = $("<span>");
  root35986.append(node16403);
  var condSubs2992 = new mobl.CompSubscription();
  subs__.addSub(condSubs2992);
  var oldValue2992;
  var renderCond2992 = function() {
    var value6774 = validator.get();
    if(oldValue2992 === value6774) return;
    oldValue2992 = value6774;
    var subs__ = condSubs2992;
    subs__.unsubscribe();
    node16403.empty();
    if(value6774) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after3160(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp43760 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node16404 = $("<input>");
        node16404.attr('type', "text");
        
        var ref17413 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref17413.get() !== null) {
          node16404.attr('class', ref17413.get());
          subs__.addSub(ref17413.addEventListener('change', function(_, ref, val) {
            node16404.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node16404.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node16404.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node16404.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref17413.rebind());
        
        var ref17414 = placeholder;
        if(ref17414.get() !== null) {
          node16404.attr('placeholder', ref17414.get());
          subs__.addSub(ref17414.addEventListener('change', function(_, ref, val) {
            node16404.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref17414.rebind());
        
        var ref17415 = temp;
        node16404.val(""+ref17415.get());
        var ignore3493 = false;
        subs__.addSub(ref17415.addEventListener('change', function(_, ref, val) {
          if(ignore3493) return;
          node16404.val(""+val);
        }));
        subs__.addSub(ref17415.rebind());
        
        subs__.addSub(mobl.domBind(node16404, 'keyup change', function() {
          ignore3493 = true;
          temp.set(mobl.stringTomobl__String(node16404.val()));
          ignore3493 = false;
        }));
        
        
        var val9607 = onchange.get();
        if(val9607 !== null) {
          subs__.addSub(mobl.domBind(node16404, 'change', val9607));
        }
        
        var val9608 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3157(result__) {
                          var tmp43761 = result__;
                          function after3158(result__) {
                            var tmp43762 = result__;
                            var result__ = tmp43762;
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
                          var result__ = validator.get()(temp.get(), after3158);if(result__ !== undefined) after3158(result__);
                        }
                        var result__ = onkeyup.get()(event, after3157);if(result__ !== undefined) after3157(result__);
                      } else {
                        {
                          function after3159(result__) {
                            var tmp43762 = result__;
                            var result__ = tmp43762;
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
                          var result__ = validator.get()(temp.get(), after3159);if(result__ !== undefined) after3159(result__);
                        }
                      }
                    };
        if(val9608 !== null) {
          subs__.addSub(mobl.domBind(node16404, 'keyup', val9608));
        }
        
        var val9609 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val9609 !== null) {
          subs__.addSub(mobl.domBind(node16404, 'blur', val9609));
        }
        
        node16403.append(node16404);
        
        var tmp43667 = mobl.ref(null);
        
        var nodes24587 = $("<span>");
        node16403.append(nodes24587);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp43667, function(_, callback) {
          var root35988 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root35988); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24587;
          nodes24587 = node.contents();
          oldNodes.replaceWith(nodes24587);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after3160);if(result__ !== undefined) after3160(result__);
    } else {
      
      var node16405 = $("<input>");
      node16405.attr('type', "text");
      
      var ref17416 = style;
      if(ref17416.get() !== null) {
        node16405.attr('class', ref17416.get());
        subs__.addSub(ref17416.addEventListener('change', function(_, ref, val) {
          node16405.attr('class', val);
        }));
        
      }
      subs__.addSub(ref17416.rebind());
      
      var ref17417 = placeholder;
      if(ref17417.get() !== null) {
        node16405.attr('placeholder', ref17417.get());
        subs__.addSub(ref17417.addEventListener('change', function(_, ref, val) {
          node16405.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref17417.rebind());
      
      var ref17418 = s;
      node16405.val(""+ref17418.get());
      var ignore3494 = false;
      subs__.addSub(ref17418.addEventListener('change', function(_, ref, val) {
        if(ignore3494) return;
        node16405.val(""+val);
      }));
      subs__.addSub(ref17418.rebind());
      
      subs__.addSub(mobl.domBind(node16405, 'keyup change', function() {
        ignore3494 = true;
        s.set(mobl.stringTomobl__String(node16405.val()));
        ignore3494 = false;
      }));
      
      
      var val9610 = onchange.get();
      if(val9610 !== null) {
        subs__.addSub(mobl.domBind(node16405, 'change', val9610));
      }
      
      var val9611 = onkeyup.get();
      if(val9611 !== null) {
        subs__.addSub(mobl.domBind(node16405, 'keyup', val9611));
      }
      
      var val9612 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val9612 !== null) {
        subs__.addSub(mobl.domBind(node16405, 'blur', val9612));
      }
      
      node16403.append(node16405);
      
      
    }
  };
  renderCond2992();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond2992();
  }));
  
  callback(root35986); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root35989 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24588 = $("<span>");
  root35989.append(nodes24588);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root35990 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root35990); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24588;
    nodes24588 = node.contents();
    oldNodes.replaceWith(nodes24588);
  }));
  callback(root35989); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root35991 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after3161(result__) {
      var tmp43763 = result__;
      var result__ = tmp43763;
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
    var result__ = validator.get()(n2, after3161);if(result__ !== undefined) after3161(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes24589 = $("<span>");
  root35991.append(nodes24589);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root35992 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root35992); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24589;
    nodes24589 = node.contents();
    oldNodes.replaceWith(nodes24589);
  }));
  callback(root35991); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root35993 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16406 = $("<span>");
  root35993.append(node16406);
  var condSubs2993 = new mobl.CompSubscription();
  subs__.addSub(condSubs2993);
  var oldValue2993;
  var renderCond2993 = function() {
    var value6775 = label.get();
    if(oldValue2993 === value6775) return;
    oldValue2993 = value6775;
    var subs__ = condSubs2993;
    subs__.unsubscribe();
    node16406.empty();
    if(value6775) {
      
      var node16407 = $("<span>");
      node16407.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref17422 = label;
      node16407.text(""+ref17422.get());
      var ignore3496 = false;
      subs__.addSub(ref17422.addEventListener('change', function(_, ref, val) {
        if(ignore3496) return;
        node16407.text(""+val);
      }));
      subs__.addSub(ref17422.rebind());
      
      
      node16406.append(node16407);
      
      var node16408 = $("<span>");
      node16408.attr('style', "float: left");
      
      
      var node16409 = $("<input>");
      node16409.attr('type', "password");
      
      var ref17419 = style;
      if(ref17419.get() !== null) {
        node16409.attr('class', ref17419.get());
        subs__.addSub(ref17419.addEventListener('change', function(_, ref, val) {
          node16409.attr('class', val);
        }));
        
      }
      subs__.addSub(ref17419.rebind());
      
      var ref17420 = placeholder;
      if(ref17420.get() !== null) {
        node16409.attr('placeholder', ref17420.get());
        subs__.addSub(ref17420.addEventListener('change', function(_, ref, val) {
          node16409.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref17420.rebind());
      
      var ref17421 = s;
      node16409.val(""+ref17421.get());
      var ignore3495 = false;
      subs__.addSub(ref17421.addEventListener('change', function(_, ref, val) {
        if(ignore3495) return;
        node16409.val(""+val);
      }));
      subs__.addSub(ref17421.rebind());
      
      subs__.addSub(mobl.domBind(node16409, 'keyup change', function() {
        ignore3495 = true;
        s.set(mobl.stringTomobl__String(node16409.val()));
        ignore3495 = false;
      }));
      
      
      var val9613 = onchange.get();
      if(val9613 !== null) {
        subs__.addSub(mobl.domBind(node16409, 'change', val9613));
      }
      
      var val9614 = onkeyup.get();
      if(val9614 !== null) {
        subs__.addSub(mobl.domBind(node16409, 'keyup', val9614));
      }
      
      var val9615 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val9615 !== null) {
        subs__.addSub(mobl.domBind(node16409, 'blur', val9615));
      }
      
      node16408.append(node16409);
      node16406.append(node16408);
      
      
      
      
    } else {
      
      var node16410 = $("<input>");
      node16410.attr('type', "password");
      
      var ref17423 = style;
      if(ref17423.get() !== null) {
        node16410.attr('class', ref17423.get());
        subs__.addSub(ref17423.addEventListener('change', function(_, ref, val) {
          node16410.attr('class', val);
        }));
        
      }
      subs__.addSub(ref17423.rebind());
      
      var ref17424 = placeholder;
      if(ref17424.get() !== null) {
        node16410.attr('placeholder', ref17424.get());
        subs__.addSub(ref17424.addEventListener('change', function(_, ref, val) {
          node16410.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref17424.rebind());
      
      var ref17425 = s;
      node16410.val(""+ref17425.get());
      var ignore3497 = false;
      subs__.addSub(ref17425.addEventListener('change', function(_, ref, val) {
        if(ignore3497) return;
        node16410.val(""+val);
      }));
      subs__.addSub(ref17425.rebind());
      
      subs__.addSub(mobl.domBind(node16410, 'keyup change', function() {
        ignore3497 = true;
        s.set(mobl.stringTomobl__String(node16410.val()));
        ignore3497 = false;
      }));
      
      
      var val9616 = onchange.get();
      if(val9616 !== null) {
        subs__.addSub(mobl.domBind(node16410, 'change', val9616));
      }
      
      var val9617 = onkeyup.get();
      if(val9617 !== null) {
        subs__.addSub(mobl.domBind(node16410, 'keyup', val9617));
      }
      
      var val9618 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val9618 !== null) {
        subs__.addSub(mobl.domBind(node16410, 'blur', val9618));
      }
      
      node16406.append(node16410);
      
      
    }
  };
  renderCond2993();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2993();
  }));
  
  callback(root35993); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root35994 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref17430 = style;
  if(ref17430.get() !== null) {
    sel.attr('class', ref17430.get());
    subs__.addSub(ref17430.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17430.rebind());
  
  var val9619 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after3162(result__) {
                    var tmp43765 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after3162);if(result__ !== undefined) after3162(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val9619 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val9619));
  }
  
  
  var node16411 = mobl.loadingSpan();
  sel.append(node16411);
  var list3695;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList3695 = function() {
    var subs__ = listSubs__;
    list3695 = options.get();
    list3695.list(function(results3900) {
      node16411.empty();
      for(var i3695 = 0; i3695 < results3900.length; i3695++) {
        (function() {
          var iternode3695 = $("<span>");
          node16411.append(iternode3695);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results3900), i3695), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results3900), i3695), "_2");
          
          var node16412 = $("<option>");
          
          var ref17426 = optionDescription;
          node16412.text(""+ref17426.get());
          var ignore3498 = false;
          subs__.addSub(ref17426.addEventListener('change', function(_, ref, val) {
            if(ignore3498) return;
            node16412.text(""+val);
          }));
          subs__.addSub(ref17426.rebind());
          
          
          var ref17427 = optionStyle;
          if(ref17427.get() !== null) {
            node16412.attr('class', ref17427.get());
            subs__.addSub(ref17427.addEventListener('change', function(_, ref, val) {
              node16412.attr('class', val);
            }));
            
          }
          subs__.addSub(ref17427.rebind());
          
          var ref17428 = optionValue;
          if(ref17428.get() !== null) {
            node16412.attr('value', ref17428.get());
            subs__.addSub(ref17428.addEventListener('change', function(_, ref, val) {
              node16412.attr('value', val);
            }));
            
          }
          subs__.addSub(ref17428.rebind());
          
          var ref17429 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref17429.get() !== null) {
            node16412.attr('selected', ref17429.get());
            subs__.addSub(ref17429.addEventListener('change', function(_, ref, val) {
              node16412.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node16412.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node16412.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref17429.rebind());
          
          iternode3695.append(node16412);
          
          var oldNodes = iternode3695;
          iternode3695 = iternode3695.contents();
          oldNodes.replaceWith(iternode3695);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list3695.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3695(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3695(true); }));
    });
  };
  renderList3695();
  
  root35994.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root35994); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root35995 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp43676 = mobl.ref(null);
  
  
  var tmp43675 = mobl.ref(null);
  
  
  var tmp43674 = mobl.ref(null);
  
  var nodes24590 = $("<span>");
  root35995.append(nodes24590);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp43674, tmp43675, tmp43676, function(_, callback) {
    var root35996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16413 = mobl.loadingSpan();
    root35996.append(node16413);
    var list3696;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3696 = function() {
      var subs__ = listSubs__;
      list3696 = tabs.get();
      list3696.list(function(results3901) {
        node16413.empty();
        for(var i3696 = 0; i3696 < results3901.length; i3696++) {
          (function() {
            var iternode3696 = $("<span>");
            node16413.append(iternode3696);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3901), i3696), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3901), i3696), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3901), i3696), "_3");
            
            var tmp43671 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp43671.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp43671.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp43671.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp43671.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp43670 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp43673 = mobl.ref(null);
            
            
            var tmp43672 = mobl.ref(null);
            
            var nodes24591 = $("<span>");
            iternode3696.append(nodes24591);
            subs__.addSub((mobl.span)(tmp43671, tmp43672, tmp43670, tmp43673, function(_, callback) {
              var root35997 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43669 = mobl.ref(null);
              
              
              var tmp43668 = mobl.ref(null);
              
              var nodes24592 = $("<span>");
              root35997.append(nodes24592);
              subs__.addSub((mobl.label)(tabName, tmp43668, tmp43669, function(_, callback) {
                var root35998 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root35998); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24592;
                nodes24592 = node.contents();
                oldNodes.replaceWith(nodes24592);
              }));
              callback(root35997); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24591;
              nodes24591 = node.contents();
              oldNodes.replaceWith(nodes24591);
            }));
            
            var oldNodes = iternode3696;
            iternode3696 = iternode3696.contents();
            oldNodes.replaceWith(iternode3696);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3696.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3696(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3696(true); }));
      });
    };
    renderList3696();
    
    callback(root35996); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24590;
    nodes24590 = node.contents();
    oldNodes.replaceWith(nodes24590);
  }));
  
  var node16414 = mobl.loadingSpan();
  root35995.append(node16414);
  var list3697;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList3697 = function() {
    var subs__ = listSubs__;
    list3697 = tabs.get();
    list3697.list(function(results3902) {
      node16414.empty();
      for(var i3697 = 0; i3697 < results3902.length; i3697++) {
        (function() {
          var iternode3697 = $("<span>");
          node16414.append(iternode3697);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3902), i3697), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3902), i3697), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3902), i3697), "_3");
          
          var tmp43677 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp43677.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp43677.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp43677.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp43677.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp43680 = mobl.ref(null);
          
          
          var tmp43679 = mobl.ref(null);
          
          
          var tmp43678 = mobl.ref(null);
          
          var nodes24593 = $("<span>");
          iternode3697.append(nodes24593);
          subs__.addSub((mobl.block)(tmp43677, tmp43678, tmp43679, tmp43680, function(_, callback) {
            var root35999 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes24594 = $("<span>");
            root35999.append(nodes24594);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root36000 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24595 = $("<span>");
              root36000.append(nodes24595);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl7429();
              }));
              
              function renderControl7429() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root36001 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36001); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24595;
                  nodes24595 = node.contents();
                  oldNodes.replaceWith(nodes24595);
                }));
              }
              renderControl7429();
              callback(root36000); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24594;
              nodes24594 = node.contents();
              oldNodes.replaceWith(nodes24594);
            }));
            callback(root35999); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes24593;
            nodes24593 = node.contents();
            oldNodes.replaceWith(nodes24593);
          }));
          
          var oldNodes = iternode3697;
          iternode3697 = iternode3697.contents();
          oldNodes.replaceWith(iternode3697);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list3697.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3697(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3697(true); }));
    });
  };
  renderList3697();
  
  callback(root35995); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root36002 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16415 = $("<div>");
  
  var ref17434 = mobl.ref(ui.searchboxStyle);
  if(ref17434.get() !== null) {
    node16415.attr('class', ref17434.get());
    subs__.addSub(ref17434.addEventListener('change', function(_, ref, val) {
      node16415.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17434.rebind());
  
  
  var node16416 = $("<input>");
  node16416.attr('type', "search");
  
  var ref17431 = mobl.ref(ui.searchBoxInputStyle);
  if(ref17431.get() !== null) {
    node16416.attr('class', ref17431.get());
    subs__.addSub(ref17431.addEventListener('change', function(_, ref, val) {
      node16416.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17431.rebind());
  
  var ref17432 = placeholder;
  if(ref17432.get() !== null) {
    node16416.attr('placeholder', ref17432.get());
    subs__.addSub(ref17432.addEventListener('change', function(_, ref, val) {
      node16416.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref17432.rebind());
  
  var ref17433 = s;
  node16416.val(""+ref17433.get());
  var ignore3499 = false;
  subs__.addSub(ref17433.addEventListener('change', function(_, ref, val) {
    if(ignore3499) return;
    node16416.val(""+val);
  }));
  subs__.addSub(ref17433.rebind());
  
  subs__.addSub(mobl.domBind(node16416, 'keyup change', function() {
    ignore3499 = true;
    s.set(mobl.stringTomobl__String(node16416.val()));
    ignore3499 = false;
  }));
  
  
  var val9620 = onsearch.get();
  if(val9620 !== null) {
    subs__.addSub(mobl.domBind(node16416, 'change', val9620));
  }
  
  var val9621 = onkeyup.get();
  if(val9621 !== null) {
    subs__.addSub(mobl.domBind(node16416, 'keyup', val9621));
  }
  node16416.attr('autocorrect', false);
  node16416.attr('autocapitalize', false);
  node16416.attr('autocomplete', false);
  
  node16415.append(node16416);
  root36002.append(node16415);
  callback(root36002); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root36003 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref17435 = mobl.ref(ui.contextMenuStyle);
  if(ref17435.get() !== null) {
    menu.attr('class', ref17435.get());
    subs__.addSub(ref17435.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17435.rebind());
  
  var nodes24596 = $("<span>");
  menu.append(nodes24596);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7430();
  }));
  
  function renderControl7430() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36004 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36004); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24596;
      nodes24596 = node.contents();
      oldNodes.replaceWith(nodes24596);
    }));
  }
  renderControl7430();
  root36003.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val9622 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp43768 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val9622 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val9622));
  }
  
  root36003.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root36003); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root36005 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp43754 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp43754.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node16417 = $("<span>");
  root36005.append(node16417);
  var condSubs2994 = new mobl.CompSubscription();
  subs__.addSub(condSubs2994);
  var oldValue2994;
  var renderCond2994 = function() {
    var value6776 = tmp43754.get();
    if(oldValue2994 === value6776) return;
    oldValue2994 = value6776;
    var subs__ = condSubs2994;
    subs__.unsubscribe();
    node16417.empty();
    if(value6776) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node16418 = $("<div>");
        node16418.attr('width', "100%");
        
        
        var node16419 = $("<div>");
        node16419.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes24599 = $("<span>");
        node16419.append(nodes24599);
        subs__.addSub((ui.group)(function(_, callback) {
          var root36008 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node16422 = mobl.loadingSpan();
          root36008.append(node16422);
          var list3698;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3698 = function() {
            var subs__ = listSubs__;
            list3698 = items.get();
            list3698.list(function(results3903) {
              node16422.empty();
              for(var i3698 = 0; i3698 < results3903.length; i3698++) {
                (function() {
                  var iternode3698 = $("<span>");
                  node16422.append(iternode3698);
                  var it;
                  it = mobl.ref(mobl.ref(results3903), i3698);
                  
                  var tmp43694 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp43694.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp43694.set(it.get() == current.get());
                  }));
                  
                  
                  var node16423 = $("<span>");
                  iternode3698.append(node16423);
                  var condSubs2996 = new mobl.CompSubscription();
                  subs__.addSub(condSubs2996);
                  var oldValue2996;
                  var renderCond2996 = function() {
                    var value6778 = tmp43694.get();
                    if(oldValue2996 === value6778) return;
                    oldValue2996 = value6778;
                    var subs__ = condSubs2996;
                    subs__.unsubscribe();
                    node16423.empty();
                    if(value6778) {
                      
                      var tmp43690 = mobl.ref(false);
                      
                      
                      var tmp43689 = mobl.ref(null);
                      
                      
                      var tmp43688 = mobl.ref(null);
                      
                      var nodes24600 = $("<span>");
                      node16423.append(nodes24600);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp43688, tmp43689, tmp43690, function(_, callback) {
                        var root36009 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes24601 = $("<span>");
                        root36009.append(nodes24601);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl7432();
                        }));
                        
                        function renderControl7432() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root36010 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root36010); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes24601;
                            nodes24601 = node.contents();
                            oldNodes.replaceWith(nodes24601);
                          }));
                        }
                        renderControl7432();
                        callback(root36009); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes24600;
                        nodes24600 = node.contents();
                        oldNodes.replaceWith(nodes24600);
                      }));
                      
                      
                    } else {
                      
                      var tmp43692 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp43691 = mobl.ref(true);
                      
                      
                      var tmp43693 = mobl.ref(null);
                      
                      var nodes24602 = $("<span>");
                      node16423.append(nodes24602);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43692, tmp43693, tmp43691, function(_, callback) {
                        var root36011 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes24603 = $("<span>");
                        root36011.append(nodes24603);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl7433();
                        }));
                        
                        function renderControl7433() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root36012 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root36012); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes24603;
                            nodes24603 = node.contents();
                            oldNodes.replaceWith(nodes24603);
                          }));
                        }
                        renderControl7433();
                        callback(root36011); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes24602;
                        nodes24602 = node.contents();
                        oldNodes.replaceWith(nodes24602);
                      }));
                      
                      
                    }
                  };
                  renderCond2996();
                  subs__.addSub(tmp43694.addEventListener('change', function() {
                    renderCond2996();
                  }));
                  
                  
                  var oldNodes = iternode3698;
                  iternode3698 = iternode3698.contents();
                  oldNodes.replaceWith(iternode3698);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list3698.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3698(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3698(true); }));
            });
          };
          renderList3698();
          
          callback(root36008); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes24599;
          nodes24599 = node.contents();
          oldNodes.replaceWith(nodes24599);
        }));
        node16418.append(node16419);
        
        var node16420 = $("<div>");
        node16420.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node16421 = $("<span>");
        node16420.append(node16421);
        var condSubs2995 = new mobl.CompSubscription();
        subs__.addSub(condSubs2995);
        var oldValue2995;
        var renderCond2995 = function() {
          var value6777 = current.get();
          if(oldValue2995 === value6777) return;
          oldValue2995 = value6777;
          var subs__ = condSubs2995;
          subs__.unsubscribe();
          node16421.empty();
          if(value6777) {
            var nodes24597 = $("<span>");
            node16421.append(nodes24597);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl7431();
            }));
            
            function renderControl7431() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root36006 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36006); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24597;
                nodes24597 = node.contents();
                oldNodes.replaceWith(nodes24597);
              }));
            }
            renderControl7431();
            
            
          } else {
            
            var tmp43695 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp43697 = mobl.ref(null);
            
            
            var tmp43696 = mobl.ref(null);
            
            var nodes24598 = $("<span>");
            node16421.append(nodes24598);
            subs__.addSub((mobl.label)(tmp43695, tmp43696, tmp43697, function(_, callback) {
              var root36007 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root36007); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes24598;
              nodes24598 = node.contents();
              oldNodes.replaceWith(nodes24598);
            }));
            
            
          }
        };
        renderCond2995();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond2995();
        }));
        
        node16418.append(node16420);
        node16417.append(node16418);
        
        
        
        
        
        
      });
    } else {
      var nodes24604 = $("<span>");
      node16417.append(nodes24604);
      subs__.addSub((ui.group)(function(_, callback) {
        var root36013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node16424 = mobl.loadingSpan();
        root36013.append(node16424);
        var list3699;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList3699 = function() {
          var subs__ = listSubs__;
          list3699 = items.get();
          list3699.list(function(results3904) {
            node16424.empty();
            for(var i3699 = 0; i3699 < results3904.length; i3699++) {
              (function() {
                var iternode3699 = $("<span>");
                node16424.append(iternode3699);
                var it;
                it = mobl.ref(mobl.ref(results3904), i3699);
                
                var tmp43681 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp43769 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp43683 = mobl.ref(false);
                
                
                var tmp43682 = mobl.ref(null);
                
                var nodes24605 = $("<span>");
                iternode3699.append(nodes24605);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43681, tmp43682, tmp43683, function(_, callback) {
                  var root36014 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24606 = $("<span>");
                  root36014.append(nodes24606);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl7434();
                  }));
                  
                  function renderControl7434() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root36015 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root36015); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24606;
                      nodes24606 = node.contents();
                      oldNodes.replaceWith(nodes24606);
                    }));
                  }
                  renderControl7434();
                  callback(root36014); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24605;
                  nodes24605 = node.contents();
                  oldNodes.replaceWith(nodes24605);
                }));
                
                var oldNodes = iternode3699;
                iternode3699 = iternode3699.contents();
                oldNodes.replaceWith(iternode3699);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list3699.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3699(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3699(true); }));
          });
        };
        renderList3699();
        
        callback(root36013); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes24604;
        nodes24604 = node.contents();
        oldNodes.replaceWith(nodes24604);
      }));
      
      
    }
  };
  renderCond2994();
  subs__.addSub(tmp43754.addEventListener('change', function() {
    renderCond2994();
  }));
  
  callback(root36005); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root36016 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp43686 = mobl.ref("Detail");
  
  
  var tmp43687 = mobl.ref(null);
  
  var nodes24607 = $("<span>");
  root36016.append(nodes24607);
  subs__.addSub((ui.header)(tmp43686, tmp43687, function(_, callback) {
    var root36017 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp43685 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp43684 = mobl.ref("Back");
    
    var nodes24608 = $("<span>");
    root36017.append(nodes24608);
    subs__.addSub((ui.backButton)(tmp43684, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp43685, function(_, callback) {
      var root36018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36018); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24608;
      nodes24608 = node.contents();
      oldNodes.replaceWith(nodes24608);
    }));
    callback(root36017); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24607;
    nodes24607 = node.contents();
    oldNodes.replaceWith(nodes24607);
  }));
  var nodes24609 = $("<span>");
  root36016.append(nodes24609);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl7435();
  }));
  
  function renderControl7435() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root36019 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36019); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24609;
      nodes24609 = node.contents();
      oldNodes.replaceWith(nodes24609);
    }));
  }
  renderControl7435();
  callback(root36016); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root36020 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes24610 = $("<span>");
  root36020.append(nodes24610);
  subs__.addSub((ui.group)(function(_, callback) {
    var root36021 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16425 = mobl.loadingSpan();
    root36021.append(node16425);
    var list3700;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3700 = function() {
      var subs__ = listSubs__;
      list3700 = coll.get();
      list3700.list(function(results3905) {
        node16425.empty();
        for(var i3700 = 0; i3700 < results3905.length; i3700++) {
          (function() {
            var iternode3700 = $("<span>");
            node16425.append(iternode3700);
            var it;
            it = mobl.ref(mobl.ref(results3905), i3700);
            
            var tmp43704 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp43704.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp43704.set(it.get() == selected.get());
            }));
            
            
            var node16426 = $("<span>");
            iternode3700.append(node16426);
            var condSubs2997 = new mobl.CompSubscription();
            subs__.addSub(condSubs2997);
            var oldValue2997;
            var renderCond2997 = function() {
              var value6779 = tmp43704.get();
              if(oldValue2997 === value6779) return;
              oldValue2997 = value6779;
              var subs__ = condSubs2997;
              subs__.unsubscribe();
              node16426.empty();
              if(value6779) {
                
                var tmp43700 = mobl.ref(false);
                
                
                var tmp43699 = mobl.ref(null);
                
                
                var tmp43698 = mobl.ref(null);
                
                var nodes24611 = $("<span>");
                node16426.append(nodes24611);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43698, tmp43699, tmp43700, function(_, callback) {
                  var root36022 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24612 = $("<span>");
                  root36022.append(nodes24612);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl7436();
                  }));
                  
                  function renderControl7436() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root36023 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root36023); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24612;
                      nodes24612 = node.contents();
                      oldNodes.replaceWith(nodes24612);
                    }));
                  }
                  renderControl7436();
                  callback(root36022); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24611;
                  nodes24611 = node.contents();
                  oldNodes.replaceWith(nodes24611);
                }));
                
                
              } else {
                
                var tmp43702 = mobl.ref(true);
                
                
                var tmp43701 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp43703 = mobl.ref(null);
                
                var nodes24613 = $("<span>");
                node16426.append(nodes24613);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43701, tmp43703, tmp43702, function(_, callback) {
                  var root36024 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24614 = $("<span>");
                  root36024.append(nodes24614);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl7437();
                  }));
                  
                  function renderControl7437() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root36025 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root36025); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24614;
                      nodes24614 = node.contents();
                      oldNodes.replaceWith(nodes24614);
                    }));
                  }
                  renderControl7437();
                  callback(root36024); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24613;
                  nodes24613 = node.contents();
                  oldNodes.replaceWith(nodes24613);
                }));
                
                
              }
            };
            renderCond2997();
            subs__.addSub(tmp43704.addEventListener('change', function() {
              renderCond2997();
            }));
            
            
            var oldNodes = iternode3700;
            iternode3700 = iternode3700.contents();
            oldNodes.replaceWith(iternode3700);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3700.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3700(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3700(true); }));
      });
    };
    renderList3700();
    
    callback(root36021); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24610;
    nodes24610 = node.contents();
    oldNodes.replaceWith(nodes24610);
  }));
  callback(root36020); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root36026 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes24615 = $("<span>");
    root36026.append(nodes24615);
    subs__.addSub((ui.group)(function(_, callback) {
      var root36027 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp43708 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp43708.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp43708.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp43708.set(coll.get().limit(n.get()));
      }));
      
      
      var node16427 = mobl.loadingSpan();
      root36027.append(node16427);
      var list3701;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList3701 = function() {
        var subs__ = listSubs__;
        list3701 = tmp43708.get();
        list3701.list(function(results3906) {
          node16427.empty();
          for(var i3701 = 0; i3701 < results3906.length; i3701++) {
            (function() {
              var iternode3701 = $("<span>");
              node16427.append(iternode3701);
              var it;
              it = mobl.ref(mobl.ref(results3906), i3701);
              
              var tmp43705 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp43707 = mobl.ref(false);
              
              
              var tmp43706 = mobl.ref(null);
              
              var nodes24616 = $("<span>");
              iternode3701.append(nodes24616);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43705, tmp43706, tmp43707, function(_, callback) {
                var root36028 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes24617 = $("<span>");
                root36028.append(nodes24617);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl7438();
                }));
                
                function renderControl7438() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root36029 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root36029); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes24617;
                    nodes24617 = node.contents();
                    oldNodes.replaceWith(nodes24617);
                  }));
                }
                renderControl7438();
                callback(root36028); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes24616;
                nodes24616 = node.contents();
                oldNodes.replaceWith(nodes24616);
              }));
              
              var oldNodes = iternode3701;
              iternode3701 = iternode3701.contents();
              oldNodes.replaceWith(iternode3701);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list3701.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3701(true); }));
          subs__.addSub(tmp43708.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3701(true); }));
        });
      };
      renderList3701();
      
      
      var tmp43711 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp43711.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp43711.set(n.get() < total.get());
      }));
      
      
      var node16428 = $("<span>");
      root36027.append(node16428);
      var condSubs2998 = new mobl.CompSubscription();
      subs__.addSub(condSubs2998);
      var oldValue2998;
      var renderCond2998 = function() {
        var value6780 = tmp43711.get();
        if(oldValue2998 === value6780) return;
        oldValue2998 = value6780;
        var subs__ = condSubs2998;
        subs__.unsubscribe();
        node16428.empty();
        if(value6780) {
          
          var node16429 = $("<li>");
          
          var ref17436 = mobl.ref(ui.loadMoreStyle);
          if(ref17436.get() !== null) {
            node16429.attr('class', ref17436.get());
            subs__.addSub(ref17436.addEventListener('change', function(_, ref, val) {
              node16429.attr('class', val);
            }));
            
          }
          subs__.addSub(ref17436.rebind());
          
          var val9623 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val9623 !== null) {
            subs__.addSub(mobl.domBind(node16429, 'tap', val9623));
          }
          
          
          var tmp43710 = mobl.ref(null);
          
          
          var tmp43709 = mobl.ref(null);
          
          var nodes24618 = $("<span>");
          node16429.append(nodes24618);
          subs__.addSub((mobl.label)(moreLabel, tmp43709, tmp43710, function(_, callback) {
            var root36030 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root36030); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes24618;
            nodes24618 = node.contents();
            oldNodes.replaceWith(nodes24618);
          }));
          node16428.append(node16429);
          
          
          
        } else {
          
        }
      };
      renderCond2998();
      subs__.addSub(tmp43711.addEventListener('change', function() {
        renderCond2998();
      }));
      
      callback(root36027); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24615;
      nodes24615 = node.contents();
      oldNodes.replaceWith(nodes24615);
    }));
    callback(root36026); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root36031 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24619 = $("<span>");
  root36031.append(nodes24619);
  subs__.addSub((ui.group)(function(_, callback) {
    var root36032 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16430 = mobl.loadingSpan();
    root36032.append(node16430);
    var list3702;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3702 = function() {
      var subs__ = listSubs__;
      list3702 = items.get();
      list3702.list(function(results3907) {
        node16430.empty();
        for(var i3702 = 0; i3702 < results3907.length; i3702++) {
          (function() {
            var iternode3702 = $("<span>");
            node16430.append(iternode3702);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results3907), i3702), "_1");it = mobl.ref(mobl.ref(mobl.ref(results3907), i3702), "_2");
            
            var tmp43715 = mobl.ref(false);
            
            
            var tmp43714 = mobl.ref(null);
            
            
            var tmp43713 = mobl.ref(null);
            
            var nodes24620 = $("<span>");
            iternode3702.append(nodes24620);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43713, tmp43714, tmp43715, function(_, callback) {
              var root36033 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43712 = mobl.ref(null);
              
              var nodes24621 = $("<span>");
              root36033.append(nodes24621);
              subs__.addSub((ui.checkBox)(checked, it, tmp43712, function(_, callback) {
                var root36034 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36034); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24621;
                nodes24621 = node.contents();
                oldNodes.replaceWith(nodes24621);
              }));
              callback(root36033); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24620;
              nodes24620 = node.contents();
              oldNodes.replaceWith(nodes24620);
            }));
            
            var oldNodes = iternode3702;
            iternode3702 = iternode3702.contents();
            oldNodes.replaceWith(iternode3702);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3702.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3702(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3702(true); }));
      });
    };
    renderList3702();
    
    callback(root36032); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24619;
    nodes24619 = node.contents();
    oldNodes.replaceWith(nodes24619);
  }));
  callback(root36031); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root36035 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll6438) {
    coll6438 = coll6438.reverse();
    function processOne780() {
      var it;
      it = coll6438.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll6438.length > 0) processOne780(); else rest780();
      
    }
    function rest780() {
      
      var tmp43719 = mobl.ref(null);
      
      var nodes24622 = $("<span>");
      root36035.append(nodes24622);
      subs__.addSub((ui.header)(title, tmp43719, function(_, callback) {
        var root36036 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp43716 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp43717 = mobl.ref(mobl._("Back", []));
        
        var nodes24623 = $("<span>");
        root36036.append(nodes24623);
        subs__.addSub((ui.backButton)(tmp43717, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp43716, function(_, callback) {
          var root36037 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36037); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24623;
          nodes24623 = node.contents();
          oldNodes.replaceWith(nodes24623);
        }));
        
        var tmp43718 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll6437) {
                               coll6437 = coll6437.reverse();
                               function processOne779() {
                                 var checked;var it;
                                 var tmp43771 = coll6437.pop();
                                 checked = tmp43771._1;it = tmp43771._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll6437.length > 0) processOne779(); else rest779();
                                   
                                 } else {
                                   {
                                     
                                     if(coll6437.length > 0) processOne779(); else rest779();
                                     
                                   }
                                 }
                               }
                               function rest779() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll6437.length > 0) processOne779(); else rest779();
                             });
                             
                           });
        
        var nodes24624 = $("<span>");
        root36036.append(nodes24624);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp43718, function(_, callback) {
          var root36038 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36038); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24624;
          nodes24624 = node.contents();
          oldNodes.replaceWith(nodes24624);
        }));
        callback(root36036); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes24622;
        nodes24622 = node.contents();
        oldNodes.replaceWith(nodes24622);
      }));
      var nodes24625 = $("<span>");
      root36035.append(nodes24625);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root36039 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36039); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24625;
        nodes24625 = node.contents();
        oldNodes.replaceWith(nodes24625);
      }));
      callback(root36035); return subs__;
      
      
    }
    if(coll6438.length > 0) processOne780(); else rest780();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root36040 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp43721 = mobl.ref(null);
  
  
  var tmp43720 = mobl.ref(null);
  
  var nodes24626 = $("<span>");
  root36040.append(nodes24626);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp43720, tmp43721, function(_, callback) {
    var root36041 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36041); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24626;
    nodes24626 = node.contents();
    oldNodes.replaceWith(nodes24626);
  }));
  
  var tmp43722 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp43722.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp43722.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp43722.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp43722.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp43722.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes24627 = $("<span>");
  root36040.append(nodes24627);
  subs__.addSub((ui.masterDetail)(tmp43722, masterItem, detailItem, function(_, callback) {
    var root36042 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36042); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24627;
    nodes24627 = node.contents();
    oldNodes.replaceWith(nodes24627);
  }));
  callback(root36040); return subs__;
  
  
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
  var root36043 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp43735 = mobl.ref(null);
  
  
  var tmp43734 = mobl.ref(null);
  
  
  var tmp43733 = mobl.ref(null);
  
  var nodes24628 = $("<span>");
  root36043.append(nodes24628);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp43733, tmp43734, tmp43735, function(_, callback) {
    var root36044 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16431 = mobl.loadingSpan();
    root36044.append(node16431);
    var list3703;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3703 = function() {
      var subs__ = listSubs__;
      list3703 = sections.get();
      list3703.list(function(results3908) {
        node16431.empty();
        for(var i3703 = 0; i3703 < results3908.length; i3703++) {
          (function() {
            var iternode3703 = $("<span>");
            node16431.append(iternode3703);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results3908), i3703), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results3908), i3703), "_2");
            
            var tmp43726 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp43726.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp43726.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp43726.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp43726.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp43725 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp43728 = mobl.ref(null);
            
            
            var tmp43727 = mobl.ref(null);
            
            var nodes24629 = $("<span>");
            iternode3703.append(nodes24629);
            subs__.addSub((mobl.span)(tmp43726, tmp43727, tmp43725, tmp43728, function(_, callback) {
              var root36045 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43724 = mobl.ref(null);
              
              
              var tmp43723 = mobl.ref(null);
              
              var nodes24630 = $("<span>");
              root36045.append(nodes24630);
              subs__.addSub((mobl.label)(sectionName, tmp43723, tmp43724, function(_, callback) {
                var root36046 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36046); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24630;
                nodes24630 = node.contents();
                oldNodes.replaceWith(nodes24630);
              }));
              callback(root36045); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24629;
              nodes24629 = node.contents();
              oldNodes.replaceWith(nodes24629);
            }));
            
            var tmp43729 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp43729.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp43729.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp43729.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp43729.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp43732 = mobl.ref(null);
            
            
            var tmp43731 = mobl.ref(null);
            
            
            var tmp43730 = mobl.ref(null);
            
            var nodes24631 = $("<span>");
            iternode3703.append(nodes24631);
            subs__.addSub((mobl.block)(tmp43729, tmp43730, tmp43731, tmp43732, function(_, callback) {
              var root36047 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24632 = $("<span>");
              root36047.append(nodes24632);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl7439();
              }));
              
              function renderControl7439() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root36048 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36048); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24632;
                  nodes24632 = node.contents();
                  oldNodes.replaceWith(nodes24632);
                }));
              }
              renderControl7439();
              callback(root36047); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24631;
              nodes24631 = node.contents();
              oldNodes.replaceWith(nodes24631);
            }));
            
            var oldNodes = iternode3703;
            iternode3703 = iternode3703.contents();
            oldNodes.replaceWith(iternode3703);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3703.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3703(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3703(true); }));
      });
    };
    renderList3703();
    
    callback(root36044); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24628;
    nodes24628 = node.contents();
    oldNodes.replaceWith(nodes24628);
  }));
  callback(root36043); return subs__;
  
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
  var root36049 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16432 = $("<table>");
  
  var ref17437 = mobl.ref(ui.tableStyle);
  if(ref17437.get() !== null) {
    node16432.attr('class', ref17437.get());
    subs__.addSub(ref17437.addEventListener('change', function(_, ref, val) {
      node16432.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17437.rebind());
  
  var nodes24633 = $("<span>");
  node16432.append(nodes24633);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7440();
  }));
  
  function renderControl7440() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36050); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24633;
      nodes24633 = node.contents();
      oldNodes.replaceWith(nodes24633);
    }));
  }
  renderControl7440();
  root36049.append(node16432);
  callback(root36049); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root36051 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16433 = $("<tr>");
  
  var ref17438 = mobl.ref(ui.trStyle);
  if(ref17438.get() !== null) {
    node16433.attr('class', ref17438.get());
    subs__.addSub(ref17438.addEventListener('change', function(_, ref, val) {
      node16433.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17438.rebind());
  
  var nodes24634 = $("<span>");
  node16433.append(nodes24634);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7441();
  }));
  
  function renderControl7441() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36052); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24634;
      nodes24634 = node.contents();
      oldNodes.replaceWith(nodes24634);
    }));
  }
  renderControl7441();
  root36051.append(node16433);
  callback(root36051); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root36053 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16434 = $("<td>");
  
  var ref17439 = width;
  if(ref17439.get() !== null) {
    node16434.attr('width', ref17439.get());
    subs__.addSub(ref17439.addEventListener('change', function(_, ref, val) {
      node16434.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17439.rebind());
  
  var ref17440 = mobl.ref(ui.tdStyle);
  if(ref17440.get() !== null) {
    node16434.attr('class', ref17440.get());
    subs__.addSub(ref17440.addEventListener('change', function(_, ref, val) {
      node16434.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17440.rebind());
  
  var nodes24635 = $("<span>");
  node16434.append(nodes24635);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7442();
  }));
  
  function renderControl7442() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36054); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24635;
      nodes24635 = node.contents();
      oldNodes.replaceWith(nodes24635);
    }));
  }
  renderControl7442();
  root36053.append(node16434);
  callback(root36053); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root36055 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16435 = $("<td>");
  
  var ref17441 = width;
  if(ref17441.get() !== null) {
    node16435.attr('width', ref17441.get());
    subs__.addSub(ref17441.addEventListener('change', function(_, ref, val) {
      node16435.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17441.rebind());
  
  var ref17442 = mobl.ref(ui.tdStyle);
  if(ref17442.get() !== null) {
    node16435.attr('class', ref17442.get());
    subs__.addSub(ref17442.addEventListener('change', function(_, ref, val) {
      node16435.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17442.rebind());
  
  var nodes24636 = $("<span>");
  node16435.append(nodes24636);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7443();
  }));
  
  function renderControl7443() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24636;
      nodes24636 = node.contents();
      oldNodes.replaceWith(nodes24636);
    }));
  }
  renderControl7443();
  root36055.append(node16435);
  callback(root36055); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root36057 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16436 = $("<td>");
  
  var ref17443 = width;
  if(ref17443.get() !== null) {
    node16436.attr('width', ref17443.get());
    subs__.addSub(ref17443.addEventListener('change', function(_, ref, val) {
      node16436.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17443.rebind());
  
  var ref17444 = mobl.ref(ui.tdStyle);
  if(ref17444.get() !== null) {
    node16436.attr('class', ref17444.get());
    subs__.addSub(ref17444.addEventListener('change', function(_, ref, val) {
      node16436.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17444.rebind());
  
  
  var node16437 = $("<strong>");
  
  var nodes24637 = $("<span>");
  node16437.append(nodes24637);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7444();
  }));
  
  function renderControl7444() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36058); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24637;
      nodes24637 = node.contents();
      oldNodes.replaceWith(nodes24637);
    }));
  }
  renderControl7444();
  node16436.append(node16437);
  root36057.append(node16436);
  callback(root36057); return subs__;
  
  
  
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
  var root36059 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24638 = $("<span>");
  root36059.append(nodes24638);
  subs__.addSub((ui.group)(function(_, callback) {
    var root36060 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16438 = mobl.loadingSpan();
    root36060.append(node16438);
    var list3704;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3704 = function() {
      var subs__ = listSubs__;
      list3704 = items.get();
      list3704.list(function(results3909) {
        node16438.empty();
        for(var i3704 = 0; i3704 < results3909.length; i3704++) {
          (function() {
            var iternode3704 = $("<span>");
            node16438.append(iternode3704);
            var it;
            it = mobl.ref(mobl.ref(results3909), i3704);
            
            var tmp43736 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp43773 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp43738 = mobl.ref(false);
            
            
            var tmp43737 = mobl.ref(null);
            
            var nodes24639 = $("<span>");
            iternode3704.append(nodes24639);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp43736, tmp43737, tmp43738, function(_, callback) {
              var root36061 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24640 = $("<span>");
              root36061.append(nodes24640);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl7445();
              }));
              
              function renderControl7445() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root36062 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36062); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24640;
                  nodes24640 = node.contents();
                  oldNodes.replaceWith(nodes24640);
                }));
              }
              renderControl7445();
              callback(root36061); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24639;
              nodes24639 = node.contents();
              oldNodes.replaceWith(nodes24639);
            }));
            
            var oldNodes = iternode3704;
            iternode3704 = iternode3704.contents();
            oldNodes.replaceWith(iternode3704);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3704.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3704(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3704(true); }));
      });
    };
    renderList3704();
    
    callback(root36060); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24638;
    nodes24638 = node.contents();
    oldNodes.replaceWith(nodes24638);
  }));
  callback(root36059); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root36063 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp43740 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp43739 = mobl.ref("Back");
  
  var nodes24641 = $("<span>");
  root36063.append(nodes24641);
  subs__.addSub((ui.backButton)(tmp43739, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp43740, function(_, callback) {
    var root36064 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36064); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24641;
    nodes24641 = node.contents();
    oldNodes.replaceWith(nodes24641);
  }));
  var nodes24642 = $("<span>");
  root36063.append(nodes24642);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl7446();
  }));
  
  function renderControl7446() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root36065 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36065); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24642;
      nodes24642 = node.contents();
      oldNodes.replaceWith(nodes24642);
    }));
  }
  renderControl7446();
  callback(root36063); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root36066 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16439 = $("<div>");
  
  var ref17448 = mobl.ref(ui.customHeaderStyle);
  if(ref17448.get() !== null) {
    node16439.attr('class', ref17448.get());
    subs__.addSub(ref17448.addEventListener('change', function(_, ref, val) {
      node16439.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17448.rebind());
  
  var val9624 = onclick.get();
  if(val9624 !== null) {
    subs__.addSub(mobl.domBind(node16439, 'tap', val9624));
  }
  
  
  var node16440 = $("<div>");
  
  var ref17447 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref17447.get() !== null) {
    node16440.attr('class', ref17447.get());
    subs__.addSub(ref17447.addEventListener('change', function(_, ref, val) {
      node16440.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17447.rebind());
  
  
  var node16441 = $("<div>");
  
  var ref17445 = text;
  node16441.text(""+ref17445.get());
  var ignore3500 = false;
  subs__.addSub(ref17445.addEventListener('change', function(_, ref, val) {
    if(ignore3500) return;
    node16441.text(""+val);
  }));
  subs__.addSub(ref17445.rebind());
  
  
  var ref17446 = mobl.ref(ui.customHeaderTextStyle);
  if(ref17446.get() !== null) {
    node16441.attr('class', ref17446.get());
    subs__.addSub(ref17446.addEventListener('change', function(_, ref, val) {
      node16441.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17446.rebind());
  
  node16440.append(node16441);
  node16439.append(node16440);
  var nodes24643 = $("<span>");
  node16439.append(nodes24643);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7447();
  }));
  
  function renderControl7447() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36067 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36067); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24643;
      nodes24643 = node.contents();
      oldNodes.replaceWith(nodes24643);
    }));
  }
  renderControl7447();
  root36066.append(node16439);
  callback(root36066); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root36068 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref17449 = mobl.ref(ui.customItemStyle);
  if(ref17449.get() !== null) {
    el.attr('class', ref17449.get());
    subs__.addSub(ref17449.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17449.rebind());
  
  var ref17450 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref17450.get() !== null) {
    el.attr('class', ref17450.get());
    subs__.addSub(ref17450.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref17450.rebind());
  
  var val9625 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp43774 = result__;
                                           function after3163(result__) {
                                             var tmp43775 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after3163);if(result__ !== undefined) after3163(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp43776 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9625 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9625));
  }
  
  var nodes24644 = $("<span>");
  el.append(nodes24644);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7448();
  }));
  
  function renderControl7448() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36069 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36069); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24644;
      nodes24644 = node.contents();
      oldNodes.replaceWith(nodes24644);
    }));
  }
  renderControl7448();
  root36068.append(el);
  callback(root36068); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root36070 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node16442 = $("<div>");
  node16442.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node16444 = mobl.loadingSpan();
  node16442.append(node16444);
  var list3706;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList3706 = function() {
    var subs__ = listSubs__;
    list3706 = tabs.get();
    list3706.list(function(results3911) {
      node16444.empty();
      for(var i3706 = 0; i3706 < results3911.length; i3706++) {
        (function() {
          var iternode3706 = $("<span>");
          node16444.append(iternode3706);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3911), i3706), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3911), i3706), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3911), i3706), "_3");
          
          var tmp43741 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp43741.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp43741.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp43741.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp43741.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp43744 = mobl.ref(null);
          
          
          var tmp43743 = mobl.ref(null);
          
          
          var tmp43742 = mobl.ref(null);
          
          var nodes24648 = $("<span>");
          iternode3706.append(nodes24648);
          subs__.addSub((mobl.block)(tmp43741, tmp43742, tmp43743, tmp43744, function(_, callback) {
            var root36074 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes24649 = $("<span>");
            root36074.append(nodes24649);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root36075 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24650 = $("<span>");
              root36075.append(nodes24650);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl7449();
              }));
              
              function renderControl7449() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root36076 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36076); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24650;
                  nodes24650 = node.contents();
                  oldNodes.replaceWith(nodes24650);
                }));
              }
              renderControl7449();
              callback(root36075); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24649;
              nodes24649 = node.contents();
              oldNodes.replaceWith(nodes24649);
            }));
            callback(root36074); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes24648;
            nodes24648 = node.contents();
            oldNodes.replaceWith(nodes24648);
          }));
          
          var oldNodes = iternode3706;
          iternode3706 = iternode3706.contents();
          oldNodes.replaceWith(iternode3706);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list3706.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3706(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3706(true); }));
    });
  };
  renderList3706();
  
  root36070.append(node16442);
  
  var tmp43753 = mobl.ref(null);
  
  
  var tmp43752 = mobl.ref(null);
  
  
  var tmp43751 = mobl.ref(null);
  
  var nodes24645 = $("<span>");
  root36070.append(nodes24645);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp43751, tmp43752, tmp43753, function(_, callback) {
    var root36071 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16443 = mobl.loadingSpan();
    root36071.append(node16443);
    var list3705;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3705 = function() {
      var subs__ = listSubs__;
      list3705 = tabs.get();
      list3705.list(function(results3910) {
        node16443.empty();
        for(var i3705 = 0; i3705 < results3910.length; i3705++) {
          (function() {
            var iternode3705 = $("<span>");
            node16443.append(iternode3705);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3910), i3705), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3910), i3705), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3910), i3705), "_3");
            
            var tmp43748 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp43748.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp43748.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp43748.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp43748.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp43747 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp43750 = mobl.ref(null);
            
            
            var tmp43749 = mobl.ref(null);
            
            var nodes24646 = $("<span>");
            iternode3705.append(nodes24646);
            subs__.addSub((mobl.span)(tmp43748, tmp43749, tmp43747, tmp43750, function(_, callback) {
              var root36072 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43746 = mobl.ref(null);
              
              
              var tmp43745 = mobl.ref(null);
              
              var nodes24647 = $("<span>");
              root36072.append(nodes24647);
              subs__.addSub((mobl.label)(tabName, tmp43745, tmp43746, function(_, callback) {
                var root36073 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36073); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24647;
                nodes24647 = node.contents();
                oldNodes.replaceWith(nodes24647);
              }));
              callback(root36072); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24646;
              nodes24646 = node.contents();
              oldNodes.replaceWith(nodes24646);
            }));
            
            var oldNodes = iternode3705;
            iternode3705 = iternode3705.contents();
            oldNodes.replaceWith(iternode3705);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3705.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3705(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3705(true); }));
      });
    };
    renderList3705();
    
    callback(root36071); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24645;
    nodes24645 = node.contents();
    oldNodes.replaceWith(nodes24645);
  }));
  callback(root36070); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root36077 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16445 = $("<div>");
  node16445.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node16445.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root36077.append(node16445);
  callback(root36077); return subs__;
  
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
