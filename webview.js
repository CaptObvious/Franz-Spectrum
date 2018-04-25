module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const indirectCount = document.getElementsByClassName("sidebar-list bookmarks")[0].getElementsByClassName("unread-flag").length;

    let directCount = 0;
    
    const directElements = Array.prototype.slice.call(document.getElementsByClassName("sidebar-list private-lobbies")[0].getElementsByClassName("count"));
    console.log(directElements);
    if (directElements.length > 0) {
      directCount = directElements.map((unreadElement) => parseInt(unreadElement.innerHTML)).reduce((a, b) => a + b, 0);
    }

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
