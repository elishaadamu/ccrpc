(function(){
  function initImageExpand() {
    let figs = document
      .querySelectorAll('.plandoc-image-left, .plandoc-image-right');
    for (let i = 0; i < figs.length; i++) {
      let fig = figs[i];
      let icon = document.createElement('ion-icon');
      icon.name = 'expand';
      let button = document.createElement('button');
      button.classList.add('plandoc-image-expander');
      button.appendChild(icon);
      button.setAttribute('aria-hidden', 'true');
      button.addEventListener('click', function(e) {
        showImageExpand(fig);
      });
      button.title = 'View image larger';
      let wrapper = document.createElement('div');
      wrapper.classList.add('plandoc-image-wrapper');
      wrapper.appendChild(fig.querySelector('img'));
      wrapper.appendChild(button);
      fig.insertBefore(wrapper, fig.childNodes[0]);
    }
    document.body.addEventListener('keydown', function(e) {
      if (e.keyCode === 27) hideImageExpand();
    });
  }

  function showImageExpand(fig) {
    let overlay = document.createElement('div');
    overlay.classList.add('plandoc-overlay');
    overlay.appendChild(fig.cloneNode(true));
    document.body.appendChild(overlay);
    overlay.addEventListener('click', hideImageExpand);
    overlay.querySelector('ion-icon').remove();
    let button = overlay.querySelector('button');
    button.title = 'Close image';
    let icon = document.createElement('ion-icon');
    icon.name = 'contract';
    button.appendChild(icon);
  }

  function hideImageExpand() {
    let overlay = document.querySelector('div.plandoc-overlay');
    if (overlay) overlay.remove();
  }

  function addHeadingPermalinks() {
    let content = document.querySelector('.usa-layout-docs-main_content');
    if (!content) return;
    let headings = content.querySelectorAll('h2,h3,h4,h5,h6');
    for (let i=0; i < headings.length; i++) {
      let heading = headings[i];
      if (!heading.id) continue;
      let a = document.createElement('a');
      a.classList.add('plandoc-heading-permalink');
      a.href = '#' + heading.id;
      a.textContent = '\u00B6';
      a.title = 'Permalink to ' + heading.textContent;
      heading.appendChild(a);
    }
  }

  function addCommentLinks() {
    let email = document.body.getAttribute('data-comments-email');
    if (!email) return;

    let subject = document.body.getAttribute('data-comments-subject') ||
      ('Comments on ' + document.title);

    let content = document.querySelector('.plandoc-content');
    if (!content) return;

    let headings = content.querySelectorAll('h1,h2,h3,h4,h5,h6');
    for (let i=0; i < headings.length; i++) {
      let heading = headings[i];
      if (heading.classList.contains('plandoc-nocomment')) continue;
      if (heading.classList.contains('usa-accordion__heading')) continue;

      let a = document.createElement('a');
      a.classList.add('plandoc-send-comment');
      a.title = 'Provide comments about ' + heading.textContent;
      let href = window.location.href.replace(window.location.hash, "");
      if (heading.id) href += `#${heading.id}`;
      a.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(href)}`;
      let icon = document.createElement('ion-icon');
      icon.name = 'chatbubbles';
      a.appendChild(icon);
      heading.appendChild(a);
    }
  }

  initImageExpand();
  addCommentLinks();
  addHeadingPermalinks();
})();
