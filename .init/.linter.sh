#!/bin/bash
cd /tmp/kavia/workspace/code-generation/smart-notes-manager-935-944/frontend_notes_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

