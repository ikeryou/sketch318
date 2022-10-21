import { Conf } from "../core/conf";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class FormItem extends MyDisplay {

  private _con:HTMLElement;

  constructor(opt:any) {
    super(opt)

    this._con = this.qs('.con');
    this.addClass('s-gpu');

    Tween.instance.set(this.qs('.text'), {
      // color:Util.instance.randomArr(Conf.instance.COLOR).getStyle(),
      backgroundColor:Util.instance.randomArr(Conf.instance.COLOR).getStyle(),
    })

    this._resize();
  }

  public setSize(size:number): void {
    Tween.instance.set(this.getEl(), {
      width: size,
    })

    Tween.instance.set(this._con, {
      width: size,
      x:-size * 0.5,
    })
  }

  protected _update(): void {
    super._update();
  }

  protected _resize(): void {
    super._resize();
  }
}