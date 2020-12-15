list = [1, 3, "5", 7, "3", "4"]


def filter_list():
    for i in list:
        if type(i) == str:
            list.remove(i)
    print(list)


filter_list()
