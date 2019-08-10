window.onpageshow = function(event) {
  if (event.persisted) {
    location.reload(true);
  }
};
