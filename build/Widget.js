Widget = StudioWidgetWrapper.extend({
  init: function () {
    this._super.apply(this, arguments)
    this.render()
  },
  render: function () {
    console.log(this)

    const items = this.getItems()
    const elem = this.getContainer()
    const widgetProperties = this.getProperties()
    const widgetBasePath = this.getWidgetBasePath()
    const connectorProperties = this.getConnectorProperties()
    if (elem) {
      console.log('elem', elem)
      console.log('items', items)
      console.log('widgetBasePath', widgetBasePath)
      console.log('widgetProperties', widgetProperties)
      console.log('connectorProperties', connectorProperties)

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
