Widget = StudioWidgetWrapper.extend({
  init: function () {
    this._super.apply(this, arguments)
    this.render()
  },
  render: function () {
    const elem = this.getContainer()
    const widgetBasePath = this.getWidgetBasePath()
    if (elem) {
      const importModule = (src) => {
        const script = document.createElement('script')
        script.setAttribute('type', 'module')
        script.setAttribute('crossorigin', 'true')
        script.setAttribute('src', src)
        document.head.appendChild(script)
      }
      importModule(widgetBasePath + 'dist/index.js')
    }
  },
})
