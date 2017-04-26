import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',  // 设置默认值为空字符串
    //  使用正则表达式判断邮箱格式，如果正确则返回true反之返回false
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    // 把计算属性isValid绑定到isDisabled上
    isDisabled: Ember.computed.not('isValid'),  //当`disabled=false`时按钮可用，所以正好需要取反

    emailLength:'lenth',

    textMessage:'',

    // 不适用Ember封装的方法，手动写判断
    isDisabled2: Ember.computed('emailLength', 'textMessage', function() {
        var msg = this.get('emailLength');
        var email = this.get('textMessage');
        var re = /^.+@.+\..+$/;
        //当`disabled=false`时按钮可用，所以正好需要取反
        var xx = !(msg.length >= 5 && re.test(email));
        console.log(xx);
        return xx;

    }),

    actions: {
        saveInvitation: function() {
            // 模拟保存操作
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            //  情况输入框内容
            this.set('emailAddress', '');
        }
    }
});