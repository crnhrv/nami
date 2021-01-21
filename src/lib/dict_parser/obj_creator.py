import json
from text_file_parser import TextFileParser


class Struct:
    def __init__(self):
        pass

    def __str__(self):
        return str(self.__dict__)


class ObjCreator:
    def __init__(self, base_obj=Struct):
        self.base_obj = base_obj
        self.dict_objects = []

    def write_objs_to_json(self, output_file, objs=None):
        if not objs:
            objs = self.dict_objects

        with open(output_file, 'w', encoding="utf-8") as f:
            json.dump(objs, fp=f, default=vars, indent=2)

    def create_objs_from_json(self, input_file, keys_to_skip=[]):
        with open(input_file, 'r', encoding="utf-8") as f:
            data = json.load(f)

        for line in data:
            obj = self.base_obj()
            for key, value in line.items():
                if key in keys_to_skip:
                    continue
                obj.__setattr__(key, value)
            self.dict_objects.append(obj)

        return self.dict_objects

    def create_objs_from_array(self, arr, keys=None, start=None, end=None):
        if not keys:
            keys = self.create_keys(arr)

        for line in arr[start:end]:
            obj = self.base_obj()
            for i, key in enumerate(keys):
                try:
                    obj.__setattr__(key, line[i])
                except IndexError:
                    obj.__setattr__(key, None)
            self.dict_objects.append(obj)

        return self.dict_objects

    def create_keys(self, arr):
        max_len = len(max(arr, key=len))
        keys = [str(i) for i in range(1, max_len - 1)]
        return keys


main_dict = ObjCreator()
common_word_dict = ObjCreator()

main_dict_objs = main_dict.create_objs_from_json('./dict.json')
common_objs = common_word_dict.create_objs_from_json('./common.json')


def get_common_in_main():
    check_dict = {word.kanji: True for word in common_objs}
    common_in_main = [
        word for word in main_dict_objs if word.kanji in check_dict]
    return common_in_main


common = get_common_in_main()
main_dict.write_objs_to_json('./common_dict.json', common)
