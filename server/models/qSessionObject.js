import getApp from "./qApp";

class qSessionObject {

  constructor(properties) {
    this.properties = properties;
    this.object = null;
  }

  open() {
    if (!this.object) {
      return getApp.then((app) => {
        return app.createSessionObject(this.properties).then((object) => {
          this.object = object;
        });
      });
    }
  }

  close() {
    if (this.object) {
      return getApp.then((app) => {
        return app.destroySessionObject(this.object.id).then(() => {
          this.object = null;
        });
      });
    }
  }

}

export default qSessionObject;