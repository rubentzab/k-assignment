import Backbone	from 'backbone';
import userDashboard from './views/userDashboard';
import './scss/main.scss';
// import '../node_modules/foundation-sites/dist/css/foundation.min.css';
// import foundation from '../node_modules/foundation-sites/dist/js/foundation.min.js';

const userDashboardView = new userDashboard({
	el: '#user-details',
	model: new Backbone.Model(require('../lib/mock/userDetails.json'))
});
userDashboardView.render();