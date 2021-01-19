/**
 * Main app file.  Initializes app components.
 */

/**
 * The main app object.
 */
let budgetForward = {

  init: function() {
  	
    model.init();
    controller.init();
    view.init();

  }

};

budgetForward.init();