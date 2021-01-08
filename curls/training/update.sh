API="http://localhost:4741"
URL_PATH="/training"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
