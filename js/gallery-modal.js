// モーダルウィンドウ
function showModal(target) {
  $(target).fadeIn(300);
  $(".modal-backdrop").fadeIn(300);
}

function closeModal(target) {
  $(target).fadeOut(300);
  $(".modal-backdrop").fadeOut(300);
}

$(".modal").on("click", function (event) {
  event.preventDefault();
  const targetModal = $(this).data("target");
  showModal(targetModal);
});

$(".closemodal").on("click", function (event) {
  const targetModal = $(this).closest(".modalwrap");
  closeModal(targetModal);
});

$(".modal-backdrop").on("click", function (event) {
  closeModal(".modalwrap");
});
