#!/bin/bash -e

source_path=$(pwd)
out_path=$1

echo "building from '$source_path' to '$out_path'"

mkdir -p node_modules
cp -R node_modules $out_path/
cp -R scripts $out_path/
cp CNAME $out_path/
cp *.html $out_path/

echo "building complete!"

