#!/bin/sh
java -jar fileserver.jar 3000 www > log/deploy.log 2>&1 &

