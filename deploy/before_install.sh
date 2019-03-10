#!/bin/bash
sudo service nginx stop
echo "nignx stop"
git pull origin master
echo "master branch successfully"
#pm2 restart ecosytem.config
echo "pm2 started successfully"