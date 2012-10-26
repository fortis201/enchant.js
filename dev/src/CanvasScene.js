/**
 * @scope enchant.Scene.prototype
 */
enchant.CanvasScene = enchant.Class.create(enchant.CanvasGroup, {
    /**
     [lang:ja]
     * 表示オブジェクトツリーのルートになるクラス.
     [/lang]
     [lang:en]
     * Class that becomes the root of an object tree which can be displayed.
     [/lang]
     [lang:de]
     * Eine Klasse die zur Wurzel in Objektbaum wird, welcher dargestellt werden kann.
     [/lang]
     *
     * @example
     *   var scene = new CanvasScene();
     *   scene.addChild(player);
     *   scene.addChild(enemy);
     *   game.pushScene(scene);
     *
     * @constructs
     * @extends enchant.CanvasGroup
     */
    initialize: function() {
        enchant.CanvasGroup.call(this);
        this.scene = this;
    },
    /**
    [lang:ja]
    * CanvasSceneの背景色.
    * CSSの'color'プロパティと同様の形式で指定できる.
    * @type {String}
    [/lang]
    [lang:en]
    * CanvasScene background color.
    * Must be provided in the same format as the CSS 'color' property.
    * @type {String}
    [/lang]
    [lang:de]
    * Die Hintergrundfarbe der Canvas Szene.
    * Muss im gleichen Format definiert werden wie das CSS 'color' Attribut.
    * @type {String}
    [/lang]
    */
    backgroundColor: {
        get: function() {
            return this._backgroundColor;
        },
        set: function(color) {
            this._backgroundColor = color;
        }
    },
    _updateCoordinate: function() {
        this._offsetX = this._x;
        this._offsetY = this._y;
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            this.childNodes[i]._updateCoordinate();
        }
        this._dirty = true;
    }
});
