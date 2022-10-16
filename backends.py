import requests

endpoint = 'http://127.0.0.1:8000/lan'

getres = requests.get(endpoint)

#print(getres.json())
Input= input()
test = getres.json()
for i in test:
    if i["Text"]==Input:
        print(i["Meaning"])
