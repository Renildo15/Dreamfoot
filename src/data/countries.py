import requests
import json
import locale

locale.setlocale(locale.LC_ALL, "pt_BR.UTF-8")

response = requests.get("https://restcountries.com/v3.1/all")
data = response.json()
countries = []
for d in data:
    country_dict = {
          "name": d["translations"]["por"]["common"],
          "url": d["flags"]["svg"]
    }
    countries.append(country_dict)

countries_sorted = sorted(countries, key=lambda x: locale.strxfrm(x["name"]))

with open("countries.json", "w", encoding="utf-8") as file:
        json.dump(countries_sorted, file, indent=4, ensure_ascii=False)

print("Arquivo JSON criado com sucesso!")
