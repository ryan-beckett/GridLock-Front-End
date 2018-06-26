declare var $: any;

export class Utils {

  public static NotifyType = {
    SUCCESS: 0,
    ERROR: 1
  }

  public static notify(msg: string, notifyType: number): void {
    var alertType = null;
    var icon = null;
    if (notifyType == this.NotifyType.SUCCESS) {
      alertType = "success";
      icon = "far fa-thumbs-up";
    } else if (notifyType == this.NotifyType.ERROR) {
      alertType = "error";
      icon = "fas fa-times";
    }
    $.notify({
        message: "<i class=\"" + icon + "\"></i>&nbsp;" + msg
      }, {
        element: 'body',
        delay: 5000,
        timer: 1000,
        type: alertType,
        mouse_over: 'pause',
        animate:
          {
            enter: 'animated fadeInRight',
            exit:
              'animated fadeOutRight'
          },
        placement:
          {
            from: "bottom",
            align:
              "right"
          }
      }
    );
  }
}
