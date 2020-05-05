let browser;
// 0x49 = I
mp.keys.bind(0x4F, true, () => {
    if(browser === undefined) {
      // Activation of page
        browser = mp.browsers.new("package://phone/index.html");
        mp.gui.cursor.show(true, true);
    } else {
      // If browser exist destroy it
        browser.destroy();
        browser = undefined;
        mp.gui.cursor.show(false, false);
    }
});