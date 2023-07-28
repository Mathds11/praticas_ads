linha = 5
coluna = 5

n = 1
while n <= linha:
    x = 1
    print()
    print(f'{n}ª linha: ', end='')
    while x <= coluna:
        print( x, end='')
        x += 1
    n += 1


print('\nFim')