import json


class Struct:
    def __init__(self):
        pass


class ObjCreator:
    def __init__(self, keys_to_skip, base_obj=Struct):
        self.base_obj = base_obj
        self.dict_objects = []
        self.keys_to_skip = keys_to_skip

    def create_objs_from_file(self, input_file):
        with open(input_file, 'r', encoding="utf-8") as f:
            data = json.load(f)

        for line in data:
            obj = self.base_obj()
            for key, value in line.items():
                if key in self.keys_to_skip:
                    continue
                obj.__setattr__(key, value)
            self.dict_objects.append(obj)

    def write_objs_to_file(self, output_file):
        with open(output_file, 'w', encoding="utf-8") as f:
            json.dump(self.dict_objects, fp=f, default=vars, indent=2)


jp_dic = ObjCreator(keys_to_skip=['status_code', 'valid'])

jp_dic.create_objs_from_dict(input_file='./dict_parsed.json')
jp_dic.write_objs_to_file(output_file='./test.json')
