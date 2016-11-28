#!/bin/bash

@echo off
git pull
pause
git add .
pause
echo Enter a commit message
set /p commitMessage = 
git commit -m %commitMessage%
git push https://github.com/DEVAbhinav/Mint-Bars.git
pause
