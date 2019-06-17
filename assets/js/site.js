acim = {
  contentParagraphTypes:  ["fip", "expanded", "substituted", "simplified", "commentary"]
};

  // save to local storage when unloading
window.addEventListener("beforeunload", function() {
  var checkedboxes = [];
  var checkBoxes = document.querySelectorAll("input[class=check-par]");
  for(var i = 0; i < checkBoxes.length; ++i) {
    var cb = checkBoxes[i];
    if (cb.checked)
      checkedboxes.push(cb.getAttribute("id").substring(3));
  }
  localStorage.setItem("selectedParagraphs", checkedboxes.join("|"));
});

document.addEventListener("DOMContentLoaded", function() {

  // first set event handlers
  for(var i = 0; i < acim.contentParagraphTypes.length; ++i) {
    var cpt = acim.contentParagraphTypes[i];
    var cb = document.getElementById("cb-" + cpt);
    cb.addEventListener("change", function() {
      var cb = this;
      var id = cb.getAttribute("id").substring(3);
      var paras = document.querySelectorAll("p." + id);
      [].slice.call(paras).forEach(function(p) {
        p.style.display = (cb.checked ? "block" : "none");
      });
    });
  }

  // get stored values and trigger events if needed
  var selectedParagraphs = localStorage.getItem("selectedParagraphs");
  if (selectedParagraphs) {
    var checkBoxes = document.querySelectorAll("input[class=check-par]");
    for(var i = 0; i < checkBoxes.length; ++i) {
      var cb = checkBoxes[i];
      var id = cb.getAttribute("id").substring(3); // get rid of leading cb-
      cb.checked = selectedParagraphs.indexOf(id) >= 0;
      cb.dispatchEvent(new Event("change"));
      
    }
  }


});
