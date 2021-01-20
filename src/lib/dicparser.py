import json


class JavaScriptObject:
    def __init__(self, kanji, kana, pitch, url, pitch_type=None):
        self.kanji = kanji
        self.kana = kana
        self.pitch = pitch
        self.pitchType = pitch_type
        self.url = url
        self.status_code = None
        self.valid = False
        self.pitchChoices = []

    def __str__(self):
        return f"kanji: {self.kanji}, kana: {self.kana}, pitch: {self.pitch}, type: {self.pitchType}"


objects = []

with open("./dict_parsed.json", 'r', encoding="utf-8") as f:
    data = json.load(f)

for line in data:
    obj = JavaScriptObject(
        line['kanji'], line['kana'], line['pitch'], line['url'], line['pitchType'])
    objects.append(obj)

with open('./dict_parsed.json', 'w', encoding="utf-8") as f:
    json.dump(objects, fp=f, default=vars, indent=2)
