
        window.HeroFade_Object = {};
        ( function( window, $, that ) {
        
           
            that.init = function() {
                that.cache();
        
                if ( that.meetsRequirements ) {
                    that.bindEvents();
                }
            };
        
            that.cache = function() {
                that.$c = {
                    window: $(window),
                    heroSelector: $( '.hero' ),
                };
            };
        
            that.bindEvents = function() {
                that.$c.window.on( 'load', that.doHero );
            };
        
            that.meetsRequirements = function() {
                return that.$c.heroSelector.length;
            };
        
           
            that.doHero = function() {
                  $(window).scroll(function(){
                  
                  $( ".hero" ).css("opacity", 1 - $(window).scrollTop() / $('.hero').height());
              });
            };
        
            $( that.init );
        
        })( window, jQuery, window.HeroFade_Object );
          