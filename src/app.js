import Backbone	from 'backbone';
import userInfo from './views/userInfo';
import './scss/main.scss';

const userInfoView = new userInfo({
	el: '#userInfo',
	model: new Backbone.Model(require('../lib/mock/userInfo.json'))
});
userInfoView.render();