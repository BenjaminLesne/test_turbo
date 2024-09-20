#!/bin/sh
if grep -R "test.only" ./e2e; then
    echo "🛑🛑🛑🛑 Push aborted: Remove 'test.only' from test files. 🛑🛑🛑🛑"
    exit 1
fi

if grep -R "page.pause" ./e2e; then
    echo "🛑🛑🛑🛑 Push aborted: Remove 'page.pause' from test files. 🛑🛑🛑🛑"
    exit 1
fi