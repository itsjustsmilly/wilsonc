#!/bin/sh
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
cd "$(dirname "$0")/.."
npm run dev
