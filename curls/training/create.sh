#!/bin/bash

API="https://serene-bastion-18925.herokuapp.com"
URL_PATH="/training"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "training": {
      "name": "'"${NAME}"'",
      "type": "'"${TYPE}"'",
      "difficulty": "'"${DIFFICULTY}"'"
    }
  }'

echo
