When calling API request :
- Always check if token is validate by https://id.twitch.tv/oauth2/validate with "OAuth <REACT_APP_APP_ACCESS_TOKEN>" in Authorization header. If result client_id is the same than <REACT_APP_CLIENT_ID>, you can do your request, else, if your token is expired, you have to validate it again by doing a POST request to the endpoint "https://id.twitch.tv/oauth2/authorize" with 
{
  "client_id": "<REACT_APP_CLIENT_ID>",
  "client_secret": "<REACT_APP_APP_ACCESS_TOKEN>",
  "grant_type": "client_credentials"
}
this json in datas.

- When validation is passed, you have to set "Bearer <REACT_APP_APP_ACCESS_TOKEN>" in Authorization header. Now it should work properly :).