function loadFragment(containerId, url) {
  var el = document.getElementById(containerId);
  if (!el) return;
  fetch(url, { cache: 'no-cache' })
    .then(function (res) { return res.text(); })
    .then(function (html) { el.innerHTML = html; })
    .catch(function (err) {
      console.error('Failed to load fragment:', url, err);
      el.innerHTML = '<p style="color:#b94a48;">Failed to load research framework.</p>';
    });
}
