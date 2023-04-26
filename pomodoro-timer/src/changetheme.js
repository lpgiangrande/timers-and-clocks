function changeTheme() {
    // get the document style sheet
    const styleSheet = document.styleSheets[0];
  
    // find the :root selector rule
    let rootRule;
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
      const rule = styleSheet.cssRules[i];
      if (rule.selectorText === ':root') {
        rootRule = rule;
        break;
      }
    }
  
    // change the values of the variables
    rootRule.style.setProperty('--bg', '#bcd4de');
    rootRule.style.setProperty('--timer-bg', '#9dacb2');
    rootRule.style.setProperty('--bright-color', '#1c2321');
    rootRule.style.setProperty('--bright-highlight', '#5e6572');
    rootRule.style.setProperty('--texts', '#eef1ef');
    rootRule.style.setProperty('--texts-rgb', '47, 79, 79');
  }