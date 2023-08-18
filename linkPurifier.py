import pyperclip
while True:
    link = input('link: ')
    edit1 = link.replace("controls=0", "")
    edit2 = edit1.replace("&fs=0", "")
    pyperclip.copy(edit2)
