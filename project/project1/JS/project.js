
function sideBarF() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.classList.contains('removeSideBar')) {
    sidebar.classList.remove('removeSideBar');
    document.body.classList.remove('body1');
  } else {
    sidebar.classList.add('removeSideBar');
    document.body.classList.add('body1')
    sidebar.classList.add('remove');

  }
}
