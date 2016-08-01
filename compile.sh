#!/bin/bash

echo "building started..."

mkdir -p out/
cp -R node_modules out/
cp -R scripts out/
cp CNAME out/
cp *.html out/

echo "building complete!"
