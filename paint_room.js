//Very interesting and challenging exercise.

function orderSupplies(item, callback) {
  var warehouse;
  var deliveryTime = Math.random() * 3000;
  setTimeout(function() {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() {
          return 'mix it!';
        }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() {
          return 'start painting!';
        }
      }
    };
    callback(warehouse[item]);
  }, deliveryTime);
}
function printDelivery(item) {
  var output = `${item.product} received, time to ${item.directions()}`;
  console.log(output);
}


var got_paint = false;
var paint;

var got_brush = false;
var brush;

//The point is to make clear which process starts first. If PaintProcess has started first then
//we got the PAINT and we print it.
//So, this means that BrushProcess has started as the second, and that implies that GOT_BRUSH is still set to FALSE.
//(So interesting, this means that in general, in the First Process we have access to old variables and the Second Process
//has not been able to change them, yet - no depending at time at all - even on microsecs).
//For more see below: (***)


//On the contrary,
//if the BrushProcess has started first - we have the GOT_BRUSH set to TRUE and so simply keep the track:
//print PAINT and right after the BRUSH.

orderSupplies('paint', function(item){
  paint = item;
  got_paint=true;
  printDelivery(paint);
  if(got_brush){  //<=>1-BP;2-PP
    printDelivery(brush);
  }
});
//Analogue manner:
//If BrushProcess has started as the first, and that implies that GOT_PAINT is still set to FALSE. We just set the var BRUSH to brush object.

//On the contrary,
//if the BrushProcess has started as the second - we have the GOT_PAINT set to TRUE - means that PAINT is printed already
//and so simply keep the track print BRUSH right after.
orderSupplies('brush', function(item){
  brush = item;
  got_brush = true;
  if(got_paint){ //<=>1-PP; 2-BP
     printDelivery(brush);
    }
});

///(***)
//Tremenduous example with WHILE loop on understanding the async process.

// var got_paint = false;
// var paint = null;
// var brush = null;
//
// var waiting_paint = true;
//
//
//
// orderSupplies('paint', function(item){
//   paint = item;
//   got_paint = true;
//   waiting_paint = false;
// });
//
// orderSupplies('brush', function(item){
  // brush = item;                       //(***)
//   while(waiting_paint){               //I thought that while I'm "waiting" the PaintProcess would start behind the scene and set
                                         //that var PAINT to paint object.
//    console.log('No paint!');          //But if this BrushProcess would start before the PaintProcess you'd be waiting forever
                                         //(infinite while loop). So, the hypothesis is not going to happen.
//    }
//   printDelivery(paint);
//   printDelivery(brush);
// });
//(***)Does this lead to: Inside asynchronous-ity there is synchronous-ity with no interruption during the flow?! Why not!
