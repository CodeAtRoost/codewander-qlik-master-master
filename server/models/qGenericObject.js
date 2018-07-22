import getApp from "./qApp";

class qGenericObject {

  constructor(properties) {
    this.properties = properties;
    this.object = null;
  }

  open() {
    if (!this.object) {
      return getApp.then((app) => {
        return app.createObject (this.properties).then((object) => {
          this.object = object;
        });
      });
    }
  }

  close() {
    if (this.object) {
      return getApp.then((app) => {
        return app.destroyObject (this.object.id).then(() => {
          this.object = null;
        });
      });
    }
  }
  
  

}

export default qGenericObject;