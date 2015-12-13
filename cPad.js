
/*Read and Write data (as a JSON object) to/from Firebase database 
by creating a reference to the database, using a Firebase Constructor
*/
var myFirebaseRef = new Firebase('https://torrid-heat-7360.firebaseio.com/');
var newUserHash = "abcd"; // like a userid (?)

// WRITE Data into the Fb databse by using the on() method
// and attaching a listener (i.e., callback), triggered whenever the data changes
// catching events with jQuery: 1. select HTML element 2. chain jQuery functions
// $(selector).on(<event>, <event handler function>);
// when event happens, function is called and jQuery will pass in an event object 
// that you can access using the event variable; the event variable will contain info about the event
$('#code').on('keyup', function(event) { // keyup event (when a user has finished typing)
  var updateObj = {};
  updateObj[newUserHash] = $('#code').val() // .val() is jQuery function; it gets the value of selected HTML element
  myFirebaseRef.update(updateObj); // use update() method to update without overwriting
});

// The 'value' event type will fire at start, and every time value of data changes
// A snapshot is a picture of the data at a particular db ref at a single point in time. 
// calling val() on the data snapshot returns JS object representation of data
// child() gets DataSnapshot for location at specified path
myFirebaseRef.child(newUserHash).on("value", function(snapshot) {
  $('#code').val(snapshot.val()); // extract contents of snapshot as JS object by callling its val() method
});

