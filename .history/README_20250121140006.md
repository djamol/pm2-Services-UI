### Node Server UI
Opensource Alternative to PM2 Plus

##### FEATURES
- Secure Login :white_check_mark:
- App Management :white_check_mark:
- Log Viewer :white_check_mark:
- Responsive UI :white_check_mark:
- Manual and Auto(Github webhooks) Deployment
- Environment Management

##### USAGE
```
git clone https://github.com/djamol/pm2-Services-UI
cd pm2-Services-UI
npm install
cp env.example .env
npm run setup-admin-user  --username="admin" --password="admin" # (Required for login)
npm start
```

#### TODO
- [ ] support for relative paths
- [ ] use fs-extra for filesystem operations
- [ ] use [jsonfile](https://www.npmjs.com/package/jsonfile) for config management
- [ ] replace exec.util with [execa](https://www.npmjs.com/package/execa)
- [ ] add form based env management
- [ ] add realtime logs
- [ ] add log viewer for deployments
- [ ] add deployment abort functionality
- [ ] add deployment triggers
- [ ] add web terminal
- [ ] add zero downtime deployment strategies - blue-green, rolling etc
- [ ] add docker provider*

##### SCREENSHOTS
