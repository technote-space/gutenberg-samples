#!/usr/bin/env bash

set -e

if [[ $# -lt 1 ]]; then
	exit 1
fi

SCRIPT_DIR=${1}
source ${SCRIPT_DIR}/variables.sh

yarn --cwd ${JS_DIR} cache clean
yarn --cwd ${JS_DIR} install
yarn --cwd ${JS_DIR} build

cp -f ${JS_DIR}/dropdown1.min.js ${GH_PAGES_DIR}/index.min.js
cat ${JS_DIR}/dropdown2.min.js >> ${GH_PAGES_DIR}/index.min.js
curl -o ${GH_PAGES_DIR}/screenshot.png https://raw.githubusercontent.com/technote-space/gutenberg-samples/master/screenshot-2.png
