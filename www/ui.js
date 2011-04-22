mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root621 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node276 = $("<span>");
  root621.append(node276);
  var condSubs55 = new mobl.CompSubscription();
  subs__.addSub(condSubs55);
  var oldValue55;
  var renderCond55 = function() {
    var value123 = value.get();
    if(oldValue55 === value123) return;
    oldValue55 = value123;
    var subs__ = condSubs55;
    subs__.unsubscribe();
    node276.empty();
    if(value123) {
      var nodes424 = $("<span>");
      node276.append(nodes424);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl125();
      }));
      
      function renderControl125() {
        subs__.addSub((elements)(function(elements, callback) {
          var root622 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root622); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes424;
          nodes424 = node.contents();
          oldNodes.replaceWith(nodes424);
        }));
      }
      renderControl125();
      
      
    } else {
      
      var tmp821 = mobl.ref(null);
      
      
      var tmp820 = mobl.ref(null);
      
      
      var tmp819 = mobl.ref(null);
      
      var nodes425 = $("<span>");
      node276.append(nodes425);
      subs__.addSub((mobl.block)(style, tmp819, tmp820, tmp821, function(_, callback) {
        var root623 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp811 = mobl.ref(null);
        
        
        var tmp810 = mobl.ref(null);
        
        var nodes426 = $("<span>");
        root623.append(nodes426);
        subs__.addSub((mobl.label)(loadingMessage, tmp810, tmp811, function(_, callback) {
          var root624 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root624); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes426;
          nodes426 = node.contents();
          oldNodes.replaceWith(nodes426);
        }));
        
        var tmp813 = mobl.ref("middle");
        
        
        var tmp812 = mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw==");
        
        
        var tmp818 = mobl.ref(null);
        
        
        var tmp817 = mobl.ref(null);
        
        
        var tmp816 = mobl.ref(null);
        
        
        var tmp815 = mobl.ref(null);
        
        
        var tmp814 = mobl.ref(null);
        
        var nodes427 = $("<span>");
        root623.append(nodes427);
        subs__.addSub((ui.image)(tmp812, tmp814, tmp815, tmp816, tmp817, tmp813, tmp818, function(_, callback) {
          var root625 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root625); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes427;
          nodes427 = node.contents();
          oldNodes.replaceWith(nodes427);
        }));
        callback(root623); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes425;
        nodes425 = node.contents();
        oldNodes.replaceWith(nodes425);
      }));
      
      
    }
  };
  renderCond55();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond55();
  }));
  
  callback(root621); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root626 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node277 = $("<div>");
  
  var ref297 = mobl.ref(ui.headerStyle);
  if(ref297.get() !== null) {
    node277.attr('class', ref297.get());
    subs__.addSub(ref297.addEventListener('change', function(_, ref, val) {
      node277.attr('class', val);
    }));
    
  }
  subs__.addSub(ref297.rebind());
  
  var val168 = onclick.get();
  if(val168 !== null) {
    subs__.addSub(mobl.domBind(node277, 'tap', val168));
  }
  
  
  var node278 = $("<div>");
  
  var ref296 = mobl.ref(ui.headerContainerStyle);
  if(ref296.get() !== null) {
    node278.attr('class', ref296.get());
    subs__.addSub(ref296.addEventListener('change', function(_, ref, val) {
      node278.attr('class', val);
    }));
    
  }
  subs__.addSub(ref296.rebind());
  
  
  var node279 = $("<div>");
  
  var ref294 = text;
  node279.text(""+ref294.get());
  var ignore60 = false;
  subs__.addSub(ref294.addEventListener('change', function(_, ref, val) {
    if(ignore60) return;
    node279.text(""+val);
  }));
  subs__.addSub(ref294.rebind());
  
  
  var ref295 = mobl.ref(ui.headerTextStyle);
  if(ref295.get() !== null) {
    node279.attr('class', ref295.get());
    subs__.addSub(ref295.addEventListener('change', function(_, ref, val) {
      node279.attr('class', val);
    }));
    
  }
  subs__.addSub(ref295.rebind());
  
  node278.append(node279);
  node277.append(node278);
  var nodes428 = $("<span>");
  node277.append(nodes428);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl126();
  }));
  
  function renderControl126() {
    subs__.addSub((elements)(function(elements, callback) {
      var root627 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root627); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes428;
      nodes428 = node.contents();
      oldNodes.replaceWith(nodes428);
    }));
  }
  renderControl126();
  root626.append(node277);
  callback(root626); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root628 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref298 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref298.get() !== null) {
    sp.attr('class', ref298.get());
    subs__.addSub(ref298.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref298.rebind());
  
  var val169 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val169 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val169));
  }
  
  var val170 = function(event, callback) {
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
  if(val170 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val170));
  }
  
  var val171 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after54(result__) {
                    var tmp893 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after54);if(result__ !== undefined) after54(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val171 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val171));
  }
  
  var val172 = function(event, callback) {
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
  if(val172 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val172));
  }
  
  var ref299 = text;
  sp.text(""+ref299.get());
  var ignore61 = false;
  subs__.addSub(ref299.addEventListener('change', function(_, ref, val) {
    if(ignore61) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref299.rebind());
  
  
  root628.append(sp);
  callback(root628); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root629 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes429 = $("<span>");
  root629.append(nodes429);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root630 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root630); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes429;
    nodes429 = node.contents();
    oldNodes.replaceWith(nodes429);
  }));
  callback(root629); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root631 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes430 = $("<span>");
  root631.append(nodes430);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root632 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root632); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes430;
    nodes430 = node.contents();
    oldNodes.replaceWith(nodes430);
  }));
  callback(root631); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root633 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node280 = $("<ul>");
  
  var ref300 = mobl.ref(ui.groupStyle);
  if(ref300.get() !== null) {
    node280.attr('class', ref300.get());
    subs__.addSub(ref300.addEventListener('change', function(_, ref, val) {
      node280.attr('class', val);
    }));
    
  }
  subs__.addSub(ref300.rebind());
  
  var nodes431 = $("<span>");
  node280.append(nodes431);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl127();
  }));
  
  function renderControl127() {
    subs__.addSub((elements)(function(elements, callback) {
      var root634 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root634); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes431;
      nodes431 = node.contents();
      oldNodes.replaceWith(nodes431);
    }));
  }
  renderControl127();
  root633.append(node280);
  callback(root633); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root635 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node281 = $("<img>");
  
  var ref301 = url;
  if(ref301.get() !== null) {
    node281.attr('src', ref301.get());
    subs__.addSub(ref301.addEventListener('change', function(_, ref, val) {
      node281.attr('src', val);
    }));
    
  }
  subs__.addSub(ref301.rebind());
  
  var ref302 = width;
  if(ref302.get() !== null) {
    node281.attr('width', ref302.get());
    subs__.addSub(ref302.addEventListener('change', function(_, ref, val) {
      node281.attr('width', val);
    }));
    
  }
  subs__.addSub(ref302.rebind());
  
  var ref303 = height;
  if(ref303.get() !== null) {
    node281.attr('height', ref303.get());
    subs__.addSub(ref303.addEventListener('change', function(_, ref, val) {
      node281.attr('height', val);
    }));
    
  }
  subs__.addSub(ref303.rebind());
  
  var ref304 = style;
  if(ref304.get() !== null) {
    node281.attr('class', ref304.get());
    subs__.addSub(ref304.addEventListener('change', function(_, ref, val) {
      node281.attr('class', val);
    }));
    
  }
  subs__.addSub(ref304.rebind());
  
  var val173 = onclick.get();
  if(val173 !== null) {
    subs__.addSub(mobl.domBind(node281, 'tap', val173));
  }
  
  var ref305 = valign;
  if(ref305.get() !== null) {
    node281.attr('valign', ref305.get());
    subs__.addSub(ref305.addEventListener('change', function(_, ref, val) {
      node281.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref305.rebind());
  
  var ref306 = align;
  if(ref306.get() !== null) {
    node281.attr('align', ref306.get());
    subs__.addSub(ref306.addEventListener('change', function(_, ref, val) {
      node281.attr('align', val);
    }));
    
  }
  subs__.addSub(ref306.rebind());
  
  root635.append(node281);
  callback(root635); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root636 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref307 = mobl.ref(ui.itemStyle);
  if(ref307.get() !== null) {
    el.attr('class', ref307.get());
    subs__.addSub(ref307.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref307.rebind());
  
  var ref308 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref308.get() !== null) {
    el.attr('class', ref308.get());
    subs__.addSub(ref308.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref308.rebind());
  
  var val174 = onswipe.get();
  if(val174 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val174));
  }
  
  var val175 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp894 = result__;
                                           function after55(result__) {
                                             var tmp895 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after55);if(result__ !== undefined) after55(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp896 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val175 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val175));
  }
  
  var nodes432 = $("<span>");
  el.append(nodes432);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl128();
  }));
  
  function renderControl128() {
    subs__.addSub((elements)(function(elements, callback) {
      var root637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root637); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes432;
      nodes432 = node.contents();
      oldNodes.replaceWith(nodes432);
    }));
  }
  renderControl128();
  root636.append(el);
  callback(root636); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root638 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node282 = $("<input>");
  node282.attr('type', "checkbox");
  
  var ref310 = b;
  node282.attr('checked', !!ref310.get());
  subs__.addSub(ref310.addEventListener('change', function(_, ref, val) {
    if(ref === ref310) node282.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node282, 'change', function() {
    b.set(!!node282.attr('checked'));
  }));
  
  var val177 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val177 !== null) {
    subs__.addSub(mobl.domBind(node282, 'tap', val177));
  }
  
  var val178 = onchange.get();
  if(val178 !== null) {
    subs__.addSub(mobl.domBind(node282, 'change', val178));
  }
  
  root638.append(node282);
  
  root638.append(" ");
  
  var node283 = $("<span>");
  
  var ref309 = label;
  node283.text(""+ref309.get());
  var ignore62 = false;
  subs__.addSub(ref309.addEventListener('change', function(_, ref, val) {
    if(ignore62) return;
    node283.text(""+val);
  }));
  subs__.addSub(ref309.rebind());
  
  
  var val176 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after56(result__) {
                    var tmp897 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after56);if(result__ !== undefined) after56(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val176 !== null) {
    subs__.addSub(mobl.domBind(node283, 'tap', val176));
  }
  
  root638.append(node283);
  callback(root638); return subs__;
  
  
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
  var root639 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node284 = $("<span>");
  root639.append(node284);
  var condSubs56 = new mobl.CompSubscription();
  subs__.addSub(condSubs56);
  var oldValue56;
  var renderCond56 = function() {
    var value124 = label.get();
    if(oldValue56 === value124) return;
    oldValue56 = value124;
    var subs__ = condSubs56;
    subs__.unsubscribe();
    node284.empty();
    if(value124) {
      
      var tmp822 = mobl.ref(null);
      
      var nodes433 = $("<span>");
      node284.append(nodes433);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp822, function(_, callback) {
        var root640 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root640); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes433;
        nodes433 = node.contents();
        oldNodes.replaceWith(nodes433);
      }));
      
      
    } else {
      
    }
  };
  renderCond56();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond56();
  }));
  
  
  var node285 = $("<span>");
  root639.append(node285);
  var condSubs57 = new mobl.CompSubscription();
  subs__.addSub(condSubs57);
  var oldValue57;
  var renderCond57 = function() {
    var value125 = validator.get();
    if(oldValue57 === value125) return;
    oldValue57 = value125;
    var subs__ = condSubs57;
    subs__.unsubscribe();
    node285.empty();
    if(value125) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after60(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp898 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node286 = $("<input>");
        node286.attr('type', "text");
        
        var ref311 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref311.get() !== null) {
          node286.attr('class', ref311.get());
          subs__.addSub(ref311.addEventListener('change', function(_, ref, val) {
            node286.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node286.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node286.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node286.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref311.rebind());
        
        var ref312 = placeholder;
        if(ref312.get() !== null) {
          node286.attr('placeholder', ref312.get());
          subs__.addSub(ref312.addEventListener('change', function(_, ref, val) {
            node286.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref312.rebind());
        
        var ref313 = temp;
        node286.val(""+ref313.get());
        var ignore63 = false;
        subs__.addSub(ref313.addEventListener('change', function(_, ref, val) {
          if(ignore63) return;
          node286.val(""+val);
        }));
        subs__.addSub(ref313.rebind());
        
        subs__.addSub(mobl.domBind(node286, 'keyup change', function() {
          ignore63 = true;
          temp.set(mobl.stringTomobl__String(node286.val()));
          ignore63 = false;
        }));
        
        
        var val179 = onchange.get();
        if(val179 !== null) {
          subs__.addSub(mobl.domBind(node286, 'change', val179));
        }
        
        var val180 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after57(result__) {
                          var tmp899 = result__;
                          function after58(result__) {
                            var tmp900 = result__;
                            var result__ = tmp900;
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
                          var result__ = validator.get()(temp.get(), after58);if(result__ !== undefined) after58(result__);
                        }
                        var result__ = onkeyup.get()(event, after57);if(result__ !== undefined) after57(result__);
                      } else {
                        {
                          function after59(result__) {
                            var tmp900 = result__;
                            var result__ = tmp900;
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
                          var result__ = validator.get()(temp.get(), after59);if(result__ !== undefined) after59(result__);
                        }
                      }
                    };
        if(val180 !== null) {
          subs__.addSub(mobl.domBind(node286, 'keyup', val180));
        }
        
        var val181 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val181 !== null) {
          subs__.addSub(mobl.domBind(node286, 'blur', val181));
        }
        
        node285.append(node286);
        
        var tmp823 = mobl.ref(null);
        
        var nodes434 = $("<span>");
        node285.append(nodes434);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp823, function(_, callback) {
          var root641 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root641); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes434;
          nodes434 = node.contents();
          oldNodes.replaceWith(nodes434);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after60);if(result__ !== undefined) after60(result__);
    } else {
      
      var node287 = $("<input>");
      node287.attr('type', "text");
      
      var ref314 = style;
      if(ref314.get() !== null) {
        node287.attr('class', ref314.get());
        subs__.addSub(ref314.addEventListener('change', function(_, ref, val) {
          node287.attr('class', val);
        }));
        
      }
      subs__.addSub(ref314.rebind());
      
      var ref315 = placeholder;
      if(ref315.get() !== null) {
        node287.attr('placeholder', ref315.get());
        subs__.addSub(ref315.addEventListener('change', function(_, ref, val) {
          node287.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref315.rebind());
      
      var ref316 = s;
      node287.val(""+ref316.get());
      var ignore64 = false;
      subs__.addSub(ref316.addEventListener('change', function(_, ref, val) {
        if(ignore64) return;
        node287.val(""+val);
      }));
      subs__.addSub(ref316.rebind());
      
      subs__.addSub(mobl.domBind(node287, 'keyup change', function() {
        ignore64 = true;
        s.set(mobl.stringTomobl__String(node287.val()));
        ignore64 = false;
      }));
      
      
      var val182 = onchange.get();
      if(val182 !== null) {
        subs__.addSub(mobl.domBind(node287, 'change', val182));
      }
      
      var val183 = onkeyup.get();
      if(val183 !== null) {
        subs__.addSub(mobl.domBind(node287, 'keyup', val183));
      }
      
      var val184 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val184 !== null) {
        subs__.addSub(mobl.domBind(node287, 'blur', val184));
      }
      
      node285.append(node287);
      
      
    }
  };
  renderCond57();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond57();
  }));
  
  callback(root639); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes435 = $("<span>");
  root642.append(nodes435);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root643 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root643); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes435;
    nodes435 = node.contents();
    oldNodes.replaceWith(nodes435);
  }));
  callback(root642); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root644 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after61(result__) {
      var tmp901 = result__;
      var result__ = tmp901;
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
    var result__ = validator.get()(n2, after61);if(result__ !== undefined) after61(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes436 = $("<span>");
  root644.append(nodes436);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root645 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root645); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes436;
    nodes436 = node.contents();
    oldNodes.replaceWith(nodes436);
  }));
  callback(root644); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node288 = $("<span>");
  root646.append(node288);
  var condSubs58 = new mobl.CompSubscription();
  subs__.addSub(condSubs58);
  var oldValue58;
  var renderCond58 = function() {
    var value126 = label.get();
    if(oldValue58 === value126) return;
    oldValue58 = value126;
    var subs__ = condSubs58;
    subs__.unsubscribe();
    node288.empty();
    if(value126) {
      
      var node289 = $("<span>");
      node289.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref320 = label;
      node289.text(""+ref320.get());
      var ignore66 = false;
      subs__.addSub(ref320.addEventListener('change', function(_, ref, val) {
        if(ignore66) return;
        node289.text(""+val);
      }));
      subs__.addSub(ref320.rebind());
      
      
      node288.append(node289);
      
      var node290 = $("<span>");
      node290.attr('style', "float: left");
      
      
      var node291 = $("<input>");
      node291.attr('type', "password");
      
      var ref317 = style;
      if(ref317.get() !== null) {
        node291.attr('class', ref317.get());
        subs__.addSub(ref317.addEventListener('change', function(_, ref, val) {
          node291.attr('class', val);
        }));
        
      }
      subs__.addSub(ref317.rebind());
      
      var ref318 = placeholder;
      if(ref318.get() !== null) {
        node291.attr('placeholder', ref318.get());
        subs__.addSub(ref318.addEventListener('change', function(_, ref, val) {
          node291.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref318.rebind());
      
      var ref319 = s;
      node291.val(""+ref319.get());
      var ignore65 = false;
      subs__.addSub(ref319.addEventListener('change', function(_, ref, val) {
        if(ignore65) return;
        node291.val(""+val);
      }));
      subs__.addSub(ref319.rebind());
      
      subs__.addSub(mobl.domBind(node291, 'keyup change', function() {
        ignore65 = true;
        s.set(mobl.stringTomobl__String(node291.val()));
        ignore65 = false;
      }));
      
      
      var val185 = onchange.get();
      if(val185 !== null) {
        subs__.addSub(mobl.domBind(node291, 'change', val185));
      }
      
      var val186 = onkeyup.get();
      if(val186 !== null) {
        subs__.addSub(mobl.domBind(node291, 'keyup', val186));
      }
      
      var val187 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val187 !== null) {
        subs__.addSub(mobl.domBind(node291, 'blur', val187));
      }
      
      node290.append(node291);
      node288.append(node290);
      
      
      
      
    } else {
      
      var node292 = $("<input>");
      node292.attr('type', "password");
      
      var ref321 = style;
      if(ref321.get() !== null) {
        node292.attr('class', ref321.get());
        subs__.addSub(ref321.addEventListener('change', function(_, ref, val) {
          node292.attr('class', val);
        }));
        
      }
      subs__.addSub(ref321.rebind());
      
      var ref322 = placeholder;
      if(ref322.get() !== null) {
        node292.attr('placeholder', ref322.get());
        subs__.addSub(ref322.addEventListener('change', function(_, ref, val) {
          node292.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref322.rebind());
      
      var ref323 = s;
      node292.val(""+ref323.get());
      var ignore67 = false;
      subs__.addSub(ref323.addEventListener('change', function(_, ref, val) {
        if(ignore67) return;
        node292.val(""+val);
      }));
      subs__.addSub(ref323.rebind());
      
      subs__.addSub(mobl.domBind(node292, 'keyup change', function() {
        ignore67 = true;
        s.set(mobl.stringTomobl__String(node292.val()));
        ignore67 = false;
      }));
      
      
      var val188 = onchange.get();
      if(val188 !== null) {
        subs__.addSub(mobl.domBind(node292, 'change', val188));
      }
      
      var val189 = onkeyup.get();
      if(val189 !== null) {
        subs__.addSub(mobl.domBind(node292, 'keyup', val189));
      }
      
      var val190 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val190 !== null) {
        subs__.addSub(mobl.domBind(node292, 'blur', val190));
      }
      
      node288.append(node292);
      
      
    }
  };
  renderCond58();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond58();
  }));
  
  callback(root646); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root647 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref328 = style;
  if(ref328.get() !== null) {
    sel.attr('class', ref328.get());
    subs__.addSub(ref328.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref328.rebind());
  
  var val191 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after62(result__) {
                    var tmp903 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after62);if(result__ !== undefined) after62(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val191 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val191));
  }
  
  
  var node293 = mobl.loadingSpan();
  sel.append(node293);
  var list65;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList65 = function() {
    var subs__ = listSubs__;
    list65 = options.get();
    list65.list(function(results78) {
      node293.empty();
      for(var i65 = 0; i65 < results78.length; i65++) {
        (function() {
          var iternode65 = $("<span>");
          node293.append(iternode65);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results78), i65), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results78), i65), "_2");
          
          var node294 = $("<option>");
          
          var ref324 = optionDescription;
          node294.text(""+ref324.get());
          var ignore68 = false;
          subs__.addSub(ref324.addEventListener('change', function(_, ref, val) {
            if(ignore68) return;
            node294.text(""+val);
          }));
          subs__.addSub(ref324.rebind());
          
          
          var ref325 = optionStyle;
          if(ref325.get() !== null) {
            node294.attr('class', ref325.get());
            subs__.addSub(ref325.addEventListener('change', function(_, ref, val) {
              node294.attr('class', val);
            }));
            
          }
          subs__.addSub(ref325.rebind());
          
          var ref326 = optionValue;
          if(ref326.get() !== null) {
            node294.attr('value', ref326.get());
            subs__.addSub(ref326.addEventListener('change', function(_, ref, val) {
              node294.attr('value', val);
            }));
            
          }
          subs__.addSub(ref326.rebind());
          
          var ref327 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref327.get() !== null) {
            node294.attr('selected', ref327.get());
            subs__.addSub(ref327.addEventListener('change', function(_, ref, val) {
              node294.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node294.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node294.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref327.rebind());
          
          iternode65.append(node294);
          
          var oldNodes = iternode65;
          iternode65 = iternode65.contents();
          oldNodes.replaceWith(iternode65);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list65.addEventListener('change', function() { listSubs__.unsubscribe(); renderList65(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList65(true); }));
    });
  };
  renderList65();
  
  root647.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root647); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root648 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp832 = mobl.ref(null);
  
  
  var tmp831 = mobl.ref(null);
  
  
  var tmp830 = mobl.ref(null);
  
  var nodes437 = $("<span>");
  root648.append(nodes437);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp830, tmp831, tmp832, function(_, callback) {
    var root649 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node295 = mobl.loadingSpan();
    root649.append(node295);
    var list66;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList66 = function() {
      var subs__ = listSubs__;
      list66 = tabs.get();
      list66.list(function(results79) {
        node295.empty();
        for(var i66 = 0; i66 < results79.length; i66++) {
          (function() {
            var iternode66 = $("<span>");
            node295.append(iternode66);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results79), i66), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results79), i66), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results79), i66), "_3");
            
            var tmp827 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp827.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp827.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp827.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp827.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp826 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp829 = mobl.ref(null);
            
            
            var tmp828 = mobl.ref(null);
            
            var nodes438 = $("<span>");
            iternode66.append(nodes438);
            subs__.addSub((mobl.span)(tmp827, tmp828, tmp826, tmp829, function(_, callback) {
              var root650 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp825 = mobl.ref(null);
              
              
              var tmp824 = mobl.ref(null);
              
              var nodes439 = $("<span>");
              root650.append(nodes439);
              subs__.addSub((mobl.label)(tabName, tmp824, tmp825, function(_, callback) {
                var root651 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root651); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes439;
                nodes439 = node.contents();
                oldNodes.replaceWith(nodes439);
              }));
              callback(root650); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes438;
              nodes438 = node.contents();
              oldNodes.replaceWith(nodes438);
            }));
            
            var oldNodes = iternode66;
            iternode66 = iternode66.contents();
            oldNodes.replaceWith(iternode66);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list66.addEventListener('change', function() { listSubs__.unsubscribe(); renderList66(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList66(true); }));
      });
    };
    renderList66();
    
    callback(root649); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes437;
    nodes437 = node.contents();
    oldNodes.replaceWith(nodes437);
  }));
  
  var node296 = mobl.loadingSpan();
  root648.append(node296);
  var list67;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList67 = function() {
    var subs__ = listSubs__;
    list67 = tabs.get();
    list67.list(function(results80) {
      node296.empty();
      for(var i67 = 0; i67 < results80.length; i67++) {
        (function() {
          var iternode67 = $("<span>");
          node296.append(iternode67);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results80), i67), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results80), i67), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results80), i67), "_3");
          
          var tmp833 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp833.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp833.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp833.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp833.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp836 = mobl.ref(null);
          
          
          var tmp835 = mobl.ref(null);
          
          
          var tmp834 = mobl.ref(null);
          
          var nodes440 = $("<span>");
          iternode67.append(nodes440);
          subs__.addSub((mobl.block)(tmp833, tmp834, tmp835, tmp836, function(_, callback) {
            var root652 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes441 = $("<span>");
            root652.append(nodes441);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root653 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes442 = $("<span>");
              root653.append(nodes442);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl129();
              }));
              
              function renderControl129() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root654 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root654); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes442;
                  nodes442 = node.contents();
                  oldNodes.replaceWith(nodes442);
                }));
              }
              renderControl129();
              callback(root653); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes441;
              nodes441 = node.contents();
              oldNodes.replaceWith(nodes441);
            }));
            callback(root652); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes440;
            nodes440 = node.contents();
            oldNodes.replaceWith(nodes440);
          }));
          
          var oldNodes = iternode67;
          iternode67 = iternode67.contents();
          oldNodes.replaceWith(iternode67);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list67.addEventListener('change', function() { listSubs__.unsubscribe(); renderList67(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList67(true); }));
    });
  };
  renderList67();
  
  callback(root648); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root655 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node297 = $("<div>");
  
  var ref332 = mobl.ref(ui.searchboxStyle);
  if(ref332.get() !== null) {
    node297.attr('class', ref332.get());
    subs__.addSub(ref332.addEventListener('change', function(_, ref, val) {
      node297.attr('class', val);
    }));
    
  }
  subs__.addSub(ref332.rebind());
  
  
  var node298 = $("<input>");
  node298.attr('type', "search");
  
  var ref329 = mobl.ref(ui.searchBoxInputStyle);
  if(ref329.get() !== null) {
    node298.attr('class', ref329.get());
    subs__.addSub(ref329.addEventListener('change', function(_, ref, val) {
      node298.attr('class', val);
    }));
    
  }
  subs__.addSub(ref329.rebind());
  
  var ref330 = placeholder;
  if(ref330.get() !== null) {
    node298.attr('placeholder', ref330.get());
    subs__.addSub(ref330.addEventListener('change', function(_, ref, val) {
      node298.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref330.rebind());
  
  var ref331 = s;
  node298.val(""+ref331.get());
  var ignore69 = false;
  subs__.addSub(ref331.addEventListener('change', function(_, ref, val) {
    if(ignore69) return;
    node298.val(""+val);
  }));
  subs__.addSub(ref331.rebind());
  
  subs__.addSub(mobl.domBind(node298, 'keyup change', function() {
    ignore69 = true;
    s.set(mobl.stringTomobl__String(node298.val()));
    ignore69 = false;
  }));
  
  
  var val192 = onsearch.get();
  if(val192 !== null) {
    subs__.addSub(mobl.domBind(node298, 'change', val192));
  }
  
  var val193 = onkeyup.get();
  if(val193 !== null) {
    subs__.addSub(mobl.domBind(node298, 'keyup', val193));
  }
  node298.attr('autocorrect', false);
  node298.attr('autocapitalize', false);
  node298.attr('autocomplete', false);
  
  node297.append(node298);
  root655.append(node297);
  callback(root655); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root656 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref333 = mobl.ref(ui.contextMenuStyle);
  if(ref333.get() !== null) {
    menu.attr('class', ref333.get());
    subs__.addSub(ref333.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref333.rebind());
  
  var nodes443 = $("<span>");
  menu.append(nodes443);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl130();
  }));
  
  function renderControl130() {
    subs__.addSub((elements)(function(elements, callback) {
      var root657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root657); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes443;
      nodes443 = node.contents();
      oldNodes.replaceWith(nodes443);
    }));
  }
  renderControl130();
  root656.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val194 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp906 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val194 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val194));
  }
  
  root656.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root656); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root658 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp892 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp892.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node299 = $("<span>");
  root658.append(node299);
  var condSubs59 = new mobl.CompSubscription();
  subs__.addSub(condSubs59);
  var oldValue59;
  var renderCond59 = function() {
    var value127 = tmp892.get();
    if(oldValue59 === value127) return;
    oldValue59 = value127;
    var subs__ = condSubs59;
    subs__.unsubscribe();
    node299.empty();
    if(value127) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node300 = $("<div>");
        node300.attr('width', "100%");
        
        
        var node301 = $("<div>");
        node301.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes446 = $("<span>");
        node301.append(nodes446);
        subs__.addSub((ui.group)(function(_, callback) {
          var root661 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node304 = mobl.loadingSpan();
          root661.append(node304);
          var list68;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList68 = function() {
            var subs__ = listSubs__;
            list68 = items.get();
            list68.list(function(results81) {
              node304.empty();
              for(var i68 = 0; i68 < results81.length; i68++) {
                (function() {
                  var iternode68 = $("<span>");
                  node304.append(iternode68);
                  var it;
                  it = mobl.ref(mobl.ref(results81), i68);
                  
                  var tmp850 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp850.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp850.set(it.get() == current.get());
                  }));
                  
                  
                  var node305 = $("<span>");
                  iternode68.append(node305);
                  var condSubs61 = new mobl.CompSubscription();
                  subs__.addSub(condSubs61);
                  var oldValue61;
                  var renderCond61 = function() {
                    var value129 = tmp850.get();
                    if(oldValue61 === value129) return;
                    oldValue61 = value129;
                    var subs__ = condSubs61;
                    subs__.unsubscribe();
                    node305.empty();
                    if(value129) {
                      
                      var tmp846 = mobl.ref(false);
                      
                      
                      var tmp845 = mobl.ref(null);
                      
                      
                      var tmp844 = mobl.ref(null);
                      
                      var nodes447 = $("<span>");
                      node305.append(nodes447);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp844, tmp845, tmp846, function(_, callback) {
                        var root662 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes448 = $("<span>");
                        root662.append(nodes448);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl132();
                        }));
                        
                        function renderControl132() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root663 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root663); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes448;
                            nodes448 = node.contents();
                            oldNodes.replaceWith(nodes448);
                          }));
                        }
                        renderControl132();
                        callback(root662); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes447;
                        nodes447 = node.contents();
                        oldNodes.replaceWith(nodes447);
                      }));
                      
                      
                    } else {
                      
                      var tmp848 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp847 = mobl.ref(true);
                      
                      
                      var tmp849 = mobl.ref(null);
                      
                      var nodes449 = $("<span>");
                      node305.append(nodes449);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp848, tmp849, tmp847, function(_, callback) {
                        var root664 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes450 = $("<span>");
                        root664.append(nodes450);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl133();
                        }));
                        
                        function renderControl133() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root665 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root665); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes450;
                            nodes450 = node.contents();
                            oldNodes.replaceWith(nodes450);
                          }));
                        }
                        renderControl133();
                        callback(root664); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes449;
                        nodes449 = node.contents();
                        oldNodes.replaceWith(nodes449);
                      }));
                      
                      
                    }
                  };
                  renderCond61();
                  subs__.addSub(tmp850.addEventListener('change', function() {
                    renderCond61();
                  }));
                  
                  
                  var oldNodes = iternode68;
                  iternode68 = iternode68.contents();
                  oldNodes.replaceWith(iternode68);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list68.addEventListener('change', function() { listSubs__.unsubscribe(); renderList68(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList68(true); }));
            });
          };
          renderList68();
          
          callback(root661); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes446;
          nodes446 = node.contents();
          oldNodes.replaceWith(nodes446);
        }));
        node300.append(node301);
        
        var node302 = $("<div>");
        node302.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node303 = $("<span>");
        node302.append(node303);
        var condSubs60 = new mobl.CompSubscription();
        subs__.addSub(condSubs60);
        var oldValue60;
        var renderCond60 = function() {
          var value128 = current.get();
          if(oldValue60 === value128) return;
          oldValue60 = value128;
          var subs__ = condSubs60;
          subs__.unsubscribe();
          node303.empty();
          if(value128) {
            var nodes444 = $("<span>");
            node303.append(nodes444);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl131();
            }));
            
            function renderControl131() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root659 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root659); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes444;
                nodes444 = node.contents();
                oldNodes.replaceWith(nodes444);
              }));
            }
            renderControl131();
            
            
          } else {
            
            var tmp851 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp853 = mobl.ref(null);
            
            
            var tmp852 = mobl.ref(null);
            
            var nodes445 = $("<span>");
            node303.append(nodes445);
            subs__.addSub((mobl.label)(tmp851, tmp852, tmp853, function(_, callback) {
              var root660 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root660); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes445;
              nodes445 = node.contents();
              oldNodes.replaceWith(nodes445);
            }));
            
            
          }
        };
        renderCond60();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond60();
        }));
        
        node300.append(node302);
        node299.append(node300);
        
        
        
        
        
        
      });
    } else {
      var nodes451 = $("<span>");
      node299.append(nodes451);
      subs__.addSub((ui.group)(function(_, callback) {
        var root666 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node306 = mobl.loadingSpan();
        root666.append(node306);
        var list69;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList69 = function() {
          var subs__ = listSubs__;
          list69 = items.get();
          list69.list(function(results82) {
            node306.empty();
            for(var i69 = 0; i69 < results82.length; i69++) {
              (function() {
                var iternode69 = $("<span>");
                node306.append(iternode69);
                var it;
                it = mobl.ref(mobl.ref(results82), i69);
                
                var tmp837 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp907 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp839 = mobl.ref(false);
                
                
                var tmp838 = mobl.ref(null);
                
                var nodes452 = $("<span>");
                iternode69.append(nodes452);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp837, tmp838, tmp839, function(_, callback) {
                  var root667 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes453 = $("<span>");
                  root667.append(nodes453);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl134();
                  }));
                  
                  function renderControl134() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root668 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root668); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes453;
                      nodes453 = node.contents();
                      oldNodes.replaceWith(nodes453);
                    }));
                  }
                  renderControl134();
                  callback(root667); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes452;
                  nodes452 = node.contents();
                  oldNodes.replaceWith(nodes452);
                }));
                
                var oldNodes = iternode69;
                iternode69 = iternode69.contents();
                oldNodes.replaceWith(iternode69);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list69.addEventListener('change', function() { listSubs__.unsubscribe(); renderList69(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList69(true); }));
          });
        };
        renderList69();
        
        callback(root666); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes451;
        nodes451 = node.contents();
        oldNodes.replaceWith(nodes451);
      }));
      
      
    }
  };
  renderCond59();
  subs__.addSub(tmp892.addEventListener('change', function() {
    renderCond59();
  }));
  
  callback(root658); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root669 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp842 = mobl.ref("Detail");
  
  
  var tmp843 = mobl.ref(null);
  
  var nodes454 = $("<span>");
  root669.append(nodes454);
  subs__.addSub((ui.header)(tmp842, tmp843, function(_, callback) {
    var root670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp841 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp840 = mobl.ref("Back");
    
    var nodes455 = $("<span>");
    root670.append(nodes455);
    subs__.addSub((ui.backButton)(tmp840, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp841, function(_, callback) {
      var root671 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root671); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes455;
      nodes455 = node.contents();
      oldNodes.replaceWith(nodes455);
    }));
    callback(root670); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes454;
    nodes454 = node.contents();
    oldNodes.replaceWith(nodes454);
  }));
  var nodes456 = $("<span>");
  root669.append(nodes456);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl135();
  }));
  
  function renderControl135() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root672 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root672); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes456;
      nodes456 = node.contents();
      oldNodes.replaceWith(nodes456);
    }));
  }
  renderControl135();
  callback(root669); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root673 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes457 = $("<span>");
  root673.append(nodes457);
  subs__.addSub((ui.group)(function(_, callback) {
    var root674 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node307 = mobl.loadingSpan();
    root674.append(node307);
    var list70;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList70 = function() {
      var subs__ = listSubs__;
      list70 = coll.get();
      list70.list(function(results83) {
        node307.empty();
        for(var i70 = 0; i70 < results83.length; i70++) {
          (function() {
            var iternode70 = $("<span>");
            node307.append(iternode70);
            var it;
            it = mobl.ref(mobl.ref(results83), i70);
            
            var tmp860 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp860.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp860.set(it.get() == selected.get());
            }));
            
            
            var node308 = $("<span>");
            iternode70.append(node308);
            var condSubs62 = new mobl.CompSubscription();
            subs__.addSub(condSubs62);
            var oldValue62;
            var renderCond62 = function() {
              var value130 = tmp860.get();
              if(oldValue62 === value130) return;
              oldValue62 = value130;
              var subs__ = condSubs62;
              subs__.unsubscribe();
              node308.empty();
              if(value130) {
                
                var tmp856 = mobl.ref(false);
                
                
                var tmp855 = mobl.ref(null);
                
                
                var tmp854 = mobl.ref(null);
                
                var nodes458 = $("<span>");
                node308.append(nodes458);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp854, tmp855, tmp856, function(_, callback) {
                  var root675 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes459 = $("<span>");
                  root675.append(nodes459);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl136();
                  }));
                  
                  function renderControl136() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root676 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root676); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes459;
                      nodes459 = node.contents();
                      oldNodes.replaceWith(nodes459);
                    }));
                  }
                  renderControl136();
                  callback(root675); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes458;
                  nodes458 = node.contents();
                  oldNodes.replaceWith(nodes458);
                }));
                
                
              } else {
                
                var tmp858 = mobl.ref(true);
                
                
                var tmp857 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp859 = mobl.ref(null);
                
                var nodes460 = $("<span>");
                node308.append(nodes460);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp857, tmp859, tmp858, function(_, callback) {
                  var root677 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes461 = $("<span>");
                  root677.append(nodes461);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl137();
                  }));
                  
                  function renderControl137() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root678 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root678); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes461;
                      nodes461 = node.contents();
                      oldNodes.replaceWith(nodes461);
                    }));
                  }
                  renderControl137();
                  callback(root677); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes460;
                  nodes460 = node.contents();
                  oldNodes.replaceWith(nodes460);
                }));
                
                
              }
            };
            renderCond62();
            subs__.addSub(tmp860.addEventListener('change', function() {
              renderCond62();
            }));
            
            
            var oldNodes = iternode70;
            iternode70 = iternode70.contents();
            oldNodes.replaceWith(iternode70);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list70.addEventListener('change', function() { listSubs__.unsubscribe(); renderList70(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList70(true); }));
      });
    };
    renderList70();
    
    callback(root674); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes457;
    nodes457 = node.contents();
    oldNodes.replaceWith(nodes457);
  }));
  callback(root673); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root679 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes462 = $("<span>");
    root679.append(nodes462);
    subs__.addSub((ui.group)(function(_, callback) {
      var root680 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp864 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp864.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp864.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp864.set(coll.get().limit(n.get()));
      }));
      
      
      var node309 = mobl.loadingSpan();
      root680.append(node309);
      var list71;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList71 = function() {
        var subs__ = listSubs__;
        list71 = tmp864.get();
        list71.list(function(results84) {
          node309.empty();
          for(var i71 = 0; i71 < results84.length; i71++) {
            (function() {
              var iternode71 = $("<span>");
              node309.append(iternode71);
              var it;
              it = mobl.ref(mobl.ref(results84), i71);
              
              var tmp861 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp863 = mobl.ref(false);
              
              
              var tmp862 = mobl.ref(null);
              
              var nodes463 = $("<span>");
              iternode71.append(nodes463);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp861, tmp862, tmp863, function(_, callback) {
                var root681 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes464 = $("<span>");
                root681.append(nodes464);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl138();
                }));
                
                function renderControl138() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root682 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root682); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes464;
                    nodes464 = node.contents();
                    oldNodes.replaceWith(nodes464);
                  }));
                }
                renderControl138();
                callback(root681); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes463;
                nodes463 = node.contents();
                oldNodes.replaceWith(nodes463);
              }));
              
              var oldNodes = iternode71;
              iternode71 = iternode71.contents();
              oldNodes.replaceWith(iternode71);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list71.addEventListener('change', function() { listSubs__.unsubscribe(); renderList71(true); }));
          subs__.addSub(tmp864.addEventListener('change', function() { listSubs__.unsubscribe(); renderList71(true); }));
        });
      };
      renderList71();
      
      
      var tmp867 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp867.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp867.set(n.get() < total.get());
      }));
      
      
      var node310 = $("<span>");
      root680.append(node310);
      var condSubs63 = new mobl.CompSubscription();
      subs__.addSub(condSubs63);
      var oldValue63;
      var renderCond63 = function() {
        var value131 = tmp867.get();
        if(oldValue63 === value131) return;
        oldValue63 = value131;
        var subs__ = condSubs63;
        subs__.unsubscribe();
        node310.empty();
        if(value131) {
          
          var node311 = $("<li>");
          
          var ref334 = mobl.ref(ui.loadMoreStyle);
          if(ref334.get() !== null) {
            node311.attr('class', ref334.get());
            subs__.addSub(ref334.addEventListener('change', function(_, ref, val) {
              node311.attr('class', val);
            }));
            
          }
          subs__.addSub(ref334.rebind());
          
          var val195 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val195 !== null) {
            subs__.addSub(mobl.domBind(node311, 'tap', val195));
          }
          
          
          var tmp866 = mobl.ref(null);
          
          
          var tmp865 = mobl.ref(null);
          
          var nodes465 = $("<span>");
          node311.append(nodes465);
          subs__.addSub((mobl.label)(moreLabel, tmp865, tmp866, function(_, callback) {
            var root683 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root683); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes465;
            nodes465 = node.contents();
            oldNodes.replaceWith(nodes465);
          }));
          node310.append(node311);
          
          
          
        } else {
          
        }
      };
      renderCond63();
      subs__.addSub(tmp867.addEventListener('change', function() {
        renderCond63();
      }));
      
      callback(root680); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes462;
      nodes462 = node.contents();
      oldNodes.replaceWith(nodes462);
    }));
    callback(root679); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root684 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes466 = $("<span>");
  root684.append(nodes466);
  subs__.addSub((ui.group)(function(_, callback) {
    var root685 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node312 = mobl.loadingSpan();
    root685.append(node312);
    var list72;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList72 = function() {
      var subs__ = listSubs__;
      list72 = items.get();
      list72.list(function(results85) {
        node312.empty();
        for(var i72 = 0; i72 < results85.length; i72++) {
          (function() {
            var iternode72 = $("<span>");
            node312.append(iternode72);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results85), i72), "_1");it = mobl.ref(mobl.ref(mobl.ref(results85), i72), "_2");
            
            var tmp871 = mobl.ref(false);
            
            
            var tmp870 = mobl.ref(null);
            
            
            var tmp869 = mobl.ref(null);
            
            var nodes467 = $("<span>");
            iternode72.append(nodes467);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp869, tmp870, tmp871, function(_, callback) {
              var root686 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp868 = mobl.ref(null);
              
              var nodes468 = $("<span>");
              root686.append(nodes468);
              subs__.addSub((ui.checkBox)(checked, it, tmp868, function(_, callback) {
                var root687 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root687); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes468;
                nodes468 = node.contents();
                oldNodes.replaceWith(nodes468);
              }));
              callback(root686); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes467;
              nodes467 = node.contents();
              oldNodes.replaceWith(nodes467);
            }));
            
            var oldNodes = iternode72;
            iternode72 = iternode72.contents();
            oldNodes.replaceWith(iternode72);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list72.addEventListener('change', function() { listSubs__.unsubscribe(); renderList72(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList72(true); }));
      });
    };
    renderList72();
    
    callback(root685); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes466;
    nodes466 = node.contents();
    oldNodes.replaceWith(nodes466);
  }));
  callback(root684); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root688 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll119) {
    coll119 = coll119.reverse();
    function processOne17() {
      var it;
      it = coll119.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll119.length > 0) processOne17(); else rest17();
      
    }
    function rest17() {
      
      var tmp875 = mobl.ref(null);
      
      var nodes469 = $("<span>");
      root688.append(nodes469);
      subs__.addSub((ui.header)(title, tmp875, function(_, callback) {
        var root689 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp872 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp873 = mobl.ref(mobl._("Back", []));
        
        var nodes470 = $("<span>");
        root689.append(nodes470);
        subs__.addSub((ui.backButton)(tmp873, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp872, function(_, callback) {
          var root690 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root690); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes470;
          nodes470 = node.contents();
          oldNodes.replaceWith(nodes470);
        }));
        
        var tmp874 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll118) {
                               coll118 = coll118.reverse();
                               function processOne16() {
                                 var checked;var it;
                                 var tmp909 = coll118.pop();
                                 checked = tmp909._1;it = tmp909._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll118.length > 0) processOne16(); else rest16();
                                   
                                 } else {
                                   {
                                     
                                     if(coll118.length > 0) processOne16(); else rest16();
                                     
                                   }
                                 }
                               }
                               function rest16() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll118.length > 0) processOne16(); else rest16();
                             });
                             
                           });
        
        var nodes471 = $("<span>");
        root689.append(nodes471);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp874, function(_, callback) {
          var root691 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root691); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes471;
          nodes471 = node.contents();
          oldNodes.replaceWith(nodes471);
        }));
        callback(root689); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes469;
        nodes469 = node.contents();
        oldNodes.replaceWith(nodes469);
      }));
      var nodes472 = $("<span>");
      root688.append(nodes472);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root692 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root692); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes472;
        nodes472 = node.contents();
        oldNodes.replaceWith(nodes472);
      }));
      callback(root688); return subs__;
      
      
    }
    if(coll119.length > 0) processOne17(); else rest17();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root693 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp877 = mobl.ref(null);
  
  
  var tmp876 = mobl.ref(null);
  
  var nodes473 = $("<span>");
  root693.append(nodes473);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp876, tmp877, function(_, callback) {
    var root694 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root694); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes473;
    nodes473 = node.contents();
    oldNodes.replaceWith(nodes473);
  }));
  
  var tmp878 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp878.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp878.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp878.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp878.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp878.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes474 = $("<span>");
  root693.append(nodes474);
  subs__.addSub((ui.masterDetail)(tmp878, masterItem, detailItem, function(_, callback) {
    var root695 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root695); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes474;
    nodes474 = node.contents();
    oldNodes.replaceWith(nodes474);
  }));
  callback(root693); return subs__;
  
  
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
  var root696 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp891 = mobl.ref(null);
  
  
  var tmp890 = mobl.ref(null);
  
  
  var tmp889 = mobl.ref(null);
  
  var nodes475 = $("<span>");
  root696.append(nodes475);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp889, tmp890, tmp891, function(_, callback) {
    var root697 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node313 = mobl.loadingSpan();
    root697.append(node313);
    var list73;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList73 = function() {
      var subs__ = listSubs__;
      list73 = sections.get();
      list73.list(function(results86) {
        node313.empty();
        for(var i73 = 0; i73 < results86.length; i73++) {
          (function() {
            var iternode73 = $("<span>");
            node313.append(iternode73);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results86), i73), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results86), i73), "_2");
            
            var tmp882 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp882.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp882.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp882.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp882.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp881 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp884 = mobl.ref(null);
            
            
            var tmp883 = mobl.ref(null);
            
            var nodes476 = $("<span>");
            iternode73.append(nodes476);
            subs__.addSub((mobl.span)(tmp882, tmp883, tmp881, tmp884, function(_, callback) {
              var root698 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp880 = mobl.ref(null);
              
              
              var tmp879 = mobl.ref(null);
              
              var nodes477 = $("<span>");
              root698.append(nodes477);
              subs__.addSub((mobl.label)(sectionName, tmp879, tmp880, function(_, callback) {
                var root699 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root699); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes477;
                nodes477 = node.contents();
                oldNodes.replaceWith(nodes477);
              }));
              callback(root698); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes476;
              nodes476 = node.contents();
              oldNodes.replaceWith(nodes476);
            }));
            
            var tmp885 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp885.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp885.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp885.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp885.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp888 = mobl.ref(null);
            
            
            var tmp887 = mobl.ref(null);
            
            
            var tmp886 = mobl.ref(null);
            
            var nodes478 = $("<span>");
            iternode73.append(nodes478);
            subs__.addSub((mobl.block)(tmp885, tmp886, tmp887, tmp888, function(_, callback) {
              var root700 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes479 = $("<span>");
              root700.append(nodes479);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl139();
              }));
              
              function renderControl139() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root701 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root701); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes479;
                  nodes479 = node.contents();
                  oldNodes.replaceWith(nodes479);
                }));
              }
              renderControl139();
              callback(root700); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes478;
              nodes478 = node.contents();
              oldNodes.replaceWith(nodes478);
            }));
            
            var oldNodes = iternode73;
            iternode73 = iternode73.contents();
            oldNodes.replaceWith(iternode73);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list73.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
      });
    };
    renderList73();
    
    callback(root697); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes475;
    nodes475 = node.contents();
    oldNodes.replaceWith(nodes475);
  }));
  callback(root696); return subs__;
  
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
  var root702 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node314 = $("<table>");
  
  var ref335 = mobl.ref(ui.tableStyle);
  if(ref335.get() !== null) {
    node314.attr('class', ref335.get());
    subs__.addSub(ref335.addEventListener('change', function(_, ref, val) {
      node314.attr('class', val);
    }));
    
  }
  subs__.addSub(ref335.rebind());
  
  var nodes480 = $("<span>");
  node314.append(nodes480);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl140();
  }));
  
  function renderControl140() {
    subs__.addSub((elements)(function(elements, callback) {
      var root703 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root703); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes480;
      nodes480 = node.contents();
      oldNodes.replaceWith(nodes480);
    }));
  }
  renderControl140();
  root702.append(node314);
  callback(root702); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root704 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node315 = $("<tr>");
  
  var ref336 = mobl.ref(ui.trStyle);
  if(ref336.get() !== null) {
    node315.attr('class', ref336.get());
    subs__.addSub(ref336.addEventListener('change', function(_, ref, val) {
      node315.attr('class', val);
    }));
    
  }
  subs__.addSub(ref336.rebind());
  
  var nodes481 = $("<span>");
  node315.append(nodes481);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl141();
  }));
  
  function renderControl141() {
    subs__.addSub((elements)(function(elements, callback) {
      var root705 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root705); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes481;
      nodes481 = node.contents();
      oldNodes.replaceWith(nodes481);
    }));
  }
  renderControl141();
  root704.append(node315);
  callback(root704); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root706 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node316 = $("<td>");
  
  var ref337 = width;
  if(ref337.get() !== null) {
    node316.attr('width', ref337.get());
    subs__.addSub(ref337.addEventListener('change', function(_, ref, val) {
      node316.attr('width', val);
    }));
    
  }
  subs__.addSub(ref337.rebind());
  
  var ref338 = mobl.ref(ui.tdStyle);
  if(ref338.get() !== null) {
    node316.attr('class', ref338.get());
    subs__.addSub(ref338.addEventListener('change', function(_, ref, val) {
      node316.attr('class', val);
    }));
    
  }
  subs__.addSub(ref338.rebind());
  
  var nodes482 = $("<span>");
  node316.append(nodes482);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl142();
  }));
  
  function renderControl142() {
    subs__.addSub((elements)(function(elements, callback) {
      var root707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root707); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes482;
      nodes482 = node.contents();
      oldNodes.replaceWith(nodes482);
    }));
  }
  renderControl142();
  root706.append(node316);
  callback(root706); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root708 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node317 = $("<td>");
  
  var ref339 = width;
  if(ref339.get() !== null) {
    node317.attr('width', ref339.get());
    subs__.addSub(ref339.addEventListener('change', function(_, ref, val) {
      node317.attr('width', val);
    }));
    
  }
  subs__.addSub(ref339.rebind());
  
  var ref340 = mobl.ref(ui.tdStyle);
  if(ref340.get() !== null) {
    node317.attr('class', ref340.get());
    subs__.addSub(ref340.addEventListener('change', function(_, ref, val) {
      node317.attr('class', val);
    }));
    
  }
  subs__.addSub(ref340.rebind());
  
  var nodes483 = $("<span>");
  node317.append(nodes483);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl143();
  }));
  
  function renderControl143() {
    subs__.addSub((elements)(function(elements, callback) {
      var root709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root709); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes483;
      nodes483 = node.contents();
      oldNodes.replaceWith(nodes483);
    }));
  }
  renderControl143();
  root708.append(node317);
  callback(root708); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root710 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node318 = $("<td>");
  
  var ref341 = width;
  if(ref341.get() !== null) {
    node318.attr('width', ref341.get());
    subs__.addSub(ref341.addEventListener('change', function(_, ref, val) {
      node318.attr('width', val);
    }));
    
  }
  subs__.addSub(ref341.rebind());
  
  var ref342 = mobl.ref(ui.tdStyle);
  if(ref342.get() !== null) {
    node318.attr('class', ref342.get());
    subs__.addSub(ref342.addEventListener('change', function(_, ref, val) {
      node318.attr('class', val);
    }));
    
  }
  subs__.addSub(ref342.rebind());
  
  
  var node319 = $("<strong>");
  
  var nodes484 = $("<span>");
  node319.append(nodes484);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl144();
  }));
  
  function renderControl144() {
    subs__.addSub((elements)(function(elements, callback) {
      var root711 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root711); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes484;
      nodes484 = node.contents();
      oldNodes.replaceWith(nodes484);
    }));
  }
  renderControl144();
  node318.append(node319);
  root710.append(node318);
  callback(root710); return subs__;
  
  
  
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
ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root712 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root712.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root712); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
