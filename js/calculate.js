/**
 * Created by Bear on 9/30/2014.
 */

function calculate () {

    var oGravity = $('#FirstGravity').val();
    var fGravity = $('#SecondGravity').val();


    var abv = (oGravity - fGravity)*131;
    $('#abv').val( abv.toFixed(2) );


    return false;
}
$('#calculator').submit( calculate );