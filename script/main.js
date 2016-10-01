// @koala-prepend "../node_modules/bootstrap/node_modules/jquery/dist/jquery.js"
// @koala-prepend "../node_modules/bootstrap/node_modules/tether/dist/js/tether.js"
// @koala-prepend "../node_modules/bootstrap/dist/js/bootstrap.js"
// @koala-prepend "../node_modules/node-waves/dist/waves.js"

Waves.attach('.btn');
Waves.init();

$('.modal').on('hide.bs.modal', function() {
    $(this).addClass('out');
}).on('hidden.bs.modal', function() {
    $(this).removeClass('out');
});