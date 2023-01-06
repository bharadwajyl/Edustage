// Card slider
var instance = $(".slider");
$.each( instance, function(key, value) {
    box = $(instance[key]).find(".card"), 
    x = 0,
    mx = 0,
    maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);
    $(box).on({
        mousemove: function(e) {
            var mx2 = e.pageX - this.offsetLeft;
            if(mx) this.scrollLeft = this.sx + mx - mx2;
        },
        mousedown: function(e) {
            this.sx = this.scrollLeft;
            mx = e.pageX - this.offsetLeft;
        },
    });
    $(document).on("mouseup", function(){
        mx = 0;
    });
});
