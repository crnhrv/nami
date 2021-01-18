import json

with open("./dict_orig.txt", 'r', encoding="utf-8") as f:
    data = f.readlines()

new = [line.replace('\t', ' ').strip().split(' ') for line in data]

with open('./dict_parsed.js', 'w', encoding="utf-8") as f:
    json.dump(new, fp=f)
