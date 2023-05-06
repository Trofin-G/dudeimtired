// init handlers
let layoutHandler = null;
let homepageHandler = null;

const initHandlers = () => {
    layoutHandler = new LayoutHandler();
    homepageHandler = new HomepageHandler();
};

// uncomment this to use jQuery
(($) => {
    $(document).ready(() => {
        initHandlers();
    });
})(jQuery);

// init handlers using vanilla
// document.addEventListener('DOMContentLoaded', () => { initHandlers(); });
