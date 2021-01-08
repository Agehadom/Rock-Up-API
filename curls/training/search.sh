API="https://serene-bastion-18925.herokuapp.com"
URL_PATH="/training"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
