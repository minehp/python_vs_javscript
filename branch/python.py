while True:
    answer = int(input('Please insert random number between (-1 to 10): '))
    if answer==0:
        print('it is zero number')
    elif answer<4 and answer>0:
        print('it is small number')
    elif answer>=4 and answer<=7:
        print('it is medium number')
    elif answer>7 and answer<=10:
        print('it is big number')
    else:
        print('the number out of range')
