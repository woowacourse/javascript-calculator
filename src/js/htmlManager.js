class HtmlManager {
  addClickEventHandler(elements, handler) {
    if (elements.forEach === undefined) {
      elements.addEventListener("click", handler);
    } else {
      elements.forEach((element) => element.addEventListener("click", handler));
    }
  }
}

export default new HtmlManager();
