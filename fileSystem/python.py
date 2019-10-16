with open('app.log','w', encoding='utf-8') as f:
    f.write('my first file\nthis file\ncontains three lines\n')

with open('app.log', 'r', encoding='utf-8') as f:
    content = f.readlines()

for line in content:
    print(line)

with open('app.log', 'r', encoding='utf-8') as f:
    print(f.read())
