import json
import requests
import time
from threading import Thread

# def determine_pitch_type(pitch, mora):
#     if pitch == 0:
#         return "平板"
#     elif pitch == 1 and mora > 1:
#         return "頭高"
#     elif pitch == mora:
#         return "尾高"
#     else:
#         return "中高"


class JavaScriptObject:
    def __init__(self, kanji, kana, pitch, url, pitch_type=None):
        self.kanji = kanji
        self.kana = kana
        self.pitch = pitch
        self.pitch_type = pitch_type
        self.url = url
        self.status_code = None
        self.valid = False

    def __str__(self):
        return f"kanji: {self.kanji}, kana: {self.kana}, pitch: {self.pitch}, type: {self.pitch_type}"

    def check_valid_url(self):
        response = requests.head(self.url)
        if response.status_code != 200:
            self.status_code = response.status_code
            print(response.status_code)
            return
        if response.headers["Content-length"] == "52288":
            self.valid = False
        else:
            self.valid = True


objects = []

with open("./dict_parsed.json", 'r', encoding="utf-8") as f:
    data = json.load(f)

for line in data:
    if line['status_code']:
        continue
    if not line['valid']:
        continue
    obj = JavaScriptObject(
        line['kanji'], line['kana'], line['pitch'], line['url'], line['pitch_type'])
    objects.append(obj)


def threaded(arr, offset=0, amount=1000):
    counter = 0
    arr = arr[offset:offset + amount]
    for i in arr:
        i.check_valid_url()
        counter += 1
        print(counter)


amount = len(objects) // 10

threads = [Thread(target=threaded, args=(objects, amount * i, amount))
           for i in range(0, 10)]

for thread in threads:
    thread.start()

[thread.join() for thread in threads]

objects = [word for word in objects if word.valid]

with open('./validated_dict.json', 'w', encoding="utf-8") as f:
    json.dump(objects, fp=f, default=vars, indent=2)


# Parser for the previous dict format

    # for line in data:
    #     word = json.loads(line)
    #     if not word['kana']:
    #         word['kana'] = word['kanji']
    #     if word['pitch'] == '(':
    #         continue
    #     elif word['pitch'] == ')':
    #         word['pitch'] = '1'
    #     obj = JavaScriptObject(
    #         word['kanji'], word['kana'], word['pitch'], word['url'])
    #     objects.append(obj)

    # new_data = [line.replace('\t', ' ').strip().split(' ') for line in data]
    # base_url = "http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?"

    # parsed_data = []

    # for line in new_data:
    #     kanji, kana, pitch = line
    #     url = f"{base_url}kanji={kanji}&kana={kana}"
    #     obj = JavaScriptObject(kanji, kana, pitch[0], url)
    #     y = json.dumps(obj, default=vars)
    #     parsed_data.append(y)
