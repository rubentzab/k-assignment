import Backbone	from 'backbone';
import userDashboard from './views/userDashboard';
import './scss/main.scss';

const userDashboardView = new userDashboard({
	el: '#user-details',
	model: new Backbone.Model(require('../lib/mock/userDetails.json'))
});
userDashboardView.render();