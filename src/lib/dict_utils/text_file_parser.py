class TextFileParser:
    def __init__(self):
        self.raw_data = None
        self.parsed_data = [None]

    def load_file(self, input_file):
        with open(input_file, 'r', encoding="UTF-8") as f:
            self.raw_data = [l.strip() for l in f.readlines()]
        return self.raw_data

    def print_file_sample(self, lines=10):
        print(self.raw_data[:lines])

    def split_file(self, method='\t'):
        if self.parsed_data[0] == method:
            return self.parsed_data[1:]

        self.parsed_data[0] = method
        for line in self.raw_data:
            self.parsed_data.append(line.split(method))
        return self.parsed_data[1:]
