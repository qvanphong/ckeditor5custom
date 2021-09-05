import { Plugin } from 'ckeditor5/src/core'

import WidgetUI from './widgetui'
import WidgetCommand from './widgetcommand';
import WidgetEditing from './widgetediting';

export default class Widget extends Plugin {
  /**
   * @inheritDoc
   */
  static get requires() {
    return [WidgetEditing, WidgetUI]
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'NTVWidget'
  }
}
