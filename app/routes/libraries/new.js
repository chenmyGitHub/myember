// app/routes/libraries/new.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  actions: {
    //  处理模板上输入的数据
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
