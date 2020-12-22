var clipboard = new Clipboard('.btn-copy');

clipboard.on('success', function(e) {
   e.clearSelection();
   alert('복사되었습니다.');
});

clipboard.on('error', function(e) {
   prompt('', e.data("clipboard-text"));
});

$('.btn-copy').on('click', function(e) {
   e.preventDefault();
});
