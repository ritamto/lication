#!/bin/bash
set -e

cd /var/www/lication
git pull --ff-only
caddy validate --config /etc/caddy/Caddyfile
systemctl reload caddy

echo "Deployed."