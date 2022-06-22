Widget = Widget.extend({
  propertiesConfig: [{ config: [] }],
  create: function (cbk) {
    if (cbk) {
      this._super()
      cbk()
    }
  },
})
Studio.registerWidget('Widget', 'Widget', {})
