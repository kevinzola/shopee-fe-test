module.exports = {
  "First Load": browser => {
    browser
      // Load the page at the launch URL
      .url(browser.launchUrl);

    browser.assert.urlContains(browser.launchUrl);
  },
  close: browser => {}
};
