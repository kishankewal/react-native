#!/bin/bash

if [ -z	"$1"  ]; then
	echo "Commit message cannot not be empty. bash push.sh <Commit message>"
	exit
fi


git add .
git commit -m "$1"
git push
