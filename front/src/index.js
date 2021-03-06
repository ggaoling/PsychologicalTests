import dva from 'dva';
import './index.css';
import {createLogger}  from 'redux-logger'

// 1. Initialize
const app = dva();

// 2. Plugins
app.use({onAction:createLogger()});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/login').default);
app.model(require('./models/user').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
