(function($) {

   // $(".site-title").append("<img id='theImg' src='http://localhost:8888/katycodes/wp-content/uploads/2018/04/Desktop-HD-1.png'/>");

   $('#masthead').prepend('<iframe src="https://player.vimeo.com/video/158758343?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="2000" height="1125" data-vimeo-portrait="false" frameborder="0"></iframe>');


//   $('#wp-custom-header > img').attr('id', 'header-image');
//
//
//   function draw() {
//         // Get the canvas element and set the dimensions.
//         var canvas = document.getElementById('canvas');
//         canvas.height = window.innerHeight;
//         canvas.width = window.innerWidth;
//
//        // Get a 2D context.
//         var ctx = canvas.getContext('2d');
//
//         // create new image object to use as pattern
//         var img = document.getElementById('header-image');
//         img.src = document.getElementById('url').value;
//         img.onload = function(){
//             // Create pattern and don't repeat!
//            var ptrn = ctx.createPattern(img,'no-repeat');
//            ctx.fillStyle = ptrn;
//            ctx.fillRect(0,0,canvas.width,canvas.height);
//
//         }
//  }
//
//   (function(){
//     var canvas = document.getElementById('wp-custom-header'),
//         /** @type {CanvasRenderingContext2D} */
//         ctx = canvas.getContext('2d'),
//         width = 960,
//         height = 400,
//         half_width = width >> 1,
//         half_height = height >> 1,
//         size = width * (height + 2) * 2,
//         delay = 30,
//         oldind = width,
//         newind = width * (height + 3),
//         riprad = 3,
//         ripplemap = [],
//         last_map = [],
//         ripple,
//         texture,
//         line_width = 20,
//         step = line_width * 2,
//         count = height / line_width;
//
//     canvas.width = width;
//     canvas.height = height;
//
//     /*
//      * Water ripple demo can work with any bitmap image
//      * (see example here: http://media.chikuyonok.ru/ripple/)
//      * But I need to draw simple artwork to bypass 1k limitation
//      */
//     with (ctx) {
//         fillStyle = '#a2ddf8';
//         fillRect(0, 0, width, height);
//
//         fillStyle = '#07b';
//         save();
//         rotate(-0.785);
//         for (var i = 0; i < count; i++) {
//             fillRect(-width, i * step, width * 3, line_width);
//         }
//
//         restore();
//     }
//
//     texture = ctx.getImageData(0, 0, width, height);
//     ripple = ctx.getImageData(0, 0, width, height);
//
//     for (var i = 0; i < size; i++) {
//         last_map[i] = ripplemap[i] = 0;
//     }
//
//     /**
//      * Main loop
//      */
//     function run() {
//         newframe();
//         ctx.putImageData(ripple, 0, 0);
//     }
//
//     /**
//      * Disturb water at specified point
//      */
//     function disturb(dx, dy) {
//         dx <<= 0;
//         dy <<= 0;
//
//         for (var j = dy - riprad; j < dy + riprad; j++) {
//             for (var k = dx - riprad; k < dx + riprad; k++) {
//                 ripplemap[oldind + (j * width) + k] += 128;
//             }
//         }
//     }
//
//     /**
//      * Generates new ripples
//      */
//     function newframe() {
//         var a, b, data, cur_pixel, new_pixel, old_data;
//
//         var t = oldind; oldind = newind; newind = t;
//         var i = 0;
//
//         // create local copies of variables to decrease
//         // scope lookup time in Firefox
//         var _width = width,
//             _height = height,
//             _ripplemap = ripplemap,
//             _last_map = last_map,
//             _rd = ripple.data,
//             _td = texture.data,
//             _half_width = half_width,
//             _half_height = half_height;
//
//         for (var y = 0; y < _height; y++) {
//             for (var x = 0; x < _width; x++) {
//                 var _newind = newind + i, _mapind = oldind + i;
//                 data = (
//                     _ripplemap[_mapind - _width] +
//                     _ripplemap[_mapind + _width] +
//                     _ripplemap[_mapind - 1] +
//                     _ripplemap[_mapind + 1]) >> 1;
//
//                 data -= _ripplemap[_newind];
//                 data -= data >> 5;
//
//                 _ripplemap[_newind] = data;
//
//                 //where data=0 then still, where data>0 then wave
//                 data = 1024 - data;
//
//                 old_data = _last_map[i];
//                 _last_map[i] = data;
//
//                 if (old_data != data) {
//                     //offsets
//                     a = (((x - _half_width) * data / 1024) << 0) + _half_width;
//                     b = (((y - _half_height) * data / 1024) << 0) + _half_height;
//
//                     //bounds check
//                     if (a >= _width) a = _width - 1;
//                     if (a < 0) a = 0;
//                     if (b >= _height) b = _height - 1;
//                     if (b < 0) b = 0;
//
//                     new_pixel = (a + (b * _width)) * 4;
//                     cur_pixel = i * 4;
//
//                     _rd[cur_pixel] = _td[new_pixel];
//                     _rd[cur_pixel + 1] = _td[new_pixel + 1];
//                     _rd[cur_pixel + 2] = _td[new_pixel + 2];
//                 }
//
//                 ++i;
//             }
//         }
//     }
//
//     canvas.onmousemove = function(/* Event */ evt) {
//         disturb(evt.offsetX || evt.layerX, evt.offsetY || evt.layerY);
//     };
//
//     setInterval(run, delay);
//
//     // generate random ripples
//     var rnd = Math.random;
//     setInterval(function() {
//         disturb(rnd() * width, rnd() * height);
//     }, 700);
//
// })();

 $("#player").removeClass(".player");


    })( jQuery );
